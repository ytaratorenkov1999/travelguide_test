// ============================================
// ДАННЫЕ КАРТОЧЕК ТАТАРСТАНА
// ============================================

const tatarstanData = {
//--------------------------------- Точки притяжения региона----------------------------------------
    attractions: [
        {
            id: 'mechet_kul_sharif',
            title: 'Мечеть Кул-Шариф',
            image: '../../img/tatarstan/cards_tochki/mechet_kul_sharif_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Мечеть Кул-Шариф</h1>
</div>
<!-- Блок 1: Возрожденный символ Казанского Кремля -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Возрожденный символ Казанского Кремля</h2>
      <p class="modalBlock__description">
         Духовный символ Казани, возрожденный из&nbsp;глубины веков. Бирюзовые купола и&nbsp;стрельчатые арки мечети гармонично вписаны в&nbsp;ансамбль Казанского Кремля.
      </p>
      <p class="modalBlock__description">
         Мечеть носит имя Кул-Шарифа&nbsp;&mdash; последнего имама (предводителя) Казанского ханства, погибшего при обороне города в&nbsp;1552&nbsp;году. Возведенная к&nbsp;тысячелетнему юбилею Казани, она стала центром культурного притяжения, где история оживает в&nbsp;камне.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/mechet_kul_shrarif/mechet_kul_sharif_1.jpg" alt="Внешний вид мечети Кул-Шариф в Казанском Кремле" loading="lazy">
   </div>
</div>
<!-- Блок 2: Архитектура, вдохновленная короной ханов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архитектура, вдохновленная короной ханов</h2>
      <p class="modalBlock__description">
         Архитектурный облик поражает изяществом: композиция из&nbsp;шести минаретов создает величественный силуэт, а&nbsp;центральный купол напоминает корону-шапку ханов.
      </p>
      <p class="modalBlock__description">
         Фасады облицованы белым уральским мрамором и&nbsp;гранитом, а&nbsp;бирюзовые купола из&nbsp;специального сплава меняют оттенок в&nbsp;зависимости от&nbsp;освещения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/mechet_kul_shrarif/mechet_kul_sharif_2.jpg" alt="Архитектурные детали мечети: минареты, купол, фасад" loading="lazy">
   </div>
</div>
<!-- Блок 3: Синтез традиций и технологий в убранстве -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Синтез традиций и&nbsp;технологий в&nbsp;убранстве</h2>
      <p class="modalBlock__description">
         Отделка мечети&nbsp;&mdash; это синтез многовековых традиций и&nbsp;современных технологий. В&nbsp;интерьерах использованы редкие материалы: мраморный оникс создает эффект мягкого свечения.
      </p>
      <p class="modalBlock__description">
         Полы покрыты уникальными персидскими коврами ручной работы&nbsp;&mdash; даром от&nbsp;правительства Ирана. Декоративное убранство включает изящную резьбу по&nbsp;камню, позолоченную лепнину, витражи с&nbsp;тюльпанами (символ возрождения) и&nbsp;керамические панно с&nbsp;арабской вязью.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/mechet_kul_shrarif/mechet_kul_sharif_3.jpg" alt="Внутреннее убранство мечети: ковры, витражи, люстра" loading="lazy">
   </div>
</div>
<!-- Блок 4: Многоуровневый культурный комплекс -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Многоуровневый культурный комплекс</h2>
      <p class="modalBlock__description">
         Мечеть функционирует как многоуровневый комплекс: на&nbsp;цокольном этаже расположен Музей исламской культуры, на&nbsp;первом&nbsp;&mdash; просторный молельный зал для мужчин, на&nbsp;втором&nbsp;&mdash; галереи для посетителей и&nbsp;женская молельная зона.
      </p>
      <p class="modalBlock__description">
         Особую атмосферу создает хрустальная люстра весом в&nbsp;две тонны, изготовленная чешскими мастерами. Каждый элемент демонстрирует высочайший уровень мастерства.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/mechet_kul_shrarif/mechet_kul_sharif_4.jpg" alt="Музей исламской культуры и молельные залы мечети" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до мечети -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;мечети Кул-Шариф</h2>
      <p class="modalBlock__description">
         Мечеть находится на&nbsp;территории Казанского Кремля, в&nbsp;самом центре города.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;метро:</strong> Самый удобный способ&nbsp;&mdash; доехать до&nbsp;станции &laquo;Кремлевская&raquo;, откуда до&nbsp;входа в&nbsp;Кремль и&nbsp;мечети всего несколько минут пешком.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> До&nbsp;остановок &laquo;Центральный стадион&raquo;, &laquo;КАИ&raquo; или &laquo;Батурина&raquo; ходят многочисленные автобусы и&nbsp;троллейбусы.
      </p>
      <p class="modalBlock__description">
         <strong>Пешком:</strong> Из&nbsp;центра города (улица Баумана) до&nbsp;Кремля можно дойти за&nbsp;15-20&nbsp;минут.
      </p>
      <p class="modalBlock__description">
         Посещение мечети для туристов возможно в&nbsp;установленные часы, вне времени молитв. Для входа женщинам рекомендуется иметь при себе платок.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/mechet_kul_shrarif/kak_dobratsya.jpg" alt="Схема проезда к Казанскому Кремлю и расположение мечети" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Дворец земледельцев----------------------------------------
        {
            id: 'dvoretc_zevlevladeltcev',
            title: 'Дворец земледельцев',
            image: '../../img/tatarstan/cards_tochki/dvorec_zemledelcev_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Дворец Земледельцев</h1>
</div>
<!-- Блок 1: Архитектурный символ аграрной мощи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архитектурный символ аграрной мощи</h2>
      <p class="modalBlock__description">
         Архитектурный символ аграрной мощи Татарстана, возведенный в&nbsp;историческом центре Казани за&nbsp;рекордные два года, с&nbsp;2008 по&nbsp;2010.
      </p>
      <p class="modalBlock__description">
         Автор проекта Леонид Горняк создал здание, притягивающие взгляды, в&nbsp;котором классический стиль переплетается с&nbsp;восточными мотивами, ампиром и&nbsp;элементами необарокко.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/dvoretc_zemlevladeltcev/dvorec_zemledelcev_1.jpg" alt="Дворец Земледельцев на фоне Казанского Кремля" loading="lazy">
   </div>
</div>
<!-- Блок 2: Фасад, вдохновленный изобилием -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Фасад, вдохновленный изобилием</h2>
      <p class="modalBlock__description">
         Фасад дворца впечатляет разнообразием архитектурных элементов: дорические и&nbsp;ионические колонны соседствуют с&nbsp;арочными порталами, барельефами и&nbsp;бронзовыми скульптурами.
      </p>
      <p class="modalBlock__description">
         Доминантой композиции стало 20-метровое бронзовое дерево&nbsp;&mdash; символ плодородия, размещенное в&nbsp;центральной арке. Венчают здание несколько куполов, среди которых выделяется спиралевидный центральный купол-луковица с&nbsp;прозрачными элементами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/dvoretc_zemlevladeltcev/dvorec_zemledelcev_2.jpg" alt="Фасад дворца и бронзовое дерево в центральной арке" loading="lazy">
   </div>
</div>
<!-- Блок 3: Вечерняя магия подсветки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Вечерняя магия подсветки</h2>
      <p class="modalBlock__description">
         Особую магию дворец обретает с&nbsp;наступлением вечера, когда включается художественная подсветка.
      </p>
      <p class="modalBlock__description">
         Белый свет фасадов контрастирует с&nbsp;изумрудной подсветкой куполов и&nbsp;бронзового дерева, создавая фантастические визуальные эффекты. Именно в&nbsp;ночное время здание наиболее фотогенично, особенно при съемке с&nbsp;лестницы, ведущей от&nbsp;набережной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/dvoretc_zemlevladeltcev/dvorec_zemledelcev_3.jpg" alt="Дворец Земледельцев с вечерней подсветкой" loading="lazy">
   </div>
</div>
<!-- Блок 4: Внутреннее содержание -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Внутреннее содержание и&nbsp;интересные факты</h2>
      <p class="modalBlock__description">
         Несмотря на&nbsp;внешнюю роскошь, интерьеры дворца носят утилитарный характер&nbsp;&mdash; здесь расположены офисы Министерства сельского хозяйства.
      </p>
      <p class="modalBlock__description">
         Для посетителей доступны Музей истории сельского хозяйства с&nbsp;экспозицией древних орудий труда и&nbsp;уютное кафе с&nbsp;блюдами татарской кухни. Интересный факт: высота здания в&nbsp;48&nbsp;м была специально рассчитана так, чтобы не&nbsp;затмевать башню Сююмбике в&nbsp;соседнем Кремле.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/dvoretc_zemlevladeltcev/dvorec_zemledelcev_4.jpg" alt="Интерьер музея во Дворце Земледельцев" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до дворца -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Дворца Земледельцев</h2>
      <p class="modalBlock__description">
         Адрес: Федосеевская улица, 36. Дворец находится через улицу от&nbsp;Казанского кремля, также выходит на&nbsp;Кремлевскую набережную Казанки.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;метро:</strong> Самый удобный способ&nbsp;&mdash; доехать до&nbsp;станции &laquo;Кремлевская&raquo;, откуда до&nbsp;дворца около 10&nbsp;минут пешком через площадь.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Добраться можно на&nbsp;автобусе до&nbsp;остановки &laquo;Ул. Батурина&raquo; или &laquo;Центральный стадион&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Пешком:</strong> Из&nbsp;центра города (улица Баумана) или от&nbsp;Кремля можно дойти за&nbsp;15-20 минут живописным маршрутом вдоль набережной.
      </p>
      <p class="modalBlock__description">
         Посещение территории вокруг дворца свободное и&nbsp;доступно круглосуточно. Вход в&nbsp;музей и&nbsp;кафе&nbsp;&mdash; в&nbsp;установленные часы работы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/dvoretc_zemlevladeltcev/kak_dobratsya.jpg" alt="Схема расположения Дворца Земледельцев относительно Кремля" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Река Казанка----------------------------------------
        {
            id: 'reka_kazanka',
            title: 'Река Казанка',
            image: '../../img/tatarstan/cards_tochki/reka_kazanka_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Река Казанка</h1>
</div>
<!-- Блок 1: Сердце столицы Татарстана -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сердце столицы Татарстана</h2>
      <p class="modalBlock__description">
         Река Казанка протяженностью в&nbsp;140&nbsp;км играет ключевую роль в&nbsp;облике и&nbsp;истории столицы Татарстана. Ее&nbsp;исток находится на&nbsp;севере республики, а&nbsp;устье&nbsp;&mdash; в&nbsp;городской черте.
      </p>
      <p class="modalBlock__description">
         После наполнения Куйбышевского водохранилища участок реки в&nbsp;пределах Казани превратился в&nbsp;широкий залив, пригодный для судоходства, по&nbsp;которому сегодня ходят прогулочные катера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/reka_kazanka/reka_kazanka_1.jpg" alt="Река Казанка, вид на Кремль и мосты" loading="lazy">
   </div>
</div>
<!-- Блок 2: Два русла одной реки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Два русла одной реки</h2>
      <p class="modalBlock__description">
         Любопытно, что у&nbsp;Казанки существует два русла&nbsp;&mdash; современное и&nbsp;историческое.
      </p>
      <p class="modalBlock__description">
         Изначально река огибала Зилантову гору с&nbsp;востока и&nbsp;севера, впадая в&nbsp;Волгу в&nbsp;районе Адмиралтейской слободы. Однако в&nbsp;1950-х годах для защиты города от&nbsp;подтоплений и&nbsp;строительства транспортной дамбы было прорыто новое, прямое русло. Прежнее течение оказалось отрезанным и&nbsp;сегодня представляет собой цепь непроточных водоемов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/reka_kazanka/reka_kazanka_2.jpg" alt="Схема старого и нового русла Казанки" loading="lazy">
   </div>
</div>
<!-- Блок 3: Уникальный природный ландшафт -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальный природный ландшафт</h2>
      <p class="modalBlock__description">
         Бассейн Казанки обладает уникальным природным ландшафтом. Для этой местности характерны глубокие овраги и&nbsp;карстовые формы рельефа.
      </p>
      <p class="modalBlock__description">
         Именно с&nbsp;деятельностью подземных вод связано образование популярной у&nbsp;туристов и&nbsp;местных жителей природной достопримечательности&nbsp;&mdash; Голубых озер, известных своей прозрачной водой. Здесь вода не&nbsp;замерзает даже в&nbsp;сильные морозы из-за обилия родников.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/reka_kazanka/reka_kazanka_3.jpg" alt="Голубые озера в бассейне реки Казанки" loading="lazy">
   </div>
</div>
<!-- Блок 4: Исторические и природные памятники -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Исторические и&nbsp;природные памятники</h2>
      <p class="modalBlock__description">
         На&nbsp;северо-востоке Казани, в&nbsp;пределах города на&nbsp;берегу реки находится памятник природы&nbsp;&mdash; урочище Русско-немецкая Швейцария, куда входят не&nbsp;только зеленые острова в&nbsp;сердце русла, но&nbsp;и&nbsp;невысокие холмы&nbsp;&mdash; Скотские горы.
      </p>
      <p class="modalBlock__description">
         В&nbsp;60-е годы&nbsp;XX века здесь нашли остатки древних жилищ, керамики и&nbsp;бытовых артефактов. Археологические стоянки эпохи неолита, которым более 2,5&nbsp;тыс. лет, были названы Казанка I&nbsp;и&nbsp;Казанка II. По&nbsp;живописному парку приятно прогуливаться или составлять веломаршруты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/reka_kazanka/reka_kazanka_4.jpg" alt="Урочище Русско-немецкая Швейцария на берегу Казанки" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и насладиться видами -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;насладиться видами Казанки</h2>
      <p class="modalBlock__description">
         Самые живописные виды на&nbsp;реку открываются на&nbsp;Кремлевской набережной&nbsp;&mdash; современном благоустроенном променаде вдоль воды.
      </p>
      <p class="modalBlock__description">
         <strong>Пешие маршруты:</strong> По&nbsp;Кремлевской набережной можно дойти до&nbsp;урочища Русско-немецкой Швейцарии и&nbsp;полюбоваться природной красотой реки. Это довольно длинный, но&nbsp;очень живописный маршрут.
      </p>
      <p class="modalBlock__description">
         <strong>Речные прогулки:</strong> С&nbsp;причалов у&nbsp;Кремля и&nbsp;набережной регулярно отправляются прогулочные катера по&nbsp;Казанке с&nbsp;выходом в&nbsp;Волгу. Это отличный способ увидеть город с&nbsp;воды.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> До&nbsp;Голубых озер можно доехать на&nbsp;автобусах до&nbsp;остановки &laquo;Голубые озера&raquo; или &laquo;Сахарова&raquo;.
      </p>
      <p class="modalBlock__description">
         Река Казанка доступна для посещения круглый год, предлагая разные виды активностей: от&nbsp;летних прогулок на&nbsp;катере до&nbsp;зимних фотосессий на&nbsp;заснеженной набережной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/reka_kazanka/kak_dobratsya.jpg" alt="Кремлевская набережная и карта прогулочных маршрутов" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Болгарское городище----------------------------------------
        {
            id: 'bolgarskoe_gorodiche',
            title: 'Болгарское городище',
            image: '../../img/tatarstan/cards_tochki/bolgarskoe_gorodische_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Болгарское городище</h1>
</div>
<!-- Блок 1: Наследие двух великих государств -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Наследие двух великих государств</h2>
      <p class="modalBlock__description">
         Археологический заповедник под открытым небом, хранящий наследие двух великих государств: Волжской Булгарии и&nbsp;Золотой Орды.
      </p>
      <p class="modalBlock__description">
         Этот уникальный комплекс получил статус объекта Всемирного наследия ЮНЕСКО как единственный в&nbsp;мире образец средневековой болгаро-татарской архитектуры XIII&ndash;XIV&nbsp;веков.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/bolgarskoe_gorodishe/bolgarskoe_gorodische_1.jpg" alt="Общий вид Болгарского городища с высоты" loading="lazy">
   </div>
</div>
<!-- Блок 2: Доминанты древнего города -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Доминанты древнего города</h2>
      <p class="modalBlock__description">
         Доминантой Болгарского городища является Соборная мечеть XIII века&nbsp;&mdash; каменный символ принятия ислама волжскими булгарами. Ее&nbsp;мощные стены и&nbsp;минареты демонстрировали могущество древнего государства.
      </p>
      <p class="modalBlock__description">
         Рядом возвышается Малый минарет&nbsp;XI века&nbsp;&mdash; 16-метровый столб с&nbsp;винтовой лестницей, ведущей на&nbsp;смотровую площадку, откуда открывается панорамный вид на&nbsp;весь комплекс.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/bolgarskoe_gorodishe/bolgarskoe_gorodische_2.jpg" alt="Соборная мечеть и Малый минарет" loading="lazy">
   </div>
</div>
<!-- Блок 3: Мавзолеи и усыпальницы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Мавзолеи и&nbsp;усыпальницы</h2>
      <p class="modalBlock__description">
         Архитектурный ансамбль дополняют два мавзолея: Северный, сохранивший уникальные надгробия с&nbsp;древнетюркскими надписями, и&nbsp;Восточный, служивший усыпальницей для знати.
      </p>
      <p class="modalBlock__description">
         Особый интерес представляет Черная палата&nbsp;&mdash; лучше всего сохранившееся здание городища, получившее название от&nbsp;копоти кузнечных мастерских, располагавшихся здесь в&nbsp;более позднее время.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/bolgarskoe_gorodishe/bolgarskoe_gorodische_3.jpg" alt="Северный мавзолей и Черная палата" loading="lazy">
   </div>
</div>
<!-- Блок 4: Быт и технологии средневекового города -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Быт и&nbsp;технологии средневекового города</h2>
      <p class="modalBlock__description">
         Открытая археологами в&nbsp;1984 году Ханская баня раскрывает уровень комфорта средневекового города&nbsp;&mdash; с&nbsp;подпольным отоплением и&nbsp;сложной системой водоотвода.
      </p>
      <p class="modalBlock__description">
         Каждое сооружение городища рассказывает свою историю: от&nbsp;тонкостей торговых отношений до&nbsp;религиозных традиций и&nbsp;погребальных обрядов. Болгарское городище продолжает оставаться живым памятником, где каменные стены хранят память о&nbsp;дипломатических миссиях, ремесленных традициях и&nbsp;культурном расцвете государства, ставшего важным мостом между Европой и&nbsp;Азией.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/bolgarskoe_gorodishe/bolgarskoe_gorodische_4.jpg" alt="Ханская баня и археологические находки" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Болгарского городища -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Болгарского городища</h2>
      <p class="modalBlock__description">
         Адрес: город Болгар, ул. Назаровых, 67. Расстояние от&nbsp;Казани&nbsp;&mdash; около 180&nbsp;км.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Самый удобный способ&nbsp;&mdash; по&nbsp;трассе Р-239&nbsp;в сторону Ульяновска. Время в&nbsp;пути составляет примерно 2,5-3&nbsp;часа. На&nbsp;территории комплекса есть парковка.
      </p>
      <p class="modalBlock__description">
         <strong>По&nbsp;воде (в&nbsp;летний период):</strong> Из&nbsp;Казани на&nbsp;скоростном &laquo;Метеоре&raquo; по&nbsp;Волге. Время в&nbsp;пути&nbsp;&mdash; около 2,5&nbsp;часов. Это самый живописный маршрут, позволяющий оценить масштабы Волги.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автобусе:</strong> С&nbsp;Центрального автовокзала Казани регулярно ходят рейсовые автобусы до&nbsp;города Болгар. Время в&nbsp;пути&nbsp;&mdash; около 3&nbsp;часов.
      </p>
      <p class="modalBlock__description">
         <strong>Экскурсионные туры:</strong> Многие турагентства Казани предлагают однодневные экскурсии в&nbsp;Болгар с&nbsp;трансфером и&nbsp;услугами гида. Это оптимальный вариант для первого знакомства.
      </p>
      <p class="modalBlock__description">
         Комплекс открыт для посещения круглый год. Рекомендуется выделить на&nbsp;осмотр не&nbsp;менее 3-4&nbsp;часов. На&nbsp;территории есть музей, сувенирные лавки и&nbsp;кафе.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/bolgarskoe_gorodishe/kak_dobratsya.jpg" alt="Карта проезда из Казани в Болгар" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Сабантуй----------------------------------------

        {
            id: 'sabantui',
            title: 'Сабантуй',
            image: '../../img/tatarstan/cards_tochki/sabantuy_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Праздник Сабантуй</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Многовековое наследие тюркских народов</h2>
      <p class="modalBlock__description">
         Многовековой праздник тюркских народов, чьи истоки теряются в&nbsp;древних обрядах кочевых племен, связанных с&nbsp;пробуждением природы и&nbsp;культом плодородия.
      </p>
      <p class="modalBlock__description">
         Изначально связанный с&nbsp;культом бога Тенгре, этот &laquo;праздник плуга&raquo; (от&nbsp;тюркского &laquo;сабан&raquo;&nbsp;&mdash; плуг, &laquo;туй&raquo;&nbsp;&mdash; торжество) со&nbsp;временем трансформировался в&nbsp;яркое празднование окончания весенних полевых работ.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sabantyi/sabantuy_1.jpg" alt="Торжественное открытие Сабантуя с флагом" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Аутентичные традиции и&nbsp;символы</h2>
      <p class="modalBlock__description">
         Современный Сабантуй сохранил древнюю символику: украшенное полотенце на&nbsp;длинном шесте по-прежнему остается главным атрибутом праздника, а&nbsp;традиция дарения подарков батырам (героям, храбрым воинам) перекликается с&nbsp;древними обрядами жертвоприношений.
      </p>
      <p class="modalBlock__description">
         Особое место занимают состязания в&nbsp;силе и&nbsp;ловкости&nbsp;&mdash; от&nbsp;национальной борьбы корэш до&nbsp;конных скачек, демонстрирующие связь с&nbsp;кочевым прошлым тюркских народов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sabantyi/sabantuy_2.jpg" alt="Борьба корэш и конные скачки на Сабантуе" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;древних ритуалов к&nbsp;федеральному празднику</h2>
      <p class="modalBlock__description">
         Историческая трансформация праздника отражает изменения в&nbsp;обществе: от&nbsp;языческих молений о&nbsp;плодородии до&nbsp;мусульманских традиций Казанского ханства, от&nbsp;советского периода до&nbsp;современного статуса федерального праздника.
      </p>
      <p class="modalBlock__description">
         Праздник, сохранив свою аутентичность в&nbsp;соревнованиях и&nbsp;ритуалах, демонстрирует удивительную способность традиционной культуры адаптироваться к&nbsp;новым временам, оставаясь живым наследием предков.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sabantyi/sabantuy_3.jpg" alt="Эволюция праздника: от старинных фото до современных гуляний" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Символ межкультурного диалога</h2>
      <p class="modalBlock__description">
         Сегодня Сабантуй объединяет не&nbsp;только татар и&nbsp;башкир, но&nbsp;и&nbsp;представителей разных народов России, став символом межкультурного диалога.
      </p>
      <p class="modalBlock__description">
         Это яркое, наполненное музыкой, танцами, угощениями и&nbsp;спортивным духом событие, которое проходит во&nbsp;многих городах и&nbsp;селах Татарстана и&nbsp;за&nbsp;его пределами, приглашая всех к&nbsp;общему столу и&nbsp;совместному веселью.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sabantyi/sabantuy_4.jpg" alt="Многонациональные гости за общим столом на празднике" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Храм всех религий-------------------------------------------------------

        {
            id: 'hram_vseh_religii',
            title: 'Храм всех религий',
            image: '../../img/tatarstan/cards_tochki/hram_vseh_religiy_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Храм всех религий</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архитектурный манифест единства</h2>
      <p class="modalBlock__description">
         Уникальный архитектурный манифест, созданный художником Ильдаром Хановым. Этот фантазийный комплекс воплощает идею духовного единства через синтез архитектурных форм разных конфессий.
      </p>
      <p class="modalBlock__description">
         Наследуя традиции русского модерна и&nbsp;восточной орнаментики, Ханов создал живописный ансамбль, где соседствуют православные купола, исламские полумесяцы, католические витражи и&nbsp;буддийские пагоды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/hram_vseh_religii/hram_vseh_religiy_1.jpg" alt="Внешний вид Храма всех религий на берегу Волги" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Символика и&nbsp;синтез форм</h2>
      <p class="modalBlock__description">
         Шестнадцать куполов символизируют мировые религии, а&nbsp;мозаичные панно объединяют христианские, иудейские и&nbsp;древнетюркские символы.
      </p>
      <p class="modalBlock__description">
         Залы храма представляют собой настоящий музей религиозной истории человечества. Его эклектичная архитектура, сочетающая древние символы с&nbsp;космическими мотивами, продолжает вызывать споры, но&nbsp;остается ярким свидетельством творческой свободы и&nbsp;межконфессионального диалога.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/hram_vseh_religii/hram_vseh_religiy_2.jpg" alt="Архитектурные детали: купола, витражи, мозаики" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Лабиринт духовных традиций</h2>
      <p class="modalBlock__description">
         Внутреннее пространство храма&nbsp;&mdash; это лабиринт залов, посвященных разным духовным традициям: от&nbsp;Египетского зала с&nbsp;лотосовидными колоннами до&nbsp;Католического зала с&nbsp;витражами и&nbsp;Языческого зала со&nbsp;славянскими рунами.
      </p>
      <p class="modalBlock__description">
         Особое место занимают мемориальные галереи, где представлены работы самого Ханова и&nbsp;его брата Ильгиза, а&nbsp;также детские рисунки со&nbsp;всего мира.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/hram_vseh_religii/hram_vseh_religiy_3.jpg" alt="Внутренние залы храма: Египетский, Католический" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культурный центр, а&nbsp;не&nbsp;храм</h2>
      <p class="modalBlock__description">
         Важно подчеркнуть, что Вселенский храм не&nbsp;является действующим культовым сооружением. Это скорее арт-объект глобального масштаба, культурный центр, где проходят концерты, выставки и&nbsp;мастер-классы.
      </p>
      <p class="modalBlock__description">
         Его создание стало личной миссией Ильдара Ханова, который видел в&nbsp;этом проекте визуальную формулу мира и&nbsp;согласия между народами и&nbsp;религиями.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/hram_vseh_religii/hram_vseh_religiy_4.jpg" alt="Концертный зал и выставка внутри храма" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Храма всех религий</h2>
      <p class="modalBlock__description">
         Адрес: Старо-Аракчинская улица, 4. Храм расположен в&nbsp;поселке Старое Аракчино, на&nbsp;выезде из&nbsp;Казани в&nbsp;сторону Москвы.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Автобус &#8470; 30&nbsp;из&nbsp;центра города до&nbsp;остановки &laquo;Переправа&raquo;. От&nbsp;остановки до&nbsp;храма&nbsp;&mdash; около 5-7 минут пешком.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> По&nbsp;Горьковскому шоссе (трасса М7). Время в&nbsp;пути из&nbsp;центра Казани&nbsp;&mdash; около 20&nbsp;минут. Рядом с&nbsp;храмом есть парковка.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;такси:</strong> Удобный вариант из&nbsp;любой точки города. Поездка из&nbsp;центра займет 15-25 минут в&nbsp;зависимости от&nbsp;трафика.
      </p>
      <p class="modalBlock__description">
         Посещение территории и&nbsp;внешний осмотр доступны в&nbsp;светлое время сутки. График работы внутренних помещений и&nbsp;галерей рекомендуется уточнять заранее. С&nbsp;берега рядом с&nbsp;храмом открывается живописный вид на&nbsp;Волгу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/hram_vseh_religii/kak_dobratsya.jpg" alt="Схема проезда к Храму всех религий" loading="lazy">
   </div>
</div>`
        }

    ],



//------------------------------------------------ Выбраться на природу-------------------------------------------
//----------------------------------------------------------------------------------------------------------------


    nature: [
        {
            id: 'nizhnya_kama',
            title: 'Нацпарк «Нижняя Кама»',
            image: '../../img/tatarstan/cards_nature/nizhnyaya_kama_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">&laquo;Нижняя Кама&raquo;</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заповедное побережье великой реки</h2>
      <p class="modalBlock__description">
         Заповедное побережье реки в&nbsp;районе Елабуги и&nbsp;Набережных Челнов когда-то вдохновляли великого русского художника Ивана Шишкина.
      </p>
      <p class="modalBlock__description">
         Это место, где можно насладиться тишиной лесов, величием речных просторов и&nbsp;прикоснуться к&nbsp;истории древнего Прикамья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/nizhnya_kama/nizhnyaya_kama_1.jpg" alt="Живописные берега реки Камы в национальном парке" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальный мир на&nbsp;стыке трех зон</h2>
      <p class="modalBlock__description">
         Национальный парк &laquo;Нижняя Кама&raquo;&nbsp;&mdash; это удивительный мир, где природа и&nbsp;история переплетаются. Парк раскинулся на&nbsp;живописных берегах нижней Камы, близ Нижнекамского водохранилища, на&nbsp;территории около 26&nbsp;тыс.&nbsp;га.
      </p>
      <p class="modalBlock__description">
         Особую ценность месту придает его расположение на&nbsp;стыке трех климатических зон, что способствует созданию уникального разнообразия ландшафтов. Здесь можно увидеть и&nbsp;янтарные сосновые боры, и&nbsp;пойменные луга с&nbsp;сотнями видов растений, многие из&nbsp;которых занесены в&nbsp;Красную книгу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/nizhnya_kama/nizhnyaya_kama_2.jpg" alt="Разнообразие ландшафтов: сосновый бор, пойменный луг" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Жемчужины парка и&nbsp;экскурсионные маршруты</h2>
      <p class="modalBlock__description">
         Особой гордостью парка являются корабельные рощи, Красная горка с&nbsp;обрывистыми берегами из&nbsp;красноватых песчаников, и&nbsp;уникальный Пихтовый лес&nbsp;&mdash; самая южная в&nbsp;России естественная роща сибирской пихты.
      </p>
      <p class="modalBlock__description">
         Для гостей парка разработаны увлекательные экскурсионные маршруты. Вы&nbsp;можете совершить путешествие по&nbsp;тропам Большого бора&nbsp;&mdash; самого богатого леса Татарстана, пройти к&nbsp;лесным озерам, где обитают редкие виды птиц, или посетить древние стоянки человека эпохи неолита.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/nizhnya_kama/nizhnyaya_kama_3.jpg" alt="Красная горка и туристические тропы в парке" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Отдых на&nbsp;любой вкус</h2>
      <p class="modalBlock__description">
         Нацпарк &laquo;Нижняя Кама&raquo; предлагает возможности для разного отдыха: от&nbsp;уединенных прогулок по&nbsp;экологическим тропам до&nbsp;организованных экскурсий и&nbsp;тематических занятий для детей.
      </p>
      <p class="modalBlock__description">
         На&nbsp;территории расположены около 200 баз отдыха и&nbsp;санаториев, работают музей природы и&nbsp;информационный центр, где всегда помогут составить интересный маршрут.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/nizhnya_kama/nizhnyaya_kama_4.jpg" alt="Музей природы и отдыхающие на экотропе" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;национального парка</h2>
      <p class="modalBlock__description">
         Национальный парк находится вблизи крупных городов, что делает его легко доступным для посещения.
      </p>
      <p class="modalBlock__description">
         <strong>Из&nbsp;Елабуги:</strong> Национальный парк начинается практически в&nbsp;границах города, близ реки Тоймы. До&nbsp;многих экотроп можно добраться на&nbsp;городском транспорте или такси.
      </p>
      <p class="modalBlock__description">
         <strong>Из&nbsp;Набережных Челнов:</strong> Часть нацпарка (Боровецкий лес) находится на&nbsp;севере города. Добраться можно на&nbsp;общественном транспорте до&nbsp;остановок в&nbsp;районе парка.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> По&nbsp;трассе&nbsp;М7 (Казань-Набережные Челны) до&nbsp;Елабуги или Набережных Челнов. В&nbsp;парке есть оборудованные парковки у&nbsp;основных туристических объектов.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> Перед посещением рекомендуется зайти в&nbsp;визит-центр парка в&nbsp;Елабуге (ул. Казанская, 26) для получения карты маршрутов и&nbsp;информации о&nbsp;текущем состоянии троп.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/nizhnya_kama/kak_dobratsya.jpg" alt="Схема расположения парка между Елабугой и Челнами" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------------Волжско-Камский заповедник--------------------------------------
        {
            id: 'volzsko_kamskii_zapovednik',
            title: 'Волжско-Камский заповедник',
            image: '../../img/tatarstan/cards_nature/volzhsko_kamskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Волжско-Камский&raquo;</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Единственный заповедник Татарстана</h2>
      <p class="modalBlock__description">
         Охраняемая природная лаборатория и&nbsp;единственный заповедник на&nbsp;территории Татарстана.
      </p>
      <p class="modalBlock__description">
         Один из&nbsp;участков заповедника находится на&nbsp;берегах у&nbsp;Камского устья&nbsp;&mdash; месте впадения Камы в&nbsp;Волгу. Волжско-Камский заповедник раскинулся на&nbsp;левобережных террасах Волги, он&nbsp;состоит из&nbsp;двух уединенных островков дикой природы, разделенных сотней километров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/volzhko_kamskiy/volzhsko_kamskiy_1.jpg" alt="Общий вид заповедника с высоты" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Раифский участок: древний лес и&nbsp;дендрарий</h2>
      <p class="modalBlock__description">
         Сердце Раифского участка&nbsp;&mdash; один из&nbsp;старейших лесов Восточной Европы, где можно встретить трехсотлетние сосны-великаны. Здесь&nbsp;же находится знаменитый дендрарий&nbsp;&mdash; настоящий музей под открытым небом.
      </p>
      <p class="modalBlock__description">
         На&nbsp;его территории собрана внушительная коллекция из&nbsp;500 видов деревьев и&nbsp;кустарников со&nbsp;всего света, разделенных на&nbsp;географические секции&nbsp;&mdash; &laquo;Америка&raquo;, &laquo;Европа&raquo; и&nbsp;&laquo;Азия&raquo;. Это идеальное место для неспешной прогулки, где за&nbsp;несколько часов можно совершить кругосветное путешествие по&nbsp;растительному миру планеты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/volzhko_kamskiy/volzhsko_kamskiy_2.jpg" alt="Раифский дендрарий и трехсотлетние сосны" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей природы и&nbsp;Раифский монастырь</h2>
      <p class="modalBlock__description">
         Не&nbsp;менее интересен Музей природы, где созданы реалистичные диорамы с&nbsp;более чем пятьюдесятью обитателями заповедника. Здесь можно увидеть сцены из&nbsp;жизни животных в&nbsp;их&nbsp;естественной среде.
      </p>
      <p class="modalBlock__description">
         А&nbsp;на&nbsp;берегу живописного Раифского озера находится историко-архитектурный памятник XVII века&nbsp;&mdash; Раифский Богородицкий мужской монастырь, чьи белоснежные стены гармонично вписаны в&nbsp;природный ландшафт.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/volzhko_kamskiy/volzhsko_kamskiy_3.jpg" alt="Музей природы и Раифский монастырь у озера" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Саралинский участок: царство птиц и&nbsp;дикой природы</h2>
      <p class="modalBlock__description">
         Саралинский участок предлагает совсем другие, но&nbsp;не&nbsp;менее захватывающие впечатления. Это настоящий рай для орнитологов и&nbsp;любителей птиц.
      </p>
      <p class="modalBlock__description">
         Главная гордость этих мест&nbsp;&mdash; величественный орлан-белохвост, занесенный в&nbsp;международную Красную книгу. В&nbsp;небе кружат чайки и&nbsp;коршуны, а&nbsp;в&nbsp;естественной среде обитания здесь можно встретить лося, бобра или енотовидную собаку.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/volzhko_kamskiy/volzhsko_kamskiy_4.jpg" alt="Орлан-белохвост и природа Саралинского участка" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;заповедника</h2>
      <p class="modalBlock__description">
         Визит-центр заповедника находится по&nbsp;адресу: пос. Садовый, ул. Вехова, 1&nbsp;(Раифский участок).
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> От&nbsp;северного вокзала Казани до&nbsp;Раифа ходит городской автобус 552. От&nbsp;остановки до&nbsp;визит-центра&nbsp;&mdash; около 10&nbsp;минут пешком.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> По&nbsp;трассе в&nbsp;сторону Зеленодольска (М7). Время в&nbsp;пути из&nbsp;центра Казани&nbsp;&mdash; около 30&nbsp;минут. У&nbsp;входа в&nbsp;дендрарий есть парковка.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Заповедник, имеющий статус биосферного резервата ЮНЕСКО, сохраняет невероятное биоразнообразие. Посещение Раифского участка доступно всем желающим, а&nbsp;вот попасть на&nbsp;Саралинский&nbsp;&mdash; большая удача, такие поездки организуются редко и&nbsp;требуют специального разрешения.
      </p>
      <p class="modalBlock__description">
         Посещение дендрария и&nbsp;музея природы платное. График работы лучше уточнять на&nbsp;официальном сайте заповедника.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/volzhko_kamskiy/kak_dobratsya.jpg" alt="Карта расположения Раифского и Саралинского участков" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------------Чатыр-Тау--------------------------------------
        {
            id: 'chatyr_tau',
            title: 'Чатыр-Тау',
            image: '../../img/tatarstan/cards_nature/chatyr_tau_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Чатыр-Тау</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">&laquo;Шатер-гора&raquo;&nbsp;&mdash; высшая точка Татарстана</h2>
      <p class="modalBlock__description">
         Название горы Чатыр-Тау переводится как &laquo;шатер-гора&raquo;&nbsp;&mdash; это самая высокая точка Татарстана (321,7&nbsp;м). А&nbsp;еще&nbsp;&mdash; удивительный природный заказник с&nbsp;уникальными чертами степного ландшафта.
      </p>
      <p class="modalBlock__description">
         У&nbsp;Чатыр-Тау живет самая большая в&nbsp;Татарстане колония сурков&nbsp;&mdash; свыше 7000&nbsp;особей!
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/chatyr_tau/chatyr_tau_1.jpg" alt="Вид на гору Чатыр-Тау с подножия" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Рай для натуралистов</h2>
      <p class="modalBlock__description">
         Чатыр-Тау&nbsp;&mdash; это настоящий рай для натуралистов. На&nbsp;крутых склонах горы сохранились живописные степи с&nbsp;ковылем и&nbsp;разнотравьем, а&nbsp;в&nbsp;низовьях растут колковые леса из&nbsp;дуба, клена и&nbsp;рябины.
      </p>
      <p class="modalBlock__description">
         Главные обитатели этих мест&nbsp;&mdash; забавные сурки-байбаки, чья колония здесь самая большая в&nbsp;республике и&nbsp;насчитывает более 7&nbsp;тыс. особей. В&nbsp;траве можно встретить и&nbsp;редких грызунов, занесенных в&nbsp;Красную книгу Татарстана,&nbsp;&mdash; хомячка серого и&nbsp;степную пеструшку.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/chatyr_tau/chatyr_tau_2.jpg" alt="Сурки-байбаки и степной ландшафт на склонах" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Небесные обитатели и&nbsp;спортсмены</h2>
      <p class="modalBlock__description">
         Небо над горой тоже полно жизни: здесь парят хищные птицы, включая редкого могильника и&nbsp;щурку золотистую с&nbsp;ярким оперением.
      </p>
      <p class="modalBlock__description">
         А&nbsp;еще это излюбленное место для спортсменов-парапланеристов, которые используют восходящие потоки воздуха для своих полетов. С&nbsp;вершины горы открываются бескрайние просторы, а&nbsp;воздух наполнен свободой и&nbsp;тишиной степи.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/chatyr_tau/chatyr_tau_3.jpg" alt="Птицы в небе и парапланеристы над горой" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Особо охраняемая территория</h2>
      <p class="modalBlock__description">
         Чатыр-Тау&nbsp;&mdash; это особо охраняемая территория, где под защитой находятся не&nbsp;только сурки и&nbsp;редкие растения, но&nbsp;и&nbsp;хрупкая степная экосистема в&nbsp;целом.
      </p>
      <p class="modalBlock__description">
         Сюда приезжают, чтобы подышать степным воздухом, полюбоваться бескрайними просторами с&nbsp;вершины и&nbsp;если повезет&nbsp;&mdash; даже увидеть, как из&nbsp;норки покажется любопытный усатый байбак.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/chatyr_tau/chatyr_tau_4.jpg" alt="Охранный знак и туристы на вершине горы" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;горы Чатыр-Тау</h2>
      <p class="modalBlock__description">
         Гора находится недалеко от&nbsp;города Азнакаево, в&nbsp;350&nbsp;км от&nbsp;Казани. Это достаточно удаленный, но&nbsp;очень интересный природный объект.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Казани по&nbsp;трассе в&nbsp;сторону Альметьевска (около 350&nbsp;км, 4&nbsp;часа в&nbsp;пути). От&nbsp;Альметьевска до&nbsp;Азнакаево, затем до&nbsp;села Уразаево, на&nbsp;окраине которого находится гора.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Из&nbsp;Казани на&nbsp;автобусе можно добраться до&nbsp;Набережных Челнов, оттуда&nbsp;&mdash; с&nbsp;пересадкой до&nbsp;города Азнакаево. Из&nbsp;Азнакаево до&nbsp;села Уразаево ходит местный транспорт, от&nbsp;села до&nbsp;горы&nbsp;&mdash; около 3&nbsp;км пешком.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> Лучшее время для посещения&nbsp;&mdash; с&nbsp;мая по&nbsp;сентябрь, когда сурки активны, а&nbsp;степь цветет. Не&nbsp;забудьте удобную обувь для подъема, воду и&nbsp;бинокль для наблюдения за&nbsp;животными. Помните, что это заповедная зона&nbsp;&mdash; не&nbsp;шумите и&nbsp;не&nbsp;мусорите.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/chatyr_tau/kak_dobratsya.jpg" alt="Карта проезда к горе Чатыр-Тау" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------------Река Свияга--------------------------------------
        {
            id: 'reka_sviyaga',
            title: 'Река Свияга',
            image: '../../img/tatarstan/cards_nature/sviyaga_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Река Свияга</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Младшая &laquo;сестра&raquo; Волги</h2>
      <p class="modalBlock__description">
         Река Свияга&nbsp;&mdash; младшая &laquo;сестра&raquo; Волги, которая течет параллельно&nbsp;ей, но&nbsp;в&nbsp;прямо противоположном направлении&nbsp;&mdash; с&nbsp;юга на&nbsp;север.
      </p>
      <p class="modalBlock__description">
         Пожалуй, наибольшую популярность Свияга приобрела за&nbsp;счет города-острова Свияжска в&nbsp;месте впадения реки в&nbsp;Волгу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sviyaga/sviyaga_1.jpg" alt="Река Свияга в верхнем течении" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Географическая особенность и&nbsp;характеристики</h2>
      <p class="modalBlock__description">
         Свияга&nbsp;&mdash; правый приток Волги, протекающий по&nbsp;территории Ульяновской области и&nbsp;Татарстана. Река протяженностью 375&nbsp;км отличается характерной особенностью: она течет с&nbsp;юга на&nbsp;север параллельно Волге, но&nbsp;в&nbsp;противоположном направлении.
      </p>
      <p class="modalBlock__description">
         Река берет начало на&nbsp;Приволжской возвышенности&nbsp;и, проделав извилистый путь, впадает в&nbsp;Свияжский залив Куйбышевского водохранилища. Ее&nbsp;бассейн площадью 16&thinsp;700&nbsp;км&sup2; включает около 500 озер и&nbsp;водохранилищ.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sviyaga/sviyaga_2.jpg" alt="Карта течения Свияги параллельно Волге" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Остров-град Свияжск: жемчужина в&nbsp;устье</h2>
      <p class="modalBlock__description">
         В&nbsp;устье Свияги, в&nbsp;месте впадения реки в&nbsp;Волгу расположен остров-град Свияжск, основанный в&nbsp;1551 году как крепость Ивана Грозного.
      </p>
      <p class="modalBlock__description">
         Исторический центр поселения сохранил комплекс культовых сооружений XVI&ndash;XIX&nbsp;веков, среди которых Богородице-Успенский мужской монастырь с&nbsp;фресками эпохи Ивана Грозного. После создания Куйбышевского водохранилища Свияжск оказался на&nbsp;острове, что определило его современный облик.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sviyaga/sviyaga_3.jpg" alt="Остров-град Свияжск с высоты птичьего полета" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музеи и&nbsp;достопримечательности Свияжска</h2>
      <p class="modalBlock__description">
         Для туристов с&nbsp;детьми в&nbsp;Свияжске работает этнографический комплекс &laquo;Конный двор&raquo;, где можно познакомиться с&nbsp;традиционными ремеслами, и&nbsp;необычный Музей археологического дерева, рассказывающий о&nbsp;древних технологиях обработки древесины.
      </p>
      <p class="modalBlock__description">
         Свияжск&nbsp;&mdash; это место, где история оживает на&nbsp;каждом шагу: тут можно провести целый день, наслаждаясь не&nbsp;только архитектурными шедеврами, но&nbsp;и&nbsp;удивительной гармонией природы и&nbsp;древней культуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sviyaga/sviyaga_4.jpg" alt="Конный двор и Музей археологического дерева" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Свияжска и&nbsp;реки Свияги</h2>
      <p class="modalBlock__description">
         Основной точкой притяжения на&nbsp;реке Свияге является остров-град Свияжск, до&nbsp;которого есть несколько удобных способов добраться из&nbsp;Казани.
      </p>
      <p class="modalBlock__description">
         <strong>По&nbsp;воде (самый живописный способ):</strong> Из&nbsp;Казани к&nbsp;устью Свияги ежедневно ходят &laquo;метеоры&raquo; от&nbsp;речного вокзала столицы. Время в&nbsp;пути до&nbsp;Свияжска&nbsp;&mdash; около 40&nbsp;минут.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> По&nbsp;трассе М-7&nbsp;в сторону Москвы. Время в&nbsp;пути из&nbsp;центра Казани&nbsp;&mdash; около часа. На&nbsp;остров ведет дамба с&nbsp;автодорогой, есть большая парковка.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> На&nbsp;электричке с&nbsp;железнодорожного вокзала Казани до&nbsp;станции Свияжск. От&nbsp;станции до&nbsp;исторического центра&nbsp;&mdash; около 20&nbsp;минут пешком или на&nbsp;местном автобусе.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> Посещение Свияжска лучше планировать на&nbsp;целый день. Кроме храмов и&nbsp;музеев, здесь есть уютные кафе с&nbsp;местной кухней и&nbsp;прекрасные виды на&nbsp;слияние Свияги и&nbsp;Волги. Летом доступны прогулки на&nbsp;теплоходе вокруг острова.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/sviyaga/kak_dobratsya.jpg" alt="Схема водного и автомобильного пути до Свияжска" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------------Юрьевская пещера--------------------------------------
        {
            id: 'yurievskaya_pechera',
            title: 'Юрьевская пещера',
            image: '../../img/tatarstan/cards_nature/yurievskaya_peshera_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Пещера Юрьевская</h1>
</div>
<!-- Блок 1: Основная информация о пещере -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <p class="modalBlock__description">
         В&nbsp;двух часах езды от&nbsp;Казани в&nbsp;недрах Богородских гор спрятана уникальная природная достопримечательность&nbsp;&mdash; Юрьевская пещера, самая протяженная во&nbsp;всем Среднем Поволжье.
      </p>
      <p class="modalBlock__description">
         Подземные лабиринты пещеры растянулись более чем на&nbsp;километр, а&nbsp;возраст этого царства тишины и&nbsp;темноты насчитывает более 10&nbsp;тыс. лет.
      </p>
      <p class="modalBlock__description">
         Прогулка по&nbsp;пещере не&nbsp;потребует особой физической подготовки, однако несмотря на&nbsp;нулевой уровень сложности, спуск в&nbsp;пещеру&nbsp;&mdash; это настоящее приключение. Путешественников ждут крутые спуски, таинственные темные коридоры, гроты и&nbsp;даже подземное озеро. Среди самых известных залов&nbsp;&mdash; Серебряный грот и&nbsp;причудливая Скала бабуинов.
      </p>
      <p class="modalBlock__description">
         Опытные гиды не&nbsp;только проведут по&nbsp;безопасному маршруту, но&nbsp;и&nbsp;расскажут местные легенды, возможно, даже о&nbsp;древнем драконе Зиланте.
      </p>
      <p class="modalBlock__description">
         Важно помнить, что в&nbsp;подземном мире свои законы: круглый год здесь сохраняется постоянная температура около +7&nbsp;градусов, царит высокая влажность и&nbsp;сырость. Поэтому теплая непромокаемая одежда и&nbsp;надежный фонарик&nbsp;&mdash; обязательные спутники каждого гостя.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/yurievskaya_peshera/yurievskaya_peshera_1.jpg" alt="Вход в Юрьевскую пещеру и внутренние залы" loading="lazy">
   </div>
</div>
<!-- Блок 2: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Юрьевской пещеры</h2>
      <p class="modalBlock__description">
         Вход в&nbsp;Юрьевскую пещеру находится у&nbsp;берега Волги в&nbsp;районе Камского Устья. Это популярный маршрут для любителей спелеологии и&nbsp;природы.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Казани по&nbsp;трассе в&nbsp;сторону Камского Устья, затем до&nbsp;пос. Тенишево. Время в&nbsp;пути&nbsp;&mdash; около 2&nbsp;часов. От&nbsp;поселка до&nbsp;пещеры&nbsp;&mdash; пешая прогулка.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Из&nbsp;Казани до&nbsp;поселка Тенишево ходит автобус &#8470;&nbsp;529. Время в&nbsp;пути&nbsp;&mdash; около двух часов. От&nbsp;остановки до&nbsp;пещеры нужно пройти пешком.
      </p>
      <p class="modalBlock__description">
         <strong>С&nbsp;экскурсией:</strong> Многие турфирмы Казани предлагают организованные туры в&nbsp;пещеру с&nbsp;трансфером, гидом и&nbsp;снаряжением. Это самый удобный и&nbsp;безопасный вариант для первого посещения.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Посещение пещеры рекомендуется только с&nbsp;опытным гидом. Самостоятельные походы опасны. Следует иметь соответствующую экипировку: фонарик, теплую одежду, удобную непромокаемую обувь.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/yurievskaya_peshera/kak_dobratsya.jpg" alt="Схема проезда из Казани к пещере" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------------Куйбышевское море--------------------------------------
        {
            id: 'kuibyshevskoe_more',
            title: 'Куйбышевское море',
            image: '../../img/tatarstan/cards_nature/kuybyshevskoe_more_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Куйбышевское море</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Рукотворное море в&nbsp;сердце России</h2>
      <p class="modalBlock__description">
         Представьте себе рукотворное море в&nbsp;самом сердце России&nbsp;&mdash; это Куйбышевское водохранилище, крупнейший искусственный водоем Евразии и&nbsp;третий по&nbsp;площади в&nbsp;мире.
      </p>
      <p class="modalBlock__description">
         Значение этого рукотворного моря для людей огромно: это и&nbsp;источник энергии, и&nbsp;главная водная магистраль, и&nbsp;ключевой поставщик воды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kyibeshevskoe_more/kuybyshevskoe_more_1.jpg" alt="Панорамный вид Куйбышевского водохранилища" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История создания и&nbsp;масштабы</h2>
      <p class="modalBlock__description">
         Куйбышевское водохранилище (или как его называют местные жители&nbsp;&mdash; море) появилось в&nbsp;1950-х годах, когда мощная плотина Жигулевской ГЭС перегородила Волгу у&nbsp;города Тольятти.
      </p>
      <p class="modalBlock__description">
         Вода затопила долину реки, навсегда изменив ландшафт и&nbsp;создав огромный резервуар, который сегодня обеспечивает несколько регионов электроэнергией и&nbsp;водой. Хотя плотина расположена территориально в&nbsp;Самарской области, более половины водохранилища находится в&nbsp;Татарстане.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kyibeshevskoe_more/kuybyshevskoe_more_2.jpg" alt="Плотина Жигулевской ГЭС и схема водохранилища" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">География и&nbsp;ландшафты</h2>
      <p class="modalBlock__description">
         Правый берег водохранилища&nbsp;&mdash; это Приволжская возвышенность: Услонские горы, открывающие вид на&nbsp;Казань, таинственные Сюкеевские, Тетюшские и&nbsp;Щучьи&nbsp;&mdash; природные судоходные маяки.
      </p>
      <p class="modalBlock__description">
         Если посмотреть на&nbsp;водохранилище сверху, оно напоминает сложную мозаику. Широкие плесы, достигающие 15&minus;20&nbsp;км в&nbsp;поперечнике, внезапно сменяются узкими проливами, словно река вновь напоминает о&nbsp;своем первоначальном русле.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kyibeshevskoe_more/kuybyshevskoe_more_3.jpg" alt="Прибрежные ландшафты и виды с высоты" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Водная система и&nbsp;значение</h2>
      <p class="modalBlock__description">
         Куйбышевское водохранилище собирает воду примерно со&nbsp;ста рек. Главные его &laquo;притоки&raquo;-гиганты&nbsp;&mdash; сама Волга и&nbsp;мощная Кама, Вятка, Свияга и&nbsp;Казанка.
      </p>
      <p class="modalBlock__description">
         По&nbsp;сути весь отрезок Волги в&nbsp;пределах республики&nbsp;&mdash; это Куйбышевское море. Оно стало неотъемлемой частью жизни региона, определяя климат, экономику и&nbsp;рекреационные возможности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kyibeshevskoe_more/kuybyshevskoe_more_4.jpg" alt="Схема основных притоков водохранилища" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как познакомиться с&nbsp;Куйбышевским морем</h2>
      <p class="modalBlock__description">
         Проще всего добраться до&nbsp;Куйбышевского водохранилища&nbsp;&mdash; от&nbsp;набережной Волги в&nbsp;Казани. Путешествие можно начать от&nbsp;речного вокзала, взяв небольшой круиз по&nbsp;водохранилищу.
      </p>
      <p class="modalBlock__description">
         <strong>Речные прогулки:</strong> С&nbsp;речного вокзала Казани регулярно отправляются теплоходы и&nbsp;катера по&nbsp;акватории водохранилища. Это лучший способ оценить масштабы &laquo;рукотворного моря&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Автомобильные маршруты:</strong> По&nbsp;трассе М7&nbsp;вдоль водохранилища есть множество смотровых площадок с&nbsp;захватывающими видами, особенно в&nbsp;районе Услонских гор.
      </p>
      <p class="modalBlock__description">
         <strong>Пляжный отдых:</strong> Летом многочисленные песчаные пляжи на&nbsp;берегах водохранилища становятся популярными местами отдыха. Самые известные находятся в&nbsp;районе поселков Печищи и&nbsp;Сорочьи Горы.
      </p>
      <p class="modalBlock__description">
         Водохранилище доступно для посещения круглый год, предлагая разные виды активностей: от&nbsp;летних купаний и&nbsp;рыбалки до&nbsp;зимних прогулок по&nbsp;льду и&nbsp;наблюдения за&nbsp;ледоходом весной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kyibeshevskoe_more/kak_dobratsya.jpg" alt="Карта акватории и прибрежных достопримечательностей" loading="lazy">
   </div>
</div>`
        }

    ],

//----------------------------------------------Культурный код--------------------------------------
//--------------------------------------------------------------------------------------------------


    culture: [
        {
            id: 'basnya_suumbike',
            title: 'Башня Сююмбике',
            image: '../../img/tatarstan/cards_culture/suimbike_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Сююмбике</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сакральный символ татарского народа</h2>
      <p class="modalBlock__description">
         Знаменитая &laquo;падающая&raquo; дозорная башня Казанского Кремля, чей шпиль стал сакральным символом татарского народа.
      </p>
      <p class="modalBlock__description">
         Романтическое имя башни окутано легендами, в&nbsp;центре которых&nbsp;&mdash; драматическая история казанской царицы Сююмбике, последней правительницы Казанского ханства.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/suumbike/suimbike_1.jpg" alt="Башня Сююмбике в Казанском Кремле" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архитектура и&nbsp;история</h2>
      <p class="modalBlock__description">
         Архитектурный облик башни Сююмбике, сочетающий традиции русского и&nbsp;татарского зодчества, продолжает вызывать споры среди исследователей.
      </p>
      <p class="modalBlock__description">
         Отсутствие ранних изображений и&nbsp;письменных свидетельств позволяет относить время ее&nbsp;строительства к&nbsp;концу XVII&nbsp;&mdash; началу XVIII&nbsp;века, когда башня служила стратегическим объектом для наблюдения за&nbsp;волжскими просторами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/suumbike/suimbike_2.jpg" alt="Архитектурные детали и конструкция башни" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Эволюция названия и&nbsp;функций</h2>
      <p class="modalBlock__description">
         Историческое название &laquo;проездная башня оберкомендантского дома со&nbsp;шпицем&raquo; сменилось романтическим именем царицы Сююмбике лишь в&nbsp;XIX&nbsp;столетии, когда легенды о&nbsp;трагической судьбе правительницы стали достоянием печати.
      </p>
      <p class="modalBlock__description">
         За&nbsp;свою историю башня пережила множество трансформаций: от&nbsp;дозорного поста до&nbsp;минарета, с&nbsp;которого раздается азан (в&nbsp;исламе&nbsp;&mdash; призыв к&nbsp;обязательной молитве) в&nbsp;память о&nbsp;жертвах взятия Казани в&nbsp;1552&nbsp;году.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/suumbike/suimbike_3.jpg" alt="Старинные изображения и чертежи башни" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">&laquo;Падающая&raquo; башня и&nbsp;ее&nbsp;наследие</h2>
      <p class="modalBlock__description">
         Сююмбике относится к&nbsp;так называемым &laquo;падающим&raquo; башням: отклонение ее&nbsp;шпиля от&nbsp;вертикали составляет около 2&nbsp;м. Археологические находки у&nbsp;ее&nbsp;подножия&nbsp;&mdash; остатки ханской мечети, усыпальниц и&nbsp;надгробий&nbsp;&mdash; подтверждают глубокие исторические корни этого места.
      </p>
      <p class="modalBlock__description">
         Сегодня башня Сююмбике, вдохновившая архитектора Щусева при создании Казанского вокзала в&nbsp;Москве, остается живым символом преемственности эпох и&nbsp;культурным кодом всего Татарстана.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/suumbike/suimbike_4.jpg" alt="Измерение наклона башни и археологические находки" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;башни Сююмбике</h2>
      <p class="modalBlock__description">
         Башня находится на&nbsp;территории Казанского кремля, в&nbsp;самом сердце города. Добраться до&nbsp;нее очень просто из&nbsp;любой точки Казани.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;метро:</strong> Самый удобный способ&nbsp;&mdash; доехать до&nbsp;станции &laquo;Кремлевская&raquo;. От&nbsp;выхода из&nbsp;метро до&nbsp;входа в&nbsp;Кремль&nbsp;&mdash; 3-5 минут пешком.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> До&nbsp;остановки &laquo;Ул. Батурина&raquo; или &laquo;Центральный стадион&raquo; ходят многочисленные автобусы и&nbsp;троллейбусы. От&nbsp;остановок до&nbsp;Кремля&nbsp;&mdash; 5-10 минут ходьбы.
      </p>
      <p class="modalBlock__description">
         <strong>Пешком:</strong> Из&nbsp;исторического центра (улица Баумана) до&nbsp;Кремля можно дойти за&nbsp;10-15 минут по&nbsp;живописным улочкам.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Казанский Кремль открыт для посещения ежедневно. Башня Сююмбике является архитектурной доминантой комплекса и&nbsp;доступна для внешнего осмотра. Внутренние помещения башни для туристов закрыты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/suumbike/kak_dobratsya.jpg" alt="Схема расположения башни в Кремле и пути подъезда" loading="lazy">
   </div>
</div>`
        },

//------------------------------------------Казанский кремль--------------------------------------------------------
        {
            id: 'kazanskii_kreml',
            title: 'Казанский кремль',
            image: '../../img/tatarstan/cards_culture/kazanskiy_kreml_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Казанский кремль</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сердце тысячелетней Казани</h2>
      <p class="modalBlock__description">
         Сердце тысячелетней Казани, где переплелись судьбы Востока и&nbsp;Запада.
      </p>
      <p class="modalBlock__description">
         Белокаменный ансамбль, возвышающийся на&nbsp;стрелке Волги и&nbsp;Казанки,&nbsp;&mdash; единственная в&nbsp;мире действующая татарская крепость, сегодня здесь располагается резиденция Президента Татарстана.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kazanskii_kreml/kazanskiy_kreml_1.jpg" alt="Панорама Казанского Кремля с высоты" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Летопись эпох в&nbsp;камне</h2>
      <p class="modalBlock__description">
         История Кремля читается в&nbsp;его стенах как летопись эпох: от&nbsp;древних булгарских городищ&nbsp;X века до&nbsp;каменных укреплений XVI&nbsp;столетия.
      </p>
      <p class="modalBlock__description">
         Из&nbsp;13&nbsp;первоначальных башен до&nbsp;наших дней сохранилось семь, каждая из&nbsp;которых хранит память о&nbsp;разных периодах&nbsp;&mdash; от&nbsp;Казанского ханства до&nbsp;имперской России.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kazanskii_kreml/kazanskiy_kreml_2.jpg" alt="Крепостные стены и башни Кремля" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Гармония религий и&nbsp;культур</h2>
      <p class="modalBlock__description">
         Уникальность Кремля&nbsp;&mdash; в&nbsp;гармоничном соседстве православных храмов и&nbsp;мусульманских мечетей.
      </p>
      <p class="modalBlock__description">
         Благовещенский собор, возведенный псковскими мастерами после взятия Казани Иваном Грозным, мирно сосуществует с&nbsp;великолепной мечетью Кул-Шариф, воссозданной в&nbsp;2005 году как символ духовного возрождения татарского народа.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kazanskii_kreml/kazanskiy_kreml_3.jpg" alt="Мечеть Кул-Шариф и Благовещенский собор" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музейный комплекс и&nbsp;статус ЮНЕСКО</h2>
      <p class="modalBlock__description">
         С&nbsp;2000 года Казанский Кремль носит статус объекта Всемирного наследия ЮНЕСКО, признающий его универсальную ценность как примера синтеза татарской и&nbsp;русской архитектурных традиций.
      </p>
      <p class="modalBlock__description">
         За&nbsp;крепостными стенами скрываются не&nbsp;только правительственные здания, но&nbsp;и&nbsp;уникальные музеи, где можно проследить всю многовековую историю города&nbsp;&mdash; от&nbsp;археологических находок древнего Булгара до&nbsp;современных выставочных пространств.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kazanskii_kreml/kazanskiy_kreml_4.jpg" alt="Музей естественной истории и другие музеи Кремля" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Казанского Кремля</h2>
      <p class="modalBlock__description">
         Казанский Кремль расположен в&nbsp;самом центре города и&nbsp;доступен разными способами.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;метро:</strong> Самый удобный способ&nbsp;&mdash; доехать до&nbsp;станции &laquo;Кремлевская&raquo;. Выход из&nbsp;метро находится в&nbsp;непосредственной близости от&nbsp;главного входа в&nbsp;Кремль.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> До&nbsp;остановки &laquo;Ул. Батурина&raquo; или &laquo;Центральный стадион&raquo; ходят многочисленные автобусы и&nbsp;троллейбусы. От&nbsp;этих остановок до&nbsp;входа в&nbsp;Кремль&nbsp;&mdash; 5-7 минут пешком.
      </p>
      <p class="modalBlock__description">
         <strong>Пешком:</strong> Из&nbsp;исторического центра (начало улицы Баумана) до&nbsp;Кремля можно дойти за&nbsp;10-15 минут по&nbsp;пешеходным улицам.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Вблизи Кремля есть несколько платных парковок. Бесплатную парковку найти сложно, особенно в&nbsp;выходные дни.
      </p>
      <p class="modalBlock__description">
         <strong>Часы работы:</strong> Территория Кремля открыта для посещения ежедневно с&nbsp;8:00 до&nbsp;22:00 (летом до&nbsp;23:00). Музеи работают по&nbsp;индивидуальному графику, который лучше уточнять заранее. Вход на&nbsp;территорию свободный.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/kazanskii_kreml/kak_dobratsya.jpg" alt="Схема проезда и расположение входов в Кремль" loading="lazy">
   </div>
</div>`
        },

//------------------------------------------Елабужское городище--------------------------------------------------------
        {
            id: 'elabuga_gorodiche',
            title: 'Елабужское городище',
            image: '../../img/tatarstan/cards_culture/elabuga_gorodiche_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Елабужское городище</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Последний свидетель домонгольской эпохи</h2>
      <p class="modalBlock__description">
         Каменная башня-страж на&nbsp;высоком берегу Камы&nbsp;&mdash; последний свидетель домонгольской эпохи Волжской Булгарии.
      </p>
      <p class="modalBlock__description">
         Второе название городища&nbsp;&mdash; &laquo;Чертово&raquo;, происхождение названия окутано легендами. По&nbsp;одной из&nbsp;них, на&nbsp;этом месте находилось языческое святилище, где змей-оракул&nbsp;&mdash; черт&nbsp;&mdash; предсказывал будущее, требуя за&nbsp;свои пророчества человеческие головы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/elabuzhskoe_gorodishe/elabuga_gorodiche_1.jpg" alt="Башня Елабужского городища на берегу Камы" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;финно-угров до&nbsp;волжских булгар</h2>
      <p class="modalBlock__description">
         Елабужское городище&nbsp;&mdash; древнейший архитектурный памятник Татарстана, возвышающийся в&nbsp;месте слияния рек Тоймы и&nbsp;Камы, хранит память о&nbsp;сменяющихся эпохах и&nbsp;культурах.
      </p>
      <p class="modalBlock__description">
         Каждый камень здесь дышит историей&nbsp;&mdash; от&nbsp;финно-угорских племен ананьинской культуры, основавших на&nbsp;этом мысу первое укрепленное поселение, до&nbsp;волжских булгар, превративших городище в&nbsp;X&ndash;XII веках в&nbsp;мощный торговый и&nbsp;религиозный центр.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/elabuzhskoe_gorodishe/elabuga_gorodiche_2.jpg" alt="Археологические находки и макет древней крепости" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крепость на&nbsp;Великом шелковом пути</h2>
      <p class="modalBlock__description">
         Именно булгары возвели каменно-деревянную крепость с&nbsp;квадратным основанием и&nbsp;круглыми башнями, используя стратегическое положение на&nbsp;пересечении водных путей для контроля над северной ветвью Великого шелкового пути.
      </p>
      <p class="modalBlock__description">
         История городища начинается с&nbsp;финно-угорского святилища, позже превращенного волжскими булгарами в&nbsp;крепость-мечеть&nbsp;&mdash; важный форпост на&nbsp;северной ветви Великого шелкового пути. Каменная цитадель с&nbsp;квадратным основанием и&nbsp;круглыми башнями стала символом распространения ислама в&nbsp;Прикамье, пока в&nbsp;XVII веке не&nbsp;уступила место православному Троицкому монастырю.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/elabuzhskoe_gorodishe/elabuga_gorodiche_3.jpg" alt="Схема Великого шелкового пути и расположение городища" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Возрождение и&nbsp;современность</h2>
      <p class="modalBlock__description">
         Судьба башни&nbsp;&mdash; история постоянного возрождения. После обрушения в&nbsp;1844 году ее&nbsp;восстановил елабужский купец Иван Шишкин&nbsp;&mdash; отец знаменитого художника, сохранив для потомков последний фрагмент древней крепости.
      </p>
      <p class="modalBlock__description">
         Сегодня отреставрированная башня стала местом паломничества туристов, а&nbsp;у&nbsp;ее&nbsp;подножия раскинулся парк с&nbsp;памятником булгарскому эмиру Ибрагиму бен Мухаммаду и&nbsp;Лестницей тысячелетия, ведущей к&nbsp;водным просторам.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/elabuzhskoe_gorodishe/elabuga_gorodiche_4.jpg" alt="Парк у башни и Лестница тысячелетия" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Елабужского городища</h2>
      <p class="modalBlock__description">
         Елабужское городище находится в&nbsp;черте города Елабуги, на&nbsp;высоком берегу Камы. Добраться можно несколькими способами.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Казани по&nbsp;новой скоростной трассе М-12. Время в&nbsp;пути&nbsp;&mdash; около 2,5&nbsp;часов. В&nbsp;Елабуге есть указатели к&nbsp;городищу.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Из&nbsp;Казани до&nbsp;Елабуги ходят несколько автобусов в&nbsp;день. Время в&nbsp;пути&nbsp;&mdash; около 3,5&nbsp;часов. От&nbsp;автовокзала Елабуги до&nbsp;городища можно дойти пешком (20-25&nbsp;минут) или доехать на&nbsp;местном автобусе/такси.
      </p>
      <p class="modalBlock__description">
         <strong>С&nbsp;экскурсией:</strong> Многие турагентства предлагают экскурсионные туры в&nbsp;Елабугу с&nbsp;посещением городища, музея-усадьбы Шишкина и&nbsp;других достопримечательностей.
      </p>
      <p class="modalBlock__description">
         Городище открыто для посещения круглый год. Лучшее время для визита&nbsp;&mdash; с&nbsp;мая по&nbsp;октябрь. Зимой виды с&nbsp;высокого берега на&nbsp;заснеженную Каму особенно живописны.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/elabuzhskoe_gorodishe/kak_dobratsya.jpg" alt="Карта проезда из Казани в Елабугу" loading="lazy">
   </div>
</div>`
        },

//------------------------------------------«Татар авылы»--------------------------------------------------------
        {
            id: 'tatar_avaly',
            title: '«Татар авылы»',
            image: '../../img/tatarstan/cards_culture/tatar_avaly_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Татар Авалы</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Этнографический музей под открытым небом</h2>
      <p class="modalBlock__description">
         Этнографический музей под открытым небом, расположившийся в&nbsp;живописной местности рядом со&nbsp;Свияжском.
      </p>
      <p class="modalBlock__description">
         Душистый татарский чай с&nbsp;хрустящим кыстыбыем, только что извлеченным из&nbsp;дровяной печи, станет настоящим праздником вкуса и&nbsp;дополнением к&nbsp;этнографическому путешествию.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/tatar_avaly/tatar_avaly_1.jpg" alt="Общий вид этнографического музея Татар Авалы" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Деревня столетней давности</h2>
      <p class="modalBlock__description">
         Здесь бережно воссоздана атмосфера татарской деревни столетней давности, где гости могут погрузиться в&nbsp;традиционный уклад жизни.
      </p>
      <p class="modalBlock__description">
         На&nbsp;территории музея собраны разные объекты сельской архитектуры: деревянная мельница военных лет, построенная женщинами и&nbsp;детьми, дом ткача с&nbsp;полным набором инструментов, кузница и&nbsp;традиционные жилища с&nbsp;характерной планировкой на&nbsp;мужскую и&nbsp;женскую половины.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/tatar_avaly/tatar_avaly_2.jpg" alt="Традиционные дома, мельница и кузница" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Живой музей и&nbsp;его создатель</h2>
      <p class="modalBlock__description">
         Гостей встречает сам основатель музея Дамир Абый, в&nbsp;прошлом&nbsp;&mdash; школьный учитель, в&nbsp;национальном костюме&nbsp;&mdash; с&nbsp;гармонью, песнями и&nbsp;искрометными шутками.
      </p>
      <p class="modalBlock__description">
         Посетители могут не&nbsp;только осмотреть экспонаты, но&nbsp;и&nbsp;примерить традиционную одежду, поучаствовать в&nbsp;мастер-классах по&nbsp;выпечке кыстыбыя в&nbsp;дровяной печи, а&nbsp;в&nbsp;зимнее время&nbsp;&mdash; прокатиться в&nbsp;татарских санях по&nbsp;хрустящему снегу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/tatar_avaly/tatar_avaly_3.jpg" alt="Основатель музея и гости в национальных костюмах" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сезонные праздники и&nbsp;кинематограф</h2>
      <p class="modalBlock__description">
         Музей оживает в&nbsp;зависимости от&nbsp;сезона: летом здесь проводят Сабантуй с&nbsp;национальными играми и&nbsp;песнями, зимой&nbsp;&mdash; организуют катание на&nbsp;лошадях.
      </p>
      <p class="modalBlock__description">
         Уникальность Татар Авылы в&nbsp;его аутентичности&nbsp;&mdash; именно здесь снимались эпизоды известного сериала &laquo;Зулейха открывает глаза&raquo; по&nbsp;роману Гузель Яхиной. Удобное расположение в&nbsp;10&nbsp;минутах езды от&nbsp;Свияжска делает музей идеальным дополнением к&nbsp;экскурсии на&nbsp;остров-град.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/tatar_avaly/tatar_avaly_4.jpg" alt="Празднование Сабантуя и съемки сериала" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;музея Татар Авалы</h2>
      <p class="modalBlock__description">
         Адрес: деревня Исаково. Музей находится всего в&nbsp;10&nbsp;минутах езды от&nbsp;Свияжска, что позволяет совместить посещение двух интересных объектов.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> По&nbsp;трассе М-7&nbsp;в сторону Москвы. После Свияжска свернуть по&nbsp;указателю на&nbsp;Исаково. Время в&nbsp;пути из&nbsp;Казани&nbsp;&mdash; около 45&nbsp;минут.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> На&nbsp;автобусе из&nbsp;Казани до&nbsp;остановки &laquo;Исаково&raquo;. Также можно сначала доехать до&nbsp;Свияжска, а&nbsp;оттуда взять такси до&nbsp;музея (около 10&nbsp;минут).
      </p>
      <p class="modalBlock__description">
         <strong>Совместно со&nbsp;Свияжском:</strong> Самый популярный вариант&nbsp;&mdash; организованная экскурсия или самостоятельная поездка, которая включает посещение Свияжска утром, а&nbsp;после обеда&nbsp;&mdash; визит в&nbsp;Татар Авалы.
      </p>
      <p class="modalBlock__description">
         Музей работает круглый год, но&nbsp;график лучше уточнять заранее. Здесь можно не&nbsp;только осмотреть экспозицию, но&nbsp;и&nbsp;пообедать традиционными татарскими блюдами, купить сувениры ручной работы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/tatar_avaly/kak_dobratsya.jpg" alt="Схема расположения музея относительно Свияжска и Казани" loading="lazy">
   </div>
</div>`
        },

//------------------------------------------Белая мечеть--------------------------------------------------------
        {
            id: 'belaya_mechet',
            title: 'Белая мечеть',
            image: '../../img/tatarstan/cards_culture/belaya_mechet_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Белая мечеть</h1>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Символ духовного возрождения в&nbsp;Болгаре</h2>
      <p class="modalBlock__description">
         Белая мечеть в&nbsp;Болгаре&nbsp;&mdash; архитектурный символ духовного возрождения, созданный в&nbsp;2012&nbsp;году, гармонично сочетает современные технологии с&nbsp;традициями волжско-татарского зодчества.
      </p>
      <p class="modalBlock__description">
         Совершенство пропорций и&nbsp;чистота линий сделали Белую мечеть не&nbsp;только духовным центром, но&nbsp;и&nbsp;архитектурной жемчужиной Татарстана, запечатленной на&nbsp;почтовой марке России в&nbsp;честь 1100-летия ислама в&nbsp;регионе.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/belaya_mechet/belaya_mechet_1.jpg" alt="Внешний вид Белой мечети в Болгаре" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архитектурный ансамбль и&nbsp;пропорции</h2>
      <p class="modalBlock__description">
         Белоснежная мечеть создана архитектором Сергеем Шакуровым. Архитектурный ансамбль образует строгое &laquo;каре&raquo; с&nbsp;центральным двором, где размещен зеркальный мраморный фонтан.
      </p>
      <p class="modalBlock__description">
         Доминантами комплекса стали основное здание мечети с&nbsp;17-метровым куполом и&nbsp;два симметричных минарета высотой 46,5&nbsp;м. Молельный зал площадью 180&nbsp;кв.&nbsp;м&nbsp;освещает впечатляющая люстра диаметром 25&nbsp;м.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/belaya_mechet/belaya_mechet_2.jpg" alt="Архитектурная схема и двор с фонтаном" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Итальянский мрамор и&nbsp;убранство</h2>
      <p class="modalBlock__description">
         Особую выразительность мечети придает итальянский белый мрамор&nbsp;&mdash; более 1,2&nbsp;тыс. тонн благородного камня создают эффект свечения в&nbsp;солнечную погоду и&nbsp;мягко меняют оттенки в&nbsp;зависимости от&nbsp;времени суток.
      </p>
      <p class="modalBlock__description">
         Стены украшены изящными барельефами с&nbsp;тюльпанами и&nbsp;арабской вязью, содержащей цитаты из&nbsp;Корана. Это сочетание современного минимализма и&nbsp;традиционных исламских орнаментов создает уникальную атмосферу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/belaya_mechet/belaya_mechet_3.jpg" alt="Детали из итальянского мрамора и барельефы" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Святыни и&nbsp;исторический контекст</h2>
      <p class="modalBlock__description">
         Мечеть хранит уникальные реликвии, включая волос пророка Мухаммада, и&nbsp;является частью масштабного исторического контекста Болгарского музея-заповедника.
      </p>
      <p class="modalBlock__description">
         Ее&nbsp;архитектурные формы, напоминающие святыни Медины, символизируют преемственность поколений и&nbsp;память о&nbsp;принятии ислама Волжской Булгарией в&nbsp;922&nbsp;году.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/belaya_mechet/belaya_mechet_4.jpg" alt="Интерьер молельного зала и святыни" loading="lazy">
   </div>
</div>
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Белой мечети в&nbsp;Болгаре</h2>
      <p class="modalBlock__description">
         Адрес: город Болгар, улица Кул Гали, 5. Белая мечеть находится в&nbsp;комплексе Болгарского музея-заповедника, рядом с&nbsp;историческим городищем.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Казани по&nbsp;трассе Р-239&nbsp;в сторону Ульяновска. Время в&nbsp;пути&nbsp;&mdash; около 2,5&nbsp;часов. В&nbsp;Болгаре есть указатели к&nbsp;музею-заповеднику и&nbsp;мечети.
      </p>
      <p class="modalBlock__description">
         <strong>По&nbsp;воде (в&nbsp;летний период):</strong> Из&nbsp;Казани на&nbsp;скоростном &laquo;Метеоре&raquo; по&nbsp;Волге. Время в&nbsp;пути&nbsp;&mdash; около 2,5&nbsp;часов. Это самый живописный маршрут, позволяющий увидеть волжские просторы.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автобусе:</strong> С&nbsp;Центрального автовокзала Казани регулярно ходят рейсовые автобусы до&nbsp;города Болгар. Время в&nbsp;пути&nbsp;&mdash; около 3&nbsp;часов.
      </p>
      <p class="modalBlock__description">
         <strong>Экскурсионные туры:</strong> Многие турагентства предлагают однодневные экскурсии в&nbsp;Болгар с&nbsp;посещением Белой мечети и&nbsp;Болгарского городища.
      </p>
      <p class="modalBlock__description">
         Белая мечеть открыта для посещения туристами (вне времени молитв). Для женщин при входе выдают платки и&nbsp;накидки. Фотографировать внутри разрешено без вспышки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/belaya_mechet/kak_dobratsya.jpg" alt="Карта расположения мечети в Болгарском комплексе" loading="lazy">
   </div>
</div>`
        }

    ],
//------------------------------------------Город--------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


    city: [
        {
            id: 'otdyh_10',
            title: 'Отдых',
            image: '../../img/tatarstan/cards_city/culture_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Отдых в&nbsp;Казани</h1>
</div>
<!-- Блок 1: Еда и рестораны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Еда и&nbsp;рестораны</h2>
      <p class="modalBlock__description">
         В&nbsp;татарской национальной кухне отразились особенности жизни народа, с&nbsp;древних времен занимавшегося земледелием, поэтому широко используются различные виды муки: ржаная, пшеничная, ячменная, овсяная, гороховая, гречневая. Мясные блюда готовятся из&nbsp;баранины, говядины и&nbsp;конины. В&nbsp;Казани обязательно попробуйте чак-чак (десерт из&nbsp;жареного теста с&nbsp;медом), плов и&nbsp;эчпочмак (пирожок с&nbsp;начинкой из&nbsp;мяса и&nbsp;лука).
      </p>
      <p class="modalBlock__description">
         Ресторан национальной кухни TATAR by&nbsp;Tubetey расположен в&nbsp;Казанском кремле. Также в&nbsp;кремле находится уютный ресторан &laquo;Чирэм&raquo; с&nbsp;современной подачей аутентичных татарских блюд. Ресторан &laquo;Татарская усадьба&raquo; предлагает разнообразные блюда татарской кухни в&nbsp;традиционном татарском интерьере.
      </p>
      <p class="modalBlock__description">
         Сетевой ресторан Porto Maltese предлагает богатый выбор морепродуктов. Стильный ресторан BOCO kitchen подойдет любителям итальянской кухни. Ресторан-клуб The Jungle расположен рядом с&nbsp;набережной озера Кабан. Один из&nbsp;лучших рестобаров России&nbsp;&mdash; &laquo;Сетка&raquo;, декларирует индивидуальный подход к&nbsp;запросам гостей и&nbsp;высочайшее качество блюд и&nbsp;напитков.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_1.jpg" alt="Татарские блюда: чак-чак, эчпочмак или интерьер ресторана TATAR by Tubetey" loading="lazy">
   </div>
</div>
<!-- Блок 2: Город в праздники -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Город в&nbsp;праздники</h2>
      <p class="modalBlock__description">
         Самобытная Казань занимает третье место по&nbsp;популярности у&nbsp;туристов после Москвы и&nbsp;Санкт-Петербурга. Всенародно любимый праздник Сабантуй (в&nbsp;переводе с&nbsp;татарского&nbsp;&mdash; &laquo;праздник плуга&raquo;) отмечается в&nbsp;первой половине июня с&nbsp;особым колоритом и&nbsp;размахом. Сабантуй знаменует наступление долгожданного лета. Празднования проходят на&nbsp;улицах, проводятся концерты, конкурсы и&nbsp;состязания.
      </p>
      <p class="modalBlock__description">
         В&nbsp;новогодние праздники в&nbsp;Казани для жителей и&nbsp;гостей города организуют массовые катания на&nbsp;коньках и&nbsp;санках, проводят концерты. Эпицентр праздника&nbsp;&mdash; главная новогодняя елка города около кремля. Самый большой каток под открытым небом&nbsp;&mdash; NEFIS, где можно отметить праздник на&nbsp;коньках.
      </p>
      <p class="modalBlock__description">
         День Республики в&nbsp;Татарстане отмечают 30&nbsp;августа. В&nbsp;этот день проводятся массовые мероприятия и&nbsp;проходят народные гулянья. Праздник Навруз символизирует начало нового года у&nbsp;тюркских и&nbsp;иранских народов. В&nbsp;этот день проходят концерты, конкурсы. Самая интересная площадка праздника&nbsp;&mdash; территория Казанского ипподрома.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_2.jpg" alt="Празднование Сабантуя в Казани или новогодние гулянья у Кремля" loading="lazy">
   </div>
</div>
<!-- Блок 3: Шопинг -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Шопинг</h2>
      <p class="modalBlock__description">
         Крупнейший торговый центр Казани&nbsp;&mdash; &laquo;МЕГА&raquo;. В&nbsp;нем представлено огромное количество брендов любой ценовой категории&nbsp;&mdash; в&nbsp;торговом центре более 130&nbsp;магазинов. В&nbsp;&laquo;МЕГЕ&raquo; можно покататься на&nbsp;катке, перекусить в&nbsp;одном из&nbsp;многочисленных кафе фудкорта.
      </p>
      <p class="modalBlock__description">
         В&nbsp;торговом центре Suvar Plaza на&nbsp;33&nbsp;тысячах квадратных метрах разместились 70&nbsp;магазинов, кафе, рестораны, кинотеатр &laquo;Алмаз Гранд Синема&raquo;. Казанский ГУМ находится на&nbsp;пересечении улиц Баумана и&nbsp;Пушкина. Главной торговой улицей города является пешеходная улица Баумана. В&nbsp;многочисленных магазинах можно купить элементы национального костюма на&nbsp;память о&nbsp;Казани.
      </p>
      <p class="modalBlock__description">
         Фабрика Алафузова, построенная в&nbsp;начале XVIII&nbsp;века, последние годы служит пристанищем художников и&nbsp;других творческих людей. По&nbsp;выходным здесь можно посетить блошиный рынок. На&nbsp;Московском рынке каждую осень проводится сельскохозяйственная ярмарка.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_3.jpg" alt="Торговый центр МЕГА Казань или пешеходная улица Баумана" loading="lazy">
   </div>
</div>
<!-- Блок 4: Для всей семьи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Для всей семьи</h2>
      <p class="modalBlock__description">
         В&nbsp;Аквапарке при гостинично-ресторанном комплексе &laquo;Ривьера&raquo; в&nbsp;любое время года можно попасть в&nbsp;жаркое лето. Здесь аттракционы на&nbsp;любой вкус, включая экстремальные горки. Казанский цирк был построен в&nbsp;1967 году и&nbsp;с&nbsp;тех пор служит центром притяжения и&nbsp;взрослых, и&nbsp;детей. Если вы&nbsp;любите природу и&nbsp;животных, обязательно загляните в&nbsp;Казанский зооботанический сад.
      </p>
      <p class="modalBlock__description">
         В&nbsp;парке Tiki Viki на&nbsp;площади 2000&nbsp;кв.&nbsp;м&nbsp;разместились 30&nbsp;аттракционов, лабиринты, батуты, скалодром. FUN-24&nbsp;&mdash; крупнейший крытый парк аттракционов в&nbsp;городе, взрослые могут посетить боулинг. Центральный парк культуры Казани, как и&nbsp;Парк культуры в&nbsp;Москве, назван именем Максима Горького.
      </p>
      <p class="modalBlock__description">
         В&nbsp;электрокартинге в&nbsp;ТРЦ KazanMall можно прокатиться на&nbsp;экологичных и&nbsp;резвых электрокарах по&nbsp;трассе протяженностью 420&nbsp;метров. Интересным будет посещение Казанского ипподрома, где предлагают покататься верхом на&nbsp;лошадях или в&nbsp;карете, а&nbsp;зимой в&nbsp;санях.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_4.jpg" alt="Аквапарк Ривьера в Казани или Казанский цирк" loading="lazy">
   </div>
</div>
<!-- Блок 5: Парки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Парки</h2>
      <p class="modalBlock__description">
         Из&nbsp;425&nbsp;га общей площади города Казани 276&nbsp;га занимают парковые зоны. На&nbsp;входе в&nbsp;парк Победы установлена стела и&nbsp;горит Вечный огонь. На&nbsp;монументе увековечены имена казанцев, погибших в&nbsp;Великую Отечественную войну. На&nbsp;Аллее военной техники представлены танки, другая бронетехника и&nbsp;вертолеты.
      </p>
      <p class="modalBlock__description">
         &laquo;Горкинско-Ометьевский Лес&raquo;&nbsp;&mdash; самый большой парк Казани. В&nbsp;2016 году он&nbsp;стал одной из&nbsp;достопримечательностей Казани&nbsp;&mdash; территорию леса облагородили и&nbsp;сделали удобной для прогулок, отдыха и&nbsp;занятий спортом. В&nbsp;Парке им. Урицкого можно прогуляться вокруг центрального озера.
      </p>
      <p class="modalBlock__description">
         Самый старый парк Казани&nbsp;&mdash; &laquo;Черное озеро&raquo;, расположен в&nbsp;историческом центре Казани. В&nbsp;нем регулярно проводятся различные мероприятия и&nbsp;городские праздники.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_5.jpg" alt="Парк Победы в Казани или Горкинско-Ометьевский лес" loading="lazy">
   </div>
</div>
<!-- Блок 6: Ночная жизнь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ночная жизнь</h2>
      <p class="modalBlock__description">
         RV&nbsp;CLUB&nbsp;&mdash; это дискотека 90-х и&nbsp;караоке-зал, расположенный в&nbsp;центре Казани. Здесь всегда царят веселье и&nbsp;непринужденная обстановка. Сетевой клуб &laquo;Максимилианс&raquo; за&nbsp;долгий период работы смог заслужить отличную репутацию. Это самое подходящее место для отдыха в&nbsp;большой компании: великолепный ресторан, концертная площадка, проводятся тематические вечеринки.
      </p>
      <p class="modalBlock__description">
         В&nbsp;баре-ресторане DOSKI каждый вечер играют музыканты, а&nbsp;большой танцпол никогда не&nbsp;пустует. Шоу-бар &laquo;Эндорфин&raquo; приглашает ценителей качественной музыки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_6.jpg" alt="Интерьер клуба Максимилианс или вечер в баре DOSKI" loading="lazy">
   </div>
</div>
<!-- Блок 7: СПОРТ -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Спорт</h2>
      <p class="modalBlock__description">
         Сегодня в&nbsp;Казани насчитывается свыше двух тысяч спортивных объектов&nbsp;&mdash; футбольных полей, волейбольных и&nbsp;теннисных кортов, плавательных бассейнов, спортивных комплексов. Один из&nbsp;крупнейших в&nbsp;России стадион &laquo;Ак&nbsp;Барс Арена&raquo; вместимостью 45&nbsp;000 зрителей принимал матчи чемпионата мира по&nbsp;футболу 2018&nbsp;года.
      </p>
      <p class="modalBlock__description">
         NEFIS&nbsp;&mdash; самый большой открытый каток в&nbsp;России, его площадь более 15&nbsp;тысяч&nbsp;кв.&nbsp;м. Из&nbsp;многочисленных спортивных объектов также необходимо выделить стадион &laquo;Центральный&raquo;, Дворец водных видов спорта, &laquo;Баскет-холл&raquo;, ледовый дворец спорта &laquo;Татнефть Арена&raquo;. Горожане любят посещать крупнейший в&nbsp;России Казанский ипподром.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_otdyh/otdyh_7.jpg" alt="Стадион Ак Барс Арена или ледовый дворец Татнефть Арена" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------------Бизнес-----------------------------------------------------------
        {
            id: 'business_10',
            title: 'Бизнес',
            image: '../../img/tatarstan/cards_city/bisness_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Бизнес в&nbsp;Казани</h1>
</div>
<!-- Блок 1: Бизнес -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Бизнес</h2>
      <p class="modalBlock__description">
         Казань&nbsp;&mdash; один из&nbsp;крупнейших промышленных городов России. Промышленный комплекс Казани представлен машиностроительной, химической и&nbsp;нефтехимической отраслями, легкой и&nbsp;пищевой промышленностью.
      </p>
      <p class="modalBlock__description">
         Ведущие промышленные предприятия Казани: КАПО им. С.П. Горбунова, где производятся самолеты КБ&nbsp;Туполева, Казанский вертолетный завод, Казанское моторостроительное ПО, &laquo;Казаньоргсинтез&raquo;, Казанский завод синтетического каучука. Международный выставочный центр &laquo;Казань Экспо&raquo; площадью более 55&nbsp;га был построен для проведения чемпионата мира WorldSkills-2019.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_busines/bisness_1.jpg" alt="Промышленная зона Казани или здание Казань Экспо" loading="lazy">
   </div>
</div>
<!-- Блок 2: Аэропорты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Аэропорты</h2>
      <p class="modalBlock__description">
         Международный аэропорт &laquo;Казань&raquo; имени Габдуллы Тукая&nbsp;&mdash; один из&nbsp;крупнейших аэропортов России, пятикратный обладатель звания &laquo;Лучший региональный аэропорт России и&nbsp;СНГ&raquo;.
      </p>
      <p class="modalBlock__description">
         Аэропорт несколько раз был удостоен национальной премии &laquo;Воздушные ворота России&raquo; и&nbsp;других наград. Авиаперевозки осуществляются по&nbsp;90&nbsp;международным и&nbsp;внутренним направлениям.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_busines/bisness_2.jpg" alt="Терминал международного аэропорта Казань имени Тукая" loading="lazy">
   </div>
</div>
<!-- Блок 3: Транспорт -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Транспорт</h2>
      <p class="modalBlock__description">
         Казань&nbsp;&mdash; один из&nbsp;крупнейших транспортных узлов России. В&nbsp;Казани есть речной вокзал. Через город проходит федеральная трасса М-7 &laquo;Волга&raquo;.
      </p>
      <p class="modalBlock__description">
         Казань&nbsp;&mdash; город-миллионник и&nbsp;столица Республики Татарстан. Развитая сеть общественного транспорта ежегодно перевозит более 250 миллионов пассажиров. В&nbsp;Казани функционирует четыре вида внутригородского транспорта: автобусы, троллейбусы, трамваи и&nbsp;метро. Автобусная сеть насчитывает 56&nbsp;маршрутов. Открытие Казанского метрополитена состоялось в&nbsp;2005&nbsp;году. Центральная линия метро включает 11&nbsp;станций.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_busines/bisness_3.jpg" alt="Станция Казанского метрополитена или речной вокзал" loading="lazy">
   </div>
</div>
<!-- Блок 4: Отели -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Отели</h2>
      <p class="modalBlock__description">
         Казань предлагает множество вариантов размещения для любого бюджета. Гостиница &laquo;Татарская усадьба&raquo; расположена недалеко от&nbsp;Казанского кремля и&nbsp;является историческим памятником. В&nbsp;гостинице большие номера с&nbsp;отделкой в&nbsp;национальном татарском стиле. Роскошный отель Korston Royal предлагает просторные номера, спа-салон и&nbsp;несколько ресторанов.
      </p>
      <p class="modalBlock__description">
         Стильный Mirage Hotel находится в&nbsp;центре города, в&nbsp;пешей доступности от&nbsp;главных достопримечательностей Казани. Из&nbsp;окон номеров открывается отличный вид на&nbsp;город. Пятизвездочный отель Kazan Palace by&nbsp;Tasigo является одним из&nbsp;лучших в&nbsp;Казани. Великолепные номера выполнены в&nbsp;индивидуальном дизайнерском стиле.
      </p>
      <p class="modalBlock__description">
         Исторический отель &laquo;Шаляпин Палас&raquo; расположен в&nbsp;здании XIX&nbsp;века. К&nbsp;услугам гостей элегантные номера и&nbsp;ресторан татарской кухни. Четырехзвездочный отель &laquo;Джузеппе&raquo; находится в&nbsp;100 метрах от&nbsp;Казанского кремля. Отель оформлен в&nbsp;итальянском стиле и&nbsp;предлагает просторные и&nbsp;комфортабельные номера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_busines/bisness_4.jpg" alt="Интерьер отеля Kazan Palace by Tasigo или фасад гостиницы Татарская усадьба" loading="lazy">
   </div>
</div>`
        },
//--------------------------------------------Культура-----------------------------------------------------------

        {
            id: 'culture_10',
            title: 'Культура',
            image: '../../img/tatarstan/cards_city/otdyh_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Культура в&nbsp;Казани</h1>
</div>
<!-- Блок 1: Исторические кварталы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Исторические кварталы</h2>
      <p class="modalBlock__description">
         Казань богата архитектурными памятниками, представляющими разные периоды истории казанского народа. Визитной карточкой города является Казанский Кремль. В&nbsp;XII веке Казанский кремль был дальней крепостью, охранявшей границу Волжской Булгарии. Одна из&nbsp;достопримечательностей кремля&nbsp;&mdash; 58-метровая &laquo;падающая&raquo; башня Сююмбике. Башня была построена в&nbsp;XVIII веке в&nbsp;качестве дозорной. Из-за спешки в&nbsp;строительстве были допущены просчеты, и&nbsp;в&nbsp;наши дни башня Сююмбике имеет наклон почти два метра.
      </p>
      <p class="modalBlock__description">
         Казань&nbsp;&mdash; многонациональный город, где вот уже более 450 лет мирно соседствуют ислам и&nbsp;христианство. На&nbsp;территории кремля находится мечеть Кул-Шариф, жемчужина казанской архитектуры. По&nbsp;соседству с&nbsp;мечетью расположился Благовещенский собор. Собор был воздвигнут по&nbsp;указу Ивана Грозного сразу после взятия Казани.
      </p>
      <p class="modalBlock__description">
         Казанский федеральный университет был основан в&nbsp;1804 году по&nbsp;указу Александра I. Учебные корпуса Университета&nbsp;&mdash; яркий пример архитектуры XIX&nbsp;века. Более двухсот лет над городом возвышается самый красивый храм Казани&nbsp;&mdash; Петропавловский собор, высота которого 52&nbsp;метра.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_culture/culture_1.jpg" alt="Казанский Кремль с мечетью Кул-Шариф и башней Сююмбике" loading="lazy">
   </div>
</div>
<!-- Блок 2: Театры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Театры</h2>
      <p class="modalBlock__description">
         Татарский государственный академический театр оперы и&nbsp;балета&nbsp;им. Мусы Джалиля&nbsp;&mdash; один из&nbsp;старейших театров Казани.
      </p>
      <p class="modalBlock__description">
         Открытие Татарской государственной филармонии имени Габдуллы Тукая состоялось в&nbsp;1937&nbsp;г.
      </p>
      <p class="modalBlock__description">
         Татарский государственный театр драмы и&nbsp;комедии был основан в&nbsp;1933&nbsp;г. классиком татарской литературы Каримом Тинчуриным и&nbsp;в&nbsp;настоящее время носит его имя.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_culture/culture_2.jpg" alt="Татарский театр оперы и балета им. Джалиля или здание филармонии им. Тукая" loading="lazy">
   </div>
</div>
<!-- Блок 3: Музеи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музеи</h2>
      <p class="modalBlock__description">
         Благодаря представленным в&nbsp;Национальном музее Республики Татарстан экспонатам можно ознакомиться со&nbsp;всеми периодами развития Казанской земли. В&nbsp;коллекции музея&nbsp;&mdash; артефакты Ананьинских могильников, Булгарская коллекция А.Ф. Лихачева, предметы эпохи Казанского ханства, древние манускрипты.
      </p>
      <p class="modalBlock__description">
         Государственный музей изобразительных искусств Республики Татарстан расположен в&nbsp;особняке начала XX&nbsp;века. В&nbsp;музее представлена древнерусская живопись, картины И.&nbsp;Шишкина, В. Серова, И.&nbsp;Айвазовского, В. Поленова, Д.&nbsp;Левицкого, И. Репина. А&nbsp;также в&nbsp;музее хранится собрание графики европейских художников.
      </p>
      <p class="modalBlock__description">
         Музей естественной истории Татарстана поделен на&nbsp;тематические залы. Здесь можно посмотреть коллекции метеоритов, минералов, окаменелые остатки первых живых существ планеты, скелеты динозавров. Один из&nbsp;известнейших музеев Казани&nbsp;&mdash; Дом-музей В.И. Ленина, находящийся в&nbsp;бывшем флигеле дома Орловых, построенном в&nbsp;1880&nbsp;г.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_culture/culture_3.jpg" alt="Экспозиция Национального музея Татарстана или Музей естественной истории" loading="lazy">
   </div>
</div>
<!-- Блок 4: Окрестности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Окрестности</h2>
      <p class="modalBlock__description">
         Раифский Богородицкий монастырь возвели в&nbsp;середине XVII века на&nbsp;месте скита монаха-отшельника Филарета. Этот красивый монастырь расположен недалеко от&nbsp;Казани в&nbsp;лесной местности с&nbsp;потрясающим озером и&nbsp;пешеходными тропами. Посещение Раифского монастыря можно совместить с&nbsp;поездкой в&nbsp;Свияжск.
      </p>
      <p class="modalBlock__description">
         Деревянная крепость на&nbsp;острове Свияжск была построена во&nbsp;времена Ивана Грозного. Наиболее известная достопримечательность острова&nbsp;&mdash; Богородице-Успенский монастырь, основанный в&nbsp;1555&nbsp;году. Волжско-Камский заповедник состоит из&nbsp;двух участков: Раифского и&nbsp;Саралинского. Посетить можно только Раифский участок, где расположены дендрарий и&nbsp;музей заповедной природы.
      </p>
      <p class="modalBlock__description">
         Город Болгар был построен в&nbsp;X&nbsp;веке. Большой интерес для любителей истории представляет старое городище, где сохранились исторические памятники: Черная палата, Соборная мечеть, Ханская усыпальница, мавзолеи и&nbsp;другие. Юрьевская пещера в&nbsp;Богородских горах&nbsp;&mdash; самая большая пещера в&nbsp;Татарстане. Голубые озера включают три водоема: Большое Голубое, Малое Голубое и&nbsp;Проточное озера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/tatarstan/cards_modal/city_culture/culture_4.jpg" alt="Раифский монастырь или остров-град Свияжск" loading="lazy">
   </div>
</div>`
        }
    ]

};

window.tatarstanData = tatarstanData;
