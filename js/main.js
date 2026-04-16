// ============================================
// ФУНКЦИЯ: Карусель путеводителей (Transform-based)
// ============================================
function initGuidesSlider() {
    const sliderWrapper = document.querySelector('.guides-slider-wrapper');
    const slider = document.querySelector('.guides-slider');

    if (!slider || !sliderWrapper) return;

    // Переменные для управления слайдером
    let currentOffset = 0;
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
        slider.style.overflow = 'visible';
        slider.style.scrollSnapType = 'none';

        // Добавляем wrapper для overflow
        sliderWrapper.style.overflow = 'hidden';

        // Устанавливаем начальную позицию
        setSliderPosition();

        // Добавляем обработчики событий
        addEventListeners();
    }

    // Установка позиции слайдера
    function setSliderPosition(animate = false) {
        slider.classList.toggle('t-slds_animated', animate);
        slider.style.transform = `translateX(${currentTranslate}px)`;

        if (animate) {
            setTimeout(() => {
                slider.classList.remove('t-slds_animated');
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

        slider.classList.add('grabbing');
        slider.style.cursor = 'grabbing';
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

            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;

            // Ограничиваем прокрутку границами
            const maxTranslate = 0;
            const minTranslate = -(slider.scrollWidth - sliderWrapper.offsetWidth);

            // Добавляем resistance на границах
            if (currentTranslate > maxTranslate) {
                currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.3;
            } else if (currentTranslate < minTranslate) {
                currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.3;
            }

            setSliderPosition(false);
        }
    }

    // Окончание перетаскивания
    function dragEnd(event) {
        if (!isDragging) return;

        const endTime = Date.now();
        const timeDiff = endTime - startTime;

        isDragging = false;
        slider.classList.remove('grabbing');
        slider.style.cursor = 'grab';

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
            const minTranslate = -(slider.scrollWidth - sliderWrapper.offsetWidth);
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
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ANIMATION_SPEED, 1);

            // Easing function (easeOutCubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            currentTranslate = startTranslate + distance * easeProgress;
            setSliderPosition(false);

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
        const minTranslate = -(slider.scrollWidth - sliderWrapper.offsetWidth);

        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
            setSliderPosition(true);
        } else if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            setSliderPosition(true);
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
            setSliderPosition(true);
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            const targetTranslate = currentTranslate - 400;
            const minTranslate = -(slider.scrollWidth - sliderWrapper.offsetWidth);
            currentTranslate = Math.max(targetTranslate, minTranslate);
            setSliderPosition(true);
        }
    }

    // Обработка изменения размера окна
    function handleResize() {
        // Корректируем позицию при ресайзе
        const minTranslate = -(slider.scrollWidth - sliderWrapper.offsetWidth);
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            setSliderPosition(false);
        }
    }

    // Добавление всех обработчиков
    function addEventListeners() {
        // Mouse events
        slider.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        // Touch events
        slider.addEventListener('touchstart', dragStart, { passive: true });
        slider.addEventListener('touchmove', drag, { passive: false });
        slider.addEventListener('touchend', dragEnd);

        // Блокировка кликов
        slider.addEventListener('click', preventClick, true);

        const cardLinks = slider.querySelectorAll('.card-link');
        cardLinks.forEach(link => {
            link.addEventListener('click', preventClick, true);
            link.addEventListener('dragstart', (e) => e.preventDefault());
        });

        // Предотвращение drag для изображений
        slider.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });

        // Клавиатура
        slider.setAttribute('tabindex', '0');
        slider.addEventListener('keydown', handleKeyboard);

        // Resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 150);
        });

        // Предотвращение выделения текста
        slider.addEventListener('selectstart', (e) => {
            if (hasMoved) e.preventDefault();
        });
    }

    // Запуск инициализации
    init();
}

// ============================================
// КЛАСС: Анимация при скролле
// ============================================
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.guide-card, .intro-section, .section-title');
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) {
            this.elements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ============================================
// КЛАСС: Управление изображениями
// ============================================
class ImageLoader {
    constructor() {
        this.images = document.querySelectorAll('.card-image');
        this.init();
    }

    init() {
        this.images.forEach(img => {
            img.style.backgroundColor = '#e0e0e0';

            img.addEventListener('load', () => {
                img.style.opacity = '1';
            }, { once: true });

            img.addEventListener('error', () => {
                img.style.backgroundColor = '#cccccc';
                img.alt = 'Изображение недоступно';
                console.warn('Не удалось загрузить изображение:', img.src);
            }, { once: true });
        });
    }
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ============================================
class App {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initComponents());
        } else {
            this.initComponents();
        }
    }

    initComponents() {
        try {
            initGuidesSlider();
            this.scrollAnimations = new ScrollAnimations();
            this.imageLoader = new ImageLoader();
            this.initSmoothScroll();
        } catch (error) {
            console.error('Ошибка инициализации:', error);
        }
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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
    }
}

const app = new App();