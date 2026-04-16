// ============================================
// ДАННЫЕ КАРТОЧЕК ГОРОДА САНКТ ПЕТЕРБУРГА
// ============================================

const stpetersburgData = {

//-------------------------------------------------Отдых------------------------------------------
    city: [
        {
            id: 'otdyh_12',
            title: 'Отдых',
            image: '../../img/stpetersburg/cards_city/otdyh_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Отдых в&nbsp;Санкт-Петербурге</h1>
</div>
<!-- Блок 1: Еда и рестораны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Еда и&nbsp;рестораны</h2>
      <p class="modalBlock__description">
         Внутри исторического величия одного из&nbsp;главных туристических городов страны расположены настоящие гастрономические сокровища. Санкт-Петербург давно является востребованной площадкой для экспериментов и&nbsp;развития поварского искусства.
      </p>
      <p class="modalBlock__description">
         Начните с&nbsp;ресторана аристократической русской кухни &laquo;Палкинъ&raquo;, прославляющего северную столицу отменными явствами уже более 120&nbsp;лет. Великолепие локации отмечено французским рейтингом La&nbsp;Liste.
      </p>
      <p class="modalBlock__description">
         Насладиться шедеврами европейской и&nbsp;азиатской кухни можно в&nbsp;&laquo;Мансарде&raquo;&nbsp;&mdash; самом известном видовом ресторане с&nbsp;видом на&nbsp;Исаакиевский собор. Любителей вкусной еды не&nbsp;оставят равнодушными городские гастропространства: Василеостровский и&nbsp;Московский рынки, Balagan на&nbsp;Петроградской стороне и&nbsp;самый большой в&nbsp;Европе Vokzal 1853.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_1.jpg" alt="Интерьер ресторана Палкинъ или панорамный вид из ресторана Мансарда" loading="lazy">
   </div>
</div>
<!-- Блок 2: Город в праздники -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Город в&nbsp;праздники</h2>
      <p class="modalBlock__description">
         Санкт-Петербург не&nbsp;нуждается в&nbsp;дополнительном декоре, городской ансамбль прекрасен и&nbsp;самодостаточен. Путешествие в&nbsp;северную столицу в&nbsp;любое время года имеет множество вдохновляющих причин и&nbsp;порадует разнообразием активностей.
      </p>
      <p class="modalBlock__description">
         В&nbsp;зимнее время насладитесь обилием рождественских ярмарок, прогулками по&nbsp;заснеженным паркам и&nbsp;гастрономическими приключениями в&nbsp;лучших ресторанах города.
      </p>
      <p class="modalBlock__description">
         Санкт-Петербург летом&nbsp;&mdash; это традиционная романтика белых ночей, разводные мосты и&nbsp;прогулки на&nbsp;катере по&nbsp;каналам. Череду фестивалей открывает День города на&nbsp;Дворцовой площади, а&nbsp;подводит итог праздник выпускников &laquo;Алые паруса&raquo; с&nbsp;грандиозным светопиротехническим шоу на&nbsp;Неве.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_2.jpg" alt="Праздник Алые паруса на Неве или рождественская ярмарка в Петербурге" loading="lazy">
   </div>
</div>
<!-- Блок 3: Шопинг -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Шопинг</h2>
      <p class="modalBlock__description">
         ДЛТ&nbsp;&mdash; Дом Ленинградской Торговли&nbsp;&mdash; старейший универмаг Санкт-Петербурга, памятник эпохи модерн, а&nbsp;также главный department store города и&nbsp;модный центр международного класса с&nbsp;расширенным выбором товаров и&nbsp;высоким уровнем сервиса.
      </p>
      <p class="modalBlock__description">
         Здание ДЛТ находится в&nbsp;историческом центре в&nbsp;пяти минутах ходьбы от&nbsp;храма Спаса на&nbsp;Крови, Казанского собора и&nbsp;Эрмитажа. Это 5&nbsp;этажей товаров от&nbsp;ювелирных украшений мировых брендов до&nbsp;традиционных русских сувениров.
      </p>
      <p class="modalBlock__description">
         Построенный в&nbsp;1907 году универмаг Au&nbsp;Pont Rouge вновь открылся в&nbsp;2015-м и&nbsp;предлагает лучший выбор нишевых и&nbsp;минималистичных брендов. Любителям просторных шопинг-моллов стоит посетить &laquo;Невский центр&raquo;, &laquo;Галерею&raquo; и&nbsp;&laquo;Пассаж&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_3.jpg" alt="Фасад универмага ДЛТ или интерьер Au Pont Rouge" loading="lazy">
   </div>
</div>
<!-- Блок 4: Для всей семьи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Для всей семьи</h2>
      <p class="modalBlock__description">
         Город предлагает много мест, где можно провести время вместе с&nbsp;детьми. Это и&nbsp;Большой Санкт-Петербургский государственный цирк&nbsp;&mdash; первый каменный цирк в&nbsp;России, и&nbsp;созданный на&nbsp;основе царского зверинца зоопарк у&nbsp;Петропавловской крепости.
      </p>
      <p class="modalBlock__description">
         Интерес вызовет и&nbsp;посещение Зоологического музея, одного из&nbsp;крупнейших в&nbsp;Европе. И&nbsp;конечно, нельзя не&nbsp;посетить шоу-музей &laquo;Гранд Макет Россия&raquo;, удивительный Музей Воды и&nbsp;захватывающий музей РЖД.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_4.jpg" alt="Зоопарк Петербурга или экспозиция музея Гранд Макет Россия" loading="lazy">
   </div>
</div>
<!-- Блок 5: Тематические парки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Тематические парки</h2>
      <p class="modalBlock__description">
         На&nbsp;Крестовском острове работает современный парк аттракционов &laquo;Диво-остров&raquo;, любителей водных развлечений ждет аквапарк &laquo;Питерлэнд&raquo;. Если хотите совместить приятное с&nbsp;полезным и&nbsp;подготовить детей к&nbsp;взрослой жизни, к&nbsp;вашим услугам тематические парки профессий &laquo;КидБург&raquo;.
      </p>
      <p class="modalBlock__description">
         Ну&nbsp;а&nbsp;самых смелых ждут на&nbsp;Приморском шоссе в&nbsp;веревочном парке Tree to&nbsp;Tree.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_5.jpg" alt="Аттракционы в парке Диво-остров или дети в парке профессий КидБург" loading="lazy">
   </div>
</div>
<!-- Блок 6: Ночная жизнь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ночная жизнь</h2>
      <p class="modalBlock__description">
         Приоткрыть двери в&nbsp;шумную ночную жизнь самого аутентичного города страны поможет один из&nbsp;старейших андеграундных клубов города Fish Fabrique. Локация, основанная в&nbsp;1994&nbsp;году, предлагает коктейли под колоритную альтернативную музыку.
      </p>
      <p class="modalBlock__description">
         Всегда открыт к&nbsp;посещению известный питерский Nebar&nbsp;&mdash; классический ресторан, который с&nbsp;наступлением темноты превращается в&nbsp;шумный танцпол. Также загляните в&nbsp;центр Грибоедов&nbsp;&mdash; один из&nbsp;самых популярных ночных клубов с&nbsp;террасой на&nbsp;крыше.
      </p>
      <p class="modalBlock__description">
         Для увлекательного бар-хоппинга подойдут стильный камерный Apotheke Bar с&nbsp;концепцией без меню, а&nbsp;также кабаре Шум с&nbsp;большим каталогом лучших вин России, Грузии и&nbsp;Армении.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_6.jpg" alt="Интерьер клуба Fish Fabrique или вид с террасы центра Грибоедов" loading="lazy">
   </div>
</div>
<!-- Блок 7: СПОРТ -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">СПОРТ</h2>
      <p class="modalBlock__description">
         Город может похвастаться солидной спортивной инфраструктурой, включающей несколько футбольных стадионов, Ледовый дворец, СК&nbsp;&laquo;Юбилейный&raquo;, КСК &laquo;Сибур Арена&raquo;, гребной канал, яхт-клуб в&nbsp;Галерной гавани.
      </p>
      <p class="modalBlock__description">
         Здесь регулярно проводятся крупные соревнования, в&nbsp;том числе и&nbsp;международные, такие как теннисный турнир St. Petersburg Open или матчи чемпионата мира по&nbsp;хоккею.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_otdyh/otdyh_7.jpg" alt="Ледовый дворец Петербурга или теннисный матч на St. Petersburg Open" loading="lazy">
   </div>
</div>`
        },

//-------------------------------------------------Бизнес------------------------------------------

        {
            id: 'business_12',
            title: 'Бизнес',
            image: '../../img/stpetersburg/cards_city/bisness_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Бизнес в&nbsp;Санкт-Петербурге</h1>
</div>
<!-- Блок 1: Бизнес -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Бизнес</h2>
      <p class="modalBlock__description">
         Санкт-Петербург&nbsp;&mdash; второй по&nbsp;значимости город России. Здесь расположено 700 крупных и&nbsp;средних предприятий. Основные отрасли&nbsp;&mdash; судостроение, машиностроение, черная и&nbsp;цветная металлургия, пищевая промышленность.
      </p>
      <p class="modalBlock__description">
         Так как исторический центр Санкт-Петербурга входит в&nbsp;список объектов всемирного наследия ЮНЕСКО, туризм является важнейшей статьей доходов городского бюджета. Ежегодно в&nbsp;городе проводится Петербургский международный экономический форум.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_bisnes/bisness_1.jpg" alt="Панорама делового центра Петербурга или Петербургский международный экономический форум" loading="lazy">
   </div>
</div>
<!-- Блок 2: Выставочные центры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Выставочные центры</h2>
      <p class="modalBlock__description">
         В&nbsp;городе действует несколько крупных площадок, на&nbsp;которых проходят масштабные выставки мирового уровня. В&nbsp;самом сердце Северной столицы расположен ЦВЗ &laquo;Манеж&raquo;.
      </p>
      <p class="modalBlock__description">
         А&nbsp;на&nbsp;Пулковских высотах разместился самый современный конгрессно-выставочный центр&nbsp;&mdash; &laquo;Экспофорум&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_bisnes/bisness_2.jpg" alt="Здание ЦВЗ Манеж или павильоны Экспофорума" loading="lazy">
   </div>
</div>
<!-- Блок 3: Транспорт -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Транспорт</h2>
      <p class="modalBlock__description">
         Петербург знаменит трамваями и&nbsp;занимает четвертое место в&nbsp;мире по&nbsp;протяженности трамвайных путей. Кроме того, в&nbsp;городе пять железнодорожных вокзалов и&nbsp;пять линий метро (на&nbsp;некоторых станциях действует бесплатный Wi-Fi).
      </p>
      <p class="modalBlock__description">
         Для наземного городского транспорта во&nbsp;многих районах выделены специальные полосы движения. Лидирующую позицию занимает сервис такси от&nbsp;компании Яндекс. Отдельная гордость города&nbsp;&mdash; морской порт, принимающий круизные, паромные и&nbsp;грузовые суда.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_bisnes/bisness_3.jpg" alt="Трамвай на улицах Петербурга или панорама Морского порта" loading="lazy">
   </div>
</div>
<!-- Блок 4: Аэропорты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Аэропорты</h2>
      <p class="modalBlock__description">
         Международный аэропорт Пулково расположен в&nbsp;20&nbsp;километрах к&nbsp;югу от&nbsp;Санкт-Петербурга. В&nbsp;2025 году компания &laquo;Воздушные Ворота Северной Столицы&raquo; признана одним из&nbsp;лучших аэропортов России и&nbsp;отмечена номинацией &laquo;Лучший аэропорт года среди городов федерального значения&raquo; (III&nbsp;премия), а&nbsp;также отмечен наградой в&nbsp;номинации &laquo;Аэропорт года&raquo; (группа&nbsp;1) в&nbsp;рамках премии &laquo;Крылья России&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_bisnes/bisness_4.jpg" alt="Современный терминал аэропорта Пулково" loading="lazy">
   </div>
</div>
<!-- Блок 5: Отели -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Отели</h2>
      <p class="modalBlock__description">
         Старейший отель города&nbsp;&mdash; Гранд Отель Европа, объект культурного наследия России регионального значения,&nbsp;&mdash; каждой своей деталью напоминает о&nbsp;роскоши имперского Петербурга. Другой исторический отель, &laquo;Астория&raquo;, расположенный рядом с&nbsp;Исаакиевским собором, также старается не&nbsp;отставать в&nbsp;элегантности и&nbsp;комфорте.
      </p>
      <p class="modalBlock__description">
         В&nbsp;квартале отсюда находится лучший дизайнерский отель города&nbsp;&mdash; SO&nbsp;Sofitel c&nbsp;прекрасным спа-центром. Moika&nbsp;22 Kempinski занимает самое выгодное положение&nbsp;&mdash; напротив Эрмитажа и&nbsp;Дворцовой площади. Лучший вид (и&nbsp;чудесная кухня)&nbsp;&mdash; в&nbsp;его панорамном ресторане &laquo;Бельвью Брассери&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_bisnes/bisness_5.jpg" alt="Фасад Гранд Отеля Европа или вид из номера отеля с видом на Эрмитаж" loading="lazy">
   </div>
</div>`
        },

//-------------------------------------------------Культура------------------------------------------

        {
            id: 'culture_12',
            title: 'Культура',
            image: '../../img/stpetersburg/cards_city/culture_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Культура в&nbsp;Санкт-Петербурге</h1>
</div>
<!-- Блок 1: Исторические кварталы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Исторические кварталы</h2>
      <p class="modalBlock__description">
         Санкт-Петербург&nbsp;&mdash; город, строившийся по&nbsp;строгому плану, под неусыпным личным контролем Петра I. Прямые улицы, расположенные перпендикулярно друг к&nbsp;другу, широкие проспекты, площади и&nbsp;протяженные набережные&nbsp;&mdash; основная черта Северной столицы.
      </p>
      <p class="modalBlock__description">
         В&nbsp;1990 году исторический центр города был включен в&nbsp;список объектов Всемирного наследия ЮНЕСКО. Лучший маршрут пешком: пройти по&nbsp;Невскому до&nbsp;Адмиралтейства, по&nbsp;пути можно полюбоваться панорамой города со&nbsp;смотровой площадки Исаакиевского собора.
      </p>
      <p class="modalBlock__description">
         Затем перейти на&nbsp;Васильевский остров и&nbsp;завершить прогулку на&nbsp;Петроградской стороне. Другие обязательные пункты экскурсии: зайти в&nbsp;Летний сад, посмотреть на&nbsp;здание Смольного института, пройтись по&nbsp;набережной Мойки с&nbsp;дворцами Строгановых, Юсуповых и&nbsp;Разумовского.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_culture/culture_1.jpg" alt="Вид на Невский проспект или набережную Мойки с историческими зданиями" loading="lazy">
   </div>
</div>
<!-- Блок 2: Искусство -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Искусство</h2>
      <p class="modalBlock__description">
         Петербург&nbsp;&mdash; это не&nbsp;только роскошный Эрмитаж, но&nbsp;десятки разножанровых музеев на&nbsp;любой вкус. От&nbsp;классических до&nbsp;самых нестандартных. Среди них изысканный музей Фаберже, музей прикладного искусства в&nbsp;академии Штиглица и&nbsp;&laquo;Эрарта&raquo; с&nbsp;её&nbsp;богатой коллекцией работ современных авторов.
      </p>
      <p class="modalBlock__description">
         Нонконформисты лучше всего представлены в&nbsp;KGallery. Еще одна точка для любителей современного искусства&nbsp;&mdash; галерея Марины Гисич.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_culture/culture_2.jpg" alt="Экспонат музея Фаберже или выставка в галерее Эрарта" loading="lazy">
   </div>
</div>
<!-- Блок 3: Театры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Театры</h2>
      <p class="modalBlock__description">
         Ездить на&nbsp;премьеру в&nbsp;Петербург считается хорошим тоном даже для москвичей. Регулярно радуют премьерами императорские театры: на&nbsp;старой сцене Мариинского театра лучше смотреть балет, на&nbsp;новой&nbsp;&mdash; прекрасные оперы.
      </p>
      <p class="modalBlock__description">
         Обновленный Михайловский под руководством Владимира Кехмана приобрел несколько балетных звезд мирового масштаба, и&nbsp;здесь постоянный аншлаг.
      </p>
      <p class="modalBlock__description">
         Александринский привлекает любителей драматического искусства, кроме того, прекрасный репертуар ждет поклонников жанра в&nbsp;БДТ и&nbsp;Малом драматическом театре&nbsp;&mdash; Театре Европы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_culture/culture_3.jpg" alt="Зал Мариинского театра или фасад Александринского театра" loading="lazy">
   </div>
</div>
<!-- Блок 4: Знаменитые архитектурные сооружения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Знаменитые архитектурные сооружения</h2>
      <p class="modalBlock__description">
         Архитектурный ансамбль Петербурга&nbsp;&mdash; один из&nbsp;самых красивых в&nbsp;мире. Петровское барокко (Петропавловская крепость, Кунсткамера) сменяет елизаветинское барокко&nbsp;&mdash; Зимний дворец, Смольный монастырь, Никольский морской собор.
      </p>
      <p class="modalBlock__description">
         Адмиралтейство, Михайловский замок, Таврический дворец, Большой гостиный двор построены в&nbsp;стиле классицизма. Визитной карточкой города стали Александро-Невская лавра, Казанский собор, дворец Белосельских-Белозерских.
      </p>
      <p class="modalBlock__description">
         Для того, чтобы полюбоваться на&nbsp;город с&nbsp;высоты птичьего полёта, поднимитесь на&nbsp;самую популярную площадку&nbsp;&mdash; колоннаду Исаакиевского собора. Также для посещений открыта колокольня Владимирского собора, Думская башня на&nbsp;Невском проспекте и&nbsp;смотровая площадка в&nbsp;креативном пространстве &laquo;Бертгольд-Центр&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_culture/culture_4.jpg" alt="Колоннада Исаакиевского собора или панорама Петропавловской крепости" loading="lazy">
   </div>
</div>
<!-- Блок 5: Музеи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музеи</h2>
      <p class="modalBlock__description">
         В&nbsp;Санкт-Петербурге более 200&nbsp;музеев. Собрание редкостей, или Кунсткамера,&nbsp;&mdash; первый общедоступный музей в&nbsp;России. Комплекс Эрмитажа занимает пять зданий, расположенных вдоль Невы, а&nbsp;также включает в&nbsp;себя Меншиковский дворец, здание биржи на&nbsp;Васильевском острове и&nbsp;музей Императорского фарфора.
      </p>
      <p class="modalBlock__description">
         В&nbsp;городе много литературных музеев&nbsp;&mdash; мемориальная квартира Пушкина, Анны Ахматовой в&nbsp;Фонтанном доме, музей-квартира Бродского. О&nbsp;славе российского флота расскажут в&nbsp;Центральном военно-морском музее.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_culture/culture_5.jpg" alt="Залы Государственного Эрмитажа или экспозиция Кунсткамеры" loading="lazy">
   </div>
</div>
<!-- Блок 6: Окрестности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Окрестности</h2>
      <p class="modalBlock__description">
         Вокруг Петербурга рассыпано целое созвездие настоящих царских дворцов, и&nbsp;каждый из&nbsp;них по&nbsp;сей день поражает. В&nbsp;Петергофе можно посетить парк Александрия и&nbsp;дворец &laquo;Коттедж&raquo; или добраться до&nbsp;парка Сергиевка с&nbsp;живописным дворцом Лейхтенбергских.
      </p>
      <p class="modalBlock__description">
         Отличным вариантом для загородной прогулки станет Кронштадт с&nbsp;музейно-историческим парком &laquo;Остров Фортов&raquo; и&nbsp;богатым выбором активностей для детей и&nbsp;взрослых.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/stpetersburg/cards_modal/city_culture/culture_6.jpg" alt="Фонтаны Петергофа или вид на Кронштадт с фортами" loading="lazy">
   </div>
</div>`
        }
    ]

};

window.stpetersburgData = stpetersburgData;
