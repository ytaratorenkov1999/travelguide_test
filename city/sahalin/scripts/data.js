// ============================================
// ДАННЫЕ КАРТОЧЕК САХАЛИНСКОГО КРАЯ
// ============================================

const sahalinData = {
//-----------------------------------------Маяк Анива------------------------------------------------
    attractions: [
        {
            id: 'mayak_aniva',
            title: 'Маяк Анива',
            image: '../../img/sahalin/cards_tochki/mayak_aniva_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Маяк Анива</h1>
</div>
<!-- Блок 1: Одинокий страж в тумане -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Одинокий страж в&nbsp;тумане</h2>
      <p class="modalBlock__description">
         На&nbsp;крошечной скале Сивучья, где сталкиваются яростные течения Охотского моря и&nbsp;вечные туманы, стоит одинокий страж&nbsp;&mdash; маяк Анива. Этот 31-метровый исполин почти век спасал корабли от&nbsp;коварных подводных скал.
      </p>
      <p class="modalBlock__description">
         Добраться сюда можно только морем. Подплывая к&nbsp;скале, вы&nbsp;увидите, как призрачный силуэт маяка постепенно проявляется сквозь туман, словно из&nbsp;ниоткуда. Это одно из&nbsp;самых труднодоступных и&nbsp;мистических мест Сахалина.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_aniva/mayak_aniva_1.jpg" alt="Маяк Анива в тумане на скале Сивучья" loading="lazy">
   </div>
</div>
<!-- Блок 2: Инженерный подвиг Миуры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Инженерный подвиг Миуры</h2>
      <p class="modalBlock__description">
         В&nbsp;1939&nbsp;году, когда Южный Сахалин принадлежал Японии, инженер Синобу Миура совершил невозможное. Его команда построила девятиэтажную бетонную крепость на&nbsp;скале Сивучья&nbsp;&mdash; участке суши размером с&nbsp;футбольное поле.
      </p>
      <p class="modalBlock__description">
         Все материалы месяцами доставляли на&nbsp;специальном судне &laquo;Рошу-мару&raquo; через коварные течения и&nbsp;вечные туманы. Уменьшенную копию этого инженерного чуда преподнесли японскому императору как символ человеческого гения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_aniva/mayak_aniva_2.jpg" alt="Исторические фото строительства маяка" loading="lazy">
   </div>
</div>
<!-- Блок 3: Жизнь и работа на краю света -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Жизнь и&nbsp;работа на&nbsp;краю света</h2>
      <p class="modalBlock__description">
         12&nbsp;смотрителей поочередно несли вахту, обитая в&nbsp;тесных каморках. Каждые три часа они заводили уникальный часовой механизм с&nbsp;270-килограммовой гирей, которая приводила в&nbsp;движение линзу весом 600&nbsp;кг.
      </p>
      <p class="modalBlock__description">
         Свет маяка, спасительный луч в&nbsp;кромешной тьме штормовых ночей, был виден за&nbsp;35&nbsp;км. На&nbsp;седьмом этаже ревела пневматическая сирена, предупреждая корабли в&nbsp;тумане. На&nbsp;самом верху, в&nbsp;медном куполе, мерцал тот самый свет, ставший легендой.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_aniva/mayak_aniva_3.jpg" alt="Интерьер маяка и механизмы" loading="lazy">
   </div>
</div>
<!-- Блок 4: Заброшенный, но величественный -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заброшенный, но&nbsp;величественный</h2>
      <p class="modalBlock__description">
         Советские маячники сменили японских, переведя сооружение на&nbsp;дизельные генераторы. В&nbsp;1990-х здесь установили ядерные батареи, позволившие автоматизировать работу, но&nbsp;в&nbsp;2006 году демонтировали и&nbsp;их.
      </p>
      <p class="modalBlock__description">
         Сегодня заброшенный маяк выглядит еще более внушительно и&nbsp;мистически на&nbsp;фоне суровых охотоморских пейзажей. Его силуэт стал символом человеческого упорства и&nbsp;быстротечности времени.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_aniva/mayak_aniva_4.jpg" alt="Заброшенный маяк в наши дни" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до маяка Анива -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;маяка Анива</h2>
      <p class="modalBlock__description">
         <strong>Единственный способ:</strong> добраться до&nbsp;маяка можно только морем&nbsp;&mdash; 1,5 часа пути от&nbsp;поселка Новиково на&nbsp;моторной лодке или катере. Маршрут зависит от&nbsp;погодных условий.
      </p>
      <p class="modalBlock__description">
         <strong>Важно знать:</strong> высадка на&nbsp;скалу Сивучья сложна и&nbsp;опасна из-за сильных течений и&nbsp;отсутствия причала. Большинство экскурсий предполагает осмотр маяка с&nbsp;воды.
      </p>
      <p class="modalBlock__description">
         Технические характеристики и&nbsp;аэрофотосъемку маяка можно изучить на&nbsp;GIS-портале &laquo;Россия&nbsp;&mdash; от&nbsp;моря до&nbsp;моря&raquo;. Для посещения рекомендуется выбирать опытных местных гидов, хорошо знающих эти воды.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_aniva/kak_dobratsya.jpg" alt="Путь к маяку от поселка Новиково на катере" loading="lazy">
   </div>
</div>`
        },

//-----------------------------------------Остров Монерон------------------------------------------------
        {
            id: 'ostrov_moneron',
            title: 'Остров Монерон',
            image: '../../img/sahalin/cards_tochki/ostrov_moneron_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Остров Монерон</h1>
</div>
<!-- Блок 1: Первый морской парк России -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Первый морской парк России</h2>
      <p class="modalBlock__description">
         Изумрудные водопады, скалистые ущелья и&nbsp;прозрачное как хрусталь море&nbsp;&mdash; добро пожаловать на&nbsp;Монерон, первый в&nbsp;стране морской природный парк.
      </p>
      <p class="modalBlock__description">
         Это не&nbsp;просто остров, а&nbsp;целый мир, где вулканические пейзажи соседствуют с&nbsp;альпийскими лугами, а&nbsp;под водой скрывается настоящее тропическое царство. Попав сюда, трудно поверить, что это российский Дальний Восток.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_moneron/ostrov_moneron_1.jpg" alt="Панорама острова Монерон с ущельями и морем" loading="lazy">
   </div>
</div>
<!-- Блок 2: Подводный тропический сад -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Подводный тропический сад</h2>
      <p class="modalBlock__description">
         Это место&nbsp;&mdash; прежде всего главная точка притяжения дайверов со&nbsp;всего мира. Подводный мир острова&nbsp;&mdash; настоящий тропический сад, где можно поплавать с&nbsp;рыбками и&nbsp;сивучами среди гротов.
      </p>
      <p class="modalBlock__description">
         Благодаря теплому Цусимскому течению, омывающему остров, вода летом прогревается до&nbsp;+20&nbsp;&deg;C, а&nbsp;видимость достигает 40&nbsp;м. Дайверы сравнивают эти места с&nbsp;Коста-Рикой: те&nbsp;же коралловые заросли и&nbsp;стаи ярких рыб.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_moneron/ostrov_moneron_2.jpg" alt="Подводный мир острова Монерон" loading="lazy">
   </div>
</div>
<!-- Блок 3: Уникальные обитатели -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальные обитатели</h2>
      <p class="modalBlock__description">
         На&nbsp;острове можно встретить гигантских бирюзовых бабочек&nbsp;&mdash; парусников Маака, а&nbsp;на&nbsp;камнях греются нерпы и&nbsp;сивучи. Под водой обитают галиотисы (морские ушки), осьминоги, трепанги и&nbsp;морские звезды причудливых форм.
      </p>
      <p class="modalBlock__description">
         В&nbsp;бухте Кологераса на&nbsp;севере острова можно поплавать с&nbsp;десятками тюленей и&nbsp;сивучей. Они быстро привыкают к&nbsp;людям: сначала осторожно кружат вокруг, но&nbsp;на&nbsp;второй день уже играют с&nbsp;ластами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_moneron/ostrov_moneron_3.jpg" alt="Морские ушки, тюлени и бабочки Монерона" loading="lazy">
   </div>
</div>
<!-- Блок 4: Приключения на краю света -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Приключения на&nbsp;краю света</h2>
      <p class="modalBlock__description">
         Здесь вам предложат не&nbsp;стандартные туры, а&nbsp;настоящие приключения: погружение к&nbsp;морским ушкам, рыбалку на&nbsp;тунца и&nbsp;прогулки по&nbsp;местам, куда редко ступает нога человека.
      </p>
      <p class="modalBlock__description">
         На&nbsp;острове есть база с&nbsp;уютными домиками у&nbsp;самой воды, где засыпаешь под шепот волн. Вместо привычной тайги&nbsp;&mdash; покрытые растительностью скалы, птичьи базары и&nbsp;каменные гроты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_moneron/ostrov_moneron_4.jpg" alt="Проживание в домиках и приключенческие туры" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до острова Монерон -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;острова Монерон</h2>
      <p class="modalBlock__description">
         <strong>Морем:</strong> добраться до&nbsp;острова можно только по&nbsp;воде, в&nbsp;ходе круизов или на&nbsp;катере из&nbsp;Невельска. Время в&nbsp;пути&nbsp;&mdash; около трех часов, зависит от&nbsp;погодных условий.
      </p>
      <p class="modalBlock__description">
         <strong>Организация посещения:</strong> остров является морским природным парком. Для его посещения необходимо разрешение&nbsp;и, как правило, организация тура через специализированные компании.
      </p>
      <p class="modalBlock__description">
         <strong>Адрес дирекции парка:</strong> Южно-Сахалинск, просп. Мира, 172. Рекомендуется заранее уточнять условия посещения, правила нахождения на&nbsp;территории и&nbsp;варианты туров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_moneron/kak_dobratsya.jpg" alt="Путь к острову на катере и карта расположения" loading="lazy">
   </div>
</div>`
        },

//-----------------------------------------Лежбища сивучей------------------------------------------------
        {
            id: 'sivuchi_nevelsk',
            title: 'Сивучи в Невельске',
            image: '../../img/sahalin/cards_tochki/sevuchi_v_nevelske_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Лежбища сивучей в&nbsp;Невельске</h1>
</div>
<!-- Блок 1: Город морских львов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Город морских львов</h2>
      <p class="modalBlock__description">
         Тюленей на&nbsp;Сахалине можно увидеть и&nbsp;в&nbsp;черте города. Одно из&nbsp;их&nbsp;излюбленных мест&nbsp;&mdash; длинный волнорез в&nbsp;морской гавани Невельска.
      </p>
      <p class="modalBlock__description">
         Невельск гордится своими необычными соседями&nbsp;&mdash; их&nbsp;изображения украшает герб города, а&nbsp;парочка бронзовых сивучей встречает гостей на&nbsp;городской набережной.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sivuchi_nevelsk/sevuchi_v_nevelske_1.jpg" alt="Сивучи на волнорезе в Невельске" loading="lazy">
   </div>
</div>
<!-- Блок 2: История необычного союза -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История необычного союза</h2>
      <p class="modalBlock__description">
         История этого союза началась в&nbsp;1960-х, когда сивучи впервые оценили удобство бетонных плит. Даже землетрясение 2007&nbsp;года, изменившее рельеф дна, не&nbsp;отпугнуло животных.
      </p>
      <p class="modalBlock__description">
         Сивучи научились запрыгивать на&nbsp;возвысившийся волнолом с&nbsp;разбега, используя силу волн. Каждую весну сюда приплывают около 300 морских львов, делая Невельск уникальным местом для наблюдения за&nbsp;этими краснокнижными животными.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sivuchi_nevelsk/sevuchi_v_nevelske_2.jpg" alt="Сивучи прыгают на волнорез" loading="lazy">
   </div>
</div>
<!-- Блок 3: Инфраструктура для наблюдения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Инфраструктура для наблюдения</h2>
      <p class="modalBlock__description">
         Для защиты краснокнижных морских обитателей здесь построили специальную стену, а&nbsp;в&nbsp;2018 году на&nbsp;берегу открыли смотровую площадку с&nbsp;бесплатными биноклями.
      </p>
      <p class="modalBlock__description">
         Самые яркие впечатления ждут тех, кто отправится на&nbsp;морскую экскурсию, ведь с&nbsp;воды сивучи выглядят особенно впечатляюще. Можно арендовать лодку и&nbsp;подплыть достаточно близко, чтобы рассмотреть этих величественных животных.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sivuchi_nevelsk/sevuchi_v_nevelske_3.jpg" alt="Смотровая площадка и экскурсии на лодках" loading="lazy">
   </div>
</div>
<!-- Блок 4: День сивуча -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">День сивуча</h2>
      <p class="modalBlock__description">
         В&nbsp;конце июля Невельск превращается в&nbsp;столицу поклонников тюленей&nbsp;&mdash; на&nbsp;День сивуча сюда съезжаются туристы со&nbsp;всего Сахалина.
      </p>
      <p class="modalBlock__description">
         Ярмарки, мастер-классы и&nbsp;детские спектакли создают праздничную атмосферу, а&nbsp;волонтеры традиционно проводят уборку территории. Город, названный в&nbsp;честь адмирала Геннадия Невельского, на&nbsp;один день полностью посвящает себя своим морским обитателям.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sivuchi_nevelsk/sevuchi_v_nevelske_4.jpg" alt="Праздник День сивуча в Невельске" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Невельска -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Невельска</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> город находится в&nbsp;80&nbsp;км от&nbsp;Южно-Сахалинска, время в&nbsp;пути&nbsp;&mdash; около полутора часов по&nbsp;хорошей дороге.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> на&nbsp;автобусе &#8470;&nbsp;518 от&nbsp;Южно-Сахалинска. Время в&nbsp;пути&nbsp;&mdash; около двух часов. Расписание лучше уточнять заранее.
      </p>
      <p class="modalBlock__description">
         <strong>Лучшее время для посещения:</strong> весна и&nbsp;лето, когда сивучи массово находятся на&nbsp;лежбище. Лежбище расположено прямо в&nbsp;городской черте, в&nbsp;морской гавани, и&nbsp;доступно для свободного посещения.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sivuchi_nevelsk/kak_dobratsya.jpg" alt="Дорога из Южно-Сахалинска в Невельск" loading="lazy">
   </div>
</div>`
        },

//-----------------------------------------Белые скалы Итурупа------------------------------------------------
        {
            id: 'belye_scaly_iturupa',
            title: 'Белые скалы Итурупа',
            image: '../../img/sahalin/cards_tochki/belye_skaly_iturupa_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Белые скалы Итурупа</h1>
</div>
<!-- Блок 1: Вулканическое кружево -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Вулканическое кружево</h2>
      <p class="modalBlock__description">
         На&nbsp;восточном побережье Итурупа раскинулся один из&nbsp;самых необычных ландшафтов Курил&nbsp;&mdash; 28&nbsp;км ослепительно белых скал, похожих на&nbsp;застывшее вулканическое кружево.
      </p>
      <p class="modalBlock__description">
         Удивительный рельеф сформировался примерно 20&nbsp;тыс. лет назад, когда подводное извержение превратило расплавленную магму в&nbsp;легкую пемзу. Эти призрачные скалы больше похожи на&nbsp;застывшую пену, чем на&nbsp;камень.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/belie_scaly_iturupa/belye_skaly_iturupa_1.jpg" alt="Панорама Белых скал Итурупа" loading="lazy">
   </div>
</div>
<!-- Блок 2: Сотворение ветром и водой -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сотворение ветром и&nbsp;водой</h2>
      <p class="modalBlock__description">
         Легкая пемза и&nbsp;вулканическое стекло, из&nbsp;которых они состоят, настолько мягкие, что крошатся в&nbsp;руках. Ветер и&nbsp;штормы за&nbsp;тысячелетия вырезали в&nbsp;них фантастические каньоны и&nbsp;башни, вздымающиеся на&nbsp;120&nbsp;м над морем.
      </p>
      <p class="modalBlock__description">
         По&nbsp;склонам струятся ручьи, вырезая причудливые узоры, а&nbsp;у&nbsp;подножия темнеет вулканический песок, подчеркивая белизну пемзы. Каждый сезон приносит сюда новые изменения&nbsp;&mdash; ветер продолжает свою кропотливую работу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/belie_scaly_iturupa/belye_skaly_iturupa_2.jpg" alt="Детали скал, вырезанные ветром и водой" loading="lazy">
   </div>
</div>
<!-- Блок 3: Трехцветная гармония -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Трехцветная гармония</h2>
      <p class="modalBlock__description">
         Сверху скалы украшены изумрудным ковром травы, создавая удивительный трехцветный контраст белого, черного и&nbsp;зеленого. Это место, где особенно остро чувствуешь мощь природных стихий и&nbsp;уязвимость созданных ими красот.
      </p>
      <p class="modalBlock__description">
         Белые скалы превратились в&nbsp;вечно меняющееся произведение искусства. Здесь царит особая атмосфера первозданной природы и&nbsp;безмятежности, нарушаемая только криком чаек и&nbsp;шумом прибоя.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/belie_scaly_iturupa/belye_skaly_iturupa_3.jpg" alt="Контраст белых скал, черного песка и зеленой травы" loading="lazy">
   </div>
</div>
<!-- Блок 4: Обитатели хрупкого мира -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Обитатели хрупкого мира</h2>
      <p class="modalBlock__description">
         Хотя медвежьи следы на&nbsp;песке напоминают, что вы&nbsp;в&nbsp;гостях у&nbsp;дикой природы, сами косолапые хозяева предпочитают держаться в&nbsp;глубине скал. Главные жители здесь&nbsp;&mdash; ветер и&nbsp;волны, неустанно перекраивающие этот хрупкий пейзаж.
      </p>
      <p class="modalBlock__description">
         В&nbsp;этих местах можно встретить морских птиц, которые устраивают гнезда на&nbsp;труднодоступных уступах. А&nbsp;в&nbsp;прибрежных водах иногда появляются тюлени, дополняя картину дикой курильской природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/belie_scaly_iturupa/belye_skaly_iturupa_4.jpg" alt="Медвежий след на песке и птицы на скалах" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Белых скал -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Белых скал</h2>
      <p class="modalBlock__description">
         <strong>Местонахождение:</strong> восточное побережье острова Итуруп, Курильские острова.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> из&nbsp;Курильска до&nbsp;Белых скал ехать по&nbsp;берегу вдоль моря. Время в&nbsp;пути&nbsp;&mdash; около часа. Отправляться лучше на&nbsp;подготовленном внедорожнике, готовом к&nbsp;прохождению нескольких рек вброд.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> посещение Итурупа требует специального пропуска, так как остров является пограничной зоной. Дороги к&nbsp;скалам могут быть труднопроходимыми после дождей. Рекомендуется посещать с&nbsp;местным гидом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/belie_scaly_iturupa/kak_dobratsya.jpg" alt="Дорога к Белым скалам по побережью Итурупа" loading="lazy">
   </div>
</div>`

        },

//-----------------------------------------Вулкан Креницына------------------------------------------------

        {
            id: 'vulkan_krenitcina',
            title: 'Вулкан Креницына',
            image: '../../img/sahalin/cards_tochki/vulkan_krenicina_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Вулкан Пик Креницына</h1>
</div>
<!-- Блок 1: Классический вулкан в вулкане -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Классический вулкан в&nbsp;вулкане</h2>
      <p class="modalBlock__description">
         Классический вулкан в&nbsp;вулкане: молодой конус практически идеальной формы возвышается из&nbsp;котловины озера более древнего вулкана.
      </p>
      <p class="modalBlock__description">
         Вулкан Креницына&nbsp;&mdash; настоящее чудо природы. Он&nbsp;был назван в&nbsp;честь Петра Креницына, мореплавателя и&nbsp;морского офицера, исследователя Камчатки и&nbsp;Алеутских островов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/vulkan_krinitsyna/vulkan_krenicina_1.jpg" alt="Вулкан Пик Креницына в кальдере озера" loading="lazy">
   </div>
</div>
<!-- Блок 2: Озеро в кальдере, конус в озере -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Озеро в&nbsp;кальдере, конус в&nbsp;озере</h2>
      <p class="modalBlock__description">
         Молодой стратовулкан (высота пика&nbsp;&mdash; 1324&nbsp;м над уровнем моря и&nbsp;900&nbsp;м над уровнем озера) вырос внутри кальдеры древнего разрушенного вулкана Тао-Русыр.
      </p>
      <p class="modalBlock__description">
         В&nbsp;ясную погоду его склоны, покрытые альпийскими лугами и&nbsp;снежниками, отражаются в&nbsp;зеркальной глади Кольцевого озера диаметром 7&nbsp;км. Это самое глубокое озеро Курил (369&nbsp;м) и&nbsp;входит в&nbsp;пятерку глубочайших озер России.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/vulkan_krinitsyna/vulkan_krenicina_2.jpg" alt="Кольцевое озеро и отражение вулкана" loading="lazy">
   </div>
</div>
<!-- Блок 3: Геологическое совершенство -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Геологическое совершенство</h2>
      <p class="modalBlock__description">
         Молодой конус (3,5&ndash;4&nbsp;км в&nbsp;основании), сложенный андезитами, поднимается из&nbsp;воды как остров в&nbsp;озере. Его окружают зубчатые стены древней кальдеры высотой до&nbsp;920&nbsp;м, создавая эффект природного амфитеатра.
      </p>
      <p class="modalBlock__description">
         Склоны обоих вулканов одеты в&nbsp;пушистый покров кедрового стланика, придающий пейзажу удивительную мягкость. Кристально чистая вода озера круглый год остается ледяной (+3&ndash;8 &deg;C).
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/vulkan_krinitsyna/vulkan_krenicina_3.jpg" alt="Геологическая структура кальдеры и конуса" loading="lazy">
   </div>
</div>
<!-- Блок 4: Спящий исполин -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Спящий исполин</h2>
      <p class="modalBlock__description">
         После единственного зафиксированного извержения 1952 года вулкан перешел в&nbsp;стадию фумарольной активности. Сегодня о&nbsp;его неукротимой природе напоминают лишь теплые испарения у&nbsp;кратера.
      </p>
      <p class="modalBlock__description">
         Однако ученые внимательно следят за&nbsp;этим исполином&nbsp;&mdash; его пробуждение способно изменить климат всего региона. Названный в&nbsp;1805 году Иваном Крузенштерном, этот вулкан стал символом гармонии разрушительных и&nbsp;созидательных сил природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/vulkan_krinitsyna/vulkan_krenicina_4.jpg" alt="Вид на кратер и фумарольную активность" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до вулкана Креницына -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;вулкана Креницына</h2>
      <p class="modalBlock__description">
         <strong>По&nbsp;воздуху:</strong> на&nbsp;вертолете с&nbsp;соседних островов (Парамушир, Шумшу) или Камчатки. Это самый быстрый, но&nbsp;и&nbsp;самый дорогой способ.
      </p>
      <p class="modalBlock__description">
         <strong>Морем:</strong> в&nbsp;ходе круиза по&nbsp;Курилам, с&nbsp;остановкой на&nbsp;острове Онекотан, где расположен вулкан. Круизы обычно стартуют с&nbsp;Камчатки или Сахалина.
      </p>
      <p class="modalBlock__description">
         Посещение острова Онекотан, как и&nbsp;других Курильских островов, требует специального пропуска, так как это пограничная зона. Организовать поездку проще всего через туроператоров, специализирующихся на&nbsp;Курилах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/vulkan_krinitsyna/kak_dobratsya.jpg" alt="Карта расположения вулкана на о. Онекотан" loading="lazy">
   </div>
</div>`
        },

//-----------------------------------------Мыс Великан------------------------------------------------
        {
            id: 'mys_velikan',
            title: 'Мыс Великан',
            image: '../../img/sahalin/cards_tochki/mys_velikan_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Мыс Великан</h1>
</div>
<!-- Блок 1: Каменные стражи Сахалина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Каменные стражи Сахалина</h2>
      <p class="modalBlock__description">
         Представьте место, где тайга встречается с&nbsp;суровым Охотским морем, а&nbsp;ветер и&nbsp;волны за&nbsp;тысячи лет вырезали из&nbsp;камня фантастические фигуры: арки, гроты, башни. Это мыс Великан, одно из&nbsp;самых живописных побережий Сахалина.
      </p>
      <p class="modalBlock__description">
         Это место словно из&nbsp;сказки: каменные исполины, выточенные стихией, стоят как древние стражи. Некоторые напоминают застывших великанов, другие&nbsp;&mdash; мосты в&nbsp;никуда.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_velikan/mys_velikan_1.jpg" alt="Каменные арки и столбы мыса Великан" loading="lazy">
   </div>
</div>
<!-- Блок 2: Охраняемая природная жемчужина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Охраняемая природная жемчужина</h2>
      <p class="modalBlock__description">
         С&nbsp;1990 года мыс Великан&nbsp;&mdash; памятник природы, охраняющий хрупкую экосистему: редкие растения, птичьи колонии, лежбища тюленей.
      </p>
      <p class="modalBlock__description">
         Здесь нельзя охотиться, рубить деревья или разводить костры, но&nbsp;разрешено собирать грибы и&nbsp;ягоды. А&nbsp;если повезет, с&nbsp;июля по&nbsp;август можно увидеть, как лосось идет на&nbsp;нерест&nbsp;&mdash; завораживающее зрелище.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_velikan/mys_velikan_2.jpg" alt="Лежбище тюленей и птичьи колонии на мысе" loading="lazy">
   </div>
</div>
<!-- Блок 3: Панорама дикой красоты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Панорама дикой красоты</h2>
      <p class="modalBlock__description">
         Если подняться на&nbsp;сам мыс, откроется панорама, от&nbsp;которой захватывает дух: бескрайнее море, скалистые бухты, зеленые холмы. На&nbsp;этих скалах гнездятся птицы, а&nbsp;в&nbsp;прибрежных водах плавают нерпы.
      </p>
      <p class="modalBlock__description">
         Летом сахалинцы приезжают сюда загорать и&nbsp;нежиться на&nbsp;теплом песке, любоваться прозрачной лазурной водой. Это Сахалин в&nbsp;его самом диком и&nbsp;прекрасном воплощении.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_velikan/mys_velikan_3.jpg" alt="Панорамный вид с мыса Великан" loading="lazy">
   </div>
</div>
<!-- Блок 4: Отдых на краю земли -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Отдых на&nbsp;краю земли</h2>
      <p class="modalBlock__description">
         Купаться можно, но&nbsp;осторожно, так как у&nbsp;берега полно морских ежей, особенно во&nbsp;время отлива. Мыс Великан&nbsp;&mdash; место, где природа демонстрирует свою мощь и&nbsp;фантазию.
      </p>
      <p class="modalBlock__description">
         Стоит увидеть его хотя&nbsp;бы раз, чтобы влюбиться навсегда. Здесь можно провести целый день, исследуя бухты, фотографируя причудливые скалы и&nbsp;наблюдая за&nbsp;морской жизнью.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_velikan/mys_velikan_4.jpg" alt="Пляж и отдых на мысе Великан" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до мыса Великан -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;мыса Великан</h2>
      <p class="modalBlock__description">
         <strong>Местоположение:</strong> мыс Великан находится на&nbsp;побережье Охотского моря, в&nbsp;Корсаковском районе, в&nbsp;90&nbsp;км от&nbsp;Южно-Сахалинска.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> через деревню Охотское, вдоль побережья залива Мордвинова. Дорога частично грунтовая, требуется автомобиль с&nbsp;хорошей проходимостью, особенно после дождей.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> поездку лучше планировать на&nbsp;летние месяцы, когда погода наиболее стабильна. Берите с&nbsp;собой запас воды, еды и&nbsp;будьте готовы к&nbsp;отсутствию связи и&nbsp;инфраструктуры на&nbsp;месте.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_velikan/kak_dobratsya.jpg" alt="Дорога к мысу Великан по побережью" loading="lazy">
   </div>
</div>`
        }

    ],





//--------------------------------------------- Выбраться на природу------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
    nature: [
        {
            id: 'plato_yankito',
            title: 'Плато Янкито',
            image: '../../img/sahalin/cards_nature/plato_yankito_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Плато Янкито</h1>
</div>
<!-- Блок 1: Инопланетный пейзаж Итурупа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Инопланетный пейзаж Итурупа</h2>
      <p class="modalBlock__description">
         Всего в&nbsp;6&nbsp;км от&nbsp;Курильска раскинулось одно из&nbsp;самых впечатляющих зрелищ Итурупа&nbsp;&mdash; плато Янкито. Огромное пространство застывшей лавы, где буро-коричневые скалы причудливых форм встречаются с&nbsp;водами Охотского моря.
      </p>
      <p class="modalBlock__description">
         Слово &laquo;Янкито&raquo; окутано тайной&nbsp;&mdash; оно существует со&nbsp;времен древней японской культуры Дзёмон. Это пейзаж инопланетной красоты, созданный силами древнего вулкана.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/plato_yankito/plato_yankito_1.jpg" alt="Панорама плато Янкито с лавовыми полями" loading="lazy">
   </div>
</div>
<!-- Блок 2: Лава, застывшая в движении -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Лава, застывшая в&nbsp;движении</h2>
      <p class="modalBlock__description">
         Тысячи лет назад вулкан Богдан Хмельницкий извергал потоки раскаленной магмы, которая, стекая к&nbsp;океану, застывала в&nbsp;фантастических формах. Сегодня эти лавовые гребни, уменьшающиеся к&nbsp;берегу, напоминают о&nbsp;бурном прошлом.
      </p>
      <p class="modalBlock__description">
         В&nbsp;некоторых расщелинах уже пробивается жизнь&nbsp;&mdash; тонкие травинки и&nbsp;даже цветы контрастируют с&nbsp;суровым каменным пейзажем, символизируя вечное противостояние и&nbsp;единство стихий.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/plato_yankito/plato_yankito_2.jpg" alt="Причудливые формы застывшей лавы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сила океана и огненный закат -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сила океана и&nbsp;огненный закат</h2>
      <p class="modalBlock__description">
         В&nbsp;тихую погоду здесь можно спуститься к&nbsp;воде и&nbsp;искупаться, а&nbsp;во&nbsp;время шторма&nbsp;&mdash; наблюдать, как волны с&nbsp;грохотом разбиваются о&nbsp;скалы, вздымая белую пену на&nbsp;фоне темной лавы.
      </p>
      <p class="modalBlock__description">
         Но&nbsp;самое волшебное зрелище ждет гостей на&nbsp;закате: низкое солнце окрашивает плато в&nbsp;огненные тона, и&nbsp;кажется, будто лава снова становится живой. Это незабываемое зрелище для фотографов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/plato_yankito/plato_yankito_3.jpg" alt="Закат над плато Янкито и шторм у берега" loading="lazy">
   </div>
</div>
<!-- Блок 4: Обитатели каменного царства -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Обитатели каменного царства</h2>
      <p class="modalBlock__description">
         Янкито&nbsp;&mdash; идеальное место для съемки. Среди скал бродят лисы, а&nbsp;на&nbsp;горизонте возвышается дремлющий вулкан Богдан Хмельницкий, напоминая о&nbsp;том, что природа здесь все еще полна сил.
      </p>
      <p class="modalBlock__description">
         Этот уникальный уголок Итурупа&nbsp;&mdash; не&nbsp;просто достопримечательность, а&nbsp;настоящий портал в&nbsp;прошлое, где время остановилось, сохранив мощь и&nbsp;красоту вулканических сил.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/plato_yankito/plato_yankito_4.jpg" alt="Лисы на плато и вид на вулкан Богдан Хмельницкий" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до плато Янкито -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;плато Янкито</h2>
      <p class="modalBlock__description">
         <strong>Местоположение:</strong> плато находится всего в&nbsp;6&nbsp;км от&nbsp;города Курильска на&nbsp;острове Итуруп.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> доехать до&nbsp;него можно по&nbsp;грунтовой дороге. Время в&nbsp;пути&nbsp;&mdash; 30&ndash;40&nbsp;минут. Подойдет автомобиль с&nbsp;невысоким клиренсом, но&nbsp;после дождей дорога может стать труднопроходимой.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> посещение острова Итуруп, как части Курильских островов, требует оформления специального пропуска (пограничная зона). Организовать поездку проще через местных гидов или туроператоров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/plato_yankito/kak_dobratsya.jpg" alt="Дорога от Курильска к плато Янкито" loading="lazy">
   </div>
</div>`
        },

//---------------------------------------------Гора Лопатина------------------------------------------------
        {
            id: 'gora_lopatina',
            title: 'Гора Лопатина',
            image: '../../img/sahalin/cards_nature/gora_lopatina_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Гора Лопатина</h1>
</div>
<!-- Блок 1: Крыша Сахалина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Крыша Сахалина</h2>
      <p class="modalBlock__description">
         На&nbsp;стыке трех хребтов Восточно-Сахалинских гор возвышается исполин острова&nbsp;&mdash; гора Лопатина. Ее&nbsp;вершина, взметнувшаяся на&nbsp;1609&nbsp;м, по&nbsp;праву носит негласный титул &laquo;крыши Сахалина&raquo;&nbsp;&mdash; самой высокой точки острова.
      </p>
      <p class="modalBlock__description">
         Здесь чувствуешь себя настоящим первооткрывателем. Под ногами&nbsp;&mdash; каменная летопись, где слои кварцитов и&nbsp;сланцев хранят память о&nbsp;временах, когда тут бушевал древний океан.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gora_lopatina/gora_lopatina_1.jpg" alt="Вершина горы Лопатина — крыша Сахалина" loading="lazy">
   </div>
</div>
<!-- Блок 2: Путешествие по климатическим поясам -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Путешествие по&nbsp;климатическим поясам</h2>
      <p class="modalBlock__description">
         Гора, названная в&nbsp;честь исследователя Иннокентия Лопатина, расположена практически по&nbsp;центру острова. Поднимаясь по&nbsp;склонам, словно путешествуешь по&nbsp;климатическим поясам.
      </p>
      <p class="modalBlock__description">
         У&nbsp;подножия&nbsp;&mdash; густые заросли кедрового стланика и&nbsp;каменные березы. Выше их&nbsp;сменяют альпийские луга с&nbsp;брусникой и&nbsp;багульником. А&nbsp;у&nbsp;самой вершины царят лишь лишайники да&nbsp;легендарные &laquo;цветы троллей&raquo;&nbsp;&mdash; купальницы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gora_lopatina/gora_lopatina_2.jpg" alt="Разные высотные пояса на склонах горы" loading="lazy">
   </div>
</div>
<!-- Блок 3: Следы истории и легенды -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Следы истории и&nbsp;легенды</h2>
      <p class="modalBlock__description">
         В&nbsp;прошлом через эти склоны пролегал санный путь нивхов. Сегодня о&nbsp;былых временах напоминает полуразрушенная метеостанция, олимпийский бюст Ленина и&nbsp;остатки горнолыжного лагеря.
      </p>
      <p class="modalBlock__description">
         На&nbsp;юго-восточном склоне прячется чистейшее озеро&nbsp;&mdash; говорят, на&nbsp;его дне до&nbsp;сих пор лежит золотой самородок, потерянный нивхскими охотниками. Эти места полны историй и&nbsp;загадок.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gora_lopatina/gora_lopatina_3.jpg" alt="Старая метеостанция и горное озеро" loading="lazy">
   </div>
</div>
<!-- Блок 4: Восхождение и награда -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Восхождение и&nbsp;награда</h2>
      <p class="modalBlock__description">
         К&nbsp;&laquo;крыше Сахалина&raquo; ведут несколько маршрутов, которые подойдут как опытным походникам, так и&nbsp;новичкам. Лучшее время для восхождения&nbsp;&mdash; август, когда реки мелеют, а&nbsp;погода наиболее стабильна.
      </p>
      <p class="modalBlock__description">
         В&nbsp;пути вас ждут бурные переправы, медвежьи тропы и&nbsp;внезапные туманы. У&nbsp;подножия можно отдохнуть на&nbsp;оборудованной стоянке. С&nbsp;вершины открывается панорама, ради которой стоит пройти все испытания.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gora_lopatina/gora_lopatina_4.jpg" alt="Туристы на восхождении и вид с вершины" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и совершить восхождение -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться и&nbsp;совершить восхождение</h2>
      <p class="modalBlock__description">
         <strong>Начало маршрута:</strong> восхождение удобнее совершать со&nbsp;стороны села Молодежное. До&nbsp;него можно добраться по&nbsp;железной дороге или автобусом из&nbsp;Поронайска.
      </p>
      <p class="modalBlock__description">
         <strong>Подготовка:</strong> маршрут требует хорошей физической подготовки и&nbsp;снаряжения для многодневного похода (палатка, спальник, запас еды). Обязательно наличие опытного гида, знающего местность и&nbsp;медвежьи повадки.
      </p>
      <p class="modalBlock__description">
         <strong>Рекомендации:</strong> у&nbsp;подножия есть оборудованная стоянка с&nbsp;запасом дров и&nbsp;чистой водой. Перед походом необходимо зарегистрироваться в&nbsp;МЧС и&nbsp;сообщить о&nbsp;своем маршруте.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gora_lopatina/gora_lopatina_5.jpg" alt="Карта маршрута восхождения и село Молодежное" loading="lazy">
   </div>
</div>`
        },

 //---------------------------------------------Остров Тюлений------------------------------------------------

        {
            id: 'ostrov_tuleni',
            title: 'Остров Тюлений',
            image: '../../img/sahalin/cards_nature/ostrov_tuleniy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Остров Тюлений</h1>
</div>
<!-- Блок 1: Скала, где живут тюлени -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Скала, где живут тюлени</h2>
      <p class="modalBlock__description">
         18-метровая скала с&nbsp;плоской вершиной, окруженная песками и&nbsp;отмелями, когда-то была частью полуострова Терпения, но&nbsp;море прорубило себе путь, создав миниатюрный природный заповедник.
      </p>
      <p class="modalBlock__description">
         Название острова максимально точно передает его особенность: на&nbsp;крошечном клочке земли обитают тысячи морских котиков и&nbsp;ларг. Это место с&nbsp;максимальной плотностью &laquo;населения&raquo; на&nbsp;Дальнем Востоке.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_tulenii/ostrov_tuleniy_1.jpg" alt="Скалистый остров Тюлений с тюленями" loading="lazy">
   </div>
</div>
<!-- Блок 2: История и география -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История и&nbsp;география</h2>
      <p class="modalBlock__description">
         У&nbsp;юго-восточного побережья Сахалина, в&nbsp;нескольких километрах от&nbsp;мыса Терпения, в&nbsp;безбрежных водах Охотского моря поднимается скалистый остров-крепость. Он&nbsp;всего 636&nbsp;м в&nbsp;длину и&nbsp;не&nbsp;больше 90&nbsp;м в&nbsp;ширину.
      </p>
      <p class="modalBlock__description">
         Айны называли это место Атоямосири (&laquo;остров ловли рыбы сетями&raquo;). Нынешнее название закрепили в&nbsp;1805 году русские мореплаватели под руководством Ивана Крузенштерна.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_tulenii/ostrov_tuleniy_2.jpg" alt="Карта расположения и исторические сведения" loading="lazy">
   </div>
</div>
<!-- Блок 3: Гигантский родильный дом тюленей -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Гигантский родильный дом тюленей</h2>
      <p class="modalBlock__description">
         С&nbsp;июня по&nbsp;август тысячи морских котиков, сивучей и&nbsp;грациозных морских львов заполняют каждый свободный метр берега острова, и&nbsp;он&nbsp;превращается в&nbsp;гигантский родильный дом.
      </p>
      <p class="modalBlock__description">
         На&nbsp;побережье можно любоваться как взрослыми особями, так и&nbsp;многочисленными любопытными детенышами. Это уникальная возможность увидеть жизнь морских млекопитающих в&nbsp;их&nbsp;естественной среде.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_tulenii/ostrov_tuleniy_3.jpg" alt="Лежбище тюленей с детенышами" loading="lazy">
   </div>
</div>
<!-- Блок 4: Птичий мегаполис -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Птичий мегаполис</h2>
      <p class="modalBlock__description">
         Скалы Тюленьего&nbsp;&mdash; настоящий мегаполис пернатых. На&nbsp;одном квадратном метре уживаются до&nbsp;20&nbsp;гнезд кайр! Топорки, тупики-носороги, моевки и&nbsp;белобрюшки создают оглушительный хор.
      </p>
      <p class="modalBlock__description">
         Всего здесь отмечено 143 вида птиц, причем некоторые встречаются исключительно на&nbsp;этих скалах. В&nbsp;небе кружат белоплечие орланы, добавляя величественности этому месту.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_tulenii/ostrov_tuleniy_4.jpg" alt="Птичьи базары на скалах острова" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как увидеть остров Тюлений -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как увидеть остров Тюлений</h2>
      <p class="modalBlock__description">
         <strong>Важно:</strong> чтобы не&nbsp;тревожить уникальную фауну, судам запрещено приближаться к&nbsp;острову более чем на&nbsp;30&nbsp;миль, а&nbsp;самолетам&nbsp;&mdash; пролетать над ним. Поэтому лучше всего любоваться удивительной панорамой с&nbsp;воды.
      </p>
      <p class="modalBlock__description">
         <strong>Морем:</strong> остров можно увидеть во&nbsp;время морских экскурсий по&nbsp;заливу Терпения, которые организуются из&nbsp;Поронайска или других ближайших населенных пунктов.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> экскурсии проводятся в&nbsp;летний период, когда погода более благоприятна для морских прогулок. Необходимо заранее уточнять возможность и&nbsp;условия таких туров у&nbsp;местных туроператоров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/ostrov_tulenii/ostrov_tuleniy_5.jpg" alt="Морская экскурсия к острову Тюлений" loading="lazy">
   </div>
</div>`
        },


//---------------------------------------------Курильский заповедник------------------------------------------------
        {
            id: 'kurilskii_zapovednik',
            title: 'Курильский заповедник',
            image: '../../img/sahalin/cards_nature/kurilskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Курильский заповедник</h1>
</div>
<!-- Блок 1: Заповедные острова -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заповедные острова</h2>
      <p class="modalBlock__description">
         Несколько участков заповедной территории расположены на&nbsp;самом южном острове Курильского архипелага&nbsp;&mdash; Кунашире, а&nbsp;также двух островах Малой Курильской гряды&nbsp;&mdash; Осколки и&nbsp;Демина.
      </p>
      <p class="modalBlock__description">
         Заповедник охраняет уникальные экосистемы вулканических островов, где смешались элементы северной и&nbsp;южной флоры и&nbsp;фауны. Это земля огнедышащих гор, термальных источников и&nbsp;птичьих базаров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/kurilskii_zapovednik/kurilskiy_zapovednik_1.jpg" alt="Панорама острова Кунашир и заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Кальдера вулкана Головнина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Кальдера вулкана Головнина</h2>
      <p class="modalBlock__description">
         Кальдера привлекает необычными ландшафтами и&nbsp;двумя озерами: Кипящим и&nbsp;Горячим. Здесь земля дышит ядовитыми испарениями: сольфатары выбрасывают клубы сероводорода.
      </p>
      <p class="modalBlock__description">
         Горячие источники бурлят у&nbsp;берегов, а&nbsp;вода в&nbsp;озерах постоянно меняет оттенки&nbsp;&mdash; от&nbsp;молочно-белого до&nbsp;изумрудного. Это одно из&nbsp;самых активных гидротермальных полей на&nbsp;Курилах.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/kurilskii_zapovednik/kurilskiy_zapovednik_2.jpg" alt="Кальдера Головнина и озера Кипящее, Горячее" loading="lazy">
   </div>
</div>
<!-- Блок 3: Мыс Столбчатый -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Мыс Столбчатый</h2>
      <p class="modalBlock__description">
         Удивительный природный феномен, представленный чередой базальтовых колонн правильной шестигранной формы. 50-метровые столбы, напоминающие гигантский орган, родились 6&nbsp;млн лет назад.
      </p>
      <p class="modalBlock__description">
         Лава из&nbsp;вулкана Менделеева, излившаяся прямо в&nbsp;море, застыла в&nbsp;безупречном виде. Время и&nbsp;волны обнажили этот каменный лес, превратив его основание в&nbsp;&laquo;тротуар&raquo; из&nbsp;отполированных глыб.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/kurilskii_zapovednik/kurilskiy_zapovednik_3.jpg" alt="Базальтовые колонны мыса Столбчатого" loading="lazy">
   </div>
</div>
<!-- Блок 4: Водопад Птичий -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Водопад Птичий</h2>
      <p class="modalBlock__description">
         Главная жемчужина Курильского заповедника на&nbsp;Кунашире. Река Птичья обрывается здесь 12-метровым каскадом шириной до&nbsp;20&nbsp;м. Место получило название из-за огромного скопления птиц.
      </p>
      <p class="modalBlock__description">
         Во&nbsp;время нереста лосось заполняет реку настолько плотно, что образует &laquo;пробки&raquo;, становясь легкой добычей для пернатых хищников. Нередко сюда приходят и&nbsp;медведи полакомиться рыбой.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/kurilskii_zapovednik/kurilskiy_zapovednik_4.jpg" alt="Водопад Птичий и нерест лосося" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Курильского заповедника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Курильского заповедника</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;самолете:</strong> до&nbsp;островов южной части (Итуруп, Кунашир, Шикотан) можно добраться самолетом из&nbsp;Южно-Сахалинска. До&nbsp;северных островов (Парамушир)&nbsp;&mdash; из&nbsp;Камчатки.
      </p>
      <p class="modalBlock__description">
         <strong>Морем:</strong> в&nbsp;период навигации между Сахалином (порт Корсаков) и&nbsp;некоторыми островами курсируют теплоходы. Также острова можно посетить во&nbsp;время круизов по&nbsp;Тихому океану.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> посещение Курильских островов требует специального пропуска (пограничная зона). Для посещения заповедника необходимо разрешение его администрации. Все детали следует уточнять заранее.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/kurilskii_zapovednik/kak_dobratsya.jpg" alt="Карта Курильских островов и пути доступа" loading="lazy">
   </div>
</div>`
        },

//---------------------------------------------Поронайский заповедник------------------------------------------------
        {
            id: 'poronaiskii_zapovednik',
            title: 'Поронайский заповедник',
            image: '../../img/sahalin/cards_nature/poronayskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заповедник &laquo;Поронайский&raquo;</h1>
</div>
<!-- Блок 1: Убежище дикой природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Убежище дикой природы</h2>
      <p class="modalBlock__description">
         На&nbsp;восточном побережье Сахалина изящной дугой вытянулся невероятно длинный и&nbsp;узкий полуостров Терпения. Здесь находится один из&nbsp;участков Поронайского заповедника.
      </p>
      <p class="modalBlock__description">
         Заповедник стал убежищем для сотен видов птиц, редких животных и&nbsp;уникальных растений, сохраняя нетронутыми таежные леса, горные склоны и&nbsp;болота.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/poronaiskii_zapovednik/poronayskiy_zapovednik_1.jpg" alt="Пейзажи полуострова Терпения и заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 2: Два разных мира -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Два разных мира</h2>
      <p class="modalBlock__description">
         Территория заповедника разделена на&nbsp;два участка, каждый со&nbsp;своим характером: Невский зажат между Западно-Сахалинскими и&nbsp;Восточно-Сахалинскими горами, а&nbsp;Охотский раскинулся на&nbsp;полуострове Терпения.
      </p>
      <p class="modalBlock__description">
         Здесь горные реки низвергаются водопадами, торфяные болота соседствуют с&nbsp;лагунными озерами, а&nbsp;у&nbsp;моря высятся скалы, изрезанные ветром и&nbsp;волнами. Склоны покрыты густыми лесами из&nbsp;аянской ели и&nbsp;сахалинской пихты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/poronaiskii_zapovednik/poronayskiy_zapovednik_2.jpg" alt="Горные реки и таежные леса заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 3: Царство птиц и редких растений -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Царство птиц и&nbsp;редких растений</h2>
      <p class="modalBlock__description">
         Главное богатство заповедника&nbsp;&mdash; птицы. На&nbsp;скалах шумят птичьи базары, в&nbsp;небе парят орланы и&nbsp;сапсаны, а&nbsp;у&nbsp;воды кормятся лебеди и&nbsp;кулики. Всего здесь зарегистрировано 180 видов пернатых.
      </p>
      <p class="modalBlock__description">
         Среди лесов прячутся редчайшие растения: спарассис курчавый (грибная капуста), морщинистый падуб, Венерин башмачок, занесенные в&nbsp;Красную книгу. Это настоящий ботанический заповедник.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/poronaiskii_zapovednik/poronayskiy_zapovednik_3.jpg" alt="Птичьи базары и редкие растения заповедника" loading="lazy">
   </div>
</div>
<!-- Блок 4: Правила посещения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Правила посещения</h2>
      <p class="modalBlock__description">
         Территория строго охраняется: охота, рыбалка и&nbsp;даже постановка палаток запрещены. Посетить заповедник можно только при наличии разрешения, присоединившись к&nbsp;экскурсии.
      </p>
      <p class="modalBlock__description">
         Туристам предлагают экомаршруты, во&nbsp;время которых можно увидеть лисиц, нерп&nbsp;и, если повезет, пролетающего белоплечего орлана. Рядом расположен остров Тюлений с&nbsp;лежбищами морских котиков.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/poronaiskii_zapovednik/poronayskiy_zapovednik_4.jpg" alt="Экскурсионные группы и наблюдение за природой" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до Поронайского заповедника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;Поронайского заповедника</h2>
      <p class="modalBlock__description">
         <strong>Адрес дирекции:</strong> г. Поронайск, ул. Набережная, 15. Здесь можно получить информацию и&nbsp;разрешение на&nbsp;посещение. Подробнее&nbsp;&mdash; на&nbsp;сайте заповедника.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> 330&nbsp;км из&nbsp;Южно-Сахалинска. Время в&nbsp;пути&nbsp;&mdash; около четырех часов.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> из&nbsp;Южно-Сахалинска до&nbsp;Поронайска на&nbsp;электричке или автобусах (&#8470;&#8470;&nbsp;502, 504). От&nbsp;Поронайска до&nbsp;участков заповедника&nbsp;&mdash; на&nbsp;местном транспорте или с&nbsp;экскурсией.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/poronaiskii_zapovednik/kak_dobratsya.jpg" alt="Город Поронайск и дорога к заповеднику" loading="lazy">
   </div>
</div>`
        },

//---------------------------------------------Мыс Крильон------------------------------------------------
        {
            id: 'mys_krilion',
            title: 'Мыс Крильон',
            image: '../../img/sahalin/cards_nature/mys_krilion_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Мыс Крильон</h1>
</div>
<!-- Блок 1: Край земли -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Край земли</h2>
      <p class="modalBlock__description">
         Здесь заканчивается земля: мыс Крильон&nbsp;&mdash; самая южная точка острова Сахалин. Тут сливаются два моря: Японское и&nbsp;Охотское, а&nbsp;в&nbsp;ясный день можно увидеть Японию.
      </p>
      <p class="modalBlock__description">
         Крильон&nbsp;&mdash; не&nbsp;просто географическая отметка, а&nbsp;настоящий музей под открытым небом, хранящий следы разных эпох. Среди них древние поселения, японские доты, подземные тоннели и&nbsp;маяк.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_krilion/mys_krilion_1.jpg" alt="Мыс Крильон — южная оконечность Сахалина" loading="lazy">
   </div>
</div>
<!-- Блок 2: История открытия и маяк -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История открытия и&nbsp;маяк</h2>
      <p class="modalBlock__description">
         В&nbsp;XII веке голландские мореплаватели из-за плотного тумана приняли этот мыс за&nbsp;часть Хоккайдо. Лишь в&nbsp;1787 году французский исследователь Жан-Франсуа де&nbsp;Лаперуз открыл пролив и&nbsp;назвал мыс в&nbsp;честь герцога де&nbsp;Крильона.
      </p>
      <p class="modalBlock__description">
         Главный страж этих мест&nbsp;&mdash; восьмиметровый маяк, построенный в&nbsp;1883&nbsp;году. Кирпич для него везли из&nbsp;Америки, лампу&nbsp;&mdash; из&nbsp;Парижа. Рядом сохранились дома смотрителей, баня и&nbsp;даже старинный водопровод.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_krilion/mys_krilion_2.jpg" alt="Маяк на мысе Крильон и исторические постройки" loading="lazy">
   </div>
</div>
<!-- Блок 3: Свидетели войн и катастроф -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Свидетели войн и&nbsp;катастроф</h2>
      <p class="modalBlock__description">
         До&nbsp;1945 года здесь располагались японские береговые укрепления. И&nbsp;по&nbsp;сей день бетонные доты и&nbsp;подземные ходы являются молчаливыми свидетелями прошлого.
      </p>
      <p class="modalBlock__description">
         А&nbsp;неподалеку до&nbsp;сих пор ржавеет американский пароход &laquo;Луга&raquo;, севший на&nbsp;мель в&nbsp;1948&nbsp;году. Эти объекты напоминают о&nbsp;бурной истории этого стратегического места.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_krilion/mys_krilion_3.jpg" alt="Японские доты и пароход Луга" loading="lazy">
   </div>
</div>
<!-- Блок 4: Земля ветров и туманов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Земля ветров и&nbsp;туманов</h2>
      <p class="modalBlock__description">
         Путешествие на&nbsp;Крильон&nbsp;&mdash; испытание даже для бывалых. Идеальное время для посещения&nbsp;&mdash; август и&nbsp;сентябрь, когда туманы отступают, открывая суровую красоту этого места.
      </p>
      <p class="modalBlock__description">
         В&nbsp;остальное время мыс часто окутан пеленой, превращая пейзаж в&nbsp;загадочные миражи. Это земля ветров, туманов и&nbsp;забытых историй. Место, где чувствуешь себя первооткрывателем, стоя на&nbsp;краю света.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_krilion/mys_krilion_4.jpg" alt="Туман над мысом Крильон" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до мыса Крильон -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;мыса Крильон</h2>
      <p class="modalBlock__description">
         <strong>По&nbsp;морю:</strong> на&nbsp;катере из&nbsp;ближайших населенных пунктов (например, из&nbsp;Невельска или Холмска). Это один из&nbsp;самых надежных способов, но&nbsp;зависит от&nbsp;погодных условий.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> на&nbsp;подготовленном внедорожнике по&nbsp;кромке побережья, ловя момент между приливами, когда океан ненадолго открывает дорогу по&nbsp;берегу. Маршрут сложный и&nbsp;требует опыта.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> путешествие лучше планировать на&nbsp;конец лета&nbsp;&mdash; начало осени. Обязательно иметь с&nbsp;собой запас топлива, воды, еды и&nbsp;быть готовым к&nbsp;резкой смене погоды. Рекомендуется ехать с&nbsp;опытным гидом.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mis_krilion/kak_dobratsya.jpg" alt="Дорога по берегу к мысу Крильон на внедорожнике" loading="lazy">
   </div>
</div>`
        },

//---------------------------------------------Заказник Долинский------------------------------------------------
        {
            id: 'zakaznik_dolinskii',
            title: 'Заказник «Долинский»',
            image: '../../img/sahalin/cards_nature/dolinskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Заказник &laquo;Долинский&raquo;</h1>
</div>
<!-- Блок 1: Заповедный уголок Сахалина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Заповедный уголок Сахалина</h2>
      <p class="modalBlock__description">
         В&nbsp;декабре 1988 года на&nbsp;карте Сахалина появился особый уголок&nbsp;&mdash; заказник &laquo;Долинский&raquo;. Этот заповедный край площадью более 9&nbsp;тыс.&nbsp;га&nbsp;раскинулся между горными хребтами и&nbsp;побережьем Охотского моря.
      </p>
      <p class="modalBlock__description">
         Главный хозяин этих мест&nbsp;&mdash; благородный изюбрь. Но&nbsp;также в&nbsp;заказнике нашли приют бурый медведь, соболь, редкая сахалинская кабарга. Это место создает идеальные условия для жизни редких животных и&nbsp;птиц.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/zakaznin_dolinskii/dolinskiy_1.jpg" alt="Пейзажи заказника Долинский" loading="lazy">
   </div>
</div>
<!-- Блок 2: Ландшафты и природа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ландшафты и&nbsp;природа</h2>
      <p class="modalBlock__description">
         Заказник &laquo;Долинский&raquo; (он&nbsp;же &laquo;Изюбровый&raquo;)&nbsp;&mdash; место, где ароматная тайга с&nbsp;цветущими травами встречается с&nbsp;суровым Охотским морем. Западную часть охраняет предгорье Долинского хребта с&nbsp;крутыми распадками.
      </p>
      <p class="modalBlock__description">
         Ближе к&nbsp;морю рельеф становится мягче&nbsp;&mdash; здесь широкие долины рек Рыбная, Крутоярка, Лиственница несут свои воды к&nbsp;океану. Местные леса&nbsp;&mdash; это смесь темнохвойных великанов, каменных берез и&nbsp;пойменных ольховых рощ.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/zakaznin_dolinskii/dolinskiy_2.jpg" alt="Тайга, реки и побережье заказника" loading="lazy">
   </div>
</div>
<!-- Блок 3: Царство редких видов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Царство редких видов</h2>
      <p class="modalBlock__description">
         Созданный для охраны природы, заказник строго бережет своих обитателей: благородного оленя (изюбря), а&nbsp;также редких и&nbsp;исчезающих видов птиц.
      </p>
      <p class="modalBlock__description">
         Среди охраняемых пернатых&nbsp;&mdash; орлан белоплечий и&nbsp;белохвост, сапсан, кречет, малый лебедь, черная кряква, мандаринка. Короткое прохладное лето и&nbsp;снежные зимы создают уникальный микроклимат.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/zakaznin_dolinskii/dolinskiy_3.jpg" alt="Изюбрь и редкие птицы заказника" loading="lazy">
   </div>
</div>
<!-- Блок 4: Живой организм природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Живой организм природы</h2>
      <p class="modalBlock__description">
         Этот уголок Сахалина&nbsp;&mdash; не&nbsp;просто охраняемая территория, а&nbsp;живой организм, где каждое растение и&nbsp;животное играет свою важную роль в&nbsp;великой симфонии дикой природы.
      </p>
      <p class="modalBlock__description">
         Перемежающиеся заросли бамбука и&nbsp;кустарников создают сложную экосистему. Здесь сохраняется хрупкое экологическое равновесие, нарушение которого может привести к&nbsp;исчезновению редких видов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/zakaznin_dolinskii/dolinskiy_4.jpg" alt="Экосистема заказника и растительный мир" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до заказника -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;заказника</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> заказник находится в&nbsp;80&nbsp;км севернее Южно-Сахалинска. Время в&nbsp;пути&nbsp;&mdash; чуть больше часа по&nbsp;хорошей дороге.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> из&nbsp;Южно-Сахалинска на&nbsp;электричке или автобусах (&#8470;&#8470;&nbsp;502, 504, 509 и&nbsp;др.) до&nbsp;села Советское. От&nbsp;села до&nbsp;территории заказника потребуется местный транспорт.
      </p>
      <p class="modalBlock__description">
         <strong>Важно:</strong> заказник имеет особый охранный статус. Посещение может быть ограничено или требовать специального разрешения. Рекомендуется уточнять условия посещения заранее в&nbsp;администрации заказника.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/zakaznin_dolinskii/kak_dobratsya.jpg" alt="Дорога к заказнику и село Советское" loading="lazy">
   </div>
</div>`
        },
//---------------------------------------------Бухта Тихая------------------------------------------------
        {
            id: 'buhta_tikhaya',
            title: 'Бухта Тихая',
            image: '../../img/sahalin/cards_nature/buhta_tihaya_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Бухта Тихая</h1>
</div>
<!-- Блок 1: Дикий пляж в заливе Терпения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Дикий пляж в&nbsp;заливе Терпения</h2>
      <p class="modalBlock__description">
         Одна из&nbsp;живописных бухт в&nbsp;заливе Терпения популярна своими дикими пляжами. По&nbsp;одной из&nbsp;версий, своим названием она обязана мореплавателю Ивану Крузенштерну.
      </p>
      <p class="modalBlock__description">
         С&nbsp;трех сторон бухту обнимают скалы: на&nbsp;севере&nbsp;&mdash; мыс Тихий с&nbsp;каменным волнорезом, на&nbsp;юге&nbsp;&mdash; пик Смелый, на&nbsp;западе&nbsp;&mdash; отроги живописного хребта Жданко. Это место уединения и&nbsp;природной красоты.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/buhta_tikhaya/buhta_tihaya_1.jpg" alt="Панорама бухты Тихая со скалами" loading="lazy">
   </div>
</div>
<!-- Блок 2: Каменный мир бухты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Каменный мир бухты</h2>
      <p class="modalBlock__description">
         Здесь нет песчаных пляжей&nbsp;&mdash; только узкая полоса гальки у&nbsp;воды да&nbsp;хаотичный мир валунов. Над бухтой нависают 30-метровые кекуры с&nbsp;гротами, в&nbsp;расщелинах сверкают жилы кварца.
      </p>
      <p class="modalBlock__description">
         На&nbsp;севере серебрятся миниатюрные водопады, у&nbsp;берега высится островок Заметный&nbsp;&mdash; неприступный чаячий бастион. А&nbsp;западнее, на&nbsp;горе Новая, затаилась скала Сфинкс&nbsp;&mdash; древнее место ритуалов айнов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/buhta_tikhaya/buhta_tihaya_2.jpg" alt="Кекуры, гроты и каменистый берег бухты" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сезонные преображения -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Сезонные преображения</h2>
      <p class="modalBlock__description">
         Зимой бухта превращается в&nbsp;арктический пейзаж с&nbsp;ледопадами на&nbsp;скалах. Летом каменистые склоны оживают: среди камней цветет термопсис, тянется к&nbsp;солнцу аралия.
      </p>
      <p class="modalBlock__description">
         Вода у&nbsp;берега летом прогревается до&nbsp;комфортных +20&nbsp;&deg;С.&nbsp;После штормов на&nbsp;гальке можно найти солнечный сахалинит&nbsp;&mdash; местный янтарь, который становится желанной находкой для туристов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/buhta_tikhaya/buhta_tihaya_3.jpg" alt="Зимний ледопад и летняя бухта" loading="lazy">
   </div>
</div>
<!-- Блок 4: Для каждого свой отдых -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Для каждого свой отдых</h2>
      <p class="modalBlock__description">
         Рыбаки облюбовали тихие воды для ловли с&nbsp;лодок, серферы&nbsp;&mdash; южную часть с&nbsp;капризными волнами. Туристы штурмуют пик Смелый ради панорам от&nbsp;села Стародубское до&nbsp;мыса Клокова.
      </p>
      <p class="modalBlock__description">
         А&nbsp;те, кто просто хочет тишины, часами наблюдают, как чайки кружат над каменным островком. Здесь каждый находит свой способ общения с&nbsp;природой.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/buhta_tikhaya/buhta_tihaya_4.jpg" alt="Рыбалка, серфинг и восхождение на пик Смелый" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до бухты Тихая -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;бухты Тихая</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> до&nbsp;села Стародубское, а&nbsp;оттуда по&nbsp;берегу до&nbsp;села Взморье. Бухта находится в&nbsp;130&nbsp;км от&nbsp;Южно-Сахалинска. Дорога частично грунтовая.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> от&nbsp;Южно-Сахалинска до&nbsp;села Тихое на&nbsp;автобусах (&#8470;&#8470;&nbsp;502, 504, 509 и&nbsp;др.), которые идут в&nbsp;северную часть острова. От&nbsp;села до&nbsp;бухты&nbsp;&mdash; пешком или на&nbsp;местном транспорте.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> летом бухта популярна у&nbsp;туристов, поэтому на&nbsp;выходных может быть многолюдно. Для уединенного отдыха лучше выбирать будние дни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/buhta_tikhaya/kak_dobratsya.jpg" alt="Дорога к бухте и село Стародубское" loading="lazy">
   </div>
</div>`
        }

    ],




// -----------------------------------------------Культурный код------------------------------------------
// -------------------------------------------------------------------------------------------------------


    culture: [
        {
            id: 'culture_korennih_narodov_2',
            title: 'Культура коренных народов',
            image: '../../img/sahalin/cards_culture/koren_narovod_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Культура коренных народов Сахалина</h1>
</div>
<!-- Блок 1: Живые традиции древних народов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Живые традиции древних народов</h2>
      <p class="modalBlock__description">
         Для знакомства с&nbsp;бытом и&nbsp;традициями малочисленных народов Сахалина нужно ехать на&nbsp;север острова. Сахалин&nbsp;&mdash; земля, где до&nbsp;сих пор живут древние традиции.
      </p>
      <p class="modalBlock__description">
         Нивхи, уйльта, эвенки и&nbsp;нанайцы, чьи предки освоили эти суровые земли тысячи лет назад, бережно хранят свою культуру, язык, ремесла и&nbsp;верования, передавая их&nbsp;из&nbsp;поколения в&nbsp;поколение.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/culture_korennih_narodov/koren_narovod_1.jpg" alt="Представители коренных народов Сахалина в традиционной одежде" loading="lazy">
   </div>
</div>
<!-- Блок 2: Современная жизнь древних культур -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Современная жизнь древних культур</h2>
      <p class="modalBlock__description">
         На&nbsp;Сахалине до&nbsp;сих пор живут и&nbsp;сохраняют свои обычаи коренные народы&nbsp;&mdash; нивхи, нанайцы, уйльта и&nbsp;эвенки. Хотя их&nbsp;общая численность невелика (около 4,5&nbsp;тыс.), их&nbsp;культурное наследие бережно хранится.
      </p>
      <p class="modalBlock__description">
         Традиции сохраняются в&nbsp;семи районах области, где каждый путешественник может познакомиться с&nbsp;уникальными обычаями северных народов: резьбой по&nbsp;дереву, выделкой шкур, национальной кухней и&nbsp;шаманскими обрядами.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/culture_korennih_narodov/koren_narovod_2.jpg" alt="Традиционные ремесла и быт в современных поселениях" loading="lazy">
   </div>
</div>
<!-- Блок 3: Праздники и этнокультурный туризм -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Праздники и&nbsp;этнокультурный туризм</h2>
      <p class="modalBlock__description">
         Этнокультурный маршрут по&nbsp;Сахалину стоит планировать, сверяясь с&nbsp;календарем&nbsp;&mdash; окунуться в&nbsp;водоворот фольклора, танцев и&nbsp;угощений можно на&nbsp;традиционных праздниках, которые на&nbsp;острове до&nbsp;сих пор отмечают с&nbsp;размахом.
      </p>
      <p class="modalBlock__description">
         Главные праздники включают Медвежий праздник нивхов, встречу первого льда, праздник первой рыбы. В&nbsp;эти дни можно услышать горловое пение, увидеть национальные танцы и&nbsp;попробовать блюда из&nbsp;рыбы и&nbsp;оленины.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/culture_korennih_narodov/koren_narovod_3.jpg" alt="Национальные праздники и фольклорные выступления" loading="lazy">
   </div>
</div>`
        },

// ----------------------------------------Краеведческий музей---------------------------------------------------
        {
            id: 'kraevedcheskii_musei',
            title: 'Краеведческий музей',
            image: '../../img/sahalin/cards_culture/sahalin_kraeved_musei_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Сахалинский краеведческий музей</h1>
</div>
<!-- Блок 1: Летопись острова в японской короне -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Летопись острова в&nbsp;японской короне</h2>
      <p class="modalBlock__description">
         В&nbsp;тени лиственниц Южно-Сахалинска возвышается необычное здание в&nbsp;японском стиле, напоминающее императорскую корону. Это Сахалинский краеведческий музей&nbsp;&mdash; летопись острова.
      </p>
      <p class="modalBlock__description">
         Здание музея, построенное в&nbsp;1937&nbsp;году, когда Южно-Сахалинск входил в&nbsp;состав Японии,&nbsp;&mdash; само по&nbsp;себе ценный экспонат. Его изогнутая крыша и&nbsp;массивные колонны создают ощущение переноса в&nbsp;довоенный город Тоёхара.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sahalinskii_kraevedcheskii_musei/sahalin_kraeved_musei_1.jpg" alt="Здание музея в японском стиле" loading="lazy">
   </div>
</div>
<!-- Блок 2: Остров в миниатюре -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Остров в&nbsp;миниатюре</h2>
      <p class="modalBlock__description">
         Краеведческий музей&nbsp;&mdash; целый остров Сахалин в&nbsp;миниатюре. В&nbsp;просторных залах хранится четверть миллиона уникальных свидетельств прошлого. Здесь соседствуют окаменелости древних моллюсков и&nbsp;современные интерактивные панели.
      </p>
      <p class="modalBlock__description">
         Особое место занимает диорама древних культур, где мастерски воссозданы стоянки первобытных людей и&nbsp;традиционные жилища коренных народов. Нивхские ритуальные маски соседствуют с&nbsp;японскими школьными учебниками 1930-х годов.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sahalinskii_kraevedcheskii_musei/sahalin_kraeved_musei_2.jpg" alt="Экспозиции музея: от древности до современности" loading="lazy">
   </div>
</div>
<!-- Блок 3: Ожившая история -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Ожившая история</h2>
      <p class="modalBlock__description">
         Музей давно перестал быть просто собранием экспонатов. В&nbsp;его залах будто попадаешь в&nbsp;прошлое: в&nbsp;наушниках звучат голоса старожилов, на&nbsp;экранах оживают старые фотографии.
      </p>
      <p class="modalBlock__description">
         В&nbsp;специальном зале можно увидеть доспехи самурая, зуб доисторической акулы или примерить традиционные одежды нивхов. Каждый год сюда приходят тысячи посетителей, чтобы понять, как на&nbsp;одном острове уживались разные культуры.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sahalinskii_kraevedcheskii_musei/sahalin_kraeved_musei_3.jpg" alt="Интерактивные экспонаты и исторические реконструкции" loading="lazy">
   </div>
</div>
<!-- Блок 4: Прикосновение к векам -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Прикосновение к&nbsp;векам</h2>
      <p class="modalBlock__description">
         Лучше всего приходить сюда в&nbsp;дождливый день&nbsp;&mdash; под мерный стук капель по&nbsp;крыше &laquo;императорской короны&raquo; особенно хорошо слушать шепот веков и&nbsp;представлять, как менялся остров от&nbsp;эпохи к&nbsp;эпохе.
      </p>
      <p class="modalBlock__description">
         Этот музей не&nbsp;просто показывает историю&nbsp;&mdash; он&nbsp;позволяет прикоснуться к&nbsp;ней руками. Это место, где оживают страницы учебников и&nbsp;открываются тайны сахалинской земли.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sahalinskii_kraevedcheskii_musei/sahalin_kraeved_musei_4.jpg" alt="Интерьер музея и атмосфера погружения в историю" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до музея -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;музея</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Южно-Сахалинск, Коммунистический проспект, 29. Музей расположен в&nbsp;центральной части города, недалеко от&nbsp;парка культуры и&nbsp;отдыха.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> до&nbsp;музея можно доехать на&nbsp;многих городских автобусах, следующих до&nbsp;центра. Ближайшие остановки&nbsp;&mdash; &laquo;Центр&raquo; или &laquo;Парк&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Часы работы и&nbsp;билеты:</strong> рекомендуется уточнять актуальное расписание, стоимость билетов и&nbsp;наличие экскурсий на&nbsp;официальном сайте музея или по&nbsp;телефону перед посещением.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/sahalinskii_kraevedcheskii_musei/kak_dobratsya.jpg" alt="Расположение музея на карте Южно-Сахалинска" loading="lazy">
   </div>
</div>`
        },

// ----------------------------------------Курорт «Горный воздух»---------------------------------------------------

        {
            id: 'gornyi_vozduh',
            title: 'Курорт «Горный воздух»',
            image: '../../img/sahalin/cards_culture/gornyi_vozduh_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Курорт &laquo;Горный воздух&raquo;</h1>
</div>
<!-- Блок 1: Горнолыжная столица Дальнего Востока -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Горнолыжная столица Дальнего Востока</h2>
      <p class="modalBlock__description">
         Прямо в&nbsp;черте Южно-Сахалинска раскинулся крупнейший на&nbsp;Дальнем Востоке горнолыжный комплекс. Его трассы бегут по&nbsp;склонам двух гор: Большевик (601&nbsp;м) и&nbsp;Красная (779&nbsp;м).
      </p>
      <p class="modalBlock__description">
         Благодаря мягким снежным зимам и&nbsp;мощной системе искусственного оснежения горнолыжный сезон здесь длится с&nbsp;середины декабря до&nbsp;апреля. Главный козырь &laquo;Горного воздуха&raquo;&nbsp;&mdash; уникальная доступность: всего 15&nbsp;минут из&nbsp;центра города.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gornii_vozduh/gornyi_vozduh_1.jpg" alt="Панорама горнолыжного курорта Горный воздух" loading="lazy">
   </div>
</div>
<!-- Блок 2: История и развитие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">История и&nbsp;развитие</h2>
      <p class="modalBlock__description">
         Эти сопки хранят память о&nbsp;разных эпохах. Еще в&nbsp;японский период здесь появились первые трамплины, в&nbsp;1960-х&nbsp;&mdash; советская спортивная база, а&nbsp;с&nbsp;2008 года началась современная история курорта с&nbsp;запуском гондольной канатки.
      </p>
      <p class="modalBlock__description">
         Курорт продолжает развиваться: недавно открылись новые трассы на&nbsp;горе Красная, а&nbsp;в&nbsp;планах&nbsp;&mdash; дальнейшее расширение зон катания. Это делает &laquo;Горный воздух&raquo; одним из&nbsp;самых динамичных спортивных центров региона.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gornii_vozduh/gornyi_vozduh_2.jpg" alt="Исторические фото и современные подъемники" loading="lazy">
   </div>
</div>
<!-- Блок 3: Круглогодичный отдых -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Круглогодичный отдых</h2>
      <p class="modalBlock__description">
         Круглогодичный курорт ждет гостей не&nbsp;только зимой, но&nbsp;и&nbsp;летом: есть групповые занятия спортом на&nbsp;свежем воздухе, тренировки по&nbsp;маунтинбайку и&nbsp;множество других опций для поклонников экотуризма.
      </p>
      <p class="modalBlock__description">
         По&nbsp;территории курорта проложены эко- и&nbsp;велотропы разной протяженности и&nbsp;сложности с&nbsp;промаркированными маршрутами. Особый микроклимат горных склонов, наполненный фитонцидами хвойных деревьев, превращает каждую прогулку в&nbsp;сеанс оздоровления.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gornii_vozduh/gornyi_vozduh_3.jpg" alt="Летние активности: велосипеды и пешие маршруты" loading="lazy">
   </div>
</div>
<!-- Блок 4: Терренкуры и хайкинг -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Терренкуры и&nbsp;хайкинг</h2>
      <p class="modalBlock__description">
         Для поклонников активного отдыха представлены терренкуры&nbsp;&mdash; продуманные маршруты с&nbsp;дозированными подъемами для укрепления сердца и&nbsp;заряда бодрости.
      </p>
      <p class="modalBlock__description">
         Более продвинутый вариант&nbsp;&mdash; маршруты для хайкинга и&nbsp;квадроциклов разной степени сложности. Здесь каждый найдет подходящий уровень нагрузки&nbsp;&mdash; от&nbsp;спокойной прогулки до&nbsp;экстремального спуска.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gornii_vozduh/gornyi_vozduh_4.jpg" alt="Терренкуры и маршруты для хайкинга" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до курорта -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;курорта</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Южно-Сахалинск, Горнолыжная ул., 3. Курорт расположен в&nbsp;черте города, в&nbsp;непосредственной близости от&nbsp;центра.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> до&nbsp;курорта можно доехать на&nbsp;многих городских автобусах, следующих в&nbsp;горную часть города. Остановка &laquo;Горный воздух&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> перед посещением рекомендуется уточнять расписание работы подъемников, состояние трасс (зимой) и&nbsp;график работы летних активностей на&nbsp;официальном сайте курорта.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/gornii_vozduh/kak_dobratsya.jpg" alt="Расположение курорта на карте города" loading="lazy">
   </div>
</div>`
        },

// ----------------------------------------Маяк Слепиковского---------------------------------------------------

        {
            id: 'mayak_slepikovskogo',
            title: 'Маяк Слепиковского',
            image: '../../img/sahalin/cards_culture/mayak_slipikovskogo_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Маяк Слепиковского</h1>
</div>
<!-- Блок 1: Творение инженера Миуры -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Творение инженера Миуры</h2>
      <p class="modalBlock__description">
         Еще одно творение японского инженера Синобу Миуры, автора знаменитого маяка Анива, было обследовано в&nbsp;ходе экспедиции Русского географического общества &laquo;Маяки России&raquo;.
      </p>
      <p class="modalBlock__description">
         Это не&nbsp;просто башня, а&nbsp;целый автономный комплекс&nbsp;&mdash; жилые помещения, мастерские и&nbsp;даже система сбора дождевой воды соединены крытыми бетонными переходами. В&nbsp;непогоду смотрители могли месяцами не&nbsp;выходить наружу.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_slepikovskogo/mayak_slipikovskogo_1.jpg" alt="Маяк Слепиковского — автономный комплекс" loading="lazy">
   </div>
</div>
<!-- Блок 2: На краю уникальной экосистемы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">На&nbsp;краю уникальной экосистемы</h2>
      <p class="modalBlock__description">
         Маяк стоит на&nbsp;краю уникальной экосистемы&nbsp;&mdash; там, где темнохвойные леса встречаются с&nbsp;субтропическими лианами. Склоны, обращенные к&nbsp;морю, покрыты пихтами и&nbsp;елями.
      </p>
      <p class="modalBlock__description">
         Внизу буйствует знаменитое сахалинское высокотравье, перемежаясь с&nbsp;зарослями лимонника и&nbsp;элеутерококка. Рядом с&nbsp;маяком лишь бесконечные песчаные валы да&nbsp;прибрежные озера, намытые океанскими течениями.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_slepikovskogo/mayak_slipikovskogo_2.jpg" alt="Уникальная природа вокруг маяка" loading="lazy">
   </div>
</div>
<!-- Блок 3: Страж Татарского пролива -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Страж Татарского пролива</h2>
      <p class="modalBlock__description">
         По&nbsp;сей день он&nbsp;освещает путь судам в&nbsp;самом сердце Татарского пролива&nbsp;&mdash; ключевой морской артерии, соединяющей Японское и&nbsp;Охотское моря.
      </p>
      <p class="modalBlock__description">
         Маяк продолжает нести свою службу, оставаясь одновременно действующим навигационным объектом и&nbsp;памятником инженерного искусства. Это молчаливый свидетель эпохи, когда человеческая воля бросала вызов стихии.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_slepikovskogo/mayak_slipikovskogo_3.jpg" alt="Маяк как навигационный объект в проливе" loading="lazy">
   </div>
</div>
<!-- Блок 4: Борьба со стихией -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Борьба со&nbsp;стихией</h2>
      <p class="modalBlock__description">
         Сегодня этот молчаливый страж переживает нелегкие времена. Берег, подтачиваемый океанскими волнами, отступает на&nbsp;глазах, с&nbsp;каждым годом приближая маяк к&nbsp;краю обрыва.
      </p>
      <p class="modalBlock__description">
         С&nbsp;мая по&nbsp;октябрь сюда можно добраться с&nbsp;экскурсией, чтобы увидеть последнего свидетеля этой борьбы. Это путешествие во&nbsp;времени, где бетон и&nbsp;сталь рассказывают историю противостояния человека и&nbsp;природы.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_slepikovskogo/mayak_slipikovskogo_4.jpg" alt="Эрозия берега у маяка" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до маяка -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;маяка</h2>
      <p class="modalBlock__description">
         <strong>На&nbsp;автомобиле:</strong> до&nbsp;мыса Слепиковского, где расположен маяк, из&nbsp;Южно-Сахалинска через Холмск и&nbsp;далее по&nbsp;берегу. Время в&nbsp;пути&nbsp;&mdash; два с&nbsp;половиной часа. Требуется внедорожник.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> из&nbsp;Южно-Сахалинска до&nbsp;Холмска на&nbsp;автобусе с&nbsp;пересадкой в&nbsp;сторону Чехова, далее доехать до&nbsp;села Костромское, откуда пройти пешком до&nbsp;берега Татарского пролива.
      </p>
      <p class="modalBlock__description">
         <strong>Совет:</strong> посещение лучше планировать на&nbsp;период с&nbsp;мая по&nbsp;октябрь. Маяк является действующим объектом, поэтому доступ внутрь может быть ограничен. Экскурсии организуются через туроператоров.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/mayak_slepikovskogo/kak_dobratsya.jpg" alt="Дорога к маяку через Холмск" loading="lazy">
   </div>
</div>`
        },

// ----------------------------------------Музей книги Чехова---------------------------------------------------
        {
            id: 'musei_chechova_2',
            title: 'Музей книги Чехова',
            image: '../../img/sahalin/cards_culture/musei_chekhova_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Музей книги Антона Чехова &laquo;Остров Сахалин&raquo;</h1>
</div>
<!-- Блок 1: Музей одной великой книги -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей одной великой книги</h2>
      <p class="modalBlock__description">
         Можно&nbsp;ли собрать музей одной книги, да&nbsp;такой, чтобы было интересно не&nbsp;только поклонникам истории, но&nbsp;и&nbsp;детям? У&nbsp;сахалинского Музея книги Чехова это точно получилось!
      </p>
      <p class="modalBlock__description">
         В&nbsp;коллекции музея более 14,5&nbsp;тыс. экспонатов, среди которых особое место занимают личные вещи писателя и&nbsp;его семьи. Это уникальное место, где оживает история знаменитого путешествия Чехова.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_knigi_checkova/musei_chekhova_1.jpg" alt="Здание музея книги Чехова" loading="lazy">
   </div>
</div>
<!-- Блок 2: Путешествие, изменившее писателя -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Путешествие, изменившее писателя</h2>
      <p class="modalBlock__description">
         Летом 1890 года Антон Павлович Чехов отправился в&nbsp;беспрецедентную для русского литератора поездку&nbsp;&mdash; на&nbsp;каторжный Сахалин. Три месяца он&nbsp;колесил по&nbsp;острову, заполняя переписные карточки, беседуя с&nbsp;каторжанами и&nbsp;чиновниками.
      </p>
      <p class="modalBlock__description">
         Это путешествие стало поворотным моментом в&nbsp;его жизни и&nbsp;творчестве. Вернувшись в&nbsp;декабре 1890&nbsp;года, Чехов сразу приступил к&nbsp;работе над книгой, которая увидела свет в&nbsp;1895&nbsp;году.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_knigi_checkova/musei_chekhova_2.jpg" alt="Маршрут путешествия Чехова по Сахалину" loading="lazy">
   </div>
</div>
<!-- Блок 3: Книга как документ эпохи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Книга как документ эпохи</h2>
      <p class="modalBlock__description">
         Работа, вдохновленная &laquo;Записками из&nbsp;мертвого дома&raquo; Ф.&nbsp;М.&nbsp;Достоевского, стала уникальным документом эпохи. Это не&nbsp;просто путевые заметки, а&nbsp;глубокое исследование человеческой природы в&nbsp;экстремальных условиях каторги.
      </p>
      <p class="modalBlock__description">
         Литературно-художественный музей книги Чехова &laquo;Остров Сахалин&raquo; начал свою историю в&nbsp;1989 году как общественная инициатива, а&nbsp;свои двери для посетителей открыл в&nbsp;сентябре 1995&nbsp;года.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_knigi_checkova/musei_chekhova_3.jpg" alt="Различные издания книги "Остров Сахалин"" loading="lazy">
   </div>
</div>
<!-- Блок 4: Уникальные экспонаты -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Уникальные экспонаты</h2>
      <p class="modalBlock__description">
         Здесь можно увидеть подлинные предметы, принадлежавшие Чехову: дорожную сумку, медицинские инструменты, бритву, щипцы для сахара и&nbsp;даже таз, в&nbsp;котором варилось знаменитое чеховское варенье из&nbsp;яблок с&nbsp;корицей.
      </p>
      <p class="modalBlock__description">
         Особая гордость музея&nbsp;&mdash; крупнейшее в&nbsp;мире собрание изданий книги &laquo;Остров Сахалин&raquo; на&nbsp;разных языках. Здесь&nbsp;же находятся копии всех переписных карточек, заполненных Чеховым, и&nbsp;черновик рукописи.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_knigi_checkova/musei_chekhova_4.jpg" alt="Личные вещи Чехова и рукописи" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до музея -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;музея</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Южно-Сахалинск, проспект Мира, 104. Музей находится в&nbsp;новом просторном здании площадью почти 1,9&nbsp;тыс.&nbsp;кв.&nbsp;м, куда он&nbsp;переехал в&nbsp;2013&nbsp;году.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> до&nbsp;музея можно доехать на&nbsp;многих городских автобусах, следующих по&nbsp;проспекту Мира. Ближайшая остановка&nbsp;&mdash; &laquo;Музей Чехова&raquo; или &laquo;Проспект Мира&raquo;.
      </p>
      <p class="modalBlock__description">
         <strong>Часы работы:</strong> рекомендуется уточнять актуальное расписание, стоимость билетов и&nbsp;наличие экскурсий на&nbsp;официальном сайте музея или по&nbsp;телефону перед посещением.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_knigi_checkova/kak_dobratsya.jpg" alt="Расположение музея на карте города" loading="lazy">
   </div>
</div>`
        },

// ----------------------------------------Музей «Победа»---------------------------------------------------

        {
            id: 'pobeda_musei',
            title: 'Музей «Победа»',
            image: '../../img/sahalin/cards_culture/musei_pobeda_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">Музей &laquo;Победа&raquo;</h1>
</div>
<!-- Блок 1: Музей военной истории Сахалина -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Музей военной истории Сахалина</h2>
      <p class="modalBlock__description">
         2&nbsp;сентября 2017&nbsp;года, в&nbsp;72-ю годовщину окончания Великой Отечественной войны, в&nbsp;Южно-Сахалинске открылся музейный комплекс, посвященный военной истории острова.
      </p>
      <p class="modalBlock__description">
         Архитектурный ансамбль, объединяющий мемориал и&nbsp;музей, стал местом, где оживает военная история Сахалина и&nbsp;Курил. Здесь хранится память о&nbsp;героях разных эпох.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_pobeda/musei_pobeda_1.jpg" alt="Здание музейного комплекса Победа" loading="lazy">
   </div>
</div>
<!-- Блок 2: От Русско-японской до наших дней -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">От&nbsp;Русско-японской до&nbsp;наших дней</h2>
      <p class="modalBlock__description">
         Экспозиции музея охватывают весь боевой путь Сахалинской земли. Залы рассказывают о&nbsp;героической обороне во&nbsp;время Русско-японской войны, когда крейсер &laquo;Новик&raquo; и&nbsp;полуподводная лодка &laquo;Кета&raquo; вписали свои имена в&nbsp;историю.
      </p>
      <p class="modalBlock__description">
         Трагические страницы Гражданской войны и&nbsp;интервенции сменяются решающими боями августа 1945&nbsp;года. Отдельный зал посвящен сахалинцам, участвовавшим в&nbsp;локальных конфликтах XX&ndash;XXI веков&nbsp;&mdash; от&nbsp;Афганистана до&nbsp;Чечни.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_pobeda/musei_pobeda_2.jpg" alt="Экспозиции разных исторических периодов" loading="lazy">
   </div>
</div>
<!-- Блок 3: Трехмерные инсталляции и голоса героев -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Трехмерные инсталляции и&nbsp;голоса героев</h2>
      <p class="modalBlock__description">
         Шагнув внутрь, вы&nbsp;окажетесь в&nbsp;эпицентре событий. Трехмерные инсталляции &laquo;Десант на&nbsp;Шумшу&raquo; и&nbsp;&laquo;Штурм поста Хандаса&raquo; перенесут вас в&nbsp;август 1945&nbsp;года.
      </p>
      <p class="modalBlock__description">
         Голоса реальных участников тех сражений&nbsp;&mdash; Агаса Арзуманяна, Петра Шутова и&nbsp;других героев&nbsp;&mdash; расскажут о&nbsp;последних днях войны. Уникальные документы и&nbsp;артефакты, многие из&nbsp;которых выставлены впервые, раскроют малоизвестные страницы истории.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_pobeda/musei_pobeda_3.jpg" alt="Трехмерные инсталляции и мультимедийные экспонаты" loading="lazy">
   </div>
</div>
<!-- Блок 4: Научная работа и современная жизнь музея -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Научная работа и&nbsp;современная жизнь музея</h2>
      <p class="modalBlock__description">
         Музей ведет важную научную работу, бережно сохраняя подлинные свидетельства эпохи. Особое место занимают документы Портсмутского договора и&nbsp;материалы, раскрывающие подготовку к&nbsp;войне на&nbsp;Дальнем Востоке.
      </p>
      <p class="modalBlock__description">
         Интерактивные макеты островов Матуа и&nbsp;Шумшу, инсталляции &laquo;Призрачные олени&raquo; и&nbsp;&laquo;ПСКР &bdquo;Дзержинский&ldquo;&raquo; помогают понять масштаб событий. Сегодня комплекс стал центром притяжения для всех, кому дорога история.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_pobeda/musei_pobeda_4.jpg" alt="Научные экспонаты и интерактивные макеты" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться до музея -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">Как добраться до&nbsp;музея</h2>
      <p class="modalBlock__description">
         <strong>Адрес:</strong> Южно-Сахалинск, проспект Победы, 1. Музей расположен в&nbsp;центральной части города, недалеко от&nbsp;других культурных и&nbsp;исторических объектов.
      </p>
      <p class="modalBlock__description">
         <strong>На&nbsp;общественном транспорте:</strong> до&nbsp;музея можно доехать на&nbsp;многих городских автобусах, следующих по&nbsp;проспекту Победы. Ближайшая остановка&nbsp;&mdash; &laquo;Музей Победа&raquo; или &laquo;Проспект Победы&raquo;.
      </p>
      <p class="modalBlock__description">
         В&nbsp;музее регулярно проходят уроки мужества, исторические реконструкции, тематические выставки и&nbsp;творческие встречи. Рекомендуется уточнять расписание мероприятий на&nbsp;официальном сайте.
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/sahalin/cards_modal/musei_pobeda/kak_dobratsya.jpg" alt="Расположение музея на карте Южно-Сахалинска" loading="lazy">
   </div>
</div>`
        }

    ]

};

window.sahalinData = sahalinData;
