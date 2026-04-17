// ============================================
// ДАННЫЕ КАРТОЧЕК ГОРОДА МОСКВЫ
// ============================================

const moscowData = {

// ======================== Точки притяжения регионов =============================

    attractions: [

// ======================== Красная площадь и Кремль =============================
        {
        id: 'Red_square_kreml',
        title: 'Красная площадь и Кремль',
        image:'../../img/moscow/cards_tochki/Krasnaya_ploshchad_i_Kreml_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Красная площадь и&nbsp;Кремль</h1>
</div>
<!-- Блок 1: Красная площадь и Кремль — возрожденный символ российской столицы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Красная площадь и&nbsp;Кремль&nbsp;&mdash; возрожденный символ российской столицы</h2>
        <p class="modalBlock__description">
            Главная площадь страны&nbsp;&mdash; это не&nbsp;просто географическая точка, а&nbsp;эмоциональный центр Москвы. Здесь история ощущается физически: в&nbsp;линиях кремлевских стен, в&nbsp;сиянии соборов.
        </p>
        <p class="modalBlock__description">
            Красная площадь и&nbsp;Кремль образуют единый ансамбль, где каждый элемент&nbsp;&mdash; часть многовекового повествования о&nbsp;России.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/RedSquare/RedSquare_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный ансамбль, ставший лицом Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный ансамбль, ставший лицом Москвы</h2>
        <p class="modalBlock__description">
            Архитектурный облик Кремля формировался столетиями. Современные стены и&nbsp;башни появились в&nbsp;XV веке благодаря итальянским мастерам, которые привнесли в&nbsp;московскую крепость элементы ренессансной фортификации.
        </p>
        <p class="modalBlock__description">
            Красная площадь, раскинувшаяся у&nbsp;восточной стены Кремля, стала парадной сценой города&nbsp;&mdash; просторной, торжественной, идеально симметричной.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/RedSquare/RedSquare_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Сокровища Кремля: где оживает история -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Сокровища Кремля: где оживает история</h2>
        <p class="modalBlock__description">
            Кремль&nbsp;&mdash; это не&nbsp;только резиденция президента, но&nbsp;и&nbsp;крупнейший музейный комплекс под открытым небом.
        </p>
        <p class="modalBlock__description">
            Соборная площадь:<br>
            Духовный центр государства. Здесь проходили коронации, венчания, государственные церемонии.<br>
            &bull; Успенский собор&nbsp;&mdash; главный храм Московского царства.<br>
            &bull; Архангельский собор&nbsp;&mdash; усыпальница великих князей и&nbsp;царей.<br>
            &bull; Благовещенский собор&nbsp;&mdash; домовая церковь русских правителей.<br>
            &bull; Грановитая палата&nbsp;&mdash; место приемов иностранных послов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/RedSquare/RedSquare_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Синтез традиций и величия в убранстве -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Синтез традиций и&nbsp;величия в&nbsp;убранстве</h2>
        <p class="modalBlock__description">
            <strong>Оружейная палата:</strong> Музей, где собраны регалии, парадные доспехи, тронные кресла, короны и&nbsp;знаменитые яйца Фаберже. Каждый зал&nbsp;&mdash; как отдельная глава истории.
        </p>
        <p class="modalBlock__description">
            <strong>Царь‑пушка и&nbsp;Царь‑колокол:</strong> Монументальные символы амбиций и&nbsp;мастерства русских литейщиков.
        </p>
        <p class="modalBlock__description">
            Интерьеры кремлевских соборов&nbsp;&mdash; это сочетание древнерусской и&nbsp;византийской традиций. Фрески XV&ndash;XVII&nbsp;веков, золоченые иконостасы, резные киоты, массивные колонны&nbsp;&mdash; все это создает ощущение торжественной тишины. Особенно впечатляет многоярусный иконостас Успенского собора, фрески Дионисия и&nbsp;его школы, декоративные росписи Архангельского собора, парадные залы Грановитой палаты с&nbsp;белокаменными сводами. Каждая деталь&nbsp;&mdash; свидетельство высочайшего уровня древнерусского искусства.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/RedSquare/RedSquare_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Красная площадь: пространство, где встречаются эпохи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Красная площадь: пространство, где встречаются эпохи</h2>
        <p class="modalBlock__description">
            Красная площадь&nbsp;&mdash; это открытая сцена Москвы. Здесь проходят парады, фестивали, концерты, зимние ярмарки и&nbsp;заливают каток.
        </p>
        <p class="modalBlock__description">
            <strong>Главные объекты площади:</strong> <br>
            &bull; Храм Василия Блаженного&nbsp;&mdash; архитектурная легенда XVI&nbsp;века.<br>
            &bull; Мавзолей Ленина&nbsp;&mdash; памятник советской эпохе.<br>
            &bull; ГУМ&nbsp;&mdash; исторический торговый пассаж с&nbsp;атмосферой старой Москвы.<br>
            &bull; Лобное место&nbsp;&mdash; древняя трибуна для оглашения царских указов.<br>
            &bull; Исторический музей&nbsp;&mdash; огромная коллекция артефактов от&nbsp;древности до&nbsp;XX&nbsp;века.
        </p>
        <p class="modalBlock__description">
            Площадь меняет настроение в&nbsp;зависимости от&nbsp;времени суток: утром&nbsp;&mdash; спокойная и&nbsp;торжественная, днем&nbsp;&mdash; оживленная, вечером&nbsp;&mdash; особенно красивая благодаря подсветке Кремля.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/RedSquare/RedSquare_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Как добраться до Красной площади и Кремля -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Красной площади и&nbsp;Кремля</h2>
        <p class="modalBlock__description">
            Красная площадь расположена в&nbsp;самом центре Москвы, рядом с&nbsp;Манежной площадью и&nbsp;Александровским садом.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Самый удобный способ&nbsp;&mdash; станции: &laquo;Охотный Ряд&raquo;, &laquo;Площадь Революции&raquo;, &laquo;Театральная&raquo;. От&nbsp;любой из&nbsp;них до&nbsp;площади&nbsp;&mdash; 3&ndash;5 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы и&nbsp;троллейбусы идут до&nbsp;остановок: &laquo;Манежная площадь&raquo;, &laquo;Моховая&raquo;, &laquo;Театральная площадь&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;Тверской улицы, Никольской или Китай‑города&nbsp;&mdash; 10&ndash;15 минут прогулки по&nbsp;историческому центру.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение Кремля:</strong> <br>
            &bull; Билеты лучше покупать заранее.<br>
            &bull; Вход в&nbsp;соборы и&nbsp;музеи&nbsp;&mdash; по&nbsp;расписанию.<br>
            &bull; На&nbsp;территории действует пропускной режим.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/RedSquare/RedSquare_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
        },

// ======================== Большой театр =============================

        {
        id: 'Big_teatr',
        title: 'Большой театр',
        image:'../../img/moscow/cards_tochki/Bolshoi_teatr_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Большой театр</h1>
</div>
<!-- Блок 1: Большой театр — хранитель великой сцены России -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Большой театр&nbsp;&mdash; хранитель великой сцены России</h2>
        <p class="modalBlock__description">
            Большой театр&nbsp;&mdash; это не&nbsp;просто культурный символ Москвы, а&nbsp;живой организм, в&nbsp;котором переплетаются история, искусство и&nbsp;национальная память. Его фасад с&nbsp;колоннами и&nbsp;квадригой Аполлона стал узнаваемым во&nbsp;всем мире, а&nbsp;сама сцена&nbsp;&mdash; местом, где рождаются легенды русского балета и&nbsp;оперы.
        </p>
        <p class="modalBlock__description">
            Здесь каждый спектакль&nbsp;&mdash; продолжение традиции, которой более двухсот лет.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Bolshoi_teatr/Bolshoi_teatr_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурная гармония, созданная для торжества искусства -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурная гармония, созданная для торжества искусства</h2>
        <p class="modalBlock__description">
            Здание Большого театра&nbsp;&mdash; воплощение русского классицизма, строгого и&nbsp;величественного. Архитектор Осип Бове задумал его как храм искусства, и&nbsp;эта идея читается в&nbsp;каждой детали.
        </p>
        <p class="modalBlock__description">
            Что формирует его неповторимый облик:<br>
            &bull; Массивный портик с&nbsp;колоннами, создающий ощущение монументальности.<br>
            &bull; Квадрига Аполлона, символизирующая вдохновение и&nbsp;победу творчества.<br>
            &bull; Светлый фасад, который подчеркивает торжественность здания.<br>
            &bull; Лепнина и&nbsp;барельефы, создающие ощущение театральной торжественности еще до&nbsp;входа внутрь.<br>
            Архитектура театра&nbsp;&mdash; это гармония пропорций и&nbsp;декоративной роскоши, которая сразу настраивает на&nbsp;встречу с&nbsp;высоким искусством.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Bolshoi_teatr/Bolshoi_teatr_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Зал, который дышит историей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Зал, который дышит историей</h2>
        <p class="modalBlock__description">
            Главный зрительный зал&nbsp;&mdash; сердце театра. Пятиярусная структура, красный бархат, позолота и&nbsp;огромная хрустальная люстра создают атмосферу, в&nbsp;которой зритель чувствует себя частью большого культурного ритуала.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Потолочная роспись, посвященная музам и&nbsp;аллегориям искусства.<br>
            &bull; Акустика исторической сцены, признанная одной из&nbsp;лучших в&nbsp;мире.<br>
            &bull; Восстановленные росписи и&nbsp;позолота, бережно сохраненные реставраторами.<br>
            &bull; Сложная инженерия, скрытая под историческими интерьерами.<br>
            Каждый элемент&nbsp;&mdash; от&nbsp;бархатных кресел до&nbsp;резных балконов&nbsp;&mdash; создает ощущение торжественности и&nbsp;ожидания чуда.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Bolshoi_teatr/Bolshoi_teatr_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Большой театр как культурная вселенная -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Большой театр как культурная вселенная</h2>
        <p class="modalBlock__description">
            Сегодня Большой&nbsp;&mdash; это не&nbsp;только историческая сцена, но&nbsp;и&nbsp;целый комплекс, объединяющий разные направления искусства.
        </p>
        <p class="modalBlock__description">
            Что включает театр:<br>
            &bull; Историческая сцена&nbsp;&mdash; место классических постановок.<br>
            &bull; Новая сцена&nbsp;&mdash; пространство для современных экспериментов.<br>
            &bull; Бетховенский зал&nbsp;&mdash; камерные концерты и&nbsp;музыкальные вечера.<br>
            &bull; Музей театра&nbsp;&mdash; костюмы, декорации, архивы, редкие экспонаты.<br>
            Здесь трудятся сотни артистов, музыкантов, художников и&nbsp;мастеров&nbsp;&mdash; каждый спектакль создается как ювелирное произведение.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Bolshoi_teatr/Bolshoi_teatr_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Большого театра -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Большого театра</h2>
        <p class="modalBlock__description">
            Большой театр расположен на&nbsp;Театральной площади&nbsp;&mdash; в&nbsp;самом центре Москвы.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Театральная&raquo;, &laquo;Охотный Ряд&raquo;, &laquo;Площадь Революции&raquo;. От&nbsp;любой из&nbsp;них&nbsp;&mdash; 2&ndash;4 минуты пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Театральная площадь&raquo;, &laquo;Большой театр&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;Красной площади, Манежной или Тверской&nbsp;&mdash; 5&ndash;10 минут прогулки по&nbsp;историческому центру.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение театра:</strong> <br>
            &bull; Билеты лучше покупать заранее&nbsp;&mdash; популярные спектакли раскупаются быстро.<br>
            &bull; Вход открывается за&nbsp;45&ndash;60 минут до&nbsp;начала.<br>
            &bull; Рекомендуется аккуратная, вечерняя одежда&nbsp;&mdash; атмосфера театра располагает к&nbsp;этому.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Bolshoi_teatr/Bolshoi_teatr_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`

        },

// ======================== Храм Василия Блаженного или собор Покрова Пресвятой Богородицы =============================
        {
        id: 'hram_vasiliya',
        title: 'Храм Василия Блаженного или собор Покрова Пресвятой Богородицы',
        image:'../../img/moscow/cards_tochki/Hram_Vasiliya_Blazhennogo_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Храм Василия Блаженного</h1>
</div>
<!-- Блок 1: Храм Василия Блаженного — фантазия из камня на пороге Кремля -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Храм Василия Блаженного&nbsp;&mdash; фантазия из&nbsp;камня на&nbsp;пороге Кремля</h2>
        <p class="modalBlock__description">
            Храм Василия Блаженного&nbsp;&mdash; это архитектурная легенда Москвы, место, где история превращается в&nbsp;сказку. Его разноцветные купола, будто созданные художником‑сновидцем, стали символом России, узнаваемым во&nbsp;всем мире.
        </p>
        <p class="modalBlock__description">
            Храм был возведен в&nbsp;XVI веке по&nbsp;приказу Ивана Грозного в&nbsp;честь взятия Казани и&nbsp;с&nbsp;тех пор стоит на&nbsp;Красной площади как памятник победе, вере и&nbsp;художественной смелости.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Hram_Vasiliya_Blazhennogo/Hram_Vasiliya_Blazhennogo_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный образ, не имеющий аналогов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный образ, не&nbsp;имеющий аналогов</h2>
        <p class="modalBlock__description">
            Храм состоит из&nbsp;одиннадцати самостоятельных церквей, объединенных в&nbsp;единый ансамбль. Это не&nbsp;классический храм, а&nbsp;сложная пространственная композиция, в&nbsp;которой каждая башня имеет свой характер, цвет и&nbsp;орнамент.
        </p>
        <p class="modalBlock__description">
            Что формирует его неповторимый силуэт:<br>
            &bull; Купола‑луковицы, расписанные полосами, ромбами и&nbsp;спиралями.<br>
            &bull; Асимметричная композиция, создающая ощущение движения.<br>
            &bull; Каменные узоры, напоминающие восточные орнаменты.<br>
            &bull; Контраст красного кирпича и&nbsp;ярких декоративных элементов.<br>
            Архитектура храма&nbsp;&mdash; это смелый эксперимент, в&nbsp;котором переплелись русские, византийские и&nbsp;восточные мотивы. Он&nbsp;выглядит как фантазия, воплощенная в&nbsp;камне.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Hram_Vasiliya_Blazhennogo/Hram_Vasiliya_Blazhennogo_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Внутренний мир храма — лабиринт тишины и древних росписей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Внутренний мир храма&nbsp;&mdash; лабиринт тишины и&nbsp;древних росписей</h2>
        <p class="modalBlock__description">
            Внутри храм совсем не&nbsp;похож на&nbsp;просторные храмы. Это сеть узких коридоров, маленьких приделов и&nbsp;крутых лестниц, которые создают ощущение путешествия по&nbsp;средневековому лабиринту.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Фрески XVI&ndash;XVII&nbsp;веков, покрывающие стены тонкими растительными орнаментами.<br>
            &bull; Иконостасы с&nbsp;древними иконами, сохранившимися со&nbsp;времен первых богослужений.<br>
            &bull; Каменные своды, расписанные вручную.<br>
            &bull; Тихие приделы, каждый из&nbsp;которых посвящен отдельному святому или событию.<br>
            Внутреннее пространство храма&nbsp;&mdash; это мир, где время словно замедляется, а&nbsp;каждый шаг открывает новую деталь.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Hram_Vasiliya_Blazhennogo/Hram_Vasiliya_Blazhennogo_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Храм как культурный символ Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Храм как культурный символ Москвы</h2>
        <p class="modalBlock__description">
            Сегодня Храм Василия Блаженного&nbsp;&mdash; не&nbsp;только храм, но&nbsp;и&nbsp;музей, который хранит историю Москвы и&nbsp;русской архитектуры.
        </p>
        <p class="modalBlock__description">
            Почему он&nbsp;так важен:<br>
            &bull; Это главный художественный символ России, узнаваемый во&nbsp;всем мире.<br>
            &bull; Он&nbsp;отражает переход от&nbsp;средневековой архитектуры к&nbsp;более смелым формам.<br>
            &bull; Храм связан с&nbsp;важнейшими событиями русской истории.<br>
            &bull; Он&nbsp;стал частью ансамбля Красной площади, включенного в&nbsp;список ЮНЕСКО.<br>
            Храм&nbsp;&mdash; это не&nbsp;просто памятник, а&nbsp;эмоциональный образ Москвы, который невозможно забыть.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Hram_Vasiliya_Blazhennogo/Hram_Vasiliya_Blazhennogo_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Храма Василия Блаженного -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Храма Василия Блаженного</h2>
        <p class="modalBlock__description">
            Храм расположен на&nbsp;южной стороне Красной площади, рядом с&nbsp;Васильевским спуском.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Площадь Революции&raquo;, &laquo;Охотный Ряд&raquo;, &laquo;Театральная&raquo;. От&nbsp;любой&nbsp;&mdash; 5&ndash;7 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Красная площадь&raquo;, &laquo;Моховая&raquo;, &laquo;Манежная площадь&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;Кремля, ГУМа или Исторического музея&nbsp;&mdash; буквально несколько минут.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение храма:</strong> <br>
            &bull; Внутри работает музей, вход&nbsp;&mdash; по&nbsp;билетам.<br>
            &bull; Летом очереди бывают длинными, лучше приходить утром.<br>
            &bull; Фотографировать можно, но&nbsp;без вспышки.<br>
            &bull; Внутри прохладно&nbsp;&mdash; стены сохраняют температуру независимо от&nbsp;сезона.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Hram_Vasiliya_Blazhennogo/Hram_Vasiliya_Blazhennogo_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`

        },

// ======================== Парк «Зарядье» =============================

        {
        id: 'park_zaryadie',
        title: 'Парк «Зарядье»',
        image:'../../img/moscow/cards_tochki/Park_Zaryade_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Парк &laquo;Зарядье&raquo;</h1>
</div>
<!-- Блок 1: Парк «Зарядье» — природа и мегаполис в одном ощущении -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Парк &laquo;Зарядье&raquo;&nbsp;&mdash; природа и&nbsp;мегаполис в&nbsp;одном ощущении</h2>
        <p class="modalBlock__description">
            Парк &laquo;Зарядье&raquo;&nbsp;&mdash; это новое лицо Москвы, пространство, где городская энергия соединяется с&nbsp;природой. Созданный на&nbsp;месте старинного района у&nbsp;стен Кремля, парк стал символом современной столицы: открытым, инновационным, живым.
        </p>
        <p class="modalBlock__description">
            Здесь можно пройти от&nbsp;тундры к&nbsp;степи за&nbsp;несколько минут, увидеть Москву с&nbsp;высоты &laquo;Парящего моста&raquo; и&nbsp;почувствовать, как природа становится частью городской ткани.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Zaryade/Park_Zaryade_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Ландшафтная архитектура, которая меняет представление о парках -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Ландшафтная архитектура, которая меняет представление о&nbsp;парках</h2>
        <p class="modalBlock__description">
            &laquo;Зарядье&raquo;&nbsp;&mdash; это не&nbsp;просто зеленая зона, а&nbsp;тщательно продуманная экосистема. Архитекторы создали четыре природные зоны России&nbsp;&mdash; тундру, степь, лес и&nbsp;прибрежье&nbsp;&mdash; и&nbsp;разместили их&nbsp;в&nbsp;центре мегаполиса так, чтобы они плавно перетекали друг в&nbsp;друга.
        </p>
        <p class="modalBlock__description">
            Что формирует уникальный облик парка:<br>
            &bull; &laquo;Парящий мост&raquo;&nbsp;&mdash; изогнутая смотровая площадка над Москвой-рекой, ставшая новой визитной карточкой города.<br>
            &bull; Флорариум и&nbsp;подземные павильоны, скрытые под холмами.<br>
            &bull; Ландшафтные холмы, создающие ощущение природного рельефа.<br>
            &bull; Стеклянная &laquo;Кристальная кора&raquo;, под которой проходят концерты и&nbsp;мероприятия.<br>
            Архитектура парка&nbsp;&mdash; это диалог природы и&nbsp;технологий, где каждый элемент работает на&nbsp;создание ощущения живого, дышащего пространства.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Zaryade/Park_Zaryade_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Природные зоны, созданные вручную -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природные зоны, созданные вручную</h2>
        <p class="modalBlock__description">
            Каждая зона&nbsp;&mdash; это миниатюрная модель российского ландшафта. Тундра со&nbsp;мхами и&nbsp;карликовыми кустарниками, степь с&nbsp;сухими травами, лес с&nbsp;хвойными деревьями&nbsp;&mdash; все это создает эффект путешествия по&nbsp;стране без выхода из&nbsp;центра Москвы.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Медиацентр с&nbsp;интерактивными выставками и&nbsp;панорамными залами.<br>
            &bull; Флорариум, где собраны редкие растения.<br>
            &bull; Подземная филармония с&nbsp;уникальной акустикой.<br>
            &bull; Экотропы, по&nbsp;которым можно гулять.<br>
            Парк устроен так, что каждый поворот открывает новую перспективу&nbsp;&mdash; от&nbsp;тихих уголков до&nbsp;панорамных видов на&nbsp;Кремль.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Zaryade/Park_Zaryade_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: «Зарядье» как культурный и городской символ -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">&laquo;Зарядье&raquo; как культурный и&nbsp;городской символ</h2>
        <p class="modalBlock__description">
            Парк стал одним из&nbsp;главных проектов современной Москвы&nbsp;&mdash; местом, где встречаются архитектура, экология и&nbsp;городская жизнь.
        </p>
        <p class="modalBlock__description">
            Почему он&nbsp;так важен:<br>
            &bull; Это первый крупный парк, построенный в&nbsp;центре Москвы за&nbsp;десятилетия.<br>
            &bull; Он&nbsp;стал пространством для фестивалей, концертов и&nbsp;образовательных программ.<br>
            &bull; &laquo;Парящий мост&raquo; превратился в&nbsp;новую открытку Москвы, узнаваемую во&nbsp;всем мире.<br>
            &bull; Парк показывает, как современный город может интегрировать природу, не&nbsp;теряя динамики.<br>
            &laquo;Зарядье&raquo;&nbsp;&mdash; это символ обновления столицы, ее&nbsp;стремления к&nbsp;открытости и&nbsp;инновациям.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Zaryade/Park_Zaryade_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до парка «Зарядье» -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;парка &laquo;Зарядье&raquo;</h2>
        <p class="modalBlock__description">
            Парк расположен рядом с&nbsp;Красной площадью и&nbsp;Москворецкой набережной.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Китай‑город&raquo;, &laquo;Площадь Революции&raquo;, &laquo;Охотный Ряд&raquo;. От&nbsp;любой&nbsp;&mdash; 5&ndash;10 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Москворецкая&raquo;, &laquo;Китай‑город&raquo;, &laquo;Варварка&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;Красной площади&nbsp;&mdash; 3&ndash;5&nbsp;минут. От&nbsp;Кремля&nbsp;&mdash; буквально через мост.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение парка:</strong> <br>
            &bull; Вход свободный, парк открыт круглосуточно.<br>
            &bull; Некоторые павильоны работают по&nbsp;расписанию и&nbsp;требуют билетов.<br>
            &bull; Лучшее время для прогулки&nbsp;&mdash; раннее утро или закат, когда &laquo;Парящий мост&raquo; особенно красив.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Zaryade/Park_Zaryade_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`

        },
// ======================== Москва-Сити =============================

        {
        id: 'moscow-city',
        title: 'Москва-Сити',
        image:'../../img/moscow/cards_tochki/Moskva_Siti_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Москва‑Сити</h1>
</div>
<!-- Блок 1: Москва‑Сити — вертикальный символ новой столицы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Москва‑Сити&nbsp;&mdash; вертикальный символ новой столицы</h2>
        <p class="modalBlock__description">
            Москва‑Сити&nbsp;&mdash; это не&nbsp;просто деловой квартал, а&nbsp;архитектурный манифест современной Москвы. Здесь небоскребы поднимаются над рекой, отражая в&nbsp;стекле облака и&nbsp;закаты, а&nbsp;городская энергия ощущается буквально в&nbsp;воздухе.
        </p>
        <p class="modalBlock__description">
            Комплекс стал символом обновления столицы, ее&nbsp;стремления к&nbsp;высоте, скорости и&nbsp;технологичности. Это место, где Москва показывает свое будущее.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskva_Siti/Moskva_Siti_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный прорыв, изменивший силуэт города -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный прорыв, изменивший силуэт города</h2>
        <p class="modalBlock__description">
            Москва‑Сити&nbsp;&mdash; первый в&nbsp;России район небоскребов, построенный по&nbsp;принципам мировых мегаполисов. Каждый башенный комплекс&nbsp;&mdash; самостоятельный архитектурный образ, а&nbsp;вместе они создают узнаваемую панораму, которую невозможно спутать ни&nbsp;с&nbsp;чем.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Москва‑Сити:<br>
            &bull; Башня &laquo;Федерация&raquo;&nbsp;&mdash; одна из&nbsp;самых высоких в&nbsp;Европе, с&nbsp;динамичным силуэтом.<br>
            &bull; &laquo;Око&raquo;&nbsp;&mdash; строгая геометрия и&nbsp;эффектная подсветка.<br>
            &bull; &laquo;Эволюция&raquo;&nbsp;&mdash; спиральная форма, напоминающая ленту ДНК.<br>
            &bull; &laquo;Империя&raquo;&nbsp;&mdash; сочетание стекла и&nbsp;металла в&nbsp;классическом небоскребном стиле.<br>
            &bull; &laquo;Меркурий&raquo;&nbsp;&mdash; золотистый фасад, меняющий оттенок в&nbsp;зависимости от&nbsp;света.<br>
            Архитектура Москва‑Сити&nbsp;&mdash; это диалог технологий и&nbsp;эстетики, где каждая башня&nbsp;&mdash; инженерный эксперимент и&nbsp;художественное высказывание.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskva_Siti/Moskva_Siti_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Внутренний мир небоскребов — город в городе -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Внутренний мир небоскребов&nbsp;&mdash; город в&nbsp;городе</h2>
        <p class="modalBlock__description">
            Москва‑Сити&nbsp;&mdash; это не&nbsp;только офисы. Внутри небоскребов скрыты рестораны, смотровые площадки, галереи, апартаменты, торговые зоны и&nbsp;даже фитнес‑центры. Здесь можно провести целый день, не&nbsp;покидая комплекса.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Смотровые площадки на&nbsp;высоте более 300&nbsp;метров, откуда открывается панорама Москвы на&nbsp;360&nbsp;градусов.<br>
            &bull; Рестораны с&nbsp;видом на&nbsp;город, где закат превращается в&nbsp;отдельное представление.<br>
            &bull; Подземные переходы и&nbsp;торговые галереи, связывающие башни между собой.<br>
            &bull; Современные интерьеры, выполненные в&nbsp;стилях хай‑тек и&nbsp;минимализм.<br>
            Внутри Москва‑Сити ощущается свой отдельный мир&nbsp;&mdash; быстрый, динамичный, вертикальный.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskva_Siti/Moskva_Siti_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Москва‑Сити как символ новой городской идентичности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Москва‑Сити как символ новой городской идентичности</h2>
        <p class="modalBlock__description">
            Комплекс стал важной частью культурного кода современной Москвы. Он&nbsp;показывает, что город может быть одновременно историческим и&nbsp;ультрасовременным.
        </p>
        <p class="modalBlock__description">
            Почему Москва‑Сити так значим:<br>
            &bull; Это самый масштабный проект современной российской архитектуры.<br>
            &bull; Он&nbsp;стал центром деловой активности, где работают крупнейшие компании.<br>
            &bull; Москва‑Сити&nbsp;&mdash; новая туристическая точка, привлекающая миллионы гостей.<br>
            &bull; Панорама небоскребов стала визитной карточкой Москвы XXI&nbsp;века.<br>
            Москва‑Сити&nbsp;&mdash; это образ столицы, которая не&nbsp;боится высоты и&nbsp;перемен.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskva_Siti/Moskva_Siti_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Москва‑Сити -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Москва‑Сити</h2>
        <p class="modalBlock__description">
            Комплекс расположен на&nbsp;Пресненской набережной, недалеко от&nbsp;Третьего транспортного кольца.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Деловой центр&raquo;, &laquo;Выставочная&raquo;, &laquo;Международная&raquo;. Все они ведут прямо к&nbsp;башням.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;МЦК:</strong> Станция &laquo;Деловой центр&raquo; находится в&nbsp;шаговой доступности.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Экспоцентр&raquo;, &laquo;Пресненская набережная&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;набережной Тараса Шевченко&nbsp;&mdash; 10&ndash;15 минут вдоль реки.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение комплекса:</strong> <br>
            &bull; Смотровые площадки работают по&nbsp;расписанию, билеты лучше покупать заранее.<br>
            &bull; Вечером небоскребы особенно красивы благодаря подсветке.<br>
            &bull; Внутри много ресторанов и&nbsp;кафе&nbsp;&mdash; можно совместить прогулку с&nbsp;ужином.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskva_Siti/Moskva_Siti_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`

        },


// ======================== Воробьевы горы =============================

        {
        id: 'vorobei-gora',
        title: 'Воробьевы горы',
        image:'../../img/moscow/cards_tochki/Vorobevy_gory_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Воробьёвы горы</h1>
</div>
<!-- Блок 1: Воробьевы горы — панорама Москвы с высоты тишины -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Воробьевы горы&nbsp;&mdash; панорама Москвы с&nbsp;высоты тишины</h2>
        <p class="modalBlock__description">
            Воробьевы горы&nbsp;&mdash; одно из&nbsp;самых знаковых мест столицы, где Москва раскрывается во&nbsp;всей своей широте. Здесь город словно делает паузу: шум растворяется в&nbsp;листве, а&nbsp;над Москвой‑рекой открывается вид, который невозможно забыть.
        </p>
        <p class="modalBlock__description">
            Это природный амфитеатр, где встречаются история, наука, спорт и&nbsp;романтика. Место, куда приходят за&nbsp;вдохновением, прогулками и&nbsp;ощущением свободы.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Vorobevy_gory/Vorobevy_gory_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Природный рельеф, создающий уникальную панораму -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природный рельеф, создающий уникальную панораму</h2>
        <p class="modalBlock__description">
            Воробьевы горы&nbsp;&mdash; это высокий берег Москвы‑реки, покрытый лесом и&nbsp;прорезанный тропами. Рельеф здесь играет ключевую роль: именно благодаря крутым склонам и&nbsp;открытым площадкам отсюда видна вся центральная Москва.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Воробьевых гор:<br>
            &bull; Смотровая площадка у&nbsp;МГУ, откуда открывается один из&nbsp;лучших видов на&nbsp;столицу.<br>
            &bull; Лесные тропы, ведущие вдоль склона и&nbsp;к&nbsp;реке.<br>
            &bull; Канатная дорога, соединяющая горы с&nbsp;Лужниками.<br>
            &bull; Пешеходные маршруты, проходящие через природный заповедник.<br>
            Природа здесь удивительно гармонична: густые деревья, крутые обрывы, широкая река&nbsp;&mdash; все это создает ощущение простора и&nbsp;легкости.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Vorobevy_gory/Vorobevy_gory_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Смотровая площадка — сердце Воробьевых гор -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Смотровая площадка&nbsp;&mdash; сердце Воробьевых гор</h2>
        <p class="modalBlock__description">
            Отсюда открывается панорама, которую знают по&nbsp;открыткам и&nbsp;фильмам: Москва‑Сити, Лужники, сталинские высотки, купола храмов и&nbsp;широкая лента реки. Вечером здесь особенно красиво&nbsp;&mdash; город зажигает огни, и&nbsp;панорама превращается в&nbsp;живую картину.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Канатная дорога, пролетающая над рекой и&nbsp;стадионом.<br>
            &bull; Тропы заповедника, где можно гулять в&nbsp;тишине, не&nbsp;слыша города.<br>
            &bull; Смотровые точки на&nbsp;разных уровнях, открывающие новые ракурсы.<br>
            &bull; Близость МГУ, чьи башни создают узнаваемый силуэт.<br>
            Воробьевы горы&nbsp;&mdash; это место, где можно провести час или целый день, каждый раз открывая что‑то новое.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Vorobevy_gory/Vorobevy_gory_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Воробьевы горы как культурный и спортивный символ -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Воробьевы горы как культурный и&nbsp;спортивный символ</h2>
        <p class="modalBlock__description">
            Это не&nbsp;просто природная зона&nbsp;&mdash; это часть культурного кода Москвы.
        </p>
        <p class="modalBlock__description">
            Почему Воробьевы горы так важны:<br>
            &bull; Здесь находится главный корпус МГУ, один из&nbsp;символов столицы.<br>
            &bull; Это популярное место для спортсменов: бегунов, велосипедистов, лыжников.<br>
            &bull; На&nbsp;склонах проходят фестивали, концерты и&nbsp;спортивные мероприятия.<br>
            &bull; Воробьевы горы&nbsp;&mdash; место встреч, свиданий и&nbsp;прогулок, ставшее частью городской романтики.<br>
            Это пространство, где природа и&nbsp;город живут в&nbsp;гармонии, создавая атмосферу легкости и&nbsp;вдохновения.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Vorobevy_gory/Vorobevy_gory_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Воробьевых гор -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Воробьевых гор</h2>
        <p class="modalBlock__description">
            Горы расположены на&nbsp;юго‑западе Москвы, вдоль Москвы‑реки.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Воробьевы горы&raquo; (на&nbsp;мосту над рекой), &laquo;Университет&raquo;. От&nbsp;обеих&nbsp;&mdash; 10&ndash;15 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Смотровая площадка&raquo;, &laquo;Университет&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;МГУ&nbsp;&mdash; через аллеи и&nbsp;лестницы. От&nbsp;Лужников&nbsp;&mdash; по&nbsp;канатной дороге или вдоль реки.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение:</strong> <br>
            &bull; Вход свободный.<br>
            &bull; Лучшее время&nbsp;&mdash; закат или раннее утро.<br>
            &bull; Зимой тропы превращаются в&nbsp;лыжные маршруты.<br>
            &bull; Летом особенно приятно гулять по&nbsp;тенистым дорожкам.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Vorobevy_gory/Vorobevy_gory_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`

        }
    ],
// ======================== Выбраться на природу =============================
// ======================== Выбраться на природу =============================

    nature: [

    {
        id: 'king_park',
        title: 'Царицыно',
        image:'../../img/moscow/cards_nature/Caricyno_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Царицыно</h1>
</div>
<!-- Блок 1: Царицыно — дворцовый мираж Екатерининской эпохи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Царицыно&nbsp;&mdash; дворцовый мираж Екатерининской эпохи</h2>
        <p class="modalBlock__description">
            Царицыно&nbsp;&mdash; одно из&nbsp;самых романтичных мест Москвы, где история XVIII века оживает среди прудов, холмов и&nbsp;готических дворцов.
        </p>
        <p class="modalBlock__description">
            Созданный по&nbsp;приказу Екатерины&nbsp;II, этот ансамбль задумывался как парадная резиденция императрицы, но&nbsp;так и&nbsp;не&nbsp;был завершен при ее&nbsp;жизни. Сегодня Царицыно&nbsp;&mdash; это пространство, где можно почувствовать дыхание эпохи Просвещения, прогуливаясь по&nbsp;аллеям, которые помнят шаги придворных дам и&nbsp;архитекторов‑новаторов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Caricyno/Caricyno_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурная фантазия в красном кирпиче и белом камне -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурная фантазия в&nbsp;красном кирпиче и&nbsp;белом камне</h2>
        <p class="modalBlock__description">
            Царицынские дворцы&nbsp;&mdash; редкий пример русской псевдоготики, созданной архитекторами Василием Баженовым и&nbsp;Матвеем Казаковым. Их&nbsp;проект стал смелым экспериментом, объединившим европейские мотивы и&nbsp;русскую декоративность.
        </p>
        <p class="modalBlock__description">
            Что формирует уникальный облик ансамбля:<br>
            &bull; Большой дворец&nbsp;&mdash; величественное здание с&nbsp;арками, башнями и&nbsp;резными фасадами.<br>
            &bull; Хлебный дом&nbsp;&mdash; круглый корпус с&nbsp;ажурными окнами и&nbsp;необычной акустикой.<br>
            &bull; Фигурный мост&nbsp;&mdash; декоративная &laquo;крепостная&raquo; арка, напоминающая сказочный портал.<br>
            &bull; Оперный дом&nbsp;&mdash; камерное пространство для придворных представлений.<br>
            Архитектура Царицыно&nbsp;&mdash; это игра света и&nbsp;тени, сочетание строгих линий и&nbsp;декоративных деталей, создающих ощущение сказочного города.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Caricyno/Caricyno_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Внутренний мир дворцов — ожившая история и музейные коллекции -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Внутренний мир дворцов&nbsp;&mdash; ожившая история и&nbsp;музейные коллекции</h2>
        <p class="modalBlock__description">
            Внутри Большого дворца&nbsp;&mdash; музейный комплекс, где исторические интерьеры сочетаются с&nbsp;современными экспозициями. Залы украшены лепниной, мрамором, декоративными панно и&nbsp;световыми инсталляциями, которые подчеркивают масштаб и&nbsp;красоту пространства.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Парадные галереи, восстановленные по&nbsp;архивным чертежам.<br>
            &bull; Выставки, посвященные Екатерининской эпохе, русской усадебной культуре и&nbsp;декоративному искусству.<br>
            &bull; Интерактивные экспозиции, позволяющие увидеть, каким Царицыно задумывалось изначально.<br>
            &bull; Акустика Хлебного дома, где проходят концерты и&nbsp;музыкальные вечера.<br>
            Каждый зал&nbsp;&mdash; это отдельная история, в&nbsp;которой оживает мир XVIII&nbsp;века.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Caricyno/Caricyno_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Царицыно как природный и культурный оазис -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Царицыно как природный и&nbsp;культурный оазис</h2>
        <p class="modalBlock__description">
            Парк Царицыно&nbsp;&mdash; это не&nbsp;только архитектура, но&nbsp;и&nbsp;огромная природная территория с&nbsp;прудами, холмами и&nbsp;тенистыми аллеями.
        </p>
        <p class="modalBlock__description">
            Почему парк так важен:<br>
            &bull; Это один из&nbsp;крупнейших исторических парков Москвы.<br>
            &bull; Здесь сохранились старинные липовые аллеи, пруды и&nbsp;каскады.<br>
            &bull; Парк стал популярным местом для прогулок, фотосессий и&nbsp;фестивалей.<br>
            &bull; Летом здесь проходят концерты под открытым небом, а&nbsp;зимой в&nbsp;парке&nbsp;&mdash; ярмарки и&nbsp;катки.<br>
            Царицыно&nbsp;&mdash; это пространство, где можно почувствовать гармонию природы и&nbsp;архитектуры, забыв о&nbsp;городской суете.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Caricyno/Caricyno_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до парка Царицыно -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;парка Царицыно</h2>
        <p class="modalBlock__description">
            Парк расположен на&nbsp;юге Москвы, рядом с&nbsp;одноименной станцией метро.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Царицыно&raquo;, &laquo;Орехово&raquo;. От&nbsp;обеих&nbsp;&mdash; 5&ndash;10 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Музей‑заповедник Царицыно&raquo;, &laquo;Дворцовый мост&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;станции метро &laquo;Царицыно&raquo;&nbsp;&mdash; через парк вдоль прудов.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение комплекса:</strong> <br>
            &bull; Вход в&nbsp;парк свободный.<br>
            &bull; Дворцы и&nbsp;музеи работают по&nbsp;расписанию, билеты можно купить онлайн.<br>
            &bull; Летом лучше приходить утром или ближе к&nbsp;закату&nbsp;&mdash; в&nbsp;это время парк особенно красив.<br>
            &bull; На&nbsp;территории много кафе и&nbsp;зон отдыха.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Caricyno/Caricyno_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`
    },

// ======================== Коломенское =============================
    {
        id: 'Kolomenskoye',
        title: 'Коломенское',
        image:'../../img/moscow/cards_nature/Kolomenskoe_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Коломенское</h1>
</div>
<!-- Блок 1: Коломенское — древняя резиденция на высоких холмах Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Коломенское&nbsp;&mdash; древняя резиденция на&nbsp;высоких холмах Москвы</h2>
        <p class="modalBlock__description">
            Коломенское&nbsp;&mdash; это место, где история Москвы ощущается особенно глубоко. Здесь, на&nbsp;высоком берегу Москвы‑реки, стояли княжеские дворы, царские резиденции и&nbsp;деревянные дворцы, поражавшие современников своим размахом.
        </p>
        <p class="modalBlock__description">
            Сегодня Коломенское&nbsp;&mdash; музей‑заповедник, где природа, архитектура и&nbsp;древние святыни образуют единое пространство, наполненное тишиной и&nbsp;величием.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Kolomenskoe/Kolomenskoe_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурное наследие, сохранившее дыхание древней Руси -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурное наследие, сохранившее дыхание древней Руси</h2>
        <p class="modalBlock__description">
            Коломенское&nbsp;&mdash; один из&nbsp;немногих уголков Москвы, где можно увидеть подлинные памятники XVI&ndash;XVIII&nbsp;веков, сохранившиеся в&nbsp;их&nbsp;историческом окружении.
        </p>
        <p class="modalBlock__description">
            Что формирует уникальный облик Коломенского:<br>
            &bull; Церковь Вознесения Господня&nbsp;&mdash; белокаменный шедевр XVI&nbsp;века, включенный в&nbsp;список ЮНЕСКО.<br>
            &bull; Дворец царя Алексея Михайловича&nbsp;&mdash; реконструкция легендарного &laquo;восьмого чуда света&raquo;, деревянного дворца XVII&nbsp;века.<br>
            &bull; Садово‑парковые ансамбли, сохранившие планировку царских времен.<br>
            &bull; Старинные хозяйственные постройки&nbsp;&mdash; кузницы, амбары, мельницы.<br>
            Архитектура Коломенского&nbsp;&mdash; это редкое сочетание древнерусского зодчества, деревянной резьбы и&nbsp;белокаменной пластики, которое создает ощущение путешествия в&nbsp;прошлое.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Kolomenskoe/Kolomenskoe_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Дворец Алексея Михайловича — ожившая легенда -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Дворец Алексея Михайловича&nbsp;&mdash; ожившая легенда</h2>
        <p class="modalBlock__description">
            Воссозданный по&nbsp;чертежам XVII&nbsp;века, дворец поражает богатством интерьеров: расписные потолки, резные наличники, яркие палаты, украшенные орнаментами. Каждый зал рассказывает о&nbsp;быте царской семьи, придворных церемониях и&nbsp;традициях Московского царства.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Парадные палаты с&nbsp;яркими росписями и&nbsp;деревянной резьбой.<br>
            &bull; Интерактивные экспозиции, позволяющие увидеть жизнь XVII века изнутри.<br>
            &bull; Древние храмы, сохранившие подлинные фрески и&nbsp;иконы.<br>
            &bull; Археологические находки, свидетельствующие о&nbsp;жизни на&nbsp;этих холмах еще в&nbsp;дохристианскую эпоху.<br>
            Коломенское&nbsp;&mdash; это музей под открытым небом, где каждый объект&nbsp;&mdash; часть большого исторического полотна.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Kolomenskoe/Kolomenskoe_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Коломенское как природный оазис среди мегаполиса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Коломенское как природный оазис среди мегаполиса</h2>
        <p class="modalBlock__description">
            Парк Коломенское&nbsp;&mdash; это огромная территория с&nbsp;холмами, садами, лугами и&nbsp;видами на&nbsp;Москву‑реку. Здесь можно гулять часами, находя все новые маршруты.
        </p>
        <p class="modalBlock__description">
            Почему парк так важен:<br>
            &bull; Это одна из&nbsp;крупнейших природных зон Москвы, сохранившая исторический ландшафт.<br>
            &bull; Весной здесь цветут яблоневые сады, превращая парк в&nbsp;бело‑розовое облако.<br>
            &bull; Летом открываются панорамы на&nbsp;реку и&nbsp;городские холмы.<br>
            &bull; Зимой Коломенское превращается в&nbsp;сказочный пейзаж с&nbsp;тишиной и&nbsp;белыми просторами.<br>
            Коломенское&nbsp;&mdash; это место, где природа и&nbsp;история существуют в&nbsp;гармонии, создавая атмосферу спокойствия и&nbsp;величия.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Kolomenskoe/Kolomenskoe_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до музея-заповедника -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;музея-заповедника</h2>
        <p class="modalBlock__description">
            Парк расположен на&nbsp;юге Москвы, вдоль Москвы‑реки.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Коломенская&raquo;, &laquo;Каширская&raquo;. От&nbsp;обеих&nbsp;&mdash; 10&ndash;15 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Музей‑заповедник &laquo;Коломенское&raquo;, &laquo;Проспект Андропова&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;станции метро &laquo;Коломенская&raquo;&nbsp;&mdash; через главный вход, вдоль аллей и&nbsp;садов.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение комплекса:</strong> <br>
            &bull; Вход в&nbsp;парк свободный.<br>
            &bull; Дворец и&nbsp;музеи работают по&nbsp;расписанию, билеты доступны онлайн.<br>
            &bull; Весной и&nbsp;осенью особенно красиво&nbsp;&mdash; мягкий свет подчеркивает рельеф холмов.<br>
            &bull; На&nbsp;территории есть кафе, смотровые площадки и&nbsp;зоны отдыха.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Kolomenskoe/Kolomenskoe_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`
    },

// ======================== Серебряный Бор =============================
     {
        id: 'Silver_bor',
        title: 'Серебряный Бор',
        image:'../../img/moscow/cards_nature/Serebryanyy_Bor_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Серебряный Бор</h1>
</div>
<!-- Блок 1: Серебряный Бор — сосновый полуостров тишины в черте мегаполиса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Серебряный Бор&nbsp;&mdash; сосновый полуостров тишины в&nbsp;черте мегаполиса</h2>
        <p class="modalBlock__description">
            Серебряный Бор&nbsp;&mdash; одно из&nbsp;самых природных и&nbsp;спокойных мест Москвы. Этот зеленый полуостров, окруженный водами Москвы‑реки, словно создан для того, чтобы дать горожанам передышку от&nbsp;ритма мегаполиса.
        </p>
        <p class="modalBlock__description">
            Здесь воздух пахнет сосной, вода отражает небо, а&nbsp;городские звуки растворяются в&nbsp;шелесте ветра. Серебряный Бор&nbsp;&mdash; это редкий пример природного уголка, сохранившего свой характер в&nbsp;пределах столицы.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Serebryanyy_Bor/Serebryanyy_Bor_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Природный ландшафт, который формирует атмосферу отдыха -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природный ландшафт, который формирует атмосферу отдыха</h2>
        <p class="modalBlock__description">
            Серебряный Бор&nbsp;&mdash; это сочетание сосновых лесов, песчаных пляжей, тихих заливов и&nbsp;прогулочных троп. Ландшафт здесь почти нетронут: высокие сосны создают тень, а&nbsp;вода делает воздух свежим даже в&nbsp;жару.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Серебряного Бора:<br>
            &bull; Сосновые рощи, наполняющие воздух ароматом смолы.<br>
            &bull; Песчаные пляжи, где летом собираются любители солнца и&nbsp;воды.<br>
            &bull; Заливы и&nbsp;протоки, создающие ощущение уединенности.<br>
            &bull; Прогулочные и&nbsp;велосипедные маршруты, проходящие через лес и&nbsp;вдоль воды.<br>
            Природа здесь работает как естественный антистресс&nbsp;&mdash; достаточно сделать несколько шагов от&nbsp;дороги, чтобы почувствовать себя вдали от&nbsp;города.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Serebryanyy_Bor/Serebryanyy_Bor_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Пляжи и зоны отдыха -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Пляжи и&nbsp;зоны отдыха</h2>
        <p class="modalBlock__description">
            Серебряный Бор известен своими оборудованными пляжами, где есть все для комфортного отдыха: шезлонги, кафе, прокат лодок и&nbsp;сапов. Вода в&nbsp;заливах спокойная, а&nbsp;песчаные берега создают атмосферу курорта.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Пляж &#8470;&nbsp;3&nbsp;&mdash; самый популярный, с&nbsp;широкими песчаными зонами.<br>
            &bull; Тихие тропы в&nbsp;глубине леса, где можно гулять в&nbsp;одиночестве.<br>
            &bull; Видовые точки на&nbsp;заливы, особенно красивые на&nbsp;закате.<br>
            &bull; Маршруты для бега и&nbsp;велопрогулок, проходящие по&nbsp;тенистым аллеям.<br>
            Серебряный Бор&nbsp;&mdash; это место, где каждый может найти свой ритм: активный или созерцательный.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Serebryanyy_Bor/Serebryanyy_Bor_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Серебряный Бор как часть природного наследия Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Серебряный Бор как часть природного наследия Москвы</h2>
        <p class="modalBlock__description">
            Этот искусственный остров&nbsp;&mdash; не&nbsp;просто зона отдыха, а&nbsp;важная природная территория, охраняемая как памятник природы.
        </p>
        <p class="modalBlock__description">
            Почему Серебряный Бор так важен:<br>
            &bull; Это одна из&nbsp;крупнейших сосновых зон Москвы, сохранившая природный ландшафт.<br>
            &bull; Здесь обитают редкие виды птиц и&nbsp;животных, что делает территорию ценной для экологии.<br>
            &bull; Остров стал популярным местом для семейных прогулок, пикников и&nbsp;занятий спортом.<br>
            &bull; Серебряный Бор&nbsp;&mdash; пример того, как природа может сосуществовать с&nbsp;мегаполисом.<br>
            Это место напоминает, что Москва&nbsp;&mdash; не&nbsp;только город небоскребов, но&nbsp;и&nbsp;город природы.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Serebryanyy_Bor/Serebryanyy_Bor_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Серебряного Бора -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Серебряного Бора</h2>
        <p class="modalBlock__description">
            Серебряный Бор расположен на&nbsp;северо‑западе Москвы, в&nbsp;районе Хорошево‑Мневники.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Полежаевская&raquo;, &laquo;Хорошево&raquo; (МЦК), &laquo;Народное ополчение&raquo;. От&nbsp;станций метро можно доехать на&nbsp;автобусах или маршрутным такси.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Серебряный Бор&raquo;, &laquo;Пляж &#8470;&nbsp;3&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;остановок&nbsp;&mdash; несколько минут до&nbsp;входа в&nbsp;лесную зону или к&nbsp;пляжам.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение парка:</strong> <br>
            &bull; Вход свободный.<br>
            &bull; Летом лучше приходить утром или ближе к&nbsp;вечеру&nbsp;&mdash; в&nbsp;это время меньше людей и&nbsp;мягче свет.<br>
            &bull; В&nbsp;теплый сезон работают кафе, прокаты и&nbsp;зоны активностей.<br>
            &bull; Зимой Серебряный Бор превращается в&nbsp;тихий лес с&nbsp;заснеженными тропами.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Serebryanyy_Bor/Serebryanyy_Bor_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`
    },

// ======================== Парк Горького =============================

    {
        id: 'Gorkiy_park',
        title: 'Парк Горького',
        image:'../../img/moscow/cards_nature/Park_Gorkogo_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Парк Горького</h1>
</div>
<!-- Блок 1: Парк Горького — пространство свободы и городской энергии -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Парк Горького&nbsp;&mdash; пространство свободы и&nbsp;городской энергии</h2>
        <p class="modalBlock__description">
            Парк Горького&nbsp;&mdash; это сердце московского отдыха, место, где дышится свободнее, а&nbsp;жизнь словно переключается на&nbsp;другой ритм.
        </p>
        <p class="modalBlock__description">
            Открытый в&nbsp;1928&nbsp;году, он&nbsp;прошел путь от&nbsp;советского парка культуры до&nbsp;современного пространства, которое объединяет спорт, искусство, природу и&nbsp;городской стиль жизни. Сегодня Парк Горького&nbsp;&mdash; это символ обновленной Москвы, где каждый находит свое настроение.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Gorkogo/Park_Gorkogo_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный и природный ансамбль, создающий атмосферу легкости -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный и&nbsp;природный ансамбль, создающий атмосферу легкости</h2>
        <p class="modalBlock__description">
            Парк расположен вдоль Москвы‑реки, и&nbsp;именно сочетание воды, зелени и&nbsp;открытых пространств формирует его характер. Здесь нет ощущения городского парка&nbsp;&mdash; скорее, это большая живая территория, где природа и&nbsp;архитектура существуют в&nbsp;гармонии.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Парка Горького:<br>
            &bull; Главный вход с&nbsp;колоннадой, ставший символом парка.<br>
            &bull; Широкие набережные, идеально подходящие для прогулок и&nbsp;велопоездок.<br>
            &bull; Зеленые лужайки, где отдыхают, читают и&nbsp;занимаются йогой.<br>
            &bull; Современные павильоны, кафе и&nbsp;арт‑пространства.<br>
            &bull; Пешеходные мосты, соединяющие парк с&nbsp;Нескучным садом и&nbsp;Музеоном.<br>
            Парк Горького&nbsp;&mdash; это пространство, где архитектура подчеркивает свободу и&nbsp;открытость.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Gorkogo/Park_Gorkogo_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Парк, который живет в движении -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Парк, который живет в&nbsp;движении</h2>
        <p class="modalBlock__description">
            Здесь всегда что‑то происходит: занятия спортом, выставки, концерты, фестивали, спектакли и&nbsp;кинопоказы под открытым небом. Парк стал местом, где можно провести целый день и&nbsp;каждый раз открывать что‑то новое.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Велодорожки и&nbsp;беговые маршруты, проходящие вдоль реки.<br>
            &bull; Площадки для спорта, от&nbsp;тенниса до&nbsp;воркаута.<br>
            &bull; Зоны отдыха с&nbsp;шезлонгами и&nbsp;гамаками.<br>
            &bull; Летний кинотеатр, где показывают фильмы под звездами.<br>
            &bull; Зимой&nbsp;&mdash; огромный каток, превращающий парк в&nbsp;ледовый город.<br>
            &bull; Арт‑объекты и&nbsp;выставки, которые появляются в&nbsp;парке круглый год.<br>
            Парк Горького&nbsp;&mdash; это место, где можно быть активным или расслабленным, в&nbsp;зависимости от&nbsp;настроения.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Gorkogo/Park_Gorkogo_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Парк Горького как культурный символ Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Парк Горького как культурный символ Москвы</h2>
        <p class="modalBlock__description">
            Парк давно стал частью городской идентичности&nbsp;&mdash; местом встреч, свиданий, прогулок и&nbsp;событий.
        </p>
        <p class="modalBlock__description">
            Почему парк так важен:<br>
            &bull; Это один из&nbsp;самых популярных парков России, привлекающий миллионы посетителей.<br>
            &bull; Парк стал образцом современной городской среды, где комфорт и&nbsp;эстетика идут рука об&nbsp;руку.<br>
            &bull; Здесь проходят крупные фестивали, концерты, выставки и&nbsp;спортивные мероприятия.<br>
            &bull; Парк Горького&nbsp;&mdash; это точка притяжения для молодежи, семей, спортсменов и&nbsp;туристов.<br>
            Он&nbsp;отражает дух современной Москвы&nbsp;&mdash; динамичной, открытой и&nbsp;творческой.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Gorkogo/Park_Gorkogo_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Парка Горького -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Парка Горького</h2>
        <p class="modalBlock__description">
            Парк расположен в&nbsp;центре Москвы, вдоль Крымской набережной.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Парк культуры&raquo;, &laquo;Октябрьская&raquo;. От&nbsp;обеих&nbsp;&mdash; 10&nbsp;минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Парк Горького&raquo;, &laquo;Крымский мост&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;Крымского моста&nbsp;&mdash; через набережную и&nbsp;главный вход.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Gorkogo/Park_Gorkogo_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Посещение парка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Посещение парка</h2>
        <p class="modalBlock__description">
            &bull; Вход свободный.<br>
            &bull; Летом лучше приходить утром или ближе к&nbsp;закату&nbsp;&mdash; мягкий свет делает парк особенно красивым.<br>
            &bull; Зимой парк превращается в&nbsp;атмосферное пространство с&nbsp;огнями и&nbsp;катком.<br>
            &bull; На&nbsp;территории много кафе, прокатов, зон отдыха и&nbsp;арт‑объектов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Park_Gorkogo/Park_Gorkogo_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Усадьба Кусково =============================
    {
        id: 'Food_usadba',
        title: 'Усадьба Кусково',
        image:'../../img/moscow/cards_nature/Usadba_Kuskovo_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Усадьба Кусково</h1>
</div>
<!-- Блок 1: Кусково — загородный дворец Шереметевых, сохранивший блеск XVIII века -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Кусково&nbsp;&mdash; загородный дворец Шереметевых, сохранивший блеск XVIII века</h2>
        <p class="modalBlock__description">
            Кусково&nbsp;&mdash; одна из&nbsp;самых изящных усадеб Москвы, созданная графами Шереметевыми как парадная резиденция для летних приемов, театральных представлений и&nbsp;прогулок по&nbsp;французским садам.
        </p>
        <p class="modalBlock__description">
            Это место, где время словно остановилось: бело‑зеленый дворец отражается в&nbsp;гладкой воде пруда, аллеи ведут к&nbsp;павильонам, а&nbsp;тишина парка напоминает о&nbsp;былой роскоши дворянской жизни.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Usadba_Kuskovo/Usadba_Kuskovo_0.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный ансамбль, созданный для праздников и блеска -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный ансамбль, созданный для праздников и&nbsp;блеска</h2>
        <p class="modalBlock__description">
            Кусково&nbsp;&mdash; редкий пример усадебного комплекса, сохранившегося почти полностью. Архитектура здесь&nbsp;&mdash; это торжество барокко и&nbsp;классицизма, воплощенное в&nbsp;легких, праздничных формах.
        </p>
        <p class="modalBlock__description">
            Что формирует уникальный облик Кусково:<br>
            &bull; Большой дворец&nbsp;&mdash; деревянный, но&nbsp;выглядящий как каменный, с&nbsp;изящными колоннами и&nbsp;лепниной.<br>
            &bull; Голландский дом&nbsp;&mdash; миниатюрный павильон, стилизованный под европейский быт.<br>
            &bull; Итальянский дом&nbsp;&mdash; камерное пространство для выставок и&nbsp;приемов.<br>
            &bull; Грот&nbsp;&mdash; фантазийный павильон, украшенный раковинами, стеклом и&nbsp;мозаикой.<br>
            &bull; Оранжерея&nbsp;&mdash; светлая галерея, где когда‑то зимовали экзотические растения.<br>
            Архитектура усадьбы Кусково&nbsp;&mdash; это игра декоративных деталей, света и&nbsp;симметрии, создающая атмосферу легкости и&nbsp;праздника.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Usadba_Kuskovo/Usadba_Kuskovo_1.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Парадные интерьеры, сохранившие дух эпохи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Парадные интерьеры, сохранившие дух эпохи</h2>
        <p class="modalBlock__description">
            Внутри дворца&nbsp;&mdash; анфилада залов, украшенных росписями, позолотой, зеркалами и&nbsp;мебелью XVIII&nbsp;века. Каждый зал&nbsp;&mdash; это отдельная сцена, созданная для балов, музыкальных вечеров и&nbsp;дипломатических приемов.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Зеркальный зал, где свет отражается в&nbsp;десятках зеркал.<br>
            &bull; Парадная столовая с&nbsp;сервизами и&nbsp;декоративными панно.<br>
            &bull; Голубая гостиная, оформленная в&nbsp;модных оттенках эпохи.<br>
            &bull; Коллекции живописи и&nbsp;декоративного искусства, собранные Шереметевыми.<br>
            Интерьеры комплекса Кусково&nbsp;&mdash; это редкая возможность увидеть подлинный облик дворянской усадьбы XVIII&nbsp;века.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Usadba_Kuskovo/Usadba_Kuskovo_2.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Парк Кусково — французские аллеи, пруды и павильоны -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Парк Кусково&nbsp;&mdash; французские аллеи, пруды и&nbsp;павильоны</h2>
        <p class="modalBlock__description">
            Парк Кусково&nbsp;&mdash; это образец регулярного французского сада: прямые аллеи, геометрические клумбы, зеркальные пруды и&nbsp;декоративные павильоны.
        </p>
        <p class="modalBlock__description">
            Почему парк так важен:<br>
            &bull; Это один из&nbsp;крупнейших регулярных парков Москвы.<br>
            &bull; Здесь сохранились исторические аллеи, высаженные еще при Шереметевых.<br>
            &bull; Парк стал популярным местом для прогулок, фотосессий и&nbsp;летних фестивалей.<br>
            &bull; Летом здесь особенно красиво&nbsp;&mdash; зелень, вода и&nbsp;архитектура создают атмосферу европейской усадьбы.<br>
            Парк Кусково&nbsp;&mdash; это пространство, где природа и&nbsp;архитектура соединяются в&nbsp;гармоничный ансамбль.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Usadba_Kuskovo/Usadba_Kuskovo_3.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Кусково -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Кусково</h2>
        <p class="modalBlock__description">
            Усадьба расположена на&nbsp;востоке Москвы, в&nbsp;районе Вешняки.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Рязанский проспект&raquo;, &laquo;Новогиреево&raquo;. От&nbsp;станций&nbsp;&mdash; 15&ndash;20 минут пешком или несколько остановок на&nbsp;транспорте.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Усадьба Кусково&raquo;, &laquo;Музей Кусково&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;станции &laquo;Рязанский проспект&raquo;&nbsp;&mdash; через жилые кварталы и&nbsp;парк.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Usadba_Kuskovo/Usadba_Kuskovo_4.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Посещение -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Посещение</h2>
        <p class="modalBlock__description">
            &bull; Вход в&nbsp;парк частично свободный, в&nbsp;музеи&nbsp;&mdash; по&nbsp;билетам.<br>
            &bull; Летом лучше приходить утром или ближе к&nbsp;вечеру&nbsp;&mdash; мягкий свет подчеркивает архитектуру.<br>
            &bull; В&nbsp;павильонах прохладно&nbsp;&mdash; стены сохраняют температуру независимо от&nbsp;сезона.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Usadba_Kuskovo/Usadba_Kuskovo_5.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Национальный парк «Лосиный Остров» =============================

    {
        id: 'Park_los',
        title: 'Национальный парк «Лосиный Остров»',
        image:'../../img/moscow/cards_nature/Nacionalnyy_park_Losinyy_Ostrov_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Национальный парк &laquo;Лосиный Остров&raquo;</h1>
</div>
<!-- Блок 1: Лосиный Остров — дикая тайга внутри мегаполиса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Лосиный Остров&nbsp;&mdash; дикая тайга внутри мегаполиса</h2>
        <p class="modalBlock__description">
            Лосиный Остров&nbsp;&mdash; уникальный природный массив, который называют &laquo;легкими Москвы&raquo;. Это один из&nbsp;крупнейших городских лесов Европы, где среди сосен и&nbsp;болот можно встретить настоящих лосей, услышать тишину и&nbsp;почувствовать дыхание природы, сохранившейся почти в&nbsp;первозданном виде.
        </p>
        <p class="modalBlock__description">
            Здесь город исчезает буквально через несколько шагов, уступая место лесным тропам, озерам и&nbsp;заповедным уголкам.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Nacionalnyy_park_Losinyy_Ostrov/Nacionalnyy_park_Losinyy_Ostrov_0.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Природный ландшафт, сохранивший характер русской тайги -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природный ландшафт, сохранивший характер русской тайги</h2>
        <p class="modalBlock__description">
            Лосиный Остров&nbsp;&mdash; это редкое сочетание хвойных лесов, заболоченных участков, лугов и&nbsp;водоемов. Ландшафт здесь напоминает северные территории России, что делает парк уникальным для столичного региона.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Лосиного Острова:<br>
            &bull; Сосновые и&nbsp;еловые леса, создающие аромат смолы и&nbsp;прохладу даже в&nbsp;жару.<br>
            &bull; Болота и&nbsp;влажные луга, где обитают редкие птицы и&nbsp;животные.<br>
            &bull; Озера и&nbsp;ручьи, отражающие небо и&nbsp;кроны деревьев.<br>
            &bull; Природные тропы, ведущие вглубь заповедной зоны.<br>
            Ландшафт Лосиного Острова&nbsp;&mdash; это живой учебник природы, где можно увидеть экосистемы, характерные для средней полосы России.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Nacionalnyy_park_Losinyy_Ostrov/Nacionalnyy_park_Losinyy_Ostrov_1.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Внутренний мир парка — от встреч с лосями до экологических троп -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Внутренний мир парка&nbsp;&mdash; от&nbsp;встреч с&nbsp;лосями до&nbsp;экологических троп</h2>
        <p class="modalBlock__description">
            Лосиный Остров&nbsp;&mdash; одно из&nbsp;немногих мест Москвы, где можно встретить диких животных. Лоси, косули, бобры, лисы&nbsp;&mdash; все они обитают здесь свободно, и&nbsp;иногда выходят к&nbsp;тропам.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Лосиные тропы, на&nbsp;которых можно увидеть следы животных.<br>
            &bull; Экологические маршруты, оборудованные для прогулок и&nbsp;наблюдений.<br>
            &bull; Пруд &laquo;Медвежьи озера&raquo;, где летом собираются водоплавающие птицы.<br>
            &bull; Лесные поляны, идеально подходящие для спокойных прогулок и&nbsp;пикников.<br>
            Каждый маршрут открывает новый уголок природы&nbsp;&mdash; от&nbsp;густых хвойных массивов до&nbsp;открытых лугов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Nacionalnyy_park_Losinyy_Ostrov/Nacionalnyy_park_Losinyy_Ostrov_2.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Лосиный Остров как природный и культурный символ Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Лосиный Остров как природный и&nbsp;культурный символ Москвы</h2>
        <p class="modalBlock__description">
            Этот парк не&nbsp;просто зеленая зона, а&nbsp;важная часть природного наследия столицы.
        </p>
        <p class="modalBlock__description">
            Почему Лосиный Остров так важен:<br>
            &bull; Это один из&nbsp;первых национальных парков России, созданный для охраны природы.<br>
            &bull; Здесь обитают редкие виды животных и&nbsp;птиц, занесенные в&nbsp;Красную книгу.<br>
            &bull; Парк стал популярным местом для экологического туризма, прогулок и&nbsp;наблюдений за&nbsp;природой.<br>
            &bull; Лосиный Остров&nbsp;&mdash; пример того, как мегаполис может сосуществовать с&nbsp;дикой природой.<br>
            Это пространство, где можно почувствовать себя далеко за&nbsp;пределами города, оставаясь в&nbsp;нескольких километрах от&nbsp;центра.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Nacionalnyy_park_Losinyy_Ostrov/Nacionalnyy_park_Losinyy_Ostrov_3.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Лосиного Острова -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Лосиного Острова</h2>
        <p class="modalBlock__description">
            Парк занимает огромную территорию на&nbsp;северо‑востоке Москвы, и&nbsp;входов в&nbsp;него несколько.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Бульвар Рокоссовского&raquo;, &laquo;Белокаменная&raquo; (МЦК), &laquo;Щелковская&raquo;. От&nbsp;станций&nbsp;&mdash; 10&ndash;20 минут пешком до&nbsp;входов в&nbsp;парк.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Лосиный Остров&raquo;, &laquo;Медвежьи озера&raquo;, &laquo;Улица Краснобогатырская&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;МЦК &laquo;Белокаменная&raquo;&nbsp;&mdash; самый удобный путь к&nbsp;центральным тропам Лосиного Острова.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Nacionalnyy_park_Losinyy_Ostrov/Nacionalnyy_park_Losinyy_Ostrov_4.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Посещение -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Посещение</h2>
        <p class="modalBlock__description">
            &bull; Вход свободный.<br>
            &bull; В&nbsp;заповедных зонах действует строгий режим&nbsp;&mdash; нельзя шуметь, кормить животных или сходить с&nbsp;троп.<br>
            &bull; Лучшее время для прогулок&nbsp;&mdash; раннее утро или вечер, когда животные наиболее активны.<br>
            &bull; Зимой парк превращается в&nbsp;сказочный лес с&nbsp;лыжными маршрутами.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Nacionalnyy_park_Losinyy_Ostrov/Nacionalnyy_park_Losinyy_Ostrov_5.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

    ],

// ======================== Культурный код =============================
// ======================== Культурный код =============================


    culture: [
    {
        id: 'VDNH',
        title: 'ВДНХ',
        image:'../../img/moscow/cards_culture/VDNH_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">ВДНХ</h1>
</div>
<!-- Блок 1: ВДНХ — грандиозная выставка достижений под открытым небом -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">ВДНХ&nbsp;&mdash; грандиозная выставка достижений под открытым небом</h2>
        <p class="modalBlock__description">
            ВДНХ&nbsp;&mdash; это не&nbsp;просто парк или музей. Это целый город внутри города, созданный как витрина достижений страны, место, где архитектура, наука, культура и&nbsp;отдых соединяются в&nbsp;единое пространство.
        </p>
        <p class="modalBlock__description">
            Здесь сталинский ампир соседствует с&nbsp;модернизмом, фонтаны сияют золотом, а&nbsp;павильоны рассказывают о&nbsp;прошлом и&nbsp;будущем России. ВДНХ&nbsp;&mdash; это символ масштабности, амбиций и&nbsp;творческой энергии Москвы.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/VDNH/VDNH_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный ансамбль, отражающий эпохи и идеалы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный ансамбль, отражающий эпохи и&nbsp;идеалы</h2>
        <p class="modalBlock__description">
            ВДНХ&nbsp;&mdash; уникальный архитектурный комплекс, где каждая эпоха оставила свой след. Павильоны, фонтаны, арки и&nbsp;аллеи создают образ выставочного города, который до&nbsp;сих пор поражает своим размахом.
        </p>
        <p class="modalBlock__description">
            Что формирует облик ВДНХ:<br>
            &bull; Главный павильон &#8470;&nbsp;1&nbsp;&mdash; торжественный фасад с&nbsp;колоннами и&nbsp;золотыми звездами.<br>
            &bull; Фонтан &laquo;Дружба народов&raquo;&nbsp;&mdash; 16&nbsp;золотых фигур, символизирующих республики СССР.<br>
            &bull; Фонтан &laquo;Каменный цветок&raquo;&nbsp;&mdash; фантазия из&nbsp;мозаики, стекла и&nbsp;света.<br>
            &bull; Павильоны республик&nbsp;&mdash; архитектурные миниатюры, вдохновленные национальными традициями.<br>
            &bull; Арка Главного входа&nbsp;&mdash; монументальная композиция, встречающая гостей выставки.<br>
            Архитектура ВДНХ&nbsp;&mdash; это энциклопедия стилей: от&nbsp;сталинского ампира до&nbsp;советского модернизма и&nbsp;современных реконструкций.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/VDNH/VDNH_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Павильоны, где оживает история и наука -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Павильоны, где оживает история и&nbsp;наука</h2>
        <p class="modalBlock__description">
            ВДНХ&nbsp;&mdash; это десятки музеев, выставок и&nbsp;интерактивных пространств. Здесь можно узнать о&nbsp;космосе, биотехнологиях, сельском хозяйстве, дизайне и&nbsp;многом другом.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Павильон &laquo;Космос&raquo;&nbsp;&mdash; ракеты, спутники, макеты станций и&nbsp;история покорения Вселенной.<br>
            &bull; Музей &laquo;Россия&nbsp;&mdash; моя история&raquo;&nbsp;&mdash; мультимедийное путешествие по&nbsp;эпохам.<br>
            &bull; Павильон &laquo;Москвариум&raquo;&nbsp;&mdash; один из&nbsp;крупнейших океанариумов Европы.<br>
            &bull; Павильон &laquo;Молекулярная кухня&raquo; и&nbsp;гастрозоны, где можно попробовать необычные блюда.<br>
            &bull; Зеленые зоны и&nbsp;сады, идеально подходящие для прогулок.<br>
            ВДНХ&nbsp;&mdash; это место, где можно провести целый день, переходя от&nbsp;науки к&nbsp;искусству, от&nbsp;природы к&nbsp;архитектуре.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/VDNH/VDNH_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: ВДНХ как культурный и общественный центр Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">ВДНХ как культурный и&nbsp;общественный центр Москвы</h2>
        <p class="modalBlock__description">
            Сегодня ВДНХ&nbsp;&mdash; это не&nbsp;только выставка, но&nbsp;и&nbsp;пространство для фестивалей, концертов, ярмарок и&nbsp;спортивных мероприятий.
        </p>
        <p class="modalBlock__description">
            Почему ВДНХ так важна:<br>
            &bull; Это один из&nbsp;крупнейших выставочных комплексов мира.<br>
            &bull; Здесь проходят культурные фестивали, концерты, лекции и&nbsp;мастер‑классы.<br>
            &bull; В&nbsp;зимний сезон ВДНХ превращается в&nbsp;огромный каток, а&nbsp;летом&nbsp;&mdash; в&nbsp;площадку для спорта и&nbsp;отдыха.<br>
            &bull; Комплекс стал символом советской архитектуры и&nbsp;современной городской культуры.<br>
            ВДНХ&nbsp;&mdash; это место, где прошлое и&nbsp;будущее Москвы встречаются на&nbsp;одной аллее.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/VDNH/VDNH_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до ВДНХ -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;ВДНХ</h2>
        <p class="modalBlock__description">
            Комплекс расположен на&nbsp;северо‑востоке Москвы.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;ВДНХ&raquo;, &laquo;Алексеевская&raquo;. От&nbsp;станции &laquo;ВДНХ&raquo;&nbsp;&mdash; 5&ndash;7 минут пешком до&nbsp;главного входа.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;МЦК:</strong> Станция &laquo;Ростокино&raquo; находится рядом с&nbsp;северной частью парка.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;ВДНХ&raquo;, &laquo;Главный вход ВДНХ&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;проспекта Мира&nbsp;&mdash; через аллею к&nbsp;арке главного входа.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение</strong> <br>
            &bull; Вход на&nbsp;территорию свободный.<br>
            &bull; Музеи и&nbsp;павильоны работают по&nbsp;расписанию, билеты доступны онлайн.<br>
            &bull; Летом особенно красиво у&nbsp;фонтанов, а&nbsp;зимой&nbsp;&mdash; на&nbsp;катке.<br>
            &bull; На&nbsp;территории много кафе, зон отдыха и&nbsp;прокатов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/VDNH/VDNH_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`
    },

// ======================== Московское метро =============================
    {
        id: 'Moscow_metro',
        title: 'Московское метро',
        image:'../../img/moscow/cards_culture/Moskovskoe_metro_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Московское метро</h1>
</div>
<!-- Блок 1: Московское метро — подземный город, где история встречается с движением -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Московское метро&nbsp;&mdash; подземный город, где история встречается с&nbsp;движением</h2>
        <p class="modalBlock__description">
            Московское метро&nbsp;&mdash; это не&nbsp;просто транспортная система, а&nbsp;настоящий подземный музей, живой организм, который связывает районы столицы в&nbsp;единое целое.
        </p>
        <p class="modalBlock__description">
            Открытое в&nbsp;1935&nbsp;году, оно стало символом инженерного прорыва, архитектурного величия и&nbsp;городской динамики. Каждая станция&nbsp;&mdash; это отдельная история, а&nbsp;весь метрополитен&nbsp;&mdash; огромная сеть, по&nbsp;которой ежедневно перемещаются миллионы людей.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskoe_metro/Moskovskoe_metro_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурные шедевры под землей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурные шедевры под землей</h2>
        <p class="modalBlock__description">
            Московское метро называют &laquo;подземным дворцом&raquo;&nbsp;&mdash; и&nbsp;неслучайно. Многие станции строились как памятники эпохи, где архитектура, искусство и&nbsp;идеология переплелись в&nbsp;единый образ.
        </p>
        <p class="modalBlock__description">
            Что формирует уникальный облик метро:<br>
            &bull; &laquo;Комсомольская&raquo;&nbsp;&mdash; величественные колонны, барельефы и&nbsp;золотые орнаменты.<br>
            &bull; &laquo;Маяковская&raquo;&nbsp;&mdash; стальной модернизм и&nbsp;знаменитые потолочные панно.<br>
            &bull; &laquo;Площадь Революции&raquo;&nbsp;&mdash; бронзовые скульптуры, ставшие символом удачи.<br>
            &bull; &laquo;Новослободская&raquo;&nbsp;&mdash; витражи, напоминающие соборные окна.<br>
            &bull; &laquo;Арбатская&raquo;&nbsp;&mdash; изящные своды и&nbsp;декоративные элементы в&nbsp;стиле ампир.<br>
            Архитектура метро&nbsp;&mdash; это энциклопедия стилей: от&nbsp;сталинского ампира до&nbsp;минималистичного хай‑тека новых станций.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskoe_metro/Moskovskoe_metro_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Станции как музейные залы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Станции как музейные залы</h2>
        <p class="modalBlock__description">
            Многие станции украшены мозаиками, скульптурами, барельефами и&nbsp;декоративными панно. Здесь можно увидеть сюжеты из&nbsp;истории страны, образы труда, науки, спорта и&nbsp;культуры.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Глубина некоторых станций, уходящих на&nbsp;десятки метров под землю.<br>
            &bull; Современные линии, где используются световые инсталляции и&nbsp;мультимедийные панели.<br>
            &bull; Поезда нового поколения, оснащенные панорамными окнами и&nbsp;интерактивными экранами.<br>
            &bull; Чистота и&nbsp;порядок, ставшие визитной карточкой Московского метрополитена.<br>
            Каждая поездка превращается в&nbsp;путешествие по&nbsp;архитектурным эпохам и&nbsp;инженерным достижениям.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskoe_metro/Moskovskoe_metro_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Метро как культурный и транспортный символ Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Метро как культурный и&nbsp;транспортный символ Москвы</h2>
        <p class="modalBlock__description">
            Московский метрополитен&nbsp;&mdash; это не&nbsp;только транспорт, но&nbsp;и&nbsp;часть городской идентичности.
        </p>
        <p class="modalBlock__description">
            Почему метро так важно:<br>
            &bull; Это одна из&nbsp;крупнейших и&nbsp;самых загруженных систем метро в&nbsp;мире.<br>
            &bull; Метро стало символом советской архитектуры и&nbsp;инженерии.<br>
            &bull; Оно соединяет центральные районы с&nbsp;окраинами, делая город единым.<br>
            &bull; Метро&nbsp;&mdash; это культурное пространство, где проходят выставки, концерты и&nbsp;экскурсии.<br>
            Московское метро&nbsp;&mdash; это сердце города, которое всегда живое.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskoe_metro/Moskovskoe_metro_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как пользоваться Московским метро -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как пользоваться Московским метро</h2>
        <p class="modalBlock__description">
            <strong>Вход и&nbsp;навигация</strong> <br>
            &bull; Вход осуществляется по&nbsp;карте &laquo;Тройка&raquo;, банковским картам или QR‑билетам.<br>
            &bull; На&nbsp;станциях есть указатели на&nbsp;русском и&nbsp;английском языках.<br>
            &bull; Переходы между линиями обозначены разным цветом и&nbsp;номерами.
        </p>
        <p class="modalBlock__description">
            <strong>Полезные советы</strong> <br>
            &bull; В&nbsp;часы пик лучше избегать центральных пересадок&nbsp;&mdash; там особенно многолюдно.<br>
            &bull; На&nbsp;новых станциях есть лифты и&nbsp;тактильные указатели.<br>
            &bull; На&nbsp;многих станциях работает бесплатный Wi‑Fi.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskoe_metro/Moskovskoe_metro_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Как добраться до метро -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;метро</h2>
        <p class="modalBlock__description">
            Метро охватывает практически всю Москву, и&nbsp;ближайшая станция есть почти в&nbsp;каждом районе.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте</strong> <br>
            Автобусы, трамваи и&nbsp;МЦД имеют удобные пересадки на&nbsp;станции метро.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком</strong> <br>
            В&nbsp;центре Москвы станции расположены на&nbsp;расстоянии 5&ndash;10 минут проезда друг от&nbsp;друга.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskoe_metro/Moskovskoe_metro_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Останкинская телебашня =============================
    {
        id: 'Ostankino_bashnya',
        title: 'Останкинская телебашня',
        image:'../../img/moscow/cards_culture/Ostankinskaya_telebashnya_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Останкинская телебашня</h1>
</div>
<!-- Блок 1: Останкинская телебашня — вертикальная ось Москвы, устремленная в небо -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Останкинская телебашня&nbsp;&mdash; вертикальная ось Москвы, устремленная в&nbsp;небо</h2>
        <p class="modalBlock__description">
            Останкинская телебашня&nbsp;&mdash; один из&nbsp;самых узнаваемых символов столицы, инженерный гигант, который вот уже десятилетия соединяет Москву с&nbsp;миром.
        </p>
        <p class="modalBlock__description">
            Построенная в&nbsp;1967&nbsp;году, она стала рекордом своего времени и&nbsp;до&nbsp;сих пор остается одним из&nbsp;самых высоких сооружений Европы. Башня словно пронзает небо, а&nbsp;ее&nbsp;силуэт виден из&nbsp;разных районов города, напоминая о&nbsp;стремлении Москвы к&nbsp;высоте и&nbsp;прогрессу.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Ostankinskaya_telebashnya/Ostankinskaya_telebashnya_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный прорыв, опередивший эпоху -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный прорыв, опередивший эпоху</h2>
        <p class="modalBlock__description">
            Останкинская башня&nbsp;&mdash; не&nbsp;просто телекоммуникационное сооружение, а&nbsp;выдающийся инженерный эксперимент. Ее&nbsp;конструкция основана на&nbsp;принципе перевернутой лилии, что делает башню устойчивой даже при сильных ветрах.
        </p>
        <p class="modalBlock__description">
            Что формирует ее&nbsp;уникальный облик:<br>
            &bull; Стремящийся вверх ствол, сужающийся к&nbsp;вершине.<br>
            &bull; Антенная мачта, поднимающая общую высоту до&nbsp;более чем 500&nbsp;метров.<br>
            &bull; Кольцевые ярусы, где расположены технические и&nbsp;обзорные площадки.<br>
            &bull; Легкость конструкции, несмотря на&nbsp;колоссальные размеры.<br>
            Архитектура башни&nbsp;&mdash; это сочетание инженерной смелости и&nbsp;визуальной элегантности, которое до&nbsp;сих пор вызывает восхищение.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Ostankinskaya_telebashnya/Ostankinskaya_telebashnya_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Смотровая площадка — Москва под ногами -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Смотровая площадка&nbsp;&mdash; Москва под ногами</h2>
        <p class="modalBlock__description">
            На&nbsp;высоте более 300 метров расположена смотровая площадка, откуда открывается панорама столицы на&nbsp;десятки километров. Здесь можно увидеть изгибы Москвы‑реки, силуэты небоскребов, зеленые массивы парков и&nbsp;исторический центр.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Стеклянный пол, позволяющий почувствовать высоту буквально под ногами.<br>
            &bull; Панорамные окна, открывающие обзор на&nbsp;360&nbsp;градусов.<br>
            &bull; Ресторан на&nbsp;высоте, где зал медленно вращается вокруг оси.<br>
            &bull; Современные лифты, поднимающие гостей за&nbsp;считаные секунды.<br>
            Внутри башни ощущается сочетание футуризма и&nbsp;легкой ностальгии по&nbsp;эпохе, когда покорение высоты было символом прогресса.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Ostankinskaya_telebashnya/Ostankinskaya_telebashnya_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Останкинская башня как культурный и технологический символ -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Останкинская башня как культурный и&nbsp;технологический символ</h2>
        <p class="modalBlock__description">
            Башня&nbsp;&mdash; это не&nbsp;только смотровая площадка, но&nbsp;и&nbsp;важнейший центр телерадиовещания.
        </p>
        <p class="modalBlock__description">
            Почему она так важна:<br>
            &bull; Это главный телекоммуникационный узел Москвы, обеспечивающий вещание десятков каналов.<br>
            &bull; Башня стала архитектурным символом советской инженерной мысли.<br>
            &bull; Она&nbsp;&mdash; туристическая точка, привлекающая гостей со&nbsp;всего мира.<br>
            &bull; Останкинская башня&nbsp;&mdash; часть культурного ландшафта Москвы, узнаваемая в&nbsp;любой панораме города.<br>
            Она напоминает о&nbsp;времени, когда страна стремилась к&nbsp;рекордам и&nbsp;смелым проектам.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Ostankinskaya_telebashnya/Ostankinskaya_telebashnya_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Останкинской телебашни -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Останкинской телебашни</h2>
        <p class="modalBlock__description">
            Башня расположена в&nbsp;Останкинском районе, рядом с&nbsp;ВДНХ и&nbsp;телецентром.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;ВДНХ&raquo;, &laquo;Алексеевская&raquo;. От&nbsp;&laquo;ВДНХ&raquo;&nbsp;&mdash; 10&ndash;15 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;МЦК:</strong> Станция &laquo;Ростокино&raquo; находится в&nbsp;пешей доступности.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Телецентр&raquo;, &laquo;Останкинская башня&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Посещение</strong> <br>
            &bull; Вход на&nbsp;смотровую площадку&nbsp;&mdash; по&nbsp;билетам, лучше бронировать заранее.<br>
            &bull; В&nbsp;ветреную погоду возможны ограничения на&nbsp;подъем.<br>
            &bull; Вечером башня особенно красива благодаря подсветке.<br>
            &bull; Ресторан на&nbsp;высоте работает по&nbsp;отдельной записи.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Ostankinskaya_telebashnya/Ostankinskaya_telebashnya_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`
    },

// ======================== Сталинские высотки =============================
    {
        id: 'Stalin_vysotki',
        title: 'Сталинские высотки',
        image:'../../img/moscow/cards_culture/Stalinskie_vysotki_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Сталинские высотки</h1>
</div>
<!-- Блок 1: Сталинские высотки — каменные гиганты, определившие силуэт Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Сталинские высотки&nbsp;&mdash; каменные гиганты, определившие силуэт Москвы</h2>
        <p class="modalBlock__description">
            Сталинские высотки&nbsp;&mdash; это архитектурные монументы эпохи, символы амбиций и&nbsp;мощи послевоенной Москвы.
        </p>
        <p class="modalBlock__description">
            Построенные в&nbsp;1940&mdash;1950‑е годы, они стали воплощением идеи о&nbsp;том, что столица должна быть величественной, устремленной в&nbsp;небо и&nbsp;узнаваемой издалека. Эти здания&nbsp;&mdash; не&nbsp;просто дома, а&nbsp;целые миры: со&nbsp;шпилями, арками, скульптурами и&nbsp;богатым декором, которые до&nbsp;сих пор формируют облик города.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Stalinskie_vysotki/Stalinskie_vysotki_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный стиль, в котором грандиозность стала нормой -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный стиль, в&nbsp;котором грандиозность стала нормой</h2>
        <p class="modalBlock__description">
            Высотки&nbsp;&mdash; это квинтэссенция сталинского ампира: сочетание монументальности, симметрии и&nbsp;декоративного богатства. Каждое здание&nbsp;&mdash; самостоятельный архитектурный образ, но&nbsp;вместе они создают единый ансамбль, узнаваемый в&nbsp;любой панораме Москвы.
        </p>
        <p class="modalBlock__description">
            Что формирует облик сталинских высоток:<br>
            &bull; Стремящиеся вверх шпили, символизирующие устремленность к&nbsp;будущему.<br>
            &bull; Массивные корпуса, украшенные колоннами, арками и&nbsp;лепниной.<br>
            &bull; Скульптуры и&nbsp;барельефы, отражающие идеалы эпохи.<br>
            &bull; Сложная композиция, где центральная башня доминирует над боковыми крыльями.<br>
            &bull; Использование светлого камня, создающего ощущение торжественности.<br>
            Архитектура высоток&nbsp;&mdash; это синтез классики и&nbsp;модерна, где каждая деталь подчеркивает масштаб замысла.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Stalinskie_vysotki/Stalinskie_vysotki_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Семь высоток — семь характеров -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Семь высоток&nbsp;&mdash; семь характеров</h2>
        <p class="modalBlock__description">
            Каждая из&nbsp;сталинских высоток имеет свою историю, назначение и&nbsp;атмосферу.
        </p>
        <p class="modalBlock__description">
            Самые известные высотки Москвы:<br>
            &bull; Главное здание МГУ&nbsp;&mdash; академический городок на&nbsp;Воробьевых горах, символ науки и&nbsp;знаний.<br>
            &bull; Гостиница &laquo;Украина&raquo; (ныне Radisson Collection)&nbsp;&mdash; величественный силуэт на&nbsp;берегу Москвы‑реки.<br>
            &bull; Министерство иностранных дел&nbsp;&mdash; строгий и&nbsp;мощный фасад на&nbsp;Смоленской площади.<br>
            &bull; Жилой дом на&nbsp;Котельнической набережной&nbsp;&mdash; один из&nbsp;самых узнаваемых символов сталинской архитектуры.<br>
            &bull; Гостиница &laquo;Ленинградская&raquo;&nbsp;&mdash; изящная, почти &laquo;готическая&raquo; высотка у&nbsp;площади трех вокзалов.<br>
            &bull; Здание на&nbsp;площади Красные Ворота&nbsp;&mdash; первая построенная высотка, открывшая эпоху гигантов.<br>
            &bull; Жилой дом на&nbsp;Кудринской площади&nbsp;&mdash; монументальный ансамбль с&nbsp;башней и&nbsp;широкими крыльями.<br>
            Каждая высотка&nbsp;&mdash; это отдельная история, но&nbsp;вместе они создают архитектурный код Москвы середины XX&nbsp;века.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Stalinskie_vysotki/Stalinskie_vysotki_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Внутренний мир высоток — от роскошных интерьеров до жилых легенд -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Внутренний мир высоток&nbsp;&mdash; от&nbsp;роскошных интерьеров до&nbsp;жилых легенд</h2>
        <p class="modalBlock__description">
            Внутри высоток можно увидеть мраморные холлы, массивные люстры, декоративные панно и&nbsp;элементы, выполненные вручную. Даже жилые дома строились как элитные пространства с&nbsp;высокими потолками, широкими лестницами и&nbsp;продуманной планировкой.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Парадные входы, оформленные как дворцовые залы.<br>
            &bull; Лестницы и&nbsp;коридоры, украшенные мрамором и&nbsp;лепниной.<br>
            &bull; Панорамные виды, открывающиеся с&nbsp;верхних этажей.<br>
            &bull; Истории жильцов, среди которых были ученые, артисты, писатели и&nbsp;дипломаты.<br>
            Высотки&nbsp;&mdash; это не&nbsp;только архитектура, но&nbsp;и&nbsp;культурная память города.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Stalinskie_vysotki/Stalinskie_vysotki_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Сталинские высотки как символ эпохи и Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Сталинские высотки как символ эпохи и&nbsp;Москвы</h2>
        <p class="modalBlock__description">
            Эти здания стали частью городской мифологии и&nbsp;до&nbsp;сих пор вызывают восхищение.
        </p>
        <p class="modalBlock__description">
            Почему высотки так важны:<br>
            &bull; Они определили силуэт Москвы, сделав его узнаваемым.<br>
            &bull; Высотки стали символом послевоенного восстановления и&nbsp;амбиций страны.<br>
            &bull; Это уникальный архитектурный стиль, не&nbsp;имеющий прямых аналогов в&nbsp;мире.<br>
            &bull; Они продолжают быть центрами городской жизни, сохраняя свою значимость десятилетиями.<br>
            Сталинские высотки&nbsp;&mdash; это архитектурные маркеры времени, которые рассказывают о&nbsp;мечтах и&nbsp;идеалах целой эпохи.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Stalinskie_vysotki/Stalinskie_vysotki_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Как увидеть сталинские высотки -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как увидеть сталинские высотки</h2>
        <p class="modalBlock__description">
            <strong>Лучшие точки для обзора</strong> <br>
            &bull; Набережные Москвы‑реки&nbsp;&mdash; особенно вечером.<br>
            &bull; Воробьевы горы&nbsp;&mdash; панорама сразу на&nbsp;несколько высоток.<br>
            &bull; Мосты в&nbsp;центре города&nbsp;&mdash; удачные ракурсы на&nbsp;шпили и&nbsp;силуэты.<br>
            &bull; Прогулки по&nbsp;Садовому кольцу&nbsp;&mdash; многие высотки расположены рядом.
        </p>
        <p class="modalBlock__description">
            <strong>Советы для прогулки</strong> <br>
            &bull; Лучше всего рассматривать высотки на&nbsp;закате&nbsp;&mdash; свет подчеркивает их&nbsp;рельеф.<br>
            &bull; Некоторые здания доступны для посещения (например, гостиницы).<br>
            &bull; Зимой высотки выглядят особенно торжественно на&nbsp;фоне снега.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Stalinskie_vysotki/Stalinskie_vysotki_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Третьяковская галерея =============================
    {
        id: 'Tretiakovskaya_galerea',
        title: 'Третьяковская галерея',
        image:'../../img/moscow/cards_culture/Tretyakovskaya_galereya_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Третьяковская галерея</h1>
</div>
<!-- Блок 1: Третьяковская галерея — дом русского искусства и национальной памяти -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Третьяковская галерея&nbsp;&mdash; дом русского искусства и&nbsp;национальной памяти</h2>
        <p class="modalBlock__description">
            Третьяковская галерея&nbsp;&mdash; это сердце русской художественной культуры, место, где собраны лучшие произведения живописи, графики и&nbsp;скульптуры от&nbsp;древнерусских икон до&nbsp;авангарда XX&nbsp;века.
        </p>
        <p class="modalBlock__description">
            Основанная купцом и&nbsp;меценатом Павлом Третьяковым, галерея стала воплощением его мечты&nbsp;&mdash; создать музей, который расскажет историю России через искусство. Сегодня это один из&nbsp;главных культурных символов страны, куда приходят за&nbsp;вдохновением, тишиной и&nbsp;встречей с&nbsp;великими мастерами.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Tretyakovskaya_galereya/Tretyakovskaya_galereya_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный образ, ставший символом русской художественной школы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный образ, ставший символом русской художественной школы</h2>
        <p class="modalBlock__description">
            Главное здание галереи в&nbsp;Лаврушинском переулке&nbsp;&mdash; это не&nbsp;просто музей, а&nbsp;архитектурная легенда. Его фасад, созданный по&nbsp;проекту Виктора Васнецова, напоминает сказочный терем, в&nbsp;котором живет русская живопись.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Третьяковской галереи:<br>
            &bull; Сказочный фасад Васнецова, вдохновленного мотивами древнерусской архитектуры.<br>
            &bull; Классические музейные залы, наполненные мягким светом.<br>
            &bull; Современные корпуса, соединяющие историческое наследие с&nbsp;новыми технологиями.<br>
            &bull; Скульптурные композиции, украшающие внутренние дворы.<br>
            Архитектура галереи создает атмосферу уважения к&nbsp;традиции и&nbsp;одновременно открытости к&nbsp;новому.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Tretyakovskaya_galereya/Tretyakovskaya_galereya_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Коллекция, не имеющая аналогов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Коллекция, не&nbsp;имеющая аналогов</h2>
        <p class="modalBlock__description">
            Третьяковская галерея хранит тысячи произведений, которые формируют образ русской культуры.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Иконы Андрея Рублева, включая знаменитую &laquo;Троицу&raquo;.<br>
            &bull; Шедевры передвижников&nbsp;&mdash; Репина, Сурикова, Крамского, Ге.<br>
            &bull; Поэтичные полотна Левитана, наполненные тишиной и&nbsp;светом.<br>
            &bull; Символизм и&nbsp;модерн&nbsp;&mdash; Врубель, Бакст, Сомов.<br>
            &bull; Русский авангард&nbsp;&mdash; Малевич, Кандинский, Гончарова, Ларионов.<br>
            &bull; Скульптура XIX&ndash;XX&nbsp;веков, от&nbsp;Антокольского до&nbsp;Коненкова.<br>
            Каждый зал&nbsp;&mdash; это отдельная эпоха, отдельный голос, отдельная история.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Tretyakovskaya_galereya/Tretyakovskaya_galereya_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Третьяковская галерея как культурный ориентир Москвы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Третьяковская галерея как культурный ориентир Москвы</h2>
        <p class="modalBlock__description">
            Галерея&nbsp;&mdash; это не&nbsp;только музей, но&nbsp;и&nbsp;важнейший культурный центр, который формирует художественную жизнь столицы.
        </p>
        <p class="modalBlock__description">
            Почему галерея так важна:<br>
            &bull; Это главное собрание русского искусства в&nbsp;мире.<br>
            &bull; Здесь проходят крупные выставки, лекции, концерты и&nbsp;встречи с&nbsp;художниками.<br>
            &bull; Галерея объединяет историческое здание в&nbsp;Лаврушинском переулке и&nbsp;современное пространство на&nbsp;Крымском Валу.<br>
            &bull; Она стала местом притяжения для художников, студентов, исследователей и&nbsp;туристов.<br>
            Третьяковская галерея&nbsp;&mdash; это пространство, где можно увидеть, как искусство отражает душу страны.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Tretyakovskaya_galereya/Tretyakovskaya_galereya_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Третьяковской галереи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Третьяковской галереи</h2>
        <p class="modalBlock__description">
            <strong>Главное здание (Лаврушинский переулок, дом&nbsp;10, строение 4)</strong> <br>
            Ближайшие станции метро: &laquo;Третьяковская&raquo;, &laquo;Новокузнецкая&raquo;. От&nbsp;обеих&nbsp;&mdash; 5&ndash;7 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>Новая Третьяковка (Крымский Вал)</strong> <br>
            Ближайшие станции: &laquo;Октябрьская&raquo;, &laquo;Парк культуры&raquo;. От&nbsp;метро&nbsp;&mdash; 10&nbsp;минут пешком через парк Музеон.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Tretyakovskaya_galereya/Tretyakovskaya_galereya_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Посещение галереи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Посещение галереи</h2>
        <p class="modalBlock__description">
            &bull; Билеты лучше покупать заранее&nbsp;&mdash; особенно на&nbsp;временные выставки.<br>
            &bull; В&nbsp;залах прохладно&nbsp;&mdash; музейный климат поддерживается для сохранности картин.<br>
            &bull; Аудиогиды доступны на&nbsp;нескольких языках.<br>
            &bull; Лучшее время для посещения&nbsp;&mdash; утро буднего дня.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Tretyakovskaya_galereya/Tretyakovskaya_galereya_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Московский зоопарк =============================
    {
        id: 'Moscow_zoo',
        title: 'Московский зоопарк',
        image:'../../img/moscow/cards_culture/Moskovskii_zoopark_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Московский зоопарк</h1>
</div>
<!-- Блок 1: Московский зоопарк — мир природы в сердце мегаполиса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Московский зоопарк&nbsp;&mdash; мир природы в&nbsp;сердце мегаполиса</h2>
        <p class="modalBlock__description">
            Московский зоопарк&nbsp;&mdash; это место, где городская суета растворяется в&nbsp;звуках природы. Основанный в&nbsp;1864&nbsp;году, он&nbsp;стал одним из&nbsp;старейших зоопарков Европы и&nbsp;важной частью культурной жизни Москвы.
        </p>
        <p class="modalBlock__description">
            Здесь можно увидеть животных со&nbsp;всех континентов, прогуляться по&nbsp;мостам над прудами, заглянуть в&nbsp;павильоны, где царит свой микроклимат, и&nbsp;почувствовать себя путешественником, не&nbsp;покидая центра столицы.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskii_zoopark/Moskovskii_zoopark_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектурный ансамбль, где природа и город нашли гармонию -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектурный ансамбль, где природа и&nbsp;город нашли гармонию</h2>
        <p class="modalBlock__description">
            Зоопарк&nbsp;&mdash; это не&nbsp;только коллекция животных, но&nbsp;и&nbsp;уникальное пространство, где архитектура подчинена идее природного ландшафта. Пруды, скалы, мосты, гроты и&nbsp;зеленые зоны создают атмосферу настоящего парка, а&nbsp;современные павильоны позволяют наблюдать за&nbsp;животными круглый год.
        </p>
        <p class="modalBlock__description">
            Что формирует облик Московского зоопарка:<br>
            &bull; Исторический вход с&nbsp;башнями, напоминающий сказочный замок.<br>
            &bull; Большой пруд, вокруг которого расположены вольеры и&nbsp;прогулочные дорожки.<br>
            &bull; Остров зверей, соединенный мостами.<br>
            &bull; Современные павильоны, где созданы условия, близкие к&nbsp;естественным.<br>
            &bull; Смотровые площадки, открывающие виды на&nbsp;разные зоны зоопарка.<br>
            Архитектура зоопарка создает ощущение путешествия по&nbsp;природным ландшафтам мира.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskii_zoopark/Moskovskii_zoopark_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Внутренний мир зоопарка — от экзотических животных до редких видов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Внутренний мир зоопарка&nbsp;&mdash; от&nbsp;экзотических животных до&nbsp;редких видов</h2>
        <p class="modalBlock__description">
            В&nbsp;Московском зоопарке живут тысячи животных: от&nbsp;крупных хищников до&nbsp;миниатюрных обитателей тропиков. Каждый павильон&nbsp;&mdash; это отдельная экосистема, где можно наблюдать за&nbsp;поведением животных в&nbsp;условиях, максимально приближенных к&nbsp;природным.
        </p>
        <p class="modalBlock__description">
            Что особенно впечатляет:<br>
            &bull; Большие кошки&nbsp;&mdash; тигры, львы, снежные барсы.<br>
            &bull; Слоновник, где можно наблюдать за&nbsp;гигантами в&nbsp;просторных вольерах.<br>
            &bull; Дом птиц, наполненный экзотическими голосами.<br>
            &bull; Террариум, где живут змеи, ящерицы и&nbsp;другие рептилии.<br>
            &bull; Обезьяний дом, полный энергии и&nbsp;движения.<br>
            &bull; Акватеррариум, где можно увидеть рыб, амфибий и&nbsp;водных животных.<br>
            Каждый визит в&nbsp;зоопарк&nbsp;&mdash; это новое открытие, ведь животные ведут себя по‑разному в&nbsp;зависимости от&nbsp;времени суток и&nbsp;сезона.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskii_zoopark/Moskovskii_zoopark_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Московский зоопарк как научный и культурный центр -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Московский зоопарк как научный и&nbsp;культурный центр</h2>
        <p class="modalBlock__description">
            Зоопарк&nbsp;&mdash; это не&nbsp;только место отдыха, но&nbsp;и&nbsp;важный научно‑просветительский центр.
        </p>
        <p class="modalBlock__description">
            Почему зоопарк так важен:<br>
            &bull; Здесь ведутся программы по&nbsp;сохранению редких видов.<br>
            &bull; Проводятся образовательные лекции, экскурсии и&nbsp;мастер‑классы.<br>
            &bull; Зоопарк участвует в&nbsp;международных проектах по&nbsp;защите животных.<br>
            &bull; Это одно из&nbsp;самых посещаемых культурных пространств Москвы.<br>
            Московский зоопарк&nbsp;&mdash; это место, где формируется уважение к&nbsp;природе и&nbsp;интерес к&nbsp;миру животных.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskii_zoopark/Moskovskii_zoopark_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Московского зоопарка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться до&nbsp;Московского зоопарка</h2>
        <p class="modalBlock__description">
            Зоопарк расположен в&nbsp;центре Москвы, рядом с&nbsp;Садовым кольцом.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;метро:</strong> <br>
            Ближайшие станции: &laquo;Баррикадная&raquo;, &laquo;Краснопресненская&raquo;. От&nbsp;обеих&nbsp;&mdash; 5&ndash;7 минут пешком.
        </p>
        <p class="modalBlock__description">
            <strong>На&nbsp;другом общественном транспорте:</strong> <br>
            Автобусы идут до&nbsp;остановок: &laquo;Зоопарк&raquo;, &laquo;Зоологическая улица&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>Пешком:</strong> От&nbsp;Садового кольца&nbsp;&mdash; через пешеходный переход к&nbsp;главному входу.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskii_zoopark/Moskovskii_zoopark_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Посещение зоопарка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Посещение зоопарка</h2>
        <p class="modalBlock__description">
            &bull; Билеты можно купить онлайн или в&nbsp;кассах.<br>
            &bull; Летом лучше приходить утром&nbsp;&mdash; животные активнее в&nbsp;прохладное время.<br>
            &bull; Зимой многие павильоны работают в&nbsp;теплом режиме, что делает прогулку комфортной.<br>
            &bull; На&nbsp;территории есть кафе, зоны отдыха и&nbsp;детские площадки.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/Moskovskii_zoopark/Moskovskii_zoopark_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    }

    ],

// ======================== Город Москва =============================
// ======================== Город Москва =============================


    city: [
        {
            id: 'otdyh_10',
            title: 'Отдых',
            image: '../../img/moscow/cards_city/otdyh_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Отдых в Москве</h1>
</div>
<!-- Блок 1: Еда и рестораны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Еда и&nbsp;рестораны</h2>
      <p class="modalBlock__description">
         Российский альянс White Rabbit Family угощает Москву эталонными блюдами русской кухни от&nbsp;именитого шеф-повара Владимира Мухина. Следуя за&nbsp;белым кроликом важно успеть посетить одноименный White Rabbit с&nbsp;ошеломительным видом на&nbsp;город, получивший в&nbsp;2019 году заслуженное 13-ое место The World&rsquo;s 50&nbsp;Best Restaurants, а&nbsp;в&nbsp;2022 году повторно награжденный звездой Michelin.
      </p>
      <p class="modalBlock__description">
         Twins Garden от&nbsp;братьев Березуцких с&nbsp;удивительной концепцией симбиоза научного подхода и&nbsp;внимания к&nbsp;природным богатствам, а&nbsp;также блюдами, приготовленными только из&nbsp;свежих ингредиентов с&nbsp;собственной фермы, одаривает разнообразием дегустационных сетов с&nbsp;возможностью открыть прелесть аутентичных продуктов из&nbsp;разных уголков нашей страны. Проект также отмечен в&nbsp;списке The World&rsquo;s 50&nbsp;Best Restaurants, награждён двумя звездами гида Michelin и&nbsp;одной Michelin Green Stars за&nbsp;инновационные технологии приготовления блюд и&nbsp;экологичность.
      </p>
      <p class="modalBlock__description">
         Также не&nbsp;стоит пропускать изысканную итальянскую кухню в&nbsp;креативных вариациях маэстро Истомина в&nbsp;нашумевшем Loona Moscow и&nbsp;обязательно насладиться бокалом игристого в&nbsp;сочетании с&nbsp;современной русской кухней от&nbsp;Niki в&nbsp;обновленном кинотеатре &laquo;Художественный&raquo;. Любителей гастрономических приключений ждут шумные рынки, наполненные многообразием ресторанных концепций и&nbsp;фермерских продуктов первой свежести, среди наиболее важных&nbsp;&mdash; Центральный и&nbsp;Даниловский.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_1.jpg" alt="Блюдо из ресторана White Rabbit или интерьер Twins Garden" loading="lazy">
   </div>
</div>
<!-- Блок 2: Город в праздники -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Город в&nbsp;праздники</h2>
      <p class="modalBlock__description">
         Пройдитесь по&nbsp;Москве в&nbsp;морозные дни новогодних каникул, весенних пасхальных фестивалей или майских гуляний, чтобы увидеть, вероятно, лучшую уличную иллюминацию в&nbsp;стране. Весь центр города&nbsp;&mdash; от&nbsp;Сокола до&nbsp;Шаболовки&nbsp;&mdash; обрамлен красочными ярмарками, где можно выпить ароматного чая в&nbsp;русской традиции или согреться пряным глинтвейном.
      </p>
      <p class="modalBlock__description">
         Отдельное удовольствие&nbsp;&mdash; подкрепиться пирожками, калачами, другими местными угощениями, купить милые подарки, памятные коллекционные сувениры и&nbsp;загадать самые заветные желания. Обволакивающая атмосфера праздников непременно поможет им&nbsp;сбыться.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_2.jpg" alt="Новогодняя иллюминация и ярмарка на одной из центральных улиц Москвы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Шопинг -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Шопинг</h2>
      <p class="modalBlock__description">
         Главный универмаг страны с&nbsp;самым узнаваемым фасадом, расположенным на&nbsp;Красной Площади&nbsp;&mdash; ГУМ&nbsp;&mdash; сохраняет традиции и&nbsp;встречает посетителей роскошной атмосферой, а&nbsp;также эксклюзивной подборкой товаров премиум-класса. Схожий комплект наименований покупатели обнаружат и&nbsp;в&nbsp;изящном модернистском здании Петровского пассажа.
      </p>
      <p class="modalBlock__description">
         Готический силуэт ЦУМа&nbsp;&mdash; крупнейшего department store в&nbsp;Европе, спорит с&nbsp;помпезностью соседствующего с&nbsp;ним Большого театра и&nbsp;включает в&nbsp;себя пять этажей уникальных коллекций люксовых брендов от&nbsp;европейских и&nbsp;российских дизайнеров.
      </p>
      <p class="modalBlock__description">
         Не&nbsp;забудьте посетить универмаг &laquo;Цветной&raquo;, где под одной крышей соседствуют корнеры знаковых игроков российского ритейла, премиальные бренды, селективная парфюмерия, магазин виниловых пластинок и&nbsp;один из&nbsp;лучших фуд-маркетов города. Внушительный выбор брендов разного уровня можно найти в&nbsp;&laquo;Авиапарке&raquo;&nbsp;&mdash; самом крупном торговом центре Европы со&nbsp;стильным цилиндрическим аквариумом, занесенным в&nbsp;книгу рекордов Гиннеса.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_3.jpg" alt="Торговые ряды ГУМа или интерьер универмага Цветной" loading="lazy">
   </div>
</div>
<!-- Блок 4: Для всей семьи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Для всей семьи</h2>
      <p class="modalBlock__description">
         Юные путешественники неизменно останутся в&nbsp;восторге от&nbsp;&laquo;Москвариума&raquo;, где можно поплавать с&nbsp;дельфинами, посмотреть водное шоу и&nbsp;узнать секреты Мирового океана. Обучение новым полезным навыкам в&nbsp;игровом формате регулярно проходит в&nbsp;современном детском городе профессий &laquo;Кидзания&raquo;.
      </p>
      <p class="modalBlock__description">
         В&nbsp;крупнейшем в&nbsp;Европе парке &laquo;Остров мечты&raquo; гостей ждут сказочные миры, увлекательные аттракционы, благоустроенный ландшафтный парк и&nbsp;городской променад. Лучшие акробаты и&nbsp;воздушные гимнасты ждут маленьких гостей в&nbsp;Большом Московском цирке, а&nbsp;клоуны и&nbsp;трюки с&nbsp;животными&nbsp;&mdash; в&nbsp;Московском цирке Никулина на&nbsp;Цветном бульваре.
      </p>
      <p class="modalBlock__description">
         Самым любознательным гостям столицы будет интересно ознакомиться с&nbsp;обширной коллекцией Дарвиновского музея, крупнейшего естественно-научного музея Европы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_4.jpg" alt="Дети в Москвариуме или аттракционы в парке Остров мечты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Парки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Парки</h2>
      <p class="modalBlock__description">
         Лучшая отправная точка для пеших прогулок&nbsp;&mdash; парк &laquo;Зарядье&raquo;. Необычный ландшафт, уникальная ботаническая коллекция, подземный музей и&nbsp;парящий мост с&nbsp;потрясающим видом на&nbsp;Кремль&nbsp;&mdash; вот немногие достоинства этой уникальной локации в&nbsp;самом сердце столицы.
      </p>
      <p class="modalBlock__description">
         Парк Горького понравится любителям многолюдных и&nbsp;динамичных пространств с&nbsp;протяженной набережной, где летом можно расслабиться в&nbsp;шезлонге, посмотреть кино или промчаться мимо многочисленных туристических теплоходов на&nbsp;сегвее, а&nbsp;зимой покататься на&nbsp;коньках или сходить на&nbsp;выставку.
      </p>
      <p class="modalBlock__description">
         За&nbsp;атмосферой спокойствия и&nbsp;неги среди высоких сосен отправляйтесь в&nbsp;&laquo;Сокольники&raquo;, где в&nbsp;гуще ухоженного леса спрятаны классические парковые аттракционы, уютные кафе для неспешного ужина, бассейны с&nbsp;бирюзовой водой и&nbsp;многочисленные велодорожки. Для ознакомления с&nbsp;усадебной жизнью стоит посетить Архангельское и&nbsp;Кусково, а&nbsp;также музей-заповедник с&nbsp;роскошным парком, разбитым когда-то для Екатерины II,&nbsp;&mdash; Царицыно.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_5.jpg" alt="Парящий мост в парке Зарядье на фоне Кремля" loading="lazy">
   </div>
</div>
<!-- Блок 6: Ночная жизнь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ночная жизнь</h2>
      <p class="modalBlock__description">
         Москва никогда не&nbsp;спит и&nbsp;с&nbsp;наступлением темноты взрывается новым всплеском энергии. Жители мегаполиса предпочитают начинать вечер пятницы с&nbsp;традиционного бар-хоппинга и&nbsp;пробовать город на&nbsp;вкус через призму сезонных коктейлей. Ощутить единение с&nbsp;праздником помогут экспериментальные освежающие позиции из&nbsp;коктейльной карты в&nbsp;Strelka Bar, оригинальные решения барной станции будущего Insider, а&nbsp;также напитки с&nbsp;национальным колоритом в&nbsp;современном прочтении в&nbsp;баре &laquo;Журавли&raquo;.
      </p>
      <p class="modalBlock__description">
         RNDM&nbsp;&mdash; культовое место для тех, кто дышит электронной музыкой. Расположенный в&nbsp;историческом месте, клуб вобрал лучшее от&nbsp;прошлого, переродившись в&nbsp;минималистичное пространство с&nbsp;хай-тек эстетикой и&nbsp;душой андеграунда. Здесь всё создано для полного погружения в&nbsp;ритм: кристально чистый звук, атмосфера свободы, диджеи мирового уровня, играющие от&nbsp;глубокого техно до&nbsp;зажигательного гэриджа. А&nbsp;если хочется передохнуть&nbsp;&mdash; уютный дворик под зонтами и&nbsp;авторские коктейли от&nbsp;барменов создают настоящий оазис среди танцевального вихря.
      </p>
      <p class="modalBlock__description">
         Когда танцы под сводами андеграунда сменяются желанием изысканности&nbsp;&mdash; стоит направиться в&nbsp;Atlas Moscow. Этот премиальный клуб объединяет гастрономическое искусство и&nbsp;клубную культуру в&nbsp;роскошном ар-деко пространстве. Световые инсталляции, продуманный дизайн и&nbsp;насыщенное музыкальное наполнение превращают каждый визит в&nbsp;эстетическое наслаждение.
      </p>
      <p class="modalBlock__description">
         А&nbsp;завершить маршрут&nbsp;&mdash; на&nbsp;высоте, где город исчезает под ногами&nbsp;&mdash; в&nbsp;Birds. На&nbsp;354 метра над Москвой, в&nbsp;башне ОКО, ночь раскрывает своё второе дыхание. Здесь каждый рассвет&nbsp;&mdash; событие, а&nbsp;каждый трек&nbsp;&mdash; признание в&nbsp;любви мегаполису. Неповторимая атмосфера: стеклянные стены, панорамные виды, музыка, растворяющая границы времени. Birds&nbsp;&mdash; место, где ночь не&nbsp;заканчивается, а&nbsp;превращается в&nbsp;праздник.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_6.jpg" alt="Панорамный ночной вид на Москву-Сити из бара Birds или танцпол в клубе RNDM" loading="lazy">
   </div>
</div>
<!-- Блок 7: СПОРТ -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Спорт</h2>
      <p class="modalBlock__description">
         Любителям активного отдыха и&nbsp;адреналина столичный регион предлагает расширенный список локаций и&nbsp;форматов как для профессиональных спортивных практик, так и&nbsp;семейного времяпрепровождения. В&nbsp;открытом доступе находятся крупные скалодромы, услуги захватывающих полетов на&nbsp;самолетах и&nbsp;вертолетах, прыжки с&nbsp;парашютом, а&nbsp;также заплывы на&nbsp;сапсерфах и&nbsp;байдарках в&nbsp;летнее время. В&nbsp;столице регулярно проходят масштабные выставки спортивных достижений города, футбольные и&nbsp;теннисные турниры, забеги, велогонки и&nbsp;чемпионаты по&nbsp;танцам. Также Москва славится гребным каналом и&nbsp;велотреком в&nbsp;Крылатском, Ледовым дворцом на&nbsp;&laquo;Автозаводской&raquo;, самым большим в&nbsp;мире количеством футбольных стадионов высокого уровня.
      </p>
      <p class="modalBlock__description">
         Посетите Воробьёвы горы, где зимой и&nbsp;летом работает дворец водных видов спорта &laquo;Лужники&raquo;. Внутри&nbsp;&mdash; аквапарк, крытый каток и&nbsp;бассейн. В&nbsp;парке &laquo;Сокольники&raquo; в&nbsp;любое время года можно пройтись по&nbsp;тропе здоровья и&nbsp;найти несколько пунктов проката спортивного инвентаря: роликов, велосипедов и&nbsp;всех видов самокатов. Летом работают открытый бассейн, веревочный, батутный и&nbsp;скейт-парки. Также рекомендуем к&nbsp;посещению экологическую тропу в&nbsp;живописном Серебряном бору и&nbsp;Измайловский парк с&nbsp;арбалетным тиром, пяти кортами для большого тенниса и&nbsp;воркаут-площадками.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_otdyh/otdyh_7.jpg" alt="Люди катаются на сапах по Москве-реке или занимаются на воркаут-площадке в парке" loading="lazy">
   </div>
</div>`
        },

//-------------------------------------------------Бизнес-------------------------------------------------------
        {
            id: 'business_10',
            title: 'Бизнес',
            image: '../../img/moscow/cards_city/bisness_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Бизнес в Москве</h1>
</div>
<!-- Блок 1: Бизнес -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Бизнес</h2>
      <p class="modalBlock__description">
         Москва&nbsp;&mdash; крупный финансовый центр не&nbsp;только России, но&nbsp;и&nbsp;мира. Здесь расположены офисы крупнейших компаний, половина банковского сектора.
      </p>
      <p class="modalBlock__description">
         Основные отрасли&nbsp;&mdash; строительство, финансы, машиностроение, приборостроение, нефтепереработка, цветная металлургия, химическая и&nbsp;легкая промышленность.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_bisnes/bisness_1.jpg" alt="Панорама делового центра Москва-Сити с высотными зданиями" loading="lazy">
   </div>
</div>
<!-- Блок 2: Выставочные центры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Выставочные центры</h2>
      <p class="modalBlock__description">
         Крупнейшие выставки страны проходят в&nbsp;Москве непрерывным потоком, ведь город располагает выставочными площадками мирового уровня. Центральный выставочный зал &laquo;Манеж&raquo;&nbsp;&mdash; это не&nbsp;просто пространство для искусства, а&nbsp;настоящий культурный центр Москвы. Расположенный в&nbsp;шаге от&nbsp;Кремля, он&nbsp;сам по&nbsp;себе&nbsp;&mdash; архитектурная достопримечательность: простор, свет, величие.
      </p>
      <p class="modalBlock__description">
         Циклопические павильоны &laquo;Крокус Экспо&raquo; в&nbsp;пригородном Красногорском районе, отреставрированный и&nbsp;превращенный в&nbsp;образец городской культуры комплекс ВДНХ и&nbsp;престижная историческая площадка для мероприятий в&nbsp;центре столицы&nbsp;&mdash; Гостиный Двор.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_bisnes/bisness_2.jpg" alt="Центральный выставочный зал Манеж или павильоны Крокус Экспо" loading="lazy">
   </div>
</div>
<!-- Блок 3: Транспорт -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Транспорт</h2>
      <p class="modalBlock__description">
         Метро, насчитывающее более 270&nbsp;станций,&nbsp;&mdash; самый быстрый и&nbsp;экологичный способ передвижения по&nbsp;наводненной автомобилями столице. На&nbsp;большинстве станций и&nbsp;в&nbsp;поездах действует бесплатный Wi-Fi. К&nbsp;тому&nbsp;же подземка связана с&nbsp;внутригородской пассажирской железнодорожной линией МЦК и&nbsp;вокзалами, откуда отходят пригородные электрички, поезда дальнего следования и&nbsp;электропоезда &laquo;Аэроэкспресс&raquo;, следующие в&nbsp;московские аэропорты.
      </p>
      <p class="modalBlock__description">
         Для наземного городского транспорта во&nbsp;многих районах предусмотрены выделенные полосы движения, которые используются и&nbsp;многочисленными такси (самый популярный сервис&nbsp;&mdash; &laquo;Яндекс Go&raquo;).
      </p>
      <p class="modalBlock__description">
         Кроме того, с&nbsp;середины весны до&nbsp;осени в&nbsp;Москве действуют более 780 станций велопроката &laquo;Велобайк&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_bisnes/bisness_3.jpg" alt="Интерьер современной станции московского метро или поезд МЦК" loading="lazy">
   </div>
</div>
<!-- Блок 4: Авиаперевозки и авиакомпании -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Авиаперевозки и&nbsp;авиакомпании</h2>
        <p class="modalBlock__description">
            Аэрофлот&nbsp;&mdash; лидер российской гражданской авиации. Авиакомпания основана 17&nbsp;марта 1923&nbsp;года, является одним из&nbsp;старейших авиаперевозчиков мира и&nbsp;одним из&nbsp;самых узнаваемых российских брендов. Компания базируется в&nbsp;московском аэропорту Шереметьево. В&nbsp;2021 году авиакомпания открыла второй хаб в&nbsp;Красноярске. Флот Аэрофлота насчитывает 171&nbsp;авиалайнер.
        </p>
        <p class="modalBlock__description">
            Группа &laquo;Аэрофлот&raquo;&nbsp;&mdash; один из&nbsp;крупнейших мировых авиационных холдингов. Она была основана в&nbsp;2011 году по&nbsp;решению Правительства Российской Федерации о&nbsp;передаче ряда региональных авиакомпаний в&nbsp;управление компании &laquo;Аэрофлот&raquo;. Аэрофлот первым в&nbsp;транспортной отрасли получил почётный знак Российской Федерации &laquo;За&nbsp;успехи в&nbsp;труде&raquo;. В&nbsp;день 100-летия отечественной гражданской авиации Президент России Владимир Путин вручил государственную награду генеральному директору ПАО &laquo;Аэрофлот&raquo; Сергею Александровскому и&nbsp;поблагодарил коллектив авиакомпании за&nbsp;большой вклад в&nbsp;развитие гражданской авиации и&nbsp;высокие достижения.
        </p>
        <p class="modalBlock__description">
            Аэрофлот&nbsp;&mdash; один из&nbsp;мировых лидеров по&nbsp;качеству обслуживания пассажиров. Обладатель четырёх звезд рейтинга британской консалтинговой компании Skytrax за&nbsp;высококачественное обслуживание. Аэрофлот ежегодно побеждает в&nbsp;ключевых номинациях национальной авиационной премии &laquo;Крылья России&raquo;. По&nbsp;итогам 2024 года он&nbsp;получил награду в&nbsp;трёх категориях: &laquo;Авиакомпания года. Пассажирские перевозки на&nbsp;внутренних авиалиниях&raquo;, &laquo;Авиакомпания года. Пассажирские перевозки на&nbsp;международных авиалиниях&raquo; и&nbsp;&laquo;Российская авиакомпания года&nbsp;&mdash; лидер пассажирских симпатий&raquo;. Аэрофлот победил в&nbsp;национальной премии Russian Traveler Awards 2024&nbsp;в номинации &laquo;Авиакомпания&raquo;.
        </p>
        <p class="modalBlock__description">
            Аэрофлот одержал победу в&nbsp;двух номинациях IX&nbsp;Отраслевой авиационной премии RUSky Awards. Авиаперевозчик получил награды &laquo;За&nbsp;увеличение объема пассажирских перевозок по&nbsp;итогам 2024&nbsp;года&raquo; и&nbsp;&laquo;За&nbsp;развитие сервисов и&nbsp;услуг для пассажиров по&nbsp;итогам 2024&nbsp;года&raquo;. В&nbsp;2025 году Аэрофлот стал лауреатом Первой Всероссийской премии в&nbsp;сфере зоозащиты и&nbsp;экологии. Авиаперевозчик одержал победу в&nbsp;ключевой номинации &laquo;Корпоративная социальная ответственность: бизнес во&nbsp;благо животных&raquo;.
        </p>
        <p class="modalBlock__description">
            Аэрофлот играет активную общественную роль, постоянно поддерживает благотворительные организации и&nbsp;проводит социально значимые акции. Реализует собственную программу &laquo;плоских&raquo; тарифов&nbsp;&mdash; единые низкие тарифы в&nbsp;экономическом классе на&nbsp;рейсах в&nbsp;города Дальнего Востока и&nbsp;Калининград. Ежегодно предлагается бесплатный авиаперелёт для ветеранов Великой Отечественной войны во&nbsp;время празднования Дня Победы.
        </p>
        <p class="modalBlock__description">
            Аэрофлот&nbsp;&mdash; многолетний генеральный партнёр и&nbsp;официальный авиаперевозчик Олимпийского комитета России. Является партнёром ПФК ЦСКА и&nbsp;ПБК ЦСКА, Федерации настольного тенниса России, Федерации шахмат России, Ассоциации гольфа России, Всероссийской федерации танцевального спорта и&nbsp;акробатического рок-н-ролла, Федерации велосипедного спорта России, академии картинга MIKS Karting Academy, Академии ФК&nbsp;&laquo;Шахтер&raquo; (Донецк).
        </p>
        <p class="modalBlock__description">
            Проект &laquo;Мили милосердия&raquo; позволяет участникам программы лояльности &laquo;Аэрофлот Бонус&raquo; жертвовать накопленные мили благотворительным организациям: Благотворительный фонд Константина Хабенского, Международный благотворительный фонд Владимира Спивакова, &laquo;Подари жизнь&raquo;, &laquo;Линия жизни&raquo;, &laquo;Шаг вместе&raquo; и&nbsp;&laquo;Русфонд&raquo;. Аэрофлот поддерживает инициативы в&nbsp;просветительской деятельности и&nbsp;охране природы. В&nbsp;2024 году авиакомпания стала официальным перевозчиком Русского географического общества, подписала соглашения с&nbsp;Российским обществом &laquo;Знание&raquo; и&nbsp;Центром &laquo;Амурский тигр&raquo;. В&nbsp;2025 году подписан меморандум с&nbsp;Благотворительным фондом помощи бездомным животным &laquo;Ника&raquo;.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/moscow/cards_modal/city_bisnes/bisness_4.jpg" alt="Современный терминал аэропорта Шереметьево и самолет Аэрофлота" loading="lazy">
    </div>
</div>
<!-- Блок 5: Отели -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Отели</h2>
      <p class="modalBlock__description">
         Проведите время наедине с&nbsp;Москвой в&nbsp;роскошных отелях с&nbsp;персональным обслуживанием и&nbsp;комфортабельными условиями размещения для всей семьи. Выпить чашку кофе, разглядывая Москву-реку и&nbsp;Кремль можно в&nbsp;Baltschug Kempinski с&nbsp;элегантными и&nbsp;просторными номерами, ближе всего к&nbsp;центру расположены &laquo;Националь&raquo;, The Ritz-Carlton, &laquo;Метрополь&raquo; и&nbsp;Four Seasons.
      </p>
      <p class="modalBlock__description">
         Гости столицы также отдают предпочтение &laquo;Лотте Отель&raquo; и&nbsp;&laquo;Арарат Парк Хаятт Москва&raquo;. Легендарные виды, безупречный сервис и&nbsp;исключительная приватность в&nbsp;самых привилегированных точках города.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_bisnes/bisness_5.jpg" alt="Элегантный номер или лобби одного из премиальных отелей Москвы с видом на город" loading="lazy">
   </div>
</div>`
        },

//-------------------------------------------------Культура-------------------------------------------------------
        {
            id: 'culture_10',
            title: 'Культура',
            image: '../../img/moscow/cards_city/culture_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Культура в Москве</h1>
</div>
<!-- Блок 1: Знаменитые архитектурные сооружения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Знаменитые архитектурные сооружения</h2>
      <p class="modalBlock__description">
         Московский Кремль&nbsp;&mdash; визитная карточка города и&nbsp;единственная в&nbsp;мире действующая крепость. Стройные силуэты сталинских высоток, ставших символом величия ушедшей советской империи, то&nbsp;и&nbsp;дело появляются в&nbsp;поле зрения и&nbsp;стоят того, чтобы рассмотреть их&nbsp;поближе.
      </p>
      <p class="modalBlock__description">
         Лучший вид на&nbsp;город открывается с&nbsp;Останкинской телебашни, а&nbsp;Шуховская башня на&nbsp;Шаболовке, вероятно, одно из&nbsp;самых остроумных инженерных сооружений начала прошлого века. Обратите внимание на&nbsp;многочисленные доходные дома и&nbsp;особняки мастеров русского модерна&nbsp;&mdash; Шехтеля, Кекушева, Дубовского и&nbsp;Мазырина, а&nbsp;также на&nbsp;эклектичные работы архитектора Клейна, одного из&nbsp;самых плодовитых зодчих Москвы.
      </p>
      <p class="modalBlock__description">
         Также не&nbsp;забудьте познакомиться с&nbsp;современными архитектурными бриллиантами столицы: многослойным офисным центром Dominion Tower от&nbsp;одного из&nbsp;лучших архитекторов в&nbsp;мире Захи Хадид, невероятной спиральной башней комплекса &laquo;Москва-Сити&raquo; и&nbsp;зданием Дома на&nbsp;Мосфильмовской, которое входит в&nbsp;топ-5 небоскрёбов мира по&nbsp;версии Emporis.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_culture/culture_1.jpg" alt="Панорама Московского Кремля и Москвы-реки" loading="lazy">
   </div>
</div>
<!-- Блок 2: Искусство -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Искусство</h2>
      <p class="modalBlock__description">
         В&nbsp;Москве любят и&nbsp;ценят искусство. В&nbsp;классическую программу входит осмотр богатейшей коллекции русского искусства в&nbsp;Третьяковской галерее (включая отделение на&nbsp;Крымском Валу) и&nbsp;уникального собрания западных импрессионистов в&nbsp;ГМИИ им. Пушкина.
      </p>
      <p class="modalBlock__description">
         Современное искусство можно посмотреть в&nbsp;галереях &laquo;Винзавода&raquo;, Московском музее современного искусства на&nbsp;Петровке или Ермолаевском переулке. Свежий взгляд на&nbsp;культурную жизнь столицы подарит посещение минималистичных пространств MAMM и&nbsp;дома культуры ГЭС-2, идеально подходящих для неспешного знакомства с&nbsp;творческими взаимодействиями профессионалов и&nbsp;любителей.
      </p>
      <p class="modalBlock__description">
         Не&nbsp;забудьте заглянуть в&nbsp;&laquo;Зотов&raquo;&nbsp;&mdash; новый центр притяжения в&nbsp;самом сердце Москвы, который заряжен духом конструктивизма и&nbsp;наполнен выставками, авторскими мастер-классами и&nbsp;лекциями от&nbsp;ведущих экспертов в&nbsp;сфере искусства и&nbsp;архитектуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_culture/culture_2.jpg" alt="Зал Государственной Третьяковской галереи или современная выставка в ГЭС-2" loading="lazy">
   </div>
</div>
<!-- Блок 3: Исторические кварталы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Исторические кварталы</h2>
      <p class="modalBlock__description">
         По&nbsp;Москве легко гулять, тем более что в&nbsp;столице есть целая сеть пешеходных улиц и&nbsp;переулков&nbsp;&mdash; Старый Арбат, Никольская, Большая Дмитровка, Крымская набережная и&nbsp;так далее. Вообще в&nbsp;центре приятным будет практически любой маршрут: от&nbsp;Кремля можно дойти до&nbsp;Китай-города с&nbsp;его уютными старыми храмами и&nbsp;палатами XVII&nbsp;века, погулять по&nbsp;Бульварному кольцу, где классицистические особняки стоят бок о&nbsp;бок с&nbsp;прекрасными образцами московского модерна, пройти &laquo;золотую милю&raquo; между Остоженкой и&nbsp;Пречистенкой&nbsp;&mdash; заповедник самой дорогой недвижимости.
      </p>
      <p class="modalBlock__description">
         Любители хай-тека могут отправиться в&nbsp;Сити&nbsp;&mdash; затеряться среди небоскребов, отражающих высокое небо города и&nbsp;подняться в&nbsp;поп-арт ресторан Sixty за&nbsp;панорамными видами и&nbsp;отменной европейской кухней.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_culture/culture_3.jpg" alt="Пешеходная улица Старый Арбат или вид на старинные особняки Бульварного кольца" loading="lazy">
   </div>
</div>
<!-- Блок 4: Театры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Театры</h2>
      <p class="modalBlock__description">
         Театральные площадки работают во&nbsp;всех известных жанрах и&nbsp;нацелены на&nbsp;разную аудиторию. Двери открыты как для любителей классических произведений, так и&nbsp;для ценителей новаторских спектаклей. На&nbsp;Театральной площади Москвы расположились храмы искусства с&nbsp;мировым именем&nbsp;&mdash; Историческая и&nbsp;Новая сцены Большого театра, Малый и&nbsp;Российский академический Молодежный театры.
      </p>
      <p class="modalBlock__description">
         Любителей классического репертуара ждут в&nbsp;Музыкальном театре Станиславского и&nbsp;Немировича-Данченко, который славится лучшей оперной и&nbsp;балетной сценой. Большой популярностью пользуются МХТ им. Чехова с&nbsp;культовыми спектаклями Вишневый сад и&nbsp;Чайка, театр&nbsp;им. Владимира Маяковского, Мастерская Петра Фоменко, &laquo;Новая опера&raquo; имени Колобова, экспериментальный театр &laquo;Практика&raquo;, Театр наций под управлением Евгения Миронова и&nbsp;театр&nbsp;им. Ермоловой с&nbsp;художественным руководителем Олегом Меньшиковым.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_culture/culture_4.jpg" alt="Зрительный зал Большого театра или современная постановка на сцене МХТ" loading="lazy">
   </div>
</div>
<!-- Блок 5: Музеи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музеи</h2>
      <p class="modalBlock__description">
         В&nbsp;столице более 400&nbsp;музеев. Обязателен к&nbsp;посещению Московский Кремль с&nbsp;его соборами, Оружейной и&nbsp;Грановитой палатами, Алмазным фондом. Неподалеку расположены Исторический музей и&nbsp;Покровский собор (храм Василия Блаженного).
      </p>
      <p class="modalBlock__description">
         Любителям старины следует посетить Коломенское, где воссозданы великолепный деревянный дворец царя Алексея Михайловича и&nbsp;его соколиный двор, а&nbsp;кого интересует искусство&nbsp;ХХ и&nbsp;ХХI&nbsp;веков, стоит заглянуть в&nbsp;Московский музей современного искусства.
      </p>
      <p class="modalBlock__description">
         Еще одна популярная выставочная площадка&nbsp;&mdash; Музей Москвы, расположенный в&nbsp;Провиантских складах на&nbsp;Зубовском бульваре.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_culture/culture_5.jpg" alt="Интерьер Оружейной палаты Московского Кремля или экспонат Музея Москвы" loading="lazy">
   </div>
</div>
<!-- Блок 6: Подмосковье -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Подмосковье</h2>
      <p class="modalBlock__description">
         Московскую область принято называть ближним Подмосковьем&nbsp;&mdash; между тем по&nbsp;площади она превосходит Швейцарию, и&nbsp;при этом здесь сконцентрировано огромное количество достопримечательностей. Десятки роскошных усадеб и&nbsp;древних соборов; очаровательные городки Коломна и&nbsp;Дмитров, с&nbsp;крепостями, которые в&nbsp;свое время могли поспорить размерами и&nbsp;оснащенностью с&nbsp;Московским Кремлем; горнолыжные комплексы &laquo;Волен&raquo; и&nbsp;&laquo;Сорочаны&raquo;; невероятный по&nbsp;масштабам военно-патриотический парк &laquo;Патриот&raquo; и&nbsp;военный полигон &laquo;Алабино&raquo;, на&nbsp;котором проходит зрелищный танковый биатлон.
      </p>
      <p class="modalBlock__description">
         Все это лишь малая доля сокровищ Подмосковья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/moscow/cards_modal/city_culture/culture_6.jpg" alt="Вид на Коломенский кремль или усадебный парк в Подмосковье" loading="lazy">
   </div>
</div>`
        }
    ]

};

window.moscowData = moscowData;
