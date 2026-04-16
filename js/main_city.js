// ============================================
// ФУНКЦИЯ: Карусель с transform-based drag & drop (как в первой версии)
// ============================================

function initCarousel(carouselElement) {
    const track = carouselElement.querySelector('.carousel__track');
    const wrapper = carouselElement.querySelector('.carousel__wrapper');

    if (!track || !wrapper) return;

    // Переменные для управления слайдером (как в первой версии)
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let hasMoved = false;
    let startTime = 0;
    let velocity = 0;
    let lastPos = 0;
    let lastTime = 0;

    // Настройки анимации
    const ANIMATION_SPEED = 300; // ms
    const DRAG_THRESHOLD = 5; // px

    // Инициализация
    function init() {
        // Убираем нативный scroll
        track.style.overflow = 'visible';
        track.style.scrollSnapType = 'none';

        // Добавляем wrapper для overflow
        wrapper.style.overflow = 'hidden';

        // Устанавливаем начальную позицию
        setTrackPosition();

        // Добавляем обработчики событий
        addEventListeners();
    }

    // Установка позиции трека
    function setTrackPosition(animate = false) {
        track.classList.toggle('t-slds_animated', animate);
        track.style.transform = `translateX(${currentTranslate}px)`;

        if (animate) {
            setTimeout(() => {
                track.classList.remove('t-slds_animated');
            }, ANIMATION_SPEED);
        }
    }

    // Получение позиции курсора/тача
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    // Начало перетаскивания
    function dragStart(event) {
        // Игнорируем правую кнопку мыши
        if (event.type === 'mousedown' && event.button !== 0) return;

        isDragging = true;
        hasMoved = false;
        startPos = getPositionX(event);
        prevTranslate = currentTranslate;
        startTime = Date.now();
        lastPos = startPos;
        lastTime = startTime;
        velocity = 0;

        // Останавливаем текущую анимацию
        cancelAnimationFrame(animationID);

        track.classList.add('grabbing');
        track.style.cursor = 'grabbing';
    }

    // Процесс перетаскивания
    function drag(event) {
        if (!isDragging) return;

        const currentPosition = getPositionX(event);
        const currentTime = Date.now();
        const deltaX = Math.abs(currentPosition - startPos);

        // Рассчитываем скорость для инерции
        const deltaTime = currentTime - lastTime;
        if (deltaTime > 0) {
            const deltaPos = currentPosition - lastPos;
            velocity = deltaPos / deltaTime;
            lastPos = currentPosition;
            lastTime = currentTime;
        }

        // Определяем drag только если движение превысило порог
        if (deltaX > DRAG_THRESHOLD) {
            hasMoved = true;

            // Предотвращаем скролл страницы на мобильных
            if (event.type === 'touchmove' && event.cancelable) {
                event.preventDefault();
            }

            currentTranslate = prevTranslate + currentPosition - startPos;

            // Ограничиваем прокрутку границами
            const maxTranslate = 0;
            const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);

            // Добавляем resistance на границах
            if (currentTranslate > maxTranslate) {
                currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.3;
            } else if (currentTranslate < minTranslate) {
                currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.3;
            }

            setTrackPosition(false);
        }
    }

    // Окончание перетаскивания
    function dragEnd(event) {
        if (!isDragging) return;

        const endTime = Date.now();
        const timeDiff = endTime - startTime;

        isDragging = false;
        track.classList.remove('grabbing');
        track.style.cursor = 'grab';

        // Если было быстрое движение на малое расстояние - это клик
        if (timeDiff < 150 && !hasMoved) {
            hasMoved = false;
            return;
        }

        // Применяем инерцию
        if (hasMoved && Math.abs(velocity) > 0.1) {
            const inertia = velocity * 200; // Множитель для силы инерции
            let targetTranslate = currentTranslate + inertia;

            // Ограничиваем целевую позицию границами
            const maxTranslate = 0;
            const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);
            targetTranslate = Math.max(minTranslate, Math.min(maxTranslate, targetTranslate));

            // Анимируем до целевой позиции
            animateToPosition(targetTranslate);
        } else {
            // Возвращаем в границы если вышли за них
            snapToBounds();
        }

        // Сбрасываем флаг с задержкой
        if (hasMoved) {
            setTimeout(() => {
                hasMoved = false;
            }, 50);
        }
    }

    // Анимация до целевой позиции
    function animateToPosition(targetTranslate) {
        const startTranslate = currentTranslate;
        const distance = targetTranslate - startTranslate;
        const animationStartTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - animationStartTime;
            const progress = Math.min(elapsed / ANIMATION_SPEED, 1);

            // Easing function (easeOutCubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            currentTranslate = startTranslate + distance * easeProgress;
            setTrackPosition(false);

            if (progress < 1) {
                animationID = requestAnimationFrame(animate);
            } else {
                snapToBounds();
            }
        }

        animationID = requestAnimationFrame(animate);
    }

    // Возврат в границы
    function snapToBounds() {
        const maxTranslate = 0;
        const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);

        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
            setTrackPosition(true);
        } else if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            setTrackPosition(true);
        }
    }

    // Блокировка кликов при драге
    function preventClick(event) {
        if (hasMoved) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }
    }

    // Клавиатурная навигация
    function handleKeyboard(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            const targetTranslate = currentTranslate + 400;
            const maxTranslate = 0;
            currentTranslate = Math.min(targetTranslate, maxTranslate);
            setTrackPosition(true);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            const targetTranslate = currentTranslate - 400;
            const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);
            currentTranslate = Math.max(targetTranslate, minTranslate);
            setTrackPosition(true);
        }
    }

    // Обработка изменения размера окна
    function handleResize() {
        // Корректируем позицию при ресайзе
        const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            setTrackPosition(false);
        }
    }

    // Добавление всех обработчиков
    function addEventListeners() {
        // Mouse events
        track.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        // Touch events
        track.addEventListener('touchstart', dragStart, { passive: true });
        track.addEventListener('touchmove', drag, { passive: false });
        track.addEventListener('touchend', dragEnd);

        // Блокировка кликов
        track.addEventListener('click', preventClick, true);

        const cardLinks = track.querySelectorAll('.attractionCard__link');
        cardLinks.forEach(link => {
            link.addEventListener('click', preventClick, true);
            link.addEventListener('dragstart', (e) => e.preventDefault());
        });

        // Предотвращение drag для изображений
        track.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });

        // Клавиатура
        track.setAttribute('tabindex', '0');
        track.addEventListener('keydown', handleKeyboard);

        // Resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 150);
        });

        // Предотвращение выделения текста
        track.addEventListener('selectstart', (e) => {
            if (hasMoved) e.preventDefault();
        });
    }

    // Запуск инициализации
    init();
}


// ============================================
// ФУНКЦИЯ: Создание подсказки для карусели
// ============================================
function createScrollHint() {
    const svgContent = `
        <svg viewBox="0 0 320 300" height="42" width="42">
            <rect class="scroll-hint-card" x="480" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect>
            <rect class="scroll-hint-card" y="0" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect>
            <rect class="scroll-hint-card" x="240" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect>
            <path class="scroll-hint-hand" d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z" fill="rgba(190,190,190,1)"></path>
        </svg>
    `;

    // Desktop подсказка
    const desktopHint = document.createElement('div');
    desktopHint.className = 'carousel__scrollHint';
    desktopHint.setAttribute('aria-hidden', 'true');
    desktopHint.innerHTML = svgContent;

    // Mobile подсказка
    const mobileHint = document.createElement('div');
    mobileHint.className = 'carousel__scrollHint carousel__scrollHint--mobile';
    mobileHint.setAttribute('aria-hidden', 'true');
    mobileHint.innerHTML = svgContent;

    return { desktopHint, mobileHint };
}


// ============================================
// КЛАСС: Рендеринг карточек
// ============================================
class CardRenderer {
    constructor(data) {
        this.data = data;
    }

    renderCards() {
        // Динамически рендерим все категории из данных
        Object.keys(this.data).forEach(category => {
            this.renderCategory(category, this.data[category]);
        });
    }

    renderCategory(category, items) {
        const track = document.querySelector(`.carousel__track[data-category="${category}"]`);
        if (!track || !items) return;

        track.innerHTML = '';

        items.forEach(item => {
            // Проверяем наличие модального контента
            if (!item.modalContent) {
                console.warn(`Элемент ${item.id} не имеет модального контента`);
            }

            const cardHTML = this.createCardHTML(item);
            track.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    createCardHTML(item) {
        return `
            <article class="carousel__item">
                <div class="attractionCard">
                    <div class="attractionCard__link" data-modal="${item.id}">
                        <div class="attractionCard__imageWrapper">
                            <img src="${item.image}" alt="${item.title}" class="attractionCard__image" loading="lazy">
                        </div>
                        <div class="attractionCard__content">
                            <div class="attractionCard__contentInner">
                                <h3 class="attractionCard__title">${item.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
}


// ============================================
// КЛАСС: Управление модальными окнами
// ============================================
class ModalManager {
    constructor(data) {
        this.data = data;
        this.modal = document.getElementById('attractionModal');
        this.closeButton = this.modal.querySelector('.modal__close');
        this.modalContent = document.getElementById('modalContent');
        this.init();
    }

    init() {
        // Клик по карточке
        document.addEventListener('click', (e) => {
            const cardLink = e.target.closest('.attractionCard__link');

            if (cardLink) {
                const track = cardLink.closest('.carousel__track');

                if (track && track.classList.contains('grabbing')) {
                    return;
                }

                setTimeout(() => {
                    // Проверяем track.hasMoved который устанавливается в карусели
                    const trackElement = cardLink.closest('.carousel__track');
                    if (!trackElement || !trackElement.hasMoved) {
                        e.preventDefault();
                        const modalId = cardLink.dataset.modal;
                        if (modalId) {
                            this.openModal(modalId);
                        }
                    }
                }, 10);
            }
        });

        // Закрытие по кнопке
        this.closeButton.addEventListener('click', () => this.closeModal());

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    findItemById(id) {
        // Динамически собираем все элементы из всех категорий
        const allItems = Object.values(this.data).flat();
        return allItems.find(item => item.id === id);
    }

    openModal(id) {
        const item = this.findItemById(id);
        if (!item) {
            console.error('Элемент не найден:', id);
            return;
        }

        // Показываем модальное окно
        this.modal.classList.add('active');
        document.body.classList.add('modalOpen');

        // Загружаем контент
        this.loadModalContent(item);

        // Сбрасываем скролл
        this.modalContent.scrollTop = 0;
    }

    loadModalContent(item) {
        try {
            // Показываем loader
            this.modalContent.innerHTML = `
                <div class="modal__loader">
                    <div class="loader"></div>
                    <p>Загрузка...</p>
                </div>
            `;

            // Небольшая задержка для плавности
            setTimeout(() => {
                if (item.modalContent) {
                    // Используем HTML из данных
                    this.modalContent.innerHTML = item.modalContent;
                } else {
                    // Если нет контента - показываем простое сообщение
                    this.showNoContentMessage(item);
                }
            }, 50);

        } catch (error) {
            console.error('Ошибка загрузки модального окна:', error);
            this.modalContent.innerHTML = `
                <div class="modal__loader">
                    <p style="color: #cc0000;">Ошибка загрузки контента</p>
                    <p style="font-size: 14px; color: #666;">Попробуйте позже</p>
                </div>
            `;
        }
    }

    showNoContentMessage(item) {
        this.modalContent.innerHTML = `
            <div class="modalHeader">
                <h1 class="modalHeader__title">${item.title}</h1>
            </div>
        `;
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.classList.remove('modalOpen');
    }
}


// ============================================
// КЛАСС: Управление изображениями
// ============================================

class ImageLoader {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('load', (e) => {
            if (e.target.tagName === 'IMG' && e.target.classList.contains('attractionCard__image')) {
                e.target.style.opacity = '1';
            }
        }, true);

        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG' && e.target.classList.contains('attractionCard__image')) {
                e.target.style.backgroundColor = '#cccccc';
                e.target.alt = 'Изображение недоступно';
            }
        }, true);
    }
}


// ============================================
// ФУНКЦИЯ: Автоопределение данных города
// ============================================

function getCityData() {
    const dataVariables = Object.keys(window).filter(key =>
        key.endsWith('Data') &&
        typeof window[key] === 'object' &&
        window[key] !== null
    );

    if (dataVariables.length === 0) {
        console.error('Не найдена переменная с данными города (должна заканчиваться на "Data")');
        return null;
    }

    if (dataVariables.length > 1) {
        console.warn('Найдено несколько переменных с данными:', dataVariables);
    }

    const dataVarName = dataVariables[0];
    console.log(`Используются данные из переменной: ${dataVarName}`);

    return window[dataVarName];
}


// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Автоматически определяем данные города
    const cityData = getCityData();

    if (!cityData) {
        console.error('Данные города не загружены!');
        return;
    }

    const cardRenderer = new CardRenderer(cityData);
    cardRenderer.renderCards();

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        // Добавляем подсказки перед wrapper
        const wrapper = carousel.querySelector('.carousel__wrapper');
        if (wrapper) {
            const { desktopHint, mobileHint } = createScrollHint();
            wrapper.parentNode.insertBefore(desktopHint, wrapper);
            wrapper.parentNode.insertBefore(mobileHint, wrapper);
        }

        initCarousel(carousel);
    });

    new ModalManager(cityData);
    new ImageLoader();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});