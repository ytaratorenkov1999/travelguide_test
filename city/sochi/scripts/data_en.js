// ============================================
// ДАННЫЕ КАРТОЧЕК ГОРОДА СОЧИ
// ============================================

const en_sochiData = {

// ======================== Точки притяжения регионов =============================

    attractions: [

// ======================== Олимпийский парк =============================
        {
        id: 'olympic_park',
        title: 'Olympic Park',
        image:'../../img/sochi/cards_tochki/Olimpijskij_park_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Olympic Park</h1>
</div>
<!-- Блок 1: Sochi Olympic Park – A Futuristic Destination on the Black Sea Coast -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Olympic Park&nbsp;&mdash; A&nbsp;Futuristic Destination on&nbsp;the Black Sea Coast</h2>
        <p class="modalBlock__description">
            The Sochi Olympic Park is&nbsp;a&nbsp;place where the energy of&nbsp;sport, architecture, and the sea comes together in&nbsp;a&nbsp;single dynamic ensemble.
        </p>
        <p class="modalBlock__description">
            Created for the 2014 Winter Olympics, it&nbsp;has become a&nbsp;symbol of&nbsp;modern Sochi&nbsp;&mdash; open, vibrant, and forward-looking. Today, it&rsquo;s more than just a&nbsp;sports complex&nbsp;&mdash; it&rsquo;s a&nbsp;vast promenade where every day is&nbsp;filled with movement, sunlight, and fresh sea air.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskij_park/Olimpijskij_park_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: An Architectural Landmark Shaped by a Defining Era -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">An&nbsp;Architectural Landmark Shaped by&nbsp;a&nbsp;Defining Era</h2>
        <p class="modalBlock__description">
            Olympic Park is&nbsp;a&nbsp;place where every structure reflects a&nbsp;spirit of&nbsp;celebration and strength. Nothing here is&nbsp;accidental&nbsp;&mdash; everything is&nbsp;designed to&nbsp;impress, inspire, and be&nbsp;appropriate for large-scale events.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;Olympic Park:<br>
            &bull; The Bolshoy Ice Dome&nbsp;&mdash; with its smooth lines reminiscent of&nbsp;a&nbsp;frozen droplet.<br>
            &bull; Fisht&nbsp;&mdash; a&nbsp;stadium-mountain inspired by&nbsp;the majestic peaks of&nbsp;the Caucasus.<br>
            &bull; Iceberg&nbsp;&mdash; an&nbsp;ice palace with a&nbsp;shimmering fa&ccedil;ade.<br>
            &bull; Adler Arena&nbsp;&mdash; a&nbsp;light and transparent speed skating venue.<br>
            &bull; Olympic Square&nbsp;&mdash; the heart of&nbsp;the park, featuring the Olympic cauldron and a&nbsp;fountain.<br>
            The park&rsquo;s architecture is&nbsp;a&nbsp;dialogue between technology, light, and natural forms.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskij_park/Olimpijskij_park_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: A Park That Remains Vibrant All Year Round -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Park That Remains Vibrant All Year Round</h2>
        <p class="modalBlock__description">
            After the Olympics, the park evolved into a&nbsp;multifunctional space where concerts, festivals, competitions, shows, and family events take place.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; The Singing Fountains by&nbsp;the Olympic cauldron&nbsp;&mdash; an&nbsp;evening show of&nbsp;light, water, and music.<br>
            &bull; Pedestrian and cycling routes that stretch along the sea and sports arenas.<br>
            &bull; Sochi Park, an&nbsp;amusement park inspired by&nbsp;Russian fairy tales.<br>
            &bull; Electric scooter, bicycle, and Segway rentals are an&nbsp;ideal way to&nbsp;explore the entire park.<br>
            &bull; Stunning views of&nbsp;the mountains and the sea create a&nbsp;unique atmosphere.<br>
            Olympic Park is&nbsp;a&nbsp;place where you can spend an&nbsp;entire day without retracing the same route twice.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskij_park/Olimpijskij_park_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Olympic Park – A Symbol of Modern Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Olympic Park&nbsp;&mdash; A&nbsp;Symbol of&nbsp;Modern Sochi</h2>
        <p class="modalBlock__description">
            The park has become a&nbsp;key part of&nbsp;the city&rsquo;s identity&nbsp;&mdash; a&nbsp;place where sport, tourism, and culture come together.
        </p>
        <p class="modalBlock__description">
            Why the park is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;is&nbsp;Russia&rsquo;s largest sports cluster, hosting international competitions.<br>
            &bull; The park has become a&nbsp;key attraction for visitors coming to&nbsp;experience the Olympic legacy.<br>
            &bull; The Sochi Autodrom, which has hosted Formula 1&nbsp;races, is&nbsp;located here.<br>
            &bull; The park is&nbsp;a&nbsp;destination for leisure, where the sea, architecture, and events exist in&nbsp;perfect harmony.<br>
            It&nbsp;shows how a&nbsp;megaproject can become an&nbsp;active part of&nbsp;the city&rsquo;s life.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskij_park/Olimpijskij_park_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to Olympic Park -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;Olympic Park</h2>
        <p class="modalBlock__description">
            The park is&nbsp;located in&nbsp;the Imeretian Lowland, near the sea.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;train:</strong> <br>
            Imeretinsky Resort station is&nbsp;the most convenient option.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes go&nbsp;to&nbsp;the following stops: &laquo;Olympic Park&raquo;, &laquo;Amusement Park&raquo;, &laquo;Sochi Autodrom&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>On&nbsp;foot:</strong> <br>
            From the Imeretinsky Resort promenade&nbsp;&mdash; 10-15&nbsp;minutes.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskij_park/Olimpijskij_park_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting the park -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting the park</h2>
        <p class="modalBlock__description">
            &bull; Entry is&nbsp;free.
        </p>
        <p class="modalBlock__description">
            &bull; The best time to&nbsp;visit is&nbsp;in&nbsp;the evening, when the lighting turns on&nbsp;and the fountain show begins.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;summer, bicycles and electric scooters are the most convenient way to&nbsp;get around its vast area.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;winter, the park is&nbsp;at&nbsp;its most beautiful, set against the snowy mountains.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskij_park/Olimpijskij_park_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`

        },

// ======================== Роза Хутор =============================

        {
        id: 'roza_hutor',
        title: 'Rosa Khutor',
        image:'../../img/sochi/cards_tochki/Roza_Hutor_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Rosa Khutor</h1>
</div>
<!-- Блок 1: Rosa Khutor – A Mountain Resort Where the Caucasus Meets European Comfort -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Rosa Khutor&nbsp;&mdash; A&nbsp;Mountain Resort Where the Caucasus Meets European Comfort</h2>
        <p class="modalBlock__description">
            Rosa Khutor is&nbsp;the heart of&nbsp;Krasnaya Polyana, a&nbsp;modern mountain resort and a&nbsp;symbol of&nbsp;new Sochi.
        </p>
        <p class="modalBlock__description">
            Here, majestic mountains, clean air, European-style architecture, and world-class infrastructure create a&nbsp;place where visitors can enjoy a&nbsp;relaxing vacation in&nbsp;any season. Rosa Khutor is&nbsp;a&nbsp;space to&nbsp;experience it&nbsp;all&nbsp;&mdash; from peaceful walks along the promenade to&nbsp;skiing on&nbsp;snowy slopes at&nbsp;over 2,000 meters above sea level.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Roza_Hutor/Roza_Hutor_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Architectural Ensemble Inspired by Alpine Resorts -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Architectural Ensemble Inspired by&nbsp;Alpine Resorts</h2>
        <p class="modalBlock__description">
            The lower part of&nbsp;the resort&nbsp;&mdash; Rosa Valley&nbsp;&mdash; feels like a&nbsp;cozy European town, with promenades, bridges, and colorful fa&ccedil;ades. It&rsquo;s a&nbsp;pleasant place to&nbsp;stroll, relax in&nbsp;caf&eacute;s, listen to&nbsp;the Mzymta River, and admire the mountains rising above the rooftops.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;Rosa Khutor resort:<br>
            &bull; The Mzymta River embankment with its bridges and scenic mountain views.<br>
            &bull; European fa&ccedil;ades creating the atmosphere of&nbsp;a&nbsp;charming Alpine town.<br>
            &bull; Squares and boulevards that host festivals and concerts.<br>
            &bull; Modern hotels and restaurants seamlessly integrated into the natural landscape.<br>
            &bull; Cable cars transporting guests to&nbsp;the mountain peaks.<br>
            The resort&rsquo;s architecture highlights its cozy atmosphere and sense of&nbsp;scale.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Roza_Hutor/Roza_Hutor_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Inner World of the Resort – Mountains, Sport, and Year-Round Recreation -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Inner World of&nbsp;the Resort&nbsp;&mdash; Mountains, Sport, and Year-Round Recreation</h2>
        <p class="modalBlock__description">
            <strong>In&nbsp;Winter&nbsp;&mdash; A&nbsp;Realm of&nbsp;Snow and Speed</strong> <br>
            Rosa Khutor is&nbsp;one of&nbsp;the best ski resorts in&nbsp;Russia. The resort offers dozens of&nbsp;slopes of&nbsp;varying difficulty, modern lifts, ski schools, and freeride zones.
        </p>
        <p class="modalBlock__description">
            <strong>In&nbsp;Summer&nbsp;&mdash; A&nbsp;Land of&nbsp;Hiking and Scenic Views</strong> <br>
            When the snow melts, the mountains open up&nbsp;new trails: trails to&nbsp;waterfalls, panoramic viewpoints, lake routes, walks across alpine meadows.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Rosa Plateau (1,170&nbsp;meters)&nbsp;&mdash; a&nbsp;sunny terrace with caf&eacute;s and views of&nbsp;the surrounding ranges.<br>
            &bull; Rosa Peak (2,320&nbsp;meters)&nbsp;&mdash; a&nbsp;place where the Caucasus unfolds in&nbsp;all its majesty.<br>
            &bull; Suspension bridges and observation decks that take your breath away.<br>
            &bull; Mountain trails leading to&nbsp;lakes and peaks.<br>
            &bull; Ski and snowboard slopes in&nbsp;winter, hiking and cycling routes in&nbsp;summer.<br>
            Rosa Khutor is&nbsp;a&nbsp;resort in&nbsp;tune with the rhythm of&nbsp;the mountains&nbsp;&mdash; peaceful, yet vibrant.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Roza_Hutor/Roza_Hutor_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Rosa Khutor – A Symbol of Modern Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Rosa Khutor&nbsp;&mdash; A&nbsp;Symbol of&nbsp;Modern Sochi</h2>
        <p class="modalBlock__description">
            The resort has become an&nbsp;important part of&nbsp;Russia&rsquo;s tourism map and one of&nbsp;the country&rsquo;s most recognizable brands.
        </p>
        <p class="modalBlock__description">
            Why Rosa Khutor is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;is&nbsp;the largest mountain resort in&nbsp;Russia, built to&nbsp;international standards.<br>
            &bull; The 2014 Winter Olympics were held here.<br>
            &bull; The resort has become a&nbsp;center of&nbsp;year-round recreation, uniting sport, nature, and culture.<br>
            &bull; Rosa Khutor is&nbsp;a&nbsp;popular destination for travelers seeking comfort and adventure.<br>
            It&nbsp;demonstrates how modern infrastructure can exist in&nbsp;harmony with nature.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Roza_Hutor/Roza_Hutor_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to Rosa Khutor -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;Rosa Khutor</h2>
        <p class="modalBlock__description">
            The resort is&nbsp;located in&nbsp;Krasnaya Polyana, 50&nbsp;km from Sochi.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;the Lastochka train:</strong> <br>
            Rosa Khutor station is&nbsp;the most convenient way to&nbsp;reach the resort from Adler and Sochi.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes go&nbsp;to&nbsp;the following stops: &laquo;Rosa Valley&raquo;, &laquo;Mountain Olympic Village&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> <br>
            Via the Krasnaya Polyana Highway&nbsp;&mdash; about an&nbsp;hour from the coast.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Roza_Hutor/Roza_Hutor_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting the resort -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting the resort</h2>
        <p class="modalBlock__description">
            &bull; In&nbsp;winter, it&nbsp;is&nbsp;recommended to&nbsp;book accommodation in&nbsp;advance, as&nbsp;it&nbsp;is&nbsp;a&nbsp;very popular season.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;summer, it&nbsp;is&nbsp;best to&nbsp;take the cable cars in&nbsp;the morning, when the views are especially clear.
        </p>
        <p class="modalBlock__description">
            &bull; Temperatures at&nbsp;higher altitudes are lower than in&nbsp;the valley, so&nbsp;warm clothing is&nbsp;recommended.
        </p>
        <p class="modalBlock__description">
            &bull; The area offers numerous caf&eacute;s, rental services, ski schools, and tourist centers.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Roza_Hutor/Roza_Hutor_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`

        },

// ======================== Сочинский морской порт =============================

        {
        id: 'morskoy_port',
        title: 'Sochi Seaport',
        image:'../../img/sochi/cards_tochki/Sochinskij_morskoj_port_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Sochi Seaport</h1>
</div>
<!-- Блок 1: Sochi Seaport – The Southern Gateway and a Symbol of Resort Elegance -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Seaport&nbsp;&mdash; The Southern Gateway and a&nbsp;Symbol of&nbsp;Resort Elegance</h2>
        <p class="modalBlock__description">
            Sochi Seaport is&nbsp;the city&rsquo;s calling card, where the sea meets architecture and a&nbsp;simple stroll becomes a&nbsp;small journey.
        </p>
        <p class="modalBlock__description">
            Built in&nbsp;the mid-20th century, the port has become one of&nbsp;Sochi&rsquo;s most recognizable landmarks&nbsp;&mdash; its spire, arcades, and snow-white fa&ccedil;ades create the atmosphere of&nbsp;a&nbsp;southern resort filled with light, sea air, and a&nbsp;sense of&nbsp;celebration. Today, it&nbsp;is&nbsp;both a&nbsp;transport hub and one of&nbsp;the coast&rsquo;s most romantic places.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_morskoj_port/Sochinskij_morskoj_port_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: An Architectural Ensemble Inspired by Classical Style and the Sea -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">An&nbsp;Architectural Ensemble Inspired by&nbsp;Classical Style and the Sea</h2>
        <p class="modalBlock__description">
            The Sochi Seaport building is&nbsp;a&nbsp;true masterpiece of&nbsp;Stalinist architecture, with touches of&nbsp;southern flair. Its silhouette is&nbsp;instantly recognizable: a&nbsp;tall spire, colonnades, arches, and symmetry create an&nbsp;image that has become a&nbsp;symbol of&nbsp;Sochi.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;the Sochi Seaport:<br>
            &bull; A&nbsp;tall spire topped with a&nbsp;star, visible from the promenade and the sea.<br>
            &bull; Arcades and colonnades create a&nbsp;sense of&nbsp;lightness and grandeur.<br>
            &bull; Fountains and sculptures decorate the square in&nbsp;front of&nbsp;the seaport building.<br>
            &bull; A&nbsp;yacht marina with snow-white motorboats and pleasure crafts.<br>
            &bull; Palm trees, flower beds, and wide avenues highlight the southern character of&nbsp;the place.<br>
            The port&rsquo;s architecture combines monumentality and resort elegance.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_morskoj_port/Sochinskij_morskoj_port_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: A Port That Lives to the Rhythm of the Sea -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Port That Lives to&nbsp;the Rhythm of&nbsp;the Sea</h2>
        <p class="modalBlock__description">
            It&rsquo;s always lively here: tourists stroll along the promenade, take photos in&nbsp;front of&nbsp;the spire, set off on&nbsp;boat trips, or&nbsp;simply enjoy views of&nbsp;the marina.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Yachts and motorboats moored at&nbsp;the piers, ranging from small pleasure crafts to&nbsp;luxurious vessels.<br>
            &bull; Boat excursions along the coast to&nbsp;waterfalls, capes, and dolphin-watching areas.<br>
            &bull; Sunsets over the sea, best enjoyed from the pier.<br>
            &bull; Restaurants and caf&eacute;s overlooking the water.<br>
            &bull; Walks along the promenade where you can always feel the sea breeze.<br>
            The port is&nbsp;a&nbsp;place where visitors can feel like they are a&nbsp;part of&nbsp;a&nbsp;great sea journey, even if&nbsp;they&rsquo;re simply taking a&nbsp;walk.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_morskoj_port/Sochinskij_morskoj_port_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Sochi Seaport – A Cultural Symbol of the City -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Seaport&nbsp;&mdash; A&nbsp;Cultural Symbol of&nbsp;the City</h2>
        <p class="modalBlock__description">
            The port has long been an&nbsp;essential part of&nbsp;Sochi&rsquo;s image, appearing in&nbsp;films, on&nbsp;postcards, and in&nbsp;tourist brochures.
        </p>
        <p class="modalBlock__description">
            Why the port is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;is&nbsp;one of&nbsp;the most beautiful marine terminals in&nbsp;Russia.<br>
            &bull; The port is&nbsp;a&nbsp;popular place for walks, especially in&nbsp;the evening.<br>
            &bull; From here, boat tours and cruises depart.<br>
            &bull; It&nbsp;has become an&nbsp;architectural symbol of&nbsp;Sochi, recognizable around the world.<br>
            &bull; The port is&nbsp;a&nbsp;place for meetings, dates, and strolls, forming a&nbsp;part of&nbsp;the city&rsquo;s romantic atmosphere.<br>
            Here, you can feel the spirit of&nbsp;a&nbsp;southern resort&nbsp;&mdash; light, bright, and slightly nostalgic.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_morskoj_port/Sochinskij_morskoj_port_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to the Sochi Seaport -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;the Sochi Seaport</h2>
        <p class="modalBlock__description">
            The port is&nbsp;located in&nbsp;the very center of&nbsp;the city, next to&nbsp;the Primorskaya Embankment.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes go&nbsp;to&nbsp;the following stops: &laquo;Seaport&raquo;, &laquo;Hotel Sochi&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>On&nbsp;foot:</strong> <br>
            5-10 minutes on&nbsp;foot from the city center along the embankment.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> <br>
            Parking is&nbsp;available nearby, but it&nbsp;can be&nbsp;busy during peak season.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_morskoj_port/Sochinskij_morskoj_port_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting the port -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting the port</h2>
        <p class="modalBlock__description">
            &bull; Free entry.
        </p>
        <p class="modalBlock__description">
            &bull; The best time to&nbsp;visit is&nbsp;in&nbsp;the evening, when the lights come on&nbsp;and the marina reflects the city lights.
        </p>
        <p class="modalBlock__description">
            &bull; Boat trips are available year-round, but the choice is&nbsp;especially wide in&nbsp;summer.
        </p>
        <p class="modalBlock__description">
            &bull; The area features caf&eacute;s, restaurants, souvenir shops, and photo spots.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_morskoj_port/Sochinskij_morskoj_port_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`

        },

// ======================== Сочинский дендрарий =============================

        {
        id: 'sochi_dendradii',
        title: 'Sochi Arboretum',
        image:'../../img/sochi/cards_tochki/Sochinskij_dendrarij_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Sochi Arboretum</h1>
</div>
<!-- Блок 1: Sochi Arboretum – Where Nature Becomes Art -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Arboretum&nbsp;&mdash; Where Nature Becomes Art</h2>
        <p class="modalBlock__description">
            Sochi Arboretum is&nbsp;the green heart of&nbsp;the city.
        </p>
        <p class="modalBlock__description">
            Founded in&nbsp;the late 19th century, it&nbsp;has become a&nbsp;symbol of&nbsp;Sochi&rsquo;s resort life&nbsp;&mdash; sunny, warm, and filled with the scents of&nbsp;pine, flowers, and sea air. You can wander here for hours, moving from cypress alleys to&nbsp;bamboo groves, from swan-filled ponds to&nbsp;observation decks overlooking the sea.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_dendrarij/Sochinskij_dendrarij_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: An Architectural and Natural Ensemble Designed for Contemplation -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">An&nbsp;Architectural and Natural Ensemble Designed for Contemplation</h2>
        <p class="modalBlock__description">
            The arboretum is&nbsp;not just a&nbsp;park, but a&nbsp;carefully designed landscape complex, where each area has its own character and mood. In&nbsp;this place, architecture, sculpture, ponds, and rare plants are harmoniously combined.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;the Sochi Arboretum:<br>
            &bull; The snow-white Villa Nadezhda, built in&nbsp;the style of&nbsp;the Italian Renaissance.<br>
            &bull; Cypress alleys leading to&nbsp;observation decks.<br>
            &bull; Ponds with swans and ducks, surrounded by&nbsp;exotic trees.<br>
            &bull; Sculptures and fountains that create the atmosphere of&nbsp;a&nbsp;historic park.<br>
            &bull; A&nbsp;cable car connecting the lower and upper parts of&nbsp;the Arboretum.<br>
            Here, architecture highlights the richness of&nbsp;nature, and nature highlights the beauty of&nbsp;architecture.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_dendrarij/Sochinskij_dendrarij_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: A Park Featuring Plants from All Continents -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Park Featuring Plants from All Continents</h2>
        <p class="modalBlock__description">
            The arboretum is&nbsp;home to&nbsp;thousands of&nbsp;species of&nbsp;trees and shrubs&nbsp;&mdash; from giant sequoias to&nbsp;Japanese cryptomerias, from palms to&nbsp;magnolias.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; A&nbsp;conifer collection that ranks among the largest in&nbsp;Russia.<br>
            &bull; Palm alleys that evoke a&nbsp;genuine tropical atmosphere.<br>
            &bull; Bamboo groves that stay cool and peaceful year-round.<br>
            &bull; A&nbsp;turtle pond, a&nbsp;favorite place among children.<br>
            &bull; Peacocks wandering freely around the area.<br>
            &bull; Observation decks offering views of&nbsp;the sea and the mountains.<br>
            Each area of&nbsp;the arboretum is&nbsp;a&nbsp;miniature world with its own climate and mood.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_dendrarij/Sochinskij_dendrarij_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Sochi Arboretum – A Cultural Symbol of the City -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Arboretum&nbsp;&mdash; A&nbsp;Cultural Symbol of&nbsp;the City</h2>
        <p class="modalBlock__description">
            The arboretum has long become part of&nbsp;Sochi&rsquo;s image&nbsp;&mdash; green, sunny, and resort-like.
        </p>
        <p class="modalBlock__description">
            Why the arboretum is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;is&nbsp;one of&nbsp;the largest botanical parks in&nbsp;Russia.<br>
            &bull; Rare and valuable plant species from all over the world are collected here.<br>
            &bull; The park is&nbsp;a&nbsp;monument of&nbsp;19th-century landscape and garden design.<br>
            &bull; It&nbsp;has become a&nbsp;place for relaxation, strolls, and photo shoots for locals and tourists alike.<br>
            &bull; The arboretum is&nbsp;a&nbsp;cultural venue for exhibitions, tours, and environmental programs.<br>
            It&nbsp;is&nbsp;a&nbsp;place where you can feel the harmony between nature and humankind.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_dendrarij/Sochinskij_dendrarij_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to the Sochi Arboretum -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;the Sochi Arboretum</h2>
        <p class="modalBlock__description">
            The arboretum is&nbsp;located in&nbsp;the Central District of&nbsp;Sochi, not far from Kurortny Prospekt.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes go&nbsp;to&nbsp;the following stops: &laquo;Arboretum&raquo;, &laquo;Circus&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>On&nbsp;foot:</strong> <br>
            From the Primorskaya Embankment, it&rsquo;s a&nbsp;10-15 minute uphill walk.
        </p>
        <p class="modalBlock__description">
            <strong>Cable car:</strong> <br>
            It&nbsp;is&nbsp;possible to&nbsp;go&nbsp;from the lower entrance to&nbsp;the upper section of&nbsp;the park&nbsp;&mdash; an&nbsp;excellent way to&nbsp;view the arboretum from above.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_dendrarij/Sochinskij_dendrarij_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting the arboretum -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting the arboretum</h2>
        <p class="modalBlock__description">
            &bull; Tickets are available at&nbsp;both the lower and upper entrances.
        </p>
        <p class="modalBlock__description">
            &bull; It&nbsp;is&nbsp;best to&nbsp;visit in&nbsp;the morning or&nbsp;late afternoon, when the soft light makes the park especially beautiful.
        </p>
        <p class="modalBlock__description">
            &bull; Comfortable footwear is&nbsp;a&nbsp;must, as&nbsp;the area is&nbsp;large and hilly.
        </p>
        <p class="modalBlock__description">
            &bull; The cable car operates year-round, but service may be&nbsp;limited in&nbsp;windy weather.
        </p>
        <p class="modalBlock__description">
            &bull; The area features caf&eacute;s, relaxation areas, and plenty of&nbsp;photogenic spots.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskij_dendrarij/Sochinskij_dendrarij_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`

        }

        ],

// ======================== Выбраться на природу =============================
// ================================================================================


    nature: [
    {
        id: 'red_polyana',
        title: 'Krasnaya Polyana',
        image:'../../img/sochi/cards_nature/Krasnaya_Polyana_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Krasnaya Polyana</h1>
</div>
<!-- Блок 1: Krasnaya Polyana – A Mountain Valley Where Nature and Comfort Live in Harmony -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Krasnaya Polyana&nbsp;&mdash; A&nbsp;Mountain Valley Where Nature and Comfort Live in&nbsp;Harmony</h2>
        <p class="modalBlock__description">
            Krasnaya Polyana is&nbsp;the heart of&nbsp;Sochi&rsquo;s mountain region, where the Caucasus unfolds in&nbsp;all its beauty.
        </p>
        <p class="modalBlock__description">
            Here, mountains tower over the rooftops, the air smells of&nbsp;pine forests, and the Mzymta River brings icy water down from the high peaks. Krasnaya Polyana is&nbsp;a&nbsp;place where nature, sports, and modern infrastructure come together to&nbsp;create an&nbsp;ideal year-round resort.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Krasnaya_Polyana/Krasnaya_Polyana_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: An Architectural and Natural Ensemble Inspired by the Mountain Landscapes of Europe -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">An&nbsp;Architectural and Natural Ensemble Inspired by&nbsp;the Mountain Landscapes of&nbsp;Europe</h2>
        <p class="modalBlock__description">
            Krasnaya Polyana combines cozy streets, alpine-style architecture, mountain views, and fresh air. Everything here allows you to&nbsp;feel connected to&nbsp;nature without giving up&nbsp;comfort.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;Krasnaya Polyana:<br>
            &bull; Cozy neighborhoods with European-style architecture.<br>
            &bull; The Mzymta River embankments, pleasant for walks in&nbsp;any season.<br>
            &bull; Mountain slopes rising like a&nbsp;wall around the valley.<br>
            &bull; Modern hotels and spa complexes seamlessly integrated into the natural landscape.<br>
            &bull; Cable cars connecting the valley to&nbsp;the highlands.<br>
            Krasnaya Polyana is&nbsp;a&nbsp;place where urban aesthetics and mountain nature live in&nbsp;harmony.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Krasnaya_Polyana/Krasnaya_Polyana_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: The Inner World of Krasnaya Polyana – Sports, Nature, and Year-Round Leisure -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">The Inner World of&nbsp;Krasnaya Polyana&nbsp;&mdash; Sports, Nature, and Year-Round Leisure</h2>
        <p class="modalBlock__description">
            <strong>In&nbsp;Winter&nbsp;&mdash; The Heart of&nbsp;Ski Life</strong> <br>
            Krasnaya Polyana is&nbsp;one of&nbsp;the best winter resorts in&nbsp;Russia. Several ski resorts operate here, with dozens of&nbsp;slopes, ski schools, and freeride zones.
        </p>
        <p class="modalBlock__description">
            <strong>In&nbsp;Summer&nbsp;&mdash; A&nbsp;Land of&nbsp;Hiking and Adventure</strong> <br>
            When the snow melts, the valley turns into a&nbsp;vast natural park: routes to&nbsp;waterfalls, trails through forests and ridges, walks to&nbsp;observation decks, cycling routes and ATV tours.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Mountain panoramas opening up&nbsp;from over 2,000 meters above sea level.<br>
            &bull; Fresh air filled with the aromas of&nbsp;pine and herbs.<br>
            &bull; The Mzymta River, creating a&nbsp;refreshing coolness even in&nbsp;hot weather.<br>
            &bull; Caf&eacute;s and restaurants overlooking the mountains, ideal for an&nbsp;evening out.<br>
            &bull; Thermal complexes and spas, ideal for unwinding after an&nbsp;active day.<br>
            Krasnaya Polyana is&nbsp;a&nbsp;resort that follows the rhythm of&nbsp;nature.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Krasnaya_Polyana/Krasnaya_Polyana_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Krasnaya Polyana – A Symbol of Modern Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Krasnaya Polyana&nbsp;&mdash; A&nbsp;Symbol of&nbsp;Modern Sochi</h2>
        <p class="modalBlock__description">
            After the 2014&nbsp;Olympics, Krasnaya Polyana became one of&nbsp;Russia&rsquo;s most recognizable tourism brands.
        </p>
        <p class="modalBlock__description">
            Why Krasnaya Polyana is&nbsp;so&nbsp;important:<br>
            &bull; It&rsquo;s the largest mountain resort in&nbsp;southern Russia.<br>
            &bull; It&nbsp;hosts sports competitions, festivals, and cultural events.<br>
            &bull; The resort has become a&nbsp;center for year-round recreation, bringing together sports, nature, and comfort.<br>
            &bull; Krasnaya Polyana is&nbsp;a&nbsp;popular destination for tourists looking for mountains, fresh air, and a&nbsp;European resort atmosphere.<br>
            It&nbsp;demonstrates how modern infrastructure can enhance the natural potential of&nbsp;a&nbsp;region.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Krasnaya_Polyana/Krasnaya_Polyana_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to Krasnaya Polyana -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;Krasnaya Polyana</h2>
        <p class="modalBlock__description">
            The resort is&nbsp;located 40-50&nbsp;km from the coast.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;the Lastochka train:</strong> <br>
            Stations: &laquo;Esto-Sadok&raquo;, &laquo;Rosa Khutor&raquo;.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes run from Adler and Sochi.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> <br>
            Via the Krasnaya Polyana Highway&nbsp;&mdash; about an&nbsp;hour from the sea.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Krasnaya_Polyana/Krasnaya_Polyana_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting Krasnaya Polyana -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting Krasnaya Polyana</h2>
        <p class="modalBlock__description">
            &bull; In&nbsp;winter, it&nbsp;is&nbsp;recommended to&nbsp;book accommodation in&nbsp;advance, as&nbsp;it&nbsp;is&nbsp;a&nbsp;very popular season.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;summer, it&nbsp;is&nbsp;best to&nbsp;venture into the mountains in&nbsp;the morning, when the views are especially clear.
        </p>
        <p class="modalBlock__description">
            &bull; Temperatures are lower at&nbsp;higher elevations, so&nbsp;bring warm clothing.
        </p>
        <p class="modalBlock__description">
            &bull; The area offers numerous caf&eacute;s, equipment rentals, spas, and tourist centers.
        </p>
        <p class="modalBlock__description">
            &bull; The resort is&nbsp;perfect for family vacations, romantic trips, and active adventures.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Krasnaya_Polyana/Krasnaya_Polyana_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Ахштырское ущелье =============================

    {
        id: 'uchelie_ahtirskoye',
        title: 'Akhshtyr Gorge',
        image:'../../img/sochi/cards_nature/Ahshtyrskoe_ushchele_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Akhshtyr Gorge</h1>
</div>
<!-- Блок 1: Akhshtyr Gorge – Wild Beauty of Sochi Where Nature Speaks Louder Than Words -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Akhshtyr Gorge&nbsp;&mdash; Wild Beauty of&nbsp;Sochi Where Nature Speaks Louder Than Words</h2>
        <p class="modalBlock__description">
            Akhshtyr Gorge is&nbsp;one of&nbsp;Sochi&rsquo;s most impressive natural landmarks, where mountains, forests, and the Mzymta River form a&nbsp;landscape straight out of&nbsp;an&nbsp;adventure movie.
        </p>
        <p class="modalBlock__description">
            It&nbsp;is&nbsp;a&nbsp;place of&nbsp;silence, elevation, and untouched nature, where visitors come to&nbsp;feel the scale of&nbsp;the Caucasus and see discover a&nbsp;different side of&nbsp;Sochi. Every step here brings you face to&nbsp;face with nature that has retained its strength and unique character.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Ahshtyrskoe_ushchele/Ahshtyrskoe_ushchele_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: A Natural Landscape Shaped by Time and Water -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Natural Landscape Shaped by&nbsp;Time and Water</h2>
        <p class="modalBlock__description">
            The gorge was formed by&nbsp;the Mzymta River, which has carved its way through the rocks over centuries. Today, it&nbsp;is&nbsp;a&nbsp;deep canyon with steep rock walls, dense forests, and stunning views.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;Akhshtyr Gorge:<br>
            &bull; Tall limestone cliffs rising tens of&nbsp;meters above the ground.<br>
            &bull; The winding Mzymta River roaring below.<br>
            &bull; Dense forests covering the slopes.<br>
            &bull; Observation decks with panoramic views of&nbsp;the canyon.<br>
            &bull; Trails and bridges for exploring the gorge at&nbsp;different levels.<br>
            Akhshtyr Gorge is&nbsp;a&nbsp;place where nature reveals its power and beauty.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Ahshtyrskoe_ushchele/Ahshtyrskoe_ushchele_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Akhshtyr Cave – A Trace of Ancient History -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Akhshtyr Cave&nbsp;&mdash; A&nbsp;Trace of&nbsp;Ancient History</h2>
        <p class="modalBlock__description">
            Situated on&nbsp;one of&nbsp;the slopes, Akhshtyr Cave is&nbsp;an&nbsp;archaeological site where traces of&nbsp;ancient people have been found. The climb itself is&nbsp;a&nbsp;small adventure, and the view from the entrance platform is&nbsp;worth the effort.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Observation points with panoramic views of&nbsp;the gorge and the river.<br>
            &bull; A&nbsp;path to&nbsp;the cave along the mountainside above a&nbsp;steep drop.<br>
            &bull; Silence and fresh air, especially noticeable away from the city.<br>
            &bull; Views of&nbsp;the Skypark suspension bridge soaring over the gorge.<br>
            &bull; The interplay of&nbsp;light and shadow, shaping a&nbsp;unique atmosphere at&nbsp;different times of&nbsp;day.<br>
            Akhshtyr Gorge is&nbsp;a&nbsp;place that makes you feel like a&nbsp;true explorer.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Ahshtyrskoe_ushchele/Ahshtyrskoe_ushchele_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Akhshtyr Gorge – Part of Sochi's Natural Heritage -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Akhshtyr Gorge&nbsp;&mdash; Part of&nbsp;Sochi&rsquo;s Natural Heritage</h2>
        <p class="modalBlock__description">
            The gorge is&nbsp;a&nbsp;key part of&nbsp;the regional ecosystem and one of&nbsp;the most picturesque spots in&nbsp;Greater Sochi.
        </p>
        <p class="modalBlock__description">
            Why the gorge is&nbsp;so&nbsp;important:<br>
            &bull; It&rsquo;s a&nbsp;unique natural site that has preserved its pristine landscape.<br>
            &bull; This area is&nbsp;home to&nbsp;Akhshtyr Cave, an&nbsp;important archaeological site.<br>
            &bull; The gorge is&nbsp;a&nbsp;popular destination for walking, hiking, and photography.<br>
            &bull; Situated next to&nbsp;Skypark, it&nbsp;is&nbsp;a&nbsp;part of&nbsp;a&nbsp;popular sightseeing route.<br>
            &bull; Akhshtyr Gorge is&nbsp;a&nbsp;true place of&nbsp;power where visitors can experience the grandeur of&nbsp;the Caucasus.<br>
            It&rsquo;s a&nbsp;space where nature speaks for itself.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Ahshtyrskoe_ushchele/Ahshtyrskoe_ushchele_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to Akhshtyr Gorge and Visiting the gorge -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;Akhshtyr Gorge</h2>
        <p class="modalBlock__description">
            The gorge is&nbsp;located between Adler and Krasnaya Polyana.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes run to&nbsp;stops near Skypark.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> <br>
            Via the Krasnaya Polyana Highway&nbsp;&mdash; about 20-25 minutes from Adler.
        </p>
        <p class="modalBlock__description">
            <strong>On&nbsp;foot:</strong> <br>
            From Skypark, you can follow trails to&nbsp;observation decks.
        </p>
        <p class="modalBlock__description">
            <strong>Visiting the gorge:</strong> <br>
            &bull; It&rsquo;s best to&nbsp;visit in&nbsp;clear weather, when the views are especially vivid.<br>
            &bull; Comfortable footwear is&nbsp;recommended, as&nbsp;some sections of&nbsp;the trails are rocky.<br>
            &bull; In&nbsp;summer, the gorge stays cooler than the city, which is&nbsp;a&nbsp;pleasant bonus.<br>
            &bull; The ascent to&nbsp;Akhshtyr Cave requires caution but is&nbsp;suitable for most visitors.<br>
            &bull; In&nbsp;the evening, the cliffs are beautifully lit by&nbsp;the sunset.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Ahshtyrskoe_ushchele/Ahshtyrskoe_ushchele_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>`
    },

// ======================== 33 водопада в долине Шахе =============================

    {
        id: '33_vodopada',
        title: '33 Waterfalls in the Shakhe River Valley',
        image:'../../img/sochi/cards_nature/33_vodopada_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">33&nbsp;Waterfalls in&nbsp;the Shakhe River Valley</h1>
</div>
<!-- Блок 1: 33 Waterfalls – A Natural Amphitheater of Water and Stone in the Heart of the Shakhe River Valley -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">33&nbsp;Waterfalls&nbsp;&mdash; A&nbsp;Natural Amphitheater of&nbsp;Water and Stone in&nbsp;the Heart of&nbsp;the Shakhe River Valley</h2>
        <p class="modalBlock__description">
            33&nbsp;Waterfalls, one of&nbsp;the most picturesque spots in&nbsp;Greater Sochi, where nature has formed a&nbsp;cascading theatre of&nbsp;water, stone, and lush greenery.
        </p>
        <p class="modalBlock__description">
            Tucked away in&nbsp;the Shakhe River Valley, these waterfalls are a&nbsp;symbol of&nbsp;southern nature&nbsp;&mdash; lively, refreshing, and surrounded by&nbsp;dense forests and the scent of&nbsp;boxwood. Every step here reveals a&nbsp;new cascade, a&nbsp;new view, and a&nbsp;new sound of&nbsp;flowing water.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/33_vodopada/33_vodopada_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: A Natural Ensemble Formed by Time and Mountain Streams -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Natural Ensemble Formed by&nbsp;Time and Mountain Streams</h2>
        <p class="modalBlock__description">
            The waterfalls are located on&nbsp;the Dzhegosh Stream, a&nbsp;tributary of&nbsp;the Shakhe River. Over thousands of&nbsp;years, water has carved a&nbsp;staircase of&nbsp;ledges into soft limestone, along which dozens of&nbsp;streams cascade today.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;the 33&nbsp;Waterfalls:<br>
            &bull; A&nbsp;series of&nbsp;cascading water steps, each with its own character.<br>
            &bull; Limestone cascades polished by&nbsp;flowing water.<br>
            &bull; Dense forests that provide shade and coolness even in&nbsp;hot weather.<br>
            &bull; Wooden walkways and stairways allow you to&nbsp;complete the full route.<br>
            &bull; Clear mountain streams whose sound you can hear long before you arrive.<br>
            This is&nbsp;a&nbsp;place where water and stone are engaged in&nbsp;an&nbsp;eternal dialogue.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/33_vodopada/33_vodopada_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: A Route for Everyone -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Route for Everyone</h2>
        <p class="modalBlock__description">
            The trail features wooden walkways, railings, and stairs, making it&nbsp;accessible to&nbsp;families with children and visitors without special training.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; A&nbsp;variety of&nbsp;waterfalls ranging from small streams to&nbsp;powerful cascades.<br>
            &bull; Emerald pools where water gathers between the ledges.<br>
            &bull; The shade of&nbsp;boxwood groves creates the atmosphere of&nbsp;an&nbsp;ancient forest.<br>
            &bull; Bridges over the water where you can feel the power of&nbsp;the current beneath your feet.<br>
            &bull; Photogenic spots where the cascade looks especially beautiful.<br>
            &bull; The scent of&nbsp;the damp forest that you will never forget.<br>
            Each waterfall is&nbsp;a&nbsp;small natural scene with its own mood.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/33_vodopada/33_vodopada_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: 33 Waterfalls – A Part of Sochi's Natural and Cultural Heritage -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">33&nbsp;Waterfalls&nbsp;&mdash; A&nbsp;Part of&nbsp;Sochi&rsquo;s Natural and Cultural Heritage</h2>
        <p class="modalBlock__description">
            This place has long been one of&nbsp;the most popular natural routes in&nbsp;the region.
        </p>
        <p class="modalBlock__description">
            Why 33&nbsp;waterfalls are so&nbsp;important:<br>
            &bull; It&rsquo;s one of&nbsp;the most beautiful cascades in&nbsp;southern Russia.<br>
            &bull; The waterfalls are located in&nbsp;the Shakhe River Valley, known for its pristine nature.<br>
            &bull; The route is&nbsp;suitable for all ages, making it&nbsp;popular with families.<br>
            &bull; Here you can see unique plants, including relict species.<br>
            &bull; It&rsquo;s an&nbsp;ideal place for photography, walks, and enjoying nature.<br>
            The&nbsp;33 Waterfalls are a&nbsp;natural symbol of&nbsp;Sochi, highlighting the region&rsquo;s diversity.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/33_vodopada/33_vodopada_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to 33 Waterfalls -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;33&nbsp;Waterfalls</h2>
        <p class="modalBlock__description">
            The waterfalls are located in&nbsp;the Lazarevsky District, in&nbsp;the Shakhe River Valley.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> <br>
            From Lazarevskoye, it&rsquo;s about a&nbsp;20-30 minute drive along a&nbsp;scenic road.
        </p>
        <p class="modalBlock__description">
            <strong>With a&nbsp;tour:</strong> <br>
            Tour groups depart daily from Sochi, Adler, and Lazarevskoye.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes go&nbsp;to&nbsp;the village of&nbsp;Bolshoy Kichmay, where you can continue on&nbsp;foot or&nbsp;take a&nbsp;transfer.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/33_vodopada/33_vodopada_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting the waterfalls -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting the waterfalls</h2>
        <p class="modalBlock__description">
            &bull; It&rsquo;s best to&nbsp;visit in&nbsp;the morning, when there are fewer people and the light is&nbsp;softer.
        </p>
        <p class="modalBlock__description">
            &bull; Comfortable, non-slip shoes are recommended, as&nbsp;the trail can be&nbsp;wet.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;summer, you can refresh yourself in&nbsp;the mountain pools, though the water is&nbsp;cold.
        </p>
        <p class="modalBlock__description">
            &bull; After the walk, visitors often stop by&nbsp;nearby villages and tea houses.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;spring and after rain, the waterfalls are at&nbsp;their fullest.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/33_vodopada/33_vodopada_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },


// ======================== Тисо-Самшитовая роща =============================

    {
        id: 'tiso_samshitovaya_rosha',
        title: 'Yew-Boxwood Grove',
        image:'../../img/sochi/cards_nature/Tiso_Samshitovaya_roshcha_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Yew-Boxwood Grove</h1>
</div>
<!-- Блок 1: Yew-Boxwood Grove – An Ancient Forest of Sochi Where Time Slows Down -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Yew-Boxwood Grove&nbsp;&mdash; An&nbsp;Ancient Forest of&nbsp;Sochi Where Time Slows Down</h2>
        <p class="modalBlock__description">
            The Yew-Boxwood Grove is&nbsp;one of&nbsp;the most mysterious and ancient places in&nbsp;Sochi, a&nbsp;natural open-air museum where every rock and tree holds thousands of&nbsp;years of&nbsp;history.
        </p>
        <p class="modalBlock__description">
            A&nbsp;special silence fills this place, and the dense green light filtering through the leaves creates the sense that you&rsquo;ve stepped into another world&nbsp;&mdash; one where nature follows its own laws and rhythms. It&rsquo;s a&nbsp;place that inspires, calms you down, and encourages reflection on&nbsp;the vastness of&nbsp;time.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Tiso_Samshitovaya_roshcha/Tiso_Samshitovaya_roshcha_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: A Natural Landscape Shaped Over Thousands of Years -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">A&nbsp;Natural Landscape Shaped Over Thousands of&nbsp;Years</h2>
        <p class="modalBlock__description">
            The grove is&nbsp;located in&nbsp;the Khostinsky District of&nbsp;Sochi and forms part of&nbsp;the Caucasus Biosphere Reserve. Relict plants have been preserved here that survived the Ice Ages and have remained almost unchanged to&nbsp;this day.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;the Yew-Boxwood Grove:<br>
            &bull; Ancient yew trees, some of&nbsp;which are up&nbsp;to&nbsp;hundreds of&nbsp;years old.<br>
            &bull; Colchian boxwood, creating dense green corridors.<br>
            &bull; Winding trails that lead through thick forest.<br>
            &bull; Rock formations and canyons covered with moss and lichens.<br>
            &bull; The Khosta River creates a&nbsp;cool, humid microclimate.<br>
            The grove is&nbsp;a&nbsp;living natural monument preserving the atmosphere of&nbsp;an&nbsp;ancient subtropical forest.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Tiso_Samshitovaya_roshcha/Tiso_Samshitovaya_roshcha_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Eco-Trails for Slow Exploration and Contemplation -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Eco-Trails for Slow Exploration and Contemplation</h2>
        <p class="modalBlock__description">
            Two routes are available in&nbsp;the grove: a&nbsp;short and a&nbsp;long one. Both routes pass through the most scenic areas, allowing you to&nbsp;see the grove in&nbsp;all its natural beauty.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; A&nbsp;green twilight formed by&nbsp;the dense tree canopy.<br>
            &bull; Moss covering rock formations and tree trunks.<br>
            &bull; Giant yew trees that have survived through the ages.<br>
            &bull; The Khosta River canyon, visible from the observation decks.<br>
            &bull; Silence broken only by&nbsp;the sounds of&nbsp;the forest.<br>
            &bull; The scent of&nbsp;wet wood that cannot be&nbsp;confused with anything else.<br>
            Every step along the trail is&nbsp;an&nbsp;immersion into the atmosphere of&nbsp;an&nbsp;ancient forest.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Tiso_Samshitovaya_roshcha/Tiso_Samshitovaya_roshcha_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Yew-Boxwood Grove – A Natural Symbol of Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Yew-Boxwood Grove&nbsp;&mdash; A&nbsp;Natural Symbol of&nbsp;Sochi</h2>
        <p class="modalBlock__description">
            The grove is&nbsp;not just a&nbsp;tourist attraction, but part of&nbsp;the natural heritage of&nbsp;the Caucasus.
        </p>
        <p class="modalBlock__description">
            Why the grove is&nbsp;so&nbsp;important:<br>
            &bull; It&rsquo;s a&nbsp;unique relict forest that has survived since pre-glacial times.<br>
            &bull; The grove is&nbsp;part of&nbsp;the Caucasus Biosphere Reserve, protected by&nbsp;UNESCO.<br>
            &bull; Rare and endangered plant species grow here.<br>
            &bull; This is&nbsp;a&nbsp;place of&nbsp;power where visitors come for silence and a&nbsp;connection with nature.<br>
            &bull; The grove is&nbsp;an&nbsp;important part of&nbsp;the region&rsquo;s ecological culture.<br>
            A&nbsp;place that reminds&nbsp;us of&nbsp;the fragility and value of&nbsp;nature.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Tiso_Samshitovaya_roshcha/Tiso_Samshitovaya_roshcha_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: How to Get to Yew-Boxwood Grove -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How to&nbsp;Get to&nbsp;Yew-Boxwood Grove</h2>
        <p class="modalBlock__description">
            The grove is&nbsp;located in&nbsp;Khosta, not far from Kurortny Prospekt.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;bus:</strong> <br>
            Routes run to&nbsp;the Yew-Boxwood Grove stop.
        </p>
        <p class="modalBlock__description">
            <strong>By&nbsp;car:</strong> <br>
            From the center of&nbsp;Sochi&nbsp;&mdash; about 20-25&nbsp;minutes.
        </p>
        <p class="modalBlock__description">
            <strong>On&nbsp;foot:</strong> <br>
            From Khosta, you can walk along a&nbsp;scenic road by&nbsp;the river.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Tiso_Samshitovaya_roshcha/Tiso_Samshitovaya_roshcha_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting the grove -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting the grove</h2>
        <p class="modalBlock__description">
            &bull; There is&nbsp;an&nbsp;entrance fee, as&nbsp;the area is&nbsp;protected.
        </p>
        <p class="modalBlock__description">
            &bull; Morning is&nbsp;the best time to&nbsp;visit, when soft light enhances the forest&rsquo;s beauty.
        </p>
        <p class="modalBlock__description">
            &bull; Comfortable footwear is&nbsp;recommended, as&nbsp;some parts of&nbsp;the trails are wet and rocky.
        </p>
        <p class="modalBlock__description">
            &bull; In&nbsp;summer, the grove is&nbsp;cooler than the city, offering a&nbsp;pleasant contrast.
        </p>
        <p class="modalBlock__description">
            &bull; It&rsquo;s important to&nbsp;respect the rules by&nbsp;staying on&nbsp;the trails, not breaking branches, and not touching the plants.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Tiso_Samshitovaya_roshcha/Tiso_Samshitovaya_roshcha_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

    ],

// ======================== Культурный код =============================
// ================================================================================

    culture: [
    {
        id: 'dachi_sochi',
        title: 'Sochi Dachas',
        image:'../../img/sochi/cards_culture/Sochinskie_dachi_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Sochi Dachas</h1>
</div>
<!-- Блок 1: Sochi Dachas: Resort Aristocracy of the Past, Hidden in Subtropical Greenery -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Dachas: Resort Aristocracy of&nbsp;the Past, Hidden in&nbsp;Subtropical Greenery</h2>
        <p class="modalBlock__description">
            Sochi dachas form a&nbsp;unique layer of&nbsp;the city&rsquo;s history, reflecting the era when Sochi transformed from a&nbsp;small Black Sea settlement into a&nbsp;prestigious resort of&nbsp;the Russian Empire and later the Soviet Union.
        </p>
        <p class="modalBlock__description">
            These houses are not merely architecture; they are a&nbsp;cultural code in&nbsp;which southern climate, lush nature, the ambitions of&nbsp;their owners, and the spirit of&nbsp;the times all intertwine. Today, Sochi dachas are islands of&nbsp;the past, hidden among palms, cypresses, and magnolias, where you can still feel the atmosphere of&nbsp;the old resort.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskie_dachi/Sochinskie_dachi_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Architectural Ensemble Where Europe Meets the Caucasus -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Architectural Ensemble Where Europe Meets the Caucasus</h2>
        <p class="modalBlock__description">
            Sochi dachas were built across different eras, but they share a&nbsp;common goal: to&nbsp;create a&nbsp;space of&nbsp;leisure, beauty, and seclusion.
        </p>
        <p class="modalBlock__description">
            What shapes the character of&nbsp;Sochi dachas:<br>
            &bull; Architecture in&nbsp;the styles of&nbsp;Art Nouveau, Neoclassicism, Eclecticism, and Empire.<br>
            &bull; Snow-white facades reflecting the southern sun.<br>
            &bull; Terraces and balconies overlooking lush gardens.<br>
            &bull; Stone staircases leading up&nbsp;to&nbsp;the houses through dense foliage.<br>
            &bull; Lavish parks filled with palms, magnolias, boxwood, and cypresses.<br>
            &bull; Sea view&nbsp;&mdash; an&nbsp;essential feature of&nbsp;any prestigious dacha.<br>
            Each dacha is&nbsp;a&nbsp;small world, created according to&nbsp;the individual taste of&nbsp;its owner.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskie_dachi/Sochinskie_dachi_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Dachas of Pre-Revolutionary Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Dachas of&nbsp;Pre-Revolutionary Sochi</h2>
        <p class="modalBlock__description">
            In&nbsp;the late 19th and early 20th centuries, Sochi became a&nbsp;fashionable destination for the aristocracy, wealthy merchants, and creative intelligentsia. Here, residences were built&nbsp;by: wealthy industrialists, generals, doctors, artists and writers.
        </p>
        <p class="modalBlock__description">
            These dachas were distinguished by&nbsp;their refinement and attention to&nbsp;detail.<br>
            <strong>Soviet Dachas: New Era</strong> <br>
            During the Soviet times, many private dachas became: sanatoriums, vacation homes, departmental residences. And new dachas appeared: severe and monumental, yet still just as&nbsp;deeply immersed in&nbsp;greenery.
        </p>

        <p class="modalBlock__description">
            What leaves the strongest impression: <br>
            &bull; Gardens and parks created specifically for each dacha.<br>
            &bull; Architectural details: columns, arches, stucco, towers.<br>
            &bull; Stories of&nbsp;their owners, often full of&nbsp;drama and romance.<br>
            &bull; Atmosphere of&nbsp;seclusion that endures to&nbsp;this day.<br>
            &bull; Unique blend of&nbsp;architecture and nature that defines Sochi.<br>
            Sochi dachas are living history that you can see and feel.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskie_dachi/Sochinskie_dachi_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Sochi Dachas as Cultural Heritage of the City -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Dachas as&nbsp;Cultural Heritage of&nbsp;the City</h2>
        <p class="modalBlock__description">
            Today, many of&nbsp;these dachas are architectural monuments, museums, or&nbsp;sanatoriums. They preserve the spirit of&nbsp;old Sochi, its resort elegance and a&nbsp;very particular way of&nbsp;life.
        </p>
        <p class="modalBlock__description">
            Why Sochi dachas are so&nbsp;important:<br>
            &bull; This is&nbsp;an&nbsp;architectural heritage that reflects different historical periods.<br>
            &bull; Dachas show how Sochi developed as&nbsp;a&nbsp;resort.<br>
            &bull; Many are linked to&nbsp;famous figures.<br>
            &bull; They are unique examples of&nbsp;landscape gardening.<br>
            &bull; Dachas form a&nbsp;significant part of&nbsp;the city&rsquo;s cultural circuit.<br>
            They serve as&nbsp;a&nbsp;reminder that Sochi is&nbsp;not just beaches and mountains but a&nbsp;rich and layered history.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskie_dachi/Sochinskie_dachi_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Where you can see Sochi dachas -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Where you can see Sochi dachas</h2>
        <p class="modalBlock__description">
            <strong>Most famous areas:</strong> <br>
            &bull; Central Sochi&nbsp;&mdash; old dachas along Kurortny Prospekt.<br>
            &bull; Khosta&nbsp;&mdash; dachas among dense subtropical forests.<br>
            &bull; Matsesta&nbsp;&mdash; residences hidden in&nbsp;green gorges.<br>
            &bull; Dagomys&nbsp;&mdash; dachas on&nbsp;the hills overlooking the sea.
        </p>
        <p class="modalBlock__description">
            <strong>Notable sites:</strong> <br>
            &bull; Stalin&rsquo;s dacha in&nbsp;Matsesta.<br>
            &bull; Morozova&rsquo;s dacha.<br>
            &bull; Kvitko&rsquo;s dacha.<br>
            &bull; Vorontsova&rsquo;s dacha.<br>
            &bull; Dacha Kudepsta.<br>
            Each one holds a&nbsp;separate story.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskie_dachi/Sochinskie_dachi_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Visiting Sochi Dachas -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Visiting Sochi Dachas</h2>
        <p class="modalBlock__description">
            &bull; Some dachas are open for excursions.
        </p>
        <p class="modalBlock__description">
            &bull; Others can only be&nbsp;seen from the outside while walking through the old neighborhoods.
        </p>
        <p class="modalBlock__description">
            &bull; The best time for a&nbsp;stroll is&nbsp;morning or&nbsp;evening, when the light is&nbsp;soft.
        </p>
        <p class="modalBlock__description">
            &bull; Many dachas are surrounded by&nbsp;parks&nbsp;&mdash; these are great spots for photography.
        </p>
        <p class="modalBlock__description">
            &bull; It&nbsp;is&nbsp;important to&nbsp;respect private property when a&nbsp;building is&nbsp;not a&nbsp;museum.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Sochinskie_dachi/Sochinskie_dachi_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Черноморская гастрономия =============================

    {
        id: 'chernomorskaya_gastronomiya',
        title: 'Black Sea Gastronomy',
        image:'../../img/sochi/cards_culture/Chernomorskaya_gastronomiya_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Black Sea Gastronomy</h1>
</div>
<!-- Блок 1: Black Sea Gastronomy: Flavor of the Coast, Where Sea, Sun, and Traditions Set Their Own Rhythm -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Black Sea Gastronomy: Flavor of&nbsp;the Coast, Where Sea, Sun, and Traditions Set Their Own Rhythm</h2>
        <p class="modalBlock__description">
            Black Sea gastronomy is&nbsp;more than just a&nbsp;collection of&nbsp;dishes; it&rsquo;s a&nbsp;philosophy born at&nbsp;the crossroads of&nbsp;sea, mountains, and southern climate.
        </p>
        <p class="modalBlock__description">
            Everything here revolves around freshness: fresh fish, fresh vegetables, fresh herbs, and fresh air. This is&nbsp;a&nbsp;cuisine without hurry, made for long dinners, fragrant sunsets, and hasteless conversations by&nbsp;the water.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Natural Foundations of the Cuisine: Sea, Sun, and Fertile Land -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Natural Foundations of&nbsp;the Cuisine: Sea, Sun, and Fertile Land</h2>
        <p class="modalBlock__description">
            The Black Sea coast is&nbsp;a&nbsp;region where nature itself dictates the gastronomy.
        </p>
        <p class="modalBlock__description">
            What shapes the flavor of&nbsp;Black Sea cuisine:<br>
            &bull; The sea providing fish and seafood.<br>
            &bull; Subtropical climate allowing fruits and vegetables to&nbsp;grow year-round.<br>
            &bull; Mountains where herbs and spices flourish.<br>
            &bull; Multicultural blend of&nbsp;Russian, Adyghe, Georgian, Greek, and Armenian traditions.<br>
            Black Sea gastronomy is&nbsp;a&nbsp;synthesis of&nbsp;flavors impossible to&nbsp;replicate elsewhere.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Main Heroes of the Coast -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Main Heroes of&nbsp;the Coast</h2>
        <p class="modalBlock__description">
            &bull; Barabulka (red mullet)&nbsp;&mdash; delicate, aromatic, fried to&nbsp;a&nbsp;golden crisp.<br>
            &bull; Kefal (mullet)&nbsp;&mdash; a&nbsp;symbol of&nbsp;the Black Sea, baked or&nbsp;fried.<br>
            &bull; Jack mackerel&nbsp;&mdash; perfect for the grill.<br>
            &bull; Zander and sea bass&nbsp;&mdash; often prepared whole.<br>
            &bull; Mussels and rapana&nbsp;&mdash; signature dishes of&nbsp;Sochi.
        </p>
        <p class="modalBlock__description">
            <strong>Cooking methods:</strong> <br>
            &bull; pan-frying,<br>
            &bull; coal grilling,<br>
            &bull; stewing with vegetables,<br>
            &bull; marinating in&nbsp;lemon and herbs.<br>
            The golden rule is&nbsp;minimal processing, maximum natural flavor.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Vegetables, Herbs, and Fruits: Generosity of the Southern Land -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Vegetables, Herbs, and Fruits: Generosity of&nbsp;the Southern Land</h2>
        <p class="modalBlock__description">
            Black Sea cuisine is&nbsp;unthinkable without fresh vegetables and herbs.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Tomatoes, sweet and flavorful.<br>
            &bull; Eggplants, baked, grilled, or&nbsp;stewed.<br>
            &bull; Peppers, stuffed or&nbsp;baked.<br>
            &bull; Greens added generously here: cilantro, dill, parsley, and basil.<br>
            &bull; Figs, persimmons, pomegranates, and peaches, which appear on&nbsp;tables in&nbsp;season.<br>
            Southern foods are so&nbsp;flavorful on&nbsp;their own that they require very few spices.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Multinational Traditions: Richness of Black Sea Flavors -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Multinational Traditions: Richness of&nbsp;Black Sea Flavors</h2>
        <p class="modalBlock__description">
            Black Sea cuisine is&nbsp;the result of&nbsp;a&nbsp;cultural blend.
        </p>
        <p class="modalBlock__description">
            <strong>Adyghe motifs:</strong> cheese, khalyuzh, corn-based dishes, flavorful sauces.<br>
            <strong>Georgian accents:</strong> khachapuri, satsivi, pkhali, hot sauces.<br>
            <strong>Greek heritage:</strong> coal-cooked fish, olive oil, light salads.<br>
            <strong>Armenian traditions:</strong> dolma, shashlik, lavash.<br>
            Black Sea gastronomy is&nbsp;a&nbsp;dialog of&nbsp;cultures that continues on&nbsp;every table.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Sochi Classics: Dishes Worth Trying -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sochi Classics: Dishes Worth Trying</h2>
        <p class="modalBlock__description">
            Black Sea-style mussels, baked with cheese, garlic, and herbs.
        </p>
        <p class="modalBlock__description">
            Trout from the mountain rivers, fried or&nbsp;baked, always fresh.
        </p>
        <p class="modalBlock__description">
            Grilled vegetables, simple yet incredibly flavorful.
        </p>
        <p class="modalBlock__description">
            Adjika and tkemali&nbsp;&mdash; sauces that turn any dish into a&nbsp;celebration of&nbsp;taste.
        </p>
        <p class="modalBlock__description">
            Lagman, khashlama, and shurpa&nbsp;&mdash; hearty dishes that come from the mountain regions.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>
<!-- Блок 7: Black Sea Gastronomy as Lifestyle -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Black Sea Gastronomy as&nbsp;Lifestyle</h2>
        <p class="modalBlock__description">
            This is&nbsp;a&nbsp;cuisine that does not tolerate haste. It&nbsp;is&nbsp;meant for savoring the moment, the sea air, the sun, and good company.
        </p>
        <p class="modalBlock__description">
            Why Black Sea gastronomy is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;reflects the climate and nature of&nbsp;the region.<br>
            &bull; It&nbsp;unites many cultures.<br>
            &bull; It&nbsp;is&nbsp;based on&nbsp;freshness and naturalness.<br>
            &bull; It&nbsp;creates an&nbsp;atmosphere of&nbsp;southern hospitality.<br>
            &bull; It&nbsp;is&nbsp;part of&nbsp;the resort identity of&nbsp;Sochi and the entire coast.<br>
            Black Sea gastronomy is&nbsp;a&nbsp;flavor you will not forget.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Chernomorskaya_gastronomiya/Chernomorskaya_gastronomiya_7.jpg" alt="photo_7" loading="lazy">
    </div>
</div>`
    },

// ======================== Фестивальное движение =============================

    {
        id: 'festival_dvizh',
        title: 'Festival Movement',
        image:'../../img/sochi/cards_culture/Festivalnoe_dvizhenie_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Festival Movement</h1>
</div>
<!-- Блок 1: Festival Movement: Creative Energy That Brings People and Cities Together -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Festival Movement: Creative Energy That Brings People and Cities Together</h2>
        <p class="modalBlock__description">
            The festival movement is&nbsp;not just a&nbsp;series of&nbsp;events; it&nbsp;is&nbsp;a&nbsp;cultural organism that lives, evolves, and transforms the space around&nbsp;it.
        </p>
        <p class="modalBlock__description">
            It&nbsp;is&nbsp;a&nbsp;phenomenon where music, theater, film, gastronomy, sports, traditions, and modernity all meet. Festivals create an&nbsp;atmosphere of&nbsp;celebration, freedom, and creativity, turning ordinary places into hubs of&nbsp;attraction and people into participants in&nbsp;a&nbsp;larger cultural dialog.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Festivalnoe_dvizhenie/Festivalnoe_dvizhenie_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Roots of the Festival Movement: From Folk Celebrations to Modern Shows -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Roots of&nbsp;the Festival Movement: From Folk Celebrations to&nbsp;Modern Shows</h2>
        <p class="modalBlock__description">
            Festivals existed long before the word entered modern usage. Originally, they were folk gatherings, fairs, rituals, and seasonal celebrations that brought communities together.
        </p>
        <p class="modalBlock__description">
            What shapes the origins of&nbsp;the festival movement:<br>
            &bull; Collectivity&nbsp;&mdash; a&nbsp;festival has always been an&nbsp;event for everyone.<br>
            &bull; Ritual character&nbsp;&mdash; many festivals grew out of&nbsp;ancient ceremonies.<br>
            &bull; Creativity&nbsp;&mdash; music, dance, and crafts were part of&nbsp;every celebration.<br>
            &bull; Communication&nbsp;&mdash; festivals served as&nbsp;meeting places and opportunities to&nbsp;exchange experience.<br>
            &bull; Emotion&nbsp;&mdash; the main thread connecting festivals across all eras.<br>
            Modern festivals have preserved this foundation while taking on&nbsp;new forms and scales.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Festivalnoe_dvizhenie/Festivalnoe_dvizhenie_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Modern Festival Landscape: Diversity of Forms and Genres -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Modern Festival Landscape: Diversity of&nbsp;Forms and Genres</h2>
        <p class="modalBlock__description">
            Today, the festival movement covers nearly every sphere of&nbsp;life.
        </p>
        <p class="modalBlock__description">
            <strong>Main areas</strong> <br>
            &bull; Music festivals, from classical to&nbsp;electronic.<br>
            &bull; Film festivals&nbsp;&mdash; platforms for premieres and creative encounters.<br>
            &bull; Theater forums, where new performances and ideas are born.<br>
            &bull; Gastronomic festivals&nbsp;&mdash; celebrations of&nbsp;flavor and local produce.<br>
            &bull; Ethno-cultural festivals preserving traditions and folk art.<br>
            &bull; Sports festivals&nbsp;&mdash; mass runs, bike days, extreme shows.<br>
            &bull; Street festivals&nbsp;&mdash; art that moves into the urban space.<br>
            Each festival is&nbsp;its own world, with a&nbsp;distinct atmosphere and rhythm.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Festivalnoe_dvizhenie/Festivalnoe_dvizhenie_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Inner World of Festival: Energy That Creates Community -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Inner World of&nbsp;Festival: Energy That Creates Community</h2>
        <p class="modalBlock__description">
            A&nbsp;festival is&nbsp;not just a&nbsp;stage and a&nbsp;schedule. It&nbsp;is&nbsp;a&nbsp;space where people become part of&nbsp;a&nbsp;shared experience.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Emotional involvement&nbsp;&mdash; participants become co-creators of&nbsp;the event.<br>
            &bull; Freedom of&nbsp;expression&nbsp;&mdash; festivals give people the chance to&nbsp;be&nbsp;themselves.<br>
            &bull; Temporary community arising and dissolving, yet leaving its mark.<br>
            &bull; Dialog of&nbsp;cultures&nbsp;&mdash; different traditions meeting on&nbsp;the same ground.<br>
            &bull; Creative atmosphere inspiring new ideas.<br>
            &bull; Space of&nbsp;openness, where social boundaries blur.<br>
            A&nbsp;festival is&nbsp;a&nbsp;place where people feel part of&nbsp;something more.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Festivalnoe_dvizhenie/Festivalnoe_dvizhenie_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Festival Movement as Cultural Drive for Regions -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Festival Movement as&nbsp;Cultural Drive for Regions</h2>
        <p class="modalBlock__description">
            Festivals transform cities and regions, making them more vibrant and attractive.
        </p>
        <p class="modalBlock__description">
            Why festivals are so&nbsp;important:<br>
            &bull; They develop tourism and draw visitors.<br>
            &bull; They create new cultural traditions.<br>
            &bull; They support local artists, craftspeople, and entrepreneurs.<br>
            &bull; They shape a&nbsp;positive image of&nbsp;a&nbsp;region.<br>
            &bull; They foster cultural exchange.<br>
            &bull; They turn a&nbsp;place into a&nbsp;destination of&nbsp;meaning and inspiration.<br>
            The festival movement is&nbsp;a&nbsp;cultural energy that brings cities to&nbsp;life.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Festivalnoe_dvizhenie/Festivalnoe_dvizhenie_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Festivals as Lifestyle -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Festivals as&nbsp;Lifestyle</h2>
        <p class="modalBlock__description">
            For many people, festivals have become not just entertainment but part of&nbsp;their personal identity.
        </p>
        <p class="modalBlock__description">
            What makes the festival movement unique:<br>
            &bull; It&nbsp;brings together people of&nbsp;different ages and interests.<br>
            &bull; It&nbsp;creates an&nbsp;atmosphere of&nbsp;celebration accessible to&nbsp;everyone.<br>
            &bull; It&nbsp;allows you to&nbsp;discover new cultures, tastes, and artistic directions.<br>
            &bull; It&nbsp;offers a&nbsp;chance to&nbsp;feel part of&nbsp;a&nbsp;larger creative process.<br>
            &bull; It&nbsp;creates lasting memories, vivid moments that stay with you for life.<br>
            Festivals are a&nbsp;way to&nbsp;live more brightly.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Festivalnoe_dvizhenie/Festivalnoe_dvizhenie_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>`
    },

// ======================== Курортная архитектура =============================

    {
        id: 'curort_arhitektura',
        title: 'Resort Architecture',
        image:'../../img/sochi/cards_culture/Kurortnaya_arhitektura_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Resort Architecture</h1>
</div>
<!-- Блок 1: Resort Architecture: Language of Leisure That Shapes Atmosphere of the Coast -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Resort Architecture: Language of&nbsp;Leisure That Shapes Atmosphere of&nbsp;the Coast</h2>
        <p class="modalBlock__description">
            Resort architecture is&nbsp;a&nbsp;distinctive style born of&nbsp;the sun, the sea, and humanity&rsquo;s desire for beauty and rest.
        </p>
        <p class="modalBlock__description">
            It&nbsp;creates mood, sets the rhythm of&nbsp;resort life, and shapes the face of&nbsp;the cities where people come for ease, inspiration, and a&nbsp;sense of&nbsp;celebration. This is&nbsp;architecture that does not overwhelm: it&nbsp;invites, embraces, and relaxes.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Origins of Resort Architecture: From European Villas to Southern Dachas -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Origins of&nbsp;Resort Architecture: From European Villas to&nbsp;Southern Dachas</h2>
        <p class="modalBlock__description">
            The first resorts appeared in&nbsp;Europe in&nbsp;the 19th century, when seaside leisure became fashionable among the aristocracy. It&nbsp;was then that the core principles of&nbsp;resort architecture took shape.
        </p>
        <p class="modalBlock__description">
            What underlies&nbsp;it:<br>
            &bull; Lightness and openness, to&nbsp;let in&nbsp;air and sunlight.<br>
            &bull; Terraces and balconies, designed for contemplating nature.<br>
            &bull; White and pastel facades, reflecting the sun.<br>
            &bull; Gardens and parks as&nbsp;an&nbsp;extension of&nbsp;the home.<br>
            &bull; Mixture of&nbsp;styles, from Art Nouveau to&nbsp;Neoclassicism.<br>
            These ideas quickly spread around the world, from the Mediterranean to&nbsp;the Black Sea.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Resort Architecture of Sochi: Synthesis of Nature, History, and Southern Style -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Resort Architecture of&nbsp;Sochi: Synthesis of&nbsp;Nature, History, and Southern Style</h2>
        <p class="modalBlock__description">
            Sochi is&nbsp;one of&nbsp;the finest examples of&nbsp;how resort architecture can shape a&nbsp;city&rsquo;s identity.
        </p>
        <p class="modalBlock__description">
            What shapes the Sochi resort style:<br>
            &bull; Stalinist Empire style in&nbsp;sanatoriums and dachas.<br>
            &bull; Mediterranean motifs in&nbsp;villas and guest houses.<br>
            &bull; Soviet modernism, woven into the subtropical greenery.<br>
            &bull; Modern resort complexes inspired by&nbsp;alpine and maritime traditions.<br>
            &bull; Lush parks that become part of&nbsp;the architectural ensemble.<br>
            Sochi is&nbsp;a&nbsp;city where architecture and nature live in&nbsp;dialog.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Inner World of Resort Architecture: Space for Rest and Contemplation -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Inner World of&nbsp;Resort Architecture: Space for Rest and Contemplation</h2>
        <p class="modalBlock__description">
            Resort architecture creates a&nbsp;special atmosphere in&nbsp;which people feel freer.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Large windows and panoramic views, connecting the interior with nature.<br>
            &bull; Terraces, verandas, and loggias, where much of&nbsp;resort life unfolds.<br>
            &bull; Arcades and colonnades, casting shade and coolness.<br>
            &bull; Fountains and pools as&nbsp;compositional elements.<br>
            &bull; Transitions between buildings and gardens, blurring the boundary between home and nature.<br>
            This is&nbsp;architecture that works not only for the eyes but for the senses.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Sanatoriums and Guest Houses: Symbols of the Resort Era -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sanatoriums and Guest Houses: Symbols of&nbsp;the Resort Era</h2>
        <p class="modalBlock__description">
            A&nbsp;special place in&nbsp;resort architecture belongs to&nbsp;sanatoriums&nbsp;&mdash; entire complexes created for rest and rejuvenation.
        </p>
        <p class="modalBlock__description">
            Their features:<br>
            &bull; monumental facades,<br>
            &bull; spacious halls,<br>
            &bull; colonnades and staircases,<br>
            &bull; vast parks,<br>
            &bull; therapeutic buildings integrated into the landscape.<br>
            Sochi&rsquo;s sanatoriums are architectural monuments that still define the character of&nbsp;the coast.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: Modern Resort Architecture: Comfort, Ecology, and Aesthetics -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Modern Resort Architecture: Comfort, Ecology, and Aesthetics</h2>
        <p class="modalBlock__description">
            Today, resort architecture is&nbsp;moving toward sustainability and deeper integration with nature.
        </p>
        <p class="modalBlock__description">
            <strong>New trends:</strong> <br>
            &bull; natural materials&nbsp;&mdash; wood, stone, glass;<br>
            &bull; panoramic facades offering sea and mountain views;<br>
            &bull; landscape architecture where plants are part of&nbsp;the design;<br>
            &bull; minimalism that creates a&nbsp;sense of&nbsp;spaciousness;<br>
            &bull; wellness concepts combining architecture and health.<br>
            Modern resorts aim not to&nbsp;compete with the natural environment but to&nbsp;enhance&nbsp;it.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>
<!-- Блок 7: Resort Architecture as Cultural Code of the Coast -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Resort Architecture as&nbsp;Cultural Code of&nbsp;the Coast</h2>
        <p class="modalBlock__description">
            Resort architecture is&nbsp;not just buildings. It&nbsp;is&nbsp;a&nbsp;lifestyle that shapes the atmosphere of&nbsp;a&nbsp;city and its identity.
        </p>
        <p class="modalBlock__description">
            Why it&nbsp;is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;creates the image of&nbsp;the resort.<br>
            &bull; It&nbsp;influences people&rsquo;s moods.<br>
            &bull; It&nbsp;drives tourist appeal.<br>
            &bull; It&nbsp;preserves history.<br>
            &bull; It&nbsp;brings nature and culture together.<br>
            Resort architecture is&nbsp;the language the coast speaks.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Kurortnaya_arhitektura/Kurortnaya_arhitektura_7.jpg" alt="photo_7" loading="lazy">
    </div>
</div>`
    },

// ======================== Олимпийское наследие =============================

    {
        id: 'olimpik_nasledie',
        title: 'Olympic Legacy',
        image:'../../img/sochi/cards_culture/Olimpijskoe_nasledie_0.jpg',
        modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Olympic Legacy</h1>
</div>
<!-- Блок 1: Olympic Legacy: Energy of the Games That Changed Sochi Forever -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Olympic Legacy: Energy of&nbsp;the Games That Changed Sochi Forever</h2>
        <p class="modalBlock__description">
            The Olympic legacy of&nbsp;Sochi is&nbsp;more than just the venues built for the 2014&nbsp;Games. It&nbsp;is&nbsp;a&nbsp;new chapter in&nbsp;the city&rsquo;s history, the moment when Sochi transformed from a&nbsp;resort into an&nbsp;international center for sports, culture, and major events.
        </p>
        <p class="modalBlock__description">
            The Olympics became a&nbsp;catalyst for growth, reshaping the city&rsquo;s infrastructure, its rhythm of&nbsp;life, and how the world perceives&nbsp;it.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_1.jpg" alt="photo_1" loading="lazy">
    </div>
</div>
<!-- Блок 2: Architectural Ensemble of Olympic Park: Symbol of Modern Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Architectural Ensemble of&nbsp;Olympic Park: Symbol of&nbsp;Modern Sochi</h2>
        <p class="modalBlock__description">
            Olympic Park is&nbsp;a&nbsp;space where architecture, technology, and the sea come together to&nbsp;create a&nbsp;unified vision of&nbsp;the future. Here, every venue is&nbsp;not just a&nbsp;building but part of&nbsp;a&nbsp;larger composition.
        </p>
        <p class="modalBlock__description">
            What defines the look of&nbsp;Olympic Park:<br>
            &bull; The Bolshoy Ice Dome&nbsp;&mdash; like a&nbsp;giant droplet reflecting the sky.<br>
            &bull; Fisht&nbsp;&mdash; a&nbsp;stadium inspired by&nbsp;the shape of&nbsp;a&nbsp;mountain peak.<br>
            &bull; Iceberg&nbsp;&mdash; an&nbsp;ice palace with a&nbsp;dynamic facade.<br>
            &bull; Shayba&nbsp;&mdash; a&nbsp;compact arena resembling a&nbsp;hockey puck.<br>
            &bull; Olympic Square with the bowl of&nbsp;flames, now a&nbsp;symbol of&nbsp;the Games.<br>
            &bull; Spacious promenades connecting the venues into a&nbsp;single route.<br>
            This is&nbsp;architecture that speaks the language of&nbsp;the present.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_2.jpg" alt="photo_2" loading="lazy">
    </div>
</div>
<!-- Блок 3: Mountain Cluster: Realm of Sports Among the Peaks -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Mountain Cluster: Realm of&nbsp;Sports Among the Peaks</h2>
        <p class="modalBlock__description">
            Krasnaya Polyana became the second heart of&nbsp;the Olympics, the site of&nbsp;alpine skiing and snowboarding events.
        </p>
        <p class="modalBlock__description">
            <strong>Main places of&nbsp;the mountain cluster</strong> <br>
            &bull; Rosa Khutor&nbsp;&mdash; a&nbsp;world‑class alpine resort.<br>
            &bull; RusSki Gorki&nbsp;&mdash; a&nbsp;ski jumping complex.<br>
            &bull; Sanki&nbsp;&mdash; a&nbsp;sliding center for bobsled and sledge.<br>
            &bull; Alpika Service&nbsp;&mdash; an&nbsp;alpine ski center.<br>
            &bull; Laura&nbsp;&mdash; a&nbsp;biathlon and cross-country skiing complex.<br>
            They have become the foundation for year‑round sports tourism.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_3.jpg" alt="photo_3" loading="lazy">
    </div>
</div>
<!-- Блок 4: Sports Infrastructure That Operates Year-Round -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Sports Infrastructure That Operates Year-Round</h2>
        <p class="modalBlock__description">
            After the Olympics, the venues did not become &laquo;white elephants.&raquo; Instead, they serve as&nbsp;platforms for: international tournaments, concerts, festivals, mass sports events, professional team training.
        </p>
        <p class="modalBlock__description">
            What leaves the strongest impression:<br>
            &bull; Accessibility of&nbsp;venues to&nbsp;residents and tourists.<br>
            &bull; Pedestrian zones and bicycle paths that have become part of&nbsp;the urban environment.<br>
            &bull; An&nbsp;events calendar that makes Sochi a&nbsp;hub for major activities.<br>
            &bull; Integration of&nbsp;sports into everyday life, from ice rinks to&nbsp;bike rentals.<br>
            &bull; Unique fusion of&nbsp;architecture and nature, rare among Olympic cities.<br>
            The Olympic legacy is&nbsp;not a&nbsp;museum; it&nbsp;is&nbsp;a&nbsp;living organism.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_4.jpg" alt="photo_4" loading="lazy">
    </div>
</div>
<!-- Блок 5: Social and Cultural Significance of the Olympic Legacy -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Social and Cultural Significance of&nbsp;the Olympic Legacy</h2>
        <p class="modalBlock__description">
            The Olympics changed not only the architecture but also the very identity of&nbsp;the city.
        </p>
        <p class="modalBlock__description">
            Why the Olympic legacy is&nbsp;so&nbsp;important:<br>
            &bull; It&nbsp;raised Sochi&rsquo;s status on&nbsp;the world map.<br>
            &bull; It&nbsp;created new jobs and tourist destinations.<br>
            &bull; It&nbsp;drove the development of&nbsp;transport, roads, hotels, and embankments.<br>
            &bull; It&nbsp;shaped a&nbsp;new culture of&nbsp;sports and recreation.<br>
            &bull; It&nbsp;transformed Sochi into a&nbsp;year‑round international‑class resort.<br>
            The Olympic legacy is&nbsp;the foundation on&nbsp;which modern Sochi is&nbsp;built.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_5.jpg" alt="photo_5" loading="lazy">
    </div>
</div>
<!-- Блок 6: How the Olympic legacy lives on today -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">How the Olympic legacy lives on&nbsp;today</h2>
        <p class="modalBlock__description">
            <strong>Olympic Park:</strong> a&nbsp;place to&nbsp;stroll, a&nbsp;center of&nbsp;events, a&nbsp;territory of&nbsp;sports and entertainment.
        </p>
        <p class="modalBlock__description">
            <strong>Krasnaya Polyana:</strong> ski resort in&nbsp;winter, a&nbsp;center for trekking and festivals in&nbsp;summer.
        </p>
        <p class="modalBlock__description">
            <strong>Transport infrastructure:</strong> the high-speed Lastochka, new roads, modern airport.
        </p>
        <p class="modalBlock__description">
            <strong>Urban environment:</strong> comfortable embankments, parks, bicycle routes.
        </p>
        <p class="modalBlock__description">
            The Olympic legacy has become part of&nbsp;the city&rsquo;s daily life.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_6.jpg" alt="photo_6" loading="lazy">
    </div>
</div>
<!-- Блок 7: Olympic Legacy as Symbol of the New Sochi -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Olympic Legacy as&nbsp;Symbol of&nbsp;the New Sochi</h2>
        <p class="modalBlock__description">
            The Games gave Sochi not only venues but also a&nbsp;new philosophy of&nbsp;openness, dynamism, and development.
        </p>
        <p class="modalBlock__description">
            The legacy continues to&nbsp;work, to&nbsp;inspire, and to&nbsp;draw people from all over the world.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/sochi/cards_modal/Olimpijskoe_nasledie/Olimpijskoe_nasledie_7.jpg" alt="photo_7" loading="lazy">
    </div>
</div>`
    }

    ]
};

window.en_sochiData = en_sochiData;