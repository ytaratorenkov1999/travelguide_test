// ============================================
// ДАННЫЕ КАРТОЧЕК АЛТАЙСКОГО КРАЯ
// ============================================

const altaiData = {
//------------------------------Точки притяжения региона------------------------------------------
    attractions: [
        {
            id: 'zolotie_gori_altaya',
            title: 'Золотые горы Алтая',
            image: '../../img/altai/cards_tochki/Zolotye_gory_Altaya0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Золотые горы Алтая</h1>
</div>
<!-- Блок 1: Объект Всемирного наследия ЮНЕСКО -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Объект Всемирного наследия ЮНЕСКО</h2>
      <p class="modalBlock__description">
         Памятник ЮНЕСКО &laquo;Золотые горы Алтая&raquo;, включенный в&nbsp;список в&nbsp;1998&nbsp;году, объединяет три ключевые территории региона: Алтайский и&nbsp;Катунский биосферные заповедники, а&nbsp;также плоскогорье Укок.
      </p>
      <p class="modalBlock__description">
         Этот комплекс, общей площадью 1,64 млн&nbsp;га, представляет наиболее ценные и&nbsp;эталонные экосистемы Центральной Азии и&nbsp;Южной Сибири, находящиеся на&nbsp;стыке границ четырех государств.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/zolotie_gori_altaya/Zolotye_gory_Altaya1.jpg" alt="Вид на горные хребты Алтая, объект ЮНЕСКО" loading="lazy">
   </div>
</div>
<!-- Блок 2: Сердце Центральной Азии -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сердце Центральной Азии</h2>
      <p class="modalBlock__description">
         На&nbsp;стыке границ России, Казахстана, Китая и&nbsp;Монголии раскинулась красивейшая и&nbsp;величественная горная система&nbsp;&mdash; сердце Центральной Азии и&nbsp;Южной Сибири.
      </p>
      <p class="modalBlock__description">
         За&nbsp;миллионы лет геологической истории здесь сформировались уникальные ландшафты&nbsp;&mdash; от&nbsp;гигантских терракотовых террас реки Катуни до&nbsp;увенчанной вечными ледниками горы Белуха, высочайшей точки Сибири (4506&nbsp;м).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/zolotie_gori_altaya/Zolotye_gory_Altaya2.jpg" alt="Панорама горных хребтов и речных долин Алтая" loading="lazy">
   </div>
</div>
<!-- Блок 3: Ландшафтное разнообразие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ландшафтный калейдоскоп</h2>
      <p class="modalBlock__description">
         На&nbsp;относительно небольшой территории &laquo;Золотых гор&raquo; встречается полный спектр природных зон Центральной Азии. Путешественник может увидеть сухие степи, пустынные участки, густую горную тайгу и&nbsp;красочные альпийские луга.
      </p>
      <p class="modalBlock__description">
         Такой контрастный природный калейдоскоп делает Алтай исключительным регионом с&nbsp;точки зрения ландшафтного разнообразия и&nbsp;биологической уникальности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/zolotie_gori_altaya/Zolotye_gory_Altaya3.jpg" alt="Разнообразие ландшафтов: степи, тайга, альпийские луга" loading="lazy">
   </div>
</div>
<!-- Блок 4: Убежище для редких видов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Убежище для редких видов</h2>
      <p class="modalBlock__description">
         Уникальные ландшафты &laquo;Золотых гор&raquo; стали последним убежищем для редких и&nbsp;эндемичных видов. Особое значение территория имеет для сохранения двух краснокнижных символов Алтая:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Снежный барс (ирбис)</strong>&nbsp;&mdash; загадочный и&nbsp;неуловимый &laquo;дух гор&raquo;, одна из&nbsp;самых редких кошек планеты.</li>
         <li class="modalBlock__listItem"><strong>Алтайский аргали (горный баран)</strong>&nbsp;&mdash; самый крупный подвид архара в&nbsp;мире, величественный обитатель высокогорий.</li>
      </ul>
      <p class="modalBlock__description">
         Сохранение их&nbsp;популяций&nbsp;&mdash; одна из&nbsp;главных природоохранных задач на&nbsp;этой территории.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/zolotie_gori_altaya/Zolotye_gory_Altaya4.jpg" alt="Снежный барс и алтайский аргали в естественной среде" loading="lazy">
   </div>
</div>
<!-- Блок 5: Составные части объекта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Составные части объекта</h2>
      <p class="modalBlock__description">
         Комплекс &laquo;Золотые горы Алтая&raquo; включает несколько особо охраняемых природных территорий:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Алтайский государственный природный биосферный заповедник</strong>&nbsp;&mdash; эталон дикой природы с&nbsp;Телецким озером.</li>
         <li class="modalBlock__listItem"><strong>Катунский государственный природный биосферный заповедник</strong>&nbsp;&mdash; территория вокруг горы Белуха.</li>
         <li class="modalBlock__listItem"><strong>Природный парк &laquo;Белуха&raquo;</strong>&nbsp;&mdash; зона поклонения священной горе.</li>
         <li class="modalBlock__listItem"><strong>Природный парк &laquo;Зона покоя Укок&raquo;</strong>&nbsp;&mdash; сакральное плато с&nbsp;памятниками истории.</li>
         <li class="modalBlock__listItem"><strong>Буферная зона Телецкого озера</strong>&nbsp;&mdash; охраняемая акватория &laquo;малого Байкала&raquo; Алтая.</li>
      </ul>
      <p class="modalBlock__description">
         Каждая из&nbsp;этих территорий вносит свой уникальный вклад в&nbsp;сохранение природного и&nbsp;культурного наследия Алтая, делая регион настоящей жемчужиной Евразии.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/zolotie_gori_altaya/Zolotye_gory_Altaya5.jpg" alt="Карта расположения объектов ЮНЕСКО на Алтае" loading="lazy">
   </div>
</div>`
        },

//------------------------------Телецкое озеро------------------------------------------
        {
            id: 'teletskoe_ozero',
            title: 'Телецкое озеро',
            image: '../../img/altai/cards_tochki/Teleckoe_ozero0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Телецкое озеро</h1>
</div>
<!-- Блок 1: Алтын-Кёль — золотое озеро Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Алтын-Кёль&nbsp;&mdash; золотое озеро Алтая</h2>
      <p class="modalBlock__description">
         Раскинувшееся на&nbsp;80&nbsp;км среди горных хребтов, Телецкое озеро давно стало центром притяжения для туристов. Местные жители называют его Алтын-Кёль (&laquo;золотое озеро&raquo;), и, когда видишь, как его воды переливаются в&nbsp;лучах заката, понимаешь, почему оно заслужило такое имя.
      </p>
      <p class="modalBlock__description">
         Глубокое и&nbsp;чистое, Телецкое озеро по&nbsp;праву считается одной из&nbsp;главных достопримечательностей Алтая. Его суровая красота и&nbsp;богатая история продолжают привлекать путешественников со&nbsp;всего мира.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/teletckoe_ozero/Teleckoe_ozero1.jpg" alt="Панорамный вид на Телецкое озеро в лучах заката" loading="lazy">
   </div>
</div>
<!-- Блок 2: Легенды о золоте и тайны глубин -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Легенды о&nbsp;золоте и&nbsp;тайны глубин</h2>
      <p class="modalBlock__description">
         Согласно легендам, когда-то жившие по&nbsp;берегам озера теленгиты находили в&nbsp;этих землях большие куски драгоценного металла, которые, однако, так и&nbsp;не&nbsp;принесли им&nbsp;богатства.
      </p>
      <p class="modalBlock__description">
         Озеро хранит множество тайн. Старинные предания рассказывают о&nbsp;затонувшем войске Чингисхана и&nbsp;таинственных существах, обитающих в&nbsp;глубинах. Эти истории особенно завораживают вечером, когда над озером сгущаются сумерки, а&nbsp;вода становится темной и&nbsp;загадочной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/teletckoe_ozero/Teleckoe_ozero2.jpg" alt="Таинственные виды озера в тумане или в сумерках" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сокровища побережья: водопады и заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сокровища побережья</h2>
      <p class="modalBlock__description">
         Озеро открывает путешественникам свои природные сокровища. По&nbsp;берегам низвергаются живописные водопады, самые известные из&nbsp;которых&nbsp;&mdash; Киште, Корбу и&nbsp;Аю-Кечпес.
      </p>
      <p class="modalBlock__description">
         На&nbsp;мысе Кырсай можно увидеть необычную песчаную косу, а&nbsp;в&nbsp;поселке Яйлю&nbsp;&mdash; познакомиться с&nbsp;сердцем Алтайского заповедника, административный центр которого расположен здесь. Водная гладь озера отражает скальные гроты и&nbsp;таинственные пещеры, скрытые в&nbsp;береговых утесах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/teletckoe_ozero/Teleckoe_ozero3.jpg" alt="Водопад Корбу, мыс Кырсай и поселок Яйлю" loading="lazy">
   </div>
</div>
<!-- Блок 4: Туристическая инфраструктура и маршруты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Отдых и&nbsp;исследование</h2>
      <p class="modalBlock__description">
         На&nbsp;берегах озера расположены многочисленные турбазы и&nbsp;кемпинги, готовые принять гостей&nbsp;&mdash; от&nbsp;эко-домиков до&nbsp;современных комплексов.
      </p>
      <p class="modalBlock__description">
         Сюда ведут проверенные временем маршруты&nbsp;&mdash; пешие, водные и&nbsp;велосипедные, многие из&nbsp;которых были проложены еще в&nbsp;советские годы. Активный отдых на&nbsp;озере включает прогулки на&nbsp;катерах, рыбалку, трекинг по&nbsp;окрестным тропам и&nbsp;посещение заповедных мест.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/teletckoe_ozero/Teleckoe_ozero4.jpg" alt="Турбазы на берегу, катера на озере, туристы на тропах" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Телецкого озера -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Телецкого озера</h2>
      <p class="modalBlock__description">
         Основной точкой доступа к&nbsp;озеру является поселок Артыбаш на&nbsp;его северном берегу. Проще всего добраться из&nbsp;Горно-Алтайска.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> Из&nbsp;Горно-Алтайска по&nbsp;трассе вдоль реки Бия до&nbsp;поселка Артыбаш (около 150&nbsp;км).</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> На&nbsp;регулярном автобусе из&nbsp;Горно-Алтайска до&nbsp;села Артыбаш.</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;водном транспорте:</strong> В теплое время года из Бийска и соседних поселений проходят экскурсии по реке Бия, вытекающей из Телецкого озера.</li>
      </ul>
      <p class="modalBlock__description">
         От&nbsp;Артыбаша начинаются большинство экскурсий по&nbsp;озеру, а&nbsp;также паромная переправа на&nbsp;южный берег, где расположен поселок Яйлю и&nbsp;кордоны Алтайского заповедника.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/teletckoe_ozero/kak_dobratsya.jpg" alt="Дорога к озеру, поселок Артыбаш, карта маршрутов" loading="lazy">
   </div>
</div>`
        },

//------------------------------Алтайский Марс------------------------------------------
        {
            id: 'mars_altaiskii',
            title: 'Алтайский Марс',
            image: '../../img/altai/cards_tochki/Altayskiy_Mars_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Алтайский Марс</h1>
</div>
<!-- Блок 1: Марсианские пейзажи Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Марсианские пейзажи Алтая</h2>
      <p class="modalBlock__description">
         Среди бескрайних просторов Алтая скрывается удивительное место, где природа Земли создала собственные марсианские ландшафты. В&nbsp;Кош-Агачском районе, недалеко от&nbsp;Чуйского тракта, раскинулись фантастические цветные горы.
      </p>
      <p class="modalBlock__description">
         Урочище Кызыл-Чин, что в&nbsp;переводе с&nbsp;алтайского означает &laquo;красное ущелье&raquo;, полностью оправдывает свое название. Эти марсианские пейзажи не&nbsp;просто радуют глаз&nbsp;&mdash; они хранят в&nbsp;себе древние легенды и&nbsp;загадки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_mars/Altayskiy_Mars_1.jpg" alt="Панорамный вид на цветные горы Кызыл-Чина" loading="lazy">
   </div>
</div>
<!-- Блок 2: Три Марса: феноменальные вершины -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Три Марса: феноменальные вершины</h2>
      <p class="modalBlock__description">
         Всего здесь существует три &laquo;Марса&raquo;&nbsp;&mdash; три смотровых площадки (Марс-1, Марс-2 и&nbsp;Марс-3), расположенные в&nbsp;нескольких километрах друг от&nbsp;друга в&nbsp;долинах рек Кызыл-Чин и&nbsp;Чаган-Узун.
      </p>
      <p class="modalBlock__description">
         Феноменальные вершины, возвышающиеся на&nbsp;1,8&nbsp;тыс.&nbsp;м&nbsp;над уровнем моря, представляют собой уникальное творение природы. На&nbsp;закате склоны гор вспыхивают багрянцем, создавая иллюзию пылающих вершин.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_mars/Altayskiy_Mars_2.jpg" alt="Три разные смотровые площадки Марс-1, Марс-2, Марс-3" loading="lazy">
   </div>
</div>
<!-- Блок 3: Волшебство красок и контрастов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Волшебство красок и&nbsp;контрастов</h2>
      <p class="modalBlock__description">
         Особенно волшебно это выглядит в&nbsp;начале лета, когда цветущие кустарники добавляют ярких красок в&nbsp;и&nbsp;без того необычную палитру пейзажа.
      </p>
      <p class="modalBlock__description">
         Каждый камень здесь кажется пришельцем из&nbsp;других миров, а&nbsp;необычные цвета гор&nbsp;&mdash; от&nbsp;киноварно-красных до&nbsp;лиловых и&nbsp;охристых&nbsp;&mdash; напоминают о&nbsp;том, что природа&nbsp;&mdash; самый талантливый художник.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_mars/Altayskiy_Mars_3.jpg" alt="Цветущие растения на фоне разноцветных гор" loading="lazy">
   </div>
</div>
<!-- Блок 4: Уникальный микроклимат и идиллия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальный микроклимат и&nbsp;идиллия</h2>
      <p class="modalBlock__description">
         Местный микроклимат по-своему уникален. Весной здесь можно заметить мирно пасущиеся стада&nbsp;&mdash; эта идиллическая картина переносит в&nbsp;далекие времена, когда жизнь текла размеренно и&nbsp;спокойно.
      </p>
      <p class="modalBlock__description">
         Но&nbsp;горная погода бывает переменчива: если днем воздух может прогреваться до&nbsp;+28&nbsp;&deg;С, то&nbsp;ночью температура резко падает. Частые дожди требуют от&nbsp;путешественников особой подготовки и&nbsp;соответствующей экипировки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_mars/Altayskiy_Mars_4.jpg" alt="Стада животных на фоне марсианских пейзажей" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Алтайского Марса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Алтайского Марса</h2>
      <p class="modalBlock__description">
         Неземные пейзажи урочища Кызыл-Чин находятся всего в&nbsp;7&nbsp;км от&nbsp;Чуйского тракта, рядом с&nbsp;поселком Ортолык и&nbsp;маленьким селом Бельтир.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> Доехать до&nbsp;смотровых площадок можно только на&nbsp;внедорожнике от&nbsp;села Чаган-Узун. Расстояние от&nbsp;Горно-Алтайска по&nbsp;Чуйскому тракту&nbsp;&mdash; около 400&nbsp;км.</li>
         <li class="modalBlock__listItem"><strong>Местоположение:</strong> Кош-Агачский район, между селами Чаган-Узун и&nbsp;Ортолык, в&nbsp;7&nbsp;км от&nbsp;Чуйского тракта.</li>
      </ul>
      <p class="modalBlock__description">
         Это место, где действительно можно почувствовать себя первооткрывателем неизведанной планеты, не&nbsp;покидая пределов Земли. Рекомендуется посещение в&nbsp;сухую погоду и&nbsp;на&nbsp;подготовленном транспорте.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_mars/kak_dobratsya.jpg" alt="Дорога к Кызыл-Чину, внедорожники на маршруте" loading="lazy">
   </div>
</div>`
        },

//------------------------------Река Катунь------------------------------------------
        {
            id: 'reka_katun',
            title: 'Река Катунь',
            image: '../../img/altai/cards_tochki/Reka_Katun0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Река Катунь</h1>
</div>
<!-- Блок 1: Царица Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Царица Алтая</h2>
      <p class="modalBlock__description">
         Эта река по&nbsp;праву считается главной водной артерией Горного Алтая. Ее&nbsp;имя от&nbsp;древнетюркского слова &laquo;катын&raquo; означает &laquo;река&raquo;, а&nbsp;в&nbsp;алтайском варианте звучит как &laquo;кадын&raquo; (&laquo;царица&raquo;), что полностью отражает ее&nbsp;характер.
      </p>
      <p class="modalBlock__description">
         Эта могучая река, один из&nbsp;крупнейших притоков Оби, протянулась почти на&nbsp;700&nbsp;км по&nbsp;просторам Алтая. Ее&nbsp;бурные воды, рожденные у&nbsp;ледника Геблера на&nbsp;склонах священной Белухи, прорезают горные хребты, создавая неповторимые по&nbsp;красоте пейзажи.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/reka_katun/Reka_Katun_1.jpg" alt="Вид на реку Катунь в горах Алтая" loading="lazy">
   </div>
</div>
<!-- Блок 2: От истока до равнины -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;истока до&nbsp;равнины</h2>
      <p class="modalBlock__description">
         Начинается Катунь у&nbsp;подножия священной горы Белухи, где из&nbsp;ледника Геблера рождаются ее&nbsp;первые хрустальные струи. Красивый бирюзово-молочный цвет воде придают растворенные в&nbsp;ней горные породы.
      </p>
      <p class="modalBlock__description">
         Катунь&nbsp;&mdash; река контрастов. В&nbsp;верховьях это стремительный горный поток с&nbsp;ледяной водой, а&nbsp;ниже села Майма она успокаивается, превращаясь в&nbsp;степную реку. Ее&nbsp;питают более 250 притоков и&nbsp;800&nbsp;ледников.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/reka_katun/Reka_Katun_2.jpg" alt="Исток Катуни у ледника Геблера и спокойные низовья" loading="lazy">
   </div>
</div>
<!-- Блок 3: Слияние Катуни и Бии: живая легенда -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Слияние Катуни и&nbsp;Бии: живая легенда</h2>
      <p class="modalBlock__description">
         Особое место занимает участок слияния Катуни и&nbsp;Бии, где рождается река Обь. Здесь можно наблюдать удивительное явление&nbsp;&mdash; воды двух рек, не&nbsp;смешиваясь, долго текут рядом, создавая контрастную двухцветную ленту.
      </p>
      <p class="modalBlock__description">
         На&nbsp;этом месте расположен остров Иконников, хранящий следы древних стоянок и&nbsp;караванных путей в&nbsp;Монголию.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/reka_katun/Reka_Katun_3.jpg" alt="Двухцветный поток при слиянии Катуни и Бии" loading="lazy">
   </div>
</div>
<!-- Блок 4: Легенда о Кадын и Бие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Легенда о&nbsp;Кадын и&nbsp;Бие</h2>
      <p class="modalBlock__description">
         О&nbsp;слиянии двух самых красивых рек Алтая есть множество легенд. Почти все они рассказывают о&nbsp;девушке по&nbsp;имени Кадын (&laquo;царице&raquo;) и&nbsp;Бие (&laquo;господине&raquo;), между которыми разворачивались интригующие события.
      </p>
      <p class="modalBlock__description">
         К&nbsp;сюжетному единогласию эти истории так и&nbsp;не&nbsp;пришли: то&nbsp;ли так сильно они любили друг друга, что решили слиться воедино, то&nbsp;ли, наоборот, захотели расстаться навсегда. Но, как&nbsp;бы то&nbsp;ни&nbsp;было, герои делали все, чтобы достичь счастья. Эта легенда живет в&nbsp;сердцах алтайцев и&nbsp;по&nbsp;сей день.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/reka_katun/Reka_Katun_4.jpg" alt="Художественное изображение легенды о Кадын и Бие" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и познакомиться с рекой -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;познакомиться с&nbsp;рекой</h2>
      <p class="modalBlock__description">
         Река Катунь доступна для знакомства практически на&nbsp;всем протяжении Чуйского тракта.
      </p>
      <p class="modalBlock__description">
         <strong>Начало знакомства:</strong> Проще всего начать знакомство с&nbsp;рекой в&nbsp;пригороде Горно-Алтайска или в&nbsp;районе села Чемал, где она уже полноводна, но&nbsp;еще сохраняет горный характер.
      </p>
      <p class="modalBlock__description">
         <strong>Активный отдых:</strong> По&nbsp;берегам Катуни проходит множество туристических троп, организованы смотровые площадки, а&nbsp;также развит активный отдых: рафтинг, сплавы, рыбалка и&nbsp;пешие походы вдоль живописных берегов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/reka_katun/kak_dobratsya.jpg" alt="Туристические тропы вдоль Катуни и рафтинг" loading="lazy">
   </div>
</div>`
        },
//------------------------------Мультинские озера------------------------------------------

        {
            id: 'multinskie_ozera',
            title: 'Мультинские озера',
            image: '../../img/altai/cards_tochki/Multinskie_ozera_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Мультинские озера</h1>
</div>
<!-- Блок 1: Каскад горных жемчужин -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Каскад горных жемчужин</h2>
      <p class="modalBlock__description">
         Каскад высокогорных озер уникален не&nbsp;только своим живописным рельефом, но&nbsp;и&nbsp;богатым заповедным миром на&nbsp;его берегах. Каждое озеро неповторимо и&nbsp;имеет глубокий сине-зеленый оттенок.
      </p>
      <p class="modalBlock__description">
         Группа озер на&nbsp;северных склонах Катунского хребта давно стала визитной карточкой Горного Алтая. Мый-Туу в&nbsp;переводе с&nbsp;алтайского&nbsp;&mdash; &laquo;гора диких кошек&raquo;: когда-то эти земли принадлежали ирбисам&nbsp;&mdash; снежным барсам.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/multinskie_ozera/Multinskie_ozera_1.jpg" alt="Панорама каскада Мультинских озер" loading="lazy">
   </div>
</div>
<!-- Блок 2: Шесть главных жемчужин -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Шесть главных жемчужин</h2>
      <p class="modalBlock__description">
         Обычно в&nbsp;путеводителях упоминают пять-шесть озер, хотя в&nbsp;бассейне реки Мульта их&nbsp;около 40. Особой популярностью пользуются шесть крупнейших:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Нижнее, Среднее и&nbsp;Верхнее Мультинские</strong>&nbsp;&mdash; сердце каскада.</li>
         <li class="modalBlock__listItem"><strong>Поперечное, Крепкое и&nbsp;Куйгук</strong>&nbsp;&mdash; высокогорные озера.</li>
      </ul>
      <p class="modalBlock__description">
         Обрамленные вековыми кедрами и&nbsp;острыми пиками гор, они переливаются оттенками&nbsp;&mdash; от&nbsp;кристальной прозрачности до&nbsp;насыщенной бирюзы. Особое очарование придает водопад Шумы, соединяющий Среднее и&nbsp;Нижнее озера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/multinskie_ozera/Multinskie_ozera_2.jpg" alt="Нижнее, Среднее и Верхнее Мультинские озера" loading="lazy">
   </div>
</div>
<!-- Блок 3: Доступность и инфраструктура -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Доступность и&nbsp;инфраструктура</h2>
      <p class="modalBlock__description">
         Верхнее Мультинское и&nbsp;Поперечное озера расположены на&nbsp;территории Катунского заповедника, и&nbsp;для их&nbsp;посещения требуется специальный пропуск.
      </p>
      <p class="modalBlock__description">
         Нижнее и&nbsp;Среднее озера, входящие в&nbsp;природоохранную зону, предлагают туристам инфраструктуру: кемпинги, бани и&nbsp;прокат лодок. До&nbsp;Нижнего озера можно доехать на&nbsp;внедорожнике, что делает его популярным местом отдыха с&nbsp;возможностью радиальных походов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/multinskie_ozera/Multinskie_ozera_3.jpg" alt="Кемпинг у Нижнего озера и туристы на тропе" loading="lazy">
   </div>
</div>
<!-- Блок 4: Маршруты к озерам -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Два пути к&nbsp;красоте</h2>
      <p class="modalBlock__description">
         <strong>Простой путь (1&nbsp;день):</strong> Самый быстрый маршрут до&nbsp;Нижнего озера лежит вдоль реки Мульты. Преодолеть 20&nbsp;км от&nbsp;села Мульта можно за&nbsp;день с&nbsp;небольшим набором высоты.
      </p>
      <p class="modalBlock__description">
         <strong>Живописный маршрут (3&nbsp;дня):</strong> Более сложная и&nbsp;красивая тропа с&nbsp;набором высоты в&nbsp;2,5&nbsp;тыс.&nbsp;м&nbsp;идет через перевал Куйгук и&nbsp;озеро Акчан. Крутые подъемы по&nbsp;каменным россыпям (курумнику) вознаграждаются панорамными видами и&nbsp;мощными водопадами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/multinskie_ozera/Multinskie_ozera_4.jpg" alt="Тропа вдоль реки Мульта и вид с перевала Куйгук" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до начала маршрутов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;начала маршрутов</h2>
      <p class="modalBlock__description">
         Все маршруты по&nbsp;Мультинским озерам начинаются от&nbsp;села Мульта в&nbsp;Усть-Коксинском районе.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Проще всего доехать до&nbsp;села Мульта на&nbsp;автомобиле. Из&nbsp;Горно-Алтайска нужно двигаться по&nbsp;Чуйскому тракту до&nbsp;села Усть-Сема, затем свернуть по&nbsp;указателю на&nbsp;Усть-Коксу. После села Усть-Кокса будет поворот к&nbsp;селу Мульта и&nbsp;подвесной мост через Катунь.
      </p>
      <p class="modalBlock__description">
         От&nbsp;села Мульта начинаются пешие тропы и&nbsp;автомобильная дорога (только для внедорожников) к&nbsp;Нижнему Мультинскому озеру.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/multinskie_ozera/kak_dobratsya.jpg" alt="Село Мульта, подвесной мост через Катунь и указатели" loading="lazy">
   </div>
</div>`
        },
//------------------------------Гейзерное озеро------------------------------------------
        {
            id: 'geizernoe_ozero',
            title: 'Гейзерное озеро',
            image: '../../img/altai/cards_tochki/Geyzernoe_ozero_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Гейзерное озеро</h1>
</div>
<!-- Блок 1: Серебряное или Голубое? -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Серебряное или Голубое?</h2>
      <p class="modalBlock__description">
         В&nbsp;окрестностях села Акташ прячется удивительный водоем, который местные называют то&nbsp;Голубым, то&nbsp;Серебряным, но&nbsp;чаще всего&nbsp;&mdash; Гейзерным.
      </p>
      <p class="modalBlock__description">
         Хотя настоящих гейзеров здесь нет, озеро обладает особой магией: его дно украшают постоянно меняющиеся узоры из&nbsp;голубой глины, ила и&nbsp;песка, создаваемые подземными источниками.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/geizernoe_ozero/Geyzernoe_ozero_1.jpg" alt="Вид на Гейзерное озеро сверху, видимые узоры на дне" loading="lazy">
   </div>
</div>
<!-- Блок 2: Молодое чудо Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Молодое чудо Алтая</h2>
      <p class="modalBlock__description">
         Удивительно, но&nbsp;этот природный шедевр появился сравнительно недавно. Предполагается, что озеро образовалось после мощного Чуйского землетрясения 2003&nbsp;года, а&nbsp;обнаружили его лишь в&nbsp;2010-м.
      </p>
      <p class="modalBlock__description">
         За&nbsp;свою короткую историю оно уже успело стать одной из&nbsp;самых поэтичных и&nbsp;фотогеничных достопримечательностей Алтая, вдохновляющей путешественников и&nbsp;пробуждающей воображение.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/geizernoe_ozero/Geyzernoe_ozero_2.jpg" alt="Крупный план причудливых узоров на дне озера" loading="lazy">
   </div>
</div>
<!-- Блок 3: Живое полотно природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Живое полотно природы</h2>
      <p class="modalBlock__description">
         Термальные воды не&nbsp;дают озеру замерзать зимой, а&nbsp;его поверхность круглый год остается живым полотном, где природные силы рисуют замысловатые картины, похожие на&nbsp;малахитовые разводы.
      </p>
      <p class="modalBlock__description">
         Наблюдательные путешественники могут стать свидетелями фантастического зрелища&nbsp;&mdash; в&nbsp;какой-то момент разноцветные узоры из&nbsp;голубой глины и&nbsp;песка начинают плавно трансформироваться прямо на&nbsp;глазах под действием подводных ключей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/geizernoe_ozero/Geyzernoe_ozero_3.jpg" alt="Яркие бирюзовые и голубые узоры в воде" loading="lazy">
   </div>
</div>
<!-- Блок 4: Правила посещения хрупкой красоты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сохраним хрупкую красоту</h2>
      <p class="modalBlock__description">
         Купание в&nbsp;озере строго запрещено&nbsp;&mdash; берега поросли густой растительностью, а&nbsp;главное, человеческое вмешательство могло&nbsp;бы навсегда разрушить эту уникальную экосистему.
      </p>
      <p class="modalBlock__description">
         К&nbsp;счастью, теперь здесь проложена удобная деревянная тропа и&nbsp;оборудована смотровая площадка, позволяющая безопасно любоваться природным феноменом, не&nbsp;нанося ему вреда.
      </p>
      <p class="modalBlock__description">
         Гейзерное озеро не&nbsp;нуждается в&nbsp;древних легендах&nbsp;&mdash; его изменчивые узоры сами предлагают каждому сочинить свою собственную историю.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/geizernoe_ozero/Geyzernoe_ozero_4.jpg" alt="Деревянная тропа и смотровая площадка у озера" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Гейзерного озера</h2>
      <p class="modalBlock__description">
         Озеро находится вблизи Чуйского тракта, что делает его довольно доступным для посещения.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Горно-Алтайска необходимо ехать по&nbsp;Чуйскому тракту до&nbsp;села Акташ (примерно 4&nbsp;часа в&nbsp;пути).
      </p>
      <p class="modalBlock__description">
         <strong>Местоположение:</strong> Сам водоем расположен в&nbsp;нескольких километрах южнее Акташа. От&nbsp;тракта к&nbsp;нему ведет хорошо заметная и&nbsp;удобная пешеходная тропа. Автомобиль можно оставить на&nbsp;специальной площадке у&nbsp;тракта.
      </p>
      <p class="modalBlock__description">
         Посещение бесплатное, но&nbsp;важно соблюдать правила и&nbsp;не&nbsp;сходить с&nbsp;оборудованной тропы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/geizernoe_ozero/kak_dobratsya.jpg" alt="Указатель к озеру на Чуйском тракте и начало тропы" loading="lazy">
   </div>
</div>`
        },

//------------------------------Кату-Ярык------------------------------------------

        {
            id: 'katu_yarik',
            title: 'Кату-Ярык',
            image: '../../img/altai/cards_tochki/Katu_Yaryk_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Перевал Кату-Ярык</h1>
</div>
<!-- Блок 1: Головокружительный серпантин Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Головокружительный серпантин Алтая</h2>
      <p class="modalBlock__description">
         Перевал Кату-Ярык&nbsp;&mdash; настоящее испытание для путешественников и&nbsp;водителей. Дорога, петляющая по&nbsp;крутому склону, открывает панорамы Чулышманской долины, где природа демонстрирует свою мощь в&nbsp;полной мере.
      </p>
      <p class="modalBlock__description">
         Молнию серпантина на&nbsp;открытках с&nbsp;Алтая легко опознать благодаря ее&nbsp;исключительной живописности и&nbsp;крутизне. Это место, где дорога становится частью пейзажа, а&nbsp;путешествие&nbsp;&mdash; настоящим приключением.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katu_yarik/Katu_Yaryk_1.jpg" alt="Вид на серпантин перевала Кату-Ярык сверху" loading="lazy">
   </div>
</div>
<!-- Блок 2: Врата в Чулышманскую долину -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Врата в&nbsp;Чулышманскую долину</h2>
      <p class="modalBlock__description">
         Перевал Кату-Ярык стал первой автомобильной дорогой, ведущей в&nbsp;труднодоступную Чулышманскую долину, заменив опасные конные тропы.
      </p>
      <p class="modalBlock__description">
         Он&nbsp;служит важным связующим звеном между цивилизацией и&nbsp;нетронутой природой. Отсюда начинается путь к&nbsp;южным, диким берегам Телецкого озера, куда раньше можно было добраться только пешком или верхом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katu_yarik/Katu_Yaryk_2.jpg" alt="Дорога, уходящая в глубину Чулышманской долины" loading="lazy">
   </div>
</div>
<!-- Блок 3: Технические характеристики и вызов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Технические характеристики и&nbsp;вызов</h2>
      <p class="modalBlock__description">
         На&nbsp;31-м километре трассы Балыктуюль&nbsp;&mdash; Коо&nbsp;&mdash; Балыкча начинается этот необычный участок пути&nbsp;&mdash; крутой серпантин с&nbsp;перепадом высот около 800&nbsp;метров.
      </p>
      <p class="modalBlock__description">
         Сегодня Кату-Ярык привлекает искателей приключений, готовых испытать себя на&nbsp;крутых поворотах по&nbsp;грунтовой дороге. Проезд требует опыта вождения в&nbsp;горных условиях и&nbsp;подготовленного транспорта (внедорожник предпочтительнее).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katu_yarik/Katu_Yaryk_3.jpg" alt="Автомобиль на крутом повороте серпантина" loading="lazy">
   </div>
</div>
<!-- Блок 4: Награда за смелость -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Награда за&nbsp;смелость&nbsp;&mdash; виды навсегда</h2>
      <p class="modalBlock__description">
         Главная награда для преодолевших перевал&nbsp;&mdash; захватывающие виды, открывающиеся с&nbsp;высоты.
      </p>
      <p class="modalBlock__description">
         Перед путешественником предстает панорама извилистой ленты реки Чулышман, величественные скальные бастионы и&nbsp;бескрайние просторы Алтая. Каждый поворот серпантина дарит новые эмоции и&nbsp;напоминает о&nbsp;величии горного края.
      </p>
      <p class="modalBlock__description">
         Виды с&nbsp;Кату-Ярыка остаются в&nbsp;памяти навсегда.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katu_yarik/Katu_Yaryk_4.jpg" alt="Панорамный вид на долину Чулышмана с перевала" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и важные советы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;важные советы</h2>
      <p class="modalBlock__description">
         <strong>Маршрут:</strong> Из&nbsp;Горно-Алтайска необходимо двигаться по&nbsp;Чуйскому тракту (Р-256) до&nbsp;села Акташ, затем свернуть на&nbsp;Улаганский тракт (дорога 84К-11) и&nbsp;следовать до&nbsp;начала спуска с&nbsp;перевала Кату-Ярык. Общее время в&nbsp;пути от&nbsp;Горно-Алтайска&nbsp;&mdash; около 7&nbsp;часов.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Транспорт:</strong> Только внедорожник или автомобиль с&nbsp;высоким клиренсом и&nbsp;хорошей проходимостью.</li>
         <li class="modalBlock__listItem"><strong>Время года:</strong> Лучшее время для посещения&nbsp;&mdash; с&nbsp;июня по&nbsp;сентябрь. Зимой и&nbsp;в&nbsp;распутицу (поздняя осень, ранняя весна) проезд может быть закрыт или крайне опасен.</li>
         <li class="modalBlock__listItem"><strong>Осторожность:</strong> Дорога грунтовая, с&nbsp;крутыми спусками и&nbsp;подъемами. Требуется максимальная внимательность, трезвая оценка своих сил и&nbsp;технического состояния автомобиля.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katu_yarik/kak_dobratsya.jpg" alt="Карта подъезда к перевалу и знак "внедорожник"" loading="lazy">
   </div>
</div>`
        }

    ],

//------------------------------Выбраться на природу------------------------------------------
//------------------------------Выбраться на природу------------------------------------------

    nature: [
        {
            id: 'gora_beluha_2',
            title: 'Гора Белуха',
            image: '../../img/altai/cards_nature/Gora_Beluha_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Гора Белуха</h1>
</div>
<!-- Блок 1: Священная вершина Сибири -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Священная вершина Сибири</h2>
      <p class="modalBlock__description">
         Белуха (4509&nbsp;м)&nbsp;&mdash; самая высокая точка Алтайских гор, Мекка для альпинистов и&nbsp;место силы для алтайцев. Расположенная почти на&nbsp;самой границе с&nbsp;Казахстаном, она является визитной карточкой региона.
      </p>
      <p class="modalBlock__description">
         У&nbsp;этой горы много имен: Уч-Сумер (&laquo;трехглавая&raquo;), Кадын-Бажы (&laquo;вершина Катуни&raquo;). Величественная гора увенчана двумя главными пиками&nbsp;&mdash; Восточной (4509&nbsp;м) и&nbsp;Западной (4435&nbsp;м) Белухой, разделенными седловиной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/gora_beluha/Gora_Beluha_1.jpg" alt="Вид на двуглавую вершину Белухи" loading="lazy">
   </div>
</div>
<!-- Блок 2: Ледники, легенды и покорители -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ледники, легенды и&nbsp;покорители</h2>
      <p class="modalBlock__description">
         Гора покрыта 169&nbsp;ледниками, крупнейший из&nbsp;которых&nbsp;&mdash; ледник Сапожникова площадью более 10&nbsp;кв.&nbsp;км. Именно эти сверкающие на&nbsp;солнце ледники дали горе русское имя.
      </p>
      <p class="modalBlock__description">
         В&nbsp;1914 году главную вершину впервые покорили братья Троновы&nbsp;&mdash; пионеры сибирского альпинизма. Сегодня восхождение на&nbsp;Белуху считается технически сложным, что привлекает альпинистов со&nbsp;всего мира.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/gora_beluha/Gora_Beluha_2.jpg" alt="Ледники Белухи и альпинисты на склонах" loading="lazy">
   </div>
</div>
<!-- Блок 3: Место силы и врата в Шамбалу -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Место силы и&nbsp;врата в&nbsp;Шамбалу</h2>
      <p class="modalBlock__description">
         Окутанная легендами о&nbsp;вратах в&nbsp;мифическую Шамбалу, Белуха привлекает не&nbsp;только скалолазов, но&nbsp;и&nbsp;исследователей, искателей духовных практик. По&nbsp;преданиям, здесь находилась обитель Умай, верховной богини и&nbsp;прародительницы мира.
      </p>
      <p class="modalBlock__description">
         О&nbsp;необыкновенной энергетике горы говорил художник Николай Рерих, часто включавший образ заснеженных скал в&nbsp;свои символические полотна. Белуху он&nbsp;называл белоснежным свидетелем прошлого и&nbsp;поручителем будущего.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/gora_beluha/Gora_Beluha_3.jpg" alt="Мистические пейзажи у подножия Белухи" loading="lazy">
   </div>
</div>
<!-- Блок 4: Три пути к подножию -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Три основных пути к&nbsp;подножию</h2>
      <p class="modalBlock__description">
         Большинство маршрутов к&nbsp;Белухе начинаются в&nbsp;селе Тюнгур. Существует три основных тропы, ведущих к&nbsp;ее&nbsp;подножию:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Аккемская тропа:</strong> Самый короткий и&nbsp;простой путь вдоль реки Аккем до&nbsp;одноименного озера. Занимает около 2&nbsp;дней.</li>
         <li class="modalBlock__listItem"><strong>Кучерлинская тропа:</strong> Проходит через перевал Каратюрек (3000&nbsp;м) с&nbsp;панорамными видами. Занимает около 4&nbsp;дней.</li>
         <li class="modalBlock__listItem"><strong>Ороктойская тропа:</strong> Самый сложный и&nbsp;живописный маршрут по&nbsp;высокогорным плато с&nbsp;радиальными вылазками. Занимает около 5&nbsp;дней.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/gora_beluha/Gora_Beluha_4.jpg" alt="Карта троп и туристы в пути к Белухе" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и подготовиться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;подготовиться</h2>
      <p class="modalBlock__description">
         <strong>Точка старта:</strong> Село Тюнгур в&nbsp;Усть-Коксинском районе (около 350&nbsp;км от&nbsp;Горно-Алтайска по&nbsp;Чуйскому тракту). Время в&nbsp;пути на&nbsp;автомобиле&nbsp;&mdash; около 5&nbsp;часов.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Для посещения приграничной зоны у&nbsp;Белухи необходимо заранее получить разрешение пограничной службы через портал &laquo;Госуслуги&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Оптимальное время:</strong> С&nbsp;июня по&nbsp;сентябрь. Даже летом возможны заморозки и&nbsp;снегопады, поэтому требуется теплая экипировка и&nbsp;акклиматизация. Перед восхождением рекомендуется провести время в&nbsp;долине Семи Озер.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/gora_beluha/kak_dobratsya.jpg" alt="Село Тюнгур, оформление документов и экипировка" loading="lazy">
   </div>
</div>`
        },

//------------------------------Катунский заповедник------------------------------------------

        {
            id: 'Katunskiy_zapovednik_2',
            title: 'Катунский заповедник',
            image: '../../img/altai/cards_nature/Katunskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Катунский заповедник</h1>
</div>
<!-- Блок 1: Жемчужина Катунского хребта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Жемчужина Катунского хребта</h2>
      <p class="modalBlock__description">
         Катунский заповедник охватывает живописные южные склоны Катунского хребта, местами огибая и&nbsp;его северные отроги вплоть до&nbsp;горной гряды Листвяга. Его территория площадью 152&nbsp;тыс.&nbsp;га&nbsp;представляет собой настоящую мозаику горных вершин, древних ледников и&nbsp;глубоких долин.
      </p>
      <p class="modalBlock__description">
         Здесь можно увидеть все многообразие алтайских пейзажей: от&nbsp;цветущих альпийских лугов до&nbsp;суровых скальных образований, от&nbsp;спокойных долин до&nbsp;крутых горных хребтов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katunskii_zapovednik/Katunskiy_zapovednik_1.jpg" alt="Панорама Катунского хребта и горных долин заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Администрация и природоохранный симбиоз -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Охрана и&nbsp;восстановление природы</h2>
      <p class="modalBlock__description">
         Главный административный центр находится в&nbsp;селе Усть-Кокса, откуда сотрудники заповедника координируют природоохранную работу. Их&nbsp;усилия направлены не&nbsp;только на&nbsp;защиту уникальных экосистем, но&nbsp;и&nbsp;на&nbsp;восстановление популяций редких животных.
      </p>
      <p class="modalBlock__description">
         Рядом раскинулся природный парк &laquo;Белуха&raquo;, созданный в&nbsp;1997 году и&nbsp;дополняющий охранную зону заповедника, формируя единый комплекс по&nbsp;сохранению высокогорной природы Алтая.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katunskii_zapovednik/Katunskiy_zapovednik_2.jpg" alt="Село Усть-Кокса и сотрудники заповедника за работой" loading="lazy">
   </div>
</div>
<!-- Блок 3: Древний и изменчивый рельеф -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Древний и&nbsp;изменчивый рельеф</h2>
      <p class="modalBlock__description">
         Рельеф этих мест формировался тысячелетиями под воздействием ледников, оползней и&nbsp;лавин&nbsp;&mdash; и&nbsp;продолжает меняться до&nbsp;сих пор.
      </p>
      <p class="modalBlock__description">
         Движение ледников, эрозия скал и&nbsp;селевые потоки создают постоянно эволюционирующий ландшафт, делая заповедник живой иллюстрацией геологической истории Алтая.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katunskii_zapovednik/Katunskiy_zapovednik_3.jpg" alt="Ледники, скальные образования и следы древних оползней" loading="lazy">
   </div>
</div>
<!-- Блок 4: Водное царство Катуни -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Водное царство Катуни</h2>
      <p class="modalBlock__description">
         Особое богатство заповедника&nbsp;&mdash; его водная система. Река Катунь и&nbsp;ее&nbsp;многочисленные притоки, рождающиеся в&nbsp;ледниках, стремительно несут свои воды по&nbsp;крутым склонам.
      </p>
      <p class="modalBlock__description">
         Их&nbsp;русла, усыпанные валунами и&nbsp;галькой, образуют каскады и&nbsp;водопады, создавая неповторимые по&nbsp;красоте картины дикой природы. Кристально чистые озера и&nbsp;бурные реки&nbsp;&mdash; визитная карточка этих мест.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katunskii_zapovednik/Katunskiy_zapovednik_4.jpg" alt="Река Катунь, горные ручьи и водопады заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 5: Главные точки притяжения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Главные природные жемчужины</h2>
      <p class="modalBlock__description">
         На&nbsp;территории заповедника и&nbsp;его окрестностей сосредоточены одни из&nbsp;самых известных и&nbsp;посещаемых природных объектов Алтая:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Гора Белуха (4506&nbsp;м)</strong>&nbsp;&mdash; высочайшая вершина Сибири, священная гора для алтайцев, покрытая вечными снегами и&nbsp;ледниками.</li>
         <li class="modalBlock__listItem"><strong>Тайменье озеро</strong>&nbsp;&mdash; одно из&nbsp;самых крупных и&nbsp;живописных высокогорных озер, названное в&nbsp;честь обитающей здесь рыбы.</li>
         <li class="modalBlock__listItem"><strong>Рассыпной водопад</strong>&nbsp;&mdash; каскадный водопад на&nbsp;реке Рассыпная, чьи воды &laquo;рассыпаются&raquo; по&nbsp;каменным уступам.</li>
         <li class="modalBlock__listItem"><strong>Мультинские озера</strong>&nbsp;&mdash; каскад из&nbsp;трех живописных озер (Верхнее, Среднее и&nbsp;Нижнее), соединенных протоками и&nbsp;водопадами.</li>
      </ul>
      <p class="modalBlock__description">
         Эти объекты, наряду с&nbsp;уникальной флорой и&nbsp;фауной, делают Катунский заповедник неотъемлемой частью объекта Всемирного наследия ЮНЕСКО &laquo;Золотые горы Алтая&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/katunskii_zapovednik/Katunskiy_zapovednik_5.jpg" alt="Гора Белуха, Мультинские озера и другие достопримечательности" loading="lazy">
   </div>
</div>`
        },

//------------------------------Плато Укок------------------------------------------

        {
            id: 'plato_ukok',
            title: 'Плато Укок',
            image: '../../img/altai/cards_nature/Plato_Ukok_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Плато Укок</h1>
</div>

<!-- Блок 1: Затерянный мир на "крыше мира" -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Затерянный мир на "крыше мира"</h2>
        <p class="modalBlock__description">
            Плато Укок — затерянный мир на юге Алтайских гор, где природа сохранилась в своем древнем, нетронутом виде. Это высокогорная равнина, окруженная величественными хребтами, куда почти не ступала нога человека.
        </p>
        <p class="modalBlock__description">
            Расположенное на высоте около 2,5 тыс. м, плато представляет собой суровый ландшафт бескрайних степей, изрезанных реками, с валунами — свидетелями древнего оледенения. Деревья здесь практически не растут, что придает пейзажу особую, космическую красоту.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/plato_ukok/Plato_Ukok_1.jpg" alt="Панорама высокогорного плато Укок" loading="lazy">
    </div>
</div>

<!-- Блок 2: Природный парк «Зона покоя Укок» -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природный парк «Зона покоя Укок»</h2>
        <p class="modalBlock__description">
            Природный парк «Зона покоя Укок», созданный в 1994 году, занимает южную часть плоскогорья. Его границы проходят по живописным горным хребтам, одновременно являясь государственными рубежами с Монголией, Китаем и Казахстаном.
        </p>
        <p class="modalBlock__description">
            Сердцем парка считается Бертекская котловина — уникальное природное образование с особой экосистемой. Парк входит в список Всемирного наследия ЮНЕСКО «Золотые горы Алтая».
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/plato_ukok/Plato_Ukok_2.jpg" alt="Карта природного парка и вид на Бертекскую котловину" loading="lazy">
    </div>
</div>

<!-- Блок 3: Археологическая сокровищница -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Археологическая сокровищница</h2>
        <p class="modalBlock__description">
            Это место обладает огромной культурной ценностью. На относительно небольшой территории ученые обнаружили от 150 до 180 археологических памятников, большинство из которых — древние захоронения.
        </p>
        <p class="modalBlock__description">
            Самым ранним из них примерно 14 тыс. лет. Особенно много здесь курганов скифского, гунно-сарматского и древнетюркского периодов, возрастом от 1 тыс. до 2,5 тыс. лет. Находки с плато, включая знаменитую «Принцессу Укока», хранятся в музеях Новосибирска и Горно-Алтайска.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/plato_ukok/Plato_Ukok_3.jpg" alt="Древние курганы и петроглифы на плато" loading="lazy">
    </div>
</div>
<!-- Блок 4: Главные точки притяжения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Главные точки притяжения плато</h2>
      <p class="modalBlock__description">
         Несмотря на&nbsp;суровые условия, плато Укок хранит множество уникальных мест, ради которых сюда едут исследователи и&nbsp;подготовленные туристы:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Петроглифы Кызыл-Тас</strong>&nbsp;&mdash; древние наскальные рисунки.</li>
         <li class="modalBlock__listItem"><strong>Гора Таван-Богдо-Ула</strong>&nbsp;&mdash; пятиглавая священная гора, высочайшая точка Алтая (Найрамдал, 4374&nbsp;м).</li>
         <li class="modalBlock__listItem"><strong>Джумалинский источник (теплый ключ)</strong>&nbsp;&mdash; термальные источники, не&nbsp;замерзающие зимой.</li>
         <li class="modalBlock__listItem"><strong>Курган Ак-Алаха-3</strong>&nbsp;&mdash; знаменитое захоронение пазырыкской культуры.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/plato_ukok/Plato_Ukok_4.jpg" alt="Гора Таван-Богдо-Ула и петроглифы Кызыл-Тас" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и особенности посещения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;особенности посещения</h2>
      <p class="modalBlock__description">
         <strong>Маршрут:</strong> Добраться до&nbsp;плато Укок можно только на&nbsp;подготовленном внедорожнике. Из&nbsp;Горно-Алтайска нужно двигаться по&nbsp;Чуйскому тракту до&nbsp;села Кош-Агач, затем свернуть на&nbsp;грунтовую дорогу в&nbsp;сторону плато.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Плато является приграничной зоной, для посещения которой необходимо заранее (минимум за&nbsp;30-60&nbsp;дней) оформить пропуск в&nbsp;Пограничную службу ФСБ РФ.
      </p>
      <p class="modalBlock__description">
         Путешествие на&nbsp;Укок&nbsp;&mdash; это экспедиция. Здесь нет инфраструктуры, необходима полная автономность, включая топливо, продовольствие и&nbsp;снаряжение. Лучшее время для посещения&nbsp;&mdash; июль и&nbsp;август.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/plato_ukok/kak_dobratsya.jpg" alt="Внедорожник на дороге к плато и карта пропускной зоны" loading="lazy">
   </div>
</div>`
        },

//------------------------------Алтайский заповедник------------------------------------------

        {
            id: 'altaiskii_zapovednik',
            title: 'Алтайский заповедник',
            image: '../../img/altai/cards_nature/Altauskiy_Zapovednik_0.jpg',
            modalContent:
`<div class="modalHeader">
   <h1 class="modalHeader__title">Алтайский заповедник</h1>
</div>
<!-- Блок 1: Первозданная природа Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Первозданная природа Алтая</h2>
      <p class="modalBlock__description">
         Алтайский заповедник&nbsp;&mdash; уникальное место, где сохранилась дикая природа в&nbsp;ее&nbsp;первозданном виде. Его территория занимает огромную площадь&nbsp;&mdash; свыше 881&nbsp;тыс.&nbsp;га, что делает его одним из&nbsp;крупнейших заповедников России.
      </p>
      <p class="modalBlock__description">
         Здесь можно увидеть величественные горные хребты, чистейшие озера с&nbsp;прозрачной водой и&nbsp;стремительные реки, пробивающие себе путь среди скал. В&nbsp;этих местах нашли приют множество редких животных и&nbsp;растений, некоторые из&nbsp;которых не&nbsp;встречаются больше нигде в&nbsp;мире.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_zapovednik/Altauskiy_Zapovednik_1.jpg" alt="Вид на горные хребты и долины Алтайского заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Труднодоступность и охрана -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalHeader__title">Труднодоступность и&nbsp;охрана</h2>
      <p class="modalBlock__description">
         Особенность заповедника&nbsp;&mdash; его труднодоступность. Большая часть территории закрыта для свободного посещения, попасть сюда можно только по&nbsp;специальному разрешению.
      </p>
      <p class="modalBlock__description">
         Цивилизация почти не&nbsp;затронула эти места&nbsp;&mdash; здесь нет автомобильных дорог, лишь одна грунтовая трасса, а&nbsp;передвигаться разрешено исключительно по&nbsp;размеченным тропам. На&nbsp;территории запрещена любая промышленная деятельность.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_zapovednik/Altauskiy_Zapovednik_2.jpg" alt="Дикая, нетронутая природа заповедника и охранный знак" loading="lazy">
   </div>
</div>
<!-- Блок 3: Администрация и жизнь в гармонии с природой -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Жизнь в&nbsp;гармонии с&nbsp;природой</h2>
      <p class="modalBlock__description">
         Административный центр заповедника расположен в&nbsp;поселке Яйлю, где живут и&nbsp;работают его сотрудники. Их&nbsp;усилиями сохраняется хрупкое равновесие между человеком и&nbsp;природой.
      </p>
      <p class="modalBlock__description">
         Здесь активно развивается экологический туризм и&nbsp;поддерживаются традиционные ремесла местных жителей. Ученые постоянно изучают уникальную экосистему, а&nbsp;специальные службы следят за&nbsp;соблюдением природоохранного режима.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_zapovednik/Altauskiy_Zapovednik_3.jpg" alt="Поселок Яйлю и сотрудники заповедника за работой" loading="lazy">
   </div>
</div>
<!-- Блок 4: Главные точки притяжения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Главные точки притяжения</h2>
      <p class="modalBlock__description">
         Несмотря на&nbsp;строгий режим, некоторые уникальные объекты заповедника доступны для посещения по&nbsp;специальным маршрутам. Среди них&nbsp;&mdash; настоящие природные жемчужины:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Телецкое озеро</strong>&nbsp;&mdash; &laquo;малое Байкал&raquo; Алтая, одно из&nbsp;самых глубоких и&nbsp;чистых озер России.</li>
         <li class="modalBlock__listItem"><strong>Озеро Джулукуль</strong>&nbsp;&mdash; высокогорное озеро ледникового происхождения, уникальное место гнездования птиц.</li>
         <li class="modalBlock__listItem"><strong>Большой Чульчинский (Учар) водопад</strong>&nbsp;&mdash; каскадный водопад высотой 160&nbsp;метров, самый большой в&nbsp;Горном Алтае.</li>
      </ul>
      <p class="modalBlock__description">
         Каждый из&nbsp;этих объектов представляет собой уникальное творение природы, сохранившееся благодаря заповедному режиму.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_zapovednik/Altauskiy_Zapovednik_4.jpg" alt="Телецкое озеро и Большой Чульчинский водопад" loading="lazy">
   </div>
</div>
<!-- Блок 5: Наследие для будущего -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природное сокровище для будущих поколений</h2>
      <p class="modalBlock__description">
         Алтайский заповедник&nbsp;&mdash; это не&nbsp;просто охраняемая территория, а&nbsp;живая лаборатория природы, где естественные процессы протекают без вмешательства человека.
      </p>
      <p class="modalBlock__description">
         Благодаря строгой охране и&nbsp;научному подходу, эти места остаются эталоном дикой природы. Заповедник служит важнейшим резерватом для сохранения биоразнообразия Алтае-Саянского экорегиона и&nbsp;включен в&nbsp;список объектов Всемирного природного наследия ЮНЕСКО &laquo;Золотые горы Алтая&raquo;.
      </p>
      <p class="modalBlock__description">
         Сохранение этого уникального уголка планеты&nbsp;&mdash; ответственность нынешнего поколения перед будущим.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskii_zapovednik/Altauskiy_Zapovednik_5.jpg" alt="Панорамный вид на заповедник, символ сохранения природы" loading="lazy">
   </div>
</div>`
        },

//------------------------------Чуйский тракт------------------------------------------

        {
            id: 'chuiskii_trakt_4',
            title: 'Чуйский тракт',
            image: '../../img/altai/cards_nature/Chuyskiy_trakt_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Чуйский тракт</h1>
</div>
<!-- Блок 1: Легендарная дорога через Алтай -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Легендарная дорога через Алтай</h2>
      <p class="modalBlock__description">
         Одна из&nbsp;самых живописных дорог в&nbsp;мире проходит через все разнообразие алтайских ландшафтов. Почти 1&nbsp;тыс.&nbsp;км&nbsp;трассы от&nbsp;Новосибирска до&nbsp;монгольской границы соединяют равнины и&nbsp;горы, степи и&nbsp;альпийские луга.
      </p>
      <p class="modalBlock__description">
         Сегодня путешествие по&nbsp;Чуйскому тракту&nbsp;&mdash; это возможность увидеть всю красоту Алтая. Дорога петляет среди горных хребтов, то&nbsp;взмывая на&nbsp;перевалы, то&nbsp;спускаясь в&nbsp;долины быстрых рек, открывая захватывающие виды на&nbsp;каждом повороте.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/chuiskii_trakt/Chuyskiy_trakt_1.jpg" alt="Извилистая дорога Чуйского тракта среди гор" loading="lazy">
   </div>
</div>
<!-- Блок 2: От караванного пути до асфальта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;караванного пути до&nbsp;асфальта</h2>
      <p class="modalBlock__description">
         Современная асфальтированная трасса Р-256 имеет богатую историю. Еще в&nbsp;древности по&nbsp;этим местам пролегали караванные пути, связывавшие Сибирь с&nbsp;Центральной Азией.
      </p>
      <p class="modalBlock__description">
         В&nbsp;Средневековье здесь проходило северное ответвление Великого шелкового пути, известное как Мунгальский тракт. Русские купцы везли по&nbsp;нему мед и&nbsp;изделия ремесленников, возвращаясь с&nbsp;драгоценными шелками и&nbsp;чаями.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/chuiskii_trakt/Chuyskiy_trakt_2.jpg" alt="Старинные карты и изображения караванов на тракте" loading="lazy">
   </div>
</div>
<!-- Блок 3: Климат и ландшафты тракта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Климат и&nbsp;ландшафты большой дороги</h2>
      <p class="modalBlock__description">
         Из-за большой протяженности маршрута, проходящего через несколько климатических зон, погода здесь непостоянная: сложный горный рельеф Алтая способствует частой и&nbsp;резкой смене температур и&nbsp;условий.
      </p>
      <p class="modalBlock__description">
         Путешественник может за&nbsp;один день проехать через зеленые предгорья, засушливые степи Чуйской котловины и&nbsp;попасть в&nbsp;холодное высокогорье у&nbsp;перевалов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/chuiskii_trakt/Chuyskiy_trakt_3.jpg" alt="Разные пейзажи вдоль тракта: степи, горы, перевалы" loading="lazy">
   </div>
</div>
<!-- Блок 4: Ключевые точки на карте тракта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ключевые точки на&nbsp;карте тракта</h2>
      <p class="modalBlock__description">
         Трасса соединяет большие города трех регионов: Новосибирской области, Алтайского края и&nbsp;Республики Алтай. Она является главной транспортной артерией региона.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Новосибирск</strong>&nbsp;&mdash; начало легендарного маршрута.</li>
         <li class="modalBlock__listItem"><strong>Бийск</strong>&nbsp;&mdash; старинный купеческий город, &laquo;ворота Алтая&raquo;.</li>
         <li class="modalBlock__listItem"><strong>Горно-Алтайск</strong>&nbsp;&mdash; столица Республики Алтай.</li>
         <li class="modalBlock__listItem"><strong>Чемал</strong>&nbsp;&mdash; популярный туристический центр.</li>
         <li class="modalBlock__listItem"><strong>Акташ</strong>&nbsp;&mdash; поворот к&nbsp;&laquo;Алтайскому Марсу&raquo; (Кызыл-Чин).</li>
         <li class="modalBlock__listItem"><strong>Ташанта</strong>&nbsp;&mdash; конечный пограничный пункт у&nbsp;границы с&nbsp;Монголией.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/chuiskii_trakt/Chuyskiy_trakt_4.jpg" alt="Карта Чуйского тракта с основными населенными пунктами" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как начать путешествие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как начать путешествие по&nbsp;Чуйскому тракту</h2>
      <p class="modalBlock__description">
         Для большинства туристов знакомство с&nbsp;Алтаем начинается с&nbsp;участка тракта на&nbsp;территории Республики Алтай.
      </p>
      <p class="modalBlock__description">
         <strong>Первая точка в&nbsp;регионе:</strong> Первый крупный населенный пункт республики на&nbsp;тракте&nbsp;&mdash; село Майма, расположенное всего в&nbsp;12&nbsp;км от&nbsp;Горно-Алтайска.
      </p>
      <p class="modalBlock__description">
         <strong>Как добраться:</strong> До&nbsp;Маймы и&nbsp;далее по&nbsp;тракту можно доехать на&nbsp;собственном автомобиле, междугороднем автобусе из&nbsp;Новосибирска или Бийска, а&nbsp;также на&nbsp;маршрутном такси из&nbsp;Горно-Алтайска.
      </p>
      <p class="modalBlock__description">
         Дорога хорошо обустроена, но&nbsp;требует внимательности из-за серпантинов и&nbsp;переменчивых погодных условий в&nbsp;горах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/chuiskii_trakt/kak_dobratsya.jpg" alt="Село Майма, указатели и начало горного участка тракта" loading="lazy">
   </div>
</div>`
        },

//------------------------------Остров Патмос------------------------------------------

        {
            id: 'ostrov_patmos',
            title: 'Остров Патмос',
            image: '../../img/altai/cards_nature/Patmos_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Остров Патмос</h1>
</div>
<!-- Блок 1: Духовная жемчужина на Катуни -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Духовная жемчужина на&nbsp;Катуни</h2>
      <p class="modalBlock__description">
         Чуть выше точки слияния Катуни и&nbsp;Чемала возвышается скалистый остров Патмос&nbsp;&mdash; духовная жемчужина Алтая.
      </p>
      <p class="modalBlock__description">
         Крошечный остров посреди бурных вод Катуни&nbsp;&mdash; пожалуй, самая известная святыня региона. Среди неприступных скал Патмоса высится женский Иоанно-Богословский скит, создающий удивительный союз природы и&nbsp;веры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/patmos/Patmos_1.jpg" alt="Остров Патмос с храмом посреди реки Катунь" loading="lazy">
   </div>
</div>
<!-- Блок 2: История, освященная именем апостола -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История, освященная именем апостола</h2>
      <p class="modalBlock__description">
         Свое имя Патмос получил в&nbsp;честь греческого острова, где когда-то молился святой апостол Иоанн Богослов.
      </p>
      <p class="modalBlock__description">
         Духовная история острова началась в&nbsp;1855 году с&nbsp;обряда освящения. В&nbsp;1915 году сюда перенесли деревянный храм из&nbsp;села Чемал. Храм был утрачен, но&nbsp;в&nbsp;конце&nbsp;XX века восстановлен, а&nbsp;к&nbsp;острову перекинут изящный подвесной мост. В&nbsp;2001 году обновленный храм вновь освятили.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/patmos/Patmos_2.jpg" alt="Исторические фото храма и современный вид" loading="lazy">
   </div>
</div>
<!-- Блок 3: Храм и лик Богородицы в скале -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Храм и&nbsp;лик Богородицы в&nbsp;скале</h2>
      <p class="modalBlock__description">
         Сегодня на&nbsp;острове находится действующий Иоанно-Богословский скит, куда стремятся паломники и&nbsp;туристы. В&nbsp;храме хранится точная копия Чемальской иконы Божией Матери.
      </p>
      <p class="modalBlock__description">
         На&nbsp;одной из&nbsp;скал, обращенных к&nbsp;острову, естественным образом проступил лик Богородицы с&nbsp;младенцем&nbsp;&mdash; это природное явление многие считают чудом. Шум реки здесь сливается с&nbsp;церковным пением, создавая неповторимую атмосферу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/patmos/Patmos_3.jpg" alt="Храм на острове и лик Богородицы в скале" loading="lazy">
   </div>
</div>
<!-- Блок 4: Гармония природы и веры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Гармония природы и&nbsp;веры</h2>
      <p class="modalBlock__description">
         В&nbsp;этом удивительном месте природа и&nbsp;вера создали гармоничный союз. С&nbsp;подвесного моста открывается захватывающий вид на&nbsp;бурлящую бирюзовую Катунь и&nbsp;отвесные скалы.
      </p>
      <p class="modalBlock__description">
         Скалы, будто естественные иконостасы, возносятся к&nbsp;небу. Остров окружает множество легенд, которые соединяют алтайский Патмос с&nbsp;его греческим собратом, добавляя месту мистического очарования.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/patmos/Patmos_4.jpg" alt="Вид с подвесного моста на храм и реку" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до острова Патмос -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;острова Патмос</h2>
      <p class="modalBlock__description">
         Остров Патмос находится на&nbsp;территории популярного туристического села Чемал.
      </p>
      <p class="modalBlock__description">
         <strong>Расстояние:</strong> Чемал расположен в&nbsp;98&nbsp;км от&nbsp;Горно-Алтайска.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Горно-Алтайска необходимо ехать по&nbsp;Чуйскому тракту (Р-256) до&nbsp;села Усть-Сема, затем свернуть по&nbsp;указателю на&nbsp;Чемал. В&nbsp;самом Чемале к&nbsp;острову ведут указатели.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Из&nbsp;Горно-Алтайска до&nbsp;Чемала регулярно ходят рейсовые автобусы и&nbsp;маршрутные такси. От&nbsp;остановки в&nbsp;Чемале до&nbsp;острова&nbsp;&mdash; пешая прогулка.
      </p>
      <p class="modalBlock__description">
         Посещение острова и&nbsp;храма бесплатное. Мост на&nbsp;остров пешеходный.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/patmos/kak_dobratsya.jpg" alt="Улицы села Чемал, ведущие к острову Патмос" loading="lazy">
   </div>
</div>`
        },

//------------------------------Природный парк Белуха------------------------------------------
        {
            id: 'park_beluha',
            title: 'Природный парк Белуха',
            image: '../../img/altai/cards_nature/Prirodnyy_park_Beluha_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Природный парк «Белуха»</h1>
</div>

<!-- Блок 1: У подножия вершины Сибири -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">У подножия вершины Сибири</h2>
        <p class="modalBlock__description">
            Природный парк «Белуха» охватывает восточные склоны Катунского хребта и часть массива легендарной горы Белуха — самой высокой точки Сибири, устремляющейся в небо на 4506 метров.
        </p>
        <p class="modalBlock__description">
            Этот удивительный уголок Алтая создан для сохранения уникальных высокогорных ландшафтов и является частью объекта Всемирного наследия ЮНЕСКО «Золотые горы Алтая».
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/park_beluha/Prirodnyy_park_Beluha_1.jpg" alt="Вид на гору Белуху с территории природного парка" loading="lazy">
    </div>
</div>

<!-- Блок 2: Зонирование и доступность -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Для науки и для туристов</h2>
        <p class="modalBlock__description">
            Территория парка разделена на зоны: некоторые заповедные участки закрыты для посещения и предназначены для научных исследований и охраны природы, а большая часть открыта для туризма.
        </p>
        <p class="modalBlock__description">
            Это позволяет сочетать строгую охрану уязвимых экосистем с возможностью для людей увидеть и оценить красоту высокогорного Алтая.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/park_beluha/Prirodnyy_park_Beluha_2.jpg" alt="Карта зонирования парка и указатели на тропах" loading="lazy">
    </div>
</div>

<!-- Блок 3: Активный отдых на любой вкус -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Активный отдых на любой вкус</h2>
        <p class="modalBlock__description">
            Путешественники могут выбрать различные форматы знакомства с парком: от пеших походов с ночевками в палатках и конных прогулок по горным тропам до комфортного отдыха на турбазах.
        </p>
        <p class="modalBlock__description">
            Парк предлагает маршруты разной сложности — от простых экологических троп до многодневных экспедиций к подножию Белухи. Каждый вариант позволяет в полной мере ощутить величие этих мест.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/park_beluha/Prirodnyy_park_Beluha_3.jpg" alt="Туристы в походе, конные прогулки и виды с турбаз" loading="lazy">
    </div>
</div>

<!-- Блок 4: Жемчужины парка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Жемчужины природного парка</h2>
        <p class="modalBlock__description">
            Территория парка богата на уникальные природные объекты, которые притягивают путешественников со всего мира. Среди главных точек притяжения:
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Кучерлинское озеро</strong> — одно из крупнейших высокогорных озер Алтая бирюзового цвета, окруженное скалами и ледниками.</li>
            <li class="modalBlock__listItem"><strong>Аккемское озеро</strong> — ледниковое озеро у подножия Белухи, известное своим изменчивым цветом воды и суровым пейзажем.</li>
            <li class="modalBlock__listItem"><strong>Водопад Текелю</strong> — мощный каскадный водопад высотой около 60 метров на одноименной реке, берущей начало из ледника.</li>
        </ul>
        <p class="modalBlock__description">
            Эти места обладают особой энергетикой и считаются одними из самых красивых в Горном Алтае.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/park_beluha/Prirodnyy_park_Beluha_4.jpg" alt="Кучерлинское и Аккемское озера, водопад Текелю" loading="lazy">
    </div>
</div>

<!-- Блок 5: Как добраться и маршруты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться и начать путешествие</h2>
        <p class="modalBlock__description">
            Основной точкой старта для посещения парка и восхождений является село Тюнгур. Пеший подъем к достопримечательностям парка и к подножию Белухи начинается именно отсюда.
        </p>
        <p class="modalBlock__description">
            <strong>Как добраться до Тюнгура:</strong> Из Горно-Алтайска на автобусе или автомобиле по федеральной трассе Р-256 (Чуйский тракт), затем по региональной трассе Р-373 (Усть-Коксинский тракт). Путь от Горно-Алтайска занимает около 8-10 часов.
        </p>
        <p class="modalBlock__description">
            Все посещения парка, особенно многодневные походы, требуют предварительной регистрации в МЧС и рекомендуется участие опытных гидов или посещение в составе организованных групп.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/altai/cards_modal/park_beluha/kak_dobratsya.jpg" alt="Село Тюнгур, карта маршрутов и туристические группы" loading="lazy">
    </div>
</div>`
        },

//------------------------------Сайлюгемский нацпарк------------------------------------------
        {
            id: 'park_saylegemskii',
            title: 'Сайлюгемский нацпарк',
            image: '../../img/altai/cards_nature/Saylugemskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Национальный парк &laquo;Сайлюгемский&raquo;</h1>
</div>
<!-- Блок 1: Первый национальный парк Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Первый национальный парк Алтая</h2>
      <p class="modalBlock__description">
         Этот первый в&nbsp;Республике Алтай национальный парк появился в&nbsp;2010 году с&nbsp;особой миссией&nbsp;&mdash; защитить уникальных обитателей этих мест.
      </p>
      <p class="modalBlock__description">
         Создание парка стало важным шагом в&nbsp;сохранении хрупкой экосистемы Алтая. Здесь обрели убежище редкие виды, которые больше нигде не&nbsp;встречаются.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/sailugemskii_park/Saylugemskiy_1.jpg" alt="Ландшафт Сайлюгемского национального парка" loading="lazy">
   </div>
</div>
<!-- Блок 2: Царство снежного барса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Царство снежного барса</h2>
      <p class="modalBlock__description">
         Главные подопечные парка&nbsp;&mdash; редкие снежные барсы (ирбисы), которых здесь насчитывается всего 10&ndash;15&nbsp;особей. Хищники мастерски избегают встреч с&nbsp;человеком, поэтому их&nbsp;точную численность установить практически невозможно.
      </p>
      <p class="modalBlock__description">
         Вместе с&nbsp;ними под защитой находятся горные бараны аргали и&nbsp;многочисленные стада козерогов. На&nbsp;скалах хребта Сайлюгем нашли приют редкие соколы балобаны.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/sailugemskii_park/Saylugemskiy_2.jpg" alt="Снежный барс и другие обитатели парка" loading="lazy">
   </div>
</div>
<!-- Блок 3: Три уникальных участка -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Три уникальных участка</h2>
      <p class="modalBlock__description">
         Территория парка разделена на&nbsp;три отдельных участка. &laquo;Сайлюгем&raquo; и&nbsp;&laquo;Уландрык&raquo;&nbsp;&mdash; места, где испокон веков пасли скот местные жители.
      </p>
      <p class="modalBlock__description">
         А&nbsp;вот &laquo;Аргут&raquo;&nbsp;&mdash; настоящий заповедный уголок, куда редко ступает нога человека. Его труднодоступность помогла сохранить природу в&nbsp;первозданном виде. Здесь можно стать свидетелем удивительной гармонии между человеком и&nbsp;дикой природой.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/sailugemskii_park/Saylugemskiy_3.jpg" alt="Карта трех участков парка и их ландшафты" loading="lazy">
   </div>
</div>
<!-- Блок 4: Особый режим посещения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Особый режим посещения</h2>
      <p class="modalBlock__description">
         Посещение парка требует особой подготовки. Для входа на&nbsp;любую территорию необходим пропуск, а&nbsp;для участков &laquo;Сайлюгем&raquo; и&nbsp;&laquo;Уландрык&raquo;&nbsp;&mdash; дополнительное разрешение от&nbsp;пограничников.
      </p>
      <p class="modalBlock__description">
         Дело в&nbsp;том, что эти земли находятся рядом с&nbsp;монгольской границей, что добавляет им&nbsp;особый статус и&nbsp;защиту. Все визиты необходимо согласовывать заранее через администрацию парка.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/sailugemskii_park/Saylugemskiy_4.jpg" alt="Пограничная зона, пропуска и указатели" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и визит-центр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;начать знакомство</h2>
      <p class="modalBlock__description">
         Знакомство с&nbsp;национальным парком можно начать с&nbsp;визит-центра, где сотрудники предоставят всю необходимую информацию о&nbsp;маршрутах и&nbsp;правилах посещения.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес визит-центра:</strong> Республика Алтай, с. Кош-Агач, ул. Сайлюгемская, 1.
      </p>
      <p class="modalBlock__description">
         Добраться до&nbsp;Кош-Агача можно по&nbsp;Чуйскому тракту из&nbsp;Горно-Алтайска. Подробную информацию о&nbsp;получении пропусков, экскурсиях и&nbsp;научно-популярных программах можно найти на&nbsp;официальном сайте нацпарка.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/sailugemskii_park/kak_dobratsya.jpg" alt="Визит-центр в Кош-Агаче и дорога по Чуйскому тракту" loading="lazy">
   </div>
</div>`
        },

    ],

//------------------------------КУЛЬТУРНЫЙ КОД------------------------------------------
//------------------------------КУЛЬТУРНЫЙ КОД------------------------------------------


    culture: [
        {
            id: 'hranitel_bolshogo_altaya',
            title: '«Хранитель Большого Алтая»',
            image: '../../img/altai/cards_culture/hranitel_bolshogo_altaya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Экопарк &laquo;Хранитель Большого Алтая&raquo;</h1>
</div>
<!-- Блок 1: Эпос, воплощенный в камне на вершине горы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Эпос, воплощенный в&nbsp;камне на&nbsp;вершине горы</h2>
      <p class="modalBlock__description">
         На&nbsp;вершине горы Малая Синюха, которая издревле считается сердцем Большого Алтая, на&nbsp;высоте 1,2&nbsp;тыс.&nbsp;м&nbsp;разбит тематический парк, созданный по&nbsp;мотивам знаменитого алтайского героического эпоса &laquo;Маадай-Кара&raquo;.
      </p>
      <p class="modalBlock__description">
         Это место, где древние легенды оживают среди первозданной природы, а&nbsp;современные арт-объекты гармонично вписаны в&nbsp;горный ландшафт. Живописные виды и&nbsp;краснокнижные растения дополняют тематические скульптуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/hranitel_bolshogo_altaya/hranitel_bolshogo_altaya_1.jpg" alt="Вид на экопарк на вершине Малой Синюхи" loading="lazy">
   </div>
</div>
<!-- Блок 2: Скульптура хранителя и символы эпоса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Скульптура хранителя и&nbsp;символы эпоса</h2>
      <p class="modalBlock__description">
         Центральное место в&nbsp;парке занимает величественная скульптура баатыра Когудей-Мергена&nbsp;&mdash; хранителя этих земель, созданная известным алтайским художником Аржаном Ютеевым.
      </p>
      <p class="modalBlock__description">
         Рядом с&nbsp;каменным изваянием размещены символические атрибуты воина: боевые доспехи и&nbsp;традиционный музыкальный инструмент топшуур, напоминающий о&nbsp;древних эпических сказаниях. Взор каменного стража обращен на&nbsp;восток&nbsp;&mdash; к&nbsp;восходящему солнцу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/hranitel_bolshogo_altaya/hranitel_bolshogo_altaya_2.jpg" alt="Скульптура Когудей-Мергена и арт-объекты парка" loading="lazy">
   </div>
</div>
<!-- Блок 3: Экотропы через краснокнижную флору -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Экотропы через краснокнижную флору</h2>
      <p class="modalBlock__description">
         Пять экологических троп протяженностью более 5&nbsp;км позволяют каждому гостю выбрать свой путь знакомства с&nbsp;этим удивительным местом.
      </p>
      <p class="modalBlock__description">
         Маршруты разной сложности ведут через участки с&nbsp;краснокнижными растениями и&nbsp;к&nbsp;смотровым площадкам, откуда открываются панорамы горных хребтов и&nbsp;зеркальной глади озера Манжерок.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/hranitel_bolshogo_altaya/hranitel_bolshogo_altaya_3.jpg" alt="Экологическая тропа и виды с вершины на озеро" loading="lazy">
   </div>
</div>
<!-- Блок 4: Гармония культур и связь времен -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Гармония культур и&nbsp;связь времен</h2>
      <p class="modalBlock__description">
         &laquo;Хранитель Большого Алтая&raquo; стал символом единства тюркских народов. С&nbsp;высоты канатной дороги особенно хорошо видно, как элементы парка создают единое пространство, где история продолжает жить в&nbsp;гармонии с&nbsp;современностью.
      </p>
      <p class="modalBlock__description">
         Это место встречи культур, традиций и&nbsp;природных красот, где каждый может ощутить связь времен и&nbsp;понять глубину наследия этого уникального региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/hranitel_bolshogo_altaya/hranitel_bolshogo_altaya_4.jpg" alt="Панорама парка с высоты канатной дороги" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться по канатной дороге -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться по&nbsp;канатной дороге</h2>
      <p class="modalBlock__description">
         Проще всего попасть в&nbsp;парк по&nbsp;канатной дороге курорта Манжерок, ведущей на&nbsp;вершину Малой Синюхи. Подъемник работает круглый год.
      </p>
      <p class="modalBlock__description">
         <strong>Местоположение:</strong> Курорт Манжерок, у&nbsp;подножия горы Малая Синюха, на&nbsp;берегу одноименного озера.
      </p>
      <p class="modalBlock__description">
         <strong>Дорога:</strong> Из&nbsp;Горно-Алтайска нужно ехать по&nbsp;Чуйскому тракту около 40&nbsp;км в&nbsp;сторону Маймы. Курорт Манжерок будет расположен прямо у&nbsp;трассы, с&nbsp;хорошо заметными указателями.
      </p>
      <p class="modalBlock__description">
         Билеты на&nbsp;канатную дорогу и&nbsp;вход в&nbsp;экопарк приобретаются отдельно.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/hranitel_bolshogo_altaya/kak_dobratsya.jpg" alt="Канатная дорога Манжерок и вход в парк" loading="lazy">
   </div>
</div>`
        },

//------------------------------Традиции корренных народов------------------------------------------

        {
            id: 'tradicii_koren_narodov_bit',
            title: 'Традиции корренных народов',
            image: '../../img/altai/cards_culture/Tradicii_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Традиции и&nbsp;быт коренных народов</h1>
</div>
<!-- Блок 1: Этническая мозаика Алтая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Этническая мозаика Алтая</h2>
      <p class="modalBlock__description">
         Республика Алтай&nbsp;&mdash; уникальный перекресток культур и&nbsp;традиций, где веками складывалась сложная этническая картина. Здесь проживают более 80&nbsp;национальностей и&nbsp;народностей.
      </p>
      <p class="modalBlock__description">
         Русские составляют большинство населения, но&nbsp;истинное богатство Алтая&nbsp;&mdash; в&nbsp;его коренных народах, хранящих древние обычаи, языки и&nbsp;уникальный уклад жизни, сформированный гармонией с&nbsp;суровой горной природой.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/tradicii/Tradicii_1.jpg" alt="Представители разных коренных народов Алтая в традиционной одежде" loading="lazy">
   </div>
</div>
<!-- Блок 2: Алтайцы: северные и южные -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Алтайцы: северные таежники и&nbsp;южные кочевники</h2>
      <p class="modalBlock__description">
         Алтайцы, исконные жители этих земель, делятся на&nbsp;две основные группы. <strong>Северные алтайцы</strong> (кумандинцы, тубалары, челканцы) населяют таежные районы, сохраняя традиции охотников, рыболовов и&nbsp;мастеров по&nbsp;дереву.
      </p>
      <p class="modalBlock__description">
         <strong>Южные алтайцы</strong> (теленгиты, телеуты, алтай-кижи) продолжают кочевые традиции предков, занимаясь скотоводством в&nbsp;горных долинах. Каждая группа обладает своим диалектом, особенностями быта и&nbsp;духовной культуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/tradicii/Tradicii_2.jpg" alt="Северные охотники в тайге и южные скотоводы в долинах" loading="lazy">
   </div>
</div>
<!-- Блок 3: Кумандинцы: хранители таежной гармонии -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Кумандинцы: хранители таежной гармонии</h2>
      <p class="modalBlock__description">
         Особое место занимают кумандинцы&nbsp;&mdash; северный алтайский этнос (около 3&nbsp;тыс. человек), издревле населявший берега Бии. Их&nbsp;культура&nbsp;&mdash; это гармония с&nbsp;тайгой.
      </p>
      <p class="modalBlock__description">
         Искусные охотники, рыболовы, мастера по&nbsp;дереву и&nbsp;знатоки целебных трав, кумандинцы сохранили уникальный язык (северный диалект алтайского). Их&nbsp;традиционные верования&nbsp;&mdash; шаманизм с&nbsp;культом природы&nbsp;&mdash; органично переплелись с&nbsp;православием.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/tradicii/Tradicii_3.jpg" alt="Кумандинцы за традиционными занятиями: охота, ремесла" loading="lazy">
   </div>
</div>
<!-- Блок 4: Аил: модель мироздания из войлока и дерева -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Аил: модель мироздания из&nbsp;войлока и&nbsp;дерева</h2>
      <p class="modalBlock__description">
         Традиционным жилищем народов Алтая считается аил&nbsp;&mdash; круглая или шестигранная войлочная юрта из&nbsp;лиственницы, кедра или сосны. Это не&nbsp;просто строение, а&nbsp;модель мироздания, где каждая деталь наполнена глубоким смыслом.
      </p>
      <p class="modalBlock__description">
         На&nbsp;изготовление войлока для одного аила уходит шерсть более 50&nbsp;овец. Дверь всегда ориентирована на&nbsp;восток&nbsp;&mdash; к&nbsp;восходящему солнцу, а&nbsp;коновязь перед входом символизирует связь трех миров: верхнего (небесного), среднего (земного) и&nbsp;нижнего (подземного).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/tradicii/Tradicii_4.jpg" alt="Традиционный аил и его внутреннее убранство" loading="lazy">
   </div>
</div>
<!-- Блок 5: Сохранение наследия в современном мире -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сохранение наследия в&nbsp;современном мире</h2>
      <p class="modalBlock__description">
         Сегодня многие представители коренных народов работают в&nbsp;различных сферах&nbsp;&mdash; врачами, учителями, инженерами, но&nbsp;активно сохраняют связь с&nbsp;традициями.
      </p>
      <p class="modalBlock__description">
         В&nbsp;республике действуют национальные общества, возрождаются языки, проводятся праздники (Эл-Ойын, Чага-Байрам), развиваются ремесла. Малочисленные народы (тофалары, тубалары) находятся под особой защитой государства.
      </p>
      <p class="modalBlock__description">
         Знакомство с&nbsp;культурой коренных народов Алтая&nbsp;&mdash; это погружение в&nbsp;глубокую философию жизни в&nbsp;единстве с&nbsp;природой, понимание того, как древние традиции продолжают жить и&nbsp;наполнять смыслом современный мир Горного Алтая.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/tradicii/Tradicii_5.jpg" alt="Современные праздники, ремесленные мастерские и национальные костюмы" loading="lazy">
   </div>
</div>`
        },

//------------------------------Манжерок------------------------------------------
        {
            id: 'manzherok',
            title: 'Манжерок',
            image: '../../img/altai/cards_culture/manzherok_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Курорт Манжерок</h1>
</div>
<!-- Блок 1: Всесезонная жемчужина у озера -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Всесезонная жемчужина у&nbsp;озера</h2>
      <p class="modalBlock__description">
         У&nbsp;подножия Малой Синюхи, на&nbsp;берегу живописного озера, раскинулся всесезонный курорт, ставший визитной карточкой алтайского туризма.
      </p>
      <p class="modalBlock__description">
         Это место, где горные пейзажи гармонично сочетаются с&nbsp;развитой инфраструктурой для активного отдыха. Здесь каждый найдет свой идеальный отдых&nbsp;&mdash; от&nbsp;экстремальных приключений до&nbsp;спокойного созерцания величественных пейзажей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/manzherok/manzherok_1.jpg" alt="Панорама курорта Манжерок у озера и гор" loading="lazy">
   </div>
</div>
<!-- Блок 2: Зимний рай для спорта и летние приключения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Зима и&nbsp;лето на&nbsp;одном курорте</h2>
      <p class="modalBlock__description">
         <strong>Зимой</strong> склоны горы превращаются в&nbsp;рай для горнолыжников и&nbsp;сноубордистов.&nbsp;23&nbsp;подготовленные трассы общей протяженностью 60&nbsp;км ждут спортсменов разного уровня. Есть лыжни и&nbsp;спуски на&nbsp;сноутюбах для семей.
      </p>
      <p class="modalBlock__description">
         <strong>Летом</strong> гостям предлагают сплавы по&nbsp;горным рекам, поездки на&nbsp;квадроциклах и&nbsp;другие развлечения. Современные гостиницы с&nbsp;панорамными окнами позволяют наслаждаться видами прямо из&nbsp;номера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/manzherok/manzherok_2.jpg" alt="Горнолыжные трассы зимой и рафтинг летом" loading="lazy">
   </div>
</div>
<!-- Блок 3: Манжерокское озеро и экотропы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Теплое озеро и&nbsp;экотропы</h2>
      <p class="modalBlock__description">
         Манжерокское озеро&nbsp;&mdash; пожалуй, единственное теплое озеро на&nbsp;Алтае. Глубина не&nbsp;превышает 3&nbsp;м, поэтому летом вода хорошо прогревается. На&nbsp;территории обустроен пляж с&nbsp;водными аттракционами.
      </p>
      <p class="modalBlock__description">
         Особой гордостью курорта стали экологические тропы, проложенные по&nbsp;живописным склонам. Прогуливаясь по&nbsp;деревянным настилам среди вековых кедров, гости могут наблюдать редкие растения и&nbsp;наслаждаться панорамными видами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/manzherok/manzherok_3.jpg" alt="Пляж на озере Манжерок и экотропы в горах" loading="lazy">
   </div>
</div>
<!-- Блок 4: Ближайшие достопримечательности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ближайшие достопримечательности</h2>
      <p class="modalBlock__description">
         От&nbsp;Манжерока удобно совершать радиальные выезды к&nbsp;интересным локациям:
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Тавдинские пещеры</strong>&nbsp;&mdash; вереницы пещер с&nbsp;археологическими находками бронзового века, расположенные на&nbsp;границе с&nbsp;Алтайским краем. В&nbsp;одной из&nbsp;пещер построен макет жилища древнего человека.</li>
         <li class="modalBlock__listItem"><strong>Карымский мараловедческий комплекс</strong>&nbsp;&mdash; расположен в&nbsp;горах на&nbsp;другой стороне Катуни. Здесь можно пообщаться с&nbsp;оленями и&nbsp;принять пантовую ванну.</li>
         <li class="modalBlock__listItem"><strong>Экопарк &laquo;Хранитель Большого Алтая&raquo;</strong>&nbsp;&mdash; на&nbsp;вершине Малой Синюхи, куда ведет канатная дорога.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/manzherok/manzherok_4.jpg" alt="Тавдинские пещеры и маралы в Карымском комплексе" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до курорта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;курорта Манжерок</h2>
      <p class="modalBlock__description">
         Курорт расположен в&nbsp;очень доступном месте рядом с&nbsp;основной транспортной артерией региона.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Горно-Алтайска нужно ехать по&nbsp;Чуйскому тракту (Р-256) в&nbsp;сторону Маймы и&nbsp;далее на&nbsp;Бийск. Примерно через 40&nbsp;км от&nbsp;Горно-Алтайска, не&nbsp;доезжая села Манжерок, будут хорошо заметные указатели на&nbsp;курорт. Время в&nbsp;пути&nbsp;&mdash; около часа.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Из&nbsp;Горно-Алтайска до&nbsp;села Манжерок регулярно ходят рейсовые автобусы и&nbsp;маршрутные такси. От&nbsp;остановки в&nbsp;селе до&nbsp;входа на&nbsp;территорию курорта&nbsp;&mdash; пешая прогулка.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/manzherok/kak_dobratsya.jpg" alt="Чуйский тракт и указатель на курорт Манжерок" loading="lazy">
   </div>
</div>`
        },

//------------------------------Алтайская принцесса------------------------------------------

        {
            id: 'altaiskya_princessa',
            title: 'Алтайская принцесса',
            image: '../../img/altai/cards_culture/altai_princessa_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Алтайская принцесса</h1>
</div>
<!-- Блок 1: Загадка, застывшая во льдах Укока -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Загадка, застывшая во&nbsp;льдах Укока</h2>
      <p class="modalBlock__description">
         Таинственная загадка древнего плато Укок, где археологическая экспедиция обнаружила погребение молодой знатной женщины. Находку окрестили Принцессой Укока, или Алтайской принцессой.
      </p>
      <p class="modalBlock__description">
         Около двух с&nbsp;половиной тысячелетий назад на&nbsp;высокогорном плато состоялись похороны, чья история продолжает волновать умы исследователей и&nbsp;сегодня. В&nbsp;1993 году экспедиция под руководством Натальи Полосьмак обнаружила ее&nbsp;могилу, прекрасно сохранившуюся в&nbsp;вечной мерзлоте.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskya_princessa/altai_princessa_1.jpg" alt="Плато Укок и изображение кургана" loading="lazy">
   </div>
</div>
<!-- Блок 2: Сенсационная находка века -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сенсационная находка века</h2>
      <p class="modalBlock__description">
         Эта находка стала мировой сенсацией. В&nbsp;ледяной камере сохранилось не&nbsp;только тело женщины, но&nbsp;и&nbsp;все предметы, сопровождавшие ее&nbsp;в&nbsp;последний путь.
      </p>
      <p class="modalBlock__description">
         Археологи обнаружили одежду из&nbsp;дикого шелка, войлочные сапоги, золотые украшения с&nbsp;изображениями барсов и&nbsp;замысловатый головной убор с&nbsp;деревянными птицами. Особый статус погребенной подчеркивали сопроводительные захоронения мужчины и&nbsp;трех коней.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskya_princessa/altai_princessa_2.jpg" alt="Реконструкция погребального убранства и украшений" loading="lazy">
   </div>
</div>
<!-- Блок 3: Лицо, открытое через 25 веков -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Лицо, открытое через 25&nbsp;веков</h2>
      <p class="modalBlock__description">
         В&nbsp;апреле 2022 года в&nbsp;Национальном музее Республики Алтай состоялось знаковое событие&nbsp;&mdash; презентация скульптурного портрета, воссозданного по&nbsp;методу антропологической реконструкции.
      </p>
      <p class="modalBlock__description">
         Впервые за&nbsp;2,5&nbsp;тыс. лет загадочная обитательница Укока открыла миру свое лицо. Эта реконструкция позволила увидеть черты женщины, принадлежавшей к&nbsp;пазырыкской культуре скифского времени.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskya_princessa/altai_princessa_3.jpg" alt="Скульптурный портрет Алтайской принцессы" loading="lazy">
   </div>
</div>
<!-- Блок 4: Бесценное наследие пазырыкской культуры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Бесценное наследие пазырыкской культуры</h2>
      <p class="modalBlock__description">
         Мумия, известная как Принцесса Укока, продолжает оставаться важнейшим артефактом пазырыкской культуры (VI-III&nbsp;вв.&nbsp;до&nbsp;н.э.).
      </p>
      <p class="modalBlock__description">
         Ее&nbsp;изучение дает уникальные сведения о&nbsp;жизни, верованиях, искусстве и&nbsp;социальной структуре древних кочевников Алтая. История Алтайской принцессы&nbsp;&mdash; это мост между эпохами, напоминание о&nbsp;богатой культуре народов, населявших эти земли.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskya_princessa/altai_princessa_4.jpg" alt="Изображения артефактов из захоронения" loading="lazy">
   </div>
</div>
<!-- Блок 5: Где увидеть и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Где увидеть и&nbsp;как добраться</h2>
      <p class="modalBlock__description">
         Сегодня Алтайская принцесса находится в&nbsp;специальном саркофаге в&nbsp;Национальном музее Республики Алтай имени А.В. Анохина, где поддерживаются особые условия для сохранения этого бесценного наследия.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес музея:</strong> Горно-Алтайск, ул. Григория Чорос-Гуркина, 46.
      </p>
      <p class="modalBlock__description">
         <strong>Важная информация:</strong> В&nbsp;связи с&nbsp;хрупкостью экспоната мумия демонстрируется не&nbsp;постоянно, а&nbsp;в&nbsp;определенные дни и&nbsp;часы. Перед посещением необходимо уточнять график показа на&nbsp;официальном сайте музея или по&nbsp;телефону.
      </p>
      <p class="modalBlock__description">
         Музей расположен в&nbsp;центре Горно-Алтайска, до&nbsp;него легко добраться на&nbsp;общественном транспорте или такси.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/altaiskya_princessa/kak_dobratsya.jpg" alt="Здание Национального музея в Горно-Алтайске" loading="lazy">
   </div>
</div>`
        },

//------------------------------'Дом-музей Н. К. Рериха------------------------------------------
        {
            id: 'dom_musei_reriha',
            title: 'Дом-музей Н. К. Рериха',
            image: '../../img/altai/cards_culture/musei_reriha_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Дом-музей Н.&nbsp;К. Рериха</h1>
</div>
<!-- Блок 1: Староверческая усадьба, принявшая великого художника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Усадьба, принявшая великого художника</h2>
      <p class="modalBlock__description">
         Усадьба Вахромея Атаманова&nbsp;&mdash; крестьянина-старовера, принявшего в&nbsp;своих стенах участников знаменитой Центрально-Азиатской экспедиции Николая Рериха в&nbsp;августе 1926&nbsp;года,&nbsp;&mdash; сегодня превратилась в&nbsp;мемориальный дом-музей художника.
      </p>
      <p class="modalBlock__description">
         Это место сохранило атмосферу гостеприимства и&nbsp;творчества, царившую здесь почти сто лет назад, когда Рерих изучал Алтай в&nbsp;поисках следов древних культур и&nbsp;вдохновения для своих картин.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/dom_musei_reriha/musei_reriha_1.jpg" alt="Усадьба Вахромея Атаманова в Верх-Уймоне" loading="lazy">
   </div>
</div>
<!-- Блок 2: Особый свет картин и алтайских пейзажей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Особый свет картин и&nbsp;алтайских пейзажей</h2>
      <p class="modalBlock__description">
         Пространство музея наполнено особым светом&nbsp;&mdash; здесь представлены репродукции картин Николая Рериха и&nbsp;его сына Святослава, чьи полотна передают мистическую красоту Алтайских гор.
      </p>
      <p class="modalBlock__description">
         Экспозиция гармонично объединяет работы местных мастеров&nbsp;&mdash; великолепные пейзажи Григория Чорос-Гуркина и&nbsp;Мирослава Чевалкова, на&nbsp;которых запечатлена первозданная природа этих мест.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/dom_musei_reriha/musei_reriha_2.jpg" alt="Репродукции картин Рериха и алтайских художников" loading="lazy">
   </div>
</div>
<!-- Блок 3: Экспедиция и духовное наследие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Экспедиция и&nbsp;духовное наследие</h2>
      <p class="modalBlock__description">
         Отдельное место занимает фотовыставка, рассказывающая о&nbsp;жизни семьи Рерихов во&nbsp;время их&nbsp;знаменитой экспедиции по&nbsp;Центральной Азии, маршрут которой пролегал через Алтай.
      </p>
      <p class="modalBlock__description">
         Особый раздел посвящен духовным последователям Рериха&nbsp;&mdash; Борису Абрамову и&nbsp;Наталии Спириной, основавшей Сибирское Рериховское общество. Их&nbsp;фотографии и&nbsp;личные вещи помогают понять глубину философского наследия Рерихов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/dom_musei_reriha/musei_reriha_3.jpg" alt="Фотографии экспедиции Рериха и материалы последователей" loading="lazy">
   </div>
</div>
<!-- Блок 4: Программа музея и творческая атмосфера -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Программа музея и&nbsp;творческая атмосфера</h2>
      <p class="modalBlock__description">
         Музей предлагает гостям насыщенную программу: экскурсии по&nbsp;старинной усадьбе, просмотр документальных фильмов о&nbsp;жизни и&nbsp;творчестве Рериха, знакомство с&nbsp;тематической литературой в&nbsp;музейном киоске.
      </p>
      <p class="modalBlock__description">
         Каждый уголок этого места пропитан творческой атмосферой, позволяющей прикоснуться к&nbsp;наследию великого художника, мыслителя и&nbsp;путешественника, для которого Алтай стал источником вдохновения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/dom_musei_reriha/musei_reriha_4.jpg" alt="Экскурсия в музее и интерьеры усадьбы" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Верх-Уймона -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;музея в&nbsp;Верх-Уймоне</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Республика Алтай, Усть-Коксинский район, село Верх-Уймон, ул. Набережная, 20a.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Горно-Алтайска нужно ехать по&nbsp;Чуйскому тракту до&nbsp;села Усть-Сема, затем свернуть на&nbsp;дорогу к&nbsp;Усть-Коксе. От&nbsp;Усть-Коксы до&nbsp;Верх-Уймона около 10&nbsp;км по&nbsp;местной дороге. Общее расстояние от&nbsp;Горно-Алтайска&nbsp;&mdash; около 250&nbsp;км.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Сначала нужно доехать на&nbsp;автобусе из&nbsp;Горно-Алтайска до&nbsp;районного центра&nbsp;&mdash; села Усть-Кокса. От&nbsp;Усть-Коксы до&nbsp;Верх-Уймона можно добраться на&nbsp;местном такси или договориться о&nbsp;трансфере.
      </p>
      <p class="modalBlock__description">
         Перед посещением рекомендуется уточнить график работы музея, так как он&nbsp;может меняться в&nbsp;зависимости от&nbsp;сезона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/dom_musei_reriha/kak_dobratsya.jpg" alt="Дорога к Усть-Коксе и вид на село Верх-Уймон" loading="lazy">
   </div>
</div>`
        },

//------------------------------Нац. музей Республики Алтай------------------------------------------

        {
            id: 'musei_respublica_altai_nac',
            title: 'Нац. музей Республики Алтай',
            image: '../../img/altai/cards_culture/musei_altai_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Национальный музей Республики Алтай</h1>
</div>
<!-- Блок 1: История и основы музея -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <p class="modalBlock__description">
         Главная составляющая культурного наследия республики. Здесь оживает многовековая история алтайского народа, а&nbsp;современность встречается с&nbsp;древними традициями.
      </p>
      <p class="modalBlock__description">
         Основанный в&nbsp;1918 году художником Григорием Чорос-Гуркиным, Национальный музей бережно хранит уникальное наследие Алтая. Сегодня он&nbsp;носит имя выдающегося советского ученого-этнографа Андрея Анохина.
      </p>
      <p class="modalBlock__description">
         История музея началась с&nbsp;приобретения первых коллекций&nbsp;&mdash; палеонтологических находок, археологических артефактов и&nbsp;минералогических образцов, собранных сибирскими краеведами.
      </p>
      <p class="modalBlock__description">
         В&nbsp;стенах музея сегодня собраны свидетельства разных эпох&nbsp;&mdash; от&nbsp;древнейших времен до&nbsp;современности. Музей не&nbsp;теряет связи с&nbsp;изначальными идеями его основателей и&nbsp;остается важным центром изучения и&nbsp;сохранения богатого наследия Алтая.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/musei_respublica_altai_nac/musei_altai_1.jpg" alt="Здание Национального музея Республики Алтай" loading="lazy">
   </div>
</div>
<!-- Блок 2: Главные экспонаты и экспозиции -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <p class="modalBlock__description">
         Главной ценностью собрания является мумия женщины пазырыкской культуры V&ndash;III веков до&nbsp;н.&nbsp;э., известная как Алтайская принцесса или Принцесса Укока.
      </p>
      <p class="modalBlock__description">
         Эта уникальная археологическая находка, обнаруженная на&nbsp;плато Укок в&nbsp;1993&nbsp;году, сохранилась в&nbsp;вечной мерзлоте. Вместе с&nbsp;ней были найдены предметы одежды, украшения и&nbsp;сопроводительные захоронения, проливающие свет на&nbsp;культуру древних кочевников.
      </p>
      <p class="modalBlock__description">
         Во&nbsp;внутреннем дворе музея установлена точная копия погребального сруба скифского вождя&nbsp;&mdash; древнейшей в&nbsp;мире деревянной погребальной камеры, датируемой&nbsp;V веком до&nbsp;н.&nbsp;э.
      </p>
      <p class="modalBlock__description">
         Отдельный зал посвящен шаманизму, где эта древняя духовная традиция раскрывается как целостная система мировоззрения. Экспозиции включают ритуальные предметы, традиционные костюмы и&nbsp;музыкальные инструменты, позволяющие понять суть алтайской культуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/musei_respublica_altai_nac/musei_altai_2.jpg" alt="Экспозиции и артефакты в музее" loading="lazy">
   </div>
</div>
<!-- Блок 3: Как добраться и практическая информация -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;практическая информация</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Горно-Алтайск, ул. Григория Чорос-Гуркина, 46.
      </p>
      <p class="modalBlock__description">
         Музей расположен в&nbsp;центре столицы Республики Алтай, в&nbsp;шаговой доступности от&nbsp;основных городских достопримечательностей.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> До&nbsp;музея легко добраться на&nbsp;любом городском автобусе или маршрутном такси, следующем до&nbsp;центра города. Остановки: &laquo;Музей&raquo;, &laquo;Центр&raquo; или &laquo;Парк&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Посещение зала с&nbsp;Принцессой Укока может быть ограничено определенными днями и&nbsp;временем в&nbsp;связи с&nbsp;особыми условиями хранения экспоната. Рекомендуется уточнять график показа на&nbsp;официальном сайте музея или по&nbsp;телефону перед визитом.
      </p>
      <p class="modalBlock__description">
         Здесь прошлое оживает, рассказывая свои истории через подлинные артефакты, каждый из&nbsp;которых&nbsp;&mdash; свидетель многовековой истории этого удивительного региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/altai/cards_modal/musei_respublica_altai_nac/kak_dobratsya.jpg" alt="Карта расположения музея в центре Горно-Алтайска" loading="lazy">
   </div>
</div>`
        }

    ]

};

window.altaiData = altaiData;
