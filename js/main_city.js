function initCarousel(carouselElement) {
    const track = carouselElement.querySelector('.carousel__track');
    const wrapper = carouselElement.querySelector('.carousel__wrapper');

    if (!track || !wrapper) return;

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


    const ANIMATION_SPEED = 300;
    const DRAG_THRESHOLD = 5;

    function init() {

        track.style.overflow = 'visible';
        track.style.scrollSnapType = 'none';
        wrapper.style.overflow = 'hidden';
        setTrackPosition();
        addEventListeners();
    }

    function setTrackPosition(animate = false) {
        track.classList.toggle('t-slds_animated', animate);
        track.style.transform = `translateX(${currentTranslate}px)`;

        if (animate) {
            setTimeout(() => {
                track.classList.remove('t-slds_animated');
            }, ANIMATION_SPEED);
        }
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function dragStart(event) {
        if (event.type === 'mousedown' && event.button !== 0) return;

        isDragging = true;
        hasMoved = false;
        startPos = getPositionX(event);
        prevTranslate = currentTranslate;
        startTime = Date.now();
        lastPos = startPos;
        lastTime = startTime;
        velocity = 0;

        cancelAnimationFrame(animationID);

        track.classList.add('grabbing');
        track.style.cursor = 'grabbing';
    }

    function drag(event) {
        if (!isDragging) return;

        const currentPosition = getPositionX(event);
        const currentTime = Date.now();
        const deltaX = Math.abs(currentPosition - startPos);

        const deltaTime = currentTime - lastTime;
        if (deltaTime > 0) {
            const deltaPos = currentPosition - lastPos;
            velocity = deltaPos / deltaTime;
            lastPos = currentPosition;
            lastTime = currentTime;
        }

        if (deltaX > DRAG_THRESHOLD) {
            hasMoved = true;

            if (event.type === 'touchmove' && event.cancelable) {
                event.preventDefault();
            }

            currentTranslate = prevTranslate + currentPosition - startPos;

            const maxTranslate = 0;
            const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);

            if (currentTranslate > maxTranslate) {
                currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.3;
            } else if (currentTranslate < minTranslate) {
                currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.3;
            }

            setTrackPosition(false);
        }
    }

    function dragEnd(event) {
        if (!isDragging) return;

        const endTime = Date.now();
        const timeDiff = endTime - startTime;

        isDragging = false;
        track.classList.remove('grabbing');
        track.style.cursor = 'grab';

        if (timeDiff < 150 && !hasMoved) {
            hasMoved = false;
            return;
        }

        if (hasMoved && Math.abs(velocity) > 0.1) {
            const inertia = velocity * 200;
            let targetTranslate = currentTranslate + inertia;

            const maxTranslate = 0;
            const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);
            targetTranslate = Math.max(minTranslate, Math.min(maxTranslate, targetTranslate));

            animateToPosition(targetTranslate);
        } else {
            snapToBounds();
        }

        if (hasMoved) {
            setTimeout(() => {
                hasMoved = false;
            }, 50);
        }
    }

    function animateToPosition(targetTranslate) {
        const startTranslate = currentTranslate;
        const distance = targetTranslate - startTranslate;
        const animationStartTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - animationStartTime;
            const progress = Math.min(elapsed / ANIMATION_SPEED, 1);

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

    function preventClick(event) {
        if (hasMoved) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }
    }

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

    function handleResize() {
        const minTranslate = -(track.scrollWidth - wrapper.offsetWidth);
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            setTrackPosition(false);
        }
    }

    function addEventListeners() {
        track.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        track.addEventListener('touchstart', dragStart, { passive: true });
        track.addEventListener('touchmove', drag, { passive: false });
        track.addEventListener('touchend', dragEnd);

        track.addEventListener('click', preventClick, true);

        const cardLinks = track.querySelectorAll('.attractionCard__link');
        cardLinks.forEach(link => {
            link.addEventListener('click', preventClick, true);
            link.addEventListener('dragstart', (e) => e.preventDefault());
        });

        track.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', (e) => e.preventDefault());
        });

        track.setAttribute('tabindex', '0');
        track.addEventListener('keydown', handleKeyboard);

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 150);
        });

        track.addEventListener('selectstart', (e) => {
            if (hasMoved) e.preventDefault();
        });
    }

    init();
}



function createScrollHint() {
    const svgContent = `
        <svg viewBox="0 0 320 300" height="42" width="42">
            <rect class="scroll-hint-card" x="480" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect>
            <rect class="scroll-hint-card" y="0" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect>
            <rect class="scroll-hint-card" x="240" width="200" height="200" rx="5" fill="rgba(190,190,190,0.3)"></rect>
            <path class="scroll-hint-hand" d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z" fill="rgba(190,190,190,1)"></path>
        </svg>
    `;

    const desktopHint = document.createElement('div');
    desktopHint.className = 'carousel__scrollHint';
    desktopHint.setAttribute('aria-hidden', 'true');
    desktopHint.innerHTML = svgContent;

    const mobileHint = document.createElement('div');
    mobileHint.className = 'carousel__scrollHint carousel__scrollHint--mobile';
    mobileHint.setAttribute('aria-hidden', 'true');
    mobileHint.innerHTML = svgContent;

    return { desktopHint, mobileHint };
}


class CardRenderer {
    constructor(data) {
        this.data = data;
    }

    renderCards() {
        Object.keys(this.data).forEach(category => {
            this.renderCategory(category, this.data[category]);
        });
    }

    renderCategory(category, items) {
        const track = document.querySelector(`.carousel__track[data-category="${category}"]`);
        if (!track || !items) return;

        track.innerHTML = '';

        items.forEach(item => {

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


class ModalManager {
    constructor(data) {
        this.data = data;
        this.modal = document.getElementById('attractionModal');
        this.closeButton = this.modal.querySelector('.modal__close');
        this.modalContent = document.getElementById('modalContent');
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            const cardLink = e.target.closest('.attractionCard__link');

            if (cardLink) {
                const track = cardLink.closest('.carousel__track');

                if (track && track.classList.contains('grabbing')) {
                    return;
                }

                setTimeout(() => {
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

        this.closeButton.addEventListener('click', () => this.closeModal());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    findItemById(id) {
        const allItems = Object.values(this.data).flat();
        return allItems.find(item => item.id === id);
    }

    openModal(id) {
        const item = this.findItemById(id);
        if (!item) {
            console.error('Элемент не найден:', id);
            return;
        }

        this.modal.classList.add('active');
        document.body.classList.add('modalOpen');

        this.loadModalContent(item);

        this.modalContent.scrollTop = 0;
    }

    loadModalContent(item) {
        try {
            this.modalContent.innerHTML = `
                <div class="modal__loader">
                    <div class="loader"></div>
                    <p>Загрузка...</p>
                </div>
            `;

            setTimeout(() => {
                if (item.modalContent) {
                    this.modalContent.innerHTML = item.modalContent;
                } else {
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


document.addEventListener('DOMContentLoaded', () => {
    const cityData = getCityData();

    if (!cityData) {
        console.error('Данные города не загружены!');
        return;
    }

    const cardRenderer = new CardRenderer(cityData);
    cardRenderer.renderCards();

    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
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