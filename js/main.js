// ============================================
// 1. ДАННЫЕ ДЛЯ ВСЕХ ЯЗЫКОВ
// ============================================
const languageData = {
    ru: {
        introTitle: "Путеводитель по городам России",
        introSubtitle: "Откройте для себя удивительные места нашей страны",
        introText: "Исследуйте культурное и природное богатство российских регионов. Готовые маршруты по ключевым городам и регионам — идеальные для полноценного отпуска. Каждая локация представлена с подробным описанием для удобного планирования вашего путешествия.",
        regionsTitle: "Регионы",
        citiesTitle: "Города",
        buttonText: "Изучить →",
        regions: [

            { title: "Московская область", link: "city/moscow_region/index_ru.html", img: "img/main_page/cards/moscow_region.jpg" },
            { title: "Ленинградская область", link: "city/leningragskaya_oblast/index_ru.html", img: "img/main_page/cards/leningragskaya_oblast.jpg" },
            { title: "Краснодарский край", link: "city/krasnodarskii_krai/index_ru.html", img: "img/main_page/cards/krasnodarskii_krai.jpg" },
            { title: "Калининградская область", link: "city/kalinigradskaya_oblast/index_ru.html", img: "img/main_page/cards/kalinigradskaya_oblast.jpg" },
            { title: "Красноярский край", link: "city/krasnoyarsk/index_ru.html", img: "img/main_page/cards/krasnoyarsk.jpg" },
            { title: "Приморский край", link: "city/primorsk/index_ru.html", img: "img/main_page/cards/primorsk.jpg" },
            { title: "Камчатский край", link: "city/kamchatka/index_ru.html", img: "img/main_page/cards/kamchatka.jpg" },
            { title: "Сахалинская область", link: "city/sahalin/index_ru.html", img: "img/main_page/cards/sahalin.jpg" },
            { title: "Республика Алтай", link: "city/altai/index_ru.html", img: "img/main_page/cards/altai.jpg" },
            { title: "Мурманская область", link: "city/murmansk/index_ru.html", img: "img/main_page/cards/murmansk.jpg" },
            { title: "Иркутская область", link: "city/irkutsk/index_ru.html", img: "img/main_page/cards/ircutsk.jpg" },
            { title: "Республика Татарстан", link: "city/tatarstan/index_ru.html", img: "img/main_page/cards/tatarstan.jpg" },
            { title: "Ставропольский край", link: "city/stavropol/index_ru.html", img: "img/main_page/cards/stavropol.jpg" },
            { title: "Самарская область", link: "city/samara/index_ru.html", img: "img/main_page/cards/samara.jpg" }

        ],
        cities: [

            { title: "Москва", link: "city/moscow/index_ru.html", img: "img/main_page/cards/moskow.jpg" },
            { title: "Санкт-Петербург", link: "city/stpetersburg/index_ru.html", img: "img/main_page/cards/petersburg.jpg" },
            { title: "Сочи", link: "city/sochi/index_ru.html", img: "img/main_page/cards/sochi.jpg" }

        ]
    },

    // =======================================АНГЛИЙСКИЙ===============================================================
    en: {
        introTitle: "Russia City Guide",
        introSubtitle: "Discover amazing places in our country",
        introText: "Explore the cultural and natural wealth of Russian regions. Ready-made routes through key cities and regions, perfect for a full-fledged vacation. Each location comes with a detailed description for easy travel planning.",
        regionsTitle: "Regions",
        citiesTitle: "Cities",
        buttonText: "Explore →",
        regions: [

            { title: "Moscow Oblast", link: "city/moscow_region/index_en.html", img: "img/main_page/cards/moscow_region.jpg" },
            { title: "Leningrad Oblast", link: "city/leningragskaya_oblast/index_en.html", img: "img/main_page/cards/leningragskaya_oblast.jpg" },
            { title: "Krasnodar Region", link: "city/krasnodarskii_krai/index_en.html", img: "img/main_page/cards/krasnodarskii_krai.jpg" },
            { title: "Kaliningrad Oblast", link: "city/kalinigradskaya_oblast/index_en.html", img: "img/main_page/cards/kalinigradskaya_oblast.jpg" },
            { title: "Krasnoyarsk Region", link: "city/krasnoyarsk/index_en.html", img: "img/main_page/cards/krasnoyarsk.jpg" },
            { title: "Primorsky Region", link: "city/primorsk/index_en.html", img: "img/main_page/cards/primorsk.jpg" },
            { title: "Kamchatka Region", link: "city/kamchatka/index_en.html", img: "img/main_page/cards/kamchatka.jpg" },
            { title: "Sakhalin Region", link: "city/sahalin/index_en.html", img: "img/main_page/cards/sahalin.jpg" },
            { title: "Altai Republic", link: "city/altai/index_en.html", img: "img/main_page/cards/altai.jpg" },
            { title: "Murmansk Region", link: "city/murmansk/index_en.html", img: "img/main_page/cards/murmansk.jpg" },
            { title: "Irkutsk Region", link: "city/irkutsk/index_en.html", img: "img/main_page/cards/ircutsk.jpg" },
            { title: "Republic of Tatarstan", link: "city/tatarstan/index_en.html", img: "img/main_page/cards/tatarstan.jpg" },
            { title: "Stavropol Region", link: "city/stavropol/index_en.html", img: "img/main_page/cards/stavropol.jpg" },
            { title: "Samara Region", link: "city/samara/index_en.html", img: "img/main_page/cards/samara.jpg" }

        ],
        cities: [

            { title: "Moscow", link: "city/moscow/index_en.html", img: "img/main_page/cards/moskow.jpg" },
            { title: "Saint Petersburg", link: "city/stpetersburg/index_en.html", img: "img/main_page/cards/petersburg.jpg" },
            { title: "Sochi", link: "city/sochi/index_en.html", img: "img/main_page/cards/sochi.jpg" }
        ]
    },

    // =======================================КИТАЙСКИЙ===============================================================
    zh: {
        introTitle: "俄罗斯城市旅行指南",
        introSubtitle: "邂逅这片神奇大地",
        introText: "探索俄罗斯各地区交织如画的文化瑰宝与自然奇观。我们为您精心规划了贯穿核心城市与地区的完整旅程路线，是您理想假期的完美之选。每个目的地均附有详尽介绍，助您轻松规划属于自己的旅行。",
        regionsTitle: "地區",
        citiesTitle: "城市",
        buttonText: "探索更多 →",
        regions: [
            { title: "", link: "city/moscow_region/index_zh.html", img: "img/main_page/cards/moscow_region.jpg" },
            { title: "", link: "city/leningragskaya_oblast/index_zh.html", img: "img/main_page/cards/leningragskaya_oblast.jpg" },
            { title: "", link: "city/krasnodarskii_krai/index_zh.html", img: "img/main_page/cards/krasnodarskii_krai.jpg" },
            { title: "", link: "city/kalinigradskaya_oblast/index_zh.html", img: "img/main_page/cards/kalinigradskaya_oblast.jpg" },
            { title: "克拉斯诺亚尔斯克边疆区", link: "city/krasnoyarsk/index_zh.html", img: "img/main_page/cards/krasnoyarsk.jpg" },
            { title: "滨海边疆区", link: "city/primorsk/index_zh.html", img: "img/main_page/cards/primorsk.jpg" },
            { title: "堪察加边疆区", link: "city/kamchatka/index_zh.html", img: "img/main_page/cards/kamchatka.jpg" },
            { title: "萨哈林州", link: "city/sahalin/index_zh.html", img: "img/main_page/cards/sahalin.jpg" },
            { title: "阿尔泰共和国", link: "city/altai/index_zh.html", img: "img/main_page/cards/altai.jpg" },
            { title: "摩尔曼斯克州", link: "city/murmansk/index_zh.html", img: "img/main_page/cards/murmansk.jpg" },
            { title: "伊尔库茨克州", link: "city/irkutsk/index_zh.html", img: "img/main_page/cards/ircutsk.jpg" },
            { title: "鞑靼斯坦共和国", link: "city/tatarstan/index_zh.html", img: "img/main_page/cards/tatarstan.jpg" },
            { title: "斯塔夫罗波尔边疆区", link: "city/stavropol/index_zh.html", img: "img/main_page/cards/stavropol.jpg" },
            { title: "萨马拉州", link: "city/samara/index_zh.html", img: "img/main_page/cards/samara.jpg" }
        ],
        cities: [

            { title: "莫斯科", link: "city/moscow/index_zh.html", img: "img/main_page/cards/moskow.jpg" },
            { title: "圣彼得堡", link: "city/stpetersburg/index_zh.html", img: "img/main_page/cards/petersburg.jpg" },
            { title: "索契", link: "city/sochi/index_zh.html", img: "img/main_page/cards/sochi.jpg" }
        ]
    }
};

// ============================================
// 2. УНИВЕРСАЛЬНЫЙ СЛАЙДЕР
// ============================================
class Slider {
    constructor(wrapperElement, sliderElement, options = {}) {
        this.wrapper = wrapperElement;
        this.slider = sliderElement;
        this.options = {
            animationSpeed: 300,
            dragThreshold: 5,
            ...options
        };
        this.currentTranslate = 0;
        this.isDragging = false;
        this.startPos = 0;
        this.prevTranslate = 0;
        this.animationID = 0;
        this.hasMoved = false;
        this.startTime = 0;
        this.velocity = 0;
        this.lastPos = 0;
        this.lastTime = 0;
        this.init();
    }
    init() {
        this.slider.style.overflow = 'visible';
        this.slider.style.scrollSnapType = 'none';
        this.wrapper.style.overflow = 'hidden';
        this.setPosition();
        this.addEventListeners();
    }
    setPosition(animate = false) {
        this.slider.classList.toggle('t-slds_animated', animate);
        this.slider.style.transform = `translateX(${this.currentTranslate}px)`;
        if (animate) setTimeout(() => this.slider.classList.remove('t-slds_animated'), this.options.animationSpeed);
    }
    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
    getBounds() {
        const maxTranslate = 0;
        const minTranslate = -(this.slider.scrollWidth - this.wrapper.offsetWidth);
        return {
            maxTranslate,
            minTranslate
        };
    }
    dragStart(event) {
        if (event.type === 'mousedown' && event.button !== 0) return;
        this.isDragging = true;
        this.hasMoved = false;
        this.startPos = this.getPositionX(event);
        this.prevTranslate = this.currentTranslate;
        this.startTime = Date.now();
        this.lastPos = this.startPos;
        this.lastTime = this.startTime;
        this.velocity = 0;
        cancelAnimationFrame(this.animationID);
        this.slider.classList.add('grabbing');
        this.slider.style.cursor = 'grabbing';
    }
    drag(event) {
        if (!this.isDragging) return;
        const currentPosition = this.getPositionX(event);
        const currentTime = Date.now();
        const deltaX = Math.abs(currentPosition - this.startPos);
        const deltaTime = currentTime - this.lastTime;
        if (deltaTime > 0) {
            const deltaPos = currentPosition - this.lastPos;
            this.velocity = deltaPos / deltaTime;
            this.lastPos = currentPosition;
            this.lastTime = currentTime;
        }
        if (deltaX > this.options.dragThreshold) {
            this.hasMoved = true;
            if (event.type === 'touchmove' && event.cancelable) event.preventDefault();
            let newTranslate = this.prevTranslate + currentPosition - this.startPos;
            const {
                maxTranslate,
                minTranslate
            } = this.getBounds();
            if (newTranslate > maxTranslate) newTranslate = maxTranslate + (newTranslate - maxTranslate) * 0.3;
            else if (newTranslate < minTranslate) newTranslate = minTranslate + (newTranslate - minTranslate) * 0.3;
            this.currentTranslate = newTranslate;
            this.setPosition(false);
        }
    }
    dragEnd() {
        if (!this.isDragging) return;
        const endTime = Date.now();
        const timeDiff = endTime - this.startTime;
        this.isDragging = false;
        this.slider.classList.remove('grabbing');
        this.slider.style.cursor = 'grab';
        if (timeDiff < 150 && !this.hasMoved) {
            this.hasMoved = false;
            return;
        }
        if (this.hasMoved && Math.abs(this.velocity) > 0.1) {
            const inertia = this.velocity * 200;
            let targetTranslate = this.currentTranslate + inertia;
            const {
                maxTranslate,
                minTranslate
            } = this.getBounds();
            targetTranslate = Math.max(minTranslate, Math.min(maxTranslate, targetTranslate));
            this.animateToPosition(targetTranslate);
        } else {
            this.snapToBounds();
        }
        if (this.hasMoved) setTimeout(() => {
            this.hasMoved = false;
        }, 50);
    }
    animateToPosition(targetTranslate) {
        const startTranslate = this.currentTranslate;
        const distance = targetTranslate - startTranslate;
        const startTime = performance.now();
        const duration = this.options.animationSpeed;
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            this.currentTranslate = startTranslate + distance * easeProgress;
            this.setPosition(false);
            if (progress < 1) this.animationID = requestAnimationFrame(animate);
            else this.snapToBounds();
        };
        this.animationID = requestAnimationFrame(animate);
    }
    snapToBounds() {
        const {
            maxTranslate,
            minTranslate
        } = this.getBounds();
        if (this.currentTranslate > maxTranslate) {
            this.currentTranslate = maxTranslate;
            this.setPosition(true);
        } else if (this.currentTranslate < minTranslate) {
            this.currentTranslate = minTranslate;
            this.setPosition(true);
        }
    }
    preventClick(event) {
        if (this.hasMoved) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }
    }
    handleKeyboard(event) {
        const step = 400;
        let newTranslate = this.currentTranslate;
        if (event.key === 'ArrowLeft') newTranslate = this.currentTranslate + step;
        else if (event.key === 'ArrowRight') newTranslate = this.currentTranslate - step;
        else return;
        event.preventDefault();
        const {
            maxTranslate,
            minTranslate
        } = this.getBounds();
        this.currentTranslate = Math.min(maxTranslate, Math.max(minTranslate, newTranslate));
        this.setPosition(true);
    }
    handleResize() {
        const {
            minTranslate
        } = this.getBounds();
        if (this.currentTranslate < minTranslate) {
            this.currentTranslate = minTranslate;
            this.setPosition(false);
        }
    }
    addEventListeners() {
        this.slider.addEventListener('mousedown', this.dragStart.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.dragEnd.bind(this));
        this.slider.addEventListener('touchstart', this.dragStart.bind(this), {
            passive: true
        });
        this.slider.addEventListener('touchmove', this.drag.bind(this), {
            passive: false
        });
        this.slider.addEventListener('touchend', this.dragEnd.bind(this));
        this.slider.addEventListener('click', this.preventClick.bind(this), true);
        this.slider.querySelectorAll('.card-link').forEach(link => {
            link.addEventListener('click', this.preventClick.bind(this), true);
            link.addEventListener('dragstart', (e) => e.preventDefault());
        });
        this.slider.querySelectorAll('img').forEach(img => img.addEventListener('dragstart', (e) => e.preventDefault()));
        this.slider.setAttribute('tabindex', '0');
        this.slider.addEventListener('keydown', this.handleKeyboard.bind(this));
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this.handleResize(), 150);
        });
        this.slider.addEventListener('selectstart', (e) => {
            if (this.hasMoved) e.preventDefault();
        });
    }
}

// ============================================
// 3. ГЕНЕРАЦИЯ КАРТОЧЕК И ЗАГОЛОВКОВ
// ============================================
function renderSlider(containerId, items, buttonText) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'guide-card';
        card.setAttribute('role', 'listitem');
        card.innerHTML = `
      <a href="${item.link}" class="card-link" aria-label="${item.title} - ${buttonText.replace('→', '').trim()}">
        <div class="card-image-wrapper">
          <img src="${item.img}" alt="${item.title}" class="card-image" loading="lazy" width="360" height="480"
               onerror="this.style.backgroundColor='#ccc'; this.alt='Image'">
        </div>
        <div class="card-content">
          <div class="card-content-inner">
            <h3 class="card-title">${escapeHtml(item.title)}</h3>
            <div class="card-button-wrapper">
              <span class="card-button"><span class="button-text">${buttonText}</span></span>
            </div>
          </div>
        </div>
      </a>
    `;
        container.appendChild(card);
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&';
        if (m === '<') return '<';
        if (m === '>') return '>';
        return m;
    });
}

function initApp() {
    const lang = window.currentLang;
    if (!lang || !languageData[lang]) {
        console.error('Язык не определён или данные отсутствуют');
        return;
    }
    const data = languageData[lang];

    // ---- ПЕРЕВОД БЛОКА ОПИСАНИЯ ----
    const introTitle = document.querySelector('.intro-title');
    const introSubtitle = document.querySelector('.intro-subtitle');
    const introText = document.querySelector('.intro-text');
    if (introTitle) introTitle.textContent = data.introTitle;
    if (introSubtitle) introSubtitle.textContent = data.introSubtitle;
    if (introText) introText.textContent = data.introText;

    // ---- ЗАГОЛОВКИ СЕКЦИЙ ----
    const regionsTitleElem = document.querySelector('.guides-section .section-title');
    if (regionsTitleElem) regionsTitleElem.textContent = data.regionsTitle;
    const citiesTitleElem = document.querySelector('.cities-section .section-title');
    if (citiesTitleElem) citiesTitleElem.textContent = data.citiesTitle;

    // ---- ГЕНЕРАЦИЯ КАРТОЧЕК ----
    renderSlider('regionsSlider', data.regions, data.buttonText);
    renderSlider('citiesSlider', data.cities, data.buttonText);

    // ---- ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРОВ ----
    initSliders();
}

function initSliders() {
    const regionsWrapper = document.getElementById('regionsSliderWrapper');
    const regionsSlider = document.getElementById('regionsSlider');
    if (regionsWrapper && regionsSlider) new Slider(regionsWrapper, regionsSlider);

    const citiesWrapper = document.getElementById('citiesSliderWrapper');
    const citiesSlider = document.getElementById('citiesSlider');
    if (citiesWrapper && citiesSlider) new Slider(citiesWrapper, citiesSlider);
}

// Запуск приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);