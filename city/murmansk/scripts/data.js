// ============================================
// ДАННЫЕ КАРТОЧЕК МУРМАНСКОЙ ОБЛАСТИ
// ============================================

const murmanskData = {
//---------------------------Точки притяжения региона-----------------------------------------------------------

    attractions: [
        {
            id: 'hibiny',
            title: 'Хибины',
            image: '../../img/murmansk/cards_tochki/Hibiny_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Хибины</h1>
</div>
<!-- Блок 1: Крупнейший горный массив -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крупнейший горный массив Кольского полуострова</h2>
      <p class="modalBlock__description">
         Хибины&nbsp;&mdash; крупнейший горный массив на&nbsp;Кольском полуострове и&nbsp;один из&nbsp;древнейших в&nbsp;России, ему почти 400 млн лет. Это мир сглаженных временем и&nbsp;ледниками плато, глубоких ущелий и&nbsp;живописных долин с&nbsp;озерами&nbsp;&mdash; настоящая заполярная Мекка для активных путешественников.
      </p>
      <p class="modalBlock__description">
         Несмотря на&nbsp;свой возраст, эти горы продолжают расти, прибавляя по&nbsp;2&ndash;3&nbsp;см в&nbsp;год. Их&nbsp;климат суров: зимой морозы до &mdash;40 &deg;C, снег лежит с&nbsp;октября по&nbsp;июнь, а&nbsp;лето короткое и&nbsp;прохладное. Но&nbsp;именно эта суровость и&nbsp;манит путешественников&nbsp;&mdash; зимой здесь рай для лыжников, а&nbsp;в&nbsp;марте идеальные условия для северного сияния.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_1.jpg" alt="Панорама Хибинских гор с пологими склонами" loading="lazy">
   </div>
</div>
<!-- Блок 2: Озеро Малый Вудъявр и гора Юдычвумчорр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Озеро Малый Вудъявр и&nbsp;гора Юдычвумчорр</h2>
      <p class="modalBlock__description">
         Озеро Малый Вудъявр (&laquo;горное озеро&raquo; с&nbsp;саамского) расположено у&nbsp;подножья хребта Кукисвумчорр в&nbsp;десятке километров от&nbsp;Кировска. Вода здесь настолько прозрачная, что кажется кристальной, а&nbsp;необычная форма озера напоминает драгоценный камень. Летом берега превращаются в&nbsp;ягодную поляну с&nbsp;морошкой, черникой и&nbsp;клюквой&nbsp;&mdash; идеальное место для пикника.
      </p>
      <p class="modalBlock__description">
         Гора Юдычвумчорр (1200&nbsp;м)&nbsp;&mdash; самая высокая вершина Хибин и&nbsp;высшая точка всего Заполярья европейской части России. Название переводится как &laquo;гора гудящей долины&raquo;. Этот мощный массив с&nbsp;плоской вершиной и&nbsp;обрывистыми стенами обрамлен долинами реки Малая Белая и&nbsp;ручья Ферсмана. Иногда гору называют именем геохимика Александра Ферсмана, открывшего миру многие тайны Хибин.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_2.jpg" alt="Озеро Малый Вудъявр и вид на гору Юдычвумчорр" loading="lazy">
   </div>
</div>
<!-- Блок 3: Озеро Имандра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Озеро Имандра</h2>
      <p class="modalBlock__description">
         Имандра&nbsp;&mdash; крупнейший водоем Мурманской области. Его чистейшая вода и&nbsp;разнообразие прибрежных ландшафтов привлекают искателей настоящей северной природы. На&nbsp;берегах расположены города Апатиты и&nbsp;Мончегорск, а&nbsp;также многочисленные базы отдыха и&nbsp;кемпинги.
      </p>
      <p class="modalBlock__description">
         Озеро предлагает возможности для активного отдыха в&nbsp;любое время года. Летом здесь развиты каякинг, яхтинг и&nbsp;прогулки на&nbsp;катамаранах, а&nbsp;зимой поверхность льда превращается в&nbsp;трассы для лыжников, конькобежцев и&nbsp;снегоходчиков. Через хвойные леса и&nbsp;горные участки по&nbsp;берегам проходят живописные пешие маршруты разной сложности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_3.jpg" alt="Озеро Имандра с чистой водой и горными берегами" loading="lazy">
   </div>
</div>
<!-- Блок 4: Перевал географов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Перевал Географов</h2>
      <p class="modalBlock__description">
         Перевал Географов&nbsp;&mdash; одна из&nbsp;ключевых точек Хибин, соединяющая озеро Малый Вудъявр с&nbsp;долиной реки Большая Белая. Он&nbsp;пролегает между массивными вершинами Тахтарвумчорр и&nbsp;Вудъяврчорр. Подъем на&nbsp;перевал ступенчатый, с&nbsp;общим набором высоты около 650&nbsp;м.
      </p>
      <p class="modalBlock__description">
         С&nbsp;вершины открывается панорама сразу на&nbsp;четыре скальных цирка. В&nbsp;зимнее время здесь можно увидеть застывшие ледяные фонтаны&nbsp;&mdash; подземные источники, превратившиеся в&nbsp;причудливые ледяные скульптуры. Это место идеально подходит тем, кто хочет ощутить масштаб и&nbsp;суровую красоту Хибин.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_4.jpg" alt="Вид с Перевала географов на скальные цирки Хибин" loading="lazy">
   </div>
</div>
<!-- Блок 5: Полярно-альпийский ботанический сад и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ботанический сад и&nbsp;путь в&nbsp;Хибины</h2>
      <p class="modalBlock__description">
         Полярно-альпийский ботанический сад-институт имени Н.&nbsp;А.&nbsp;Аврорина (ПАБСИ)&nbsp;&mdash; первый и&nbsp;самый северный ботанический сад в&nbsp;мире, созданный за&nbsp;полярным кругом. Его главная задача&nbsp;&mdash; сохранять и&nbsp;изучать флору Хибинских гор. Для посетителей доступны оранжереи и&nbsp;питомники в&nbsp;составе экскурсионных групп.
      </p>
      <p class="modalBlock__description">
         <strong>Как добраться:</strong> Отправные точки&nbsp;&mdash; Кировск и&nbsp;Апатиты. На&nbsp;автомобиле по&nbsp;трассе Р-21 &laquo;Кола&raquo; из&nbsp;Мурманска. На&nbsp;самолете до&nbsp;аэропорта &laquo;Хибины&raquo; в&nbsp;15&nbsp;км от&nbsp;Апатитов, далее до&nbsp;Кировска на&nbsp;автобусе или такси. На&nbsp;поезде из&nbsp;Москвы, Петербурга или Мурманска до&nbsp;Апатитов, затем местным транспортом до&nbsp;Кировска.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_5.jpg" alt="Полярно-альпийский ботанический сад и карта проезда к Хибинам" loading="lazy">
   </div>
</div>`
        },

//---------------------------Атомный ледокол «Ленин»-----------------------------------------------------------
        {
            id: 'ledocol_lenin',
            title: 'Атомный ледокол «Ленин»',
            image: '../../img/murmansk/cards_tochki/Atomnyy_ledokol_Lenin_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Атомный ледокол &laquo;Ленин&raquo;</h1>
</div>
<!-- Блок 1: Первый в мире атомный ледокол -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Первый в&nbsp;мире надводный корабль с&nbsp;ядерной установкой</h2>
      <p class="modalBlock__description">
         Атомный ледокол &laquo;Ленин&raquo;&nbsp;&mdash; революционное судно, открывшее новую эпоху в&nbsp;освоении Арктики. Спущен на&nbsp;воду в&nbsp;1957 году на&nbsp;ленинградском судостроительном заводе, а&nbsp;в&nbsp;сентябре 1959-го отправился в&nbsp;свои первые испытания.
      </p>
      <p class="modalBlock__description">
         За&nbsp;свою 30-летнюю службу ледокол прошел более 650&nbsp;тыс. морских миль&nbsp;&mdash; это 30&nbsp;кругосветных переходов или три полета от&nbsp;Земли до&nbsp;Луны. В&nbsp;1971 году первым из&nbsp;надводных кораблей обогнул архипелаг Северная Земля с&nbsp;севера, доказав возможность круглогодичной навигации в&nbsp;высоких широтах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_1.jpg" alt="Атомный ледокол Ленин в море во время арктических походов" loading="lazy">
   </div>
</div>
<!-- Блок 2: Музей на вечной стоянке -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей на&nbsp;вечной стоянке</h2>
      <p class="modalBlock__description">
         После вывода из&nbsp;эксплуатации в&nbsp;1989 году легендарный ледокол обрел вечную стоянку в&nbsp;Мурманске, а&nbsp;на&nbsp;его борту открыт музей. Здесь полностью сохранена оригинальная обстановка: от&nbsp;капитанского мостика и&nbsp;машинного отделения до&nbsp;кают-компании и&nbsp;библиотеки.
      </p>
      <p class="modalBlock__description">
         Экскурсии по&nbsp;ледоколу позволят заглянуть в&nbsp;святая святых атомного флота: посетить столовую экипажа, медсанчасть, салон капитана и&nbsp;кают-компанию, где принимали таких выдающихся гостей, как Юрий Гагарин, Фидель Кастро и&nbsp;Ричард Никсон.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_2.jpg" alt="Интерьер музея на ледоколе: капитанский мостик и кают-компания" loading="lazy">
   </div>
</div>
<!-- Блок 3: Информационный центр и выставки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Информационный центр и&nbsp;выставки</h2>
      <p class="modalBlock__description">
         На&nbsp;борту ледокола работают Информационный центр по&nbsp;атомной энергии и&nbsp;интерактивная выставка &laquo;Атом и&nbsp;Арктика&raquo;, рассказывающая об&nbsp;истории освоения Северного морского пути, развитии атомного флота и&nbsp;современном состоянии арктических исследований.
      </p>
      <p class="modalBlock__description">
         Выставка сочетает исторические артефакты с&nbsp;современными мультимедийными технологиями, позволяя посетителям погрузиться в&nbsp;мир арктических экспедиций и&nbsp;атомных технологий.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_3.jpg" alt="Интерактивная выставка Атом и Арктика на борту ледокола" loading="lazy">
   </div>
</div>
<!-- Блок 4: Уникальные впечатления -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальные впечатления</h2>
      <p class="modalBlock__description">
         Посещение атомного ледокола &laquo;Ленин&raquo;&nbsp;&mdash; это возможность прикоснуться к&nbsp;живой истории освоения Арктики, увидеть технологический прорыв своего времени и&nbsp;оценить масштаб инженерной мысли.
      </p>
      <p class="modalBlock__description">
         Особое впечатление производит вид на&nbsp;ночной порт с&nbsp;иллюминацией гигантских кранов&nbsp;&mdash; зрелище, которое стоит увидеть собственными глазами. Морской вокзал Мурманска, у&nbsp;причала которого ошвартован ледокол, сам по&nbsp;себе является впечатляющим архитектурным объектом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_4.jpg" alt="Ночной вид на порт Мурманска и иллюминацию ледокола Ленин" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Атомный ледокол &laquo;Ленин&raquo; ошвартован у&nbsp;главной пристани Морского вокзала Мурманска, в&nbsp;самом центре города, что делает его легко доступным для посещения.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Мурманск, Портовый проезд, 25. <strong>Время работы и&nbsp;условия посещения:</strong> уточняйте на&nbsp;официальном сайте музея, так как могут быть изменения в&nbsp;расписании и&nbsp;порядке экскурсий. Рекомендуется бронировать экскурсии заранее, особенно в&nbsp;высокий сезон.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/kak_dobratsya.jpg" alt="Схема расположения Морского вокзала в Мурманске и ледокола Ленин" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Териберка-----------------------------------------------------------
        {
            id: 'teriberka',
            title: 'Териберка',
            image: '../../img/murmansk/cards_tochki/Teriberka_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Териберка</h1>
</div>
<!-- Блок 1: Старинный рыболовецкий поселок -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Старинный рыболовецкий поселок у&nbsp;Баренцева моря</h2>
      <p class="modalBlock__description">
         Знаменитое село Териберка&nbsp;&mdash; старинный рыболовецкий поселок на&nbsp;побережье Баренцева моря. Именно здесь находится ближайший в&nbsp;России доступный на&nbsp;автомобиле выход к&nbsp;Северному Ледовитому океану.
      </p>
      <p class="modalBlock__description">
         Старая Териберка сохранила дух традиционных поморских поселений с&nbsp;характерными деревянными домами, лодками и&nbsp;хозяйственными постройками. Село состоит из&nbsp;двух частей: старой с&nbsp;аутентичными поморскими постройками и&nbsp;более молодой, советской, откуда до&nbsp;берега океана&nbsp;&mdash; рукой подать.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_1.jpg" alt="Старые поморские дома и лодки в Териберке" loading="lazy">
   </div>
</div>
<!-- Блок 2: Дорога в Териберку -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Дорога в&nbsp;Териберку&nbsp;&mdash; незабываемое приключение</h2>
      <p class="modalBlock__description">
         Путь от&nbsp;Мурманска до&nbsp;Териберки составляет 120&nbsp;км, но&nbsp;уже дорога становится незабываемым приключением. Маршрут пролегает через суровые, но&nbsp;величественные ландшафты: бескрайнюю тундру, грозные сопки, глубокие ущелья и&nbsp;живописные перевалы, хранящие в&nbsp;себе многовековые тайны.
      </p>
      <p class="modalBlock__description">
         Дорога позволяет ощутить масштаб и&nbsp;мощь заполярной природы, увидеть смену ландшафтов и&nbsp;подготовиться к&nbsp;встрече с&nbsp;океаном.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_2.jpg" alt="Дорога через тундру и сопки к Териберке" loading="lazy">
   </div>
</div>
<!-- Блок 3: Природный парк и достопримечательности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природный парк и&nbsp;достопримечательности</h2>
      <p class="modalBlock__description">
         Напротив поселка, по&nbsp;другую сторону реки Териберки, находится одноименный природный парк (для посещения нужно разрешение)&nbsp;&mdash; самая маленькая особо охраняемая природная территория Мурманской области, но&nbsp;самая популярная.
      </p>
      <p class="modalBlock__description">
         Здесь находятся известные достопримечательности&nbsp;&mdash; пляж &laquo;Яйца дракона&raquo; с&nbsp;огромными валунами, водопады и&nbsp;птичьи базары. Сохранилось наследие Великой Отечественной войны&nbsp;&mdash; артиллерийская батарея на&nbsp;вершине сопки с&nbsp;орудиями 1930-х годов. Тут&nbsp;же находится знаменитое &laquo;кладбище кораблей&raquo;&nbsp;&mdash; останки рыболовных траулеров 1930&ndash;1950&nbsp;годов, лежащие на&nbsp;отмели Териберской губы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_3.jpg" alt="Пляж Яйца дракона и кладбище кораблей в Териберке" loading="lazy">
   </div>
</div>
<!-- Блок 4: Активный отдых в любое время года -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Активный отдых в&nbsp;любое время года</h2>
      <p class="modalBlock__description">
         В&nbsp;летнее время здесь можно заняться серфингом, дайвингом и&nbsp;снорклингом или отправиться на&nbsp;лодке на&nbsp;поиски китов, которые иногда заходят в&nbsp;прибрежные воды. Береговая линия с&nbsp;бухтами и&nbsp;мысами идеально подходит для морских прогулок и&nbsp;фотосъемки.
      </p>
      <p class="modalBlock__description">
         А&nbsp;зимой&nbsp;&mdash; кататься на&nbsp;снегоходах и&nbsp;ловить северное сияние. Териберка считается одним из&nbsp;лучших мест в&nbsp;регионе для наблюдения за&nbsp;полярным сиянием благодаря удаленности от&nbsp;городской засветки и&nbsp;чистому небу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_4.jpg" alt="Серфинг летом и северное сияние зимой в Териберке" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Териберки</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> От&nbsp;мурманского автовокзала до&nbsp;села ходит ежедневный автобус. Расписание лучше уточнять заранее, так как оно может меняться в&nbsp;зависимости от&nbsp;сезона.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> От&nbsp;Мурманска до&nbsp;села по&nbsp;трассе, время в&nbsp;пути&nbsp;&mdash; около двух часов (130&nbsp;км). Дорога асфальтированная, но&nbsp;в&nbsp;зимнее время требует внимательности и&nbsp;подготовки автомобиля к&nbsp;арктическим условиям. Рекомендуется иметь полный бак топлива и&nbsp;проверенную зимнюю резину.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/kak_dobratsya.jpg" alt="Карта маршрута от Мурманска до Териберки с указанием достопримечательностей" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Полуостров Рыбачий-----------------------------------------------------------
        {
            id: 'poluostrov_rybachii',
            title: 'Полуостров Рыбачий',
            image: '../../img/murmansk/cards_tochki/Poluostrov_Rybachiy_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Полуострова Средний и&nbsp;Рыбачий</h1>
</div>
<!-- Блок 1: Самый север региона -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Самый север региона на&nbsp;границе с&nbsp;Норвегией</h2>
      <p class="modalBlock__description">
         Полуострова Средний и&nbsp;Рыбачий&nbsp;&mdash; это самый север региона почти на&nbsp;границе с&nbsp;Норвегией. Здесь находится мыс Немецкий&nbsp;&mdash; самая северная континентальная точка Европейской части России.
      </p>
      <p class="modalBlock__description">
         Природный парк на&nbsp;полуостровах манит путешественников суровой красотой своих ландшафтов и&nbsp;богатым наследием. В&nbsp;годы Великой Отечественной войны здесь проходили ожесточенные бои за&nbsp;защиту Заполярья от&nbsp;фашистских захватчиков. Легендарный хребет Муста-Тунтури стал ареной длительных и&nbsp;кровопролитных сражений.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_1.jpg" alt="Мыс Немецкий — самая северная точка и хребет Муста-Тунтури" loading="lazy">
   </div>
</div>
<!-- Блок 2: Историческое наследие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Историческое наследие: от&nbsp;древности до&nbsp;войны</h2>
      <p class="modalBlock__description">
         Эта земля с&nbsp;давних времен хранит свою историю: еще до&nbsp;нашей эры здесь селились люди, а&nbsp;в&nbsp;XVI веке через эти территории пролегал оживленный торговый путь. Здесь находят писаницы&nbsp;&mdash; наскальные изображения III&ndash;I&nbsp;вв.&nbsp;до&nbsp;н.э.
      </p>
      <p class="modalBlock__description">
         После Советско-финской войны эти территории отошли Советскому Союзу. Сегодня места хранят многочисленные свидетельства героических лет: сохранившиеся доты, братские могилы, остатки оборонительных сооружений и&nbsp;памятники защитникам Советского Заполярья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_2.jpg" alt="Наскальные рисунки-писаницы и сохранившиеся военные укрепления" loading="lazy">
   </div>
</div>
<!-- Блок 3: Природные достопримечательности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природные достопримечательности</h2>
      <p class="modalBlock__description">
         Берег Баренцева моря завораживает дикой, первозданной мощью. Среди главных природных объектов&nbsp;&mdash; мыс Кекурский с&nbsp;крутым хребтом, уходящим под воды Баренцева моря, скалы &laquo;Два брата&raquo;&nbsp;&mdash; высокие останцы, с&nbsp;которыми связано много легенд.
      </p>
      <p class="modalBlock__description">
         Живописные птичьи базары на&nbsp;скалах полуострова поражают своим размахом&nbsp;&mdash; здесь гнездятся тысячи морских птиц, а&nbsp;также редкие хищники&nbsp;&mdash; зимняки и&nbsp;соколы-сапсаны. В&nbsp;прибрежных водах можно наблюдать за&nbsp;морскими обитателями.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_3.jpg" alt="Скалы Два брата и птичьи базары на побережье" loading="lazy">
   </div>
</div>
<!-- Блок 4: Инфраструктура и активный отдых -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Инфраструктура и&nbsp;активный отдых</h2>
      <p class="modalBlock__description">
         С&nbsp;недавних пор в&nbsp;этих местах начали развивать инфраструктуру для туристов. На&nbsp;полуострове Средний, например, расположился экологичный арктик-отель &laquo;Китовый берег&raquo;: помимо живописных домиков с&nbsp;видом на&nbsp;океан здесь организуют трекинги и&nbsp;джип-сафари по&nbsp;тундре, а&nbsp;еще&nbsp;&mdash; яхт-туры на&nbsp;поиски крабов и&nbsp;китов.
      </p>
      <p class="modalBlock__description">
         Насладиться первозданной природой, поймать северное сияние и&nbsp;даже выйти в&nbsp;открытое море&nbsp;&mdash; все это становится доступным для путешественников, готовых к&nbsp;суровым, но&nbsp;невероятно красивым условиям Заполярья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_4.jpg" alt="Арктик-отель Китовый берег и яхт-туры у побережья" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и важная информация -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;важная информация</h2>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Для посещения особо охраняемой природной территории (ООПТ) необходимо оформить разрешение заранее. Это можно сделать через администрацию природного парка или специализированные турагентства.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> Из&nbsp;Мурманска по&nbsp;трассе Р-21 &laquo;Кола&raquo;, ориентир&nbsp;&mdash; КПП у&nbsp;реки Титовка. Отправляться стоит на&nbsp;хорошо подготовленных внедорожниках в&nbsp;сопровождении опытных гидов, так как дороги на&nbsp;полуостровах сложные, а&nbsp;погодные условия могут резко меняться.
      </p>
      <p class="modalBlock__description">
         На&nbsp;территории полуостровов есть несколько глэмпингов и&nbsp;арктик-отелей, где можно остановиться. Бронирование рекомендуется осуществлять заранее, особенно в&nbsp;летний сезон и&nbsp;период наблюдения за&nbsp;северным сиянием.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/kak_dobratsya.jpg" alt="Карта полуостровов Средний и Рыбачий с КПП и размещением" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Баренцево море-----------------------------------------------------------
        {
            id: 'barentcevo_more',
            title: 'Баренцево море',
            image: '../../img/murmansk/cards_tochki/Barencevo_more_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Баренцево море</h1>
</div>
<!-- Блок 1: Крупнейшее море Северного Ледовитого океана -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крупнейшее море Северного Ледовитого океана</h2>
      <p class="modalBlock__description">
         Баренцево море&nbsp;&mdash; крупнейшее по&nbsp;площади акватории среди морей Северного Ледовитого океана. Его огромная территория в&nbsp;1,5 раза превышает размеры Карского моря и&nbsp;в&nbsp;15&nbsp;раз превосходит площадь Белого моря.
      </p>
      <p class="modalBlock__description">
         Сюда приезжают за&nbsp;особой эстетикой Русского Севера, чтобы заняться дайвингом, увидеть северное сияние, понаблюдать за&nbsp;китами и&nbsp;морскими котиками. Море сохраняет свою суровую красоту в&nbsp;любое время года.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_1.jpg" alt="Панорама Баренцева моря с ледяными просторами и айсбергами" loading="lazy">
   </div>
</div>
<!-- Блок 2: География и климат -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">География и&nbsp;климат</h2>
      <p class="modalBlock__description">
         Баренцево море расположено в&nbsp;западной части Северного Ледовитого океана и&nbsp;омывает берега России и&nbsp;Норвегии. Благодаря влиянию теплого течения Гольфстрим некоторые участки, включая акваторию порта Мурманска, не&nbsp;замерзают круглый год.
      </p>
      <p class="modalBlock__description">
         Однако значительная часть моря на&nbsp;несколько месяцев покрывается льдом, и&nbsp;навигация здесь возможна только с&nbsp;помощью ледоколов. Зимой здесь господствует полярная ночь и&nbsp;пронизывающий холод, а&nbsp;лето приносит лишь небольшое потепление.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_2.jpg" alt="Ледокол в Баренцевом море и суровые ледяные просторы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Береговая линия и пейзажи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Береговая линия и&nbsp;пейзажи</h2>
      <p class="modalBlock__description">
         Береговая линия Баренцева моря преимущественно скалистая и&nbsp;неприступная, хотя встречаются и&nbsp;уютные бухты с&nbsp;песчаными пляжами. Несмотря на&nbsp;то, что эти пляжи расположены за&nbsp;Полярным кругом и&nbsp;не&nbsp;ждут гостей для традиционного пляжного отдыха, в&nbsp;особо теплые сезоны здесь можно позагорать и&nbsp;даже поплавать.
      </p>
      <p class="modalBlock__description">
         Большая часть побережья представляет собой каменистые берега, скальные образования и&nbsp;холодные воды свинцово-серого оттенка. Эти суровые пейзажи обладают особым очарованием и&nbsp;привлекают тех, кто стремится оказаться на&nbsp;краю света и&nbsp;ощутить дыхание вечности.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_3.jpg" alt="Скалистые берега Баренцева моря и уютные бухты с песком" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> из&nbsp;Мурманска до&nbsp;побережья ведет несколько трасс. В&nbsp;двух часах езды (130&nbsp;км) находится природный парк &laquo;Териберка&raquo;, который является популярным местом для знакомства с&nbsp;Баренцевым морем.
      </p>
      <p class="modalBlock__description">
         Также из&nbsp;Мурманска к&nbsp;берегу можно заказать наземный тур или круиз по&nbsp;Кольскому заливу. Многие туристические компании предлагают морские экскурсии, включая наблюдение за&nbsp;китами и&nbsp;птицами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_4.jpg" alt="Карта побережья Баренцева моря с маршрутами из Мурманска" loading="lazy">
   </div>
</div>`
        }

    ],

//--------------------------------------ВЫБРАТЬСЯ НА ПРИРОДУ-----------------------------------------------------------
//--------------------------------------ВЫБРАТЬСЯ НА ПРИРОДУ-----------------------------------------------------------


    nature: [
        {
            id: 'laplandsii_zapovednik',
            title: 'Лапландский заповедник',
            image: '../../img/murmansk/cards_nature/Laplandskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Лапландский&raquo;</h1>
</div>
<!-- Блок 1: Создание и статус -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заповедник создан в&nbsp;1930 году</h2>
      <p class="modalBlock__description">
         Заповедник &laquo;Лапландский&raquo; создан в&nbsp;1930 году для защиты дикого северного оленя и&nbsp;уникальной тайги. Это идеальное место для знакомства с&nbsp;природой Кольского полуострова, которое входит во&nbsp;всемирную сеть биосферных резерватов ЮНЕСКО.
      </p>
      <p class="modalBlock__description">
         Один из&nbsp;основателей заповедника&nbsp;&mdash; Олег Семенов-Тян-Шанский, советский биолог и&nbsp;натуралист, внук знаменитого исследователя Петра Петровича Семенова-Тян-Шанского. Он&nbsp;более полувека своей жизни посвятил изучению этой уникальной природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_1.jpg" alt="Ландшафты Лапландского заповедника с лесами и горами" loading="lazy">
   </div>
</div>
<!-- Блок 2: Масштабы и природа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Масштабы и&nbsp;природное разнообразие</h2>
      <p class="modalBlock__description">
         Заповедник поражает своими масштабами&nbsp;&mdash; его площадь составляет около 280&nbsp;тыс.&nbsp;га, что делает его одной из&nbsp;крупнейших природоохранных зон Северной Европы. Здесь представлено практически все ландшафтное разнообразие Кольского полуострова: леса, реки, болота, озера, скалы и&nbsp;горные тундры.
      </p>
      <p class="modalBlock__description">
         Особой гордостью заповедника являются старовозрастные леса: более&nbsp;50% его площади покрыто сосновыми и&nbsp;еловыми лесами возрастом более 300&nbsp;лет, что нехарактерно для других районов региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_2.jpg" alt="Старовозрастные леса и дикие северные олени в заповеднике" loading="lazy">
   </div>
</div>
<!-- Блок 3: Фауна и музеи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Фауна и&nbsp;музейные объекты</h2>
      <p class="modalBlock__description">
         Фауна заповедника включает почти 1000 особей краснокнижного дикого северного оленя, а&nbsp;также редких птиц, таких как беркуты, орланы-белохвосты и&nbsp;филины.
      </p>
      <p class="modalBlock__description">
         Для туристов в&nbsp;заповеднике подготовлено несколько ключевых объектов. Экспозиция &laquo;В&nbsp;Краю летучего камня&raquo; знакомит с&nbsp;жизнью коренных народов&nbsp;&mdash; саамов. Центральным природным объектом является озеро Чунозеро с&nbsp;протяженной береговой линией. На&nbsp;его берегу расположен дом-музей первого директора Германа Крепса и&nbsp;квартира-музей Семенова-Тян-Шанского.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_3.jpg" alt="Экспозиция о саамах и дом-музей в заповеднике" loading="lazy">
   </div>
</div>
<!-- Блок 4: Экотропы и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Экотропы и&nbsp;как добраться</h2>
      <p class="modalBlock__description">
         Особой популярностью пользуются экотропы: восхождение на&nbsp;гору Второй Ельнюн со&nbsp;священным саамским камнем сейд, кольцевая тропа &laquo;Вдоль озера&raquo; с&nbsp;оборудованными настилами, и&nbsp;специальная детская тропа &laquo;Лесная почемучка&raquo; с&nbsp;избушкой Бабы Яги. Для семейного посещения предназначен деревянный терем Деда Мороза.
      </p>
      <p class="modalBlock__description">
         <strong>Как добраться:</strong> На&nbsp;автомобиле из&nbsp;Мончегорска: дорога до&nbsp;центральной усадьбы заповедника займет 35&nbsp;минут (45&nbsp;км). На&nbsp;автомобиле из&nbsp;Мурманска: путь по&nbsp;автодороге Р-21 &laquo;Кола&raquo; займет 2&nbsp;часа 30&nbsp;минут (175&nbsp;км).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_4.jpg" alt="Экотропы в заповеднике и карта проезда" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Терский берег Белого моря-----------------------------------------------------------
        {
            id: 'terskii_bereg_belogo_morya',
            title: 'Терский берег Белого моря',
            image: '../../img/murmansk/cards_nature/Terskiy_bereg_Belogo_morya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Терский берег Белого моря</h1>
</div>
<!-- Блок 1: Самобытная историческая область -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Самобытная историческая область</h2>
      <p class="modalBlock__description">
         Терский берег&nbsp;&mdash; южная оконечность Кольского полуострова и&nbsp;северное побережье Белого моря. Самобытная историческая область протянулась на&nbsp;сотни километров, поражая воображение своими суровыми и&nbsp;величественными пейзажами.
      </p>
      <p class="modalBlock__description">
         Это место&nbsp;&mdash; словно большой музей поморской культуры под открытым небом: в&nbsp;здешних селах (тонях) сохранилась не&nbsp;только забытое северное зодчество, но&nbsp;и&nbsp;почти ушедшая поморская культура.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_1.jpg" alt="Панорама Терского берега Белого моря с суровыми пейзажами" loading="lazy">
   </div>
</div>
<!-- Блок 2: Уникальный уголок природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальный уголок природы</h2>
      <p class="modalBlock__description">
         Терский берег Белого моря&nbsp;&mdash; одна из&nbsp;самых самобытных локаций Кольского полуострова, где величественное Белое море встречается с&nbsp;бескрайними просторами северной тундры. Этот уникальный уголок природы протянулся на&nbsp;сотни километров вдоль юго-восточного побережья.
      </p>
      <p class="modalBlock__description">
         Скалистые мысы здесь неожиданно сменяются золотистыми и&nbsp;даже красно-коричневыми дюнами Кузоменьских песков, а&nbsp;богатые птичьи колонии соседствуют с&nbsp;пастбищами северных оленей. Особое очарование этим местам придает северное сияние.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_2.jpg" alt="Дюны Кузоменьских песков и птичьи колонии на Терском берегу" loading="lazy">
   </div>
</div>
<!-- Блок 3: Культурное наследие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культурное наследие и&nbsp;возможности</h2>
      <p class="modalBlock__description">
         Эта земля хранит многовековое наследие коренных народов Севера. Древние памятники и&nbsp;артефакты рассказывают о&nbsp;самобытной культуре, традициях и&nbsp;духовных практиках поморов.
      </p>
      <p class="modalBlock__description">
         Для путешественников Терский берег открывает множество возможностей: от&nbsp;захватывающих пеших маршрутов и&nbsp;морских прогулок до&nbsp;погружения в&nbsp;уникальное культурное наследие этого сурового края. Каждый, кто побывал здесь, увозит с&nbsp;собой частичку его невероятной атмосферы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_3.jpg" alt="Старинные поморские постройки и культурные артефакты" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> из&nbsp;Кандалакши по&nbsp;берегу залива на&nbsp;восток. Отправляться сюда стоит на&nbsp;хорошо подготовленных внедорожниках в&nbsp;сопровождении опытных гидов, так как дороги в&nbsp;этих местах могут быть сложными, особенно в&nbsp;межсезонье и&nbsp;зимой.
      </p>
      <p class="modalBlock__description">
         Рекомендуется планировать поездку заранее, учитывая отдаленность и&nbsp;специфику местности. Многие туристические компании предлагают организованные туры с&nbsp;опытными проводниками, знающими особенности Терского берега.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_4.jpg" alt="Карта Терского берега с маршрутами из Кандалакши" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Кандалакшский заповедник-----------------------------------------------------------
        {
            id: 'kandalakshkii_zapovednik',
            title: 'Кандалакшский заповедник',
            image: '../../img/murmansk/cards_nature/Kandalakshskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Кандалакшский&raquo;</h1>
</div>
<!-- Блок 1: Заповедник на двух морях -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заповедник на&nbsp;двух морях</h2>
      <p class="modalBlock__description">
         Кандалакшский заповедник&nbsp;&mdash; его суровые берега омываются водами двух морей, Баренцева и&nbsp;Белого, а&nbsp;сам он&nbsp;занимает более 550&nbsp;островов. Заповедник был создан 7&nbsp;сентября 1932 года для охраны гаги обыкновенной&nbsp;&mdash; морской утки, знаменитой ценным пухом.
      </p>
      <p class="modalBlock__description">
         Кандалакшский заповедник находится на&nbsp;берегах одноименного залива Белого моря и&nbsp;группе островов Баренцева: более&nbsp;70% территории&nbsp;&mdash; морская акватория, а&nbsp;главные обитатели&nbsp;&mdash; водоплавающие птицы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_1.jpg" alt="Острова Кандалакшского заповедника и морские птицы" loading="lazy">
   </div>
</div>
<!-- Блок 2: Территория и география -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Территория и&nbsp;география</h2>
      <p class="modalBlock__description">
         Общая площадь заповедника составляет 70&thinsp;530&nbsp;га, из&nbsp;которых 49&thinsp;583&nbsp;га (почти 75%)&nbsp;&mdash; морская акватория. Территория включает несколько архипелагов: Айновские и&nbsp;Гавриловские острова, архипелаг Семь островов в&nbsp;Баренцевом море, а&nbsp;также острова Кандалакшского залива в&nbsp;Белом море.
      </p>
      <p class="modalBlock__description">
         Заповедник расположен в&nbsp;зонах тундры и&nbsp;северной тайги, его участки распределены по&nbsp;пяти районам Мурманской области и&nbsp;Лоухскому району Карелии.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_2.jpg" alt="Карта архипелагов Кандалакшского заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 3: Фауна и обитатели -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Фауна и&nbsp;обитатели</h2>
      <p class="modalBlock__description">
         Кандалакшский заповедник является важным центром орнитологических исследований. Здесь обитают морские колониальные птицы и&nbsp;млекопитающие: кольчатая нерпа, морской заяц, серый тюлень, а&nbsp;изредка заплывает белуха.
      </p>
      <p class="modalBlock__description">
         Во&nbsp;время путешествий по&nbsp;Кандалакшскому заливу часто можно наблюдать нерп. Изредка сюда заходят и&nbsp;белухи. Заповедник играет ключевую роль в&nbsp;сохранении популяции гаги обыкновенной и&nbsp;других морских птиц.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_3.jpg" alt="Гага обыкновенная и морские тюлени в заповеднике" loading="lazy">
   </div>
</div>
<!-- Блок 4: Музей природы и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей природы и&nbsp;как добраться</h2>
      <p class="modalBlock__description">
         Начать знакомство можно с&nbsp;Музея природы заповедника в&nbsp;Кандалакше. В&nbsp;его экспозиции представлены материалы, рассказывающие об&nbsp;истории заповедника, его природе и&nbsp;обитателях. Музей дает хорошее представление о&nbsp;уникальной экосистеме этого региона.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес визит-центра:</strong> Кандалакша, Линейная улица, 35. <strong>Подробности</strong> о&nbsp;режиме работы, экскурсиях и&nbsp;правилах посещения&nbsp;&mdash; на&nbsp;официальном сайте заповедника. Рекомендуется уточнять информацию заранее, особенно если планируется посещение островов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_4.jpg" alt="Музей природы заповедника в Кандалакше и карта расположения" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Ловозерские тундры-----------------------------------------------------------
        {
            id: 'lovoserskiye_tundri',
            title: 'Ловозерские тундры',
            image: '../../img/murmansk/cards_nature/Lovozerskie_tundry_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Ловозерские тундры</h1>
</div>
<!-- Блок 1: Величественный массив -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Величественный массив</h2>
      <p class="modalBlock__description">
         Второй после Хибин крупный горный массив Кольского полуострова, Ловозерские тундры расположились между Умбозером и&nbsp;Ловозером. По&nbsp;форме они напоминают подкову, внутри которой находится священное для саамов Сейдозеро.
      </p>
      <p class="modalBlock__description">
         Это царство чистейших озер, извилистых рек и&nbsp;звонких ручьев, сохранившее свою первозданную красоту. Слово &laquo;тундры&raquo; происходит от&nbsp;финского &laquo;tunturi&raquo;, что означает &laquo;безлесная плоская вершина&raquo;&nbsp;&mdash; характерный тип местных вершин чуть выше 1000&nbsp;метров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_1.jpg" alt="Вид на Ловозерские тундры и подковообразную долину" loading="lazy">
   </div>
</div>
<!-- Блок 2: Геология и рельеф -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Геология и&nbsp;рельеф</h2>
      <p class="modalBlock__description">
         Уникальный рельеф массива сформировался благодаря мощному прорыву магмы сквозь толщу земной коры, создавшему пологие формы и&nbsp;особую структуру пластов. С&nbsp;геологической точки зрения, это родной брат Хибинским горам.
      </p>
      <p class="modalBlock__description">
         Именно у&nbsp;Сейдозера, считающегося сакральным центром тундр, находилась точка выхода древней магмы. Здесь, среди причудливых скал и&nbsp;глубоких долин, находятся особые места силы, издревле почитаемые саамами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_2.jpg" alt="Скалы и долины Ловозерских тундр" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сакральное сердце тундр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сакральное сердце тундр</h2>
      <p class="modalBlock__description">
         Священное Сейдозеро и&nbsp;загадочные цирки Раслака&nbsp;&mdash; особые места, притягивающие искателей древних тайн. По&nbsp;преданиям, в&nbsp;Сейдозере обитают духи предков, а&nbsp;происхождение цирков до&nbsp;сих пор вызывает споры среди исследователей.
      </p>
      <p class="modalBlock__description">
         Коренные жители&nbsp;&mdash; саамы&nbsp;&mdash; населяли эти тундры еще с&nbsp;XIV&nbsp;века, сделав поселок Ловозеро духовным и&nbsp;культурным центром своего края. Их&nbsp;традиции и&nbsp;верования неразрывно связаны с&nbsp;этим ландшафтом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_3.jpg" alt="Сейдозеро в окружении гор" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Маршруты по&nbsp;тундрам начинаются от&nbsp;сел Ловозеро или Ревда. Добраться до&nbsp;них можно на&nbsp;автомобиле, свернув с&nbsp;федеральной трассы &laquo;Кола&raquo; в&nbsp;районе города Оленегорска.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Посещение некоторых сакральных мест, особенно вблизи Сейдозера, может регулироваться. Рекомендуется уважать местные традиции и&nbsp;уточнять возможность прохода заранее. Это суровый и&nbsp;прекрасный край нетронутой природы Русского Севера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_4.jpg" alt="Дорога к Ловозерским тундрам и карта" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Остров Кильдин-----------------------------------------------------------
        {
            id: 'ostrov_kildin',
            title: 'Остров Кильдин',
            image: '../../img/murmansk/cards_nature/Ostrov_Kildin_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Остров Кильдин</h1>
</div>
<!-- Блок 1: Каменный страж -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Каменный страж</h2>
      <p class="modalBlock__description">
         Остров Кильдин поднимается из&nbsp;вод Баренцева моря у&nbsp;выхода из&nbsp;Кольского залива, словно каменный страж заполярных рубежей. Он&nbsp;обладает не&nbsp;только фантастической красотой, но&nbsp;и&nbsp;драматичной историей, полной загадок и&nbsp;тайн.
      </p>
      <p class="modalBlock__description">
         Первые упоминания об&nbsp;острове относятся к&nbsp;середине XVI&nbsp;века, а&nbsp;в&nbsp;начале XVII века мореплаватель Вильям Баренц нанес его точные очертания на&nbsp;все морские карты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_1.jpg" alt="Вид на остров Кильдин с моря" loading="lazy">
   </div>
</div>
<!-- Блок 2: Наследие военного прошлого -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Наследие военного прошлого</h2>
      <p class="modalBlock__description">
         Настоящую славу Кильдину принесли советские времена, когда здесь была создана мощная военная база с&nbsp;подземными коммуникациями, ракетными заводами и&nbsp;шахтами.
      </p>
      <p class="modalBlock__description">
         В&nbsp;годы расцвета гарнизон насчитывал до&nbsp;15&nbsp;тысяч человек. Сегодня лишь ржавая техника, остатки аэродромного покрытия и&nbsp;подземные лабиринты напоминают о&nbsp;былом величии, оставляя неизгладимое впечатление у&nbsp;посетителей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_2.jpg" alt="Остатки военной техники и сооружений на Кильдине" loading="lazy">
   </div>
</div>
<!-- Блок 3: Экологическое возрождение и феномен -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Возрождение и&nbsp;природный феномен</h2>
      <p class="modalBlock__description">
         Сегодня Кильдин становится центром экологического возрождения. В&nbsp;рамках экспедиции РГО &laquo;Арктика. Генеральная уборка&raquo; эксперты и&nbsp;добровольцы проводят масштабные работы по&nbsp;очистке острова от&nbsp;наследия военного прошлого.
      </p>
      <p class="modalBlock__description">
         Уникальная достопримечательность&nbsp;&mdash; озеро Могильное. Это природный феномен, где одновременно обитают и&nbsp;морские, и&nbsp;пресноводные организмы, включая редкую озерную треску. Это единственный подобный водоем в&nbsp;России.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_3.jpg" alt="Экологическая уборка на острове и озеро Могильное" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Доступ на&nbsp;остров возможен только по&nbsp;воде. Добраться можно из&nbsp;Мурманска или Териберки на&nbsp;моторном катере, либо в&nbsp;ходе специализированных круизов вдоль берега Баренцева моря.
      </p>
      <p class="modalBlock__description">
         <strong>Обратите внимание:</strong> Посещение острова требует тщательной подготовки, согласования из-за пограничной зоны и&nbsp;может быть сопряжено с&nbsp;трудностями из-за сложной логистики и&nbsp;погодных условий. Рекомендуется планировать поездку через проверенных организаторов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_4.jpg" alt="Катер у берегов Кильдина и карта маршрута" loading="lazy">
   </div>
</div>`
        },
//--------------------------------------Сейдъявврь-----------------------------------------------------------
        {
            id: 'seydavr',
            title: '«Сейдъявврь»',
            image: '../../img/murmansk/cards_nature/Seydyavr_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Природный парк &laquo;Сейдъявврь&raquo;</h1>
</div>
<!-- Блок 1: Священное место -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Священное место</h2>
      <p class="modalBlock__description">
         Природный парк со&nbsp;сложным саамским названием &laquo;Сейдъявврь&raquo; (в&nbsp;переводе&nbsp;&mdash; &laquo;священный&raquo;) охраняет легендарное Сейдозеро и&nbsp;прилегающие каньоны впадающих в&nbsp;него рек и&nbsp;ручьев в&nbsp;сердце Ловозерских тундр.
      </p>
      <p class="modalBlock__description">
         Для коренного населения эти места испокон веков считаются священными. По&nbsp;легендам, именно здесь располагалась загадочная цивилизация Гипербореи.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_1.jpg" alt="Панорама природного парка Сейдъявврь и Сейдозера" loading="lazy">
   </div>
</div>
<!-- Блок 2: Озеро Сейдозеро -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Озеро-загадка</h2>
      <p class="modalBlock__description">
         Озеро Сейдозеро, лежащее на&nbsp;высоте 189&nbsp;м, протянулось среди тундры на&nbsp;8&nbsp;км. Его кристально чистые воды сравнивают с&nbsp;зеркалом, а&nbsp;уникальный микроклимат позволяет расти здесь деревьям, нехарактерным для Крайнего Севера&nbsp;&mdash; осине и&nbsp;ольхе.
      </p>
      <p class="modalBlock__description">
         Ученые спорят о&nbsp;происхождении этого места: одни видят кратер потухшего вулкана, другие предполагают следы древней деятельности. Энтузиасты верят, что Сейдозеро было центром Гипербореи.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_2.jpg" alt="Вид на зеркальную гладь Сейдозера" loading="lazy">
   </div>
</div>
<!-- Блок 3: Легенда о Куйве -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Легенда, застывшая в&nbsp;скале</h2>
      <p class="modalBlock__description">
         Главная мистическая достопримечательность&nbsp;&mdash; гигантское изображение воина-охотника на&nbsp;скале, которое называют Куйва. Силуэт высотой более 70&nbsp;м, согласно древней саамской легенде,&nbsp;&mdash; жестокий великан, навеки обращенный в&nbsp;камень богами.
      </p>
      <p class="modalBlock__description">
         Заказник создан для сохранения не&nbsp;только уникальной природы, но&nbsp;и&nbsp;культурного наследия саамов. Местные жители советуют испросить разрешения у&nbsp;духов&nbsp;&mdash; сейдов, которые, по&nbsp;поверьям, обитают в&nbsp;огромных валунах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_3.jpg" alt="Изображение Куйвы на скале у Сейдозера" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться и правила -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;правила посещения</h2>
      <p class="modalBlock__description">
         Путь до&nbsp;Сейдозера начинается в&nbsp;селе Ловозеро. Попасть к&nbsp;озеру, укрытому горами, можно пешком через перевал Ловозерских тундр или на&nbsp;лодке по&nbsp;Ловозеру с&nbsp;последующим пешим переходом через перешеек.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> Для посещения природного парка &laquo;Сейдъявврь&raquo; требуется специальное разрешение. Его необходимо оформить заранее. Соблюдайте строгие правила поведения на&nbsp;охраняемой территории, уважайте священные для саамов места.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_4.jpg" alt="Тропа к Сейдозеру и информационный щит парка" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Заповедник «Пасвик»-----------------------------------------------------------
        {
            id: 'zapovednik_pasvik',
            title: 'Заповедник «Пасвик»',
            image: '../../img/murmansk/cards_nature/Paskvik_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Пасвик&raquo;</h1>
</div>
<!-- Блок 1: Пограничный заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Пограничный заповедник</h2>
      <p class="modalBlock__description">
         Самый молодой заповедник в&nbsp;Мурманской области был создан для сохранения и&nbsp;изучения уникальных водно-болотных угодий и&nbsp;богатой фауны водоплавающих птиц.
      </p>
      <p class="modalBlock__description">
         Территория представляет собой узкую полосу, протянувшуюся на&nbsp;44&nbsp;км вдоль границы России и&nbsp;Норвегии. Это единственный в&nbsp;России заповедник, полностью расположенный в&nbsp;пограничной зоне.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_1.jpg" alt="Вид на долину реки Пасвик и леса заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Зеленый пояс Фенноскандии -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">В&nbsp;сердце Зеленого пояса</h2>
      <p class="modalBlock__description">
         &laquo;Пасвик&raquo; является ключевой частью Зеленого пояса Фенноскандии&nbsp;&mdash; международного проекта по&nbsp;сохранению старовозрастных лесов вдоль границ России, Финляндии и&nbsp;Норвегии.
      </p>
      <p class="modalBlock__description">
         Четверть территории заповедника&nbsp;&mdash; это болота. Он&nbsp;расположен на&nbsp;рубеже северной тайги и&nbsp;лесотундры, в&nbsp;зоне притундровых лесов. Контрастные пейзажи этих мест поражают воображение.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_2.jpg" alt="Старовозрастной лес и болота заповедника Пасвик" loading="lazy">
   </div>
</div>
<!-- Блок 3: Визит-центр и Музей природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Визит-центр и&nbsp;Музей природы</h2>
      <p class="modalBlock__description">
         Начать знакомство с&nbsp;заповедником можно с&nbsp;современного визит-центра в&nbsp;поселке Никель&nbsp;&mdash; центра притяжения эко-туристов и&nbsp;ученых. Здесь проходят мастер-классы, научные семинары и&nbsp;культурные мероприятия.
      </p>
      <p class="modalBlock__description">
         В&nbsp;январе 2022 года здесь открылся современный Музей природы с&nbsp;мультимедийной экспозицией, посвященной уникальной красоте и&nbsp;биоразнообразию этого заполярного края.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_3.jpg" alt="Здание визит-центра и экспозиция Музея природы в Никеле" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Основная точка доступа для туристов&nbsp;&mdash; визит-центр заповедника. Он&nbsp;расположен в&nbsp;поселке Никель, куда можно добраться на&nbsp;автомобиле из&nbsp;Мурманска или Заполярного.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес визит-центра:</strong> пгт. Никель, Гвардейский проспект, 43. <strong>Подробности</strong> о&nbsp;режиме работы, экскурсиях, правилах посещения самой заповедной территории (которая является пограничной зоной)&nbsp;&mdash; на&nbsp;официальном сайте заповедника. Все визиты необходимо согласовывать заранее.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_4.jpg" alt="Дорога к Никелю и карта расположения визит-центра" loading="lazy">
   </div>
</div>`
        }

    ],

//--------------------------------------КУЛЬТУРНЫЙ КОД-----------------------------------------------------------
//--------------------------------------КУЛЬТУРНЫЙ КОД-----------------------------------------------------------

    culture: [
        {
            id: 'dolina_slavy',
            title: '«Долина Славы»',
            image: '../../img/murmansk/cards_culture/dolina_slavy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Мемориал &laquo;Долина Славы&raquo;</h1>
</div>
<!-- Блок 1: Рубеж обороны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Несокрушимый рубеж</h2>
      <p class="modalBlock__description">
         Мемориальный комплекс &laquo;Долина Славы&raquo; хранит память о&nbsp;жесточайших сражениях Великой Отечественной войны в&nbsp;Заполярье. Изначально это место солдаты назвали &laquo;Долиной смерти&raquo;.
      </p>
      <p class="modalBlock__description">
         Здесь, вдоль хребта Мустатунтури и&nbsp;реки Западная Лица, с&nbsp;1941 по&nbsp;1944 год проходила линия фронта. Это был единственный сухопутный рубеж СССР, который фашистским войскам так и&nbsp;не&nbsp;удалось преодолеть. За&nbsp;1195 дней боев здесь погибло и&nbsp;пропало без вести более 10&nbsp;тысяч советских воинов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_1.jpg" alt="Мемориальный комплекс Долина Славы и хребет Мустатунтури" loading="lazy">
   </div>
</div>
<!-- Блок 2: Память и возрождение -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Память и&nbsp;возрождение</h2>
      <p class="modalBlock__description">
         После войны территория получила гордое имя&nbsp;&mdash; Долина Славы. Здесь создан мемориал, где покоится прах защитников Заполярья. Поисковые отряды до&nbsp;сих пор находят останки бойцов вдоль линии фронта.
      </p>
      <p class="modalBlock__description">
         Первый монумент &laquo;Два воина&raquo; появился здесь еще в&nbsp;1960-х. Сегодня это современный комплекс с&nbsp;Вечным огнем&nbsp;&mdash; частицей пламени от&nbsp;мурманского памятника &laquo;Алеша&raquo;. Огонь символизирует вечную память о&nbsp;подвиге.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_2.jpg" alt="Вечный огонь и памятник Два воина в Долине Славы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Музей памяти -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей памяти</h2>
      <p class="modalBlock__description">
         Современный музей на&nbsp;территории комплекса был торжественно открыт в&nbsp;прошлом году. Его экспозиция отражает все этапы боевых действий на&nbsp;Мурманском направлении.
      </p>
      <p class="modalBlock__description">
         Подлинные предметы военного времени дополнены документальными фильмами, аудиовоспоминаниями очевидцев и&nbsp;интерактивными панелями с&nbsp;информацией о&nbsp;почти 35&nbsp;тысячах защитников Заполярья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_3.jpg" alt="Экспозиция музея в Долине Славы" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         На&nbsp;автомобиле из&nbsp;Мурманска по&nbsp;федеральной трассе Р-21 &laquo;Кола&raquo;. Комплекс расположен на&nbsp;1447-м километре трассы.
      </p>
      <p class="modalBlock__description">
         <strong>Время в&nbsp;пути:</strong> около 1&nbsp;часа (65&nbsp;км). Мемориал служит не&nbsp;только местом памяти, но&nbsp;и&nbsp;напоминанием о&nbsp;беспримерном мужестве тех, кто отстоял эти суровые северные земли. Посещение рекомендовано всем, кто хочет понять цену Победы в&nbsp;Заполярье.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_4.jpg" alt="Указатель на трассе Кола и дорога к мемориалу" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Село Варзуга-----------------------------------------------------------
        {
            id: 'selo_varzuga',
            title: 'Село Варзуга',
            image: '../../img/murmansk/cards_culture/selo_varsuga_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Село Варзуга</h1>
</div>
<!-- Блок 1: Древнее поморское село -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Древнее поморское село</h2>
      <p class="modalBlock__description">
         Варзуга&nbsp;&mdash; одно из&nbsp;древнейших и&nbsp;крупнейших поселений Кольского полуострова, известное еще с&nbsp;XV&nbsp;века. Оно расположено на&nbsp;Терском берегу Белого моря и&nbsp;разделено рекой Варзуга на&nbsp;две части.
      </p>
      <p class="modalBlock__description">
         Особую ценность представляет историческая &laquo;Никольская сторона&raquo; на&nbsp;восточном берегу, куда можно попасть только на&nbsp;лодке. Здесь время словно остановилось, а&nbsp;старинные дома создают неповторимый архитектурный ансамбль.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_1.jpg" alt="Панорама села Варзуга с рекой и деревянными домами" loading="lazy">
   </div>
</div>
<!-- Блок 2: Деревянное зодчество -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сокровищница деревянного зодчества</h2>
      <p class="modalBlock__description">
         В&nbsp;Варзуге сохранился уникальный комплекс памятников: Афанасьевская церковь, колокольня Успенского комплекса, церковь Николая Чудотворца, Петропавловская церковь и&nbsp;Часовня Безымянного инока.
      </p>
      <p class="modalBlock__description">
         На&nbsp;холме, где некогда стояла крепость &laquo;Тре&raquo;, установлен большой крест. Отсюда открывается вид на&nbsp;песчаные дюны, сдерживаемые растительностью,&nbsp;&mdash; уникальный ландшафт Терского берега.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_2.jpg" alt="Деревянные церкви Варзуги и вид с холма" loading="lazy">
   </div>
</div>
<!-- Блок 3: Успенская церковь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Жемчужина Варзуги</h2>
      <p class="modalBlock__description">
         Гордость села&nbsp;&mdash; Успенская церковь, прекрасный образец деревянного зодчества XVII&nbsp;века. Возведенная по&nbsp;принципу &laquo;золотого сечения&raquo; в&nbsp;шатровом стиле, она достигает 34&nbsp;метров в&nbsp;высоту.
      </p>
      <p class="modalBlock__description">
         Храм, украшенный традиционными кокошниками и&nbsp;деревянной чешуей, поражает совершенством пропорций. В&nbsp;иконостасе сохранились 84&nbsp;иконы, часть которых создана соловецкими мастерами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_3.jpg" alt="Успенская церковь в Варзуге - вид снаружи и внутри" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Удобнее всего начинать путь из&nbsp;Кандалакши&nbsp;&mdash; ближайшего крупного города. Ехать в&nbsp;Варзугу лучше на&nbsp;подготовленном автомобиле, желательно в&nbsp;сопровождении гида, знающего местные дороги.
      </p>
      <p class="modalBlock__description">
         <strong>Время в&nbsp;пути:</strong> около трех часов по&nbsp;берегу Кандалакшского залива. Варзуга гармонично сочетает древние традиции и&nbsp;современность, оставаясь живым свидетельством богатой истории и&nbsp;культуры Поморья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_4.jpg" alt="Дорога к Варзуге вдоль берега Белого моря" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Маяк Русский-----------------------------------------------------------
        {
            id: 'mayak_ruskii',
            title: 'Маяк Русский',
            image: '../../img/murmansk/cards_culture/mayak_russkii_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Маяк Русский</h1>
</div>
<!-- Блок 1: Страж Северного пути -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Страж Северного пути</h2>
      <p class="modalBlock__description">
         Маяк &laquo;Русский&raquo; на&nbsp;острове Большой Олений&nbsp;&mdash; одно из&nbsp;первых навигационных сооружений, построенных для обеспечения безопасности Северного морского пути в&nbsp;Баренцевом море.
      </p>
      <p class="modalBlock__description">
         В&nbsp;конце XIX века с&nbsp;увеличением судоходства вдоль Мурманского побережья возникла необходимость в&nbsp;навигационной системе. Первый маяк на&nbsp;западной оконечности острова был возведен в&nbsp;1925&nbsp;году.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_1.jpg" alt="Маяк Русский на острове Большой Олений" loading="lazy">
   </div>
</div>
<!-- Блок 2: Архитектура и история -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Архитектура и&nbsp;история</h2>
      <p class="modalBlock__description">
         В&nbsp;1953 году вместо старого сооружения возвели монолитную железобетонную башню высотой 28&nbsp;метров. Она окрашена в&nbsp;желтый цвет и&nbsp;увенчана красным стальным фонарным сооружением.
      </p>
      <p class="modalBlock__description">
         Архитектура маяка характерна для советского периода&nbsp;&mdash; строгая функциональность форм сочетается с&nbsp;надежностью конструкции, проверенной арктическими штормами. Его свет остается важным ориентиром для мореплавателей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_2.jpg" alt="Железобетонная башня маяка и фонарное сооружение" loading="lazy">
   </div>
</div>
<!-- Блок 3: Остров-заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Остров-заповедник</h2>
      <p class="modalBlock__description">
         Остров Большой Олений, расположенный в&nbsp;7&nbsp;км от&nbsp;побережья, представляет особую ценность как уникальный заповедник северной фауны. Его площадь составляет 1,2&nbsp;км&sup2;.
      </p>
      <p class="modalBlock__description">
         Здесь гнездятся редкие краснокнижные птицы: гаги, крачки, многочисленные виды чаек и&nbsp;куликов. Удобное расположение на&nbsp;пути миграций делает остров идеальным местом для кормежки и&nbsp;гнездования.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_3.jpg" alt="Птичьи базары на острове Большой Олений" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться и исследования -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;исследования</h2>
      <p class="modalBlock__description">
         До&nbsp;острова Большой Олений можно добраться только по&nbsp;воде&nbsp;&mdash; в&nbsp;ходе специализированных круизов по&nbsp;Баренцеву морю из&nbsp;Мурманска или других портов.
      </p>

   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_4.jpg" alt="Круизное судно у берегов острова и карта расположения" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Культурные центры саамов-----------------------------------------------------------
        {
            id: 'culture_centr_saamov',
            title: 'Культурные центры саамов',
            image: '../../img/murmansk/cards_culture/centr_saamov_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Культурные центры саамов</h1>
</div>
<!-- Блок 1: Столица мурманских саамов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Столица мурманских саамов</h2>
      <p class="modalBlock__description">
         Поселок Ловозеро&nbsp;&mdash; одно из&nbsp;старейших саамских поселений на&nbsp;Кольском полуострове, признанное культурным центром российских саами. Здесь бережно сохраняются и&nbsp;передаются традиции коренного народа Севера.
      </p>
      <p class="modalBlock__description">
         Национальный культурный центр, основанный в&nbsp;1994 году по&nbsp;инициативе местных жителей, стал главным очагом сохранения саамских традиций. Здание центра построено в&nbsp;форме традиционного жилища&nbsp;&mdash; чума.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_1.jpg" alt="Поселок Ловозеро и Национальный культурный центр в форме чума" loading="lazy">
   </div>
</div>
<!-- Блок 2: Музей и традиции -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей и&nbsp;живые традиции</h2>
      <p class="modalBlock__description">
         Музей истории, культуры и&nbsp;быта кольских саамов рассказывает о&nbsp;традиционных интерьерах жилищ, национальных костюмах и&nbsp;предметах быта. Гордость экспозиции&nbsp;&mdash; большая археологическая коллекция.
      </p>
      <p class="modalBlock__description">
         В&nbsp;центре поддерживают народные творческие коллективы&nbsp;&mdash; театр саамских традиций и&nbsp;фольклорный ансамбль. Здесь&nbsp;же проводят национальные праздники и&nbsp;фестивали, такие как традиционные Саамские игры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_2.jpg" alt="Экспозиция музея саамов и выступление фольклорного ансамбля" loading="lazy">
   </div>
</div>
<!-- Блок 3: Этнопарки и деревни -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Этнопарки и&nbsp;деревни</h2>
      <p class="modalBlock__description">
         Путешественникам понравятся импровизированные саамские деревни, воссоздающие условия жизни оленеводов-кочевников. Этнопарк &laquo;Огни Имандры&raquo; с&nbsp;чумами, оленями и&nbsp;интерактивными представлениями погружает в&nbsp;прошлое.
      </p>
      <p class="modalBlock__description">
         В&nbsp;деревнях Saami Village и&nbsp;&laquo;Самь-сыйт&raquo; организуют экскурсии по&nbsp;диким местам Кольского полуострова, катание на&nbsp;оленьих упряжках, мастер-классы в&nbsp;чумах и&nbsp;дегустацию блюд северной кухни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_4.jpg" alt="Этнопарк с оленями и чумами, катание на упряжках" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться и адреса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;адреса</h2>
      <p class="modalBlock__description">
         Ловозеро находится в&nbsp;170&nbsp;км от&nbsp;Мурманска. Добраться можно на&nbsp;автомобиле по&nbsp;дороге в&nbsp;сторону Ловозерских тундр, время в&nbsp;пути&nbsp;&mdash; около 2,5&nbsp;часов.
      </p>
      <p class="modalBlock__description">
         <strong>Основные адреса:</strong> <br>
         &bull; Культурный центр: Ловозеро, ул. Советская, 8<br>
         &bull; Музей: Ловозеро, ул. Советская, 28<br>
         &bull; &laquo;Saami Village&raquo;: п. Мокрая Кица<br>
         &bull; &laquo;Самь-сыйт&raquo;: округ Оленегорск<br>
         &bull; &laquo;Огни Имандры&raquo;: округ Апатиты, берег&nbsp;оз. Имандра
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/kak_dobratsya.jpg" alt="Карта расположения саамских центров на Кольском полуострове" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Большой Вудъявр-----------------------------------------------------------
        {
            id: 'bolshoi_vudyavr',
            title: 'Большой Вудъявр',
            image: '../../img/murmansk/cards_culture/bolshoi_vudyavr_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Горнолыжный курорт &laquo;Большой Вудъявр&raquo;</h1>
</div>
<!-- Блок 1: Крупнейший на Севере -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крупнейший на&nbsp;российском Севере</h2>
      <p class="modalBlock__description">
         На&nbsp;северном и&nbsp;южном склонах горы Айкуайвенчорр в&nbsp;Хибинах находятся трассы горнолыжного курорта &laquo;Большой Вудъявр&raquo;&nbsp;&mdash; крупнейшего на&nbsp;российском Севере.
      </p>
      <p class="modalBlock__description">
         Высшая точка курорта расположена на&nbsp;отметке 1060 метров над уровнем моря на&nbsp;Южном склоне, куда можно подняться на&nbsp;подъемнике. Отсюда открываются захватывающие виды на&nbsp;бескрайние просторы Кольского полуострова.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_1.jpg" alt="Панорама горнолыжного курорта Большой Вудъявр в Хибинах" loading="lazy">
   </div>
</div>
<!-- Блок 2: Трассы и инфраструктура -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Трассы и&nbsp;инфраструктура</h2>
      <p class="modalBlock__description">
         Курорт предлагает 25&nbsp;километров трасс разной степени сложности.&nbsp;15&nbsp;километров из&nbsp;них освещены для катания в&nbsp;период полярной ночи. Здесь есть условия для горнолыжников и&nbsp;сноубордистов любого уровня&nbsp;&mdash; от&nbsp;учебных склонов до&nbsp;профессиональных трасс с&nbsp;уклоном до&nbsp;40%.
      </p>
      <p class="modalBlock__description">
         Горнолыжный сезон длится с&nbsp;ноября по&nbsp;май. Курорт находится в&nbsp;пешей доступности от&nbsp;Кировска: из&nbsp;центра города до&nbsp;трасс Северного склона&nbsp;&mdash; всего 15&nbsp;минут пешком.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_2.jpg" alt="Трассы и подъемники курорта Большой Вудъявр" loading="lazy">
   </div>
</div>
<!-- Блок 3: Летний сезон -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Летний сезон в&nbsp;горах</h2>
      <p class="modalBlock__description">
         Летом склоны приглашают исследовать горные тропы, ведущие к&nbsp;вершинам и&nbsp;смотровым площадкам. Можно подняться по&nbsp;канатной дороге и&nbsp;оказаться среди горных вершин, откуда открываются панорамы Хибинских долин и&nbsp;бескрайней тундры.
      </p>
      <p class="modalBlock__description">
         Для активного отдыха доступны трекинговые тропы разной сложности. Местные гиды могут показать уникальные растения, встречающиеся только в&nbsp;Хибинах, и&nbsp;рассказать о&nbsp;геологии этого древнего горного массива.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_3.jpg" alt="Летние пешие маршруты и канатная дорога курорта" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Нижние станции Северного склона находятся на&nbsp;востоке Кировска, на&nbsp;окраине Городского парка. Добраться сюда можно на&nbsp;автомобиле или на&nbsp;автобусе (остановка &laquo;Олимпийская улица&raquo;).
      </p>
      <p class="modalBlock__description">
         К&nbsp;трассам Южного склона можно попасть от&nbsp;верхних станций канатной дороги. После активного дня у&nbsp;подножия гор можно отдохнуть в&nbsp;уютном кафе, попробовать местные блюда и&nbsp;насладиться спокойствием северной природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/kak_dobratsya.jpg" alt="Нижняя станция курорта в Кировске и схема расположения склонов" loading="lazy">
   </div>
</div>`
        },

//--------------------------------------Святоносский маяк-----------------------------------------------------------
        {
            id: 'svyatonoskii_mayak',
            title: 'Святоносский маяк',
            image: '../../img/murmansk/cards_culture/svyatonoskii_mayak_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Маяк Святоносский</h1>
</div>
<!-- Блок 1: Старейший страж -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Старейший страж северных морей</h2>
      <p class="modalBlock__description">
         Святоносский маяк&nbsp;&mdash; один из&nbsp;старейших действующих маяков Российского Севера, несущий свою службу с&nbsp;6&nbsp;ноября 1862&nbsp;года. Он&nbsp;расположен на&nbsp;мысе Святой Нос на&nbsp;северо-восточном побережье Кольского полуострова.
      </p>
      <p class="modalBlock__description">
         Мыс Святой Нос, узким клином вдающийся в&nbsp;море, представляет собой ключевую поворотную точку морских маршрутов. Этот участок&nbsp;&mdash; одновременно самый оживленный и&nbsp;самый опасный в&nbsp;Кольском Заполярье.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_1.jpg" alt="Маяк Святоносский на мысе Святой Нос" loading="lazy">
   </div>
</div>
<!-- Блок 2: Навигационный ориентир -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Важнейший навигационный ориентир</h2>
      <p class="modalBlock__description">
         Маяк является важнейшим навигационным ориентиром для судов, следующих из&nbsp;Белого моря в&nbsp;Баренцево и&nbsp;обратно. Его свет, видимый на&nbsp;расстоянии до&nbsp;22&nbsp;морских миль, вот уже более полутора веков помогает судам безопасно проходить этот сложный участок.
      </p>
      <p class="modalBlock__description">
         Отвесные, лишенные растительности берега с&nbsp;высокими крутыми склонами требуют особой осторожности от&nbsp;мореплавателей. Маяк высотой 22&nbsp;метра возвышается на&nbsp;94,5 метра над уровнем моря.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_2.jpg" alt="Вид на маяк с моря и схема навигационного участка" loading="lazy">
   </div>
</div>
<!-- Блок 3: Объект культурного наследия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Объект культурного наследия</h2>
      <p class="modalBlock__description">
         Признанный объектом культурного наследия федерального значения, Святоносский маяк является не&nbsp;только важным навигационным сооружением, но&nbsp;и&nbsp;памятником истории освоения арктических морей.
      </p>
      <p class="modalBlock__description">
         Его строгая пирамидальная форма, характерная для маяков XIX&nbsp;века, гармонично вписана в&nbsp;суровый ландшафт заполярного побережья. Маяк служит символом мужества и&nbsp;профессионализма полярных мореплавателей.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_3.jpg" alt="Архитектура маяка крупным планом и историческое фото" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         До&nbsp;мыса Святой Нос можно добраться по&nbsp;воде&nbsp;&mdash; в&nbsp;ходе специализированных круизов по&nbsp;Баренцеву морю из&nbsp;Мурманска или других портов Кольского полуострова.
      </p>
      <p class="modalBlock__description">
         Зимой доступ возможен на&nbsp;снегоходах по&nbsp;замерзшему побережью, однако этот способ требует специальной подготовки и&nbsp;оборудования. Посещение маяка рекомендуется планировать через проверенных туроператоров, специализирующихся на&nbsp;арктических маршрутах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/kak_dobratsya.jpg" alt="Круизное судно у мыса Святой Нос и карта расположения" loading="lazy">
   </div>
</div>`
        }

    ]

};

window.murmanskData = murmanskData;
