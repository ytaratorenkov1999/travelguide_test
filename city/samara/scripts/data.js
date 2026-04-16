// ============================================
// ДАННЫЕ КАРТОЧЕК САМАРСКОЙ ОБЛАСТИ
// ============================================

const samaraData = {
//---------------------------------Точки притяжения региона-------------------------------------------------------


    attractions: [
        {
            id: 'samarskaya_luka',
            title: '«Самарская Лука»',
            image: '../../img/samara/cards_tochki/samarskaya_luka_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Национальный парк &laquo;Самарская лука&raquo;</h1>
</div>
<!-- Блок 1: Где Волга рисует круг -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Где Волга рисует круг</h2>
      <p class="modalBlock__description">
         Охраняемая территория на&nbsp;одноименном полуострове, вокруг которого Волга делает свою самую длинную и&nbsp;почти идеально круглую излучину. По&nbsp;территории нацпарка проходит экотропа РГО на&nbsp;Волге&nbsp;&mdash; живописный маршрут, подходящий туристам с&nbsp;любым уровнем подготовки.
      </p>
      <p class="modalBlock__description">
         Представьте себе место, где можно за&nbsp;один день прогуляться по&nbsp;сибирскому сосновому бору, подняться на&nbsp;древнюю гору и&nbsp;выйти на&nbsp;степной простор с&nbsp;ковылем. Именно такое разнообразие ландшафтов делает Самарскую Луку уникальной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_1.jpg" alt="Панорама Самарской Луки с высоты, излучина Волги" loading="lazy">
   </div>
</div>
<!-- Блок 2: Сердце парка — Жигулевские горы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сердце парка&nbsp;&mdash; Жигулевские горы</h2>
      <p class="modalBlock__description">
         Сердце нацпарка&nbsp;&mdash; это Жигулевские горы, древний тектонический массив, чье происхождение&nbsp;&mdash; загадка для равнинного Поволжья. Это не&nbsp;просто холмы: здесь можно заметить причудливые скальные выходы известняка и&nbsp;доломита, хранящие окаменелости древних организмов.
      </p>
      <p class="modalBlock__description">
         С&nbsp;вершин, например, с&nbsp;легендарного утеса Сокол (на&nbsp;который, по&nbsp;преданию, поднимался Петр&nbsp;I), открываются захватывающие панорамы на&nbsp;Волгу, острова, леса и&nbsp;деревни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_2.jpg" alt="Жигулевские горы и вид с утеса Сокол" loading="lazy">
   </div>
</div>
<!-- Блок 3: Царство биологического разнообразия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Царство биологического разнообразия</h2>
      <p class="modalBlock__description">
         Весной склоны покрываются сиренево-лиловым ковром крокусов, летом в&nbsp;дубравах царит прохлада. Это место невероятного биологического разнообразия: здесь ученые насчитывают более 1300 видов растений.
      </p>
      <p class="modalBlock__description">
         Среди них есть настоящие живые реликты, например, уникальный молочай жигулёвский, больше нигде в&nbsp;мире не&nbsp;встречающийся. В&nbsp;лесах можно встретить косулю или услышать стук дятла.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_3.jpg" alt="Цветущие крокусы, реликтовые растения и животные парка" loading="lazy">
   </div>
</div>
<!-- Блок 4: Маршруты на любой вкус -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Маршруты на&nbsp;любой вкус</h2>
      <p class="modalBlock__description">
         Для путешественника Самарская Лука предлагает множество вариантов: сплав по&nbsp;Волге на&nbsp;байдарке, пеший поход по&nbsp;тропам бурлаков и&nbsp;разбойников (с&nbsp;легендами о&nbsp;кладах), посещение исторических поселков и&nbsp;музеев культуры волжских народов.
      </p>
      <p class="modalBlock__description">
         В&nbsp;отличие от&nbsp;многих заповедников, нацпарк гармонично сочетает дикую природу с&nbsp;инфраструктурой. После дня впечатлений можно вернуться в&nbsp;уютную гостиницу в&nbsp;Самаре, Тольятти или Жигулевске.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_4.jpg" alt="Сплав на байдарке, пешие тропы и инфраструктура парка" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Самарской Луки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Самарской Луки</h2>
      <p class="modalBlock__description">
         Полуостров Самарская Лука доступен с&nbsp;разных сторон.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Наземным транспортом:</strong> Из&nbsp;Тольятти&nbsp;&mdash; по&nbsp;автомобильному или железнодорожному мосту. Из&nbsp;Сызрани&nbsp;&mdash; по&nbsp;дороге через узкий перешеек полуострова.</li>
         <li class="modalBlock__listItem"><strong>По&nbsp;воде (лето):</strong> На&nbsp;речных трамвайчиках (&laquo;Омик&raquo;, &laquo;Москва&raquo;) от&nbsp;речного вокзала Самары или на&nbsp;скоростном катере &laquo;Валдай&raquo;.</li>
         <li class="modalBlock__listItem"><strong>Зимой:</strong> Из&nbsp;Самары на&nbsp;судне на&nbsp;воздушной подушке по&nbsp;замерзшей Волге.</li>
      </ul>
      <p class="modalBlock__description">
         Основные точки входа на&nbsp;территорию парка&nbsp;&mdash; города Жигулевск и&nbsp;село Ширяево, откуда начинаются многие экскурсии и&nbsp;маршруты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_luka/kak_dobratsya.jpg" alt="Карта доступа к Самарской Луке и транспортные пути" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Жигулевские горы-------------------------------------------------------
        {
            id: 'zhigulevskie_gory',
            title: 'Жигулевские горы',
            image: '../../img/samara/cards_tochki/zhigulevskie_gory_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Жигулевские горы</h1>
</div>
<!-- Блок 1: Молодые горы Русской равнины -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Молодые горы Русской равнины</h2>
      <p class="modalBlock__description">
         Уникальный для Русской равнины тектонический массив посреди бескрайних степей и&nbsp;лесов. Их&nbsp;история началась около 7&nbsp;млн лет назад, и&nbsp;это по-прежнему молодые и&nbsp;растущие горы: каждое столетие они поднимаются примерно на&nbsp;1&nbsp;см.
      </p>
      <p class="modalBlock__description">
         Волга, встречая на&nbsp;своем пути этот древний массив, почтительно огибает его, формируя знаменитую Самарскую Луку&nbsp;&mdash; крупнейшую излучину реки. За&nbsp;свои живописные ландшафты Жигули часто называют &laquo;русскими Альпами&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_1.jpg" alt="Панорама Жигулевских гор на фоне Волги" loading="lazy">
   </div>
</div>
<!-- Блок 2: Каменная летопись древних морей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Каменная летопись древних морей</h2>
      <p class="modalBlock__description">
         Склоны гор сложены из&nbsp;известняков и&nbsp;доломитов, которые хранят в&nbsp;себе окаменелости древних морей, когда-то покрывавших эти места.
      </p>
      <p class="modalBlock__description">
         Прогуливаясь по&nbsp;тропам, можно увидеть причудливые скальные выходы&nbsp;и, если повезет, найти отпечатки древних моллюсков или других морских обитателей&nbsp;&mdash; немых свидетелей далекой геологической эпохи.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_2.jpg" alt="Скальные выходы известняка и окаменелости в Жигулях" loading="lazy">
   </div>
</div>
<!-- Блок 3: Вершины, легенды и тайны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Вершины, легенды и&nbsp;тайны</h2>
      <p class="modalBlock__description">
         Высшей точкой массива является гора Наблюдатель (381,2&nbsp;м), с&nbsp;которой открываются панорамные виды на&nbsp;волжские просторы. С&nbsp;Жигулями связано множество легенд, самая известная из&nbsp;которых гласит, что именно в&nbsp;этих горах спрятал свои сокровища Степан Разин.
      </p>
      <p class="modalBlock__description">
         В&nbsp;сердце гор спрятано урочище Каменная Чаша&nbsp;&mdash; одно из&nbsp;самых красивых и&nbsp;загадочных мест с&nbsp;чистыми родниками и&nbsp;густыми лесами, находящееся на&nbsp;границе Жигулевского заповедника и&nbsp;нацпарка &laquo;Самарская Лука&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_3.jpg" alt="Гора Наблюдатель и урочище Каменная Чаша" loading="lazy">
   </div>
</div>
<!-- Блок 4: Заповедная территория и происхождение названия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заповедная территория и&nbsp;происхождение названия</h2>
      <p class="modalBlock__description">
         Сегодня Жигулевские горы&nbsp;&mdash; это заповедная территория, где сохраняются уникальные ландшафты, редкие виды растений и&nbsp;животных. Сюда приезжают, чтобы подняться на&nbsp;вершины, пройти по&nbsp;экологическим тропам и&nbsp;ощутить дыхание истории.
      </p>
      <p class="modalBlock__description">
         Даже название гор окутано тайной: исследователи полагают, что оно происходит от&nbsp;тюркского слова &laquo;джегуле&raquo;&nbsp;&mdash; &laquo;запряженный&raquo;, что связывают с&nbsp;жившими здесь бурлаками, тянувшими суда против течения Волги.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_4.jpg" alt="Экотропы в Жигулях и охраняемые ландшафты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Жигулевских гор -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Жигулевских гор</h2>
      <p class="modalBlock__description">
         Жигули расположены по&nbsp;северо-восточному краю полуострова Самарская Лука.
      </p>
      <p class="modalBlock__description">
         <strong>Водным транспортом (лето):</strong> Из&nbsp;Самары на&nbsp;речных трамвайчиках или катерах до&nbsp;пристаней в&nbsp;Жигулевске или селе Ширяево.
      </p>
      <p class="modalBlock__description">
         <strong>Автомобилем/автобусом:</strong> Из&nbsp;Тольятти по&nbsp;мосту через Волгу (около 30-40&nbsp;км). Из&nbsp;Сызрани по&nbsp;дороге, огибающей Самарскую Луку с&nbsp;запада. Из&nbsp;Самары&nbsp;&mdash; через плотину Жигулевской ГЭС (около 70&nbsp;км).
      </p>
      <p class="modalBlock__description">
         Для посещения некоторых заповедных территорий (Жигулевский заповедник) может потребоваться специальное разрешение. Начало многих туристических троп&nbsp;&mdash; в&nbsp;окрестностях Жигулевска и&nbsp;села Ширяево.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_gory/kak_dobratsya.jpg" alt="Карта расположения Жигулевских гор и подъездных путей" loading="lazy">
   </div>
</div>`
        },

//---------------------------------«Бурлаки на Волге»-------------------------------------------------------
        {
            id: 'burlaki_na_volge',
            title: '«Бурлаки на Волге»',
            image: '../../img/samara/cards_tochki/burlaki_na_volge_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Памятник &laquo;Бурлаки на&nbsp;Волге&raquo;</h1>
</div>
<!-- Блок 1: Картина, ожившая в бронзе на набережной -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Картина, ожившая в&nbsp;бронзе на&nbsp;набережной</h2>
      <p class="modalBlock__description">
         Группа из&nbsp;11&nbsp;изможденных бурлаков, тянущих барку, застыла на&nbsp;исторической набережной Самары. Бронзовая рама и&nbsp;персонажи выполнены в&nbsp;масштабе 1&nbsp;к 1, а&nbsp;фоном к&nbsp;скульптуре выступает сама Волга.
      </p>
      <p class="modalBlock__description">
         Автор скульптуры&nbsp;&mdash; самарский художник Николай Куклев создал уникальный эффект, при котором река и&nbsp;небо становятся частью художественного замысла, точно как на&nbsp;оригинальной картине Ильи Репина.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_1.jpg" alt="Скульптура "Бурлаки на Волге" на фоне реки" loading="lazy">
   </div>
</div>
<!-- Блок 2: Связь с Репиным и самарской землей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Связь с&nbsp;Репиным и&nbsp;самарской землей</h2>
      <p class="modalBlock__description">
         Памятник был установлен к&nbsp;170-летию Ильи Репина, чья знаменитая картина имеет непосредственное отношение к&nbsp;самарской земле. Именно в&nbsp;селе Ширяево на&nbsp;Самарской Луке молодой художник делал эскизы и&nbsp;изучал жизнь бурлаков во&nbsp;время путешествия по&nbsp;Волге в&nbsp;1870&nbsp;году.
      </p>
      <p class="modalBlock__description">
         Трехметровая композиция точно повторяет композицию знаменитого полотна. Замысел картины родился у&nbsp;Репина после контраста, который он&nbsp;увидел на&nbsp;волжском берегу: праздные гуляющие горожане и&nbsp;изможденные бурлаки, тянущие баржу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_2.jpg" alt="Сравнение скульптуры и картины Репина, вид на село Ширяево" loading="lazy">
   </div>
</div>
<!-- Блок 3: Уникальная художественная композиция -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальная художественная композиция</h2>
      <p class="modalBlock__description">
         Скульптура представляет собой оригинальную художественную композицию: бронзовую раму-мольберт с&nbsp;фигурами бурлаков, где естественным фоном служат волжские просторы. Особый ракурс позволяет увидеть фигуры так, будто барка действительно плывет по&nbsp;реке.
      </p>
      <p class="modalBlock__description">
         Этот памятник не&nbsp;только увековечил знаменитое произведение искусства, но&nbsp;и&nbsp;напоминает о&nbsp;важном историческом периоде, когда Волга была главной транспортной артерией страны, а&nbsp;труд бурлаков&nbsp;&mdash; одним из&nbsp;её&nbsp;символов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_3.jpg" alt="Детали скульптуры и рама-мольберт" loading="lazy">
   </div>
</div>
<!-- Блок 4: Интерактивные выставки и фестивали -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Интерактивные выставки и&nbsp;фестивали</h2>
      <p class="modalBlock__description">
         Памятник стал не&nbsp;просто статичным объектом, а&nbsp;точкой притяжения для культурных событий. Самарский художественный музей и&nbsp;другие учреждения регулярно организуют здесь тематические мероприятия.
      </p>
      <p class="modalBlock__description">
         Например, на&nbsp;фестивале &laquo;Волгафест&raquo; прямо на&nbsp;песке устраивались интерактивные площадки с&nbsp;лекциями об&nbsp;искусстве Репина, мастер-классами &laquo;На&nbsp;поиски бурлаков&raquo; по&nbsp;созданию скетчей и&nbsp;фотозонами по&nbsp;мотивам знаменитой картины.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_4.jpg" alt="Фестиваль "Волгафест" и интерактивные мероприятия у памятника" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до памятника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;памятника</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Самара, Старая набережная (Ленинградский спуск), напротив фонтана &laquo;Парус&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Местоположение:</strong> Памятник расположен на&nbsp;одной из&nbsp;самых живописных набережных Волги, в&nbsp;пешей доступности от&nbsp;центра города.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> До&nbsp;остановок &laquo;Набережная&raquo; или &laquo;Ленинградская&raquo; (район Речного вокзала) ходят многие автобусы и&nbsp;троллейбусы.
      </p>
      <p class="modalBlock__description">
         <strong>Пешком:</strong> От&nbsp;площади Куйбышева или улицы Куйбышевской (пешеходной &laquo;Самарского Арбата&raquo;) до&nbsp;набережной можно дойти за&nbsp;15-20&nbsp;минут.
      </p>
      <p class="modalBlock__description">
         Посещение памятника бесплатно и&nbsp;доступно в&nbsp;любое время. Лучшее время для фотографирования&nbsp;&mdash; вечер, на&nbsp;закате, когда фоном становятся краски волжского неба.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/burlaki_na_volge/kak_dobratsya.jpg" alt="Карта расположения памятника на набережной Самары" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Самара космическая-------------------------------------------------------
        {
            id: 'samara_kosmicheskaya',
            title: '«Самара космическая»',
            image: '../../img/samara/cards_tochki/samara_kosmicheskaya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Музей &laquo;Самара космическая&raquo;</h1>
</div>
<!-- Блок 1: Музей у подножия настоящей ракеты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей у&nbsp;подножия настоящей ракеты</h2>
      <p class="modalBlock__description">
         Молодой музей открылся в&nbsp;2007&nbsp;году, но&nbsp;успел стать самым увлекательным и&nbsp;интересным в&nbsp;регионе. Интерактивный формат очень понравится детям и&nbsp;всем, кто любит представить себя путешественником в&nbsp;далекой галактике.
      </p>
      <p class="modalBlock__description">
         Главный экспонат музея&nbsp;&mdash; подлинная ракета-носитель &laquo;Союз&raquo;, вертикально установленная на&nbsp;фасаде здания. Это единственная в&nbsp;Европе ракета в&nbsp;собранном виде, выставленная таким образом. Этот экземпляр был изготовлен в&nbsp;1984 году на&nbsp;самарском заводе &laquo;Прогресс&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_1.jpg" alt="Здание музея с ракетой "Союз" на фасаде" loading="lazy">
   </div>
</div>
<!-- Блок 2: Космическое наследие Самары -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Космическое наследие Самары</h2>
      <p class="modalBlock__description">
         История музея неразрывно связана с&nbsp;космическим наследием города. В&nbsp;советское время Самара (тогда Куйбышев) стала одним из&nbsp;ключевых центров космической отрасли.
      </p>
      <p class="modalBlock__description">
         Именно на&nbsp;местном заводе &laquo;Прогресс&raquo; была собрана ракета-носитель &laquo;Восток&raquo;, которая 12&nbsp;апреля 1961 года вывела на&nbsp;орбиту корабль Юрия Гагарина. Музей хранит память об&nbsp;этом и&nbsp;многих других достижениях отечественной космонавтики.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_2.jpg" alt="Исторические фотографии завода "Прогресс" и Гагарина" loading="lazy">
   </div>
</div>
<!-- Блок 3: Интерактивная экспозиция «Карманный космос» -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Интерактивная экспозиция &laquo;Карманный космос&raquo;</h2>
      <p class="modalBlock__description">
         Музей органично сочетает подлинные экспонаты с&nbsp;современными мультимедийными технологиями. Особый интерес представляет интерактивная экспозиция &laquo;Карманный космос&raquo;, где посетители могут взаимодействовать с&nbsp;экспонатами в&nbsp;футуристическом интерьере.
      </p>
      <p class="modalBlock__description">
         Здесь можно нажимать кнопки, исследовать модели, чувствуя себя частью космического полета. Этот формат создает эффект полного погружения в&nbsp;тему и&nbsp;особенно популярен у&nbsp;детей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_3.jpg" alt="Интерактивные зоны и экспонаты музея" loading="lazy">
   </div>
</div>
<!-- Блок 4: От двигателей для Луны до быта космонавтов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;двигателей для Луны до&nbsp;быта космонавтов</h2>
      <p class="modalBlock__description">
         Экспозиция музея разделена на&nbsp;несколько тематических зон. Представлены космические аппараты &laquo;Ресурс&raquo; и&nbsp;&laquo;Янтарь-2К&raquo; для фотосъемки Земли, а&nbsp;также легендарный двигатель НК-33, созданный для советской лунной программы.
      </p>
      <p class="modalBlock__description">
         Отдельная часть выставки посвящена жизни космонавтов на&nbsp;орбите&nbsp;&mdash; здесь можно увидеть скафандры, образцы космического питания и&nbsp;узнать о&nbsp;буднях покорителей космоса.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_4.jpg" alt="Двигатель НК-33, скафандры и космическое питание" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и важная информация -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;важная информация</h2>
      <p class="modalBlock__description">
         <strong>Внимание:</strong> Основное здание музея на&nbsp;проспекте Ленина временно закрыто на&nbsp;ремонт.
      </p>
      <p class="modalBlock__description">
         <strong>Временная экспозиция</strong> размещена по&nbsp;адресу: ул. Красноармейская, 131 (ТРК &laquo;Гуд&rsquo;Ок&raquo;, 2&nbsp;этаж). Здесь можно увидеть основную коллекцию.
      </p>
      <p class="modalBlock__description">
         <strong>Ракета-носитель &laquo;Союз&raquo;</strong> по-прежнему находится по&nbsp;историческому адресу: проспект Ленина, 21, и&nbsp;доступна для осмотра снаружи.
      </p>
      <p class="modalBlock__description">
         <strong>Как добраться:</strong> До&nbsp;ТРК &laquo;Гуд&rsquo;Ок&raquo; (ост. &laquo;Ул. Красноармейская&raquo;) и&nbsp;до&nbsp;здания с&nbsp;ракетой (ост. &laquo;Проспект Ленина&raquo;) легко доехать на&nbsp;многих видах общественного транспорта из&nbsp;центра Самары. Актуальные адреса и&nbsp;график работы рекомендуется уточнять на&nbsp;официальном сайте музея.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samara_cosmicheskaya/kak_dobratsya.jpg" alt="Карта с расположением временной экспозиции и здания с ракетой" loading="lazy">
   </div>
</div>`
        },

//---------------------------------Царев Курган-------------------------------------------------------
        {
            id: 'carev_kurgan',
            title: 'Царев Курган',
            image: '../../img/samara/cards_tochki/tsarev_kurgan_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Царев курган</h1>
</div>
<!-- Блок 1: Осколок Жигулей у слияния рек -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Осколок Жигулей у&nbsp;слияния рек</h2>
      <p class="modalBlock__description">
         Одинокая гора-останец высится на&nbsp;месте слияния рек Волги и&nbsp;Сока. У&nbsp;подножия находятся Царевы купели.
      </p>
      <p class="modalBlock__description">
         Хотя сегодня высота кургана чуть более 50&nbsp;м, до&nbsp;середины&nbsp;XX века он&nbsp;был почти вдвое выше. Активные карьерные разработки значительно изменили его облик. Это не&nbsp;рукотворный курган, а&nbsp;осколок древних Жигулевских гор, уцелевший после тысячелетий воздействия воды и&nbsp;ветра.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_1.jpg" alt="Царев курган на слиянии Волги и Сока" loading="lazy">
   </div>
</div>
<!-- Блок 2: Каменная книга древнего моря -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Каменная книга древнего моря</h2>
      <p class="modalBlock__description">
         Склоны кургана, как страницы каменной книги, хранят окаменелости морских ежей, лилий и&nbsp;моллюсков&nbsp;&mdash; свидетельства времен, когда здесь плескалось доисторическое море.
      </p>
      <p class="modalBlock__description">
         Геологические обнажения Царева кургана&nbsp;&mdash; одни из&nbsp;древнейших в&nbsp;Европейской России. Несмотря на&nbsp;следы промышленной добычи, он&nbsp;остается важным природным и&nbsp;историческим памятником.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_2.jpg" alt="Окаменелости и геологические обнажения на кургане" loading="lazy">
   </div>
</div>
<!-- Блок 3: Место, дышащее легендами -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Место, дышащее легендами</h2>
      <p class="modalBlock__description">
         Это место буквально овеяно преданиями. По&nbsp;легендам, здесь пировал Тамерлан после победы над Тохтамышем, Стенька Разин справлял свадьбу с&nbsp;персидской княжной, а&nbsp;Петр I&nbsp;собственноручно установил на&nbsp;вершине деревянный крест.
      </p>
      <p class="modalBlock__description">
         В&nbsp;разное время курган посещали Иван Грозный, Александр I&nbsp;и&nbsp;молодой Владимир Ленин. Именно здесь Илья Репин делал этюды для своей знаменитой картины &laquo;Бурлаки на&nbsp;Волге&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_3.jpg" alt="Иллюстрации легенд, связанных с курганом" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться до Царева кургана -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Царева кургана</h2>
      <p class="modalBlock__description">
         Царев курган находится в&nbsp;Волжском районе Самарской области, около поселка Волжский (бывш. Царевщина), недалеко от&nbsp;города Жигулевск.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Самары по&nbsp;трассе М-5 (Московское шоссе) в&nbsp;сторону Волжского/Жигулевска. В&nbsp;районе поселка Волжский будут указатели на&nbsp;Царев курган. Расстояние от&nbsp;Самары&nbsp;&mdash; около 50&nbsp;км.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> С&nbsp;автовокзала Самары на&nbsp;автобусе до&nbsp;Жигулевска, попросить остановку у&nbsp;Царева кургана (рядом с&nbsp;трассой).
      </p>
      <p class="modalBlock__description">
         Посещение кургана свободное. Рядом с&nbsp;ним расположен Свято-Богородичный Казанский мужской монастырь, который также можно посетить.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_4.jpg" alt="Карта расположения Царева кургана и подъездных путей" loading="lazy">
   </div>
</div>`
        },
//---------------------------------«Жигулевская кругосветка»-------------------------------------------

        {
            id: 'zhigulevskaya_krugosvetka',
            title: '«Жигулевская кругосветка»',
            image: '../../img/samara/cards_tochki/zhigulevskaya_krugosvetka_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Жигулевская кругосветка</h1>
</div>
<!-- Блок 1: Водный маршрут вокруг Самарской Луки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Водный маршрут вокруг Самарской Луки</h2>
      <p class="modalBlock__description">
         Круговой маршрут для байдарок, лодок и&nbsp;яхт вокруг полуострова Самарская Лука. Его особенность в&nbsp;том, что из-за большой волжской петли старт и&nbsp;финиш находятся совсем рядом, разделенные лишь узким перешейком.
      </p>
      <p class="modalBlock__description">
         С&nbsp;середины 1990-х Жигулевскую кругосветку проходят на&nbsp;скорость: команды на&nbsp;байдарках преодолевают дистанцию нон-стоп за&nbsp;15&minus;20&nbsp;часов. Общая протяженность водной части&nbsp;&mdash; около 140&nbsp;км.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_1.jpg" alt="Схема маршрута Жигулевской кругосветки на карте" loading="lazy">
   </div>
</div>
<!-- Блок 2: История от Ленина до рекордов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История от&nbsp;Ленина до&nbsp;рекордов</h2>
      <p class="modalBlock__description">
         История этого маршрута насчитывает более ста лет. По&nbsp;легендам, в&nbsp;1890-х годах здесь путешествовали молодой Владимир Ленин и&nbsp;писатель Максим Горький (последний часть пути прошел на&nbsp;буксире за&nbsp;пароходом).
      </p>
      <p class="modalBlock__description">
         В&nbsp;1912 году самарский спортсмен Владимир Попов установил первый рекорд, пройдя всю дистанцию на&nbsp;гребной лодке за&nbsp;18&nbsp;часов. В&nbsp;советское время маршрут стал особенно популярен среди туристов-водников.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_2.jpg" alt="Исторические фотографии первых путешественников" loading="lazy">
   </div>
</div>
<!-- Блок 3: Маршрут: Волга — Переволоки — Уса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Маршрут: Волга&nbsp;&mdash; Переволоки&nbsp;&mdash; Уса</h2>
      <p class="modalBlock__description">
         Маршрут традиционно начинается около Тольятти, близ Федоровских лугов, и&nbsp;идет вниз по&nbsp;Волге, любуясь живописными Жигулевскими горами.
      </p>
      <p class="modalBlock__description">
         Достигнув села Переволоки, участники перевозят плавсредства к&nbsp;реке Усе (исторически&nbsp;&mdash; перетаскивали, сейчас используют авто). Далее путь продолжается по&nbsp;спокойной воде Усы с&nbsp;пологими берегами и&nbsp;смешанными лесами. Финальный отрезок&nbsp;&mdash; пересечение Куйбышевского водохранилища обратно к&nbsp;Тольятти.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_3.jpg" alt="Туристы на байдарках на Волге и в Усинском заливе" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как пройти кругосветку -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как пройти кругосветку</h2>
      <p class="modalBlock__description">
         <strong>Точки старта/финиша:</strong> Традиционно около Тольятти (Федоровские луга) или Жигулевска (Молодецкий курган). Финиш&nbsp;&mdash; в&nbsp;районе Молодецкого кургана.
      </p>
      <p class="modalBlock__description">
         <strong>Сухопутный участок:</strong> Ключевая точка&nbsp;&mdash; село Переволоки, где нужно преодолеть около 2&nbsp;км между Волгой и&nbsp;рекой Усой. Сегодня для переброски снаряжения используют автомобильную поддержку.
      </p>
      <p class="modalBlock__description">
         <strong>Для кого:</strong> Маршрут требует определенной подготовки и&nbsp;снаряжения. Его можно пройти как в&nbsp;составе организованных туров от&nbsp;местных клубов, так и&nbsp;самостоятельно опытным водникам. Рекомендуется сезон с&nbsp;мая по&nbsp;сентябрь.
      </p>
      <p class="modalBlock__description">
         Это уникальный опыт, позволяющий за&nbsp;одно путешествие увидеть и&nbsp;мощь Волги, и&nbsp;умиротворение Усы, и&nbsp;живописные Жигули.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_4.jpg" alt="Организованный сплав и переправа у села Переволоки" loading="lazy">
   </div>
</div>`
        }

    ],

//---------------------------------Выбраться на природу------------------------------------------------
//-----------------------------------------------------------------------------------------------------


    nature: [
        {
            id: 'zhigulevskie_vorota',
            title: 'Жигулевские Ворота',
            image: '../../img/samara/cards_nature/zhigulevskie_vorota_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Жигулевские ворота</h1>
</div>
<!-- Блок 1: Парадный вход главной улицы России -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Парадный вход главной улицы России</h2>
      <p class="modalBlock__description">
         Самое узкое место Средней Волги между горами Серной (Жигули) и&nbsp;Тип-Тяв (Сокольи горы). Этот живописный коридор шириной всего 900 метров романтично называют &laquo;Парадным входом главной улицы России&raquo;.
      </p>
      <p class="modalBlock__description">
         Здесь Волга своим мощным течением миллионы лет назад разрезала древний горный массив, образовав две системы&nbsp;&mdash; Жигулевские и&nbsp;Сокольи горы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_1.jpg" alt="Вид на Жигулевские ворота с воды или с высоты" loading="lazy">
   </div>
</div>
<!-- Блок 2: Место, нанесенное на карту в XII веке -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Место, нанесенное на&nbsp;карту в&nbsp;XII веке</h2>
      <p class="modalBlock__description">
         История знала о&nbsp;существовании этого уникального места еще в&nbsp;XII&nbsp;веке. В&nbsp;1154 году арабский географ Аль-Идриси, работавший при дворе сицилийского короля, впервые нанес Жигулевские Ворота на&nbsp;карту известного мира.
      </p>
      <p class="modalBlock__description">
         Через эти &laquo;ворота&raquo; веками проплывали торговые караваны, казачьи струги и&nbsp;волжские бурлаки. Это место, где история и&nbsp;геология встречаются в&nbsp;одном из&nbsp;самых впечатляющих пейзажей России.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_2.jpg" alt="Старинная карта Аль-Идриси и изображение бурлаков" loading="lazy">
   </div>
</div>
<!-- Блок 3: Смотровая площадка на горе Верблюд -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Смотровая площадка на&nbsp;горе Верблюд</h2>
      <p class="modalBlock__description">
         Лучшая точка для знакомства с&nbsp;этим природным амфитеатром&nbsp;&mdash; смотровая площадка на&nbsp;горе Верблюд, расположенной на&nbsp;самарской стороне.
      </p>
      <p class="modalBlock__description">
         Отсюда открывается панорамный вид, позволяющий по-настоящему оценить масштаб и&nbsp;мощь &laquo;ворот&raquo;. На&nbsp;противоположном берегу высится гора Тип-Тяв, а&nbsp;между ними мощным потоком течет Волга.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_3.jpg" alt="Вид на Жигулевские ворота со смотровой на горе Верблюд" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться до Жигулевских ворот -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Жигулевских ворот</h2>
      <p class="modalBlock__description">
         Увидеть Жигулевские ворота можно с&nbsp;разных сторон.
      </p>
      <p class="modalBlock__description">
         <strong>Со&nbsp;смотровой площадки (рекомендуется):</strong> На&nbsp;автомобиле из&nbsp;Самары по&nbsp;трассе М-5&nbsp;в сторону Жигулевска. Не&nbsp;доезжая города, свернуть по&nbsp;указателю на&nbsp;гору Верблюд (у&nbsp;села Подгоры). Далее пеший подъем к&nbsp;оборудованной смотровой площадке.
      </p>
      <p class="modalBlock__description">
         <strong>По&nbsp;реке:</strong> В&nbsp;летний сезон из&nbsp;Самары или Жигулевска организуются речные прогулки и&nbsp;экскурсии, которые проходят прямо через Жигулевские ворота. Это позволяет увидеть их&nbsp;с&nbsp;самого эффектного ракурса.
      </p>
      <p class="modalBlock__description">
         <strong>Со&nbsp;стороны горы Тип-Тяв:</strong> На&nbsp;автомобиле до&nbsp;села Зольное, далее пешком на&nbsp;вершину горы Тип-Тяв, откуда также открывается великолепный вид.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_4.jpg" alt="Карта подъезда к смотровым площадкам у Жигулевских ворот" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------Ширяевские штольни----------------------------------------------
        {
            id: 'shiryaevskie_sholni',
            title: 'Ширяевские штольни',
            image: '../../img/samara/cards_nature/shiryaevskie_shtolni_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Ширяевские штольни</h1>
</div>
<!-- Блок 1: Подземный мир Поповой горы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Подземный мир Поповой горы</h2>
      <p class="modalBlock__description">
         Обширная система естественных и&nbsp;рукотворных пещер, пробитых в&nbsp;недрах Поповой горы в&nbsp;первой половине XX&nbsp;века. Помимо Ширяевских, подобные штольни расположены повсеместно на&nbsp;Самарской Луке.
      </p>
      <p class="modalBlock__description">
         Ширяевские штольни возникли как каменоломни по&nbsp;добыче уникального известняка, содержание карбоната кальция в&nbsp;котором достигало 100%, что позволяло производить известь высочайшего качества. Самые масштабные выработки пришлись на&nbsp;период с&nbsp;1920-х по&nbsp;1950-е годы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_1.jpg" alt="Входы в Ширяевские штольни на склоне Поповой горы" loading="lazy">
   </div>
</div>
<!-- Блок 2: Добыча камня и сорта породы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Добыча камня и&nbsp;сорта породы</h2>
      <p class="modalBlock__description">
         Гора Попова (названная по&nbsp;владениям местного священника) была буквально изрыта тоннелями, где добывали около двадцати сортов породы с&nbsp;характерными названиями.
      </p>
      <p class="modalBlock__description">
         Среди них были &laquo;медвежатник&raquo;, &laquo;ноздряк&raquo;, &laquo;белый кремень&raquo; и&nbsp;другие. Камень использовался для строительства и&nbsp;производства извести. Сегодня заброшенные подземелья стали важным природным и&nbsp;историческим объектом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_2.jpg" alt="Внутренний вид штолен и образцы добывавшегося камня" loading="lazy">
   </div>
</div>
<!-- Блок 3: Убежище летучих мышей и история Ширяево -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Убежище летучих мышей и&nbsp;история Ширяево</h2>
      <p class="modalBlock__description">
         Заброшенные штольни стали убежищем для колоний летучих мышей, включая редкие виды, занесенные в&nbsp;Красную книгу. В&nbsp;жару в&nbsp;пещерах царит приятная прохлада.
      </p>
      <p class="modalBlock__description">
         Само село Ширяево, у&nbsp;подножия горы, хранит богатую историю: в&nbsp;XIX веке здесь отдыхали бурлаки, а&nbsp;в&nbsp;1870 году жил Илья Репин, работая над эскизами к&nbsp;своей знаменитой картине &laquo;Бурлаки на&nbsp;Волге&raquo;. Вокруг входов в&nbsp;пещеры оборудованы смотровые площадки и&nbsp;зоны отдыха.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_3.jpg" alt="Летучие мыши в штольнях и вид на село Ширяево" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться до Ширяевских штолен -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Ширяевских штолен</h2>
      <p class="modalBlock__description">
         Штольни расположены в&nbsp;селе Ширяево на&nbsp;территории национального парка &laquo;Самарская Лука&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Самары или Тольятти по&nbsp;дороге на&nbsp;Самарскую Луку до&nbsp;села Ширяево (через Жигулевск или плотину ГЭС). В&nbsp;селе нужно проехать к&nbsp;его дальнему концу, к&nbsp;подножию Поповой горы, где начинается тропа к&nbsp;штольням.
      </p>
      <p class="modalBlock__description">
         <strong>По&nbsp;воде (летом):</strong> Из&nbsp;Самары на&nbsp;речном трамвайчике или катере до&nbsp;пристани в&nbsp;Ширяево.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Вход в&nbsp;самые глубокие штольни может быть опасен из-за возможных обвалов. Рекомендуется осматривать только входные части и&nbsp;прилегающую территорию. Для полноценного спелеологического обследования требуется специальное снаряжение, опыт и&nbsp;разрешение администрации нацпарка. Вокруг оборудованы безопасные смотровые площадки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_4.jpg" alt="Карта дороги до села Ширяево и тропа к штольням" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------Гора Стрельная----------------------------------------------

        {
            id: 'gora_strelnaya',
            title: 'Гора Стрельная',
            image: '../../img/samara/cards_nature/gora_strelnaya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Гора Стрельная</h1>
</div>
<!-- Блок 1: Легендарная вершина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Легендарная вершина Жигулей</h2>
      <p class="modalBlock__description">
         Одна из&nbsp;самых высоких и&nbsp;живописных вершин Жигулей (351&nbsp;м). Ее&nbsp;узнают по&nbsp;массивному каменному утесу, венчающему вершину.
      </p>
      <p class="modalBlock__description">
         Название горы связано с&nbsp;историей волжской вольницы. Здесь разбойники устраивали наблюдательный пункт (&laquo;стрельню&raquo;&nbsp;&mdash; сторожевую башню), с&nbsp;которого заранее замечали купеческие суда и&nbsp;подавали сигналы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_1.jpg" alt="Вид на массивный утес на вершине горы Стрельной" loading="lazy">
   </div>
</div>
<!-- Блок 2: Уникальная природа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальные природные комплексы</h2>
      <p class="modalBlock__description">
         Склоны сложены древними известняками возрастом около 250 млн лет. На&nbsp;поверхности сохранились участки каменистых степей с&nbsp;реликтовой флорой.
      </p>
      <p class="modalBlock__description">
         Здесь встречаются семь видов растений-эндемиков, которые больше нигде в&nbsp;мире не&nbsp;произрастают. Уникальны и&nbsp;реликтовые сосновые боры, где рядом уживаются степные и&nbsp;таежные виды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_2.jpg" alt="Каменистая степь и реликтовые растения на склонах горы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Путь к вершине -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Путь к&nbsp;вершине и&nbsp;&laquo;Чертов мост&raquo;</h2>
      <p class="modalBlock__description">
         На&nbsp;пути туристов ждет &laquo;Чертов мост&raquo;&nbsp;&mdash; узкий скалистый гребень. По&nbsp;легенде, разбойники преодолевали его с&nbsp;завязанными глазами, демонстрируя свою удаль.
      </p>
      <p class="modalBlock__description">
         Сегодня по&nbsp;гребням горы проложен туристический маршрут. С&nbsp;вершины открываются захватывающие виды на&nbsp;Волгу, острова, плотину Жигулевской ГЭС и&nbsp;даже очертания Тольятти.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_3.jpg" alt="Турист на скалистом гребне «Чертова моста»" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;горы Стрельной</h2>
      <p class="modalBlock__description">
         Пеший маршрут начинается в&nbsp;селе Зольное.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле или автобусе:</strong> Добраться до&nbsp;села Зольное из&nbsp;Жигулевска. Далее&nbsp;&mdash; следовать по&nbsp;размеченной тропе к&nbsp;вершине, которая является частью маршрута Жигулевского заповедника.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Гора Стрельная находится на&nbsp;территории Жигулевского заповедника. Посещение возможно только по&nbsp;разрешенным экологическим тропам в&nbsp;составе организованных групп или при наличии специального разрешения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_4.jpg" alt="Карта с маршрутом от села Зольное к горе Стрельной" loading="lazy">
   </div>
</div>`
        },
//----------------------------------------«Бузулукский бор»----------------------------------------------
        {
            id: 'buzulukskii_bor',
            title: '«Бузулукский бор»',
            image: '../../img/samara/cards_nature/buzulukskiy_bor_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Бузулукский бор</h1>
</div>
<!-- Блок 1: Уникальный массив -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальный массив реликтового леса</h2>
      <p class="modalBlock__description">
         Огромный массив реликтового соснового леса, раскинувшийся посреди бескрайних степей Евразии. Это национальный парк на&nbsp;границе Самарской и&nbsp;Оренбургской областей.
      </p>
      <p class="modalBlock__description">
         Здесь смешалась природа севера и&nbsp;юга: двухметровые папоротники соседствуют с&nbsp;ковылем, тундровый ягель&nbsp;&mdash; с&nbsp;южными тюльпанами, а&nbsp;болотная росянка&nbsp;&mdash; с&nbsp;лесным хвощем.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_1.jpg" alt="Панорама Бузулукского бора среди степей" loading="lazy">
   </div>
</div>
<!-- Блок 2: Древние сосны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Древние сосны и&nbsp;феномен выживания</h2>
      <p class="modalBlock__description">
         Бор хранит многовековые сосновые рощи возрастом до&nbsp;300&nbsp;лет, где встречаются исполины с&nbsp;обхватом ствола более четырех метров.
      </p>
      <p class="modalBlock__description">
         Удивительный феномен&nbsp;&mdash; способность бора существовать в&nbsp;засушливой стеви. Глубокие песчаные почвы, как губка, накапливают талую воду, постепенно питая лес даже в&nbsp;период засух.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_2.jpg" alt="Старая сосна-исполин в Бузулукском бору" loading="lazy">
   </div>
</div>
<!-- Блок 3: История лесоводства -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Исторические лесные культуры</h2>
      <p class="modalBlock__description">
         Особую ценность представляют лесные культуры, высаженные в&nbsp;конце XIX&nbsp;&mdash; начале&nbsp;XX века известными лесоводами В.&nbsp;П.&nbsp;Васильевым и&nbsp;А.&nbsp;П.&nbsp;Тольским.
      </p>
      <p class="modalBlock__description">
         Эти насаждения стали эталоном для нескольких поколений российских лесоводов. Сегодня по&nbsp;территории бора проложены экологические тропы, позволяющие увидеть памятники лесокультурного дела.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_3.jpg" alt="Ухоженные лесные культуры, посаженные лесоводами" loading="lazy">
   </div>
</div>
<!-- Блок 4: Экологическая роль -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Экологическая роль и&nbsp;обитатели</h2>
      <p class="modalBlock__description">
         Бор играет важную экологическую роль, формируя особый микроклимат и&nbsp;сдерживая суховеи на&nbsp;площади более 100&nbsp;тыс. гектаров.
      </p>
      <p class="modalBlock__description">
         Его территория стала убежищем для редких видов растений и&nbsp;животных, включая орлана-белохвоста и&nbsp;русскую выхухоль. Чистейший воздух, наполненный фитонцидами, делает бор идеальным местом для отдыха.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_4.jpg" alt="Орлан-белохвост над сосновым лесом" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Бузулукского бора</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Самары до&nbsp;Бузулука&nbsp;&mdash; 172&nbsp;км по&nbsp;трассе Р224. Далее&nbsp;&mdash; 22&nbsp;км до&nbsp;поселка Колтубановский, где находится туристический центр национального парка.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Автобусом или поездом до&nbsp;города Бузулук, далее&nbsp;&mdash; местным автобусом до&nbsp;поселка Колтубановский.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> На&nbsp;территории парка развита инфраструктура экотуризма: есть гостевые дома, оборудованные тропы и&nbsp;экскурсионное обслуживание. Лучше заранее спланировать маршрут и&nbsp;уточнить правила посещения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/buzulukskii_bor/kak_dobratsya.jpg" alt="Схема проезда и расположение туристического центра в Колтубановском" loading="lazy">
   </div>
</div>`
        },

//----------------------------------------Жигулевский заповедник----------------------------------------------
        {
            id: 'zhigulevskii_zapovednik',
            title: 'Жигулевский заповедник',
            image: '../../img/samara/cards_nature/zhigulevskiy_zapovednik_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Жигулевский заповедник</h1>
</div>
<!-- Блок 1: Сердце Самарской Луки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Нетронутое сердце Самарской Луки</h2>
      <p class="modalBlock__description">
         Страна древних гор, лесов и&nbsp;каменистых утесов, откуда открываются бескрайние просторы Волги. Заповедник имени И.&nbsp;И.&nbsp;Спрыгина занимает центральную часть Самарской Луки.
      </p>
      <p class="modalBlock__description">
         Его территория площадью 23&nbsp;тыс. гектаров включает материковую часть и&nbsp;острова в&nbsp;акватории Волги. В&nbsp;2007 году получил статус биосферного резервата ЮНЕСКО.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_1.jpg" alt="Панорамный вид на Жигулевские горы и Волгу с территории заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Уникальное биоразнообразие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальное сочетание природных зон</h2>
      <p class="modalBlock__description">
         Главная особенность&nbsp;&mdash; уникальное сочетание флоры и&nbsp;фауны степей, лесов и&nbsp;даже тундры. Здесь сохранились редкие эндемичные и&nbsp;реликтовые виды, пережившие несколько геологических эпох.
      </p>
      <p class="modalBlock__description">
         Флора заповедника насчитывает около 1000 видов растений. Среди млекопитающих особенно разнообразны грызуны и&nbsp;рукокрылые (летучие мыши).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_2.jpg" alt="Редкое растение-эндемик на каменистом склоне" loading="lazy">
   </div>
</div>
<!-- Блок 3: Музей и экотропы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей природы и&nbsp;экологические маршруты</h2>
      <p class="modalBlock__description">
         Важным центром просвещения является Музей природы имени И.&nbsp;И.&nbsp;Спрыгина. В&nbsp;его экспозиции&nbsp;&mdash; виды беспозвоночных, коллекции птичьих гнезд, гербарные образцы и&nbsp;материалы по&nbsp;геологической истории Жигулей.
      </p>
      <p class="modalBlock__description">
         По&nbsp;заповеднику проложено несколько пеших экологических маршрутов, например, на&nbsp;вершину Стрельной горы и&nbsp;через перевал к&nbsp;урочищу Каменная Чаша.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_3.jpg" alt="Экспозиция в Музее природы Жигулевского заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как посетить Жигулевский заповедник</h2>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Территория заповедника закрыта для свободного посещения с&nbsp;целью сохранения природы. Ознакомиться с&nbsp;его богатством можно в&nbsp;музее и&nbsp;на&nbsp;специально организованных экскурсиях.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес визит-центра и&nbsp;Музея природы:</strong> Жигулевск, село Бахилова Поляна, ул. Жигулевская, д.&nbsp;1.
      </p>
      <p class="modalBlock__description">
         <strong>Экскурсии:</strong> Запись на&nbsp;экскурсионные маршруты (например, на&nbsp;гору Стрельную) осуществляется через визит-центр заповедника. Необходимо заранее согласовать посещение.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_4.jpg" alt="Здание визит-центра заповедника в Бахиловой Поляне" loading="lazy">
   </div>
</div>`
        }

    ],

//-----------------------------------------Культурный код----------------------------------------------
//-----------------------------------------Культурный код----------------------------------------------
    culture: [
        {
            id: 'dom_musei_repina',
            title: 'Дом-музей И. Е. Репина',
            image: '../../img/samara/cards_culture/dom_muzey_repina_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Музей Репина в&nbsp;Ширяево</h1>
</div>
<!-- Блок 1: Историко-культурный комплекс -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крестьянская усадьба XIX века</h2>
      <p class="modalBlock__description">
         Историко-культурный комплекс, воссоздающий атмосферу поволжской крестьянской усадьбы XIX&nbsp;века. Именно здесь молодой художник Илья Репин работал над своей знаменитой картиной.
      </p>
      <p class="modalBlock__description">
         В&nbsp;доме крестьянина Ивана Алексеева летом 1870 года жили Репин и&nbsp;его друзья-художники Федор Васильев и&nbsp;Евгений Макаров. За&nbsp;три месяца он&nbsp;создал множество эскизов к&nbsp;&laquo;Бурлакам на&nbsp;Волге&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_1.jpg" alt="Дом-музей Ильи Репина в селе Ширяево" loading="lazy">
   </div>
</div>
<!-- Блок 2: Создание шедевра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Место рождения &laquo;Бурлаков на&nbsp;Волге&raquo;</h2>
      <p class="modalBlock__description">
         Поселок Ширяево стал творческой лабораторией для Репина. Художник наблюдал за&nbsp;бурлаками, делал зарисовки типажей и&nbsp;пейзажей, которые легли в&nbsp;основу великого полотна.
      </p>
      <p class="modalBlock__description">
         Из&nbsp;окон дома открывается тот&nbsp;же вид на&nbsp;Волгу и&nbsp;горы, который вдохновлял художника. Эта атмосфера места является неотъемлемой частью музейной экспозиции.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_2.jpg" alt="Вид на Волгу из окна музея, похожий на эскизы Репина" loading="lazy">
   </div>
</div>
<!-- Блок 3: Усадьба Ширяевца -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Усадьба поэта Александра Ширяевца</h2>
      <p class="modalBlock__description">
         Музейный комплекс включает не&nbsp;только дом Репина, но&nbsp;и&nbsp;воссозданную усадьбу поэта Александра Ширяевца (Абрамова), уроженца этих мест.
      </p>
      <p class="modalBlock__description">
         В&nbsp;экспозициях представлены предметы крестьянского быта, народного искусства XIX&ndash;XX&nbsp;веков, рассказывающие о&nbsp;жизни и&nbsp;творчестве обоих выдающихся жителей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_3.jpg" alt="Интерьер усадьбы поэта Александра Ширяевца" loading="lazy">
   </div>
</div>
<!-- Блок 4: Культурный центр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культурный центр Самарской Луки</h2>
      <p class="modalBlock__description">
         Сегодня музей стал важным культурным центром. Здесь проходят народные праздники, литературные вечера, выставки в&nbsp;рамках Ширяевской биеннале современного искусства.
      </p>
      <p class="modalBlock__description">
         Посещение позволяет почувствовать творческую атмосферу, которая привлекала и&nbsp;привлекает в&nbsp;эти места художников, писателей и&nbsp;поэтов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_4.jpg" alt="Проведение праздника или выставки на территории музея" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;музея Репина в&nbsp;Ширяево</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Самарская область, г.о. Жигулевск, село Ширяево, ул. Советская, 14.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Самары или Тольятти по&nbsp;трассе через Жигулевск или плотину Жигулевской ГЭС на&nbsp;Самарскую Луку до&nbsp;села Ширяево.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автобусе:</strong> Из&nbsp;Жигулевска до&nbsp;села Ширяево ходит регулярный автобус.
      </p>
      <p class="modalBlock__description">
         <strong>По&nbsp;воде (в&nbsp;навигационный период):</strong> Из&nbsp;Самары на&nbsp;речном трамвайчике или катере до&nbsp;пристани в&nbsp;Ширяево&nbsp;&mdash; самый живописный маршрут.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/dom_musei_repina/kak_dobratsya.jpg" alt="Схема проезда в село Ширяево и указатель к музею" loading="lazy">
   </div>
</div>`
        },

//-----------------------------------------Вертолетка----------------------------------------------
        {
            id: 'vertoletka',
            title: 'Вертолетка',
            image: '../../img/samara/cards_culture/vertoletka_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Вертолетка</h1>
</div>
<!-- Блок 1: Лучшие виды на Самарскую Луку -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Лучшие виды на&nbsp;Самарскую Луку</h2>
      <p class="modalBlock__description">
         Ландшафтно-парковый ансамбль с&nbsp;лучшими в&nbsp;городе панорамами. Со&nbsp;смотровой площадки на&nbsp;высоте 120&nbsp;м над уровнем Волги видно на&nbsp;десятки километров.
      </p>
      <p class="modalBlock__description">
         Можно увидеть Жигулевские ворота&nbsp;&mdash; самое узкое место Волги, национальный парк &laquo;Самарская Лука&raquo;, Сокольи горы, а&nbsp;вдали&nbsp;&mdash; очертания Тольятти и&nbsp;Жигулевской ГЭС.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/vertoletka/vertoletka_1.jpg" alt="Панорамный вид с Вертолетки на Волгу и Самарскую Луку" loading="lazy">
   </div>
</div>
<!-- Блок 2: Авиационное прошлое -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Авиационное и&nbsp;космическое прошлое</h2>
      <p class="modalBlock__description">
         История места связана с&nbsp;авиацией. Здесь была вертолетная площадка опытного завода, где разрабатывали турбореактивные двигатели. С&nbsp;нее летали вертолеты главного конструктора Николая Кузнецова.
      </p>
      <p class="modalBlock__description">
         После закрытия лунной программы здесь тайно сохранили десятки двигателей НК-33, которые спустя 40&nbsp;лет нашли применение в&nbsp;американской космической программе.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/vertoletka/vertoletka_2.jpg" alt="Историческое фото вертолета на площадке или современная стилизация" loading="lazy">
   </div>
</div>
<!-- Блок 3: Современное пространство -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Лучший проект общественного пространства</h2>
      <p class="modalBlock__description">
         После масштабного благоустройства в&nbsp;2021 году &laquo;Вертолетка&raquo; получила признание как лучший проект общественного пространства России.
      </p>
      <p class="modalBlock__description">
         Создана доступная среда для всех, включая маломобильных граждан. Продуманная инфраструктура с&nbsp;дорожками, освещением, зонами отдыха и&nbsp;детскими площадками делает ее&nbsp;популярной в&nbsp;любое время года.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/vertoletka/vertoletka_3.jpg" alt="Благоустроенная территория Вертолетки с дорожками и зонами отдыха" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;&laquo;Вертолетки&raquo;</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> ул. Ветвистая, 2Б&nbsp;(поселок Управленческий).
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> по&nbsp;Волжскому шоссе, время в&nbsp;пути от&nbsp;центра города&nbsp;&mdash; около 30&nbsp;минут.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автобусе:</strong> до&nbsp;поселка Управленческий, далее&nbsp;&mdash; пешком по&nbsp;указателям до&nbsp;смотровой площадки.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> Лучшее время для посещения&nbsp;&mdash; закат или ясный день. Парковка рядом с&nbsp;площадкой ограничена, особенно в&nbsp;выходные.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/vertoletka/vertoletka_4.jpg" alt="Карта проезда к Вертолетке в поселке Управленческий" loading="lazy">
   </div>
</div>`
        },
//-----------------------------------------Жигулевская ГЭС----------------------------------------------
        {
            id: 'zhigulevskaya_ges',
            title: 'Жигулевская ГЭС',
            image: '../../img/samara/cards_culture/zhigulevskaya_ges_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Жигулевская ГЭС</h1>
</div>
<!-- Блок 1: Ключевая ГЭС России -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Одна из&nbsp;крупнейших ГЭС России</h2>
      <p class="modalBlock__description">
         Ключевая гидроэлектростанция в&nbsp;энергосистеме страны. Отличный вид на&nbsp;нее открывается с&nbsp;Самарской луки и&nbsp;смотровых площадок возле Жигулевска.
      </p>
      <p class="modalBlock__description">
         Возведенная в&nbsp;1950-1957 годах на&nbsp;Волге между Жигулевском и&nbsp;Тольятти, она является шестой ступенью Волжского каскада ГЭС.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_1.jpg" alt="Вид на мощную плотину Жигулевской ГЭС с воды или берега" loading="lazy">
   </div>
</div>
<!-- Блок 2: Масштабы и уникальность -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Масштабы и&nbsp;многофункциональность</h2>
      <p class="modalBlock__description">
         Уникальность&nbsp;&mdash; в&nbsp;грандиозных размерах и&nbsp;многофункциональности. Длина бетонной плотины превышает 2,8&nbsp;км, а&nbsp;созданное ею&nbsp;Куйбышевское водохранилище&nbsp;&mdash; крупнейшее в&nbsp;Европе.
      </p>
      <p class="modalBlock__description">
         Помимо выработки электроэнергии (более 10&nbsp;млрд кВт&middot;ч в&nbsp;год), ГЭС обеспечивает судоходство через шлюз, защиту от&nbsp;паводков и&nbsp;водоснабжение региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_2.jpg" alt="Шлюзовой комплекс ГЭС и проходящие через него суда" loading="lazy">
   </div>
</div>
<!-- Блок 3: Инфраструктура и музей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Важнейший инфраструктурный объект</h2>
      <p class="modalBlock__description">
         Через плотину проложена федеральная автомобильная трасса М5&nbsp;&laquo;Урал&raquo;, соединяющая Москву с&nbsp;Самарой и&nbsp;Челябинском.
      </p>
      <p class="modalBlock__description">
         С&nbsp;2005 года на&nbsp;территории ГЭС работает музей, рассказывающий об&nbsp;истории строительства, принципах работы и&nbsp;значении станции для страны.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_3.jpg" alt="Трасса М5, проходящая по гребню плотины Жигулевской ГЭС" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;посетить</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Жигулевск, Московское шоссе, 2.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле или автобусе:</strong> Из&nbsp;Тольятти по&nbsp;Московскому шоссе прямо к&nbsp;плотине. Из&nbsp;Самары&nbsp;&mdash; по&nbsp;трассе М5.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Сама плотина является режимным объектом. Для ее&nbsp;посещения (проезда) действуют правила, возможны проверки. Лучший обзор открывается со&nbsp;смотровых площадок на&nbsp;самарском или тольяттинском берегу, а&nbsp;также с&nbsp;воды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_4.jpg" alt="Схема проезда к Жигулевской ГЭС и расположение смотровых площадок" loading="lazy">
   </div>
</div>`
        },
//-----------------------------------------Стела «Ладья»----------------------------------------------
        {
            id: 'stela_ladia',
            title: 'Стела «Ладья»',
            image: '../../img/samara/cards_culture/stela_ladia_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Стела Ладья</h1>
</div>
<!-- Блок 1: Символ Самары -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Символ города на&nbsp;Волге</h2>
      <p class="modalBlock__description">
         Двадцатиметровая скульптура и&nbsp;смотровая площадка на&nbsp;Софийской набережной. Один из&nbsp;узнаваемых символов Самары.
      </p>
      <p class="modalBlock__description">
         Бетонная конструкция работы архитекторов Анатолия Янкина и&nbsp;Игоря Галахова стилизована под древнерусское судно, плывущее в&nbsp;сторону Жигулевских гор.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_1.jpg" alt="Вид на стелу Ладью с набережной или с Волги" loading="lazy">
   </div>
</div>
<!-- Блок 2: Панорама и детали -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Панорамный вид и&nbsp;герб города</h2>
      <p class="modalBlock__description">
         Монумент установлен на&nbsp;верхней террасе набережной, откуда открывается прекрасный вид на&nbsp;Волгу и&nbsp;заречье.
      </p>
      <p class="modalBlock__description">
         В&nbsp;центре белого &laquo;паруса&raquo; стелы размещен герб Самары с&nbsp;изображением козы. Стела органично вписана в&nbsp;ландшафт городского пляжа.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_2.jpg" alt="Крупный план герба Самары на парусе стелы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Популярное место -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Главная достопримечательность и&nbsp;место отдыха</h2>
      <p class="modalBlock__description">
         По&nbsp;опросам, &laquo;Ладья&raquo; входит в&nbsp;тройку главных достопримечательностей города. Ее&nbsp;изображение часто используется на&nbsp;сувенирах.
      </p>
      <p class="modalBlock__description">
         Стелу с&nbsp;двух сторон окружает городской пляж с&nbsp;террасами, кафе и&nbsp;местами для отдыха. Это популярное место проведения праздников и&nbsp;фотографирования.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_3.jpg" alt="Люди отдыхают на пляже у подножия стелы Ладьи" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;стелы Ладья</h2>
      <p class="modalBlock__description">
         <strong>Расположение:</strong> Софийская набережная (четвертая очередь Самарской набережной).
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> Многие автобусные и&nbsp;троллейбусные маршруты, следующие в&nbsp;центр, имеют остановки рядом с&nbsp;набережной (&laquo;Площадь Славы&raquo;, &laquo;Ул. Лесная&raquo;).
      </p>
      <p class="modalBlock__description">
         <strong>Пешком:</strong> От&nbsp;центра города (пл. Революции, ул. Куйбышева) спуститься к&nbsp;Волге по&nbsp;Лесной улице или Вилоновскому спуску.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> Идеальное время для визита&nbsp;&mdash; вечер, когда включается подсветка монумента и&nbsp;фонтанов набережной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_4.jpg" alt="Схема расположения стелы на Софийской набережной" loading="lazy">
   </div>
</div>`
        },
//-----------------------------------------Набережная Самары----------------------------------------------

        {
            id: 'musei_chechova_2',
            title: 'Набережная Самары',
            image: '../../img/samara/cards_culture/samarskaya_naberezhnaya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Самарская набережная</h1>
</div>
<!-- Блок 1: Самая длинная набережная Волги -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Самая длинная набережная Волги</h2>
      <p class="modalBlock__description">
         Главная точка притяжения и&nbsp;туристический центр города. Ее&nbsp;протяженность&nbsp;&mdash; более четырех километров, что делает ее&nbsp;одной из&nbsp;самых длинных в&nbsp;России.
      </p>
      <p class="modalBlock__description">
         Чугунные парапеты, каштановые аллеи и&nbsp;песчаные пляжи создают уникальную атмосферу речного курорта в&nbsp;сердце крупного города.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_1.jpg" alt="Панорамный вид на протяженную Самарскую набережную" loading="lazy">
   </div>
</div>
<!-- Блок 2: История и реконструкция -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;промышленного берега к&nbsp;курорту</h2>
      <p class="modalBlock__description">
         В&nbsp;XIX веке берег занимали причалы и&nbsp;склады. Преобразования начались в&nbsp;1930-х с&nbsp;намыва песка и&nbsp;строительства первых террас.
      </p>
      <p class="modalBlock__description">
         Современный облик набережная обрела после масштабной реконструкции 2012&minus;2018&nbsp;годов, сохранив историческую планировку из&nbsp;четырех очередей застройки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_2.jpg" alt="Историческое фото набережной и современный вид для сравнения" loading="lazy">
   </div>
</div>
<!-- Блок 3: Знаменитые арт-объекты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Знаменитые памятники и&nbsp;скульптуры</h2>
      <p class="modalBlock__description">
         Набережная украшена запоминающимися арт-объектами, ставшими ее&nbsp;визитными карточками.
      </p>
      <p class="modalBlock__description">
         Среди них: памятник основателю города князю Засекину, бронзовый Сухов из&nbsp;&laquo;Белого солнца пустыни&raquo;, композиция &laquo;Бурлаки на&nbsp;Волге&raquo; и&nbsp;поющий фонтан.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_3.jpg" alt="Коллаж из известных скульптур на набережной: Сухов, Засекин, Бурлаки" loading="lazy">
   </div>
</div>
<!-- Блок 4: Инфраструктура и жизнь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Универсальное пространство для жизни</h2>
      <p class="modalBlock__description">
         Это многоуровневый комплекс с&nbsp;пешеходными и&nbsp;велосипедными дорожками, фонтанами и&nbsp;зелеными зонами.
      </p>
      <p class="modalBlock__description">
         Инфраструктура включает спортивные и&nbsp;детские площадки, кафе, что делает набережную идеальным местом для отдыха горожан и&nbsp;туристов в&nbsp;любое время года.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_4.jpg" alt="Люди катаются на велосипедах, роликах, отдыхают на набережной" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и ориентироваться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;ориентироваться</h2>
      <p class="modalBlock__description">
         Набережная поделена на&nbsp;четыре очереди (участка), каждая со&nbsp;своим характером.
      </p>
      <p class="modalBlock__description">
         <strong>1-я очередь:</strong> Параллельна ул. Максима Горького (от&nbsp;Речного вокзала). <strong>2-я (Орловская):</strong> Параллельна Волжскому проспекту. <strong>3-я:</strong> От&nbsp;Речного вокзала до&nbsp;ул. Некрасовской. <strong>4-я (Софийская):</strong> Параллельна Лесной улице (здесь стоит стела Ладья).
      </p>
      <p class="modalBlock__description">
         <strong>Доступ:</strong> Дойти пешком от&nbsp;любой центральной улицы, спускаясь к&nbsp;Волге. Много входов и&nbsp;лестниц. Ближайшие станции общественного транспорта&nbsp;&mdash; по&nbsp;всему центру города.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/kak_dobratsya.jpg" alt="Схематичная карта с номерами очередей Самарской набережной" loading="lazy">
   </div>
</div>`
        }

    ]

};

window.samaraData = samaraData;
