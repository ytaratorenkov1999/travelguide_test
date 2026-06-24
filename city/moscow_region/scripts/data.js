// ============================================
// ДАННЫЕ КАРТОЧЕК МОСКОВСКОЙ ОБЛАСТИ
// ============================================

const Moscow_regionData = {

// ============================================
// ТОЧКИ ПРИТЯЖЕНИЯ РЕГИОНОВ
// ============================================

    attractions: [

        {
            id: '1',
            title: 'Исторические города и малые столицы',
            image: '../../img/moscow_region/cards_tochki/Mos_Istoricheskie_goroda_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Исторические города и малые столицы</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Исторические города и малые столицы Подмосковья — сердце Древней Руси рядом со столицей страны</h2>
      <p class="modalBlock__description">
         Московская область — это не только пригороды мегаполиса.
      </p>
      <p class="modalBlock__description">
         Это сеть древних городов, каждый из которых — маленькая столица со своим характером, историей, архитектурой и культурным кодом.
      </p>
      <p class="modalBlock__description">
         Здесь можно увидеть Русь XIV–XIX веков, пройтись по кремлям, монастырям, купеческим кварталам и старинным улицам, которые сохранили дух времени.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Сергиев Посад -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сергиев Посад — духовная столица России</h2>
      <p class="modalBlock__description">
         Сергиев Посад — единственный город Подмосковья, входящий в Золотое кольцо.
      </p>
      <p class="modalBlock__description">
         Его центр — Троице-Сергиева лавра, главный монастырь страны и духовное сердце православия.
      </p>
      <p class="modalBlock__description">
         Что делает город особенным:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">ансамбль лавры с белокаменными соборами, колокольней и росписями;</li>
         <li class="modalBlock__listItem">паломническая атмосфера;</li>
         <li class="modalBlock__listItem">музеи игрушки и ремесел;</li>
         <li class="modalBlock__listItem">старинные слободы и тихие улочки;</li>
         <li class="modalBlock__listItem">связь с именем Сергия Радонежского.</li>
      </ul>
      <p class="modalBlock__description">
         Сергиев Посад — город, где история ощущается в каждом шаге.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Коломна -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Коломна — купеческая столица и город пастилы</h2>
      <p class="modalBlock__description">
         Коломна — один из самых красивых городов Подмосковья.
      </p>
      <p class="modalBlock__description">
         Здесь сохранился кремль, старинные улицы, купеческие дома и атмосфера XIX века.
      </p>
      <p class="modalBlock__description">
         Главные особенности:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Коломенский кремль — один из крупнейших в России;</li>
         <li class="modalBlock__listItem">музей пастилы и старинные кондитерские;</li>
         <li class="modalBlock__listItem">трамвайчик, который ездит по старому городу;</li>
         <li class="modalBlock__listItem">ремесленные лавки;</li>
         <li class="modalBlock__listItem">набережные Оки.</li>
      </ul>
      <p class="modalBlock__description">
         Коломна — город, где прошлое живет в деталях.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Зарайск -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Зарайск — маленький город с настоящим кремлем</h2>
      <p class="modalBlock__description">
         Зарайск — единственный город Подмосковья, где кремль сохранился полностью, с башнями и стенами XVI века.
      </p>
      <p class="modalBlock__description">
         Что важно увидеть:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">белокаменный кремль;</li>
         <li class="modalBlock__listItem">соборы внутри крепости;</li>
         <li class="modalBlock__listItem">музей, посвященный истории края;</li>
         <li class="modalBlock__listItem">тихие улочки старого города.</li>
      </ul>
      <p class="modalBlock__description">
         Зарайск — это «карманная» Древняя Русь.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Дмитров -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Дмитров — город на земляном валу</h2>
      <p class="modalBlock__description">
         Дмитров — один из древнейших городов области, основанный Юрием Долгоруким.
      </p>
      <p class="modalBlock__description">
         Что создает атмосферу:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">земляной вал вокруг кремля;</li>
         <li class="modalBlock__listItem">Успенский собор;</li>
         <li class="modalBlock__listItem">старинные торговые ряды;</li>
         <li class="modalBlock__listItem">каналы и мостики;</li>
         <li class="modalBlock__listItem">уютный центр с музеями.</li>
      </ul>
      <p class="modalBlock__description">
         Дмитров — город, который удивляет своей камерностью.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Можайск -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Можайск — город памяти о Бородине и древних храмов</h2>
      <p class="modalBlock__description">
         Можайск — город с мощной исторической энергией.
      </p>
      <p class="modalBlock__description">
         Что здесь важно:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Бородинское поле — крупнейший военно-исторический комплекс страны;</li>
         <li class="modalBlock__listItem">Никольский собор — один из самых красивых храмов Подмосковья;</li>
         <li class="modalBlock__listItem">старинные усадьбы;</li>
         <li class="modalBlock__listItem">панорамы холмов и рек.</li>
      </ul>
      <p class="modalBlock__description">
         Можайск — город, где истории войны и мира переплетаются.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Волоколамск -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Волоколамск — древнейший город области</h2>
      <p class="modalBlock__description">
         Волоколамск упоминался раньше Москвы.
      </p>
      <p class="modalBlock__description">
         Это город с глубокими историческими корнями.
      </p>
      <p class="modalBlock__description">
         Что стоит увидеть:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Волоколамский кремль;</li>
         <li class="modalBlock__listItem">соборы XV–XIX веков;</li>
         <li class="modalBlock__listItem">музей, посвященный обороне города в 1941 году;</li>
         <li class="modalBlock__listItem">старинные кварталы.</li>
      </ul>
      <p class="modalBlock__description">
         Волоколамск — город, где древность и XX век встречаются лицом к лицу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Звенигород -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Звенигород — Подмосковная Швейцария</h2>
      <p class="modalBlock__description">
         Звенигород — один из самых живописных городов области.
      </p>
      <p class="modalBlock__description">
         Что делает его особенным:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Саввино-Сторожевский монастырь;</li>
         <li class="modalBlock__listItem">старинные улицы и купеческие дома;</li>
         <li class="modalBlock__listItem">холмы, леса и реки;</li>
         <li class="modalBlock__listItem">музей-усадьба Чехова в Мелихове (в окрестностях).</li>
      </ul>
      <p class="modalBlock__description">
         Звенигород — идеальное место для спокойного отдыха.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_8.jpg" alt="8" loading="lazy">
   </div>
</div>

<!-- Блок 9: Истра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Истра — город Нового Иерусалима</h2>
      <p class="modalBlock__description">
         Истра — город, выросший вокруг грандиозного монастырского комплекса.
      </p>
      <p class="modalBlock__description">
         Главные точки:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Ново-Иерусалимский монастырь — уникальный архитектурный ансамбль;</li>
         <li class="modalBlock__listItem">крупнейший музей Подмосковья;</li>
         <li class="modalBlock__listItem">живописные берега реки Истры.</li>
      </ul>
      <p class="modalBlock__description">
         Истра — город, где архитектура поражает масштабом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_9.jpg" alt="9" loading="lazy">
   </div>
</div>

<!-- Блок 10: Серпухов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Серпухов — южные ворота Подмосковья</h2>
      <p class="modalBlock__description">
         Серпухов — город с богатой историей и красивой природой вокруг.
      </p>
      <p class="modalBlock__description">
         Что важно:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Высоцкий и Владычный монастыри;</li>
         <li class="modalBlock__listItem">музей истории;</li>
         <li class="modalBlock__listItem">старинные улицы;</li>
         <li class="modalBlock__listItem">близость к Приокско-Террасному заповеднику.</li>
      </ul>
      <p class="modalBlock__description">
         Серпухов — город на стыке истории и природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_10.jpg" alt="10" loading="lazy">
   </div>
</div>

<!-- Блок 11: Руза -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Руза — тихая провинция с красивыми видами</h2>
      <p class="modalBlock__description">
         Руза — один из самых спокойных городов области.
      </p>
      <p class="modalBlock__description">
         Особенности:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">старинные храмы;</li>
         <li class="modalBlock__listItem">музей;</li>
         <li class="modalBlock__listItem">живописные берега реки Рузы;</li>
         <li class="modalBlock__listItem">близость к водохранилищу.</li>
      </ul>
      <p class="modalBlock__description">
         Руза — идеальна для неспешных прогулок.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_11.jpg" alt="11" loading="lazy">
   </div>
</div>

<!-- Блок 12: Егорьевск -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Егорьевск — купеческий город с текстильной историей</h2>
      <p class="modalBlock__description">
         Егорьевск — город фабрик, мануфактур и купеческой архитектуры.
      </p>
      <p class="modalBlock__description">
         Что увидеть:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">старинные фабричные корпуса;</li>
         <li class="modalBlock__listItem">купеческие особняки;</li>
         <li class="modalBlock__listItem">музей истории текстиля;</li>
         <li class="modalBlock__listItem">уютный центр.</li>
      </ul>
      <p class="modalBlock__description">
         Егорьевск — город промышленного наследия.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Istoricheskie_goroda/Mos_Istoricheskie_goroda_12.jpg" alt="12" loading="lazy">
   </div>
</div>`
        },

// =========================== Технопарки, музеи и современные пространства ===================================================================

        {
            id: '2',
            title: 'Технопарки, музеи и современные пространства',
            image: '../../img/moscow_region/cards_tochki/Mos_Technoparki_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Технопарки, музеи и современные пространства</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Технопарки, музеи и современное искусство Подмосковья — территория идей, науки и новых смыслов</h2>
      <p class="modalBlock__description">
         Московская область — это не только древние города и усадьбы.
      </p>
      <p class="modalBlock__description">
         Это регион, где рядом с монастырями стоят технопарки, где в бывших фабриках открываются арт-пространства, а музеи становятся центрами притяжения для всей страны.
      </p>
      <p class="modalBlock__description">
         Подмосковье — это удивительное сочетание истории и будущего.
      </p>
      <p class="modalBlock__description">
         Технопарки — пространство науки, инноваций и инженерной культуры
      </p>
      <p class="modalBlock__description">
         Подмосковье — один из крупнейших научных регионов России.
      </p>
      <p class="modalBlock__description">
         Здесь находятся города-лаборатории, исследовательские центры и технопарки, работающие на стыке технологий и образования.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Королев -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Королев — столица российской космонавтики</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Центры ракетно-космической отрасли;</li>
         <li class="modalBlock__listItem">Музей космонавтики с уникальными экспонатами;</li>
         <li class="modalBlock__listItem">Атмосфера города, где создавались корабли «Восток» и «Союз».</li>
      </ul>
      <p class="modalBlock__description">
         Королев — место, где наука ощущается буквально в воздухе.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Дубна -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Дубна — город физиков и международных исследований</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Объединенный институт ядерных исследований;</li>
         <li class="modalBlock__listItem">Современный технопарк «Дубна»;</li>
         <li class="modalBlock__listItem">Музей науки и технологий;</li>
         <li class="modalBlock__listItem">Скульптуры и арт-объекты, посвященные физике.</li>
      </ul>
      <p class="modalBlock__description">
         Дубна — город, где рождаются открытия мирового уровня.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Черноголовка -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Черноголовка — центр химии и физики</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Институты РАН;</li>
         <li class="modalBlock__listItem">Музей техники и научных достижений;</li>
         <li class="modalBlock__listItem">Научные фестивали и лекции.</li>
      </ul>
      <p class="modalBlock__description">
         Черноголовка — тихий город, который живет наукой.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Протвино и Пущино -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Протвино и Пущино — биология, физика, экология</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Научные центры, работающие с биотехнологиями и экологией;</li>
         <li class="modalBlock__listItem">Лаборатории, открытые для экскурсий;</li>
         <li class="modalBlock__listItem">Научные тропы и образовательные маршруты.</li>
      </ul>
      <p class="modalBlock__description">
         Эти города — пример того, как наука формирует пространство.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Музеи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музеи — от классики до современных мультимедийных центров</h2>
      <p class="modalBlock__description">
         Подмосковные музеи — это не только коллекции, но и культурные центры, которые создают новые смыслы.
      </p>
      <p class="modalBlock__description">
         Музей «Новый Иерусалим» (Истра)
      </p>
      <p class="modalBlock__description">
         Один из крупнейших музеев России.
      </p>
      <p class="modalBlock__description">
         Здесь проходят:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">масштабные выставки;</li>
         <li class="modalBlock__listItem">мультимедийные проекты;</li>
         <li class="modalBlock__listItem">международные экспозиции.</li>
      </ul>
      <p class="modalBlock__description">
         Музей современный, светлый, архитектурно выразительный.
      </p>
      <p class="modalBlock__description">
         Музей-усадьба Чайковского (Клин)
      </p>
      <p class="modalBlock__description">
         Дом, где жил и работал великий композитор.
      </p>
      <p class="modalBlock__description">
         Сохранилась атмосфера XIX века, личные вещи, рояль, кабинет.
      </p>
      <p class="modalBlock__description">
         Музей пастилы (Коломна)
      </p>
      <p class="modalBlock__description">
         Не просто музей, а театрализованное путешествие в купеческий быт.
      </p>
      <p class="modalBlock__description">
         Ароматы, дегустации, костюмы — все создает эффект погружения в другое время.
      </p>
      <p class="modalBlock__description">
         Музей техники в Черноголовке
      </p>
      <p class="modalBlock__description">
         Коллекция автомобилей, мотоциклов, авиации и редких машин.
      </p>
      <p class="modalBlock__description">
         Один из самых интересных технических музеев региона.
      </p>
      <p class="modalBlock__description">
         Музей-заповедник «Бородинское поле»
      </p>
      <p class="modalBlock__description">
         Исторический комплекс мирового уровня:
      </p>
      <p class="modalBlock__description">
         панорамы, реконструкции, интерактивные экспозиции.
      </p>
      <p class="modalBlock__description">
         Музей-усадьба Чехова «Мелихово»
      </p>
      <p class="modalBlock__description">
         Дом, где Чехов писал «Чайку» и лечил крестьян.
      </p>
      <p class="modalBlock__description">
         Атмосфера интеллигентной русской усадьбы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Современное искусство -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Современное искусство — новые пространства, арт-кластеры и фестивали</h2>
      <p class="modalBlock__description">
         Подмосковье активно развивает современную культуру.
      </p>
      <p class="modalBlock__description">
         Здесь появляются арт-кластеры, фестивали, резиденции художников.
      </p>
      <p class="modalBlock__description">
         Заводские арт-пространства
      </p>
      <p class="modalBlock__description">
         В бывших фабриках и мануфактурах открываются:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">галереи;</li>
         <li class="modalBlock__listItem">мастерские;</li>
         <li class="modalBlock__listItem">выставочные залы;</li>
         <li class="modalBlock__listItem">пространства для перформансов.</li>
      </ul>
      <p class="modalBlock__description">
         Особенно активно это развивается в городах:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Орехово-Зуево;</li>
         <li class="modalBlock__listItem">Павловский Посад;</li>
         <li class="modalBlock__listItem">Ногинск.</li>
      </ul>
      <p class="modalBlock__description">
         Красногорск — центр современной городской культуры
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">выставочные пространства;</li>
         <li class="modalBlock__listItem">концертные площадки;</li>
         <li class="modalBlock__listItem">фестивали у набережной;</li>
         <li class="modalBlock__listItem">арт-объекты в городской среде.</li>
      </ul>
      <p class="modalBlock__description">
         Химки — современная архитектура и арт-инсталляции
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">набережная канала имени Москвы;</li>
         <li class="modalBlock__listItem">уличные скульптуры;</li>
         <li class="modalBlock__listItem">городские фестивали.</li>
      </ul>
      <p class="modalBlock__description">
         Фестивали современного искусства
      </p>
      <p class="modalBlock__description">
         В Подмосковье популярны:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">пленэры;</li>
         <li class="modalBlock__listItem">фестивали уличного искусства;</li>
         <li class="modalBlock__listItem">арт-резиденции;</li>
         <li class="modalBlock__listItem">музыкальные и мультимедийные проекты.</li>
      </ul>
      <p class="modalBlock__description">
         Особенно активны Звенигород, Истра, Коломна.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему технопарки, музеи и современное искусство — важная часть культурного кода региона</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Подмосковье — это территория науки, где создавались космические корабли и физические открытия;</li>
         <li class="modalBlock__listItem">Это регион музеев, которые рассказывают историю России через людей, города и события;</li>
         <li class="modalBlock__listItem">Это пространство современного искусства, которое растет на стыке индустриального наследия и новой городской культуры;</li>
         <li class="modalBlock__listItem">Это место, где прошлое и будущее сосуществуют, создавая уникальную атмосферу.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Technoparki/Mos_Technoparki_8.jpg" alt="8" loading="lazy">
   </div>
</div>`
        },

// =========================== Святые и духовные центры ===================================================================

        {
            id: '3',
            title: 'Святые и духовные центры',
            image: '../../img/moscow_region/cards_tochki/Mos_Svyatye_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Святые и духовные центры</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Святые и духовные центры Подмосковья — сердце русской духовности рядом со столицей страны</h2>
      <p class="modalBlock__description">
         Московская область — один из самых насыщенных духовных регионов России.
      </p>
      <p class="modalBlock__description">
         Здесь находятся древние монастыри, святые источники, паломнические тропы и храмы, которые веками были центрами притяжения для верующих, путешественников, художников и мыслителей.
      </p>
      <p class="modalBlock__description">
         Эти места формируют культурный код Подмосковья — тихий, созерцательный, наполненный историей и смыслом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Троице-Сергиева лавра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Троице-Сергиева лавра — духовный центр России</h2>
      <p class="modalBlock__description">
         Сергиев Посад
      </p>
      <p class="modalBlock__description">
         Главная святыня страны, основанная преподобным Сергием Радонежским в XIV веке.
      </p>
      <p class="modalBlock__description">
         Это не просто монастырь — это духовная столица Руси.
      </p>
      <p class="modalBlock__description">
         Что делает лавру уникальной:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">ансамбль белокаменных соборов;</li>
         <li class="modalBlock__listItem">мощи Сергия Радонежского;</li>
         <li class="modalBlock__listItem">колокольня высотой 88 метров;</li>
         <li class="modalBlock__listItem">росписи Андрея Рублева и его школы;</li>
         <li class="modalBlock__listItem">паломническая атмосфера;</li>
         <li class="modalBlock__listItem">ощущение силы и тишины одновременно.</li>
      </ul>
      <p class="modalBlock__description">
         Лавра — место, куда приезжают за благословением, вдохновением и внутренним покоем.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Саввино-Сторожевский монастырь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Саввино-Сторожевский монастырь — подмосковный Афон</h2>
      <p class="modalBlock__description">
         Звенигород
      </p>
      <p class="modalBlock__description">
         Основан учеником Сергия Радонежского — Саввой Сторожевским.
      </p>
      <p class="modalBlock__description">
         Стоит на холме над Москвой-рекой, окруженный лесами.
      </p>
      <p class="modalBlock__description">
         Особенности:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">древний собор XIV века;</li>
         <li class="modalBlock__listItem">царские палаты XVII века;</li>
         <li class="modalBlock__listItem">мощи преподобного Саввы;</li>
         <li class="modalBlock__listItem">тишина и красота звенигородских холмов.</li>
      </ul>
      <p class="modalBlock__description">
         Это одно из самых гармоничных мест Подмосковья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Ново-Иерусалимский монастырь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ново-Иерусалимский монастырь — архитектурное чудо XVII века</h2>
      <p class="modalBlock__description">
         Истра
      </p>
      <p class="modalBlock__description">
         Грандиозный проект патриарха Никона — попытка воссоздать Святую землю под Москвой.
      </p>
      <p class="modalBlock__description">
         Что впечатляет:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">огромный Воскресенский собор;</li>
         <li class="modalBlock__listItem">подземные ходы;</li>
         <li class="modalBlock__listItem">река Истра, названная «Иорданом»;</li>
         <li class="modalBlock__listItem">масштаб комплекса;</li>
         <li class="modalBlock__listItem">соседний музей «Новый Иерусалим» — один из лучших в России.</li>
      </ul>
      <p class="modalBlock__description">
         Это место, где архитектура становится символом веры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Николо-Берлюковская пустынь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Николо-Берлюковская пустынь — монастырь света и воды</h2>
      <p class="modalBlock__description">
         Село Авдотьино
      </p>
      <p class="modalBlock__description">
         Один из самых красивых монастырей Подмосковья, стоящий на высоком берегу Клязьмы.
      </p>
      <p class="modalBlock__description">
         Что важно:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">белоснежные храмы;</li>
         <li class="modalBlock__listItem">святой источник;</li>
         <li class="modalBlock__listItem">живописные виды на реку;</li>
         <li class="modalBlock__listItem">атмосфера уединения.</li>
      </ul>
      <p class="modalBlock__description">
         Пустынь — место для тех, кто ищет тишину.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Высоцкий и Владычный монастыри -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Высоцкий и Владычный монастыри — духовные центры Серпухова</h2>
      <p class="modalBlock__description">
         Серпухов
      </p>
      <p class="modalBlock__description">
         Два древних монастыря, стоящих на холмах у реки Нары.
      </p>
      <p class="modalBlock__description">
         Высоцкий монастырь
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">основан Сергием Радонежским;</li>
         <li class="modalBlock__listItem">чудотворная икона «Неупиваемая чаша».</li>
      </ul>
      <p class="modalBlock__description">
         Владычный монастырь
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">женский монастырь XIV века;</li>
         <li class="modalBlock__listItem">древние храмы и мощи святых.</li>
      </ul>
      <p class="modalBlock__description">
         Серпухов — город, где духовность ощущается особенно глубоко.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Радонеж -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Радонеж — земля Сергия Радонежского</h2>
      <p class="modalBlock__description">
         Село Радонеж
      </p>
      <p class="modalBlock__description">
         Место, где прошло детство Сергия Радонежского.
      </p>
      <p class="modalBlock__description">
         Что здесь важно:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">храм Преображения;</li>
         <li class="modalBlock__listItem">памятник Сергию;</li>
         <li class="modalBlock__listItem">лесные тропы;</li>
         <li class="modalBlock__listItem">святые источники.</li>
      </ul>
      <p class="modalBlock__description">
         Радонеж — тихое, почти нетронутое место силы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Святые источники -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Святые источники Подмосковья</h2>
      <p class="modalBlock__description">
         Подмосковье богато источниками, к которым приезжают за исцелением и благословением.
      </p>
      <p class="modalBlock__description">
         Самые известные:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Гремячий ключ (Сергиев Посад) — мощный водопад-источник;</li>
         <li class="modalBlock__listItem">Источник Саввы Сторожевского (Звенигород);</li>
         <li class="modalBlock__listItem">Источник в Авдотьино (Николо-Берлюковская пустынь);</li>
         <li class="modalBlock__listItem">Источник в Радонеже.</li>
      </ul>
      <p class="modalBlock__description">
         Эти места — часть паломнической культуры региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_8.jpg" alt="8" loading="lazy">
   </div>
</div>

<!-- Блок 9: Малые монастыри и храмы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Малые монастыри и храмы — тихие жемчужины Подмосковья</h2>
      <p class="modalBlock__description">
         Что стоит отметить:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Борисо-Глебский монастырь (Дмитров);</li>
         <li class="modalBlock__listItem">Лужецкий монастырь (Можайск);</li>
         <li class="modalBlock__listItem">Николо-Пешношский монастырь (Дмитровский район);</li>
         <li class="modalBlock__listItem">Успенский храм в Коломне;</li>
         <li class="modalBlock__listItem">Храмы Зарайска и Волоколамска.</li>
      </ul>
      <p class="modalBlock__description">
         Это места, где можно почувствовать подлинную провинциальную духовность.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_9.jpg" alt="9" loading="lazy">
   </div>
</div>

<!-- Блок 10: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему духовные центры — важная часть культурного кода Подмосковья</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">Здесь зарождалась русская духовная традиция;</li>
         <li class="modalBlock__listItem">Монастыри были культурными и образовательными центрами;</li>
         <li class="modalBlock__listItem">Эти места формировали архитектурный облик региона;</li>
         <li class="modalBlock__listItem">Они сохраняют тишину и созерцательность, которые так важны в современном мире;</li>
         <li class="modalBlock__listItem">Это пространство, где история, вера и природа соединяются.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Svyatye/Mos_Svyatye_10.jpg" alt="10" loading="lazy">
   </div>
</div>`
        },

// =========================== Городские пространства ===================================================================

        {
            id: '4',
            title: 'Городские пространства',
            image: '../../img/moscow_region/cards_tochki/Mos_Gorodskie_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Городские пространства</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Городские пространства и памятные места Подмосковья — здесь современная жизнь встречается с историей</h2>
      <p class="modalBlock__description">
         Подмосковье — это не только древние монастыри и усадьбы.
      </p>
      <p class="modalBlock__description">
         Это регион, который активно меняется: города получают новые набережные, парки, площади, а рядом с ними сохраняются места памяти, связанные с ключевыми событиями российской истории.
      </p>
      <p class="modalBlock__description">
         Здесь можно увидеть, как современная среда и историческое наследие формируют единый культурный ландшафт.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Gorodskie/Mos_Gorodskie_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Современные городские пространства -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Современные городские пространства</h2>
      <p class="modalBlock__description">
         В последние годы многие подмосковные города пережили обновление.
      </p>
      <p class="modalBlock__description">
         Появились благоустроенные набережные, пешеходные зоны, парки, которые стали центрами городской жизни.
      </p>
      <p class="modalBlock__description">
         Красногорск — один из самых ярких примеров. Его набережная вдоль Москвы-реки стала настоящей городской витриной: широкие прогулочные маршруты, велодорожки, смотровые площадки, кафе, арт-объекты. Здесь чувствуется ритм современного города, который живет у воды.
      </p>
      <p class="modalBlock__description">
         Химки сделали ставку на канал имени Москвы. Набережная стала местом для прогулок, спорта, встреч. Вечерняя подсветка, скульптуры, причалы — все это создает атмосферу европейского пригорода.
      </p>
      <p class="modalBlock__description">
         Мытищи превратились в город парков. Центральный парк, благоустроенные пруды, современные детские и спортивные зоны — это пространство для семейного отдыха, которое живет круглый год.
      </p>
      <p class="modalBlock__description">
         Одинцово — пример подмосковного города с европейским подходом к городской среде: пешеходные бульвары, фонтаны, площади, культурные центры. Здесь приятно просто гулять, наблюдая за жизнью города.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Gorodskie/Mos_Gorodskie_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Памятные места и исторические пространства -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Памятные места и исторические пространства</h2>
      <p class="modalBlock__description">
         Подмосковье — территория, где происходили ключевые события российской истории.
      </p>
      <p class="modalBlock__description">
         Здесь сохранились мемориалы, поля сражений, музеи, которые напоминают о прошлом.
      </p>
      <p class="modalBlock__description">
         Бородинское поле — одно из главных мест национальной памяти. Огромный музей-заповедник, панорамы, памятники героям 1812 года, реконструкции сражений — все это создает ощущение, что история здесь буквально под ногами.
      </p>
      <p class="modalBlock__description">
         Дубосеково — место подвига панфиловцев. Монументальные фигуры, стоящие на фоне широких полей, производят сильное впечатление. Это пространство, где тишина говорит громче слов.
      </p>
      <p class="modalBlock__description">
         Подольск, Истра, Дмитров — города, где сохранились мемориалы Великой Отечественной войны, посвященные обороне Москвы. Каждый из них — часть общей памяти о событиях 1941 года.
      </p>
      <p class="modalBlock__description">
         Звенигород сочетает в себе памятники войны, старинные улицы и культурные пространства. Это город, где история и современность живут рядом, не мешая друг другу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Gorodskie/Mos_Gorodskie_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Площади, бульвары и городские центры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Площади, бульвары и городские центры</h2>
      <p class="modalBlock__description">
         Многие подмосковные города создают новые общественные пространства, которые становятся точками притяжения.
      </p>
      <p class="modalBlock__description">
         Коломна сохранила историческую центральную площадь, где проходят ярмарки, фестивали, городские праздники. Здесь чувствуется дух купеческого города.
      </p>
      <p class="modalBlock__description">
         Сергиев Посад развивает пространство вокруг лавры: благоустроенные зоны отдыха, пешеходные маршруты, виды на монастырские стены — все это делает центр города живым и привлекательным.
      </p>
      <p class="modalBlock__description">
         Подольск, Королев, Реутов активно развивают пешеходные зоны, бульвары, городские площади. Это современные пространства, где приятно проводить время, гулять, встречаться с друзьями.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Gorodskie/Mos_Gorodskie_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Парки в городской среде -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Парки в городской среде</h2>
      <p class="modalBlock__description">
         Подмосковные парки — это не просто зеленые зоны, а полноценные городские пространства.
      </p>
      <p class="modalBlock__description">
         Парк «Пехорка» в Балашихе — один из лучших примеров: длинные маршруты вдоль реки, мосты, пирсы, зоны отдыха, кафе. Это место, куда приезжают даже из других городов.
      </p>
      <p class="modalBlock__description">
         Скитские пруды в Сергиевом Посаде — живописная зона с видами на монастырь, деревянными мостиками и тихими уголками для прогулок.
      </p>
      <p class="modalBlock__description">
         Парк «Олимпийский» в Химках — сочетание природы, спорта и городской инфраструктуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Gorodskie/Mos_Gorodskie_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему эти места важны</h2>
      <p class="modalBlock__description">
         Городские пространства и памятные места — это то, что формирует современный образ Подмосковья.
      </p>
      <p class="modalBlock__description">
         Они показывают, как регион развивается, как он сохраняет память и создает новые смыслы.
      </p>
      <p class="modalBlock__description">
         Это точки, где можно почувствовать характер каждого города: его историю, ритм, настроение.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Gorodskie/Mos_Gorodskie_6.jpg" alt="6" loading="lazy">
   </div>
</div>`
        }

    ],

// ============================================
// ВЫБРАТЬСЯ НА ПРИРОДУ
// ============================================

    nature: [

        {
            id: '5',
            title: 'Национальные парки и заповедники',
            image: '../../img/moscow_region/cards_nature/Mos_Nacionalnye_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Национальные парки и заповедники</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Национальные парки и заповедники Подмосковья — природа средней полосы в ее первозданной красоте</h2>
      <p class="modalBlock__description">
         Московская область — это не только города, усадьбы и монастыри.
      </p>
      <p class="modalBlock__description">
         Это огромные пространства лесов, рек, лугов и холмов, где природа сохранила свой естественный ритм.
      </p>
      <p class="modalBlock__description">
         Национальные парки и заповедники региона — это возможность увидеть настоящую среднюю полосу России: сосновые боры, дубравы, пойменные луга, тихие реки, редких животных и нетронутые уголки, где время будто замедляется.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Лосиный Остров -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Лосиный Остров — лес, который начинается у города</h2>
      <p class="modalBlock__description">
         Лосиный Остров — уникальное место: огромный лесной массив, который буквально вплотную подходит к Москве.
      </p>
      <p class="modalBlock__description">
         Это один из крупнейших городских национальных парков в мире.
      </p>
      <p class="modalBlock__description">
         Здесь можно встретить лосей, пройтись по экотропам, увидеть заболоченные участки, старые лесные кварталы, ручьи и пруды.
      </p>
      <p class="modalBlock__description">
         Лосиный Остров — это возможность за полчаса из городской среды попасть в настоящий лес, где слышны птицы, пахнет хвоей и чувствуется простор.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Приокско-террасный заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Приокско-террасный заповедник — дом зубров и сосновых боров</h2>
      <p class="modalBlock__description">
         Это единственный заповедник Московской области и одно из самых тихих мест региона.
      </p>
      <p class="modalBlock__description">
         Здесь живут зубры — огромные, мощные животные, которых можно увидеть на специальных маршрутах.
      </p>
      <p class="modalBlock__description">
         Заповедник расположен на высоких террасах над Окой, среди сосновых лесов, песчаных почв и солнечных полян.
      </p>
      <p class="modalBlock__description">
         Это место, где природа ощущается особенно чистой: воздух прозрачный, лес светлый, а тишина почти абсолютная.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Звенигородский биосферный заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Звенигородский биосферный заповедник — эталон природы средней полосы</h2>
      <p class="modalBlock__description">
         Один из старейших заповедников России, созданный для изучения природы Подмосковья.
      </p>
      <p class="modalBlock__description">
         Здесь сохранились дубравы, еловые леса, пойменные луга, холмы и овраги, которые выглядят так же, как и сто лет назад.
      </p>
      <p class="modalBlock__description">
         Заповедник закрыт для свободного посещения, но вокруг него проходят маршруты, где можно увидеть ту самую Подмосковную Швейцарию — мягкие холмы, старые леса, чистые ручьи.
      </p>
      <p class="modalBlock__description">
         Это пространство, где природа и история живут в гармонии.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Природные парки и охраняемые территории -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природные парки и охраняемые территории — сеть тихих уголков</h2>
      <p class="modalBlock__description">
         Помимо крупных заповедников, в Подмосковье есть множество природных парков и охраняемых зон, которые идеально подходят для прогулок и отдыха.
      </p>
      <p class="modalBlock__description">
         Истринские леса — холмы, реки, старые деревни, тишина.
      </p>
      <p class="modalBlock__description">
         Окские поймы — широкие пространства, птицы, заливные луга.
      </p>
      <p class="modalBlock__description">
         Клязьминские берега — сосны, песчаные тропы, виды на воду.
      </p>
      <p class="modalBlock__description">
         Шатурские озера — цепочка водоемов среди лесов.
      </p>
      <p class="modalBlock__description">
         Тарусские и серпуховские просторы — открытые поля, овраги, панорамы.
      </p>
      <p class="modalBlock__description">
         Эти места не всегда имеют статус национального парка, но по красоте и атмосфере ничуть не уступают.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему природные территории Подмосковья важны</h2>
      <p class="modalBlock__description">
         Потому что они сохраняют то, что делает регион живым:
      </p>
      <p class="modalBlock__description">
         лесной воздух, тишину, пространство, возможность уйти от городской суеты и почувствовать себя частью природы.
      </p>
      <p class="modalBlock__description">
         Это места, где можно гулять, слушать птиц, смотреть на воду, дышать сосновым воздухом и просто быть.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_6.jpg" alt="6" loading="lazy">
   </div>
</div>`
        },

// =========================== Реки и водные маршруты ===================================================================

        {
            id: '6',
            title: 'Реки и водные маршруты',
            image: '../../img/moscow_region/cards_nature/Mos_Reki_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Реки и водные маршруты</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Реки и водные маршруты Подмосковья — движение, простор и тишина средней полосы</h2>
      <p class="modalBlock__description">
         Реки Московской области — это живые линии на карте региона.
      </p>
      <p class="modalBlock__description">
         Они соединяют города, леса, холмы, старинные села и монастыри.
      </p>
      <p class="modalBlock__description">
         Реки привлекают тем, что можно идти вдоль пешком, плыть на байдарке, кататься на SUP-борде или просто сидеть на берегу, слушая воду.
      </p>
      <p class="modalBlock__description">
         Каждая река здесь — со своим характером: широкая и степенная Ока, извилистая Москва-река, тихая Клязьма, солнечная Яхрома.
      </p>
      <p class="modalBlock__description">
         Водные маршруты Подмосковья — это возможность увидеть регион с другой стороны: медленно, спокойно, созерцательно.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Москва-река -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Москва-река — главная водная артерия региона</h2>
      <p class="modalBlock__description">
         Москва-река — это не просто река, а ось, вокруг которой выросли десятки городов и сел.
      </p>
      <p class="modalBlock__description">
         В Подмосковье она особенно красива: широкие изгибы, песчаные берега, сосновые леса, старинные монастыри на холмах.
      </p>
      <p class="modalBlock__description">
         Наиболее живописные участки — между Звенигородом и Истрой, а также в районе Можайска.
      </p>
      <p class="modalBlock__description">
         Здесь можно идти в поход с ночевками, сплавляться на байдарках, гулять по берегам, наблюдать за птицами.
      </p>
      <p class="modalBlock__description">
         Москва-река — это классическая средняя полоса: мягкий свет, спокойная вода, зеленые берега.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Ока -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ока — простор, широта и большие горизонты</h2>
      <p class="modalBlock__description">
         Ока — самая широкая и мощная река Подмосковья.
      </p>
      <p class="modalBlock__description">
         Она течет на юге области, создавая пейзажи, которые больше напоминают центральную Россию, чем пригороды столицы.
      </p>
      <p class="modalBlock__description">
         Берега Оки — это на просторе:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">песчаные пляжи;</li>
         <li class="modalBlock__listItem">высокие обрывы;</li>
         <li class="modalBlock__listItem">заливные луга;</li>
         <li class="modalBlock__listItem">панорамы, которые открываются на десятки километров.</li>
      </ul>
      <p class="modalBlock__description">
         Здесь особенно хороши водные маршруты: длинные, спокойные, с возможностью остановиться в тихих местах, где слышно только воду и ветер.
      </p>
      <p class="modalBlock__description">
         Ока — река для тех, кто любит простор.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Клязьма -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Клязьма — тихая, лесная, уютная</h2>
      <p class="modalBlock__description">
         Клязьма — одна из самых атмосферных рек Подмосковья.
      </p>
      <p class="modalBlock__description">
         Она течет через леса, поля, старые деревни, образуя множество изгибов и тихих заводей.
      </p>
      <p class="modalBlock__description">
         На Клязьме популярны:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">SUP-маршруты;</li>
         <li class="modalBlock__listItem">короткие сплавы;</li>
         <li class="modalBlock__listItem">прогулки вдоль берегов;</li>
         <li class="modalBlock__listItem">наблюдение за птицами.</li>
      </ul>
      <p class="modalBlock__description">
         Это река, где легко почувствовать тишину и уединение, даже если рядом крупные города.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Яхрома и Сестра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Яхрома и Сестра — солнечные реки северного Подмосковья</h2>
      <p class="modalBlock__description">
         Яхрома и Сестра — небольшие, светлые, живые реки, которые идеально подходят для коротких водных маршрутов.
      </p>
      <p class="modalBlock__description">
         Они текут через холмистые ландшафты Дмитровского района, где природа особенно мягкая и открытая.
      </p>
      <p class="modalBlock__description">
         Здесь много:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">песчаных берегов;</li>
         <li class="modalBlock__listItem">солнечных полян;</li>
         <li class="modalBlock__listItem">мест для пикников;</li>
         <li class="modalBlock__listItem">маршрутов выходного дня.</li>
      </ul>
      <p class="modalBlock__description">
         Эти реки — идеальны для тех, кто хочет легкого и красивого путешествия.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Истра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Истра — река монастырей и холмов</h2>
      <p class="modalBlock__description">
         Истра — одна из самых живописных рек области.
      </p>
      <p class="modalBlock__description">
         Она течет среди холмов, лесов и старинных сел, создавая пейзажи, которые часто называют Подмосковной Швейцарией.
      </p>
      <p class="modalBlock__description">
         На ее берегах стоит Ново-Иерусалимский монастырь — один из главных духовных центров региона.
      </p>
      <p class="modalBlock__description">
         Маршруты вдоль Истры — это сочетание природы, истории и архитектуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Водохранилища -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Водохранилища — большие воды Подмосковья</h2>
      <p class="modalBlock__description">
         Пироговское, Истринское, Клязьминское, Учинское — это целая система водохранилищ, которые стали центрами отдыха.
      </p>
      <p class="modalBlock__description">
         Здесь можно:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">кататься на лодках;</li>
         <li class="modalBlock__listItem">купаться и заниматься водными видами спорта;</li>
         <li class="modalBlock__listItem">гулять по берегам;</li>
         <li class="modalBlock__listItem">устраивать пикники;</li>
         <li class="modalBlock__listItem">наблюдать закаты над водой.</li>
      </ul>
      <p class="modalBlock__description">
         Водохранилища — это «моря» Подмосковья: широкие горизонты, ветер, свет.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему водные маршруты — важная часть образа Подмосковья</h2>
      <p class="modalBlock__description">
         Потому что реки — это движение, тишина, пространство.
      </p>
      <p class="modalBlock__description">
         Они дают возможность увидеть регион не с дороги, а с воды — медленно, спокойно, по-настоящему.
      </p>
      <p class="modalBlock__description">
         Это способ почувствовать природу средней полосы: ее мягкость, ее свет, ее ритм.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Reki/Mos_Reki_8.jpg" alt="8" loading="lazy">
   </div>
</div>`

        },

// =========================== Леса, холмы и природные тропы ===================================================================

        {
            id: '7',
            title: 'Леса, холмы и природные тропы',
            image: '../../img/moscow_region/cards_nature/Mos_Lesa_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Леса, холмы и природные тропы</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Леса, холмы и природные тропы Подмосковья — тишина, пространство и дыхание природы</h2>
      <p class="modalBlock__description">
         Подмосковье — это не только города, усадьбы и монастыри.
      </p>
      <p class="modalBlock__description">
         Это огромный зеленый мир, который окружает столицу со всех сторон: сосновые боры, еловые чащи, дубравы, холмы, овраги, поля, речные долины.
      </p>
      <p class="modalBlock__description">
         Здесь природа средней полосы раскрывается во всей своей мягкости и глубине.
      </p>
      <p class="modalBlock__description">
         Леса и природные тропы Подмосковья — это возможность уйти от шума, почувствовать землю под ногами, услышать птиц, вдохнуть запах хвои и пройтись по маршрутам, которые ведут через самые живописные уголки региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Lesa/Mos_Lesa_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Леса Подмосковья -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Леса Подмосковья — пространство света и тишины</h2>
      <p class="modalBlock__description">
         Подмосковные леса разнообразны.
      </p>
      <p class="modalBlock__description">
         На востоке — сосновые боры с мягким ковром из мха и черники.
      </p>
      <p class="modalBlock__description">
         На западе — густые еловые леса, где даже летом прохладно и тихо.
      </p>
      <p class="modalBlock__description">
         На юге — смешанные леса, где дубы соседствуют с березами, а под ногами — сухие листья и корни старых деревьев.
      </p>
      <p class="modalBlock__description">
         На севере — леса, прорезанные холмами, ручьями и старыми тропами.
      </p>
      <p class="modalBlock__description">
         Эти леса — идеальное место для прогулок, походов, наблюдения за природой.
      </p>
      <p class="modalBlock__description">
         Здесь легко забыть, что рядом — мегаполис.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Lesa/Mos_Lesa_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Холмы и овраги -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Холмы и овраги</h2>
      <p class="modalBlock__description">
         Многие удивляются, но Подмосковье — это не плоская равнина.
      </p>
      <p class="modalBlock__description">
         Особенно запад и север области — это холмистые ландшафты, которые напоминают маленькую Швейцарию.
      </p>
      <p class="modalBlock__description">
         Звенигородские холмы, Истринские овраги, Дмитровские возвышенности — это места, где рельеф создает особую атмосферу: открытые виды, перепады высот, панорамы рек и лесов.
      </p>
      <p class="modalBlock__description">
         Здесь приятно идти пешком, подниматься на вершины, спускаться к ручьям, слушать, как ветер проходит по верхушкам сосен.
      </p>
      <p class="modalBlock__description">
         Холмы Подмосковья — это природная география, которая делает регион живым и разнообразным.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Lesa/Mos_Lesa_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Природные тропы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природные тропы — маршруты, которые ведут вглубь природы</h2>
      <p class="modalBlock__description">
         В последние годы в Подмосковье появилось много экотроп — деревянных настилов, лесных маршрутов, прогулочных дорожек, которые позволяют пройти через самые красивые места, не нарушая природный баланс.
      </p>
      <p class="modalBlock__description">
         Самые известные тропы проходят в Звенигороде, Истре, Одинцовском округе, вдоль рек Москвы, Истры, Клязьмы.
      </p>
      <p class="modalBlock__description">
         Это маршруты, где можно идти часами: через лес, вдоль воды, по холмам, через поля.
      </p>
      <p class="modalBlock__description">
         Тропы оборудованы мостиками, смотровыми площадками, иногда — информационными стендами о природе и животных.
      </p>
      <p class="modalBlock__description">
         Но есть и «дикие» тропы — старые лесные дорожки, о которых знают только местные.
      </p>
      <p class="modalBlock__description">
         Они ведут к ручьям, заброшенным деревням, тихим полянам, где можно услышать только птиц и ветер.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Lesa/Mos_Lesa_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему леса и природные тропы — важная часть образа Подмосковья</h2>
      <p class="modalBlock__description">
         Потому что именно здесь раскрывается настоящая природа средней полосы.
      </p>
      <p class="modalBlock__description">
         Не яркая и экзотическая, а тихая, глубокая, спокойная.
      </p>
      <p class="modalBlock__description">
         Леса и холмы Подмосковья — это пространство, где можно восстановить силы, почувствовать ритм земли, увидеть красоту в простом: в свете между деревьями, в запахе хвои, в звуке воды.
      </p>
      <p class="modalBlock__description">
         Это места, куда возвращаются, чтобы выдохнуть.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Lesa/Mos_Lesa_5.jpg" alt="5" loading="lazy">
   </div>
</div>`
        },

// =========================== Парки и усадьбы ===================================================================

        {
            id: '8',
            title: 'Парки и усадьбы',
            image: '../../img/moscow_region/cards_nature/Mos_Parki_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Парки и усадьбы</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Парки и усадебные ландшафты Подмосковья — природа, история и красота, созданная человеком</h2>
      <p class="modalBlock__description">
         Подмосковье — это не только леса и реки, но и огромный пласт культурного ландшафта, созданного руками архитекторов, садовников, художников и владельцев старинных усадеб.
      </p>
      <p class="modalBlock__description">
         Здесь природа и история переплетаются особенно тонко: регулярные парки соседствуют с дикими рощами, французские аллеи — с русскими прудами, а старинные дворцы — с современными зонами отдыха.
      </p>
      <p class="modalBlock__description">
         Парки и усадебные ландшафты Подмосковья — это пространство красоты, где можно гулять часами, наслаждаясь гармонией природы и архитектуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Архангельское -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архангельское — подмосковный Версаль</h2>
      <p class="modalBlock__description">
         Архангельское — один из самых известных усадебных ансамблей России.
      </p>
      <p class="modalBlock__description">
         Это место, где классическая архитектура встречается с идеальной геометрией французского парка.
      </p>
      <p class="modalBlock__description">
         Широкие аллеи, террасы, виды на Москву-реку, старинные скульптуры, дворец в стиле классицизма — все здесь создает ощущение парадности и величия.
      </p>
      <p class="modalBlock__description">
         Архангельское — это пространство, где можно почувствовать дыхание эпохи, когда усадьбы были центрами культуры, искусства и светской жизни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Абрамцево -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Абрамцево — усадьба художников и русской души</h2>
      <p class="modalBlock__description">
         Абрамцево — не просто усадьба, а место, где формировалась русская художественная культура XIX века.
      </p>
      <p class="modalBlock__description">
         Здесь работали Врубель, Поленов, Репин, Васнецов; здесь создавались образы, которые стали частью национальной мифологии.
      </p>
      <p class="modalBlock__description">
         Парк Абрамцева — это смесь природной мягкости и творческой энергии: тропинки среди сосен, деревянные постройки в стиле русского модерна, пруды, мостики, тихие уголки, где можно почувствовать атмосферу художественной мастерской под открытым небом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Мураново -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Мураново — усадьба поэтов и интеллигентной тишины</h2>
      <p class="modalBlock__description">
         Мураново — дом Тютчева и Баратынского, место, где сохранилась атмосфера русской интеллигенции XIX века.
      </p>
      <p class="modalBlock__description">
         Парк здесь не парадный, а камерный: липовые аллеи, старые яблони, пруды, деревянные постройки, мягкий свет.
      </p>
      <p class="modalBlock__description">
         Мураново — это пространство тишины, где хочется гулять медленно, слушая ветер и вспоминая строки русской поэзии.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Марфино -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Марфино — романтическая архитектура и пруды с мостами</h2>
      <p class="modalBlock__description">
         Марфино — одна из самых красивых усадеб Подмосковья.
      </p>
      <p class="modalBlock__description">
         Ее отличает романтическая архитектура: готические мотивы, красный кирпич, башенки, арки.
      </p>
      <p class="modalBlock__description">
         Парк Марфино — это каскад прудов, мосты, островки, аллеи, которые создают атмосферу старинного европейского поместья.
      </p>
      <p class="modalBlock__description">
         Это место, где особенно красиво на закате, когда вода отражает красные стены усадьбы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Быково -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Быково — усадьба с неоготической церковью</h2>
      <p class="modalBlock__description">
         Быково известно своей необычной церковью — легкой, воздушной, почти сказочной.
      </p>
      <p class="modalBlock__description">
         Парк вокруг усадьбы — это смесь старых деревьев, прудов и тропинок, которые ведут к живописным видам.
      </p>
      <p class="modalBlock__description">
         Здесь чувствуется дух романтизма и немного мистики.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Остафьево -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Остафьево — «Русский Парнас»</h2>
      <p class="modalBlock__description">
         Остафьево — усадьба, связанная с именами Карамзина и Пушкина.
      </p>
      <p class="modalBlock__description">
         Парк здесь — классический, с широкими аллеями, прудами, видами на долину.
      </p>
      <p class="modalBlock__description">
         Это место, где история русской литературы буквально витает в воздухе.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Городские парки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Городские парки — современная природа в городской среде</h2>
      <p class="modalBlock__description">
         Помимо усадеб Подмосковье активно развивает современные парки, которые становятся центрами городской жизни.
      </p>
      <p class="modalBlock__description">
         Парк «Пехорка» в Балашихе, Скитские пруды в Сергиевом Посаде, парки Мытищ, Одинцова, Химок — это пространства, где природа и современная инфраструктура создают комфортную среду для прогулок, спорта и отдыха.
      </p>
      <p class="modalBlock__description">
         Здесь есть набережные, мостики, пирсы, зоны для пикников, детские площадки, велодорожки — все, что делает парк живым и удобным.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_8.jpg" alt="8" loading="lazy">
   </div>
</div>

<!-- Блок 9: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему парки и усадебные ландшафты — важная часть образа Подмосковья</h2>
      <p class="modalBlock__description">
         Потому что именно здесь раскрывается культурная глубина региона.
      </p>
      <p class="modalBlock__description">
         Усадьбы — это история России, ее искусство, ее литература, ее архитектура.
      </p>
      <p class="modalBlock__description">
         Парки — это пространство отдыха, созерцания, общения с природой.
      </p>
      <p class="modalBlock__description">
         Вместе они создают уникальный ландшафт, где прошлое и настоящее существуют в гармонии.
      </p>
      <p class="modalBlock__description">
         Это места, куда приезжают, чтобы вдохнуть, увидеть красоту и почувствовать связь с историей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Parki/Mos_Parki_9.jpg" alt="9" loading="lazy">
   </div>
</div>`

        }

    ],

// ============================================
// КУЛЬТУРНЫЙ КОД
// ============================================

    culture: [

        {
            id: '9',
            title: 'Земля древних городов',
            image: '../../img/moscow_region/cards_culture/Mos_Zemlya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Земля древних городов</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Земля древних городов и монастырей — духовное и историческое сердце Подмосковья</h2>
      <p class="modalBlock__description">
         Московская область — это территория, где рождалась русская государственность, формировалась духовная традиция и складывался культурный код страны.
      </p>
      <p class="modalBlock__description">
         Здесь, среди холмов, рек и лесов, стоят древние города, монастыри и храмы, которые веками были центрами силы, образования, ремесел и духовной жизни.
      </p>
      <p class="modalBlock__description">
         Эта земля хранит память о князьях, монахах, купцах, мастерах и путешественниках, которые создавали историю Руси.
      </p>
      <p class="modalBlock__description">
         Подмосковье — это не просто пригород столицы.
      </p>
      <p class="modalBlock__description">
         Это пространство, где можно увидеть живую древность: белокаменные соборы, крепостные стены, монастырские дворы, старинные улицы, которые сохранили свой ритм и тишину.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Zemlya/Mos_Zemlya_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Древние города -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Древние города — живые страницы русской истории</h2>
      <p class="modalBlock__description">
         Сергиев Посад, Коломна, Зарайск, Дмитров, Можайск, Волоколамск, Звенигород — каждый из этих городов возник задолго до появления Москвы как столицы.
      </p>
      <p class="modalBlock__description">
         Они были крепостями, торговыми центрами, духовными опорами, местами, где проходили важнейшие события русской истории.
      </p>
      <p class="modalBlock__description">
         В Коломне и Зарайске сохранились кремли, которые до сих пор выглядят как настоящие крепости XVI века.
      </p>
      <p class="modalBlock__description">
         В Дмитрове — земляной вал, который напоминает о древних оборонительных системах.
      </p>
      <p class="modalBlock__description">
         В Можайске — храмы, стоящие на высоких холмах, словно сторожевые башни.
      </p>
      <p class="modalBlock__description">
         В Волоколамске — древнейший кремль области, который видел княжеские междоусобицы и нашествия.
      </p>
      <p class="modalBlock__description">
         Эти города — не музеи под открытым небом, а живые пространства, где прошлое и настоящее существуют рядом.
      </p>
      <p class="modalBlock__description">
         Здесь можно гулять по улицам, которые помнят купцов, воинов, паломников, ремесленников.
      </p>
      <p class="modalBlock__description">
         Можно увидеть, как древняя архитектура вписана в современную жизнь, сохраняя свой характер.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Zemlya/Mos_Zemlya_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Монастыри -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Монастыри — духовные опоры и хранители традиции</h2>
      <p class="modalBlock__description">
         Подмосковные монастыри — это не просто архитектурные ансамбли.
      </p>
      <p class="modalBlock__description">
         Это места, где веками формировалась духовная культура России.
      </p>
      <p class="modalBlock__description">
         Троице-Сергиева лавра — сердце православия, место силы, куда приезжают за благословением и вдохновением.
      </p>
      <p class="modalBlock__description">
         Саввино-Сторожевский монастырь — тихий, строгий, окруженный холмами и лесами, словно укрытый от мира.
      </p>
      <p class="modalBlock__description">
         Ново-Иерусалимский монастырь — грандиозный символ веры и архитектурного замысла, попытка перенести Святую землю на русскую почву.
      </p>
      <p class="modalBlock__description">
         Серпуховские монастыри — Высоцкий и Владычный — хранят древние иконы и легенды.
      </p>
      <p class="modalBlock__description">
         Монастыри Дмитрова, Можайска, Волоколамска — это островки Древней Руси, где время течет иначе.
      </p>
      <p class="modalBlock__description">
         Эти места создают особую атмосферу: тишина, звон колоколов, запах ладана, белокаменные стены, старые липы, дорожки, ведущие к источникам.
      </p>
      <p class="modalBlock__description">
         Здесь легко почувствовать связь с прошлым, с людьми, которые жили здесь столетия назад.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Zemlya/Mos_Zemlya_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Паломнические тропы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Паломнические тропы и святые источники — живая традиция</h2>
      <p class="modalBlock__description">
         Подмосковье — это земля, по которой ходили Сергий Радонежский, Савва Сторожевский, старцы и странники.
      </p>
      <p class="modalBlock__description">
         До сих пор сохранились тропы, ведущие к монастырям, источникам, лесным часовням.
      </p>
      <p class="modalBlock__description">
         Радонеж, Гремячий ключ, Саввинская гора, берега Истры и Москвы-реки — это места, где природа и духовность соединяются.
      </p>
      <p class="modalBlock__description">
         Здесь нет суеты, нет шума — только вода, лес, ветер и ощущение, что ты идешь по дороге, по которой ходили люди много веков назад.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Zemlya/Mos_Zemlya_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему эта земля важна</h2>
      <p class="modalBlock__description">
         Потому что именно здесь можно увидеть истоки русской культуры.
      </p>
      <p class="modalBlock__description">
         Древние города и монастыри Подмосковья — это не просто архитектура.
      </p>
      <p class="modalBlock__description">
         Это память, корни, традиция, духовная глубина.
      </p>
      <p class="modalBlock__description">
         Это пространство, где можно почувствовать, как формировалась страна: ее вера, ее история, ее характер.
      </p>
      <p class="modalBlock__description">
         Эта земля учит смотреть медленно, слушать внимательно и видеть в простом — главное.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Zemlya/Mos_Zemlya_5.jpg" alt="5" loading="lazy">
   </div>
</div>`
        },

// =========================== Научное и космическое Подмосковье ===================================================================

        {
            id: '10',
            title: 'Научное и космическое Подмосковье',
            image: '../../img/moscow_region/cards_culture/Mos_Nauchnoe_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Научное и космическое Подмосковье</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Научное и космическое Подмосковье — территория идей, открытий и движения к звездам</h2>
      <p class="modalBlock__description">
         Подмосковье — это не только древние города и усадьбы.
      </p>
      <p class="modalBlock__description">
         Это еще и земля, где создавалась космическая эра, где рождались научные школы, где работают институты, определяющие развитие физики, биологии, химии, инженерии.
      </p>
      <p class="modalBlock__description">
         Здесь, в небольших городах среди лесов и рек, находятся центры, которые десятилетиями были закрытыми, но именно они сделали Россию космической державой.
      </p>
      <p class="modalBlock__description">
         Научное Подмосковье — это особая атмосфера: тишина, аккуратные улицы, лаборатории, корпуса институтов, памятники ученым, модели ракет, студенческие городки, научные тропы.
      </p>
      <p class="modalBlock__description">
         Это пространство, где наука — не абстракция, а часть повседневной жизни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Королев -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Королев — столица российской космонавтики</h2>
      <p class="modalBlock__description">
         Королев — город, где создавались корабли, которые вывели человека в космос.
      </p>
      <p class="modalBlock__description">
         Здесь работал Сергей Королев, здесь собирали «Восток», «Союз», «Прогресс», здесь проходили испытания, которые определили судьбу космической программы.
      </p>
      <p class="modalBlock__description">
         Город живет этим наследием:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">на улицах — памятники конструкторам;</li>
         <li class="modalBlock__listItem">на фасадах — барельефы ракет;</li>
         <li class="modalBlock__listItem">в музеях — настоящие космические аппараты.</li>
      </ul>
      <p class="modalBlock__description">
         Королев — это место, где космос ощущается не как далекая мечта, а как часть реальности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Город живет этим наследием (отдельный блок как заголовок из списка) -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Город живет этим наследием:</h2>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">на улицах — памятники конструкторам;</li>
         <li class="modalBlock__listItem">на фасадах — барельефы ракет;</li>
         <li class="modalBlock__listItem">в музеях — настоящие космические аппараты.</li>
      </ul>
      <p class="modalBlock__description">
         Королев — это место, где космос ощущается не как далекая мечта, а как часть реальности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Звездный городок -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Звездный городок — место, где готовятся космонавты</h2>
      <p class="modalBlock__description">
         Звездный городок — легенда.
      </p>
      <p class="modalBlock__description">
         Закрытая территория, где десятилетиями жили и тренировались космонавты: Гагарин, Леонов, Терешкова. Армстронг приезжал сюда в гости.
      </p>
      <p class="modalBlock__description">
         Здесь находятся центры подготовки, тренажеры, гидролаборатории, купола, где отрабатывают выходы в открытый космос.
      </p>
      <p class="modalBlock__description">
         Даже сегодня, когда городок стал более открытым, он сохраняет ауру тишины и сосредоточенности.
      </p>
      <p class="modalBlock__description">
         Это место, где каждый дом, каждый коридор, каждая дорожка связаны с историей космоса.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Дубна -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Дубна — город физиков и международных исследований</h2>
      <p class="modalBlock__description">
         Дубна — один из самых необычных городов Подмосковья.
      </p>
      <p class="modalBlock__description">
         Он вырос вокруг Объединенного института ядерных исследований — международного центра, где работают ученые из десятков стран.
      </p>
      <p class="modalBlock__description">
         Здесь открывали новые элементы таблицы Менделеева, здесь стоят ускорители, лаборатории, научные комплексы мирового уровня.
      </p>
      <p class="modalBlock__description">
         Город наполнен научной символикой: скульптуры, посвященные физике, набережные с формулами, памятники элементам.
      </p>
      <p class="modalBlock__description">
         Дубна — это пространство, где наука становится частью городской среды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Черноголовка -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Черноголовка — тихий город больших открытий</h2>
      <p class="modalBlock__description">
         Черноголовка — небольшой город, но с огромным научным потенциалом.
      </p>
      <p class="modalBlock__description">
         Здесь работают институты РАН, занимающиеся химией, физикой, материаловедением.
      </p>
      <p class="modalBlock__description">
         Город тихий, зеленый, аккуратный — идеальная среда для научной работы.
      </p>
      <p class="modalBlock__description">
         Здесь проходят конференции, лекции, научные фестивали, а местный музей техники стал одним из самых интересных в регионе.
      </p>
      <p class="modalBlock__description">
         Черноголовка — пример того, как маленький город может стать центром большой науки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Протвино и Пущино -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Протвино и Пущино — биология, физика и экология</h2>
      <p class="modalBlock__description">
         На юге Подмосковья находятся два научных города, которые долгое время были закрытыми.
      </p>
      <p class="modalBlock__description">
         Пущино — центр биологических исследований: генетика, экология, биофизика.
      </p>
      <p class="modalBlock__description">
         Город стоит на высоком берегу Оки, среди лесов и холмов — идеальное место для изучения природы.
      </p>
      <p class="modalBlock__description">
         Протвино — город физиков, где строили один из крупнейших ускорителей в стране.
      </p>
      <p class="modalBlock__description">
         Сегодня здесь продолжают работать лаборатории, а город сохраняет атмосферу научного поселения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему научное и космическое Подмосковье — важная часть культурного кода региона</h2>
      <p class="modalBlock__description">
         Потому что именно здесь создавались технологии, которые изменили мир.
      </p>
      <p class="modalBlock__description">
         Потому что космос — это не только ракеты, но и культура, мечта, движение вперед.
      </p>
      <p class="modalBlock__description">
         Потому что научные города Подмосковья — это пример того, как знания становятся частью жизни, а маленькие города — центрами больших идей.
      </p>
      <p class="modalBlock__description">
         Научное Подмосковье — это территория, где прошлое и будущее встречаются в настоящем.
      </p>
      <p class="modalBlock__description">
         Где можно почувствовать, что путь к звездам начинается не в космосе, а на земле — в лабораториях, конструкторских бюро, учебных центрах, среди сосен и рек.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Nauchnoe/Mos_Nauchnoe_8.jpg" alt="8" loading="lazy">
   </div>
</div>`
        },

// =========================== Купеческая культура и ремесла ===================================================================

        {
            id: '11',
            title: 'Купеческая культура и ремесла',
            image: '../../img/moscow_region/cards_culture/Mos_Kupecheskaya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Купеческая культура и ремесла</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Купеческая культура и ремесла Подмосковья — земля мастерства, торговли и подлинной русской провинции</h2>
      <p class="modalBlock__description">
         Подмосковье — это не только монастыри, усадьбы и научные города.
      </p>
      <p class="modalBlock__description">
         Это еще и огромный пласт купеческой культуры, который сформировал облик региона в XVIII–XIX веках.
      </p>
      <p class="modalBlock__description">
         Здесь, в старинных городах вдоль рек и торговых путей, жили купцы, ремесленники, мастера, которые создавали товары, известные по всей России.
      </p>
      <p class="modalBlock__description">
         И сегодня, гуляя по Коломне, Сергиеву Посаду, Павловскому Посаду, Орехово-Зуеву, можно почувствовать дыхание той самой русской провинции, где торговля, ремесла и предприимчивость были основой жизни.
      </p>
      <p class="modalBlock__description">
         Купеческое Подмосковье — это мир ярмарок, лавок, мануфактур, фабрик, ремесленных слобод, где каждый дом, каждый склад, каждая улица хранят следы старой России.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Коломна -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Коломна — столица купеческого быта и сладких традиций</h2>
      <p class="modalBlock__description">
         Коломна — один из самых ярких купеческих городов России.
      </p>
      <p class="modalBlock__description">
         Здесь сохранились старинные кварталы, лавки, кондитерские, где до сих пор делают пастилу по рецептам XIX века.
      </p>
      <p class="modalBlock__description">
         Город живет ремесленной культурой: мыловарни, кузницы, мастерские, музейные лавки — все это создает атмосферу настоящего купеческого центра.
      </p>
      <p class="modalBlock__description">
         Коломна — это место, где ремесла не реконструируют, а продолжают.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Сергиев Посад -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сергиев Посад — земля игрушки и монастырских промыслов</h2>
      <p class="modalBlock__description">
         Сергиев Посад — родина знаменитой матрешки.
      </p>
      <p class="modalBlock__description">
         Здесь веками существовали мастерские, где делали деревянные игрушки, резные изделия, иконы, утварь.
      </p>
      <p class="modalBlock__description">
         Монастырские ремесла — резьба, иконопись, ювелирное дело — сформировали особый художественный стиль, который до сих пор узнаваем.
      </p>
      <p class="modalBlock__description">
         Город хранит атмосферу мастерства: маленькие лавки, музеи игрушки, ремесленные школы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Павловский Посад -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Павловский Посад — мир платков и текстильных узоров</h2>
      <p class="modalBlock__description">
         Павловский Посад — город, который подарил России знаменитые шерстяные платки.
      </p>
      <p class="modalBlock__description">
         Их делают здесь уже почти двести лет, сохраняя традиционные орнаменты, цветочные мотивы, технику набойки.
      </p>
      <p class="modalBlock__description">
         Фабрика до сих пор работает, а город живет текстильной культурой: узоры, ткани, яркие краски — все это часть местной идентичности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Орехово-Зуево и Ногинск -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Орехово-Зуево и Ногинск — фабричные города и индустриальная культура</h2>
      <p class="modalBlock__description">
         Эти города выросли вокруг мануфактур и фабрик, которые в XIX веке были одними из крупнейших в России.
      </p>
      <p class="modalBlock__description">
         Здесь формировалась рабочая культура, появлялись новые технологии, строились корпуса из красного кирпича, которые сегодня стали частью индустриального наследия.
      </p>
      <p class="modalBlock__description">
         Многие фабричные здания превращаются в арт-пространства, мастерские, культурные центры — индустриальная эстетика становится основой новой городской жизни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Зарайск, Волоколамск, Дмитров -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Зарайск, Волоколамск, Дмитров — тихие купеческие города с характером</h2>
      <p class="modalBlock__description">
         В этих городах сохранились старинные торговые ряды, лавки, купеческие дома, которые создают атмосферу русской провинции XIX века.
      </p>
      <p class="modalBlock__description">
         Здесь нет парадности, но есть подлинность: деревянные дома, вывески, старые улицы, где когда-то кипела торговля.
      </p>
      <p class="modalBlock__description">
         Это города, где можно почувствовать, как жила Россия до железных дорог и индустриализации.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Ремесла -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ремесла Подмосковья — живые традиции</h2>
      <p class="modalBlock__description">
         Подмосковье — это земля мастеров.
      </p>
      <p class="modalBlock__description">
         Здесь до сих пор делают:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem">деревянные игрушки и матрешки;</li>
         <li class="modalBlock__listItem">глиняную посуду;</li>
         <li class="modalBlock__listItem">текстиль и набойку;</li>
         <li class="modalBlock__listItem">пастилу и традиционные сладости;</li>
         <li class="modalBlock__listItem">мыло и косметику по старинным рецептам;</li>
         <li class="modalBlock__listItem">резные изделия;</li>
         <li class="modalBlock__listItem">ювелирные украшения;</li>
         <li class="modalBlock__listItem">плетеные вещи из лозы.</li>
      </ul>
      <p class="modalBlock__description">
         Многие ремесла не просто сохраняются, а развиваются — появляются мастерские, фестивали, ремесленные школы, где можно увидеть процесс создания вещей и попробовать себя в роли мастера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_7.jpg" alt="7" loading="lazy">
   </div>
</div>

<!-- Блок 8: Почему -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Почему купеческая культура — важная часть образа Подмосковья</h2>
      <p class="modalBlock__description">
         Потому что именно она сформировала характер многих городов региона.
      </p>
      <p class="modalBlock__description">
         Купцы строили дома, фабрики, храмы, поддерживали ремесла, создавали экономику.
      </p>
      <p class="modalBlock__description">
         Их энергия, предприимчивость, вкус к жизни до сих пор ощущаются в архитектуре, в городских улицах, в ремесленных традициях.
      </p>
      <p class="modalBlock__description">
         Купеческое Подмосковье — это живая, теплая, человеческая история.
      </p>
      <p class="modalBlock__description">
         История людей, которые создавали красоту и делали свое дело с любовью.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Kupecheskaya/Mos_Kupecheskaya_8.jpg" alt="8" loading="lazy">
   </div>
</div>`
        },

// =========================== Природа ===================================================================

        {
            id: '12',
            title: 'Природа',
            image: '../../img/moscow_region/cards_culture/Mos_Priroda_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Природа</h1>
</div>

<!-- Блок 1: Вступление -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природный характер Подмосковья — мягкая сила средней полосы</h2>
      <p class="modalBlock__description">
         Природа Подмосковья — это не про резкие контрасты и не про экзотику.
      </p>
      <p class="modalBlock__description">
         Это про мягкость, спокойствие, глубину.
      </p>
      <p class="modalBlock__description">
         Про леса, которые тянутся на десятки километров; про холмы, которые поднимаются над реками; про туман, который утром стелется над лугами; про свет, который проходит сквозь березовые рощи.
      </p>
      <p class="modalBlock__description">
         Это природа, которая не кричит — она говорит тихо, но уверенно.
      </p>
      <p class="modalBlock__description">
         И именно в этой тишине раскрывается ее характер.
      </p>
      <p class="modalBlock__description">
         Подмосковье — это классическая средняя полоса России, та самая, которую описывали Тургенев, Чехов, Бунин.
      </p>
      <p class="modalBlock__description">
         Здесь нет крайностей, но есть гармония: леса, поля, реки, озера, овраги, холмы, смешанные леса, сосновые боры, дубравы.
      </p>
      <p class="modalBlock__description">
         Это ландшафт, который формирует настроение: спокойное, созерцательное, немного задумчивое.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_1.jpg" alt="1" loading="lazy">
   </div>
</div>

<!-- Блок 2: Леса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Леса — зеленое сердце региона</h2>
      <p class="modalBlock__description">
         Леса занимают огромную часть Подмосковья.
      </p>
      <p class="modalBlock__description">
         Они разные: светлые сосновые боры на востоке, густые еловые массивы на западе, смешанные леса на юге, холмистые лесные пространства на севере.
      </p>
      <p class="modalBlock__description">
         В каждом — свой запах, свой звук, свой свет.
      </p>
      <p class="modalBlock__description">
         Подмосковный лес — это пространство, где легко почувствовать себя частью природы.
      </p>
      <p class="modalBlock__description">
         Здесь можно идти часами, слушая птиц, чувствуя под ногами мягкий мох или сухие листья.
      </p>
      <p class="modalBlock__description">
         Это лес, который не пугает, а успокаивает.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_2.jpg" alt="2" loading="lazy">
   </div>
</div>

<!-- Блок 3: Реки и долины -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Реки и долины — движение и простор</h2>
      <p class="modalBlock__description">
         Реки Подмосковья — Москва-река, Ока, Клязьма, Истра, Яхрома — создают особый ритм ландшафта.
      </p>
      <p class="modalBlock__description">
         Они текут мягко, плавно, образуя широкие долины, заливные луга, песчаные берега.
      </p>
      <p class="modalBlock__description">
         Реки здесь — не бурные потоки, а спокойные линии, которые соединяют города и леса.
      </p>
      <p class="modalBlock__description">
         Именно вдоль рек особенно хорошо чувствуется природный характер региона: открытые виды, тишина, отражения в воде, вечерний свет, который делает пейзаж почти живописью.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_3.jpg" alt="3" loading="lazy">
   </div>
</div>

<!-- Блок 4: Холмы и овраги -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Холмы и овраги — подмосковная пластика рельефа</h2>
      <p class="modalBlock__description">
         Многие удивляются, но Подмосковье — не плоское.
      </p>
      <p class="modalBlock__description">
         Особенно запад и север области — это холмистые пространства, где рельеф создает настоящие панорамы.
      </p>
      <p class="modalBlock__description">
         Звенигородские и Истринские холмы, Дмитровская гряда — это места, где природа становится объемной: подъемы, спуски, виды на леса и реки, овраги, по которым текут ручьи.
      </p>
      <p class="modalBlock__description">
         Эти холмы — важная часть характера региона: они делают пейзаж живым, динамичным, разнообразным.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_4.jpg" alt="4" loading="lazy">
   </div>
</div>

<!-- Блок 5: Поля и луга -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Поля и луга — открытое пространство и свет</h2>
      <p class="modalBlock__description">
         Подмосковные поля — это пространство света.
      </p>
      <p class="modalBlock__description">
         Летом — золотые, осенью — медные, весной — зеленые.
      </p>
      <p class="modalBlock__description">
         Луга вдоль рек — это мир трав, цветов, стрекоз, птиц.
      </p>
      <p class="modalBlock__description">
         Здесь особенно хорошо чувствуется сезонность: запахи, цвета, звуки меняются от месяца к месяцу.
      </p>
      <p class="modalBlock__description">
         Поля и луга — это дыхание региона, его открытость.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_5.jpg" alt="5" loading="lazy">
   </div>
</div>

<!-- Блок 6: Озера и водохранилища -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Озера и водохранилища — большие воды средней полосы</h2>
      <p class="modalBlock__description">
         Пироговское, Истринское, Клязьминское, Сенеж — это водные пространства, которые создают ощущение широты.
      </p>
      <p class="modalBlock__description">
         Здесь ветер, волны, отражения, закаты.
      </p>
      <p class="modalBlock__description">
         Это места, где природа становится почти морской, хотя вокруг — леса и холмы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_6.jpg" alt="6" loading="lazy">
   </div>
</div>

<!-- Блок 7: Тишина и мягкость -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Тишина и мягкость — главное настроение природы Подмосковья</h2>
      <p class="modalBlock__description">
         Природный характер региона — это прежде всего тишина.
      </p>
      <p class="modalBlock__description">
         Не абсолютная, а живая: шум листвы, плеск воды, пение птиц, далекий звук электрички.
      </p>
      <p class="modalBlock__description">
         Это тишина, в которой легко думать, гулять, смотреть, слушать.
      </p>
      <p class="modalBlock__description">
         Подмосковье — это природа, которая не требует усилий, чтобы ее понять.
      </p>
      <p class="modalBlock__description">
         Она открывается сама — в утреннем тумане, в запахе сосен, в мягком свете, в спокойной воде.
      </p>
      <p class="modalBlock__description">
         Это природа, к которой возвращаются.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow_region/cards_modal/Mos_Priroda/Mos_Priroda_7.jpg" alt="7" loading="lazy">
   </div>
</div>`
        },

    ]

};

window.Moscow_regionData = Moscow_regionData;
