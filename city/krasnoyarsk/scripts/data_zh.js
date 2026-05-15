// ============================================
// ДАННЫЕ КАРТОЧЕК КРАСНОЯРСКОГО КРАЯ
// ============================================

const zh_krasnoyarskData = {

//--------------------------------Точки притяжения региона---------------------------------------------------
    attractions: [
        {
            id: 'ergaki',
            title: '"叶尔加基"自然公园',
            image: '../../img/krasnoyarsk/cards_tochki/Ergaki_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">&quot;叶尔加基&quot;自然公园</h1>
</div>
<!-- Блок 1: Жемчужина Сибири -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">西伯利亚的明珠</h2>
        <p class="modalBlock__description">
            &quot;叶尔加基&quot;自然公园坐落于克拉斯诺亚尔斯克边疆区南部，西萨彦岭的怀抱之中。这里是户外探险爱好者的热门圣地。公园成立于2005年，旨在保护独特的自然风貌并发展生态旅游。
        </p>
        <p class="modalBlock__description">
            怪诞嶙峋的山峰，仿佛出自印象派画家之手，挺拔的落叶松与如镜的高山湖泊交相辉映&mdash;&mdash;&quot;叶尔加基&quot;（突厥语意为&quot;手指&laquo;）以其极具表现力的天际线，在众多景观中脱颖而出。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_1.jpg" alt="Природный парк Ергаки" loading="lazy">
    </div>
</div>
<!-- Блок 2: История и искусство -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">历史与艺术</h2>
        <p class="modalBlock__description">
            正是这摄人心魄的景致，在二十世纪初吸引了这片土地的发现者&mdash;&mdash;克拉斯诺亚尔斯的画家们。苏联画家兼诗人托伊沃&middot;里安内利，早在上个世纪中叶便如此描绘他的感受：
        </p>
        <p class="modalBlock__description">
            &laquo;在这里，你能找到人们称之为&lsquo;奇境&rsquo;的一切，且是压倒性的丰盈。此地，所有经典风景画的构建法则都被抛至九霄云外。你坐在千米断崖之缘，眼前，岩刃自深渊刺出，直逼碧空与云霭&mdash;&mdash;这里没有前景，只有虚空幻境，全然失去了惯常的尺度感。我们的风景画，看起来倒像是浪漫主义舞台布景中偶得的碎片。&raquo;
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_2.jpg" alt="Художественный образ Ергаков" loading="lazy">
    </div>
</div>
<!-- Блок 3: Открытие для туризма -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">旅游业的开拓</h2>
        <p class="modalBlock__description">
            登山者们大规模征服此地尖峰的时代，始于1990年代。也正是在那时，保护这片未来公园地貌的必要性应运而生。如今，叶尔加基或许已成为克拉斯诺亚尔斯克南部最主要的旅游中心。
        </p>
        <p class="modalBlock__description">
            夏季，你可以踏上徒步或骑马之旅，攀登心仪的山峰，沿河漂流，或在帐篷营地享受闲暇。冬季，这里则是高山滑雪爱好者的天堂：雪季从十月底持续至次年六月中旬。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_3.jpg" alt="Активный отдых в Ергаках" loading="lazy">
    </div>
</div>
<!-- Блок 4: Инфраструктура и маршруты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">基础设施与路线</h2>
        <p class="modalBlock__description">
            公园内铺设了数条生态步道：&quot;石城&quot;步道、可参观同名博物馆的&quot;西伯利亚猎人之路&quot;，以及从彩虹湖通往悬石的小径。那块巨大的悬石，仿佛在近乎垂直的湖岸斜坡上保持着惊险的平衡。
        </p>
        <p class="modalBlock__description">
            公园内设有多处旅行者营地和帐篷区，以及全年运营的旅舍。在此过夜，既能沉浸于萨彦岭的怀抱，又不会惊扰山脉的静谧与脆弱。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/ergaki/Ergaki_4.jpg" alt="Инфраструктура парка Ергаки" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            M-54 &quot;叶尼塞&quot;公路纵穿自然公园全境。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>自驾：</strong>从邻近的哈卡斯共和国或图瓦共和国出发最为便捷。从阿巴坎或克孜勒驾车约需两个多小时，从克拉斯诺亚尔斯克市出发则需约九小时。 </li>
            <li class="modalBlock__listItem"><strong>公共交通：</strong>每日有从克拉斯诺亚尔斯克开往克孜勒的班车途经叶尔加基。车程约11小时，车票可通过克拉斯诺亚尔斯克汽车站网站购买。 </li>
            <li class="modalBlock__listItem"><strong>需在公园访客中心办理通行许可。</strong></li>
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
            title: '曼斯卡娅环湾',
            image: '../../img/krasnoyarsk/cards_tochki/Manskaya_petlya_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">曼斯卡娅环湾</h1>
    <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Самая узнаваемая излучина -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">最富盛名的河曲</h2>
        <p class="modalBlock__description">
            曼斯卡娅环湾是马纳河环绕岩石山体形成的如画河曲，如今堪称克拉斯诺亚尔斯克边疆区最具辨识度的风景名片。景色壮丽非凡，从城市出发仅需数小时即可抵达。
        </p>
        <p class="modalBlock__description">
            峰顶可欣赏震撼的日出与日落，您可以在此伴着奇幻风光野餐，或于璀璨星空下的帐篷中夜宿。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_1.jpg" alt="Вид на Манскую петлю" loading="lazy">
    </div>
</div>
<!-- Блок 2: Река Мана и ее изгибы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">马纳河与其蜿蜒之道</h2>
        <p class="modalBlock__description">
            马纳河是叶尼塞河的右支流，流经东萨彦岭北麓的曼斯科耶白垯区。河流沿途形成众多风景如画的河湾&mdash;&mdash;其中最著名（也最便于旅行者抵达）的几处，位于其汇入叶尼塞河口上游数公里处。
        </p>
        <p class="modalBlock__description">
            环绕岩岬的这道河曲便被称作&quot;曼斯卡娅环湾&quot;。您可从一处高地的观景台俯瞰河流壮美的转折&mdash;&mdash;这里设有观景平台，西伯利亚风景明信片上那些令人惊叹的画面皆可在此捕捉。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_2.jpg" alt="Река Мана и скальные массивы" loading="lazy">
    </div>
</div>
<!-- Блок 3: Маршрут к смотровой площадке -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">前往观景台路线</h2>
        <p class="modalBlock__description">
            前往此处的路线并非易途，但仍可一日往返。路径多以松软土石和乱石堆（尖锐砾石）为主，爬升高度约650米。
        </p>
        <p class="modalBlock__description">
            建议选择晴好天气前往，携带充足的饮水并穿着舒适的徒步鞋。尽管路途艰辛，但峰顶的绝景定会令您觉得一切付出都值得。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_3.jpg" alt="Тропа к Манской петле" loading="lazy">
    </div>
</div>
<!-- Блок 4: Впечатления и возможности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">体验与活动</h2>
        <p class="modalBlock__description">
            曼斯卡娅环湾不仅是摄影胜地，更是沉浸感受西伯利亚自然之魂的绝佳所在。此地笼罩着一种独特的宁静与恢弘之气。
        </p>
        <p class="modalBlock__description">
            这里备受摄影师、旅行者及户外爱好者的青睐。除了徒步登山，马纳河漂流也是此处的热门项目，让您得以从独特视角欣赏环湾及河流沿岸其他美景。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/manskaya_petlya/Manskaya_petlya_4.jpg" alt="Отдых и сплавы на Манской петле" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            前往曼斯卡娅环湾可选择自驾或公共交通，但最后一段路程均需徒步完成。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>自驾：</strong>从克拉斯诺亚尔斯克市中心至徒步起点约40公里，可定位&quot;曼斯卡娅环湾&quot;度假村作为参照。徒步登顶观景台约7公里，一般需四个半小时。 </li>
            <li class="modalBlock__listItem"><strong>公共交通：</strong>从克拉斯诺亚尔斯克乘电气火车至乌斯季-马纳站，换乘巴士至曼斯基村。从村庄同样需步行至登山路线起点。 </li>
        </ul>
        <p class="modalBlock__description">
            建议：清晨出发以便在观景台邂逅日出或日落，并备齐山地徒步所需物品。
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
            title: '“克拉斯诺亚尔斯克石柱”',
            image: '../../img/krasnoyarsk/cards_tochki/Krasnoyarskie_stolby_0.jpg',
            modalContent:


`<div class="modalHeader">
    <h1 class="modalHeader__title">&laquo;克拉斯诺亚尔斯克石柱&raquo;</h1>
    <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Феномен сиенитовых исполинов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">正长岩巨人的奇观</h2>
        <p class="modalBlock__description">
            这是该地区最古老的国家公园，坐落于东萨彦岭的支脉之中。公园因巨大的正长岩（一种火成岩）岩柱群而闻名，其轮廓隐约可辨人形、动物乃至神话生物。
        </p>
        <p class="modalBlock__description">
            围绕此地形成的&quot;石柱文化&quot;现象，已成为广大攀岩者与自然保护者的一种独特次文化。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_1.jpg" alt="Скалы Красноярских столбов" loading="lazy">
    </div>
</div>
<!-- Блок 2: История открытия и освоения -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalHeader__title">发现与开拓史</h2>
        <p class="modalBlock__description">
            关于这些仿佛从茂密针叶林中陡然生长的奇异岩柱的最初记载，可追溯至18世纪的旅行者。随后，传奇的俄罗斯航海家维图斯&middot;白令探究了这一自然奇观，1735年，北方大探险的队员们也接踵而至。
        </p>
        <p class="modalBlock__description">
            十九世纪末，随着西伯利亚大铁路的修建，石柱区域被积极开发。这直接推动了&quot;石柱客&quot;运动的兴起&mdash;&mdash;这是一个由攀岩者和自然保护者组成的民间团体，他们联合起来探索并开辟攀登山峰的路线。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_2.jpg" alt="Историческое исследование столбов" loading="lazy">
    </div>
</div>
<!-- Блок 3: Культура столбизма -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">石柱文化</h2>
        <p class="modalBlock__description">
            &quot;克拉斯诺亚尔斯克石柱&quot;是一座国家公园。变更其保护地位的初衷，是为了让旅行者能更容易地亲近此地。然而，&quot;石柱客&quot;的信条始终呼吁保护并珍惜自然。
        </p>
        <p class="modalBlock__description">
            最早的&quot;石柱客&quot;出现于一个半世纪以前。历经时光，他们不仅形成了独特的攀岩技术、章程与规则，更孕育了一套特殊的语言、传统乃至禁忌。这个独特的社群，已成为该地区文化遗产的一部分。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_3.jpg" alt="Сообщество столбистов" loading="lazy">
    </div>
</div>
<!-- Блок 4: Территория и маршруты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">区域与路线</h2>
        <p class="modalBlock__description">
            国家公园的岩柱区包含四个部分：中央区（访客最多）、塔克马科夫区、卡尔塔特区以及&quot;野石柱&quot;区。几乎所有的岩柱、其碎片、甚至一些石块，在这里都有自己的名字。公园内共有超过100座岩柱，高度可达90米。
        </p>
        <p class="modalBlock__description">
            初访者可以从东入口开始探索，那里设有数条简易路线。有经验的旅行者则会喜爱那条通往主要岩柱的环形路线，从中央入口直至&quot;纳雷姆&quot;管理站。东入口附近坐落着&quot;河狸谷&quot;趣味公园&mdash;&mdash;一个配备缆车的滑雪度假综合体，从此处可饱览壮丽的全景风光。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stolby/Krasnoyarskie_stolby_4.jpg" alt="Туристические маршруты по парку" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            国家公园区域几乎紧邻克拉斯诺亚尔斯克市界，使其交通极为便利。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>自驾：</strong>从市中心沿斯维尔德洛夫大街行驶20分钟，即可抵达公园中央入口。若前往东入口，请注意转入巴扎伊斯卡亚大街。 </li>
            <li class="modalBlock__listItem"><strong>公共交通：</strong>从市中心有多路公交车和电气火车可抵达中央入口。前往东入口及&quot;河狸谷&quot;则仅能搭乘机动车辆。 </li>
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
            title: '普托拉纳高原',
            image: '../../img/krasnoyarsk/cards_tochki/Plato_Putorana_0.jpg',
            modalContent:


`<div class="modalHeader">
    <h1 class="modalHeader__title">普托拉纳高原</h1>
</div>
<!-- Блок 1: Затерянный мир рекордов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">失落的世界，纪录的王国</h2>
        <p class="modalBlock__description">
            普托拉纳高原是一片火山熔岩构成的山国，面积略大于英国。对大多数旅行者而言，它依然难以企及。抵达此处需乘船或雪地摩托，有些地方则唯有直升机方可通达。
        </p>
        <p class="modalBlock__description">
            这里是俄罗斯的地理中心，也是国内的&quot;难抵极&quot;&mdash;&mdash;距离所有交通路线最为遥远、最难到达的地点。这是一片汇聚了所有不可思议纪录的宏伟失落世界。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_1.jpg" alt="Плато Путорана - затерянный мир" loading="lazy">
    </div>
</div>
<!-- Блок 2: Суровый климат и происхождение -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">严酷的气候与地质起源</h2>
        <p class="modalBlock__description">
            这里一年中有八个月是冬季，气温可降至零下55摄氏度，完全没有无霜期。而在极其短暂却生机盎然的夏季，数千条瀑布随之解冻奔流，其中包括欧亚大陆最高的塔利尼科夫瀑布。
        </p>
        <p class="modalBlock__description">
            这片平顶山（无顶峰的山）群的形成，源于2.5亿年前一座古代超级火山的喷发。凝固的岩浆形成了&quot;暗色岩&quot;&mdash;&mdash;完全由玄武岩构成的阶梯状山脉。地质学家认为，高原至今仍在以每年11毫米的速度抬升。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_2.jpg" alt="Климат и ландшафт Путораны" loading="lazy">
    </div>
</div>
<!-- Блок 3: История изучения -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">考察历史</h2>
        <p class="modalBlock__description">
            普托拉纳的发现者和首位科学描述者，是俄罗斯帝国地理学会的活跃成员亚历山大&middot;米登多夫。在1845年前往泰梅尔的探险中，他发现了高原的支脉，并标定了永久冻土的边界。
        </p>
        <p class="modalBlock__description">
            如今，普托拉纳高原的核心区域属于普托拉纳自然保护区，由泰梅尔保护区联合管理局管理。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_3.jpg" alt="Исследование плато Путорана" loading="lazy">
    </div>
</div>
<!-- Блок 4: Врата в царство Путорана -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">通往高原王国的大门</h2>
        <p class="modalBlock__description">
            拉马湖堪称进入普托拉纳王国的独特门户&mdash;&mdash;这里是前往高原的主要水路。拉马湖是俄罗斯最深的湖泊之一，距离诺里尔斯克120公里。
        </p>
        <p class="modalBlock__description">
            在经验丰富的向导带领下，您可以进行几次无需专业装备的徒步攀登。热门路线从拉马湖出发，沿费斯蒂瓦利纳亚山坡行进，通往拥有如画瀑布的涅拉拉赫峡谷。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/plato_putorano/Plato_Putorana_4.jpg" alt="Озеро Лама и туристические маршруты" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            前往保护区旅行，最便捷的起点是诺里尔斯克。高原本身不通公路，因此只能通过空中或经由拉马湖进入。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>直升机：</strong>从空中俯瞰，高原展现出宛如外星般的震撼景观。直升机接驳对于那些不准备长途徒步的旅行者而言，是一种迷人的选择。 </li>
            <li class="modalBlock__listItem"><strong>水路与雪路：</strong>夏季可乘船经拉马湖抵达高原，冬季则依靠雪地摩托。这是深入保护区人迹罕至区域的主要方式。 </li>
        </ul>
        <p class="modalBlock__description">
            高原不同区域一年内的温差可达100&deg;C，因此在规划行程时，需极为周密地考虑徒步着装。
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
            title: '托尔加申斯基山岭',
            image: '../../img/krasnoyarsk/cards_tochki/Torgashenskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">托尔加申斯基山岭</h1>
    <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Сказочная страна рядом с городом -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">城边的童话国度</h2>
        <p class="modalBlock__description">
            这处靠近克拉斯诺亚尔斯的自然景点，深受市民和游客的喜爱。抵达并不困难，而展现在眼前的景色会让你仿佛踏入童话国度。
        </p>
        <p class="modalBlock__description">
            通往托尔加申斯基山岭顶峰的，是俄罗斯最长的阶梯&mdash;&mdash;共有1683级台阶。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_1.jpg" alt="Панорама Торгашинского хребта" loading="lazy">
    </div>
</div>
<!-- Блок 2: Живописная горная гряда -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">风景如画的山脉群</h2>
        <p class="modalBlock__description">
            这片位于克拉斯诺亚尔斯克郊外的如画山脉，是户外休闲与旅游的热门去处。山岭是东萨彦岭的一部分，以其自然之美、交通便利和丰富的路线选择而引人入胜。
        </p>
        <p class="modalBlock__description">
            这里有15公里长、浸染着西伯利亚独特柔和色调的岩层景观，以及超过100公里标记清晰的步道。山岭从红崖一直延伸至海拔688米的黑火山&mdash;&mdash;一座死火山，也是该区域的最高点。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_2.jpg" alt="Ландшафты Торгашинского хребта" loading="lazy">
    </div>
</div>
<!-- Блок 3: Подъем по самой длинной лестнице -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">攀登最长阶梯</h2>
        <p class="modalBlock__description">
            您需要沿着拥有1683级台阶的俄罗斯最长阶梯登上山岭，但山顶将回馈您城市与克拉斯诺亚尔斯克石柱的壮丽全景。
        </p>
        <p class="modalBlock__description">
            总爬升高度为240米，上行耗时约40至50分钟。阶梯尽头的山顶也设有观景平台。夜幕降临时，上山的阶梯被灯光照亮，景色格外动人。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_3.jpg" alt="Самая длинная лестница России" loading="lazy">
    </div>
</div>
<!-- Блок 4: История и маршруты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">历史与路线</h2>
        <p class="modalBlock__description">
            山岭因山脚下的托尔加希诺村而得名。这里曾是哥萨克人的村镇，著名画家瓦西里&middot;苏里科夫的母亲便出生于此，其娘家姓即为托尔加希娜。
        </p>
        <p class="modalBlock__description">
            沿山岭分布着众多徒步路线&mdash;&mdash;主要的路线已标注在阶梯底部的路线图上。在每条难度各异的步道上，您都可能遇见有趣的景观以及西伯利亚森林的&quot;居民&quot;。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/torgashinskii_hrebet/Torgashenskiy_4.jpg" alt="Туристические тропы хребта" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            托尔加申斯基山岭是克拉斯诺亚尔斯克最易到达的自然景点之一，几乎就位于城市边界内。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>自驾：</strong>从市中心驱车至阶梯起点约需30分钟。地标为&quot;格林纳达&quot;康养中心。进入该区域免费。 </li>
            <li class="modalBlock__listItem"><strong>公共交通：</strong>从克拉斯诺亚尔斯克市中心的火车站可乘坐37路公交车至终点站&quot;格林纳达康养中心&quot;。 </li>
        </ul>
        <p class="modalBlock__description">
            请注意时间：阶梯入口位于&quot;格林纳达&quot;综合体内，每日开放时间为08:00至22:00。夜间景点关闭，无法进入。
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
            title: '库图尔钦斯科耶白石区',
            image: '../../img/krasnoyarsk/cards_nature/Kuturchinskoe_Belogorie_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">库图尔钦斯科耶白石区</h1>
</div>
<!-- Блок 1: Манские столбы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">马纳石柱</h2>
        <p class="modalBlock__description">
            这是东萨彦岭范围内的一段山脉，因其形态奇特的残岩柱而吸引游客。这些50米高的层叠岩柱被称为马纳石柱（或称库图尔钦石柱）。
        </p>
        <p class="modalBlock__description">
            马纳石柱隐约让人联想到北乌拉尔传说中的曼普普纳尔高原：岩石残柱的轮廓令人联想起中世纪被毁的城堡。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_1.jpg" alt="Манские столбы Кутурчинского Белогорья" loading="lazy">
    </div>
</div>
<!-- Блок 2: География и названия -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">地理与命名</h2>
        <p class="modalBlock__description">
            库图尔钦斯科耶白石区绵延80公里，位于西伯利亚的两条河流&mdash;&mdash;马纳河与米纳河之间。此地也因此得名&quot;马纳石柱&quot;。
        </p>
        <p class="modalBlock__description">
            这些石柱坐落在广阔的无林高原上，各有其名：扎伊斯基、阿尔金斯基、昌斯基、尤尔金斯基、索博利尼等。冬季，它们的峰顶覆盖着如画的雪冠，&quot;白石区&quot;之名便由此而来。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_2.jpg" alt="Ландшафт Кутурчинского Белогорья" loading="lazy">
    </div>
</div>
<!-- Блок 3: Испытание для скалолазов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">攀岩者的试炼场</h2>
        <p class="modalBlock__description">
            与克拉斯诺亚尔斯克石柱相比，马纳石柱虽不高耸，却更为陡峭险峻，即使对经验丰富的攀岩者而言，征服它们也是一项真正的考验。
        </p>
        <p class="modalBlock__description">
            此外，通往此地的路途同样不易：高原的高海拔区域遍布粗大的石海&mdash;&mdash;那是锋利的岩石碎块。然而，这里的景致绝对值得：在嶙峋岩柱的轮廓中，时而可辨各类动物的侧影，时而似有人面，时而又如古城废墟。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_3.jpg" alt="Скалолазание на Манских столбах" loading="lazy">
    </div>
</div>
<!-- Блок 4: Природа и впечатления -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">自然与体验</h2>
        <p class="modalBlock__description">
            白石区不仅提供岩壁挑战，更有令人惊叹的全景视野。从高原可俯瞰无垠的西伯利亚旷野，以及马纳河与米纳河蜿蜒的河道。
        </p>
        <p class="modalBlock__description">
            此地吸引着资深登山者和寻找独特构图的摄影师。岩石的样貌随昼夜与天气变换，在其层叠的表面上演绎着独一无二的光影游戏。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/kuturchinskoe_belogorie/Kuturchinskoe_Belogorie_4.jpg" alt="Панорамные виды Белогорья" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            前往库图尔钦白石区需做些准备，但对于有组织的团队或有经验的自助旅行者而言是可以抵达的。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>自驾：</strong>从克拉斯诺亚尔斯克驱车至库图尔钦村（徒步登山的起点）约需3.5小时。剩余路程需步行完成。夏季路径较为明显，但需准备涉水渡过安古尔小河。 </li>
            <li class="modalBlock__listItem"><strong>公共交通：</strong>可从克拉斯诺亚尔斯克乘坐电气火车或火车至马纳站，再步行前往库图尔钦村（约25公里）。 </li>
        </ul>
        <p class="modalBlock__description">
            建议规划数日的徒步行程，携带相应装备，最好具备山地徒步经验或有向导陪同。
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
            title: '泰梅尔自然保护区',
            image: '../../img/krasnoyarsk/cards_nature/Taimyrskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">泰梅尔自然保护区</h1>
</div>
<!-- Блок 1: Арктическая страна -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">北极之境</h2>
        <p class="modalBlock__description">
            泰梅尔自然保护区是俄罗斯面积最大的保护区之一。近期，泰梅尔保护区联合管理局已统辖三大自然保护区与两处野生动物保护区，构成了西伯利亚北极圈的重要部分。
        </p>
        <p class="modalBlock__description">
            这是一片受到严密保护、处于科学家持续监测之下的完整北极之境。其全境均位于永久冻土带。这里几乎没有夏天，即使七月积雪也可能不会消融。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_1.jpg" alt="Таймырский заповедник" loading="lazy">
    </div>
</div>
<!-- Блок 2: Границы и ландшафт -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">边界与地貌</h2>
        <p class="modalBlock__description">
            作为俄罗斯最大的半岛及欧亚大陆最北端，泰梅尔半岛横亘于喀拉海与拉普捷夫海之间。
        </p>
        <p class="modalBlock__description">
            受保护区域包括部分泰梅尔半岛和切柳斯金角、普托拉纳高原、喀拉海与拉普捷夫海部分水域，以及北地群岛的数个岛屿。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_2.jpg" alt="Ландшафты Таймыра" loading="lazy">
    </div>
</div>
<!-- Блок 3: Научная работа -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">科研工作</h2>
        <p class="modalBlock__description">
            科学研究首要集中于对脆弱北极环境动态的长期观测。这片土地的探索史已近百年。
        </p>
        <p class="modalBlock__description">
            除了宝贵的资源与丰富的历史，这些在万年冰盖下的土地还封存着关乎当下重要问题的答案&mdash;&mdash;例如，全球气候将如何演变。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_3.jpg" alt="Научные исследования в Арктике" loading="lazy">
    </div>
</div>
<!-- Блок 4: Хатанга и туризм -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">哈坦加与旅游业</h2>
        <p class="modalBlock__description">
            近年来，在俄罗斯地理学会支持下，一座新的研究实验室正在泰梅尔地区的古老聚落&mdash;&mdash;哈坦加镇（其历史可追溯至18世纪北方大探险时期）兴建。
        </p>
        <p class="modalBlock__description">
            从哈坦加出发，有多条泰梅尔旅游路线，其中包括由俄地理学会专家设计的独特探险之旅。例如，您可以探访北方的少数民族&mdash;&mdash;多尔甘人和恩加纳桑人，前往波皮盖陨石坑，或造访阿纳巴尔高原。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/taimyrskii_zapovednik/Taimyrskiy_4.jpg" alt="Хатанга и туристические маршруты" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            进入东泰梅尔地区的主要门户是哈坦加镇。这里有东泰梅尔地区唯一全年运营的机场。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>直升机：</strong>可从克拉斯诺亚尔斯克或诺里尔斯克飞往哈坦加。航空：已开通与诺里尔斯克及克拉斯诺亚尔斯克的定期航班。 </li>
            <li class="modalBlock__listItem">计划从哈坦加开辟前往北极点的独特旅程&mdash;&mdash;该路线将完全在俄罗斯境内通行。 </li>
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
            title: '大北极自然保护区',
            image: '../../img/krasnoyarsk/cards_nature/Bolshoi_Arkticheskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">大北极自然保护区</h1>
</div>
<!-- Блок 1: Крупнейший в Евразии -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">欧亚大陆之最</h2>
        <p class="modalBlock__description">
            这个自然保护区不仅面积广大&mdash;&mdash;它更是整个欧亚大陆上规模最大的。其范围涵盖了泰梅尔半岛的部分区域、诸多岛屿以及喀拉海的水域。
        </p>
        <p class="modalBlock__description">
            保护区内最引人注目的焦点，是位于泰梅尔半岛的切柳斯金角&mdash;&mdash;那是亚欧大陆最北端的陆地点。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_1.jpg" alt="Пейзажи Большого Арктического заповедника" loading="lazy">
    </div>
</div>
<!-- Блок 2: Арктическая природа -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">北极的自然风貌</h2>
        <p class="modalBlock__description">
            保护区全境均位于北极苔原带与极地荒漠带。此地的植被极为稀疏&mdash;&mdash;在永久冻土带上，通常只能见到苔藓和地衣，以及少数几种禾本科植物与北极罂粟。
        </p>
        <p class="modalBlock__description">
            但对动物而言，这里却是广阔的乐园：北极熊、麝牛、驯鹿和北极狐在这片人迹罕至的土地上自在栖息。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_2.jpg" alt="Флора и фауна Арктики" loading="lazy">
    </div>
</div>
<!-- Блок 3: История открытия -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">发现历史</h2>
        <p class="modalBlock__description">
            这里的首批探索者是18世纪中叶&quot;北方大探险&quot;的参与者。谢苗&middot;切柳斯金与哈林顿&middot;拉普捷夫在经历数次海上失败后，驾着狗拉雪橇考察了东泰梅尔的海岸。
        </p>
        <p class="modalBlock__description">
            如今，随着航海技术的发展，探访这些地方已变得较为安全，但它依然充满挑战，需要周密的准备。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_3.jpg" alt="Исторические экспедиции на Таймыр" loading="lazy">
    </div>
</div>
<!-- Блок 4: Маршруты для путешественников -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">旅行者路线</h2>
        <p class="modalBlock__description">
            为资深旅行者规划的数条路线贯穿保护区，其中多数为水路。可从北海航线上的港口杜金卡出发，经叶尼塞河三角洲进入喀拉海。
        </p>
        <p class="modalBlock__description">
            而要抵达欧亚大陆最北端的切柳斯金角，则可从东泰梅尔的古老村庄哈坦加搭乘直升机前往。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/bolshoi_arkticheskii_zapovednik/Bolshoi_Arkticheskiy_4.jpg" alt="Мыс Челюскин и туристические маршруты" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            进入&quot;大北极&quot;自然保护区本身，就是一场真正的探险之旅。唯有借助特种交通工具方可抵达。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>海路：</strong>通过北海航线的跨北极游轮行程。这是领略保护区浩瀚风貌的最佳方式之一。 </li>
            <li class="modalBlock__listItem"><strong>直升机：</strong>从哈坦加村起飞。这是抵达切柳斯金角等关键地点的主要方式。 </li>
        </ul>
        <p class="modalBlock__description">
            进入保护区需要特殊许可、专业的探险装备，并必须根据严酷的北极条件进行周密规划。
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
            title: '萨彦-舒申斯科耶自然保护区',
            image: '../../img/krasnoyarsk/cards_nature/Sayano_Shushenskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">萨彦-舒申斯科耶自然保护区</h1>
</div>
<!-- Блок 1: В зоне влияния великой ГЭС -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">伟大水电站的影响区</h2>
        <p class="modalBlock__description">
            在叶尼塞河左岸、西萨彦岭的险峻之地，坐落着两处特别自然保护区：萨彦-舒申斯科耶自然保护区与&quot;舒申斯基博尔&quot;国家公园。将它们联系在一起的是同名水库的影响区域，那里建有俄罗斯装机容量最大的水电站。
        </p>
        <p class="modalBlock__description">
            雪豹是保护区的主要保护物种，此外这里还能遇见兔狲、紫貂和西伯利亚北山羊。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_1.jpg" alt="Саяно-Шушенская ГЭС и заповедник" loading="lazy">
    </div>
</div>
<!-- Блок 2: Компенсация природе -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">对自然的补偿</h2>
        <p class="modalBlock__description">
            萨彦-舒申斯科耶自然保护区成立于上世纪中叶，是为补偿叶尼塞河上修建水电站而对自然作出的平衡之举。如今，这座电站为整个哈卡斯共和国、图瓦共和国、克拉斯诺亚尔斯克边疆区及外贝加尔边疆区提供电力。
        </p>
        <p class="modalBlock__description">
            然而，它对生态系统造成的压力是巨大的。水库蓄水淹没了大片沿岸土地，气候也因此受到影响。随着时间的推移，得益于保护区体系的建立，最脆弱的物种得以保全。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_2.jpg" alt="Экосистема заповедника" loading="lazy">
    </div>
</div>
<!-- Блок 3: Климат и ландшафты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">气候与地貌</h2>
        <p class="modalBlock__description">
            如今这里主要是大陆性气候，造就了从高山草甸到松树与落叶松林的多样自然条件。
        </p>
        <p class="modalBlock__description">
            山脉本身不高，但地貌富有层次，尖锐的岩峰与宽阔的峡谷、瀑布和隘口交替出现。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_3.jpg" alt="Ландшафты Западного Саяна" loading="lazy">
    </div>
</div>
<!-- Блок 4: Шушенский бор и маршруты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">舒申斯基博尔与游览路线</h2>
        <p class="modalBlock__description">
            &quot;舒申斯基博尔&quot;国家公园的历史同样引人入胜。它的建立是为了纪念曾在此流放期间于林中狩猎的弗拉基米尔&middot;列宁。正因如此，这片森林得以免遭砍伐。
        </p>
        <p class="modalBlock__description">
            保护区内设有多条数日行程的徒步路线。萨彦峡谷之旅将吸引那些热爱征服难度适中却震撼人心的山峦的旅行者。部分路段需经水路&mdash;&mdash;您可以从船头观察野生动物。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/sayano_shushenskii/Sayano_Shushenskiy_4.jpg" alt="Туристические маршруты и Шушенский бор" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            访问保护区需事先组织并获得许可。主要入口点是舒申斯科耶镇。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>起点：</strong>探索保护区从参观位于舒申斯科耶镇的&quot;雪豹之家&quot;自然博物馆开始（扎波韦德纳亚街7号）。 </li>
            <li class="modalBlock__listItem"><strong>手续：</strong>在此可申请进入保护区的通行证，选择感兴趣的路线或水库游览项目。 </li>
            <li class="modalBlock__listItem"><strong>交通：</strong>可自驾或从克拉斯诺亚尔斯克、阿巴坎乘坐巴士前往舒申斯科耶镇。 </li>
        </ul>
        <p class="modalBlock__description">
            保护区内所有路线均须在向导陪同下进行。萨彦-舒申斯科耶水电站也可从观景平台参观。
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
            title: '通古斯自然保护区',
            image: '../../img/krasnoyarsk/cards_nature/Tungusskiy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">通古斯自然保护区</h1>
</div>
<!-- Блок 1: Место великой тайны -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">伟大谜团之地</h2>
        <p class="modalBlock__description">
            &quot;通古斯&quot;自然保护区围绕着1908年夏季著名的通古斯陨石坠落地而形成。这场宇宙尺度的事件发生在石泉通古斯河与其右支流丘尼亚河之间的流域。
        </p>
        <p class="modalBlock__description">
            这一发生在上世纪初的独特事件，被称为&quot;通古斯现象&quot;。那场耀眼的爆炸，其声响在一千公里外仍可闻及，至今仍吸引着科学研究者与宇宙未解之谜爱好者的目光。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_1.jpg" alt="Заповедник Тунгусский" loading="lazy">
    </div>
</div>
<!-- Блок 2: Гипотезы и исследования -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">假说与研究</h2>
        <p class="modalBlock__description">
            部分科学家认为，该天体是一颗小行星或一颗彗星在坠落过程中碎裂的部分。然而，至今仍不存在科学上被证实的假说，因此该物体仍被约定俗成地称为&quot;通古斯陨石&quot;。
        </p>
        <p class="modalBlock__description">
            有趣的是，早在苏联时期，解释其坠落的假说就超过70种。计算表明，要造成如此规模的破坏，该天体质量应达五百万吨左右。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_2.jpg" alt="Изучение Тунгусского феномена" loading="lazy">
    </div>
</div>
<!-- Блок 3: Свидетельства очевидцев -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">目击者证言</h2>
        <p class="modalBlock__description">
            通古斯现象有许多目击者。其中包括一支鄂温克家庭，事发当天他们在距震中30公里处搭建了帐篷。
        </p>
        <p class="modalBlock__description">
            &quot;突然，在那片森林已经倒伏的山丘上空，变得异常明亮，仿佛出现了第二个太阳。很像俄罗斯人称之为&lsquo;闪电&rsquo;的那种光。紧接着就是&lsquo;阿格德良&rsquo;&mdash;&mdash;巨大的雷鸣声。&quot;目击者这样描述。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_3.jpg" alt="Эвенкийские свидетельства" loading="lazy">
    </div>
</div>
<!-- Блок 4: Научный полигон -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">科学试验场</h2>
        <p class="modalBlock__description">
            为保护通古斯现象发生地，建立了同名的自然保护区。坠落的陨石破坏了大片泰加林，但对于科学家而言，这却提供了一个罕见的机会，得以观察被神秘天体摧毁的生态系统的恢复过程。
        </p>
        <p class="modalBlock__description">
            如今，保护区区域已成为研究通古斯陨石超强爆炸之生态后果的主要科学试验场。旨在探究这场宇宙灾难后果的考察活动，至今仍在持续。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/tungusskii/Tungusskiy_4.jpg" alt="Научные исследования в заповеднике" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            进入保护区范围十分困难，因为这里是克拉斯诺亚尔斯克边疆区最难抵达的地点之一。仅能通过航空交通进入。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>飞机：</strong>从克拉斯诺亚尔斯克每周有三次航班飞往距离推测陨石坠落地震中最近的瓦纳瓦拉村。保护区管理局即设于此。 </li>
            <li class="modalBlock__listItem"><strong>直升机：</strong>要进入震中区域本身，则只能乘坐直升机。这是抵达通古斯陨石坠落地的唯一途径。 </li>
        </ul>
        <p class="modalBlock__description">
            进入保护区需要特殊许可，并且通常以科学考察团或特种旅游团的形式组织。
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
            title: '原住民营地',
            image: '../../img/krasnoyarsk/cards_culture/stoyanka_narodov_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">原住民营地</h1>
</div>
<!-- Блок 1: Белые пятна на карте -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">地图上的空白点</h2>
        <p class="modalBlock__description">
            在克拉斯诺亚尔斯克边疆区的地图上，仍保留着几处未被城市化触及的&quot;空白点&quot;。在这些土地上，当地民族仍如数百年前一样，延续着他们朴素的生活方式。
        </p>
        <p class="modalBlock__description">
            您可以跟随学者一起，踏上民族志考察之旅，去探究这些少数民族的文化、传统与日常生活。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_1.jpg" alt="Кочевая стоянка в тундре" loading="lazy">
    </div>
</div>
<!-- Блок 2: Культурное богатство и вызовы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">文化瑰宝与挑战</h2>
        <p class="modalBlock__description">
            克拉斯诺亚尔斯克边疆区的原住民是俄罗斯文化与历史财富不可分割的一部分。他们的传统、知识以及对自然的珍视，可以成为所有追求与周围世界和谐共生者的灵感源泉。
        </p>
        <p class="modalBlock__description">
            遗憾的是，许多民族正面临着保护自身文化与语言的困境。全球化、气候变化及工业开发正对他们的传统生活方式构成压力。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_2.jpg" alt="Представители коренных народов в национальной одежде" loading="lazy">
    </div>
</div>
<!-- Блок 3: Сочетание архаики и современности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">古朴与现代的交融</h2>
        <p class="modalBlock__description">
            在驯鹿牧民的锥形帐篷里，卫星通讯已然普及，雪地摩托或全地形车轻易就能超越五头驯鹿拉着的雪橇。然而，悖论在于，常常正是那些古朴的技术，才是唯一经得起气候与时间考验的存在。
        </p>
        <p class="modalBlock__description">
            任何一位常年游牧于苔原的驯鹿牧民都会告诉你，没有什么比驯鹿和简单的雪橇更可靠。这种传统的生活方式，展现出惊人的适应力与韧性。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_3.jpg" alt="Оленеводы и олени в тундре" loading="lazy">
    </div>
</div>
<!-- Блок 4: Погружение в мир Севера -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">深入北境世界</h2>
        <p class="modalBlock__description">
            如今，克拉斯诺亚尔斯克边疆区是为数不多能让人完全沉浸于北方少数民族世界的地方之一。在这里，你可以体验驯鹿牧民的生活，学习他们独特的技艺，与驯鹿为友，并领悟游牧生活的哲学。
        </p>
        <p class="modalBlock__description">
            俄罗斯地理学会每年都会组织一系列民族志考察旅行，参与者可以亲身接触人类学的&quot;第一现场&quot;，学习如何在田野中工作、收集资料，就像真正的民族志学者一样。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/stoyanka_narodov/stoyanka_narodov_4.jpg" alt="Этнографическая экспедиция и быт кочевников" loading="lazy">
    </div>
</div>
<!-- Блок 5: Путешествие к истокам -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">溯源之旅</h2>
        <p class="modalBlock__description">
            探访原住民宿营地是一种独特的体验，需要特别的尊重态度和对苔原、泰加林主人的敬意。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>组织方式：</strong>此类行程通常作为专门的民族志旅行或考察项目进行组织，常在俄罗斯地理学会的支持下或由人类学家参与带领。 </li>
            <li class="modalBlock__listItem"><strong>体验形式：</strong>这不仅仅是一次观光，而是真正的深度沉浸。参与者住在锥形帐篷里，参与日常劳作，帮忙放牧驯鹿，学习传统手工艺。 </li>
            <li class="modalBlock__listItem"><strong>核心目的：</strong>主要任务是去理解和感受，而非仅仅是旁观。这是一次经验的交流与文化的相互丰富。 </li>
        </ul>
        <p class="modalBlock__description">
            保护原住民遗产不仅是对过去的致敬，更是迈向可持续未来的重要一步。
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
            title: '民族公园与博物馆',
            image: '../../img/krasnoyarsk/cards_culture/etnoparki_musei_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">民族公园与博物馆</h1>
    <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Мост между прошлым и настоящим -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">连接过去与现在的桥梁</h2>
        <p class="modalBlock__description">
            克拉斯诺亚尔斯克边疆区的文化空间，正成为连接过去与现在的桥梁，帮助为后代保存遗产。
        </p>
        <p class="modalBlock__description">
            在这里，你可以了解几个世纪以来生活在这片土地上的各民族的独特传统、生活与艺术。它们是进行对话与教育的鲜活空间。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_1.jpg" alt="Экспозиция этнографического музея" loading="lazy">
    </div>
</div>
<!-- Блок 2: Красноярский краеведческий музей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">克拉斯诺亚尔斯克地方志博物馆</h2>
        <p class="modalBlock__description">
            该边疆区最著名的民族志博物馆之一是克拉斯诺亚尔斯克地方志博物馆。这里设有专门展示该地区原住民&mdash;&mdash;鄂温克人、多尔甘人、涅涅茨人、凯特人和谢尔库普人&mdash;&mdash;文化与生活的展览。
        </p>
        <p class="modalBlock__description">
            参观者可以看到传统服饰、生活用具、劳动工具和艺术作品。博物馆还开展教育项目和大师班，让人能更深入地沉浸于文化之中。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_2.jpg" alt="Красноярский краеведческий музей" loading="lazy">
    </div>
</div>
<!-- Блок 3: Таймырский краеведческий музей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">泰梅尔地方志博物馆</h2>
        <p class="modalBlock__description">
            另一个重要地点是位于杜金卡的泰梅尔地方志博物馆。它专门展示泰梅尔半岛各民族，特别是多尔甘人和涅涅茨人的历史与文化。
        </p>
        <p class="modalBlock__description">
            博物馆的展品包括传统居所（锥形帐篷）、驯鹿皮制成的衣物、仪式物品以及装饰和应用艺术品。博物馆积极与当地社区合作，确保展品的真实性。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_3.jpg" alt="Экспонаты Таймырского музея" loading="lazy">
    </div>
</div>
<!-- Блок 4: Этнопарк «Новая деревня» и Музей Таймырского заповедника -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">从村庄到保护区</h2>
        <p class="modalBlock__description">
            位于舒申斯科耶镇的&quot;新村庄&quot;民族公园，重现了19世纪西伯利亚村庄的氛围。虽然重点在于俄罗斯文化，但公园也介绍了俄罗斯移民与西伯利亚原住民之间的互动。
        </p>
        <p class="modalBlock__description">
            哈坦加镇的泰梅尔自然保护区自然与民族志博物馆，展示了多尔甘人和恩加纳桑人的生活。馆内藏有独特的藏品，举办互动讲座、民族节庆以及与学者的交流会。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/etnoparki_i_musei/etnoparki_musei_4.jpg" alt="Этнопарк и музейные экспонаты" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            克拉斯诺亚尔斯克边疆区的文化机构分布在从首府到最偏远的北极村镇等不同区域。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>克拉斯诺亚尔斯克地方志博物馆：</strong>克拉斯诺亚尔斯克市，杜布罗温斯基街84号。位于市中心，公共交通便利。 </li>
            <li class="modalBlock__listItem"><strong>泰梅尔地方志博物馆：</strong>杜金卡市，苏维埃街30号。可从克拉斯诺亚尔斯克或诺里尔斯克乘飞机抵达。 </li>
            <li class="modalBlock__listItem"><strong>&quot;新村&quot;民族公园：</strong>舒申斯科耶镇，新街1号。可从克拉斯诺亚尔斯克或阿巴坎驾车或乘巴士前往。 </li>
            <li class="modalBlock__listItem"><strong>泰梅尔自然保护区自然与民族志博物馆：</strong>哈坦加村，泰梅尔街。仅能从克拉斯诺亚尔斯克或诺里尔斯克乘飞机抵达，参观通常包含在泰梅尔旅行团行程中。 </li>
        </ul>
        <p class="modalBlock__description">
            建议在前往偏远博物馆前，确认开放时间和参观可能性，因为它们可能受天气条件和季节影响。
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
            title: '叶尼塞西伯利亚',
            image: '../../img/krasnoyarsk/cards_culture/eniseiskaya_sibir_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">叶尼塞西伯利亚</h1>
    <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Река, объединяющая миры -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">连接世界的河流</h2>
        <p class="modalBlock__description">
            沿叶尼塞河旅行，犹如前往另一个星球。这里是充满对比的河岸，严酷的自然与丰富的文化历史在此共存。
        </p>
        <p class="modalBlock__description">
            近两千公里的河流，带我们领略西伯利亚边疆的文化，了解五支西伯利亚与极北地区少数民族的生活与传统。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_1.jpg" alt="Вид на реку Енисей" loading="lazy">
    </div>
</div>
<!-- Блок 2: От Саян до Арктики -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">从萨彦岭到北极</h2>
        <p class="modalBlock__description">
            叶尼塞河不仅将西伯利亚划分为西部和东部&mdash;&mdash;从萨彦岭支脉直至北冰洋&mdash;&mdash;它更将俄罗斯的南方与北方、炎热的草原与北极、骆驼与北极熊连接在一起。
        </p>
        <p class="modalBlock__description">
            沿着它的河岸，形成了&quot;叶尼塞西伯利亚&quot;这一历史文化现象。人们来到这里，探寻原住民的生活与原始的自然风光。而要做到这一点，唯有沿河旅行。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_2.jpg" alt="Ландшафты вдоль Енисея" loading="lazy">
    </div>
</div>
<!-- Блок 3: Сквозь три климатических пояса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">穿越三个气候带</h2>
        <p class="modalBlock__description">
            这条几乎南北绵延两千公里的河流，穿越了三个气候带：北极带、亚北极带和温带。这是一条连接如此不同世界的独特自然动脉。
        </p>
        <p class="modalBlock__description">
            自古以来，叶尼塞河的馈养育了从萨彦山脉直到喀拉海沿岸定居的人们。这条河流过去是，现在也仍然是整个边疆区主要的交通与生命线。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_3.jpg" alt="Климатические зоны Енисея" loading="lazy">
    </div>
</div>
<!-- Блок 4: Легенды Большой воды -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">大水的传说</h2>
        <p class="modalBlock__description">
            涅涅茨人和埃文基人称叶尼塞河为&quot;大水&quot;，传说中，巨大的泰梅尔龙便栖居于此。
        </p>
        <p class="modalBlock__description">
            对原住民而言，叶尼塞河不仅仅是一个地理实体，它是有生命的灵物，是生命与灵感的源泉。它的形象在众多西伯利亚民族的民俗、仪式和神话中都有所体现。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/eniseiskaya_sibir/eniseiskaya_sibir_4.jpg" alt="Коренные народы на берегу Енисея" loading="lazy">
    </div>
</div>
<!-- Блок 5: Путешествие по Енисею -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">沿叶尼塞河之旅</h2>
        <p class="modalBlock__description">
            探索叶尼塞西伯利亚，最佳方式莫过于从水上。河轮巡航与探险航行提供了最全面、最激动人心的方式，来领略这片土地的多样风貌。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>巡航路线：</strong>从克拉斯诺亚尔斯克至杜金卡，再至海港。行程从一周到多日探险不等。 </li>
            <li class="modalBlock__listItem"><strong>沿途亮点：</strong>可欣赏克拉斯诺亚尔斯克石柱、萨彦-舒申斯科耶水电站、古老的西伯利亚村庄、原住民宿地以及泰梅尔的无垠旷野。 </li>
            <li class="modalBlock__listItem"><strong>旅行方式：</strong>可乘坐舒适的游轮、探险船只，对于更活跃的旅行者，也可在部分河段选择双体船或小艇。 </li>
        </ul>
        <p class="modalBlock__description">
            这样的旅程是一次独特的机会，能在一趟旅行中见证这条伟大的西伯利亚河流沿岸数千公里内自然、气候与文化的变迁。
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
            title: '驯鹿牧民节',
            image: '../../img/krasnoyarsk/cards_culture/den_olenevoda_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">驯鹿牧民节</h1>
    <p class="modalHeader__subtitle"></p>
</div>
<!-- Блок 1: Праздник тундровиков -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">苔原居民的盛典</h2>
        <p class="modalBlock__description">
            冬季，当极夜笼罩大地时，人们难以远离帐篷。然而，驯鹿牧民们为此创造了自己的节日，并逐渐演变成一项专业庆典。
        </p>
        <p class="modalBlock__description">
            每年初春，驯鹿牧民节追随着参与者们的脚步，在从摩尔曼斯克到堪察加的整个北极地区&quot;迁徙&quot;，成为原住民生活中的亮丽盛事。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_1.jpg" alt="Праздничное шествие в День оленевода" loading="lazy">
    </div>
</div>
<!-- Блок 2: Традиции и смысл праздника -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">传统与节日内涵</h2>
        <p class="modalBlock__description">
            主要庆祝活动在春分日举行，漫长的极夜于此结束&mdash;&mdash;人们相信太阳自此开始向上界进发。
        </p>
        <p class="modalBlock__description">
            传统上，此时北方民族会庆祝驯鹿牧民节，尽管庆祝活动可能持续数月。每个民族都有自己的一套游戏与竞赛项目，其中许多已成为国家级体育赛事。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_2.jpg" alt="Традиционные костюмы и обряды" loading="lazy">
    </div>
</div>
<!-- Блок 3: Состязания и игры -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">竞赛与游戏</h2>
        <p class="modalBlock__description">
            驯鹿雪橇竞速、跳雪橇、套索投杆（将套索投向木杆）&mdash;&mdash;这是驯鹿牧民节的传统竞赛项目。
        </p>
        <p class="modalBlock__description">
            这些不仅是观赏性强的比赛，更是对苔原严酷环境中必备技能的检验。参赛者既有经验丰富的牧民，也有年轻一代。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_3.jpg" alt="Гонки на оленьих упряжках" loading="lazy">
    </div>
</div>
<!-- Блок 4: Культурная программа и ярмарка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">文化节目与市集</h2>
        <p class="modalBlock__description">
            节日活动包括民间艺术团的戏剧表演、亚马尔特色美食、在铺着驯鹿皮的帐篷里享用的午餐。
        </p>
        <p class="modalBlock__description">
            充满北方风情的盛大纪念品市集上，有骨雕、陶器与青铜制的玩偶和小雕像、民族服饰、珠宝以及手工纪念品。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/den_olenevoda/den_olenevoda_4.jpg" alt="Ярмарка сувениров и угощения" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться и где отмечается -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达与庆祝地点</h2>
        <p class="modalBlock__description">
            驯鹿牧民节并非单一活动，而是克拉斯诺亚尔斯克边疆区各地一系列节日的总称。举办日期各有不同，通常落在三月。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>在泰梅尔：</strong>主要庆祝活动在杜金卡、哈坦加和波皮盖村举行。可从克拉斯诺亚尔斯克或诺里尔斯克乘飞机抵达这些地点。 </li>
            <li class="modalBlock__listItem"><strong>在埃文基：</strong>节日在苏林达村广泛庆祝。可通过图拉或其他埃文基居民点乘飞机抵达。 </li>
        </ul>
        <p class="modalBlock__description">
            建议提前计划参加节日，并确认具体地点的确切日期和活动安排。这是沉浸式体验北方原住民鲜活文化的绝佳机会。
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
            title: '猛犸象博物馆',
            image: '../../img/krasnoyarsk/cards_culture/musei_mamonta_0.jpg',
            modalContent:


`<div class="modalHeader">
    <h1 class="modalHeader__title">猛犸象博物馆</h1>
</div>
<!-- Блок 1: В ледяном сердце мерзлоты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">永冻土层的冰封之心</h2>
        <p class="modalBlock__description">
            这里保存着在泰梅尔永久冻土层中被一位年轻驯鹿牧民发现的&quot;扎尔科夫猛犸象&quot;。据科学家估算，这头猛犸象的年龄超过两万年。
        </p>
        <p class="modalBlock__description">
            在真正的、即便夏季也不融化的冰窟中，凝视猛犸象的巨大象牙，确是一次不可思议的探险。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_1.jpg" alt="Вход в ледяной грот музея" loading="lazy">
    </div>
</div>
<!-- Блок 2: Уникальный подземный грот -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">独特的地下冰窟</h2>
        <p class="modalBlock__description">
            地下冰窟的入口位于哈坦加河陡峭的河岸上。内部是真正的寒冷与冰雪王国。覆盖着细小冰晶的展品，是始于250万年前的更新世时期的见证者。
        </p>
        <p class="modalBlock__description">
            彼时地球上栖息着披毛犀、剑齿虎，以及猛犸象&mdash;&mdash;其中一头的头部，便凝固在博物馆某展厅的一块巨冰之中。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_2.jpg" alt="Интерьер ледяного музея" loading="lazy">
    </div>
</div>
<!-- Блок 3: Идея французского палеонтолога -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">法国古生物学家的构想</h2>
        <p class="modalBlock__description">
            早在1990年代，多年在泰梅尔工作的法国古生物学家、猛犸象动物群研究者贝尔纳&middot;布伊格，利用苏联时期曾用作食品冷藏库的永久冻土层洞穴，建立了这个空间。
        </p>
        <p class="modalBlock__description">
            这里全年保持着稳定的零下温度&mdash;&mdash;约-15&deg;C。得益于这样的条件，珍贵的古代动物遗骸无需化学处理和防腐即可保存。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_3.jpg" alt="Условия хранения экспонатов" loading="lazy">
    </div>
</div>
<!-- Блок 4: Мамонт Жаркова -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">扎尔科夫猛犸象</h2>
        <p class="modalBlock__description">
            展览的核心是&quot;扎尔科夫猛犸象&quot;，它由猎人阿列克谢&middot;扎尔科夫在泰梅尔当地发现。这块重达30吨、包裹着史前动物的巨大冻土块，直接在苔原上切割下来，由直升机运至哈坦加的地下冰实验室进行研究。
        </p>
        <p class="modalBlock__description">
            扎尔科夫猛犸象的软组织&mdash;&mdash;耳朵和尾巴&mdash;&mdash;保存完好。后来，尼古拉&middot;韦列夏金教授命名的猛犸象与麝牛博物馆的古生物藏品也纳入了该馆的展览。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/musei_mamonta/musei_mamonta_4.jpg" alt="Мамонт Жаркова в музее" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            猛犸象博物馆是哈坦加村旅游设施的一部分，可通过参加游览团访问。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>位置：</strong>博物馆位于哈坦加村内、哈坦加河岸边的地下冰窟中。 </li>
            <li class="modalBlock__listItem"><strong>访问方式：</strong>参观需通过当地旅游中心或泰梅尔自然保护区管理局组织。不可自行进入冰窟。 </li>
            <li class="modalBlock__listItem"><strong>准备：</strong>博物馆内部全年保持零下低温（约-15&deg;C），因此参观需备好保暖冬装，即便在夏季。 </li>
        </ul>
        <p class="modalBlock__description">
            博物馆被纳入大多数从哈坦加出发的泰梅尔探险及旅游路线行程中。
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
            title: '哈坦加村',
            image: '../../img/krasnoyarsk/cards_culture/selo_hatanga_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">哈坦加村</h1>
</div>
<!-- Блок 1: Врата Русской Арктики -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">俄罗斯北极之门</h2>
        <p class="modalBlock__description">
            这是俄罗斯最北端的定居点之一，是极地原住民重要的交通枢纽与文化中心，如今正凭借俄罗斯地理学会的学者与志愿者之力得以复兴。
        </p>
        <p class="modalBlock__description">
            在俄地理学会的支持下，哈坦加已发展成真正的北极旅游枢纽：由此启程，可踏上通往整个泰梅尔地区的科普与民族志之旅。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_1.jpg" alt="Село Хатанга с высоты" loading="lazy">
    </div>
</div>
<!-- Блок 2: Страницы истории -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">历史篇章</h2>
        <p class="modalBlock__description">
            对北极的首次综合性考察，要归功于1733年&quot;北方大探险&quot;中英勇的航海家们&mdash;&mdash;维图斯&middot;白令、拉普捷夫兄弟、谢苗&middot;切柳斯金。
        </p>
        <p class="modalBlock__description">
            然而，在他们之前一百年，俄罗斯哥萨克已在乌拉尔山外建立了第一座极地城镇&mdash;&mdash;曼加泽亚。早在17世纪初便见诸英国商人记述的哈坦加，正是其历史继承者之一。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_2.jpg" alt="Историческая карта и памятники" loading="lazy">
    </div>
</div>
<!-- Блок 3: Культурный и стратегический центр -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">文化与战略中心</h2>
        <p class="modalBlock__description">
            哈坦加是俄罗斯北极的战略要地，坐落于拉普捷夫海哈坦加湾入口处，是北海航线上的港口之一。&quot;哈坦加&quot;一词在埃文基语中意为&quot;大水&quot;。
        </p>
        <p class="modalBlock__description">
            这里坐落着俄罗斯最北端的东正教堂、独特的冰窟猛犸象博物馆、泰梅尔生物圈自然保护区管理局，以及原住民的文化中心。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_3.jpg" alt="Культурные объекты Хатанги" loading="lazy">
    </div>
</div>
<!-- Блок 4: Центр арктического туризма -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">北极旅游枢纽</h2>
        <p class="modalBlock__description">
            哈坦加设有北欧风格的&quot;猛犸客栈&quot;酒店。在此可沉浸于北极氛围：驯鹿皮饰、观赏北极光的视角以及&quot;猛犸&quot;冰吧。
        </p>
        <p class="modalBlock__description">
            这里庆祝独特的节日：驯鹿牧民节、太阳节（海罗节）、渔民节。可购买民族服饰、玩偶、以及用猛犸象牙、驯鹿角和皮毛制成的工艺品。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/selo_hatanga_4.jpg" alt="Гостиница и сувениры Хатанги" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达</h2>
        <p class="modalBlock__description">
            哈坦加是一个难以抵达但具有战略意义的重要定居点。只能通过航空抵达，这凸显了其偏远与特殊地位。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>从克拉斯诺亚尔斯克乘飞机：</strong>航程约3.5小时。定期航班每周一班。 </li>
            <li class="modalBlock__listItem"><strong>从诺里尔斯克乘飞机：</strong>航程更短，约2小时。亦有定期航班。 </li>
        </ul>
        <p class="modalBlock__description">
            哈坦加是前往泰梅尔地区及北极点探险的起点。建议通过参团方式计划访问。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/krasnoyarsk/cards_modal/selo_hatanga/kak_dobratsya.jpg" alt="Аэропорт Хатанги" loading="lazy">
    </div>
</div>`
        }
    ]
};


window.zh_krasnoyarskData = zh_krasnoyarskData;