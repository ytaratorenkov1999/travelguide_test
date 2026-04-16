// ============================================
// ДАННЫЕ КАРТОЧЕК МУРМАНСКОЙ ОБЛАСТИ
// ============================================

const en_murmanskData = {
//---------------------------Точки притяжения региона-----------------------------------------------------------

    attractions: [
        {
            id: 'hibiny',
            title: 'Khibiny Mountains',
            image: '../../img/murmansk/cards_tochki/Hibiny_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Khibiny Mountains</h1>
</div>
<!-- Блок 1: Крупнейший горный массив -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Largest Mountain Range on&nbsp;the Kola Peninsula</h2>
        <p class="modalBlock__description">
            The Khibiny Mountains are the largest mountain range on&nbsp;the Kola Peninsula and one of&nbsp;the oldest in&nbsp;Russia, at&nbsp;nearly 400 million years old. This is&nbsp;a&nbsp;world of&nbsp;plateaus smoothed by&nbsp;time and glaciers, deep gorges, and picturesque valleys with lakes&nbsp;&mdash; a&nbsp;true Arctic mecca for active travelers.
        </p>
        <p class="modalBlock__description">
            Despite their age, these mountains continue to&nbsp;grow, rising by&nbsp;2&ndash;3&nbsp;cm per year. Their climate is&nbsp;harsh: Winter temperatures drop to&nbsp;&minus;40&nbsp;&deg;C, snow lies from October to&nbsp;June, and summers are short and cool. But it&nbsp;is&nbsp;precisely this severity that attracts travelers&nbsp;&mdash; it&rsquo;s a&nbsp;winter paradise for skiers, and March offers perfect conditions for the Northern Lights.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_1.jpg" alt="Panorama of the Khibiny Mountains with gentle slopes" loading="lazy">
    </div>
</div>
<!-- Блок 2: Озеро Малый Вудъявр и гора Юдычвумчорр -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Lake Maly Vudyavr and Mount Yudychvumchorr</h2>
        <p class="modalBlock__description">
            Lake Maly Vudyavr (from Sami, &laquo;mountain lake&raquo;) is&nbsp;located at&nbsp;the foot of&nbsp;the Kukisvumchorr Range, a&nbsp;few kilometers from Kirovsk. The water here is&nbsp;so&nbsp;transparent it&nbsp;seems crystalline, and the lake&rsquo;s unusual shape resembles a&nbsp;gemstone. In&nbsp;summer, its shores turn into berry fields with cloudberries, blueberries, and cranberries&nbsp;&mdash; a&nbsp;perfect picnic spot.
        </p>
        <p class="modalBlock__description">
            Mount Yudychvumchorr (1,200&nbsp;m) is&nbsp;the highest peak in&nbsp;the Khibiny and the highest point in&nbsp;the European Arctic of&nbsp;Russia. Its name means &laquo;the mountain of&nbsp;the humming valley.&raquo; This massive, flat-topped range with steep cliffs is&nbsp;framed by&nbsp;the valleys of&nbsp;the Malaya Belaya (Small White) River and Fersman Stream. The mountain is&nbsp;sometimes named after the geochemist Alexander Fersman, who revealed many of&nbsp;the Khibiny&rsquo;s secrets to&nbsp;the world.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_2.jpg" alt="Lake Maly Vudyavr and view of Mount Yudychvumchorr" loading="lazy">
    </div>
</div>
<!-- Блок 3: Озеро Имандра -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Lake Imandra</h2>
        <p class="modalBlock__description">
            Imandra is&nbsp;the largest water body in&nbsp;the Murmansk Region. Its pristine water and diverse coastal landscapes attract seekers of&nbsp;true northern nature. On&nbsp;its shores lie the towns of&nbsp;Apatity and Monchegorsk, as&nbsp;well as&nbsp;numerous recreational centers and campsites.
        </p>
        <p class="modalBlock__description">
            The lake offers opportunities for active recreation year-round. In&nbsp;summer, activities like kayaking, yachting, and catamaran tours are popular, while in&nbsp;winter, the icy surface transforms into trails for skiers, skaters, and snowmobilers. Scenic hiking trails of&nbsp;varying difficulty wind through coniferous forests and mountainous areas along the shores.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_3.jpg" alt="Lake Imandra with clear water and mountain shores" loading="lazy">
    </div>
</div>
<!-- Блок 4: Перевал географов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Geographov Mountain Pass</h2>
        <p class="modalBlock__description">
            Geographov Mountain Pass is&nbsp;one of&nbsp;the key points in&nbsp;the Khibiny Mountains, connecting Lake Maly Vudyavr with the valley of&nbsp;the Bolshaya Belaya (Big White) River. It&nbsp;lies between the massive peaks of&nbsp;Takhtarvumchorr and Vudyavrchorr. The ascent to&nbsp;the pass is&nbsp;stepped, with a&nbsp;total elevation gain of&nbsp;about 650&nbsp;meters.
        </p>
        <p class="modalBlock__description">
            From the top, a&nbsp;panorama opens up&nbsp;over four rocky cirques at&nbsp;once. In&nbsp;winter, you can see frozen ice fountains here&nbsp;&mdash; subterranean springs turned into fantastical ice sculptures. This place is&nbsp;perfect for those who want to&nbsp;experience the scale and harsh beauty of&nbsp;the Khibiny.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_4.jpg" alt="View from Geographov Mountain Pass to the rocky cirques of the Khibiny Mountains" loading="lazy">
    </div>
</div>
<!-- Блок 5: Полярно-альпийский ботанический сад и как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Botanical Garden and the Way to&nbsp;the Khibiny</h2>
        <p class="modalBlock__description">
            The N.&nbsp;A. Avrorin Polar-Alpine Botanical Garden-Institute (PABGI) is&nbsp;the first and northernmost botanical garden in&nbsp;the world, created beyond the Arctic Circle. Its main task is&nbsp;to&nbsp;preserve and study the flora of&nbsp;the Khibiny Mountains. Greenhouses and nurseries are accessible to&nbsp;visitors as&nbsp;part of&nbsp;guided excursion groups.
        </p>
        <p class="modalBlock__description">
            <strong>How to&nbsp;get there:</strong> Starting points are Kirovsk and Apatity. By&nbsp;car via the R-21 Kola Highway from Murmansk. By&nbsp;plane to&nbsp;Khibiny Airport, 15&nbsp;km from Apatity, then by&nbsp;bus or&nbsp;taxi to&nbsp;Kirovsk. By&nbsp;train from Moscow, Saint Petersburg, or&nbsp;Murmansk to&nbsp;Apatity, then by&nbsp;local transport to&nbsp;Kirovsk.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_5.jpg" alt="Polar-Alpine Botanical Garden and route map to the Khibiny" loading="lazy">
    </div>
</div>`
        },

//---------------------------Атомный ледокол «Ленин»-----------------------------------------------------------
        {
            id: 'ledocol_lenin',
            title: 'Lenin Nuclear-Powered Icebreaker',
            image: '../../img/murmansk/cards_tochki/Atomnyy_ledokol_Lenin_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Lenin Nuclear-Powered Icebreaker</h1>
</div>
<!-- Блок 1: Первый в мире атомный ледокол -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The World&rsquo;s First Nuclear-Powered Surface Ship</h2>
        <p class="modalBlock__description">
            The Lenin nuclear-powered icebreaker is&nbsp;a&nbsp;revolutionary ship that opened a&nbsp;new era in&nbsp;Arctic exploration. It&nbsp;was launched in&nbsp;1957&nbsp;at the Leningrad shipyard and embarked on&nbsp;its first trials in&nbsp;September 1959.
        </p>
        <p class="modalBlock__description">
            During its 30&nbsp;years of&nbsp;service, the icebreaker sailed over 650,000 nautical miles&nbsp;&mdash; equivalent to&nbsp;30&nbsp;round-the-world voyages or&nbsp;three trips from Earth to&nbsp;the Moon. In&nbsp;1971, it&nbsp;became the first surface ship to&nbsp;circumnavigate the Severnaya Zemlya archipelago from the north, proving the possibility of&nbsp;year-round navigation in&nbsp;high latitudes.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_1.jpg" alt="Lenin at sea during Arctic expeditions" loading="lazy">
    </div>
</div>
<!-- Блок 2: Музей на вечной стоянке -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Museum on&nbsp;Eternal Berth</h2>
        <p class="modalBlock__description">
            After being decommissioned in&nbsp;1989, the legendary icebreaker found its eternal berth in&nbsp;Murmansk, and a&nbsp;museum was opened on&nbsp;board. Its original interior has been fully preserved, from the wheelhouse and engine room to&nbsp;the wardroom and library.
        </p>
        <p class="modalBlock__description">
            Excursions to&nbsp;the icebreaker allow visitors to&nbsp;glimpse the inner sanctum of&nbsp;the nuclear fleet: They can visit the crew&rsquo;s canteen, medical unit, captain&rsquo;s cabin, and wardroom, which hosted such distinguished guests as&nbsp;Yuri Gagarin, Fidel Castro, and Richard Nixon.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_2.jpg" alt="Interior of the museum on the icebreaker: wheelhouse and wardroom" loading="lazy">
    </div>
</div>
<!-- Блок 3: Информационный центр и выставки -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Information Center and Exhibitions</h2>
        <p class="modalBlock__description">
            The icebreaker houses an&nbsp;Atomic Energy Information Center and the interactive exhibition &laquo;Atom and the Arctic,&raquo; which tells the story of&nbsp;the Northern Sea Route&rsquo;s development, the growth of&nbsp;the nuclear fleet, and the current state of&nbsp;Arctic research.
        </p>
        <p class="modalBlock__description">
            The exhibition combines historical artifacts with modern multimedia technologies, immersing visitors in&nbsp;the world of&nbsp;Arctic expeditions and nuclear power.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_3.jpg" alt="Interactive exhibition on board the icebreaker" loading="lazy">
    </div>
</div>
<!-- Блок 4: Уникальные впечатления -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Unique Experience</h2>
        <p class="modalBlock__description">
            Visiting the Lenin nuclear-powered icebreaker is&nbsp;an&nbsp;opportunity to&nbsp;touch the living history of&nbsp;Arctic exploration, witness a&nbsp;technological breakthrough of&nbsp;its time, and appreciate the scale of&nbsp;engineering thought.
        </p>
        <p class="modalBlock__description">
            The view of&nbsp;the night port illuminated by&nbsp;giant cranes is&nbsp;particularly impressive and worth seeing with your own eyes. The Murmansk Marine Station, where the icebreaker is&nbsp;moored, is&nbsp;itself an&nbsp;impressive architectural landmark.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_4.jpg" alt="Night view of Murmansk Port and illumination of the Lenin icebreaker" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            The Lenin nuclear-powered icebreaker is&nbsp;moored at&nbsp;the main berth of&nbsp;the Murmansk Marine Station, right in&nbsp;the city center, making it&nbsp;easily accessible.
        </p>
        <p class="modalBlock__description">
            <strong>Address:</strong> 25&nbsp;Portovy Proezd, Murmansk. <strong>Opening hours and visiting conditions:</strong> Please check the museum&rsquo;s official website for any updates to&nbsp;the schedule and excursion arrangements. Booking excursions in&nbsp;advance, especially during the high season, is&nbsp;recommended.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/kak_dobratsya.jpg" alt="Location plan of Murmansk Marine Station and the Lenin icebreaker" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Териберка-----------------------------------------------------------
        {
            id: 'teriberka',
            title: 'Teriberka',
            image: '../../img/murmansk/cards_tochki/Teriberka_0.jpg',
            modalContent:


`<div class="modalHeader">
    <h1 class="modalHeader__title">Teriberka</h1>
</div>
<!-- Блок 1: Старинный рыболовецкий поселок -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Ancient Fishing Settlement by&nbsp;the Barents Sea</h2>
        <p class="modalBlock__description">
            Teriberka is&nbsp;a&nbsp;famous ancient fishing settlement on&nbsp;the coast of&nbsp;the Barents Sea. It&nbsp;is&nbsp;here that you can find the nearest accessible road to&nbsp;the Arctic Ocean in&nbsp;Russia.
        </p>
        <p class="modalBlock__description">
            Old Teriberka has preserved the spirit of&nbsp;traditional Pomor settlements with characteristic wooden houses, boats, and outbuildings. The settlement consists of&nbsp;two parts: The old part with authentic Pomor buildings and a&nbsp;younger, Soviet-era part, from which the ocean shore is&nbsp;just a&nbsp;stone&rsquo;s throw away.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_1.jpg" alt="Old Pomor houses and boats in Teriberka" loading="lazy">
    </div>
</div>
<!-- Блок 2: Дорога в Териберку -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Road to&nbsp;Teriberka is&nbsp;an&nbsp;Unforgettable Adventure</h2>
        <p class="modalBlock__description">
            The 120&nbsp;km route from Murmansk to&nbsp;Teriberka is&nbsp;an&nbsp;unforgettable adventure in&nbsp;itself. The road passes through harsh yet majestic landscapes: endless tundra, formidable sopkas, deep gorges, and picturesque passes holding centuries-old secrets.
        </p>
        <p class="modalBlock__description">
            It&nbsp;allows you to&nbsp;feel the scale and power of&nbsp;the Arctic nature, witness the changing landscapes, and prepare for the encounter with the ocean.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_2.jpg" alt="Road through tundra and sopkas to Teriberka" loading="lazy">
    </div>
</div>
<!-- Блок 3: Природный парк и достопримечательности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Nature Park and Attractions</h2>
        <p class="modalBlock__description">
            Opposite the settlement, on&nbsp;the other side of&nbsp;the Teriberka River, lies the Teriberka Nature Park (a&nbsp;permit is&nbsp;required for visiting), the smallest but most popular specially protected natural area in&nbsp;the Murmansk Region.
        </p>
        <p class="modalBlock__description">
            Here, you will find well-known landmarks: Dragon Eggs Beach with its enormous boulders, waterfalls, and bird colonies. A&nbsp;legacy from the Great Patriotic War has also been preserved&nbsp;&mdash; an&nbsp;artillery battery from the 1930s on&nbsp;a&nbsp;hilltop. Nearby is&nbsp;the famous &laquo;ship graveyard&raquo;&nbsp;&mdash; the remains of&nbsp;fishing trawlers from the 1930s&mdash;1950s lying on&nbsp;the shoal of&nbsp;Teriberka Bay (Teriberskaya Guba).
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_3.jpg" alt="Dragon Eggs Beach and ship graveyard in Teriberka" loading="lazy">
    </div>
</div>
<!-- Блок 4: Активный отдых в любое время года -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Active Recreation Year-Round</h2>
        <p class="modalBlock__description">
            In&nbsp;summer, you can go&nbsp;surfing, diving, and snorkeling here or&nbsp;take a&nbsp;boat trip in&nbsp;search of&nbsp;whales, which sometimes enter the coastal waters. The coastline with its bays and capes is&nbsp;ideal for sea excursions and photography.
        </p>
        <p class="modalBlock__description">
            In&nbsp;winter, you can ride snowmobiles and hunt for the northern lights. Teriberka is&nbsp;considered one of&nbsp;the best places in&nbsp;the region for observing the aurora borealis due to&nbsp;its distance from city lights and clear skies.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_4.jpg" alt="Surfing in summer and northern lights in winter in Teriberka" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;Teriberka</h2>
        <p class="modalBlock__description">
            <strong>By&nbsp;public transport:</strong> A&nbsp;daily bus runs to&nbsp;the settlement from the Murmansk bus station. It&nbsp;is&nbsp;best to&nbsp;check the schedule in&nbsp;advance, as&nbsp;it&nbsp;may change depending on&nbsp;the season.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> From Murmansk to&nbsp;the settlement via the highway; travel time is&nbsp;about 2&nbsp;hours (130&nbsp;km). The road is&nbsp;paved, but in&nbsp;winter it&nbsp;requires attention and preparing the car for Arctic conditions. It&nbsp;is&nbsp;recommended to&nbsp;have a&nbsp;full tank of&nbsp;fuel and proven winter tires.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/teriberka/kak_dobratsya.jpg" alt="Route map from Murmansk to Teriberka with landmarks" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Полуостров Рыбачий-----------------------------------------------------------
        {
            id: 'poluostrov_rybachii',
            title: 'Rybachy Peninsula',
            image: '../../img/murmansk/cards_tochki/Poluostrov_Rybachiy_0.jpg',
            modalContent:


`<div class="modalHeader">
    <h1 class="modalHeader__title">Sredny and Rybachy Peninsulas</h1>
</div>
<!-- Блок 1: Самый север региона -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Region&rsquo;s Northernmost Point on&nbsp;the Border with Norway</h2>
        <p class="modalBlock__description">
            The Sredny and Rybachy Peninsulas are the northernmost part of&nbsp;the region, almost on&nbsp;the border with Norway. Here lies Cape Nemetsky (German), the northernmost continental point of&nbsp;European Russia.
        </p>
        <p class="modalBlock__description">
            The nature park on&nbsp;both peninsulas attracts travelers with the harsh beauty of&nbsp;its landscapes and rich heritage. During the Great Patriotic War, fierce battles to&nbsp;defend the Arctic from fascist invaders took place here. The legendary Mustatunturi Range was the arena for prolonged and bloody battles.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_1.jpg" alt="Cape Nemetsky, the northernmost point, and Mustatunturi Range" loading="lazy">
    </div>
</div>
<!-- Блок 2: Историческое наследие -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Historical Heritage: From Antiquity to&nbsp;War</h2>
        <p class="modalBlock__description">
            This land has preserved its history since ancient times: People settled here even before the Common Era, and in&nbsp;the 16th century, a&nbsp;busy trade route passed through these territories. Petroglyphs&nbsp;&mdash; rock engravings from the 3rd to&nbsp;1st centuries BC&nbsp;&mdash; are found here.
        </p>
        <p class="modalBlock__description">
            After the Soviet-Finnish War, these territories were ceded to&nbsp;the Soviet Union. Today, the area holds numerous testimonies to&nbsp;those heroic years: preserved pillboxes, mass graves, remains of&nbsp;defensive structures, and monuments to&nbsp;the defenders of&nbsp;the Soviet Arctic.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_2.jpg" alt="Petroglyphs and preserved military fortifications" loading="lazy">
    </div>
</div>
<!-- Блок 3: Природные достопримечательности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Natural Attractions</h2>
        <p class="modalBlock__description">
            The coast of&nbsp;the Barents Sea captivates with its wild, pristine power. Among the main natural landmarks are Cape Kekursky with its steep range plunging into the waters of&nbsp;the Barents Sea and the Two Brothers Rocks&nbsp;&mdash; tall sea stacks surrounded by&nbsp;many legends.
        </p>
        <p class="modalBlock__description">
            The picturesque bird colonies on&nbsp;the peninsula&rsquo;s cliffs are astounding in&nbsp;their scale&nbsp;&mdash; thousands of&nbsp;seabirds nest here, along with rare predators like rough-legged buzzards and peregrine falcons. Marine life can be&nbsp;observed in&nbsp;the coastal waters.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_3.jpg" alt="Two Brothers Rocks and bird colonies on the coastline" loading="lazy">
    </div>
</div>
<!-- Блок 4: Инфраструктура и активный отдых -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Infrastructure and Active Recreation</h2>
        <p class="modalBlock__description">
            In&nbsp;recent years, tourist infrastructure has begun to&nbsp;develop in&nbsp;these areas. On&nbsp;the Sredny Peninsula, for example, the eco-friendly Whale Coast Arctic Hotel is&nbsp;located. Besides picturesque huts with ocean views, it&nbsp;offers tundra treks, jeep safaris, and yacht tours to&nbsp;search for crabs and whales.
        </p>
        <p class="modalBlock__description">
            Enjoying pristine nature, hunting for the northern lights, and even venturing into the open sea&nbsp;&mdash; all of&nbsp;this is&nbsp;becoming accessible to&nbsp;travelers ready for the harsh yet incredibly beautiful conditions of&nbsp;the Arctic.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_4.jpg" alt="Whale Coast Arctic Hotel and yacht tours off the coast" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться и важная информация -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There and Important Information</h2>
        <p class="modalBlock__description">
            <strong>Important:</strong> To&nbsp;visit this specially protected natural area (SPNA), a&nbsp;permit shall be&nbsp;obtained in&nbsp;advance. This can be&nbsp;done through the nature park&rsquo;s administration or&nbsp;specialized travel agencies.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> From Murmansk, take the R-21 Kola Highway; the landmark is&nbsp;the checkpoint at&nbsp;the Titovka River. It&nbsp;is&nbsp;advisable to&nbsp;travel in&nbsp;well-prepared off-road vehicles accompanied by&nbsp;experienced guides, as&nbsp;the roads on&nbsp;the peninsulas are challenging and weather conditions can change abruptly.
        </p>
        <p class="modalBlock__description">
            There are several glamping sites and Arctic hotels on&nbsp;the peninsulas where you can stay. Reservation in&nbsp;advance is&nbsp;recommended, especially during the summer season and the northern lights viewing period.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/kak_dobratsya.jpg" alt="Map of the Sredny and Rybachy Peninsulas with checkpoint and accommodation" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Баренцево море-----------------------------------------------------------
        {
            id: 'barentcevo_more',
            title: 'Barents Sea',
            image: '../../img/murmansk/cards_tochki/Barencevo_more_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Barents Sea</h1>
</div>
<!-- Блок 1: Крупнейшее море Северного Ледовитого океана -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Largest Sea in&nbsp;the Arctic Ocean</h2>
        <p class="modalBlock__description">
            The Barents Sea is&nbsp;the largest in&nbsp;terms of&nbsp;area among the seas of&nbsp;the Arctic Ocean. Its vast territory is&nbsp;1.5 times larger than the Kara Sea and 15&nbsp;times larger than the White Sea.
        </p>
        <p class="modalBlock__description">
            People come here for the unique aesthetic of&nbsp;the Russian North&nbsp;&mdash; to&nbsp;go&nbsp;diving, see the northern lights, and observe whales and fur seals. The sea retains its harsh beauty year-round.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_1.jpg" alt="Panorama of the Barents Sea with icy expanses and icebergs" loading="lazy">
    </div>
</div>
<!-- Блок 2: География и климат -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Geography and Climate</h2>
        <p class="modalBlock__description">
            The Barents Sea is&nbsp;located in&nbsp;the western part of&nbsp;the Arctic Ocean and washes the shores of&nbsp;Russia and Norway. Due to&nbsp;the influence of&nbsp;the warm Gulf Stream, some areas, including the waters of&nbsp;the port of&nbsp;Murmansk, remain ice-free all year.
        </p>
        <p class="modalBlock__description">
            However, a&nbsp;significant part of&nbsp;the sea is&nbsp;covered with ice for several months, and navigation here is&nbsp;only possible with icebreaker assistance. In&nbsp;winter, the polar night and piercing cold dominate, while summer brings only a&nbsp;slight warming.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_2.jpg" alt="Icebreaker in the Barents Sea and severe icy expanses" loading="lazy">
    </div>
</div>
<!-- Блок 3: Береговая линия и пейзажи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Coastline and Scenery</h2>
        <p class="modalBlock__description">
            The coastline of&nbsp;the Barents Sea is&nbsp;predominantly rocky and inaccessible, though cozy bays with sandy beaches can also be&nbsp;found. While these beaches are located beyond the Arctic Circle and are not suited for traditional beach holidays, in&nbsp;exceptionally warm seasons, it&nbsp;is&nbsp;possible to&nbsp;sunbathe and even swim here.
        </p>
        <p class="modalBlock__description">
            Most of&nbsp;the coast consists of&nbsp;rocky shores, cliff formations, and cold waters of&nbsp;a&nbsp;leaden-gray hue. These severe landscapes possess a&nbsp;unique charm and attract those who seek to&nbsp;stand at&nbsp;the edge of&nbsp;the world and feel the breath of&nbsp;eternity.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_3.jpg" alt="Rocky shores of the Barents Sea and cozy sandy bays" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> Several highways lead from Murmansk to&nbsp;the coast. The Teriberka Nature Park, a&nbsp;popular spot to&nbsp;experience the Barents Sea, is&nbsp;a&nbsp;two-hour drive (130&nbsp;km) away.
        </p>
        <p class="modalBlock__description">
            From Murmansk, you can also book a&nbsp;land-based tour or&nbsp;a&nbsp;cruise along the Kola Bay. Many travel companies offer sea excursions, including whale and bird watching.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_4.jpg" alt="Map of the Barents Sea coast with routes from Murmansk" loading="lazy">
    </div>
</div>`
        }

    ],

//--------------------------------------ВЫБРАТЬСЯ НА ПРИРОДУ-----------------------------------------------------------
//--------------------------------------ВЫБРАТЬСЯ НА ПРИРОДУ-----------------------------------------------------------


    nature: [
        {
            id: 'laplandsii_zapovednik',
            title: 'Lapland Nature Reserve',
            image: '../../img/murmansk/cards_nature/Laplandskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Lapland Nature Reserve</h1>
</div>
<!-- Блок 1: Создание и статус -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Established in&nbsp;1930</h2>
        <p class="modalBlock__description">
            Lapland Nature Reserve was established in&nbsp;1930 to&nbsp;protect the wild reindeer and unique taiga. It&nbsp;is&nbsp;a&nbsp;perfect place to&nbsp;get acquainted with the nature of&nbsp;the Kola Peninsula and is&nbsp;part of&nbsp;UNESCO&rsquo;s World Network of&nbsp;Biosphere Reserves.
        </p>
        <p class="modalBlock__description">
            One of&nbsp;its founders was Oleg Semyonov-Tyan-Shansky, a&nbsp;Soviet biologist and naturalist and grandson of&nbsp;the famous explorer Pyotr Petrovich Semyonov-Tyan-Shansky. He&nbsp;dedicated over half a&nbsp;century of&nbsp;his life to&nbsp;studying this unique nature.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_1.jpg" alt="Landscapes of the Lapland Nature Reserve with forests and mountains" loading="lazy">
    </div>
</div>
<!-- Блок 2: Масштабы и природа -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Scale and Natural Diversity</h2>
        <p class="modalBlock__description">
            The nature reserve is&nbsp;impressive in&nbsp;its scale, covering an&nbsp;area of&nbsp;about 280,000&nbsp;hectares, making it&nbsp;one of&nbsp;the largest protected areas in&nbsp;Northern Europe. It&nbsp;showcases almost the entire landscape diversity of&nbsp;the Kola Peninsula: forests, rivers, swamps, lakes, cliffs, and mountain tundras.
        </p>
        <p class="modalBlock__description">
            The old-growth forests are a&nbsp;particular point of&nbsp;pride: Over&nbsp;50% of&nbsp;its area is&nbsp;covered by&nbsp;pine and spruce forests over 300 years old, which is&nbsp;uncharacteristic for other regions in&nbsp;the area.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_2.jpg" alt="Old-growth forests and wild reindeer in the nature reserve" loading="lazy">
    </div>
</div>
<!-- Блок 3: Фауна и музеи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Fauna and Museum Sites</h2>
        <p class="modalBlock__description">
            The nature reserve&rsquo;s fauna includes nearly 1,000 individuals of&nbsp;the endangered wild reindeer, as&nbsp;well as&nbsp;rare birds such as&nbsp;golden eagles, white-tailed eagles, and eagle-owls.
        </p>
        <p class="modalBlock__description">
            For tourists, the reserve has several key sites. The exposition &laquo;In&nbsp;the Land of&nbsp;the Flying Stone&raquo; introduces the life of&nbsp;the indigenous Sami people. The central natural feature is&nbsp;Lake Chunozero with its extensive shoreline. On&nbsp;its shore are the house-museum of&nbsp;the first director, German Kreps, and the apartment-museum of&nbsp;Semyonov-Tyan-Shansky.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_3.jpg" alt="An exposition about the Sami and a house-museum in the nature reserve" loading="lazy">
    </div>
</div>
<!-- Блок 4: Экотропы и как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Eco-Trails and How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            Particularly popular are the eco-trails: The ascent to&nbsp;Mount Vtoroy Yelnyun with its sacred Sami stone, the seid; the circular trail &laquo;Along the Lake&raquo; with equipped boardwalks; and the special children&rsquo;s trail &laquo;Forest Pochemuchka&raquo; with Baba Yaga&rsquo;s izba. For family visits, there is&nbsp;the wooden Ded Moroz&rsquo;s terem.
        </p>
        <p class="modalBlock__description">
            <strong>How to&nbsp;get there:</strong> By&nbsp;car from Monchegorsk: The drive to&nbsp;the nature reserve&rsquo;s central estate takes 35&nbsp;minutes (45&nbsp;km). By&nbsp;car from Murmansk: The route via the R-21 Kola Highway takes 2.5 hours (175&nbsp;km).
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_4.jpg" alt="Eco-trails in the nature reserve and route map" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Терский берег Белого моря-----------------------------------------------------------
        {
            id: 'terskii_bereg_belogo_morya',
            title: 'Tersky Coast of the White Sea',
            image: '../../img/murmansk/cards_nature/Terskiy_bereg_Belogo_morya_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Tersky Coast of&nbsp;the White Sea</h1>
</div>
<!-- Блок 1: Самобытная историческая область -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Distinctive Historical Area</h2>
        <p class="modalBlock__description">
            The Tersky Coast is&nbsp;the southern tip of&nbsp;the Kola Peninsula and the northern coast of&nbsp;the White Sea. This distinctive historical area stretches for hundreds of&nbsp;kilometers, astounding with its harsh and majestic landscapes.
        </p>
        <p class="modalBlock__description">
            It&nbsp;is&nbsp;like a&nbsp;vast open-air museum of&nbsp;Pomor culture: The villages (called tonyas) here have preserved not only forgotten northern wooden architecture but also the almost-lost Pomor culture.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_1.jpg" alt="Panorama of the Tersky Coast with harsh landscapes" loading="lazy">
    </div>
</div>
<!-- Блок 2: Уникальный уголок природы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Unique Natural Corner</h2>
        <p class="modalBlock__description">
            The Tersky Coast is&nbsp;one of&nbsp;the most distinctive locations on&nbsp;the Kola Peninsula, where the majestic White Sea meets the endless expanses of&nbsp;the northern tundra. This unique natural corner stretches for hundreds of&nbsp;kilometers along the southeastern coast.
        </p>
        <p class="modalBlock__description">
            Here, rocky capes unexpectedly give way to&nbsp;the golden and even reddish-brown dunes of&nbsp;the Kuzomen Sands, while rich bird colonies neighbor reindeer pastures. The northern lights add a&nbsp;special charm to&nbsp;these places.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_2.jpg" alt="Kuzomen Sands dunes and bird colonies on the Tersky Coast" loading="lazy">
    </div>
</div>
<!-- Блок 3: Культурное наследие -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Cultural Heritage and Opportunities</h2>
        <p class="modalBlock__description">
            This land holds the centuries-old heritage of&nbsp;the Northern indigenous peoples. Ancient monuments and artifacts speak of&nbsp;the distinctive culture, traditions, and spiritual practices of&nbsp;the Pomors.
        </p>
        <p class="modalBlock__description">
            For travelers, the Tersky Coast offers numerous opportunities, from exhilarating hiking trails and sea excursions to&nbsp;immersion in&nbsp;the unique cultural heritage of&nbsp;this harsh land. Everyone who visits takes a&nbsp;piece of&nbsp;its incredible atmosphere with them.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_3.jpg" alt="Old Pomor buildings and cultural artifacts" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> From Kandalaksha, head east along the coast of&nbsp;the bay. It&nbsp;is&nbsp;advisable to&nbsp;travel here in&nbsp;well-prepared off-road vehicles accompanied by&nbsp;experienced guides, as&nbsp;roads in&nbsp;these areas can be&nbsp;challenging, especially during the off-season and winter.
        </p>
        <p class="modalBlock__description">
            It&nbsp;is&nbsp;recommended to&nbsp;plan the trip in&nbsp;advance, taking into account the remoteness and specific nature of&nbsp;the terrain. Many travel companies offer organized tours with experienced guides who know the specifics of&nbsp;the Tersky Coast.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_4.jpg" alt="Map of the Tersky Coast with routes from Kandalaksha" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Кандалакшский заповедник-----------------------------------------------------------
        {
            id: 'kandalakshkii_zapovednik',
            title: 'Kandalaksha Nature Reserve',
            image: '../../img/murmansk/cards_nature/Kandalakshskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Kandalaksha Nature Reserve</h1>
</div>
<!-- Блок 1: Заповедник на двух морях -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Nature Reserve on&nbsp;Two Seas</h2>
        <p class="modalBlock__description">
            Kandalaksha Nature Reserve&rsquo;s harsh shores are washed by&nbsp;the waters of&nbsp;the Barents and White Seas, and it&nbsp;encompasses over 550&nbsp;islands. The reserve was established on&nbsp;September&nbsp;7, 1932, to&nbsp;protect the common eider, a&nbsp;sea duck famous for its valuable down.
        </p>
        <p class="modalBlock__description">
            Kandalaksha Nature Reserve is&nbsp;located on&nbsp;the shores of&nbsp;the eponymous White Sea bay and a&nbsp;group of&nbsp;islands in&nbsp;the Barents Sea: Over&nbsp;70% of&nbsp;its territory is&nbsp;marine waters, and its main inhabitants are waterfowl.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_1.jpg" alt="Islands of the Kandalaksha Nature Reserve and seabirds" loading="lazy">
    </div>
</div>
<!-- Блок 2: Территория и география -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Area and Geography</h2>
        <p class="modalBlock__description">
            The total area of&nbsp;the nature reserve is&nbsp;70,530&nbsp;hectares, of&nbsp;which 49,583 hectares (almost&nbsp;75%) are marine waters. The territory includes several archipelagos: the Aynovskiye and Gavrilovskiye Islands, the Seven Islands Archipelago in&nbsp;the Barents Sea, and islands in&nbsp;Kandalaksha Bay of&nbsp;the White Sea.
        </p>
        <p class="modalBlock__description">
            The nature reserve is&nbsp;situated in&nbsp;tundra and northern taiga zones, with its sections distributed across five districts of&nbsp;the Murmansk Region and the Loukhsky District of&nbsp;Karelia.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_2.jpg" alt="Archipelagos map of the Kandalaksha Nature Reserve" loading="lazy">
    </div>
</div>
<!-- Блок 3: Фауна и обитатели -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Fauna and Inhabitants</h2>
        <p class="modalBlock__description">
            Kandalaksha Nature Reserve is&nbsp;an&nbsp;important center for ornithological research. It&nbsp;is&nbsp;home to&nbsp;colonial seabirds and marine mammals: the ringed seal, bearded seal, gray seal, and, occasionally, the beluga whale.
        </p>
        <p class="modalBlock__description">
            When traveling through Kandalaksha Bay, it&nbsp;is&nbsp;common to&nbsp;observe seals. Belugas also occasionally visit. The nature reserve plays a&nbsp;key role in&nbsp;preserving the population of&nbsp;the common eider and other seabirds.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_3.jpg" alt="Common eiders and seals in the nature reserve" loading="lazy">
    </div>
</div>
<!-- Блок 4: Музей природы и как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Nature Museum and How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            A&nbsp;good starting point is&nbsp;the reserve&rsquo;s Nature Museum in&nbsp;Kandalaksha. Its exposition features materials on&nbsp;the history of&nbsp;the reserve, its nature, and its inhabitants. The museum provides an&nbsp;excellent overview of&nbsp;the region&rsquo;s unique ecosystem.
        </p>
        <p class="modalBlock__description">
            <strong>Visitor Center address:</strong> 35&nbsp;Lineynaya St., Kandalaksha. <strong>Details</strong> about opening hours, excursions, and visiting rules are available on&nbsp;the nature reserve&rsquo;s official website. It&nbsp;is&nbsp;recommended to&nbsp;check the information in&nbsp;advance, especially if&nbsp;planning to&nbsp;visit the islands.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_4.jpg" alt="Nature Museum in Kandalaksha and location map" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Ловозерские тундры-----------------------------------------------------------
        {
            id: 'lovoserskiye_tundri',
            title: 'Lovozero Massif',
            image: '../../img/murmansk/cards_nature/Lovozerskie_tundry_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Lovozero Massif</h1>
</div>
<!-- Блок 1: Величественный массив -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Majestic Massif</h2>
        <p class="modalBlock__description">
            The Lovozero Massif (Lovozero Tundras), the second-largest mountain range on&nbsp;the Kola Peninsula after the Khibiny, is&nbsp;situated between Lake Umbozero and Lake Lovozero. It&nbsp;is&nbsp;shaped like a&nbsp;horseshoe, inside which lies the sacred Sami Lake Seydozero.
        </p>
        <p class="modalBlock__description">
            This is&nbsp;a&nbsp;realm of&nbsp;crystal lakes, winding rivers, and ringing streams, preserving its pristine beauty. The word &laquo;tundras&raquo; comes from the Finnish &laquo;tunturi,&raquo; meaning &laquo;a&nbsp;treeless, flat-topped mountain&raquo;&nbsp;&mdash; a&nbsp;characteristic type of&nbsp;local peak just above 1,000&nbsp;meters.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_1.jpg" alt="View of the Lovozero Massif and the horseshoe-shaped valley" loading="lazy">
    </div>
</div>
<!-- Блок 2: Геология и рельеф -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Geology and Terrain</h2>
        <p class="modalBlock__description">
            The unique terrain of&nbsp;the massif was formed by&nbsp;a&nbsp;powerful magma breakthrough through the earth&rsquo;s crust, creating gentle slopes and a&nbsp;distinctive layer structure. Geologically, it&nbsp;is&nbsp;a&nbsp;sibling of&nbsp;the Khibiny Mountains.
        </p>
        <p class="modalBlock__description">
            It&nbsp;was near Seydozero, considered the sacred center of&nbsp;the tundras, that the ancient magma emerged. Here, among fantastical rocks and deep valleys, lie special &laquo;power spots&raquo; revered by&nbsp;the Sami since ancient times.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_2.jpg" alt="Rocks and valleys of the Lovozero Massif" loading="lazy">
    </div>
</div>
<!-- Блок 3: Сакральное сердце тундр -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sacred Heart of&nbsp;the Tundras</h2>
        <p class="modalBlock__description">
            The sacred Seydozero and the mysterious Raslaka Cirques are special places that attract seekers of&nbsp;ancient mysteries. According to&nbsp;legends, the spirits of&nbsp;ancestors dwell in&nbsp;Seydozero, and the origin of&nbsp;the cirques is&nbsp;still debated among researchers.
        </p>
        <p class="modalBlock__description">
            The indigenous Sami people have inhabited these tundras since the 14th century, making the Lovozero settlement the spiritual and cultural center of&nbsp;their land. Their traditions and beliefs are inextricably linked to&nbsp;this landscape.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_3.jpg" alt="Seydozero surrounded by mountains" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            Trails through the tundras start from the Lovozero or&nbsp;Revda settlements. They can be&nbsp;reached by&nbsp;car, turning off the Kola Highway near Olenegorsk.
        </p>
        <p class="modalBlock__description">
            <strong>Important:</strong> Access to&nbsp;some sacred sites, especially near Seydozero, may be&nbsp;regulated. It&nbsp;is&nbsp;recommended to&nbsp;respect local traditions and clarify access possibilities in&nbsp;advance. This is&nbsp;a&nbsp;harsh and beautiful land of&nbsp;pristine nature in&nbsp;the Russian North.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_4.jpg" alt="Road to the Lovozero Massif and map" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Остров Кильдин-----------------------------------------------------------
        {
            id: 'ostrov_kildin',
            title: 'Kildin Island',
            image: '../../img/murmansk/cards_nature/Ostrov_Kildin_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Kildin Island</h1>
</div>
<!-- Блок 1: Каменный страж -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Stone Guard</h2>
        <p class="modalBlock__description">
            Kildin Island rises from the Barents Sea at&nbsp;the exit of&nbsp;the Kola Bay, like a&nbsp;stone guardian of&nbsp;the Arctic frontiers. It&nbsp;possesses not only fantastic beauty but also a&nbsp;dramatic history full of&nbsp;mysteries.
        </p>
        <p class="modalBlock__description">
            The first mentions of&nbsp;the island date back to&nbsp;the mid-16th century, and in&nbsp;the early 17th century, the sailor William Barents plotted its precise contours on&nbsp;all sea charts.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_1.jpg" alt="View of Kildin Island from the sea" loading="lazy">
    </div>
</div>
<!-- Блок 2: Наследие военного прошлого -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Legacy of&nbsp;the Military Past</h2>
        <p class="modalBlock__description">
            Kildin gained true fame in&nbsp;Soviet times when a&nbsp;powerful military base with underground facilities, missile factories, and silos was built here.
        </p>
        <p class="modalBlock__description">
            At&nbsp;its peak, the garrison numbered up&nbsp;to&nbsp;15,000&nbsp;people. Today, only rusty machinery, remnants of&nbsp;airstrip pavement, and underground labyrinths remind visitors of&nbsp;its former grandeur, leaving an&nbsp;indelible impression.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_2.jpg" alt="Remains of military vehicles and constructions on Kildin" loading="lazy">
    </div>
</div>
<!-- Блок 3: Экологическое возрождение и феномен -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Revival and Natural Phenomenon</h2>
        <p class="modalBlock__description">
            Today, Kildin is&nbsp;becoming a&nbsp;center of&nbsp;ecological revival. As&nbsp;part of&nbsp;the &laquo;Arctic. General Cleanup&raquo; expedition by&nbsp;the Russian Geographical Society, experts and volunteers are conducting large-scale work to&nbsp;clear the island of&nbsp;its military legacy.
        </p>
        <p class="modalBlock__description">
            A&nbsp;unique landmark is&nbsp;Lake Mogilnoye. This is&nbsp;a&nbsp;natural phenomenon where both marine and freshwater organisms coexist, including the rare lake cod (Gadus morhua kildinensis). It&nbsp;is&nbsp;the only such water body in&nbsp;Russia.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_3.jpg" alt="Cleanup on the island and Lake Mogilnoye" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            Access to&nbsp;the island is&nbsp;possible only by&nbsp;sea. You can get there from Murmansk or&nbsp;Teriberka by&nbsp;motorboat or&nbsp;on&nbsp;specialized cruises along the Barents Sea coast.
        </p>
        <p class="modalBlock__description">
            <strong>Please note:</strong> Visiting the island requires thorough preparation and permits due to&nbsp;the border zone status, and it&nbsp;can be&nbsp;challenging due to&nbsp;complex logistics and weather conditions. It&nbsp;is&nbsp;recommended to&nbsp;plan the trip through verified organizers.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_4.jpg" alt="Boat off the coast of Kildin and route map" loading="lazy">
    </div>
</div>`
        },
//--------------------------------------Сейдъявврь-----------------------------------------------------------
        {
            id: 'seydavr',
            title: 'Seydyavvr',
            image: '../../img/murmansk/cards_nature/Seydyavr_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Seydyavvr Nature Park</h1>
</div>
<!-- Блок 1: Священное место -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sacred Place</h2>
        <p class="modalBlock__description">
            The nature park with the complex Sami name &laquo;Seydyavvr&raquo; (translated as&nbsp;&laquo;sacred&raquo;) protects the legendary Lake Seydozero and the adjoining canyons of&nbsp;rivers and streams flowing into it&nbsp;in&nbsp;the heart of&nbsp;the Lovozero Massif.
        </p>
        <p class="modalBlock__description">
            For the indigenous people, these places have been considered sacred since time immemorial. According to&nbsp;legends, it&nbsp;is&nbsp;here that the mysterious Hyperborean civilization was located.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_1.jpg" alt="Panorama of Seydyavvr Nature Park and Seydozero" loading="lazy">
    </div>
</div>
<!-- Блок 2: Озеро Сейдозеро -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Mystery Lake</h2>
        <p class="modalBlock__description">
            Lake Seydozero, lying at&nbsp;an&nbsp;altitude of&nbsp;189&nbsp;meters, stretches for 8&nbsp;km through the tundra. Its crystal waters are likened to&nbsp;a&nbsp;mirror, and its unique microclimate allows trees not typical for the Far North&nbsp;&mdash; aspen and alder&nbsp;&mdash; to&nbsp;grow here.
        </p>
        <p class="modalBlock__description">
            Scientists debate the origin of&nbsp;this place: Some see the crater of&nbsp;an&nbsp;extinct volcano, others suggest traces of&nbsp;ancient activity. Enthusiasts believe Seydozero was the center of&nbsp;Hyperborea.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_2.jpg" alt="View of the mirror-like surface of Seydozero" loading="lazy">
    </div>
</div>
<!-- Блок 3: Легенда о Куйве -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Legend Frozen in&nbsp;Stone</h2>
        <p class="modalBlock__description">
            The main mystical attraction is&nbsp;the giant image of&nbsp;a&nbsp;warrior-hunter on&nbsp;a&nbsp;cliff, called Kuiva. This silhouette, over 70&nbsp;meters tall, is, according to&nbsp;ancient Sami legend, a&nbsp;cruel giant turned to&nbsp;stone forever by&nbsp;the gods.
        </p>
        <p class="modalBlock__description">
            The nature reserve was created to&nbsp;preserve not only the unique nature but also the cultural heritage of&nbsp;the Sami people. Locals advise asking permission from the spirits&nbsp;&mdash; seids&nbsp;&mdash; which, according to&nbsp;belief, inhabit the enormous boulders.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_3.jpg" alt="Kuiva's image on a cliff near Seydozero" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться и правила -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There and Visiting Regulations</h2>
        <p class="modalBlock__description">
            The journey to&nbsp;Seydozero begins in&nbsp;the Lovozero settlement. To&nbsp;reach the lake, sheltered by&nbsp;mountains, you can go&nbsp;on&nbsp;foot through the Lovozero Massif pass or&nbsp;by&nbsp;boat across Lake Lovozero, followed by&nbsp;a&nbsp;walk across the isthmus.
        </p>
        <p class="modalBlock__description">
            <strong>Important:</strong> A&nbsp;special permit is&nbsp;required to&nbsp;visit the Seydyavvr Nature Park It&nbsp;shall be&nbsp;obtained in&nbsp;advance. Strict rules of&nbsp;conduct in&nbsp;the protected area shall be&nbsp;observed, and places sacred to&nbsp;the Sami people shall be&nbsp;respected.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_4.jpg" alt="Trail to Seydozero and park information board" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Заповедник «Пасвик»-----------------------------------------------------------
        {
            id: 'zapovednik_pasvik',
            title: 'Pasvik Nature Reserve',
            image: '../../img/murmansk/cards_nature/Paskvik_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Pasvik Nature Reserve</h1>
</div>
<!-- Блок 1: Пограничный заповедник -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Border Nature Reserve</h2>
        <p class="modalBlock__description">
            The youngest nature reserve in&nbsp;the Murmansk Region was created to&nbsp;preserve and study unique wetlands and the rich fauna of&nbsp;waterfowl.
        </p>
        <p class="modalBlock__description">
            Its territory is&nbsp;a&nbsp;narrow strip stretching 44&nbsp;km along the Russian-Norwegian border. It&nbsp;is&nbsp;the only nature reserve in&nbsp;Russia entirely located in&nbsp;a&nbsp;border zone.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_1.jpg" alt="View of the Pasvik River valley and the nature reserve's forests" loading="lazy">
    </div>
</div>
<!-- Блок 2: Зеленый пояс Фенноскандии -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">In&nbsp;the Heart of&nbsp;the Green Belt</h2>
        <p class="modalBlock__description">
            Pasvik is&nbsp;a&nbsp;key part of&nbsp;the Fennoscandian Green Belt&nbsp;&mdash; an&nbsp;international project to&nbsp;preserve old-growth forests along the borders of&nbsp;Russia, Finland, and Norway.
        </p>
        <p class="modalBlock__description">
            A&nbsp;quarter of&nbsp;the nature reserve&rsquo;s area is&nbsp;wetlands. It&nbsp;is&nbsp;situated at&nbsp;the boundary of&nbsp;the northern taiga and forest-tundra, in&nbsp;the zone of&nbsp;subarctic forests. The contrasting landscapes of&nbsp;this area are breathtaking.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_2.jpg" alt="Old-growth forest and wetlands of Pasvik" loading="lazy">
    </div>
</div>
<!-- Блок 3: Визит-центр и Музей природы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visitor Center and Nature Museum</h2>
        <p class="modalBlock__description">
            A&nbsp;good starting point to&nbsp;get acquainted with the nature reserve is&nbsp;the modern visitor center in&nbsp;Nikel&nbsp;&mdash; a&nbsp;hub for eco-tourists and scientists. It&nbsp;hosts workshops, scientific seminars, and cultural events.
        </p>
        <p class="modalBlock__description">
            In&nbsp;January 2022, a&nbsp;modern Nature Museum with a&nbsp;multimedia exposition dedicated to&nbsp;the unique beauty and biodiversity of&nbsp;this Arctic region opened here.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_3.jpg" alt="Visitor Center building and Nature Museum exposition in Nikel" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            The main access point for tourists is&nbsp;the nature reserve&rsquo;s visitor center. It&nbsp;is&nbsp;located in&nbsp;Nikel, which can be&nbsp;reached by&nbsp;car from Murmansk or&nbsp;Zapolyarny.
        </p>
        <p class="modalBlock__description">
            <strong>Visitor Center address:</strong> 43&nbsp;Gvardeysky Prospekt, Nikel. <strong>Details</strong> about opening hours, excursions, and visiting rules for the reserve&rsquo;s territory itself (which is&nbsp;a&nbsp;border zone) are available on&nbsp;the nature reserve&rsquo;s official website. All visits shall be&nbsp;arranged in&nbsp;advance.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_4.jpg" alt="Road to Nikel and location map of the visitor center" loading="lazy">
    </div>
</div>`
        }

    ],

//--------------------------------------КУЛЬТУРНЫЙ КОД-----------------------------------------------------------
//--------------------------------------КУЛЬТУРНЫЙ КОД-----------------------------------------------------------

    culture: [
        {
            id: 'dolina_slavy',
            title: 'Valley of Glory',
            image: '../../img/murmansk/cards_culture/dolina_slavy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Valley of&nbsp;Glory Memorial</h1>
</div>
<!-- Блок 1: Рубеж обороны -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Unbreakable Line</h2>
        <p class="modalBlock__description">
            The Valley of&nbsp;Glory Memorial Complex preserves the memory of&nbsp;the fiercest battles of&nbsp;the Great Patriotic War in&nbsp;the Arctic. Initially, soldiers called this place the &laquo;Valley of&nbsp;Death.&raquo;
        </p>
        <p class="modalBlock__description">
            Here, along the Mustatunturi Range and the Zapadnaya Litsa River, the front line ran from 1941 to&nbsp;1944. This was the only land-based frontline of&nbsp;the USSR that fascist troops failed to&nbsp;breach. Over&nbsp;1,195 days of&nbsp;fighting, more than 10,000 Soviet soldiers perished or&nbsp;went missing here.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_1.jpg" alt="Valley of Glory Memorial Complex and Mustatunturi Range" loading="lazy">
    </div>
</div>
<!-- Блок 2: Память и возрождение -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Memory and Rebirth</h2>
        <p class="modalBlock__description">
            After the war, the area was proudly renamed the Valley of&nbsp;Glory. A&nbsp;memorial was created here, where the remains of&nbsp;the defenders of&nbsp;the Arctic rest. Search teams still find the remains of&nbsp;soldiers along the former frontline.
        </p>
        <p class="modalBlock__description">
            The first monument, Two Warriors, appeared here as&nbsp;early as&nbsp;the 1960s. Today, it&nbsp;is&nbsp;a&nbsp;modern complex with an&nbsp;Eternal Flame&nbsp;&mdash; a&nbsp;fragment of&nbsp;fire from the Alyosha Monument in&nbsp;Murmansk. The flame symbolizes eternal memory of&nbsp;the feat.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_2.jpg" alt="Eternal Flame and the Two Warriors Monument in the Valley of Glory" loading="lazy">
    </div>
</div>
<!-- Блок 3: Музей памяти -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Memorial Museum</h2>
        <p class="modalBlock__description">
            A&nbsp;modern museum on&nbsp;the complex&rsquo;s territory was solemnly opened last year. Its exposition reflects all stages of&nbsp;the military operations on&nbsp;the Murmansk front.
        </p>
        <p class="modalBlock__description">
            Authentic wartime artifacts are complemented by&nbsp;documentary films, audio recordings of&nbsp;eyewitness accounts, and interactive panels with information about nearly 35,000 defenders of&nbsp;the Arctic.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_3.jpg" alt="Museum exposition in the Valley of Glory" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            By&nbsp;car from Murmansk via the R-21 Kola Highway. The complex is&nbsp;located at&nbsp;kilometer 1447 of&nbsp;the highway.
        </p>
        <p class="modalBlock__description">
            <strong>Travel time:</strong> about 1&nbsp;hour (65&nbsp;km). The memorial serves not only as&nbsp;a&nbsp;place of&nbsp;remembrance but also as&nbsp;a&nbsp;reminder of&nbsp;the unparalleled courage of&nbsp;those who defended these harsh northern lands. Visiting is&nbsp;recommended for anyone who wants to&nbsp;understand the price of&nbsp;Victory in&nbsp;the Arctic.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_4.jpg" alt="Sign on the Kola Highway and road to the memorial" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Село Варзуга-----------------------------------------------------------
        {
            id: 'selo_varzuga',
            title: 'Varzuga Settlement',
            image: '../../img/murmansk/cards_culture/selo_varsuga_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Varzuga Settlement</h1>
</div>
<!-- Блок 1: Древнее поморское село -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Ancient Pomor Settlement</h2>
        <p class="modalBlock__description">
            Varzuga is&nbsp;one of&nbsp;the oldest and largest settlements on&nbsp;the Kola Peninsula, known since the 15th century. It&nbsp;is&nbsp;located on&nbsp;the Tersky Coast of&nbsp;the White Sea and is&nbsp;divided by&nbsp;the Varzuga River into two parts.
        </p>
        <p class="modalBlock__description">
            The historical Nikolskaya Side on&nbsp;the eastern bank is&nbsp;of&nbsp;particular value and can only be&nbsp;reached by&nbsp;boat. Here, time seems to&nbsp;have stood still, and the ancient houses create a&nbsp;unique architectural ensemble.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_1.jpg" alt="Panorama of Varzuga with the river and wooden houses" loading="lazy">
    </div>
</div>
<!-- Блок 2: Деревянное зодчество -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Treasury of&nbsp;Wooden Architecture</h2>
        <p class="modalBlock__description">
            Varzuga preserves a&nbsp;unique complex of&nbsp;historical monuments: the Church of&nbsp;St. Afanasiy the Great, the bell tower of&nbsp;the Assumption Complex, the Church of&nbsp;St. Nicholas the Wonderworker, the Peter and Paul Church, and the Chapel of&nbsp;the Nameless Monk.
        </p>
        <p class="modalBlock__description">
            On&nbsp;the hill where the Tre Fortress once stood, a&nbsp;large cross has been erected. From here, a&nbsp;view opens onto sandy dunes held in&nbsp;check by&nbsp;vegetation&nbsp;&mdash; a&nbsp;unique landscape of&nbsp;the Tersky Coast.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_2.jpg" alt="Wooden churches of Varzuga and view from the hill" loading="lazy">
    </div>
</div>
<!-- Блок 3: Успенская церковь -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Pearl of&nbsp;Varzuga</h2>
        <p class="modalBlock__description">
            The pride of&nbsp;the settlement is&nbsp;the Church of&nbsp;the Assumption, a&nbsp;beautiful example of&nbsp;17th-century wooden architecture. Built according to&nbsp;the golden ratio principle in&nbsp;the tented-roof style, it&nbsp;reaches a&nbsp;height of&nbsp;34&nbsp;meters.
        </p>
        <p class="modalBlock__description">
            Adorned with traditional kokoshniks (headdresses worn by&nbsp;married women) and wooden shingles, the church is&nbsp;striking in&nbsp;its perfection of&nbsp;proportions. Its iconostasis contains 84&nbsp;icons, some of&nbsp;which were created by&nbsp;masters from the Solovetsky Monastery.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_3.jpg" alt="Church of the Assumption in Varzuga – view from outside and inside" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            The most convenient starting point is&nbsp;Kandalaksha&nbsp;&mdash; the nearest major town. It&nbsp;is&nbsp;best to&nbsp;travel to&nbsp;Varzuga in&nbsp;a&nbsp;prepared vehicle, preferably accompanied by&nbsp;a&nbsp;guide familiar with local roads.
        </p>
        <p class="modalBlock__description">
            <strong>Travel time:</strong> about 3&nbsp;hours along the coast of&nbsp;Kandalaksha Bay. Varzuga harmoniously combines ancient traditions with modernity, remaining a&nbsp;living testament to&nbsp;the rich history and culture of&nbsp;the Pomor region.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_4.jpg" alt="Road to Varzuga along the White Sea coast" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Маяк Русский-----------------------------------------------------------
        {
            id: 'mayak_ruskii',
            title: 'Russky Lighthouse',
            image: '../../img/murmansk/cards_culture/mayak_russkii_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Russky Lighthouse</h1>
</div>
<!-- Блок 1: Страж Северного пути -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sentinel of&nbsp;the Northern Route</h2>
        <p class="modalBlock__description">
            The Russky Lighthouse on&nbsp;Bolshoy Oleny Island is&nbsp;one of&nbsp;the first navigational structures built to&nbsp;ensure the safety of&nbsp;the Northern Sea Route in&nbsp;the Barents Sea.
        </p>
        <p class="modalBlock__description">
            In&nbsp;the late 19th century, with the increase in&nbsp;shipping along the Murmansk coast, the need for a&nbsp;navigational system arose. The first lighthouse on&nbsp;the western tip of&nbsp;the island was erected in&nbsp;1925.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_1.jpg" alt="Russky Lighthouse on Bolshoy Oleny Island" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектура и история -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Architecture and History</h2>
        <p class="modalBlock__description">
            In&nbsp;1953, a&nbsp;monolithic reinforced concrete tower 28&nbsp;meters high was built to&nbsp;replace the old structure. It&nbsp;is&nbsp;painted yellow and topped with a&nbsp;red steel lantern room.
        </p>
        <p class="modalBlock__description">
            The lighthouse&rsquo;s architecture is&nbsp;characteristic of&nbsp;the Soviet period&nbsp;&mdash; strict functionality of&nbsp;form combined with structural reliability proven by&nbsp;Arctic storms. Its light remains an&nbsp;important guide for sailors.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_2.jpg" alt="Reinforced concrete lighthouse tower and lantern structure" loading="lazy">
    </div>
</div>
<!-- Блок 3: Остров-заповедник -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Island Nature Reserve</h2>
        <p class="modalBlock__description">
            Bolshoy Oleny Island, located 7&nbsp;km from the coast, is&nbsp;of&nbsp;particular value as&nbsp;a&nbsp;unique nature reserve of&nbsp;northern fauna. Its area is&nbsp;1.2&nbsp;sq.&nbsp;km.
        </p>
        <p class="modalBlock__description">
            Rare, red-listed birds nest here: eiders, terns, and numerous species of&nbsp;gulls and waders. Its convenient location on&nbsp;migration routes makes the island a&nbsp;perfect place for feeding and nesting.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_3.jpg" alt="Bird colonies on Bolshoy Oleny Island" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться и исследования -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There and Explorations</h2>
        <p class="modalBlock__description">
            You can only reach Bolshoy Oleny Island by&nbsp;sea as&nbsp;part of&nbsp;specialized cruises in&nbsp;the Barents Sea from Murmansk or&nbsp;other ports.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_4.jpg" alt="Cruise ship off the island coast and location map" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Культурные центры саамов-----------------------------------------------------------
        {
            id: 'culture_centr_saamov',
            title: 'Sami Cultural Centers',
            image: '../../img/murmansk/cards_culture/centr_saamov_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Sami Cultural Centers</h1>
</div>
<!-- Блок 1: Столица мурманских саамов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Capital of&nbsp;the Murmansk Sami</h2>
        <p class="modalBlock__description">
            Lovozero is&nbsp;one of&nbsp;the oldest Sami settlements on&nbsp;the Kola Peninsula, recognized as&nbsp;the cultural center of&nbsp;the Russian Sami people. Here, the traditions of&nbsp;the indigenous Northern people are carefully preserved and passed&nbsp;on.
        </p>
        <p class="modalBlock__description">
            The National Cultural Center, founded in&nbsp;1994&nbsp;on the initiative of&nbsp;local residents, has become the main focal point for preserving Sami traditions. The center&rsquo;s building is&nbsp;constructed in&nbsp;the shape of&nbsp;a&nbsp;traditional dwelling&nbsp;&mdash; a&nbsp;chum (tent).
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_1.jpg" alt="Lovozero and National Cultural Center in the form of a chum" loading="lazy">
    </div>
</div>
<!-- Блок 2: Музей и традиции -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Museum and Living Traditions</h2>
        <p class="modalBlock__description">
            The Museum of&nbsp;History, Culture, and Life of&nbsp;the Kola Sami tells about traditional dwelling interiors, national costumes, and household items. The pride of&nbsp;the exposition is&nbsp;a&nbsp;large archaeological collection.
        </p>
        <p class="modalBlock__description">
            The center supports folk creative groups&nbsp;&mdash; a&nbsp;theater of&nbsp;Sami traditions and a&nbsp;folklore ensemble. National holidays and festivals, such as&nbsp;the traditional Sami Games, are also held here.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_2.jpg" alt="Sami Museum exposition and performance of a folklore ensemble" loading="lazy">
    </div>
</div>
<!-- Блок 3: Этнопарки и деревни -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Ethnic Theme Parks and Villages</h2>
        <p class="modalBlock__description">
            Travelers will enjoy the improvised Sami villages that recreate the living conditions of&nbsp;nomadic reindeer herders. The Imandra Lights Ethnic Park, with its chums, reindeer, and interactive performances, immerses visitors in&nbsp;the past.
        </p>
        <p class="modalBlock__description">
            In&nbsp;the Saami Village and Sam-Syyt, they organize excursions to&nbsp;wild places of&nbsp;the Kola Peninsula, reindeer sleigh rides, masterclasses in&nbsp;chums, and tastings of&nbsp;northern cuisine.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_4.jpg" alt="Ethnic park with reindeer and chums, sleigh ride" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться и адреса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There and Addresses</h2>
        <p class="modalBlock__description">
            Lovozero is&nbsp;170&nbsp;km from Murmansk. You can get there by&nbsp;car along the road towards the Lovozero Massif; travel time is&nbsp;about 2.5&nbsp;hours.
        </p>
        <p class="modalBlock__description">
            <strong>Key Addresses:</strong> <br>
            &bull; Cultural Center: 8&nbsp;Sovetskaya St., Lovozero<br>
            &bull; Museum: 28&nbsp;Sovetskaya St., Lovozero<br>
            &bull; &laquo;Saami Village&raquo;: Mokraya Kitsa<br>
            &bull; &laquo;Sam-Syyt&raquo;: Olenegorsk Urban District<br>
            &bull; &laquo;Imandra Lights&raquo;: Shore of&nbsp;Lake Imandra, Apatity Urban District
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/culture_centr_saamov/kak_dobratsya.jpg" alt="Location map of Sami centers on the Kola Peninsula" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Большой Вудъявр-----------------------------------------------------------
        {
            id: 'bolshoi_vudyavr',
            title: 'Bolshoy Vudyavr',
            image: '../../img/murmansk/cards_culture/bolshoi_vudyavr_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Bolshoy Vudyavr Ski Resort</h1>
</div>
<!-- Блок 1: Крупнейший на Севере -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Largest in&nbsp;the Russian North</h2>
        <p class="modalBlock__description">
            On&nbsp;the northern and southern slopes of&nbsp;Mount Aykuayvenchorr in&nbsp;the Khibiny Mountains are the trails of&nbsp;the Bolshoy Vudyavr Ski Resort&nbsp;&mdash; the largest in&nbsp;the Russian North.
        </p>
        <p class="modalBlock__description">
            The resort&rsquo;s highest point is&nbsp;at&nbsp;1,060 meters above sea level on&nbsp;the Southern Slope, reachable by&nbsp;a&nbsp;lift. Breathtaking views of&nbsp;the endless expanses of&nbsp;the Kola Peninsula open up&nbsp;from here.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_1.jpg" alt="Panorama of the Bolshoy Vudyavr Ski Resort in the Khibiny Mountains" loading="lazy">
    </div>
</div>
<!-- Блок 2: Трассы и инфраструктура -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Trails and Infrastructure</h2>
        <p class="modalBlock__description">
            The resort offers 25&nbsp;km of&nbsp;trails of&nbsp;varying difficulty.&nbsp;15&nbsp;km of&nbsp;these are illuminated for skiing during the polar night. There are conditions for skiers and snowboarders of&nbsp;all levels, from beginner slopes to&nbsp;professional trails with inclines of&nbsp;up&nbsp;to&nbsp;40%.
        </p>
        <p class="modalBlock__description">
            The ski season lasts from November to&nbsp;May. The resort is&nbsp;within walking distance of&nbsp;Kirovsk: It&rsquo;s just a&nbsp;15-minute walk from the town center to&nbsp;the trails of&nbsp;the Northern Slope.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_2.jpg" alt="Trails and lifts at the resort" loading="lazy">
    </div>
</div>
<!-- Блок 3: Летний сезон -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Summer Season in&nbsp;the Mountains</h2>
        <p class="modalBlock__description">
            In&nbsp;summer, the slopes invite exploration of&nbsp;mountain trails leading to&nbsp;peaks and observation decks. You can take the cable car to&nbsp;find yourself among mountain summits with panoramas of&nbsp;the Khibiny valleys and the endless tundra.
        </p>
        <p class="modalBlock__description">
            Hiking trails of&nbsp;varying difficulty are available for active recreation. Local guides can show unique plants found only in&nbsp;the Khibiny and tell about the geology of&nbsp;this ancient mountain range.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_3.jpg" alt="Summer hiking trails and the resort's cable car" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            The lower stations of&nbsp;the Northern Slope are located in&nbsp;eastern Kirovsk, on&nbsp;the outskirts of&nbsp;the Town Park. You can get here by&nbsp;car or&nbsp;by&nbsp;bus (&laquo;Olimpiyskaya Street&raquo; stop).
        </p>
        <p class="modalBlock__description">
            Access to&nbsp;the trails of&nbsp;the Southern Slope is&nbsp;possible from the upper cable car stations. After an&nbsp;active day, you can relax at&nbsp;cozy cafes at&nbsp;the foot of&nbsp;the mountains, try local dishes, and enjoy the tranquility of&nbsp;northern nature.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/kak_dobratsya.jpg" alt="Lower station of the resort in Kirovsk and slope location map" loading="lazy">
    </div>
</div>`
        },

//--------------------------------------Святоносский маяк-----------------------------------------------------------
        {
            id: 'svyatonoskii_mayak',
            title: 'Svyatonossky Lighthouse',
            image: '../../img/murmansk/cards_culture/svyatonoskii_mayak_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Svyatonossky Lighthouse</h1>

</div>
<!-- Блок 1: Старейший страж -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Oldest Sentinel of&nbsp;the Northern Seas</h2>
        <p class="modalBlock__description">
            Svyatonossky Lighthouse is&nbsp;one of&nbsp;the oldest active lighthouses in&nbsp;the Russian North, having served since November&nbsp;6, 1862. It&nbsp;is&nbsp;located on&nbsp;Cape Svyatoy Nos on&nbsp;the northeastern coast of&nbsp;the Kola Peninsula.
        </p>
        <p class="modalBlock__description">
            Cape Svyatoy Nos, a&nbsp;narrow wedge jutting into the sea, is&nbsp;a&nbsp;key turning point for sea routes. This area is&nbsp;simultaneously the busiest and most dangerous in&nbsp;the Kola Arctic.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_1.jpg" alt="Svyatonossky Lighthouse on Cape Svyatoy Nos" loading="lazy">
    </div>
</div>
<!-- Блок 2: Навигационный ориентир -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Crucial Navigational Landmark</h2>

        <p class="modalBlock__description">
            The lighthouse is&nbsp;a&nbsp;crucial navigational landmark for ships traveling from the White Sea to&nbsp;the Barents Sea and back. Its light, visible from up&nbsp;to&nbsp;22&nbsp;nautical miles away, has been helping ships navigate this difficult stretch safely for over a&nbsp;century and a&nbsp;half.
        </p>
        <p class="modalBlock__description">
            The sheer, barren shores with high, steep slopes require special caution from sailors. The 22-meter-tall lighthouse stands 94.5 meters above sea level.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_2.jpg" alt="View of the lighthouse from the sea and navigation area plan" loading="lazy">
    </div>
</div>
<!-- Блок 3: Объект культурного наследия -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Cultural Heritage Object</h2>

        <p class="modalBlock__description">
            Recognized as&nbsp;a&nbsp;cultural heritage object of&nbsp;federal significance, Svyatonossky Lighthouse is&nbsp;not only an&nbsp;important navigational structure but also a&nbsp;monument to&nbsp;the history of&nbsp;Arctic sea exploration.
        </p>
        <p class="modalBlock__description">
            Its strict pyramidal shape, characteristic of&nbsp;19th-century lighthouses, is&nbsp;harmoniously integrated into the harsh landscape of&nbsp;the Arctic coast. The lighthouse serves as&nbsp;a&nbsp;symbol of&nbsp;the courage and professionalism of&nbsp;polar sailors.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_3.jpg" alt="Close-up of the lighthouse architecture and historical photo" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get There</h2>
        <p class="modalBlock__description">
            Cape Svyatoy Nos can be&nbsp;reached by&nbsp;sea as&nbsp;part of&nbsp;specialized cruises in&nbsp;the Barents Sea from Murmansk or&nbsp;other ports of&nbsp;the Kola Peninsula.
        </p>
        <p class="modalBlock__description">
            In&nbsp;winter, access is&nbsp;possible by&nbsp;snowmobile along the frozen coastline, but this way requires special preparation and equipment. Visiting the lighthouse is&nbsp;recommended to&nbsp;be&nbsp;planned through verified tour operators specializing in&nbsp;Arctic routes.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/kak_dobratsya.jpg" alt="Cruise ship off Cape Svyatoy Nos and location map" loading="lazy">
    </div>
</div>`
        }

    ]

};

window.en_murmanskData = en_murmanskData;