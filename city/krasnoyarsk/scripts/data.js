// ============================================
// ДАННЫЕ КАРТОЧЕК КРАСНОЯРСКОГО КРАЯ
// ============================================

const krasnoyarskData = {

//--------------------------------Точки притяжения региона---------------------------------------------------
    attractions: [
        {
            id: 'ergaki',
            title: 'Природный парк &laquo;Ергаки&raquo;',
            image: '../../img/krasnoyarsk/cards_tochki/Ergaki_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Природный парк &laquo;Ергаки&raquo;</h1>
</div>
<!-- Блок 1: Жемчужина Сибири -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Жемчужина Сибири</h2>
      <p class="modalBlock__description">
         Природный парк &laquo;Ергаки&raquo; расположен на&nbsp;юге Красноярского края, в&nbsp;Западном Саяне. Это одно из&nbsp;самых популярных мест для активного отдыха. Парк был создан в&nbsp;2005 году с&nbsp;целью сохранения уникальной природы и&nbsp;развития экологического туризма.
      </p>
      <p class="modalBlock__description">
         Причудливые скалистые пики, словно написанные рукой импрессиониста, стройные лиственницы и&nbsp;глади горных озер&nbsp;&mdash; парк &laquo;Ергаки&raquo; (в&nbsp;переводе с&nbsp;тюркского&nbsp;&mdash; &laquo;пальцы&raquo;) легко узнать среди прочих благодаря его выразительной ландшафтной линии.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_1.jpg" alt="Природный парк Ергаки" loading="lazy">
   </div>
</div>
<!-- Блок 2: История и искусство -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История и&nbsp;искусство</h2>
      <p class="modalBlock__description">
         Именно выразительные ландшафты привлекли в&nbsp;начале&nbsp;XX века первооткрывателей этих мест, которыми стали красноярские художники. Советский художник и&nbsp;поэт Тойво Ряннель еще в&nbsp;середине прошлого столетия так передал свои ощущения:
      </p>
      <p class="modalBlock__description">
         &laquo;Здесь в&nbsp;подавляющем избытке найдешь все&nbsp;то, что называют экзотикой. Здесь летят к&nbsp;черту все принятые каноны построения классического пейзажа. Сидишь на&nbsp;краю километрового обрыва, а&nbsp;перед тобой из&nbsp;бездны лезут в&nbsp;синеву и&nbsp;в&nbsp;облака каменные лезвия&nbsp;&mdash; и&nbsp;нет переднего плана, есть призрачная пустота пространства и&nbsp;совершенно отсутствует масштабность. И&nbsp;выглядят наши пейзажи какими-то случайными фрагментами романтических декораций&raquo;.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_2.jpg" alt="Художественный образ Ергаков" loading="lazy">
   </div>
</div>
<!-- Блок 3: Открытие для туризма -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Открытие для туризма</h2>
      <p class="modalBlock__description">
         Массово покорять здешние остроконечные пики альпинисты пришли в&nbsp;1990-е. Тогда и&nbsp;возникла необходимость в&nbsp;сохранении ландшафта будущего парка. Сегодня Ергаки, пожалуй, главный туристический центр Красноярского юга.
      </p>
      <p class="modalBlock__description">
         Летом здесь можно отправиться в&nbsp;пешеходные и&nbsp;конные туры, совершить восхождение на&nbsp;понравившийся пик, сплавиться по&nbsp;реке и&nbsp;отдохнуть в&nbsp;палаточном лагере. Зимой&nbsp;&mdash; это точка притяжения любителей горнолыжного отдыха: сезон здесь длится с&nbsp;конца октября до&nbsp;середины июня.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_3.jpg" alt="Активный отдых в Ергаках" loading="lazy">
   </div>
</div>
<!-- Блок 4: Инфраструктура и маршруты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Инфраструктура и&nbsp;маршруты</h2>
      <p class="modalBlock__description">
         На&nbsp;территории парка обустроено несколько экотроп: &laquo;Каменный город&raquo;, &laquo;Тропа сибирского охотника&raquo; с&nbsp;посещением одноименного музея и&nbsp;маршрут от&nbsp;озера Радужного до&nbsp;Висячего камня. Эта огромная скала балансирует над озером практически на&nbsp;отвесном склоне.
      </p>
      <p class="modalBlock__description">
         В&nbsp;парке разбито несколько туристических стоянок и&nbsp;палаточных лагерей, а&nbsp;также круглогодичных турбаз, где можно остановиться на&nbsp;ночь, не&nbsp;нарушая хрупкую природу Саянских гор.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_4.jpg" alt="Инфраструктура парка Ергаки" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Территорию природного парка пересекает трасса М-54 &laquo;Енисей&raquo;.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> проще всего доехать из&nbsp;соседних регионов&nbsp;&mdash; Хакасии или Тувы. Дорога из&nbsp;Абакана или Кызыла займет чуть больше двух часов, из&nbsp;Красноярска&nbsp;&mdash; около девяти часов.</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> через Ергаки проходит маршрут ежедневного автобуса из&nbsp;Красноярска в&nbsp;Кызыл. Время в&nbsp;пути&nbsp;&mdash; 11&nbsp;часов, билеты доступны на&nbsp;сайте автовокзала Красноярска.</li>
         <li class="modalBlock__listItem"><strong>Необходимо оформить пропуск</strong> в&nbsp;визит-центре парка.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/ergaki/kak_dobratsya.jpg" alt="Как добраться до Ергаков" loading="lazy">
   </div>
</div>`
        },

//--------------------------------Манская петля---------------------------------------------------
        {
            id: 'mana',
            title: 'Манская петля',
            image: '../../img/krasnoyarsk/cards_tochki/Manskaya_petlya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Природная локация Манская петля</h1>
   <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Самая узнаваемая излучина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Самая узнаваемая излучина</h2>
      <p class="modalBlock__description">
         Живописная излучина реки Мана вокруг скального массива&nbsp;&mdash; сегодня, пожалуй, самая узнаваемая достопримечательность Красноярского края. Вид невероятно красивый, а&nbsp;добраться от&nbsp;города можно за&nbsp;несколько часов.
      </p>
      <p class="modalBlock__description">
         С&nbsp;вершины открываются потрясающие рассветы и&nbsp;закаты, здесь можно устроить пикник с&nbsp;видом на&nbsp;фантастические пейзажи или заночевать в&nbsp;палатке под искрящимся звездным куполом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_1.jpg" alt="Вид на Манскую петлю" loading="lazy">
   </div>
</div>
<!-- Блок 2: Река Мана и ее изгибы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Река Мана и&nbsp;ее&nbsp;изгибы</h2>
      <p class="modalBlock__description">
         Река Мана, правый приток Енисея, протекает через Манское Белогорье в&nbsp;северных отрогах Восточного Саяна. На&nbsp;своем пути река делает множество живописных изгибов&nbsp;&mdash; самые известные (и&nbsp;доступные для путешественников) находятся в&nbsp;нескольких километрах от&nbsp;места слияния с&nbsp;Енисеем.
      </p>
      <p class="modalBlock__description">
         Излучина вокруг скального утеса получила название &laquo;Манская петля&raquo;. Красивые развороты реки можно увидеть с&nbsp;обзорной точки на&nbsp;одном из&nbsp;возвышений&nbsp;&mdash; здесь находится смотровая площадка, откуда можно сделать те&nbsp;самые впечатляющие кадры с&nbsp;сибирских открыток.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_2.jpg" alt="Река Мана и скальные массивы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Маршрут к смотровой площадке -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Маршрут к&nbsp;смотровой площадке</h2>
      <p class="modalBlock__description">
         Маршрут сюда не&nbsp;самый простой, однако побывать здесь можно одним днем. Путь в&nbsp;основном проходит по&nbsp;сыпучему грунту и&nbsp;курумнику (острым камням), высота подъема&nbsp;&mdash; около 650&nbsp;м.
      </p>
      <p class="modalBlock__description">
         Отправляться сюда лучше в&nbsp;хорошую погоду, с&nbsp;достаточным запасом воды и&nbsp;в&nbsp;удобной походной обуви. Несмотря на&nbsp;сложности пути, вид с&nbsp;вершины окупает все усилия.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_3.jpg" alt="Тропа к Манской петле" loading="lazy">
   </div>
</div>
<!-- Блок 4: Впечатления и возможности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Впечатления и&nbsp;возможности</h2>
      <p class="modalBlock__description">
         Манская петля&nbsp;&mdash; это не&nbsp;только точка для фото, но&nbsp;и&nbsp;отличное место для погружения в&nbsp;природу Сибири. Здесь царит особая атмосфера умиротворения и&nbsp;величия.
      </p>
      <p class="modalBlock__description">
         Место популярно среди фотографов, туристов и&nbsp;любителей активного отдыха. Помимо пеших походов, в&nbsp;этих местах популярен сплав по&nbsp;реке Мана, который позволяет увидеть петлю и&nbsp;другие красивые участки реки с&nbsp;необычного ракурса.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_4.jpg" alt="Отдых и сплавы на Манской петле" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Добраться до&nbsp;Манской петли можно как на&nbsp;автомобиле, так и&nbsp;на&nbsp;общественном транспорте, но&nbsp;заключительная часть пути в&nbsp;любом случае будет пешей.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> от&nbsp;центра Красноярска до&nbsp;старта пешего маршрута&nbsp;&mdash; около 40&nbsp;км, ориентир&nbsp;&mdash; база отдыха &laquo;Манская петля&raquo;. Пеший подъем до&nbsp;обзорной точки&nbsp;&mdash; около 7&nbsp;км, в&nbsp;среднем проходится за&nbsp;четыре с&nbsp;половиной часа.</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> электричкой из&nbsp;Красноярска до&nbsp;станции Усть-Мана, далее на&nbsp;автобусе до&nbsp;поселка Манский. От&nbsp;поселка также предстоит пеший переход к&nbsp;началу маршрута.</li>
      </ul>
      <p class="modalBlock__description">
         Рекомендуется выезжать ранним утром, чтобы успеть на&nbsp;рассвет или закат на&nbsp;смотровой площадке, и&nbsp;иметь при себе все необходимое для горного похода.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/kak_dobratsya.jpg" alt="Дорога к Манской петле" loading="lazy">
   </div>
</div>`
        },


//-------------------------Красноярские столбы--------------------------------------
        {
            id: 'stolby',
            title: '&laquo;Красноярские столбы&raquo;',
            image: '../../img/krasnoyarsk/cards_tochki/Krasnoyarskie_stolby_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Национальный парк &laquo;Красноярские столбы&raquo;</h1>
   <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Феномен сиенитовых исполинов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Феномен сиенитовых исполинов</h2>
      <p class="modalBlock__description">
         Старейший национальный парк региона, расположенный в&nbsp;отрогах Восточного Саяна. Получил известность благодаря исполинским скалам из&nbsp;сиенита (магматической породы) с&nbsp;угадываемыми очертаниями людей, животных и&nbsp;мифологических существ.
      </p>
      <p class="modalBlock__description">
         Сложившийся вокруг этих мест феномен &laquo;столбизма&raquo; стал своего рода субкультурой для широкого круга альпинистов и&nbsp;защитников природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_1.jpg" alt="Скалы Красноярских столбов" loading="lazy">
   </div>
</div>
<!-- Блок 2: История открытия и освоения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История открытия и&nbsp;освоения</h2>
      <p class="modalBlock__description">
         Первые сведения о&nbsp;причудливых столбах, словно вырастающих из&nbsp;густого хвойного леса, были получены путешественниками еще в&nbsp;XVIII&nbsp;веке. Чуть позже это удивительное явление природы исследовал легендарный российский мореплаватель Витус Беринг, за&nbsp;ним&nbsp;&mdash; участники Великой Северной экспедиции в&nbsp;1735&nbsp;году.
      </p>
      <p class="modalBlock__description">
         В&nbsp;конце XIX&nbsp;века, во&nbsp;время строительства Транссибирской магистрали, район столбов активно разрабатывался. Это послужило толчком для активного выступления &laquo;столбистов&raquo;&nbsp;&mdash; общественного движения альпинистов и&nbsp;защитников природы, объединившихся для исследования и&nbsp;прохождения маршрутов по&nbsp;вершинам скал.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_2.jpg" alt="Историческое исследование столбов" loading="lazy">
   </div>
</div>
<!-- Блок 3: Культура столбизма -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культура столбизма</h2>
      <p class="modalBlock__description">
         &laquo;Красноярские столбы&raquo;&nbsp;&mdash; это национальный парк. Охранный статус поменяли для того, чтобы сделать место доступнее для путешественников. Однако кодекс столбистов призывает к&nbsp;охране и&nbsp;бережному отношению к&nbsp;природе.
      </p>
      <p class="modalBlock__description">
         Первые столбисты появились полтора века назад. За&nbsp;это время у&nbsp;них появились не&nbsp;только свои техники скалолазания, уставы и&nbsp;правила, но&nbsp;и&nbsp;особый язык, традиции и&nbsp;приметы. Это уникальное сообщество стало частью культурного наследия региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_3.jpg" alt="Сообщество столбистов" loading="lazy">
   </div>
</div>
<!-- Блок 4: Территория и маршруты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Территория и&nbsp;маршруты</h2>
      <p class="modalBlock__description">
         Скальная часть нацпарка включает четыре района: Центральный (наиболее посещаемый), Такмаковский, Калтатский и&nbsp;район &laquo;диких столбов&raquo;. Почти все скалы, их&nbsp;фрагменты и&nbsp;даже некоторые камни здесь имеют свои имена. Всего в&nbsp;парке более 100 столбов высотой до&nbsp;90&nbsp;м.
      </p>
      <p class="modalBlock__description">
         Для знакомства можно начать с&nbsp;Восточного входа, откуда проложено несколько простых маршрутов. Подготовленным туристам понравится круговой маршрут до&nbsp;главных скал, от&nbsp;Центрального входа до&nbsp;кордона &laquo;Нарым&raquo;. Возле Восточного входа расположен фан-парк &laquo;Бобровый лог&raquo;&nbsp;&mdash; горнолыжный комплекс с&nbsp;канатной дорогой, откуда открывается шикарный панорамный вид.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_4.jpg" alt="Туристические маршруты по парку" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Территория нацпарка практически прилегает к&nbsp;городской черте Красноярска, что делает его очень доступным для посещения.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> 20&nbsp;минут от&nbsp;центра города по&nbsp;Свердловской улице&nbsp;&mdash; и&nbsp;вы&nbsp;у&nbsp;Центрального входа в&nbsp;парк. Если едете к&nbsp;Восточному входу, не&nbsp;пропустите поворот на&nbsp;Базайскую улицу.</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> до&nbsp;Центрального входа из&nbsp;центра города ходит несколько автобусов и&nbsp;электричка. До&nbsp;Восточного входа и&nbsp;&laquo;Бобрового лога&raquo; добраться можно только на&nbsp;автотранспорте.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stolby/kak_dobratsya.jpg" alt="Доступ к национальному парку" loading="lazy">
   </div>
</div>`
        },


//-------------------------Плато Путорана--------------------------------------
        {
            id: 'putorana',
            title: 'Плато Путорана',
            image: '../../img/krasnoyarsk/cards_tochki/Plato_Putorana_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Горный массив Плато Путорана</h1>
</div>
<!-- Блок 1: Затерянный мир рекордов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Затерянный мир рекордов</h2>
      <p class="modalBlock__description">
         Плато Путорана&nbsp;&mdash; страна лавовых гор, площадь которой немногим больше Великобритании. Она остается труднодоступной для большинства путешественников. Попасть сюда можно на&nbsp;лодке или снегоходе, а&nbsp;в&nbsp;некоторые места&nbsp;&mdash; только на&nbsp;вертолете.
      </p>
      <p class="modalBlock__description">
         Здесь находится географический центр России и&nbsp;российский полюс недоступности&nbsp;&mdash; самая удаленная от&nbsp;транспортных путей и&nbsp;труднодостижимая точка нашей страны. Это грандиозный затерянный мир, собравший все невероятные рекорды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_1.jpg" alt="Плато Путорана - затерянный мир" loading="lazy">
   </div>
</div>
<!-- Блок 2: Суровый климат и происхождение -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Суровый климат и&nbsp;происхождение</h2>
      <p class="modalBlock__description">
         Зима тут длится восемь месяцев в&nbsp;году, температура опускается до &minus;55&nbsp;градусов, безморозный период отсутствует вовсе. А&nbsp;в&nbsp;очень короткое, но&nbsp;сочное лето здесь оттаивают тысячи водопадов, среди которых&nbsp;&mdash; Тальниковый, самый высокий в&nbsp;Евразии.
      </p>
      <p class="modalBlock__description">
         Скопление столовых гор (гор без вершин) возникло благодаря извержению древнего супервулкана 250 млн лет назад. Застывшая магма образовала траппы&nbsp;&mdash; ступенчатые горы, целиком сложенные из&nbsp;базальта. Геологи считают, что плато до&nbsp;сих пор растет со&nbsp;скоростью 11&nbsp;мм в&nbsp;год.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_2.jpg" alt="Климат и ландшафт Путораны" loading="lazy">
   </div>
</div>
<!-- Блок 3: История изучения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История изучения</h2>
      <p class="modalBlock__description">
         Первооткрывателем и&nbsp;автором первого научного описания Путорана был активный деятель Императорского Русского географического общества Александр Миддендорф. В&nbsp;ходе экспедиции на&nbsp;Таймыр в&nbsp;1845 году он&nbsp;обнаружил отроги плато и&nbsp;обозначил границы вечной мерзлоты.
      </p>
      <p class="modalBlock__description">
         Сегодня центральная часть плато Путорана входит в&nbsp;границы Путоранского заповедника и&nbsp;находится под управлением Объединенной дирекции заповедников Таймыра.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_3.jpg" alt="Исследование плато Путорана" loading="lazy">
   </div>
</div>
<!-- Блок 4: Врата в царство Путорана -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Врата в&nbsp;царство Путорана</h2>
      <p class="modalBlock__description">
         Своеобразными вратами в&nbsp;царство Путорана можно назвать озеро Лама&nbsp;&mdash; именно здесь пролегает главный водный путь на&nbsp;плато. Лама, одно из&nbsp;глубочайших озер в&nbsp;России, находится в&nbsp;120&nbsp;км от&nbsp;Норильска.
      </p>
      <p class="modalBlock__description">
         Под руководством опытного гида можно совершить несколько трекинговых восхождений, не&nbsp;требующих специального снаряжения. Популярные маршруты идут от&nbsp;озера Лама по&nbsp;склонам горы Фестивальной и&nbsp;к&nbsp;каньону Нералах с&nbsp;его живописным водопадом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_4.jpg" alt="Озеро Лама и туристические маршруты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Удобнее всего начинать путешествие по&nbsp;заповеднику из&nbsp;Норильска. До&nbsp;самого плато автомобильных дорог нет, поэтому попасть на&nbsp;Путорану можно только по&nbsp;воздуху и&nbsp;через озеро Лама.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Вертолетом:</strong> с&nbsp;воздуха открываются поистине космические ландшафты плато. Заброска на&nbsp;вертолете&nbsp;&mdash; увлекательная альтернатива для тех, кто не&nbsp;готов к&nbsp;длительным пешим походам.</li>
         <li class="modalBlock__listItem"><strong>По&nbsp;воде и&nbsp;снегу:</strong> летом до&nbsp;плато добираются на&nbsp;лодке по&nbsp;озеру Лама, зимой&nbsp;&mdash; на&nbsp;снегоходе. Это основные способы достижения труднодоступных участков заповедника.</li>
      </ul>
      <p class="modalBlock__description">
         Разница температур в&nbsp;течение года в&nbsp;разных частях плато может достигать 100&nbsp;&deg;C, поэтому при планировании путешествия стоит очень тщательно продумать свой походный гардероб.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/kak_dobratsya.jpg" alt="Транспортная доступность плато Путорана" loading="lazy">
   </div>
</div>`
        },


//-------------------------Торгашинский хребет--------------------------------------
        {
            id: 'torgashin',
            title: 'Торгашинский хребет',
            image: '../../img/krasnoyarsk/cards_tochki/Torgashenskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Горный хребет Торгашинский</h1>
   <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Сказочная страна рядом с городом -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сказочная страна рядом с&nbsp;городом</h2>
      <p class="modalBlock__description">
         Природная локация недалеко от&nbsp;Красноярска полюбилась гостям и&nbsp;жителям города. Попасть сюда несложно, а&nbsp;открывающиеся виды создают впечатление, что вы&nbsp;попали в&nbsp;сказочную страну.
      </p>
      <p class="modalBlock__description">
         На&nbsp;вершину Торгашинского хребта ведет самая длинная лестница в&nbsp;России&nbsp;&mdash; в&nbsp;ней 1683&nbsp;ступени.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_1.jpg" alt="Панорама Торгашинского хребта" loading="lazy">
   </div>
</div>
<!-- Блок 2: Живописная горная гряда -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Живописная горная гряда</h2>
      <p class="modalBlock__description">
         Живописная горная гряда в&nbsp;пригороде Красноярска&nbsp;&mdash; популярное место для активного отдыха и&nbsp;туризма. Хребет является частью Восточного Саяна и&nbsp;привлекает своей природной красотой, доступностью и&nbsp;разнообразием маршрутов.
      </p>
      <p class="modalBlock__description">
         Это 15&nbsp;км скальных пейзажей, окрашенных в&nbsp;пастельные тона на&nbsp;сибирский манер, и&nbsp;более 100&nbsp;км промаркированных троп. Хребет протянулся от&nbsp;скалы Красный Гребень до&nbsp;горы Черная Сопка, которая является потухшим вулканом и&nbsp;самой высокой точкой района (688&nbsp;м).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_2.jpg" alt="Ландшафты Торгашинского хребта" loading="lazy">
   </div>
</div>
<!-- Блок 3: Подъем по самой длинной лестнице -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Подъем по&nbsp;самой длинной лестнице</h2>
      <p class="modalBlock__description">
         Взойти на&nbsp;хребет придется по&nbsp;самой длинной в&nbsp;России лестнице, насчитывающей 1683&nbsp;ступени, зато с&nbsp;вершины открывается панорама на&nbsp;город и&nbsp;Красноярские столбы.
      </p>
      <p class="modalBlock__description">
         Общий набор высоты составит 240&nbsp;м, путь наверх занимает 40&minus;50&nbsp;минут. На&nbsp;вершине, куда приводит лестница, также есть видовая площадка. В&nbsp;вечернее время путь наверх подсвечивается и&nbsp;выглядит очень живописно.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_3.jpg" alt="Самая длинная лестница России" loading="lazy">
   </div>
</div>
<!-- Блок 4: История и маршруты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История и&nbsp;маршруты</h2>
      <p class="modalBlock__description">
         Название свое хребет получил от&nbsp;поселка Торгашино, который расположился у&nbsp;подножия. Когда-то это была казачья станица, в&nbsp;которой родилась мать известного художника Василия Сурикова&nbsp;&mdash; в&nbsp;девичестве Торгашина.
      </p>
      <p class="modalBlock__description">
         Вдоль хребта проходит множество хайкинговых маршрутов&nbsp;&mdash; основные обозначены на&nbsp;плане-карте у&nbsp;подножия лестницы. На&nbsp;каждой из&nbsp;троп разной категории сложности можно встретить интересные объекты, а&nbsp;также обитателей сибирских лесов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_4.jpg" alt="Туристические тропы хребта" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Торгашинский хребет&nbsp;&mdash; одна из&nbsp;самых доступных природных достопримечательностей Красноярска, расположенная практически в&nbsp;черте города.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> дорога от&nbsp;центра города к&nbsp;началу лестницы займет около 30&nbsp;минут. Ориентир&nbsp;&mdash; оздоровительный центр &laquo;Гренада&raquo;. Вход на&nbsp;территорию бесплатный.</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> от&nbsp;ж/д вокзала в&nbsp;центре Красноярска ходит автобус &#8470;&nbsp;37&nbsp;до&nbsp;конечной остановки &laquo;Оздоровительный центр &laquo;Гренада&raquo;.</li>
      </ul>
      <p class="modalBlock__description">
         Нужно следить за&nbsp;временем: вход на&nbsp;лестницу возможен с&nbsp;территории комплекса &laquo;Гренада&raquo;, он&nbsp;открыт ежедневно с&nbsp;08:00 до&nbsp;22:00. На&nbsp;ночь доступ к&nbsp;достопримечательности закрыт.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/kak_dobratsya.jpg" alt="Дорога к Торгашинскому хребту" loading="lazy">
   </div>
</div>`
        }
    ],



//------------------------- Выбраться на природу----------------------------------------------------
//------------------------- Выбраться на природу----------------------------------------------------
    nature: [
        {
            id: 'belogorie',
            title: 'Кутурчинское Белогорье',
            image: '../../img/krasnoyarsk/cards_nature/Kuturchinskoe_Belogorie_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Кутурчинское Белогорье</h1>
</div>
<!-- Блок 1: Манские столбы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Манские столбы</h2>
      <p class="modalBlock__description">
         Горный хребет в&nbsp;пределах Восточного Саяна, привлекающий туристов своими необычными скалами-останцами причудливой формы. Эти 50-метровые слоеные скалы называют Манскими (или Кутурчинскими) столбами.
      </p>
      <p class="modalBlock__description">
         Манские столбы отдаленно напоминают легендарное плато Маньпупунёр на&nbsp;Северном Урале: очертания каменных останцев навевают мысли о&nbsp;разрушенных крепостях Средневековья.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_1.jpg" alt="Манские столбы Кутурчинского Белогорья" loading="lazy">
   </div>
</div>
<!-- Блок 2: География и названия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">География и&nbsp;названия</h2>
      <p class="modalBlock__description">
         Кутурчинское Белогорье на&nbsp;80&nbsp;км протянулось между двумя сибирскими реками: Маной и&nbsp;Миной. Отсюда и&nbsp;второе название этих мест&nbsp;&mdash; Манские столбы.
      </p>
      <p class="modalBlock__description">
         Находятся скалы на&nbsp;широком безлесном плато и&nbsp;носят разные имена: Зайские, Алгинские, Чанские, Юргинские, Соболиные. В&nbsp;зимнее время их&nbsp;вершины покрываются живописными снежными шапками, так возникло и&nbsp;название Белогорье.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_2.jpg" alt="Ландшафт Кутурчинского Белогорья" loading="lazy">
   </div>
</div>
<!-- Блок 3: Испытание для скалолазов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Испытание для скалолазов</h2>
      <p class="modalBlock__description">
         По&nbsp;сравнению с&nbsp;Красноярскими столбами Манские не&nbsp;такие высокие, однако более отвесные, поэтому забраться на&nbsp;них&nbsp;&mdash; настоящее испытание даже для опытного скалолаза.
      </p>
      <p class="modalBlock__description">
         Кроме того, путь сюда также не&nbsp;из&nbsp;простых: высокогорная часть плато покрыта довольно крупным курумником&nbsp;&mdash; острыми обломками скал. Однако результат определенно того стоит: в&nbsp;очертаниях каменных останцев угадываются то&nbsp;профили разных животных, то&nbsp;лица, то&nbsp;руины древних городов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_3.jpg" alt="Скалолазание на Манских столбах" loading="lazy">
   </div>
</div>
<!-- Блок 4: Природа и впечатления -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Природа и&nbsp;впечатления</h2>
      <p class="modalBlock__description">
         Белогорье предлагает не&nbsp;только скальные вызовы, но&nbsp;и&nbsp;удивительные панорамные виды. С&nbsp;плато открывается вид на&nbsp;бескрайние сибирские просторы и&nbsp;извилистые русла рек Маны и&nbsp;Мины.
      </p>
      <p class="modalBlock__description">
         Место привлекает как опытных альпинистов, так и&nbsp;фотографов, ищущих уникальные кадры. Скалы меняют свой облик в&nbsp;зависимости от&nbsp;времени суток и&nbsp;погоды, создавая неповторимую игру света и&nbsp;тени на&nbsp;своих слоистых поверхностях.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_4.jpg" alt="Панорамные виды Белогорья" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Путь к&nbsp;Кутурчинскому Белогорью требует некоторой подготовки, но&nbsp;доступен для организованных туристов и&nbsp;самостоятельных путешественников с&nbsp;опытом.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> дорога от&nbsp;Красноярска до&nbsp;деревни Кутурчин, откуда начинается путь на&nbsp;плато, займет примерно 3,5&nbsp;часа. Остальную часть маршрута нужно будет пройти пешком. В&nbsp;летнее время тропа хорошо заметна, однако приготовьтесь перейти вброд небольшую речку Ангул.</li>
         <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> часть пути от&nbsp;Красноярска можно проехать на&nbsp;электричке или поезде до&nbsp;станции Мана, а&nbsp;после пройти пешком до&nbsp;деревни Кутурчин (около 25&nbsp;км).</li>
      </ul>
      <p class="modalBlock__description">
         Рекомендуется планировать поход на&nbsp;несколько дней, иметь соответствующую экипировку&nbsp;и, желательно, опыт горных походов или сопровождение гида.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/kak_dobratsya.jpg" alt="Дорога к Кутурчинскому Белогорью" loading="lazy">
   </div>
</div>`
        },


//------------------------- Таймырский заповедник--------------------------------------
        {
            id: 'taimyr',
            title: 'Таймырский заповедник',
            image: '../../img/krasnoyarsk/cards_nature/Taimyrskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Таймырский&raquo;</h1>
</div>
<!-- Блок 1: Арктическая страна -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Арктическая страна</h2>
      <p class="modalBlock__description">
         Таймырский заповедник&nbsp;&mdash; один из&nbsp;самых больших в&nbsp;России. С&nbsp;недавнего времени в&nbsp;Объединенную дирекцию заповедников Таймыра входят три заповедника и&nbsp;два заказника, а&nbsp;это значительная часть Сибирской Арктики.
      </p>
      <p class="modalBlock__description">
         Это целая арктическая страна под охраной и&nbsp;неустанным наблюдением ученых. Вся ее&nbsp;территория находится в&nbsp;зоне многолетней мерзлоты. Лета здесь практически не&nbsp;бывает, снег может не&nbsp;таять даже в&nbsp;июле.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_1.jpg" alt="Таймырский заповедник" loading="lazy">
   </div>
</div>
<!-- Блок 2: Границы и ландшафт -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Границы и&nbsp;ландшафт</h2>
      <p class="modalBlock__description">
         Крупнейший полуостров России и&nbsp;самая северная часть континента, Таймыр разделяет Карское море и&nbsp;море Лаптевых.
      </p>
      <p class="modalBlock__description">
         Под охраной находятся часть полуостровов Таймыр и&nbsp;Челюскин, плато Путорана, акватория Карского моря и&nbsp;моря Лаптевых, а&nbsp;еще несколько островов архипелага Северная Земля.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_2.jpg" alt="Ландшафты Таймыра" loading="lazy">
   </div>
</div>
<!-- Блок 3: Научная работа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Научная работа</h2>
      <p class="modalBlock__description">
         Научная работа направлена прежде всего на&nbsp;многолетнее исследование динамики хрупкой природы Арктики. История изучения этой территории насчитывает почти 100&nbsp;лет.
      </p>
      <p class="modalBlock__description">
         Помимо ценных ресурсов и&nbsp;богатой истории эти земли под толщей векового льда хранят ответы на&nbsp;актуальные вопросы&nbsp;&mdash; например, как изменится климат на&nbsp;всей планете.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_3.jpg" alt="Научные исследования в Арктике" loading="lazy">
   </div>
</div>
<!-- Блок 4: Хатанга и туризм -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Хатанга и&nbsp;туризм</h2>
      <p class="modalBlock__description">
         Несколько лет под эгидой Русского географического общества на&nbsp;Таймыре строится новая исследовательская лаборатория в&nbsp;Хатанге&nbsp;&mdash; старинном поселении, известном еще со&nbsp;времен Великой Северной экспедиции XVIII&nbsp;века.
      </p>
      <p class="modalBlock__description">
         Из&nbsp;Хатанги стартуют туристические маршруты по&nbsp;Таймыру, в&nbsp;том числе уникальные экспедиционные путешествия, разработанные экспертами РГО. Например, можно отправиться в&nbsp;гости к&nbsp;малочисленным народам Севера&nbsp;&mdash; долганам и&nbsp;нганасанам, к&nbsp;кратеру Попигайского метеорита или на&nbsp;Анабарское плато.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_4.jpg" alt="Хатанга и туристические маршруты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Основной точкой доступа на&nbsp;Восточный Таймыр является поселок Хатанга. Здесь находится единственный всесезонный аэропорт на&nbsp;Восточном Таймыре.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Вертолетом:</strong> из&nbsp;Красноярска или Норильска до&nbsp;Хатанги. Авиационное сообщение установлено с&nbsp;Норильском и&nbsp;Красноярском.</li>
         <li class="modalBlock__listItem">Из&nbsp;Хатанги планируют запустить уникальные путешествия на&nbsp;Северный полюс&nbsp;&mdash; маршрут будет проходить полностью по&nbsp;территории России.</li>
      </ul>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/kak_dobratsya.jpg" alt="Доступ в заповедник Таймырский" loading="lazy">
   </div>
</div>`
        },

//-------------------------Большой Арктический заповедник--------------------------------------
        {
            id: 'arktic',
            title: 'Большой Арктический заповедник',
            image: '../../img/krasnoyarsk/cards_nature/Bolshoi_Arkticheskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Большой Арктический&raquo;</h1>
</div>
<!-- Блок 1: Крупнейший в Евразии -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крупнейший в&nbsp;Евразии</h2>
      <p class="modalBlock__description">
         Этот заповедник не&nbsp;просто большой&nbsp;&mdash; он&nbsp;крупнейший на&nbsp;территории Евразии. В&nbsp;него входит часть полуострова Таймыр, острова и&nbsp;акватория Карского моря.
      </p>
      <p class="modalBlock__description">
         Главная точка притяжения заповедника&nbsp;&mdash; мыс Челюскин на&nbsp;полуострове Таймыр, самая северная континентальная точка суши.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_1.jpg" alt="Пейзажи Большого Арктического заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Арктическая природа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Арктическая природа</h2>
      <p class="modalBlock__description">
         Вся территория заповедника лежит в&nbsp;подзоне арктической тундры и&nbsp;зоне полярных пустынь. Растительность в&nbsp;этих местах очень скудная&nbsp;&mdash; в&nbsp;зоне вечной мерзлоты чаще можно встретить лишь мхи и&nbsp;лишайники, а&nbsp;также несколько видов злаков и&nbsp;полярные маки.
      </p>
      <p class="modalBlock__description">
         Но&nbsp;для животных здесь настоящее раздолье: белые медведи, овцебыки, северные олени и&nbsp;песцы чувствуют себя отлично в&nbsp;этих труднодоступных для человека краях.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_2.jpg" alt="Флора и фауна Арктики" loading="lazy">
   </div>
</div>
<!-- Блок 3: История открытия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История открытия</h2>
      <p class="modalBlock__description">
         Первооткрывателями этих мест стали участники Великой Северной экспедиции в&nbsp;середине XVIII&nbsp;века. Семен Челюскин, а&nbsp;затем Харитон Лаптев исследовали побережье Восточного Таймыра на&nbsp;собачьих упряжках после того, как потерпели ряд неудач в&nbsp;море.
      </p>
      <p class="modalBlock__description">
         Сегодня с&nbsp;развитием навигации посещение этих мест стало более безопасным, однако по-прежнему остается непростым и&nbsp;требует серьезной подготовки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_3.jpg" alt="Исторические экспедиции на Таймыр" loading="lazy">
   </div>
</div>
<!-- Блок 4: Маршруты для путешественников -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Маршруты для путешественников</h2>
      <p class="modalBlock__description">
         Для продвинутых путешественников по&nbsp;территории заповедника проложено несколько маршрутов, большинство из&nbsp;них водные. Из&nbsp;Дудинки, где находится порт на&nbsp;трассе Северного морского пути, через дельту Енисея можно выйти в&nbsp;Карское море.
      </p>
      <p class="modalBlock__description">
         А&nbsp;вот на&nbsp;мыс Челюскин, самую северную точку Евразии, можно добраться на&nbsp;вертолете из&nbsp;Хатанги, старинного села на&nbsp;Восточном Таймыре.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_4.jpg" alt="Мыс Челюскин и туристические маршруты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Попасть в&nbsp;заповедник &laquo;Большой Арктический&raquo;&nbsp;&mdash; это настоящее экспедиционное приключение. Доступ возможен только с&nbsp;использованием специального транспорта.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Морем:</strong> в&nbsp;ходе трансарктических круизов по&nbsp;Северному морскому пути. Это один из&nbsp;самых масштабных способов увидеть заповедник.</li>
         <li class="modalBlock__listItem"><strong>Вертолетом:</strong> из&nbsp;села Хатанга. Это основной способ достичь таких ключевых точек, как мыс Челюскин.</li>
      </ul>
      <p class="modalBlock__description">
         Посещение заповедника требует специальных разрешений, экспедиционного снаряжения и&nbsp;тщательного планирования с&nbsp;учетом суровых арктических условий.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/kak_dobratsya.jpg" alt="Доступ в Большой Арктический заповедник" loading="lazy">
   </div>
</div>`
        },


//-------------------------Саяно-Шушенский заповедник--------------------------------------
        {
            id: 'sayano_2',
            title: 'Саяно-Шушенский заповедник',
            image: '../../img/krasnoyarsk/cards_nature/Sayano_Shushenskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Саяно-Шушенский&raquo;</h1>
</div>
<!-- Блок 1: В зоне влияния великой ГЭС -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">В&nbsp;зоне влияния великой ГЭС</h2>
      <p class="modalBlock__description">
         На&nbsp;левом берегу Енисея, в&nbsp;труднодоступном районе Западного Саяна, расположены две ООПТ: заповедник &laquo;Саяно-Шушенский&raquo; и&nbsp;нацпарк &laquo;Шушенский бор&raquo;. Объединяет их&nbsp;зона влияния одноименного водохранилища, где находится крупнейшая по&nbsp;мощности гидроэлектростанция в&nbsp;России.
      </p>
      <p class="modalBlock__description">
         Снежный барс&nbsp;&mdash; основной охраняемый вид заповедника, а&nbsp;еще здесь можно встретить манула, соболя и&nbsp;сибирского козерога.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_1.jpg" alt="Саяно-Шушенская ГЭС и заповедник" loading="lazy">
   </div>
</div>
<!-- Блок 2: Компенсация природе -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Компенсация природе</h2>
      <p class="modalBlock__description">
         Саяно-Шушенский заповедник создавался в&nbsp;середине прошлого века как компенсация при строительстве ГЭС на&nbsp;Енисее. Сегодня она снабжает энергией всю Хакасию, Туву, Красноярский и&nbsp;Забайкальский края.
      </p>
      <p class="modalBlock__description">
         Однако нагрузка на&nbsp;экосистему оказалась высокой. При подъеме воды в&nbsp;водохранилище большие прибрежные территории затапливаются, а&nbsp;изменения коснулись и&nbsp;климата. Со&nbsp;временем, благодаря заповедной системе, наиболее уязвимые виды удалось сохранить.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_2.jpg" alt="Экосистема заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 3: Климат и ландшафты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Климат и&nbsp;ландшафты</h2>
      <p class="modalBlock__description">
         В&nbsp;наши дни климат здесь преимущественно континентальный, что создает разнообразные природные условия&nbsp;&mdash; от&nbsp;альпийских лугов до&nbsp;сосновых и&nbsp;лиственничных лесов.
      </p>
      <p class="modalBlock__description">
         Сами горы здесь не&nbsp;высокие, но&nbsp;рельефные, острые пики скал сменяются широкими каньонами, водопадами и&nbsp;ущельями.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_3.jpg" alt="Ландшафты Западного Саяна" loading="lazy">
   </div>
</div>
<!-- Блок 4: Шушенский бор и маршруты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Шушенский бор и&nbsp;маршруты</h2>
      <p class="modalBlock__description">
         Не&nbsp;менее интересна история национального парка &laquo;Шушенский бор&raquo;. Заложить его решили в&nbsp;память о&nbsp;Владимире Ленине, который охотился в&nbsp;этих местах, отбывая ссылку. Благодаря этому бор был спасен от&nbsp;вырубки.
      </p>
      <p class="modalBlock__description">
         По&nbsp;территории заповедника проложено несколько многодневных маршрутов. Путешествие по&nbsp;Саянскому каньону понравится тем, кто любит покорять несложные, но&nbsp;завораживающие горы. Часть пути проходит по&nbsp;воде&nbsp;&mdash; можно с&nbsp;борта катера увидеть диких животных.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_4.jpg" alt="Туристические маршруты и Шушенский бор" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Посещение заповедника требует предварительной организации и&nbsp;получения разрешения. Основной точкой доступа служит поселок Шушенское.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Начальная точка:</strong> знакомство с&nbsp;заповедником начинается с&nbsp;музея природы &laquo;Дом снежного барса&raquo; в&nbsp;поселке Шушенское (ул. Заповедная, 7).</li>
         <li class="modalBlock__listItem"><strong>Оформление:</strong> там&nbsp;же можно заказать пропуск на&nbsp;посещение заповедника, выбрать интересующий маршрут или экскурсию по&nbsp;водохранилищу.</li>
         <li class="modalBlock__listItem"><strong>Дорога:</strong> до&nbsp;поселка Шушенское можно добраться на&nbsp;автомобиле или автобусе из&nbsp;Красноярска или Абакана.</li>
      </ul>
      <p class="modalBlock__description">
         Все маршруты по&nbsp;заповеднику проходят в&nbsp;сопровождении инструкторов. Саяно-Шушенская ГЭС также доступна для посещения со&nbsp;смотровой площадки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/kak_dobratsya.jpg" alt="Доступ в Саяно-Шушенский заповедник" loading="lazy">
   </div>
</div>`
        },


//-------------------------Тунгусский заповедник--------------------------------------
        {
            id: 'nature8',
            title: 'Тунгусский заповедник',
            image: '../../img/krasnoyarsk/cards_nature/Tungusskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Тунгусский&raquo;</h1>
</div>
<!-- Блок 1: Место великой тайны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Место великой тайны</h2>
      <p class="modalBlock__description">
         Природный заповедник &laquo;Тунгусский&raquo; образовался вокруг места падения знаменитого Тунгусского метеорита летом 1908&nbsp;года. Это событие космического масштаба произошло в&nbsp;междуречье Подкаменной Тунгуски и&nbsp;ее&nbsp;правого притока&nbsp;&mdash; реки Чуни.
      </p>
      <p class="modalBlock__description">
         Уникальное событие, произошедшее в&nbsp;начале прошлого века, назвали Тунгусским феноменом. Яркий взрыв, звук которого был слышен на&nbsp;расстоянии 1&nbsp;тыс.&nbsp;км, до&nbsp;сих пор привлекает внимание научных исследователей и&nbsp;любителей необъясненных тайн Вселенной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_1.jpg" alt="Заповедник Тунгусский" loading="lazy">
   </div>
</div>
<!-- Блок 2: Гипотезы и исследования -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Гипотезы и&nbsp;исследования</h2>
      <p class="modalBlock__description">
         Часть ученых считают, что космическое тело представляло собой астероид или часть кометы, расколовшейся во&nbsp;время падения. Однако научно доказанной гипотезы до&nbsp;сих пор не&nbsp;существует, поэтому этот объект продолжают называть условно Тунгусским метеоритом.
      </p>
      <p class="modalBlock__description">
         Интересно, что еще в&nbsp;советское время существовало более 70&nbsp;гипотез, объясняющих его падение. Расчеты показали, что для появления подобных разрушений небесное тело должно было иметь массу порядка 5&nbsp;млн тонн.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_2.jpg" alt="Изучение Тунгусского феномена" loading="lazy">
   </div>
</div>
<!-- Блок 3: Свидетельства очевидцев -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Свидетельства очевидцев</h2>
      <p class="modalBlock__description">
         У&nbsp;Тунгусского феномена было много свидетелей. Среди них эвенкийская семья, разбившая в&nbsp;тот день чум в&nbsp;30&nbsp;км от&nbsp;эпицентра.
      </p>
      <p class="modalBlock__description">
         &laquo;Вдруг над горой, где уже упал лес, стало сильно светло, будто второе солнце появилось. Похоже было на&nbsp;то, что русские называют &bdquo;молния&ldquo;. И&nbsp;сразу&nbsp;же был агдыллян, сильный гром&raquo;,&nbsp;&mdash; рассказывали очевидцы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_3.jpg" alt="Эвенкийские свидетельства" loading="lazy">
   </div>
</div>
<!-- Блок 4: Научный полигон -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Научный полигон</h2>
      <p class="modalBlock__description">
         Для сохранения района Тунгусского феномена был создан одноименный заповедник. Упавший метеорит повредил большой участок тайги, однако для ученых представилась редкая возможность наблюдать процесс восстановления экосистемы, разрушенной таинственным объектом.
      </p>
      <p class="modalBlock__description">
         Сегодня территория заповедника является главным научным полигоном изучения экологических последствий сверхмощного взрыва Тунгусского метеорита. Экспедиции с&nbsp;целью изучения последствий космической катастрофы продолжаются и&nbsp;сегодня.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_4.jpg" alt="Научные исследования в заповеднике" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Попасть на&nbsp;территорию заповедника сложно, так как это одно из&nbsp;самых труднодоступных мест в&nbsp;Красноярском крае. Доступ осуществляется только авиатранспортом.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Самолетом:</strong> до&nbsp;ближайшего к&nbsp;эпицентру предполагаемого падения метеорита села Ванавара три раза в&nbsp;неделю летают самолеты из&nbsp;Красноярска. Здесь находится дирекция заповедника.</li>
         <li class="modalBlock__listItem"><strong>Вертолетом:</strong> дальше в&nbsp;саму зону эпицентра можно добраться только на&nbsp;вертолете. Это единственный способ достичь места падения Тунгусского метеорита.</li>
      </ul>
      <p class="modalBlock__description">
         Посещение заповедника требует специального разрешения&nbsp;и, как правило, организуется в&nbsp;составе научных или специальных туристических групп.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/tungusskii/kak_dobratsya.jpg" alt="Доступ в Тунгусский заповедник" loading="lazy">
   </div>
</div>`
        }
    ],

//-------------------------Культурный код--------------------------------------

    culture: [
        {
            id: 'stoyanka',
            title: '&laquo;Стоянки коренных народов&raquo;',
            image: '../../img/krasnoyarsk/cards_culture/stoyanka_narodov_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Стоянки коренных народов</h1>
</div>
<!-- Блок 1: Белые пятна на карте -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Белые пятна на&nbsp;карте</h2>
      <p class="modalBlock__description">
         На&nbsp;карте Красноярского края сохранилось несколько &laquo;белых пятен&raquo;, не&nbsp;затронутых урбанизацией. На&nbsp;этих территориях местные этносы, как и&nbsp;сотни лет назад, до&nbsp;сих пор ведут свой незатейливый образ жизни.
      </p>
      <p class="modalBlock__description">
         Отправиться изучать культуру, традиции и&nbsp;быт малочисленных народов можно вместе с&nbsp;учеными&nbsp;&mdash; в&nbsp;одном из&nbsp;этнографических экспедиционных путешествий.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_1.jpg" alt="Кочевая стоянка в тундре" loading="lazy">
   </div>
</div>
<!-- Блок 2: Культурное богатство и вызовы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культурное богатство и&nbsp;вызовы</h2>
      <p class="modalBlock__description">
         Коренные народы Красноярского края&nbsp;&mdash; неотъемлемая часть культурного и&nbsp;исторического богатства России. Их&nbsp;традиции, знания и&nbsp;бережное отношение к&nbsp;природе могут стать источником вдохновения для всех, кто стремится к&nbsp;гармонии с&nbsp;окружающим миром.
      </p>
      <p class="modalBlock__description">
         К&nbsp;сожалению, многие этносы сталкиваются с&nbsp;проблемами сохранения своей культуры и&nbsp;языка. Глобализация, изменение климата и&nbsp;промышленное освоение территорий оказывают давление на&nbsp;их&nbsp;традиционный уклад жизни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_2.jpg" alt="Представители коренных народов в национальной одежде" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сочетание архаики и современности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сочетание архаики и&nbsp;современности</h2>
      <p class="modalBlock__description">
         В&nbsp;чумах оленеводов появляется спутниковая связь, а&nbsp;снегоход или квадроцикл легко обгоняет нарты, запряженные пятеркой оленей. Однако парадокс заключается в&nbsp;том, что зачастую именно архаичные технологии&nbsp;&mdash; единственное, что проходит проверку климатом и&nbsp;временем.
      </p>
      <p class="modalBlock__description">
         Каждый оленевод, круглый год кочующий по&nbsp;тундре, скажет, что нет ничего надежнее оленя и&nbsp;простых нарт. Этот традиционный образ жизни демонстрирует удивительную адаптивность и&nbsp;устойчивость.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_3.jpg" alt="Оленеводы и олени в тундре" loading="lazy">
   </div>
</div>
<!-- Блок 4: Погружение в мир Севера -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Погружение в&nbsp;мир Севера</h2>
      <p class="modalBlock__description">
         Сегодня Красноярский край&nbsp;&mdash; одно из&nbsp;немногих мест, где можно с&nbsp;головой погрузиться в&nbsp;мир коренных малочисленных народов Севера, пожить жизнью оленеводов, обучиться их&nbsp;особым искусствам, подружиться с&nbsp;оленями и&nbsp;постичь философию кочевого образа жизни.
      </p>
      <p class="modalBlock__description">
         Каждый год Русское географическое общество организует серию этнографических экспедиционных путешествий, где можно приобщиться к&nbsp;антропологической &laquo;кухне&raquo;, научиться работать в&nbsp;поле и&nbsp;собирать материалы, как настоящие этнографы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_4.jpg" alt="Этнографическая экспедиция и быт кочевников" loading="lazy">
   </div>
</div>
<!-- Блок 5: Путешествие к истокам -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Путешествие к&nbsp;истокам</h2>
      <p class="modalBlock__description">
         Посещение стоянок коренных народов&nbsp;&mdash; это уникальный опыт, требующить особого подхода и&nbsp;уважения к&nbsp;хозяевам тундры и&nbsp;тайги.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Организация:</strong> такие поездки организуются в&nbsp;рамках специальных этнографических туров и&nbsp;экспедиций, часто под эгидой Русского географического общества или с&nbsp;привлечением ученых-антропологов.</li>
         <li class="modalBlock__listItem"><strong>Формат:</strong> это не&nbsp;просто экскурсия, а&nbsp;настоящее погружение. Участники живут в&nbsp;чумах, участвуют в&nbsp;повседневных делах, помогают пасти оленей, учатся традиционным ремеслам.</li>
         <li class="modalBlock__listItem"><strong>Цель:</strong> главная задача&nbsp;&mdash; понять и&nbsp;почувствовать, а&nbsp;не&nbsp;просто наблюдать. Это обмен опытом и&nbsp;взаимное обогащение культур.</li>
      </ul>
      <p class="modalBlock__description">
         Сохранение наследия коренных народов&nbsp;&mdash; это не&nbsp;только дань уважения прошлому, но&nbsp;и&nbsp;важный шаг к&nbsp;устойчивому будущему.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_5.jpg" alt="Взаимодействие с коренными народами в экспедиции" loading="lazy">
   </div>
</div>`
        },

//-------------------------Этнопарки и музеи--------------------------------------
        {
            id: 'etnoparki',
            title: 'Этнопарки и музеи',
            image: '../../img/krasnoyarsk/cards_culture/etnoparki_musei_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Этнопарки и&nbsp;музеи</h1>
   <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Мост между прошлым и настоящим -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Мост между прошлым и&nbsp;настоящим</h2>
      <p class="modalBlock__description">
         Культурные пространства Красноярского края становятся мостом между прошлым и&nbsp;настоящим, помогая сохранить наследие для будущих поколений.
      </p>
      <p class="modalBlock__description">
         Здесь можно познакомиться с&nbsp;уникальными традициями, бытом и&nbsp;искусством этнических групп, которые веками проживают на&nbsp;этой территории. Это живые пространства для диалога и&nbsp;образования.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_1.jpg" alt="Экспозиция этнографического музея" loading="lazy">
   </div>
</div>
<!-- Блок 2: Красноярский краеведческий музей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Красноярский краеведческий музей</h2>
      <p class="modalBlock__description">
         Одним из&nbsp;самых известных этнографических музеев Красноярского края является Красноярский краевой краеведческий музей. Здесь представлены экспозиции, посвященные культуре и&nbsp;быту коренных народов региона: эвенков, долган, ненцев, кетов и&nbsp;селькупов.
      </p>
      <p class="modalBlock__description">
         Посетители могут увидеть традиционные костюмы, предметы быта, орудия труда и&nbsp;произведения искусства. Музей также проводит образовательные программы и&nbsp;мастер-классы, позволяющие глубже погрузиться в&nbsp;культуру.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_2.jpg" alt="Красноярский краеведческий музей" loading="lazy">
   </div>
</div>
<!-- Блок 3: Таймырский краеведческий музей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Таймырский краеведческий музей</h2>
      <p class="modalBlock__description">
         Еще одним значимым местом является Таймырский краеведческий музей в&nbsp;Дудинке. Он&nbsp;посвящен истории и&nbsp;культуре народов Таймыра, в&nbsp;частности долган и&nbsp;ненцев.
      </p>
      <p class="modalBlock__description">
         Экспозиции музея включают традиционные жилища (чумы), одежду из&nbsp;оленьих шкур, ритуальные предметы и&nbsp;произведения декоративно-прикладного искусства. Музей активно сотрудничает с&nbsp;местными общинами, сохраняя аутентичность экспонатов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_3.jpg" alt="Экспонаты Таймырского музея" loading="lazy">
   </div>
</div>
<!-- Блок 4: Этнопарк «Новая деревня» и Музей Таймырского заповедника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;деревни до&nbsp;заповедника</h2>
      <p class="modalBlock__description">
         Этнопарк &laquo;Новая деревня&raquo; в&nbsp;поселке Шушенское воссоздает атмосферу сибирской деревни XIX&nbsp;века. Хотя акцент сделан на&nbsp;русской культуре, парк также знакомит с&nbsp;взаимодействием русских переселенцев и&nbsp;коренных народов Сибири.
      </p>
      <p class="modalBlock__description">
         Музей природы и&nbsp;этнографии Таймырского заповедника в&nbsp;Хатанге показывает быт долган и&nbsp;нганасан. В&nbsp;нем представлены уникальные коллекции, проводятся интерактивные лекции, национальные праздники и&nbsp;встречи с&nbsp;учеными.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_4.jpg" alt="Этнопарк и музейные экспонаты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Культурные учреждения Красноярского края расположены в&nbsp;разных его частях&nbsp;&mdash; от&nbsp;столицы региона до&nbsp;самых отдаленных арктических поселков.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Красноярский краевой краеведческий музей:</strong> г. Красноярск, ул. Дубровинского, 84. Легко доступен на&nbsp;общественном транспорте в&nbsp;центре города.</li>
         <li class="modalBlock__listItem"><strong>Таймырский краеведческий музей:</strong> г. Дудинка, ул. Советская, 30. Добраться можно самолетом из&nbsp;Красноярска или Норильска.</li>
         <li class="modalBlock__listItem"><strong>Этнопарк &laquo;Новая деревня&raquo;:</strong> п. Шушенское, ул. Новая, 1. Доехать можно на&nbsp;автомобиле или автобусе из&nbsp;Красноярска или Абакана.</li>
         <li class="modalBlock__listItem"><strong>Музей природы и&nbsp;этнографии Таймырского заповедника:</strong> с. Хатанга, ул. Таймырская. Доступен только авиатранспортом из&nbsp;Красноярска или Норильска, посещение часто входит в&nbsp;программу туров по&nbsp;Таймыру.</li>
      </ul>
      <p class="modalBlock__description">
         Перед посещением удаленных музеев рекомендуется уточнять режим работы и&nbsp;возможность визита, так как они могут зависеть от&nbsp;погодных условий и&nbsp;сезона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_5.jpg" alt="Карта расположения музеев и этнопарков" loading="lazy">
   </div>
</div>`
        },
//-------------------------Енисейская Сибирь--------------------------------------
        {
            id: 'enisei',
            title: 'Енисейская Сибирь',
            image: '../../img/krasnoyarsk/cards_culture/eniseiskaya_sibir_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Енисейская Сибирь</h1>
   <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Река, объединяющая миры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Река, объединяющая миры</h2>
      <p class="modalBlock__description">
         Путешествовать по&nbsp;Енисею&nbsp;&mdash; все равно что отправиться на&nbsp;другую планету. Это берега контрастов, где суровая природа соседствует с&nbsp;богатой культурой и&nbsp;историей.
      </p>
      <p class="modalBlock__description">
         Почти 2&nbsp;тыс.&nbsp;км&nbsp;реки знакомят нас с&nbsp;культурой Сибирского края, с&nbsp;бытом и&nbsp;традициями пяти малых народностей Сибири и&nbsp;Крайнего Севера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_1.jpg" alt="Вид на реку Енисей" loading="lazy">
   </div>
</div>
<!-- Блок 2: От Саян до Арктики -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;Саян до&nbsp;Арктики</h2>
      <p class="modalBlock__description">
         Енисей не&nbsp;просто делит Сибирь на&nbsp;Западную и&nbsp;Восточную&nbsp;&mdash; с&nbsp;отрогов Саянских гор до&nbsp;Северного Ледовитого океана,&nbsp;&mdash; он&nbsp;объединяет юг&nbsp;и&nbsp;север России, жаркие степи и&nbsp;Арктику, верблюдов и&nbsp;белых медведей.
      </p>
      <p class="modalBlock__description">
         Вдоль его берегов сложился историко-культурный феномен&nbsp;&mdash; Енисейская Сибирь. Сюда едут знакомиться с&nbsp;бытом коренных народов и&nbsp;нетронутой природой. Сделать это можно, только путешествуя по&nbsp;реке.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_2.jpg" alt="Ландшафты вдоль Енисея" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сквозь три климатических пояса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сквозь три климатических пояса</h2>
      <p class="modalBlock__description">
         Река, протянувшаяся с&nbsp;севера на&nbsp;юг&nbsp;почти на&nbsp;2&nbsp;тыс.&nbsp;км, пересекает три климатических пояса: арктический, субарктический и&nbsp;умеренный. Это уникальная природная артерия, соединяющая столь разные миры.
      </p>
      <p class="modalBlock__description">
         Издревле дарами Енисея кормились люди, селившиеся по&nbsp;его берегам от&nbsp;Саянских хребтов до&nbsp;самого Карского моря. Река была и&nbsp;остается главной транспортной и&nbsp;жизненной магистралью для всего края.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_3.jpg" alt="Климатические зоны Енисея" loading="lazy">
   </div>
</div>
<!-- Блок 4: Легенды Большой воды -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Легенды Большой воды</h2>
      <p class="modalBlock__description">
         Ненцы и&nbsp;эвенки называли Енисей Большой водой, а&nbsp;в&nbsp;легендах рассказывали, будто в&nbsp;нем живет огромный таймырский дракон.
      </p>
      <p class="modalBlock__description">
         Для коренных народов Енисей&nbsp;&mdash; это не&nbsp;просто географический объект, а&nbsp;живое существо, источник жизни и&nbsp;вдохновения. Его образ нашел отражение в&nbsp;фольклоре, обрядах и&nbsp;мифологии многих народов Сибири.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_4.jpg" alt="Коренные народы на берегу Енисея" loading="lazy">
   </div>
</div>
<!-- Блок 5: Путешествие по Енисею -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Путешествие по&nbsp;Енисею</h2>
      <p class="modalBlock__description">
         Исследовать Енисейскую Сибирь лучше всего с&nbsp;воды. Речные круизы и&nbsp;экспедиции предлагают самый полный и&nbsp;захватывающий способ увидеть все разнообразие края.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Круизные маршруты:</strong> от&nbsp;Красноярска до&nbsp;Дудинки и&nbsp;далее до&nbsp;морских портов. Маршруты варьируются от&nbsp;недельных до&nbsp;многодневных экспедиций.</li>
         <li class="modalBlock__listItem"><strong>Ключевые точки:</strong> по&nbsp;пути можно увидеть Красноярские Столбы, Саяно-Шушенскую ГЭС, старинные сибирские села, места стоянок коренных народов и&nbsp;бескрайние просторы Таймыра.</li>
         <li class="modalBlock__listItem"><strong>Способ путешествия:</strong> на&nbsp;комфортабельных теплоходах, экспедиционных судах или, для более активных туристов,&nbsp;&mdash; на&nbsp;катамаранах и&nbsp;лодках на&nbsp;отдельных участках реки.</li>
      </ul>
      <p class="modalBlock__description">
         Такое путешествие&nbsp;&mdash; это уникальная возможность за&nbsp;одну поездку увидеть, как меняется природа, климат и&nbsp;культура на&nbsp;протяжении тысяч километров великой сибирской реки.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/kak_dobratsya.jpg" alt="Круизный теплоход на Енисее" loading="lazy">
   </div>
</div>`
        },

//-------------------------День оленевода--------------------------------------

        {
            id: 'olenevod',
            title: 'День оленевода',
            image: '../../img/krasnoyarsk/cards_culture/den_olenevoda_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">День оленевода</h1>
   <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Праздник тундровиков -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Праздник тундровиков</h2>
      <p class="modalBlock__description">
         В&nbsp;зимнее время, когда вокруг царствует полярная ночь, от&nbsp;чума далеко не&nbsp;отойдешь. Однако для этого оленеводы придумали себе праздник, который со&nbsp;временем стал профессиональным.
      </p>
      <p class="modalBlock__description">
         Каждый год в&nbsp;начале весны День оленевода кочует вслед за&nbsp;участниками по&nbsp;всей Арктике&nbsp;&mdash; от&nbsp;Мурманска до&nbsp;Камчатки, становясь ярким событием в&nbsp;жизни коренных народов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_1.jpg" alt="Праздничное шествие в День оленевода" loading="lazy">
   </div>
</div>
<!-- Блок 2: Традиции и смысл праздника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Традиции и&nbsp;смысл праздника</h2>
      <p class="modalBlock__description">
         Главное торжество приходится на&nbsp;день весеннего равноденствия, когда заканчивается долгая полярная ночь,&nbsp;&mdash; считается, что солнце начинает свой путь в&nbsp;верхний мир.
      </p>
      <p class="modalBlock__description">
         Традиционно в&nbsp;это время у&nbsp;северных народов проводится День оленевода, хотя празднования могут растянуться на&nbsp;несколько месяцев. У&nbsp;каждого этноса есть свой набор игр и&nbsp;состязаний, многие из&nbsp;которых стали национальными видами спорта.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_2.jpg" alt="Традиционные костюмы и обряды" loading="lazy">
   </div>
</div>
<!-- Блок 3: Состязания и игры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Состязания и&nbsp;игры</h2>
      <p class="modalBlock__description">
         Гонки на&nbsp;оленьих упряжках, прыжки через нарты, метание тынзяна (аркана) на&nbsp;хорей (деревянный шест)&nbsp;&mdash; традиционный набор соревнований Дня оленевода.
      </p>
      <p class="modalBlock__description">
         Это не&nbsp;только зрелищные состязания, но&nbsp;и&nbsp;проверка навыков, необходимых в&nbsp;суровых условиях тундры. Участие в&nbsp;них принимают как опытные оленеводы, так и&nbsp;молодежь.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_3.jpg" alt="Гонки на оленьих упряжках" loading="lazy">
   </div>
</div>
<!-- Блок 4: Культурная программа и ярмарка -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культурная программа и&nbsp;ярмарка</h2>
      <p class="modalBlock__description">
         В&nbsp;программе праздника&nbsp;&mdash; театрализованные выступления народных ансамблей, ямальская кухня, обеды в&nbsp;чумах, устланных оленьими шкурами.
      </p>
      <p class="modalBlock__description">
         Широкая ярмарка сувениров с&nbsp;северным колоритом предлагает фигурки и&nbsp;куклы из&nbsp;кости, керамики и&nbsp;бронзы, национальную одежду, украшения и&nbsp;памятные сувениры ручной работы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_4.jpg" alt="Ярмарка сувениров и угощения" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и где отмечается -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;где отмечается</h2>
      <p class="modalBlock__description">
         День оленевода&nbsp;&mdash; это не&nbsp;один, а&nbsp;целая череда праздников в&nbsp;разных населенных пунктах Красноярского края. Даты проведения варьируются, обычно выпадая на&nbsp;март.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>На&nbsp;Таймыре:</strong> основные торжества проходят в&nbsp;Дудинке, Хатанге и&nbsp;поселке Попигай. До&nbsp;этих пунктов можно добраться самолетом из&nbsp;Красноярска или Норильска.</li>
         <li class="modalBlock__listItem"><strong>В&nbsp;Эвенкии:</strong> праздник широко отмечается в&nbsp;поселке Суринда. Добраться туда можно авиацией через Туру или другими населенными пунктами Эвенкии.</li>
      </ul>
      <p class="modalBlock__description">
         Посещение праздника рекомендуется планировать заранее, уточняя точные даты и&nbsp;программу мероприятий в&nbsp;конкретном населенном пункте. Это уникальная возможность погрузиться в&nbsp;живую культуру коренных народов Севера.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_5.jpg" alt="Карта мест проведения праздника" loading="lazy">
   </div>
</div>`
        },

//-------------------------Музей мамонта--------------------------------------

        {
            id: 'musei',
            title: 'Музей мамонта',
            image: '../../img/krasnoyarsk/cards_culture/musei_mamonta_0.jpg',
            modalContent:


`<div class="modalHeader">
   <h1 class="modalHeader__title">Музей мамонта</h1>
</div>
<!-- Блок 1: В ледяном сердце мерзлоты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">В&nbsp;ледяном сердце мерзлоты</h2>
      <p class="modalBlock__description">
         Здесь хранится мамонт Жаркова, найденный молодым оленеводом в&nbsp;слоях вечной мерзлоты на&nbsp;Таймыре. Возраст мамонта, по&nbsp;подсчетам ученых, составляет более 20&nbsp;тыс. лет.
      </p>
      <p class="modalBlock__description">
         Посмотреть на&nbsp;гигантские бивни мамонтов в&nbsp;настоящем ледяном гроте, который не&nbsp;тает даже летом,&nbsp;&mdash; поистине невероятное приключение.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_1.jpg" alt="Вход в ледяной грот музея" loading="lazy">
   </div>
</div>
<!-- Блок 2: Уникальный подземный грот -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальный подземный грот</h2>
      <p class="modalBlock__description">
         Вход в&nbsp;подземный грот расположен на&nbsp;обрывистом берегу реки Хатанга. Внутри&nbsp;&mdash; настоящее царство холода и&nbsp;льда. Экспонаты, покрытые мелкими кристалликами,&nbsp;&mdash; свидетели эпохи плейстоцена, начавшейся 2,5 млн лет назад.
      </p>
      <p class="modalBlock__description">
         В&nbsp;этот период на&nbsp;Земле обитали шерстистые носороги и&nbsp;саблезубые кошки, а&nbsp;также мамонты&nbsp;&mdash; голова одного из&nbsp;них застыла в&nbsp;ледяной глыбе в&nbsp;одном из&nbsp;залов музея.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_2.jpg" alt="Интерьер ледяного музея" loading="lazy">
   </div>
</div>
<!-- Блок 3: Идея французского палеонтолога -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Идея французского палеонтолога</h2>
      <p class="modalBlock__description">
         Еще в&nbsp;1990-х годах французский палеонтолог, исследователь мамонтовой фауны Бернар Бюиг, много лет проработавший на&nbsp;Таймыре, оборудовал в&nbsp;слоях вечной мерзлоты пещеру, которую в&nbsp;советское время использовали вместо холодильника для хранения продуктов.
      </p>
      <p class="modalBlock__description">
         Здесь в&nbsp;любое время года сохраняется устойчивая минусовая температура&nbsp;&mdash; где-то около &minus;15 &deg;С.&nbsp;Благодаря таким условиям ценные останки древних животных можно хранить без химической обработки и&nbsp;консервации.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_3.jpg" alt="Условия хранения экспонатов" loading="lazy">
   </div>
</div>
<!-- Блок 4: Мамонт Жаркова -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Мамонт Жаркова</h2>
      <p class="modalBlock__description">
         Центром экспозиции стал мамонт Жаркова, найденный здесь&nbsp;же, на&nbsp;Таймыре, охотником Алексеем Жарковым. Гигантскую мерзлую глыбу грунта весом в&nbsp;30&nbsp;тонн, в&nbsp;центре которой находилось доисторическое животное, вырубили прямо в&nbsp;тундре и&nbsp;вертолетом доставили в&nbsp;хатангскую подледную лабораторию для изучения.
      </p>
      <p class="modalBlock__description">
         У&nbsp;мамонта Жаркова сохранились неповрежденными мягкие ткани&nbsp;&mdash; уши и&nbsp;хвост. Позже в&nbsp;состав экспозиции музея вошла коллекция палеонтологического Музея мамонта и&nbsp;овцебыка&nbsp;им. профессора Николая Верещагина.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_4.jpg" alt="Мамонт Жаркова в музее" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Музей мамонта является частью туристической инфраструктуры села Хатанга и&nbsp;доступен для посещения в&nbsp;составе экскурсий.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Местоположение:</strong> музей располагается в&nbsp;подземном гроте в&nbsp;черте села Хатанга, на&nbsp;берегу одноименной реки.</li>
         <li class="modalBlock__listItem"><strong>Доступ:</strong> посещение музея организуется через местные туристические центры или дирекцию Таймырского заповедника. Самостоятельный доступ в&nbsp;грот невозможен.</li>
         <li class="modalBlock__listItem"><strong>Подготовка:</strong> внутри музея круглый год сохраняется отрицательная температура (около &minus;15&deg;C), поэтому для посещения необходима теплая зимняя одежда, даже летом.</li>
      </ul>
      <p class="modalBlock__description">
         Музей входит в&nbsp;программу большинства экспедиционных и&nbsp;туристических маршрутов по&nbsp;Таймыру, стартующих из&nbsp;Хатанги.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/kak_dobratsya.jpg" alt="Расположение музея на карте" loading="lazy">
   </div>
</div>`
        },

//-------------------------Село Хатанга--------------------------------------

        {
            id: 'hatang',
            title: 'Село Хатанга',
            image: '../../img/krasnoyarsk/cards_culture/selo_hatanga_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Село Хатанга</h1>
</div>
<!-- Блок 1: Врата Русской Арктики -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Врата Русской Арктики</h2>
      <p class="modalBlock__description">
         Одно из&nbsp;самых северных поселений России, важный транспортный узел и&nbsp;культурный центр коренных народов Заполярья, который восстанавливается силами ученых и&nbsp;добровольцев Русского географического общества.
      </p>
      <p class="modalBlock__description">
         В&nbsp;Хатанге развернулся настоящий центр арктического туризма под эгидой РГО: отсюда стартуют научно-популярные и&nbsp;этнографические маршруты по&nbsp;всему Таймыру.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_1.jpg" alt="Село Хатанга с высоты" loading="lazy">
   </div>
</div>
<!-- Блок 2: Страницы истории -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Страницы истории</h2>
      <p class="modalBlock__description">
         Первые комплексные исследования Арктики принадлежат героическим мореплавателям Великой Северной экспедиции 1733 года&nbsp;&mdash; Витусу Берингу, братьям Лаптевым, Семену Челюскину.
      </p>
      <p class="modalBlock__description">
         Однако еще за&nbsp;сотню лет до&nbsp;них русскими казаками был основан первый заполярный город за&nbsp;Уралом&nbsp;&mdash; Мангазея. Хатанга, известная по&nbsp;упоминаниям английских купцов с&nbsp;начала XVII&nbsp;века, является одним из&nbsp;его исторических наследников.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_2.jpg" alt="Историческая карта и памятники" loading="lazy">
   </div>
</div>
<!-- Блок 3: Культурный и стратегический центр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Культурный и&nbsp;стратегический центр</h2>
      <p class="modalBlock__description">
         Хатанга&nbsp;&mdash; стратегическая точка Русской Арктики, расположенная у&nbsp;входа в&nbsp;одноименный залив моря Лаптевых, где находится один из&nbsp;портов Северного морского пути. Слово &laquo;хатанга&raquo; с&nbsp;эвенкийского переводится как &laquo;большая вода&raquo;.
      </p>
      <p class="modalBlock__description">
         Здесь находится самый северный в&nbsp;России православный храм, уникальный Музей мамонта в&nbsp;ледовой пещере, дирекция Таймырского биосферного заповедника, а&nbsp;также культурные центры коренных народов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_3.jpg" alt="Культурные объекты Хатанги" loading="lazy">
   </div>
</div>
<!-- Блок 4: Центр арктического туризма -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Центр арктического туризма</h2>
      <p class="modalBlock__description">
         В&nbsp;Хатанге открыта гостиница &laquo;Мамонт Инн&raquo; с&nbsp;номерами в&nbsp;скандинавском стиле. Здесь можно ощутить атмосферу Арктики: оленьи шкуры, вид на&nbsp;северное сияние и&nbsp;ледяной бар &laquo;Мамонт&raquo;.
      </p>
      <p class="modalBlock__description">
         Здесь отмечаются уникальные праздники: День оленевода, праздник солнца Хейро, День рыбака. Можно приобрести национальную одежду, куклы, изделия из&nbsp;бивня мамонта, рогов и&nbsp;меха оленя.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_4.jpg" alt="Гостиница и сувениры Хатанги" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться</h2>
      <p class="modalBlock__description">
         Хатанга&nbsp;&mdash; труднодоступное, но&nbsp;стратегически важное поселение. Добраться сюда можно только авиатранспортом, что подчеркивает его удаленность и&nbsp;особый статус.
      </p>
      <ul class="modalBlock__list">
         <li class="modalBlock__listItem"><strong>Самолетом из&nbsp;Красноярска:</strong> перелет занимает около 3,5&nbsp;часов. Регулярные рейсы осуществляются раз в&nbsp;неделю.</li>
         <li class="modalBlock__listItem"><strong>Самолетом из&nbsp;Норильска:</strong> более короткий перелет, занимает около 2&nbsp;часов. Также выполняется на&nbsp;регулярной основе.</li>
      </ul>
      <p class="modalBlock__description">
         Хатанга служит стартовой точкой для экспедиций на&nbsp;Таймыр, к&nbsp;Северному полюсу. Посещение лучше планировать в&nbsp;составе организованных туров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/kak_dobratsya.jpg" alt="Аэропорт Хатанги" loading="lazy">
   </div>
</div>`
        }
    ]
};


window.krasnoyarskData = krasnoyarskData;
