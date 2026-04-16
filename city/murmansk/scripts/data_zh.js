// ============================================
// ДАННЫЕ КАРТОЧЕК МУРМАНСКОЙ ОБЛАСТИ
// ============================================

const zh_murmanskData = {
//---------------------------Точки притяжения региона-----------------------------------------------------------

    attractions: [
        {
            id: 'hibiny',
            title: '希比内山脉',
            image: '../../img/murmansk/cards_tochki/Hibiny_0.jpg',
            modalContent:

`<div class="modalHeader">
   <h1 class="modalHeader__title">希比内山脉</h1>
</div>
<!-- Блок 1: Крупнейший горный массив -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">科拉半岛最大的山体</h2>
      <p class="modalBlock__description">
         希宾山脉是科拉半岛上最大的山系，也是俄罗斯最古老的山脉之一，已有近4亿年的历史。这是一个被时光和冰川磨平的高原、深邃峡谷和风景如画的湖泊山谷构成的世界&mdash;&mdash;对于户外旅行者而言，这里是真正的极地&quot;麦加&quot;。
      </p>
      <p class="modalBlock__description">
         尽管年岁已高，这些山脉仍在持续增长，每年增高2-3厘米。其气候严酷：冬季严寒可达-40&deg;C，积雪从十月持续至次年六月，夏季短暂而凉爽。但正是这份严酷吸引着旅行者&mdash;&mdash;冬季这里是滑雪爱好者的天堂，而三月则是观赏北极光的理想时节。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_1.jpg" alt="希比内山脉缓坡全景" loading="lazy">
   </div>
</div>
<!-- Блок 2: Озеро Малый Вудъявр и гора Юдычвумчорр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">小武德亚夫尔湖与尤德奇武姆乔尔山</h2>
      <p class="modalBlock__description">
         小武德亚夫尔湖（源自萨米语&quot;山湖&quot;）位于库基斯武姆乔尔山脚下，距基洛夫斯克数十公里。湖水澄澈至极，仿佛水晶般通透，湖泊不寻常的形状宛如一颗宝石。夏季，湖岸变身为云莓、越橘和酸果蔓的浆果原野&mdash;&mdash;理想的野餐之地。
      </p>
      <p class="modalBlock__description">
         尤德奇武姆乔尔山（1200米）是希比内山脉的最高峰，也是整个俄罗斯欧洲部分北极地区的最高点。其名意为&quot;轰鸣山谷之山&quot;。这座山峰顶部平坦、崖壁陡峭，由小别拉亚河谷与费尔斯曼溪谷环绕。有时，人们以地球化学家亚历山大&middot;费尔斯曼的名字称呼此山，他揭示了希比内的诸多奥秘。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_2.jpg" alt="小武德亚夫尔湖与尤德奇武姆乔尔山景观" loading="lazy">
   </div>
</div>
<!-- Блок 3: Озеро Имандра -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">伊曼德拉湖</h2>
      <p class="modalBlock__description">
         伊曼德拉湖是摩尔曼斯克州最大的湖泊。其纯净的湖水及多样的湖岸景观，吸引着追寻真正北方自然的人们。湖畔坐落着阿帕季特市和蒙切戈尔斯克市，以及众多度假基地和露营地。
      </p>
      <p class="modalBlock__description">
         该湖四季皆可进行户外活动。夏季可进行皮划艇、帆船和双体船游览；冬季，冰面则成为滑雪、滑冰和雪地摩托的赛道。沿岸穿越针叶林和山地的风景徒步路线难度不一，景色各异。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_3.jpg" alt="伊曼德拉湖的清澈湖水与山峦湖岸" loading="lazy">
   </div>
</div>
<!-- Блок 4: Перевал географов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">地理学家山口</h2>
      <p class="modalBlock__description">
         地理学家山口是希比内的关键节点之一，连接小武德亚夫尔湖与大别拉亚河谷。它位于塔赫塔武姆乔尔山和武德亚夫尔乔尔山两座巨大山峰之间。登临山口为阶梯式，总爬升高度约650米。
      </p>
      <p class="modalBlock__description">
         山顶可一览四个冰斗的壮丽全景。冬季，此处可见凝固的冰喷泉&mdash;&mdash;地下泉水冻结成奇特的冰雕。此地是感受希比内山脉规模与严酷之美的理想之地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/hibiny/Hibiny_4.jpg" alt="从地理学家山口眺望希比内山脉的冰斗" loading="lazy">
   </div>
</div>
<!-- Блок 5: Полярно-альпийский ботанический сад и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">植物园与前往希比内的交通</h2>
      <p class="modalBlock__description">
         N.A.阿夫罗林极地高山植物园研究所是全球首个、也是最北的、建于北极圈内的植物园。其主要任务是保存和研究希比内山脉的植物群落。游客可在导览团带领下参观温室和苗圃。
      </p>
      <p class="modalBlock__description">
         如何前往：出发地为基洛夫斯克和阿帕季特。可从摩尔曼斯克沿R-21&quot;科拉&quot;公路自驾。乘飞机至距阿帕季特15公里的&quot;希比内&quot;机场，然后转乘巴士或出租车至基洛夫斯克。从莫斯科、圣彼得堡或摩尔曼斯克乘火车至阿帕季特，再换乘当地交通工具至基洛夫斯克。
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
            title: '“列宁”号核动力破冰船',
            image: '../../img/murmansk/cards_tochki/Atomnyy_ledokol_Lenin_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">&quot;列宁&quot;号核动力破冰船</h1>
</div>
<!-- Блок 1: Первый в мире атомный ледокол -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">全球首艘核动力水面舰船</h2>
      <p class="modalBlock__description">
         &quot;列宁&quot;号核动力破冰船是一艘革命性的船舶，开启了北极开发的新纪元。它于1957年在列宁格勒造船厂下水，1959年9月开始首次试航。
      </p>
      <p class="modalBlock__description">
         在30年服役期间，破冰船航行超过65万海里&mdash;&mdash;相当于绕地球30圈，或从地球到月球距离的三倍。1971年，它成为首艘从北面环绕北地群岛的水面船舶，证明了高纬度地区全年通航的可能性。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_1.jpg" alt="北极航行中的“列宁”号核动力破冰船" loading="lazy">
   </div>
</div>
<!-- Блок 2: Музей на вечной стоянке -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">永泊位上的博物馆</h2>
      <p class="modalBlock__description">
         1989年退役后，这艘传奇破冰船在摩尔曼斯克找到了永久的泊位，船上开设了博物馆。这里完整保留了原始陈设：从船长桥楼和轮机舱，到船员餐厅和图书馆。
      </p>
      <p class="modalBlock__description">
         参观破冰船，可一窥核动力舰队的核心区域：参观船员食堂、医务室、船长沙龙以及曾接待过尤里&middot;加加林、菲德尔&middot;卡斯特罗和理查德&middot;尼克松等杰出宾客的船员活动室。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_2.jpg" alt="破冰船博物馆内部：船长桥楼与船员活动室" loading="lazy">
   </div>
</div>
<!-- Блок 3: Информационный центр и выставки -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">信息中心与展览</h2>
      <p class="modalBlock__description">
         破冰船上设有核能信息中心及&quot;核能与北极&quot;互动展览，讲述北方海路的开发历史、核动力舰队的发展以及北极研究的现状。
      </p>
      <p class="modalBlock__description">
         展览将历史文物与现代多媒体技术相结合，让参观者沉浸于北极探险与核能技术的世界。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_3.jpg" alt="破冰船上的“核能与北极”互动展览" loading="lazy">
   </div>
</div>
<!-- Блок 4: Уникальные впечатления -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">独特的体验</h2>
      <p class="modalBlock__description">
         参观&quot;列宁&quot;号核动力破冰船，是触摸活生生的北极开发史、领略其时代技术突破、感受工程思想宏大的机会。
      </p>
      <p class="modalBlock__description">
         夜晚港口的景象尤为震撼，巨轮吊灯的灯光映照其间，值得亲眼一见。破冰船停靠的摩尔曼斯克海港站，其本身就是一座令人印象深刻的建筑。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/Atomnyy_ledokol_Lenin_4.jpg" alt="摩尔曼斯克港夜景与“列宁”号破冰船的灯光" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         &quot;列宁&quot;号核动力破冰船停泊于摩尔曼斯克市中心的海港站主码头，交通便利。
      </p>
      <p class="modalBlock__description">
         地址：摩尔曼斯克，波尔托维通道25号。开放时间与参观条件：请查询博物馆官网，开放时间及导览安排可能会有变动。建议提前预订导览，尤其在旅游旺季。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/atomnyi_ledokol_lenin/kak_dobratsya.jpg" alt="Схема расположения Морского вокзала в Мурманске и ледокола Ленин" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Териберка-----------------------------------------------------------
        {
            id: 'teriberka',
            title: '捷里别尔卡',
            image: '../../img/murmansk/cards_tochki/Teriberka_0.jpg',
            modalContent:


`
<div class="modalHeader">
   <h1 class="modalHeader__title">捷里别尔卡</h1>
</div>
<!-- Блок 1: Старинный рыболовецкий поселок -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">巴伦支海畔的古老渔业村落</h2>
      <p class="modalBlock__description">
         著名的捷里别尔卡村，是巴伦支海岸边一座古老的渔业村落。此处是俄罗斯境内驾车可达的离北冰洋最近的地方。
      </p>
      <p class="modalBlock__description">
         老捷里别尔卡保留了传统波莫尔村落的风貌，拥有特色的木屋、渔船和附属建筑。村庄由两部分组成：保留着原汁原味波莫尔建筑的老村，以及离海边更近的、较新的苏联时期村落。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_1.jpg" alt="捷里别尔卡的古老波莫尔木屋与渔船" loading="lazy">
   </div>
</div>
<!-- Блок 2: Дорога в Териберку -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">通往捷里别尔卡的道路&mdash;&mdash;难忘的探险</h2>
      <p class="modalBlock__description">
         从摩尔曼斯克至捷里别尔卡的距离为120公里，但旅途本身已成为一次难忘的探险。路线穿越严酷而壮丽的景观：无垠的苔原、威严的山丘、深邃的峡谷和风景如画的山口，封存着数世纪的秘密。
      </p>
      <p class="modalBlock__description">
         沿途可感受极地自然的规模与力量，领略景观变幻，为与海洋的相遇做好准备。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_2.jpg" alt="穿越苔原与山丘通往捷里别尔卡的道路" loading="lazy">
   </div>
</div>
<!-- Блок 3: Природный парк и достопримечательности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">自然公园与景点</h2>
      <p class="modalBlock__description">
         村庄对面，捷里别尔卡河对岸，是同名的自然公园（参观需许可）&mdash;&mdash;摩尔曼斯克州面积最小、但最受欢迎的特保护区。
      </p>
      <p class="modalBlock__description">
         这里坐落着著名景点&mdash;&mdash;布满巨砾的&quot;龙蛋海滩&quot;、瀑布和鸟群栖息地。卫国战争遗产&mdash;&mdash;山顶上的一个炮兵连，保留着20世纪30年代的火炮。同样在此的，是著名的&quot;船舶墓地&quot;&mdash;&mdash;20世纪30至50年代捕鱼拖网船的残骸，搁浅于捷里别尔卡湾的浅滩上。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_3.jpg" alt="捷里别尔卡的“龙蛋”海滩与船舶墓地" loading="lazy">
   </div>
</div>
<!-- Блок 4: Активный отдых в любое время года -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">全年皆宜的户外活动</h2>
      <p class="modalBlock__description">
         夏季，可在此进行冲浪、潜水或浮潜，亦可乘船出海寻找偶尔游入近岸水域的鲸鱼。遍布海湾和海角的海岸线，是海上游览和摄影的理想之地。
      </p>
      <p class="modalBlock__description">
         冬季，则可体验雪地摩托，追寻北极光。由于远离城市光污染且天空洁净，捷里别尔卡被认为是该地区观赏极光的最佳地点之一。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/Teriberka_4.jpg" alt="捷里别尔卡的夏季冲浪与冬季北极光" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往捷里别尔卡</h2>
      <p class="modalBlock__description">
         公共交通：每日有从摩尔曼斯克汽车站发往该村的班车。建议提前核实时刻表，可能因季节变化。
      </p>
      <p class="modalBlock__description">
         自驾：从摩尔曼斯克沿公路前往，车程约两小时（130公里）。道路为柏油路，但冬季需谨慎驾驶，确保车辆适合北极条件。建议加满油箱，并配备经过检验的冬季轮胎。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/teriberka/kak_dobratsya.jpg" alt="Карта маршрута от Мурманска до Териберки с указанием достопримечательностей" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Полуостров Рыбачий-----------------------------------------------------------
        {
            id: 'poluostrov_rybachii',
            title: '雷巴奇半岛',
            image: '../../img/murmansk/cards_tochki/Poluostrov_Rybachiy_0.jpg',
            modalContent:


`
<div class="modalHeader">
   <h1 class="modalHeader__title">雷巴奇半岛</h1>
</div>
<!-- Блок 1: Самый север региона -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">与挪威接壤的该地区最北端</h2>
      <p class="modalBlock__description">
         斯雷德尼半岛与雷巴奇半岛是该地区最北端，几乎就位于与挪威的边界上。这里坐落着涅梅茨基角&mdash;&mdash;俄罗斯欧洲大陆部分的最北点。
      </p>
      <p class="modalBlock__description">
         半岛上的自然公园以其严酷的景观之美和丰厚的遗产吸引着旅行者。伟大卫国战争期间，这里曾是为保卫北极地区免遭法西斯侵略者而进行的激烈战斗的战场。传奇的穆斯塔-通图里山脊成为了持久而血腥的厮杀之地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_1.jpg" alt="涅梅茨基角——最北点与穆斯塔-通图里山脊" loading="lazy">
   </div>
</div>
<!-- Блок 2: Историческое наследие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">历史遗产：从远古到战争</h2>
      <p class="modalBlock__description">
         这片土地自古便留存着历史：早在公元前，这里就有人类定居；16世纪，繁忙的贸易路线穿过此地。这里发现了岩画&mdash;&mdash;公元前3至1世纪的石刻。
      </p>
      <p class="modalBlock__description">
         苏芬战争后，这些领土划归苏联。如今，这些地方保存着大量英雄岁月的见证：留存至今的永备火力点、合葬墓、防御工事遗迹以及保卫苏维埃北极地区的纪念碑。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_2.jpg" alt="古代岩画与留存至今的军事工事" loading="lazy">
   </div>
</div>
<!-- Блок 3: Природные достопримечательности -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">自然景观</h2>
      <p class="modalBlock__description">
         巴伦支海岸以其原始、未经雕琢的野性力量令人着迷。主要自然景观包括：克库尔斯基角，其陡峭的山脊延伸至巴伦支海水下；&quot;两兄弟&quot;岩，巍峨的蚀余山岩，与诸多传说相关。
      </p>
      <p class="modalBlock__description">
         半岛崖壁上壮观的鸟群栖息地，其规模令人惊叹&mdash;&mdash;数以千计的海鸟在此筑巢，还有珍稀的捕食者&mdash;&mdash;毛脚鵟和游隼。在近岸水域，可以观察到海洋生物。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_3.jpg" alt="“两兄弟”岩与海岸上的鸟群栖息地" loading="lazy">
   </div>
</div>
<!-- Блок 4: Инфраструктура и активный отдых -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">基础设施与户外活动</h2>
      <p class="modalBlock__description">
         近年来，这些地方开始为游客发展基础设施。例如，在斯雷德尼半岛上，建起了生态友好的北极酒店&quot;鲸鱼海岸&quot;：除了能饱览海景的风景小屋外，这里还组织苔原徒步和吉普车探险，以及寻找螃蟹和鲸鱼的帆船之旅。
      </p>
      <p class="modalBlock__description">
         享受原始自然、捕捉北极光、甚至驶入公海&mdash;&mdash;这一切，对于准备好迎接北极严酷却无比美丽环境的旅行者而言，都已成为可能。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/Poluostrov_Rybachiy_4.jpg" alt="“鲸鱼海岸”北极酒店与海岸帆船之旅" loading="lazy">
   </div>
</div>
<!-- Блок 5: Как добраться и важная информация -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往及重要信息</h2>
      <p class="modalBlock__description">
         重要提示：参观特别自然保护区需提前办理许可。可通过自然公园管理处或专业旅行社办理。
      </p>
      <p class="modalBlock__description">
         自驾：从摩尔曼斯克沿R-21&quot;科拉&quot;公路行驶，地标为季托夫卡河边的检查站。应驾驶经过充分改装的越野车，并在经验丰富的向导陪同下出发，因为半岛上的道路复杂，天气状况可能骤变。
      </p>
      <p class="modalBlock__description">
         半岛上有数个野奢营地和北极酒店可供住宿。建议提前预订，尤其是在夏季和北极光观测期。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/poluostrov_rybachii/kak_dobratsya.jpg" alt="Карта полуостровов Средний и Рыбачий с КПП и размещением" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Баренцево море-----------------------------------------------------------
        {
            id: 'barentcevo_more',
            title: '巴伦支海',
            image: '../../img/murmansk/cards_tochki/Barencevo_more_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">巴伦支海</h1>
</div>
<!-- Блок 1: Крупнейшее море Северного Ледовитого океана -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">北冰洋面积最大的海域</h2>
      <p class="modalBlock__description">
         巴伦支海是北冰洋各海域中水域面积最大的海域。其广阔的水域面积是喀拉海的1.5倍，是白海面积的15倍。
      </p>
      <p class="modalBlock__description">
         人们来到这里，是为感受俄罗斯北方的独特美学，进行潜水，观赏北极光，观察鲸鱼和海狗。大海在一年四季都保持着它的严酷之美。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_1.jpg" alt="巴伦支海冰原与冰山全景" loading="lazy">
   </div>
</div>
<!-- Блок 2: География и климат -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">地理与气候</h2>
      <p class="modalBlock__description">
         巴伦支海位于北冰洋西部，冲刷着俄罗斯和挪威的海岸。受温暖的北大西洋暖流影响，包括摩尔曼斯克港口水域在内的部分区域全年不封冻。
      </p>
      <p class="modalBlock__description">
         然而，海域的相当大一部分会在数月间为冰层覆盖，此间航行仅能借助破冰船。冬季，这里极夜笼罩，寒风刺骨；夏季也仅带来小幅升温。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_2.jpg" alt="巴伦支海中的破冰船与严酷的冰原" loading="lazy">
   </div>
</div>
<!-- Блок 3: Береговая линия и пейзажи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">海岸线与景观</h2>
      <p class="modalBlock__description">
         巴伦支海的海岸线多为岩石嶙峋、难以接近，但也可见到带有沙滩的舒适海湾。尽管这些海滩位于北极圈内，并非为了传统的海滨度假而等待游客，但在特别温暖的季节，仍可在此享受日光浴，甚至下海游泳。
      </p>
      <p class="modalBlock__description">
         海岸的大部分由石质岸、岩层以及铅灰色调的冰冷海水构成。这些严酷的景观具有特殊的魅力，吸引着那些渴望抵达天涯海角、感受永恒呼吸的人们。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_3.jpg" alt="巴伦支海的岩石海岸与舒适的沙滩海湾" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         自驾：从摩尔曼斯克有数条公路通往海岸。距其两小时车程（130公里）处，便是著名的&quot;捷里别尔卡&quot;自然公园，是了解巴伦支海的热门地点。
      </p>
      <p class="modalBlock__description">
         温馨提示：亦可在摩尔曼斯克预订前往海岸的陆地游，或参加科拉湾巡游。许多旅游公司提供包括观鲸、观鸟在内的海上游览活动。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/barencevo_more/Barencevo_more_4.jpg" alt="Карта побережья Баренцева моря с маршрутами из Мурманска" loading="lazy">
   </div>
</div>
`
        }

    ],

//--------------------------------------ВЫБРАТЬСЯ НА ПРИРОДУ-----------------------------------------------------------
//--------------------------------------ВЫБРАТЬСЯ НА ПРИРОДУ-----------------------------------------------------------


    nature: [
        {
            id: 'laplandsii_zapovednik',
            title: '拉普兰自然保护区',
            image: '../../img/murmansk/cards_nature/Laplandskiy_zapovednik_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">拉普兰自然保护区</h1>
</div>
<!-- Блок 1: Создание и статус -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">建于1930年的保护区</h2>
      <p class="modalBlock__description">
         &quot;拉普兰&quot;自然保护区成立于1930年，旨在保护野生驯鹿及独特的泰加林。这里是了解科拉半岛自然的理想之地，已被纳入联合国教科文组织世界生物圈保护区网络。
      </p>
      <p class="modalBlock__description">
         保护区的创始人之一&mdash;&mdash;奥列格&middot;谢苗诺夫-强-尚斯基，苏联生物学家、博物学家，著名探险家彼得&middot;彼得罗维奇&middot;谢苗诺夫-强-尚斯基的孙子。他将其半个多世纪的生命献给了对这片独特自然的研究。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_1.jpg" alt="拉普兰自然保护区的森林与山地景观" loading="lazy">
   </div>
</div>
<!-- Блок 2: Масштабы и природа -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">规模与自然多样性</h2>
      <p class="modalBlock__description">
         保护区以其规模令人惊叹&mdash;&mdash;面积约28万公顷，是北欧最大的自然保护区域之一。这里几乎涵盖了科拉半岛所有的景观多样性：森林、河流、沼泽、湖泊、岩石和高山苔原。
      </p>
      <p class="modalBlock__description">
         保护区的特别骄傲是原始老龄林：其超过50%的面积被树龄超过300年的松树和云杉林覆盖，这在区域其他地区是罕见的。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_2.jpg" alt="保护区的原始林与野生驯鹿" loading="lazy">
   </div>
</div>
<!-- Блок 3: Фауна и музеи -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">动物群与博物馆设施</h2>
      <p class="modalBlock__description">
         保护区的动物群包括近1000只被列入红皮书的野生驯鹿，以及诸如金雕、白尾海雕和雕鸮等珍稀鸟类。
      </p>
      <p class="modalBlock__description">
         为游客准备了数个主要参观点。&quot;飞翔之石之地&quot;展览介绍原住民&mdash;&mdash;萨米人的生活。核心自然景观是拥有绵长沙岸线的丘诺泽罗湖。湖岸上建有首任馆长赫尔曼&middot;克雷普斯的故居博物馆，以及谢苗诺夫-强-尚斯基的纪念公寓博物馆。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_3.jpg" alt="关于萨阿米人的展览与保护区的故居博物馆" loading="lazy">
   </div>
</div>
<!-- Блок 4: Экотропы и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">生态小径与如何前往</h2>
      <p class="modalBlock__description">
         生态小径尤受欢迎：攀登第二叶利纽恩山（途中有萨米圣石&mdash;&mdash;塞德）、&quot;沿湖而行&quot;环线（设有木质栈道），以及专为儿童设计的&quot;森林小问号&quot;小径（带有&quot;巴巴亚加&quot;木屋）。家庭游览则可前往木制的严寒老人宫殿。
      </p>
      <p class="modalBlock__description">
         如何前往：从蒙切戈尔斯克自驾，至保护区中央庄园需35分钟（45公里）。从摩尔曼斯克沿R-21&quot;科拉&quot;公路行驶，全程需2.5小时（175公里）。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/laplandskii_zapovednik/Laplandskiy_zapovednik_4.jpg" alt="Экотропы в заповеднике и карта проезда" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Терский берег Белого моря-----------------------------------------------------------
        {
            id: 'terskii_bereg_belogo_morya',
            title: '白海捷尔斯基海岸',
            image: '../../img/murmansk/cards_nature/Terskiy_bereg_Belogo_morya_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">白海捷尔斯基海岸</h1>
</div>
<!-- Блок 1: Самобытная историческая область -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">独特的历史区域</h2>
      <p class="modalBlock__description">
         捷尔斯基海岸是科拉半岛的南端，白海的北岸。这片独特的历史区域绵延数百公里，以其严酷而壮丽的景观令人惊叹。
      </p>
      <p class="modalBlock__description">
         此地犹如一座露天的波莫尔文化博物馆：这里的村落（渔猎屯）不仅保存了被遗忘的北方木结构建筑，还保留了近乎消失的波莫尔文化。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_1.jpg" alt="白海捷尔斯基海岸严酷景观的全景" loading="lazy">
   </div>
</div>
<!-- Блок 2: Уникальный уголок природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">独特的自然角落</h2>
      <p class="modalBlock__description">
         白海捷尔斯基海岸是科拉半岛上最具原始风貌的地区之一，壮丽的白海在此与无垠的北方苔原相遇。这片独特的自然角落沿东南海岸延伸数百公里。
      </p>
      <p class="modalBlock__description">
         嶙峋的海角在此出人意料地被库佐缅斯克沙丘的金色乃至红褐色沙丘所取代，而丰富的鸟类群落与驯鹿牧场相邻。北极光为这些地方增添了特殊的魅力。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_2.jpg" alt="库佐缅斯克沙丘与捷尔斯基海岸的鸟群" loading="lazy">
   </div>
</div>
<!-- Блок 3: Культурное наследие -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">文化遗产与可能性</h2>
      <p class="modalBlock__description">
         这片土地保存着北方原住民的数世纪遗产。古老的遗迹和文物，诉说着波莫尔人独特的文化、传统和精神信仰。
      </p>
      <p class="modalBlock__description">
         对于旅行者，捷尔斯基海岸提供了众多可能性：从激动人心的徒步路线、海上游览，到沉浸于这片严酷之地的独特文化遗产。每个到过此地的人，都会带走它不可思议的氛围。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_3.jpg" alt="古老的波莫尔建筑与文化文物" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         自驾：从坎达拉克沙沿湾岸向东行驶。重要提示：应驾驶经过充分改装的越野车，并在经验丰富的向导陪同下出发，因为这些地方的道路可能很复杂，尤其是在淡季和冬季。
      </p>
      <p class="modalBlock__description">
         建议提前规划行程，考虑该地区的偏远性和特殊性。许多旅游公司提供由熟悉捷尔斯基海岸特点的经验丰富的向导带领的旅行团。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/terskii_bereg_belogo_morya/Terskiy_bereg_Belogo_morya_4.jpg" alt="Карта Терского берега с маршрутами из Кандалакши" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Кандалакшский заповедник-----------------------------------------------------------
        {
            id: 'kandalakshkii_zapovednik',
            title: '坎达拉克沙自然保护区',
            image: '../../img/murmansk/cards_nature/Kandalakshskiy_zapovednik_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">坎达拉克沙自然保护区</h1>
</div>
<!-- Блок 1: Заповедник на двух морях -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">两海之间的保护区</h2>
      <p class="modalBlock__description">
         坎达拉克沙自然保护区&mdash;&mdash;其严酷的海岸被巴伦支海和白海的海水冲刷，自身占据着超过550个岛屿。保护区成立于1932年9月7日，旨在保护普通绒鸭&mdash;&mdash;一种以其珍贵绒毛而闻名的海鸭。
      </p>
      <p class="modalBlock__description">
         坎达拉克沙自然保护区位于白海同名海湾沿岸以及巴伦支海的一组岛屿上：超过70% 的面积为海域，主要居民是水禽。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_1.jpg" alt="坎达拉克沙自然保护区的岛屿与海鸟" loading="lazy">
   </div>
</div>
<!-- Блок 2: Территория и география -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">领土与地理</h2>
      <p class="modalBlock__description">
         保护区总面积70,530公顷，其中49,583公顷（近75%）为海域。领土包括数个群岛：巴伦支海的艾诺夫群岛、加夫里洛夫群岛、七岛群岛，以及白海坎达拉克沙湾的诸岛。
      </p>
      <p class="modalBlock__description">
         保护区位于苔原和北方泰加林带，其区域分布于摩尔曼斯克州的五个区以及卡累利阿的洛乌赫区。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_2.jpg" alt="坎达拉克沙自然保护区群岛地图" loading="lazy">
   </div>
</div>
<!-- Блок 3: Фауна и обитатели -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">动物群与居民</h2>
      <p class="modalBlock__description">
         坎达拉克沙自然保护区是重要的鸟类学研究中心。这里栖息着群居海鸟和海洋哺乳动物：环斑海豹、髯海豹、灰海豹，偶尔有白鲸游入。
      </p>
      <p class="modalBlock__description">
         在坎达拉克沙湾游览时，常可观察到海豹。白鲸偶尔会游入此地。保护区在保护普通绒鸭及其他海鸟种群方面发挥着关键作用。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_3.jpg" alt="保护区内的普通绒鸭与海豹" loading="lazy">
   </div>
</div>
<!-- Блок 4: Музей природы и как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">自然博物馆与如何前往</h2>
      <p class="modalBlock__description">
         可从坎达拉克沙的保护区的自然博物馆开始了解。其展览陈列了介绍保护区历史、自然和居民的资料。博物馆使人们对这一地区的独特生态系统有了良好的认识。
      </p>
      <p class="modalBlock__description">
         访客中心地址：坎达拉克沙，利涅伊纳亚街35号。关于开放时间、游览及参观规定的详细信息，请查询保护区官网。建议提前核实信息，尤其计划登岛时。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/kandalashkii_zapovednik/Kandalakshskiy_zapovednik_4.jpg" alt="Музей природы заповедника в Кандалакше и карта расположения" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Ловозерские тундры-----------------------------------------------------------
        {
            id: 'lovoserskiye_tundri',
            title: '洛沃泽罗苔原',
            image: '../../img/murmansk/cards_nature/Lovozerskie_tundry_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">洛沃泽罗苔原</h1>
</div>
<!-- Блок 1: Величественный массив -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">雄伟的山岭</h2>
      <p class="modalBlock__description">
         洛沃泽罗苔原是科拉半岛继希比内之后的第二大山脉，位于乌姆博泽罗湖与洛沃泽罗湖之间。其形状宛如马蹄铁，内部是萨米人视为神圣的谢伊多泽罗湖。
      </p>
      <p class="modalBlock__description">
         这是纯净湖泊、蜿蜒河流和潺潺溪流的王国，保持着其原始之美。&quot;苔原&quot;一词源自芬兰语&quot;tunturi&quot;，意为&quot;无林的平坦山顶&quot;&mdash;&mdash;这是当地海拔略高于1000米的山顶的典型特征。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_1.jpg" alt="洛沃泽罗苔原与马蹄形山谷景观" loading="lazy">
   </div>
</div>
<!-- Блок 2: Геология и рельеф -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">地质与地貌</h2>
      <p class="modalBlock__description">
         山脉独特的地貌形成于岩浆强力冲破地壳，造就了平缓的形态和特殊的岩层结构。从地质学角度看，它是希比内山脉的&quot;同胞兄弟&quot;。
      </p>
      <p class="modalBlock__description">
         正是在被认为是苔原神圣中心的谢伊多泽罗湖，存在着古岩浆的喷发点。此地，奇岩异石与深邃峡谷之间，分布着自古被萨阿米人尊崇的特殊能量之地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_2.jpg" alt="洛沃泽罗苔原的岩石与山谷" loading="lazy">
   </div>
</div>
<!-- Блок 3: Сакральное сердце тундр -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">苔原的神圣之心</h2>
      <p class="modalBlock__description">
         神圣的谢伊多泽罗湖和神秘的拉斯拉克冰斗，是吸引古老奥秘探寻者的特殊地点。据传，祖先的灵魂栖息于谢伊多泽罗湖，而冰斗的起源至今仍在研究者中引发争论。
      </p>
      <p class="modalBlock__description">
         原住民&mdash;&mdash;萨阿米人，自14世纪起便居住于这片苔原，将洛沃泽罗村作为其边疆区的精神与文化中心。他们的传统和信仰与此地景观密不可分。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_3.jpg" alt="群山环绕的谢伊多泽罗" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         苔原的路线始于洛沃泽罗村或列夫达村。可从奥列涅戈尔斯克市附近驶离联邦公路&quot;科拉&quot;，自驾抵达。
      </p>
      <p class="modalBlock__description">
         重要提示：参观某些神圣地点，尤其是谢伊多泽罗湖周边，可能受到管制。建议尊重当地传统，并提前确认通行可能性。这是俄罗斯北方原始自然的严酷而美丽之地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/lovozerskie_tundry/Lovozerskie_tundry_4.jpg" alt="Дорога к Ловозерским тундрам и карта" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Остров Кильдин-----------------------------------------------------------
        {
            id: 'ostrov_kildin',
            title: '基利金岛',
            image: '../../img/murmansk/cards_nature/Ostrov_Kildin_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">基利金岛</h1>
</div>
<!-- Блок 1: Каменный страж -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">石之守卫者</h2>
      <p class="modalBlock__description">
         基利金岛从巴伦支海的水域中升起，位于科拉湾口，宛如极地边界的石之守卫者。它不仅拥有梦幻般的美景，还承载着充满谜团与秘密的戏剧性历史。
      </p>
      <p class="modalBlock__description">
         关于岛屿的首次提及可追溯至16世纪中叶，17世纪初，航海家威廉&middot;巴伦支将其精确轮廓绘入了所有海图。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_1.jpg" alt="从海上眺望基利金岛" loading="lazy">
   </div>
</div>
<!-- Блок 2: Наследие военного прошлого -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">军事历史的遗产</h2>
      <p class="modalBlock__description">
         基利金真正的声誉来自苏联时期，当时此地建立了强大的军事基地，拥有地下设施、火箭工厂和发射井。
      </p>
      <p class="modalBlock__description">
         鼎盛时期，驻军人数多达15,000人。如今，唯有锈蚀的装备、机场跑道的残留以及地下迷宫，还让人想起昔日的辉煌，给访客留下难以磨灭的印象。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_2.jpg" alt="基利金岛上遗留的军事装备与设施" loading="lazy">
   </div>
</div>
<!-- Блок 3: Экологическое возрождение и феномен -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">复兴与自然奇观</h2>
      <p class="modalBlock__description">
         如今，基利金正成为生态复兴的中心。在俄罗斯地理协会&quot;北极。大扫除&quot;探险框架下，专家和志愿者开展大规模清理岛屿军事遗产的工作。
      </p>
      <p class="modalBlock__description">
         独特的景点是莫吉利诺耶湖。这是一个自然奇观，海洋和淡水生物在此共存，包括珍稀的湖居鳕鱼。这是俄罗斯境内唯一的此类水体。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_3.jpg" alt="岛上的生态清理活动与莫吉利诺耶湖" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         登岛仅能通过水路。可从摩尔曼斯克或捷里别尔卡乘快艇前往，或参加沿巴伦支海岸的专项巡航。
      </p>
      <p class="modalBlock__description">
         请注意：登岛需精心准备，因地处边境管制区需提前协调，且可能因复杂的后勤和天气条件面临困难。建议通过可靠的承办者规划行程。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/ostrov_kildin/Ostrov_Kildin_4.jpg" alt="Катер у берегов Кильдина и карта маршрута" loading="lazy">
   </div>
</div>
`
        },
//--------------------------------------Сейдъявврь-----------------------------------------------------------
        {
            id: 'seydavr',
            title: '谢伊多雅芙尔自然公园',
            image: '../../img/murmansk/cards_nature/Seydyavr_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">&quot;谢伊多泽罗湖&quot;自然公园</h1>
</div>
<!-- Блок 1: Священное место -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">神圣之地</h2>
      <p class="modalBlock__description">
         以复杂的萨米语名称&quot;谢伊多泽罗湖&quot;（意为&quot;神圣的&quot;）命名的自然公园，保护着传奇的谢伊多泽罗湖及其注入河流溪谷，位于洛沃泽罗苔原的中心。
      </p>
      <p class="modalBlock__description">
         对于原住民而言，这些地方自古以来便被尊为神圣。据传说，神秘的希柏里尔文明正位于此地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_1.jpg" alt="塞伊德亚夫尔自然公园和谢伊多泽罗湖全景" loading="lazy">
   </div>
</div>
<!-- Блок 2: Озеро Сейдозеро -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">谜之湖</h2>
      <p class="modalBlock__description">
         谢伊多泽罗湖海拔189米，在苔原中绵延8公里。其水晶般澄澈的湖水被比作明镜，而独特的微气候使得北方边疆区非典型的树种&mdash;&mdash;山杨和桤木得以生长。
      </p>
      <p class="modalBlock__description">
         科学家们对湖泊的起源争论不休：有人视其为死火山口，有人推测是古代活动的痕迹。热衷者相信，谢伊多泽罗湖曾是希柏里尔的中心。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_2.jpg" alt="谢伊多泽罗湖如镜面般的湖面景观" loading="lazy">
   </div>
</div>
<!-- Блок 3: Легенда о Куйве -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">石化于崖壁的传说</h2>
      <p class="modalBlock__description">
         主要的迷幻景点，是被称作库伊瓦的崖壁上巨大的猎人形象。该形象高超过70米，根据古老的萨阿米传说，是一位被众神永远化为石像的残忍巨人。
      </p>
      <p class="modalBlock__description">
         保护区的建立，不仅是为了保护独特的自然，也是为了保存萨米人的文化遗产。当地居民建议，需征得精灵&mdash;&mdash;据信栖息于巨砾中的塞德&mdash;&mdash;的许可。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_3.jpg" alt="谢伊多泽罗湖畔岩壁上的库伊瓦形象" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться и правила -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往与参观规定</h2>
      <p class="modalBlock__description">
         通往谢伊多泽罗湖的路径始于洛沃泽罗村。抵达被群山环抱的湖泊，可步行穿越洛沃泽罗苔原的山口，或乘船横渡洛沃泽罗湖，再经地峡徒步。
      </p>
      <p class="modalBlock__description">
         重要提示：参观&quot;谢伊多泽罗湖&quot;自然公园需特别许可。须提前办理。请严格遵守保护区行为规范，尊重萨米人的神圣之地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/seydyavr/Seydyavr_4.jpg" alt="Тропа к Сейдозеру и информационный щит парка" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Заповедник «Пасвик»-----------------------------------------------------------
        {
            id: 'zapovednik_pasvik',
            title: '“帕斯维克”自然保护区',
            image: '../../img/murmansk/cards_nature/Paskvik_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">&quot;帕斯维克&quot;自然保护区</h1>
</div>
<!-- Блок 1: Пограничный заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">边境保护区</h2>
      <p class="modalBlock__description">
         这是摩尔曼斯克州最年轻的保护区，为保护和研究所独特的湿地及丰富的水禽动物群而建立。
      </p>
      <p class="modalBlock__description">
         其领土为一条狭长地带，沿俄挪边界延伸44公里。这是俄罗斯唯一一个完全位于边境管制区的自然保护区。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_1.jpg" alt="帕斯维克河谷与保护区森林景观" loading="lazy">
   </div>
</div>
<!-- Блок 2: Зеленый пояс Фенноскандии -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">绿带之心</h2>
      <p class="modalBlock__description">
         &quot;帕斯维克&quot;是芬诺斯坎迪亚绿带的关键部分&mdash;&mdash;这是一项保护俄罗斯、芬兰和挪威三国边境沿线原始林的国际项目。
      </p>
      <p class="modalBlock__description">
         保护区的四分之一面积为沼泽。它位于北方泰加林和森林苔原的交界地带，属前森林苔原区。这些地方对比鲜明的景观令人惊叹。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_2.jpg" alt="帕斯维克保护区的原始林与沼泽" loading="lazy">
   </div>
</div>
<!-- Блок 3: Визит-центр и Музей природы -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">访客中心与自然博物馆</h2>
      <p class="modalBlock__description">
         可从位于尼克尔镇的现代化访客中心开始了解保护区&mdash;&mdash;这里是生态游客和科学家的汇聚中心。这里举办大师班、科学研讨会和文化活动。
      </p>
      <p class="modalBlock__description">
         2022年1月，一座现代化的自然博物馆在此开放，其多媒体展览展示了这片极地边疆区的独特之美与生物多样性。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_3.jpg" alt="尼克尔镇的访客中心建筑与自然博物馆展览" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         游客的主要出发点是保护区的访客中心。它位于尼克尔镇，可从摩尔曼斯克或扎波利亚尔内自驾抵达。
      </p>
      <p class="modalBlock__description">
         访客中心地址：尼克尔镇，格瓦尔杰伊斯基大街43号。关于开放时间、导览、进入保护区（属边境管制区）的参观规定等详细信息，请查询保护区官网。所有访问需提前预约。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/paskvik/Paskvik_4.jpg" alt="Дорога к Никелю и карта расположения визит-центра" loading="lazy">
   </div>
</div>
`
        }

    ],

//--------------------------------------КУЛЬТУРНЫЙ КОД-----------------------------------------------------------
//--------------------------------------КУЛЬТУРНЫЙ КОД-----------------------------------------------------------

    culture: [
        {
            id: 'dolina_slavy',
            title: '“光荣谷”',
            image: '../../img/murmansk/cards_culture/dolina_slavy_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">&quot;光荣谷&quot;纪念建筑群</h1>
</div>
<!-- Блок 1: Рубеж обороны -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">坚不可摧的防线</h2>
      <p class="modalBlock__description">
         &quot;光荣谷&quot;纪念建筑群铭记着伟大卫国战争期间北极地区最惨烈战斗的记忆。起初，士兵们称此地为&quot;死亡谷&quot;。
      </p>
      <p class="modalBlock__description">
         从1941年至1944年，前线沿穆斯塔通图里山脊和西利察河延伸。这是法西斯军队始终未能突破的苏联唯一陆上防线。在1195天的战斗中，超过1万名苏联军人阵亡和失踪。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_1.jpg" alt="光荣谷纪念建筑群与穆斯塔通图里山脊" loading="lazy">
   </div>
</div>
<!-- Блок 2: Память и возрождение -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">记忆与重生</h2>
      <p class="modalBlock__description">
         战后，这片土地获得了骄傲的名字&mdash;&mdash;光荣谷。此处建起了纪念建筑，安葬着北极保卫者的遗骸。搜寻队至今仍在沿前线地带寻获战士的遗骨。
      </p>
      <p class="modalBlock__description">
         首座纪念碑&quot;两名战士&quot;于20世纪60年代在此落成。如今，这里是一座现代化的纪念建筑群，拥有长明火&mdash;&mdash;取自摩尔曼斯克&quot;阿廖沙&quot;纪念碑火焰的一缕火种。火焰象征着对功勋的永恒记忆。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_2.jpg" alt="光荣谷的长明火与“两名战士”纪念碑" loading="lazy">
   </div>
</div>
<!-- Блок 3: Музей памяти -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">纪念博物馆</h2>
      <p class="modalBlock__description">
         建筑群内的现代化博物馆于去年隆重开放。其展览反映了摩尔曼斯克方向战斗行动的所有阶段。
      </p>
      <p class="modalBlock__description">
         战时真实文物辅以纪录片、目击者的音频回忆以及关于近3.5万名北极保卫者信息的互动面板。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_3.jpg" alt="光荣谷博物馆的展览" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         从摩尔曼斯克沿联邦公路R-21&quot;科拉&quot;自驾。建筑群位于公路的第1447公里处。
      </p>
      <p class="modalBlock__description">
         车程约1小时（65公里）。纪念建筑不仅是缅怀之地，更是对那些捍卫这片严酷北方土地者的无与伦比勇气的提醒。推荐所有希望了解北极胜利代价的人前往参观。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/dolina_slavy/dolina_slavy_4.jpg" alt="Указатель на трассе Кола и дорога к мемориалу" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Село Варзуга-----------------------------------------------------------
        {
            id: 'selo_varzuga',
            title: '瓦尔祖加村',
            image: '../../img/murmansk/cards_culture/selo_varsuga_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">瓦尔祖加村</h1>
</div>
<!-- Блок 1: Древнее поморское село -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">古老的波莫尔村落</h2>
      <p class="modalBlock__description">
         瓦尔祖加是科拉半岛最古老、最大的定居点之一，自15世纪便闻名于世。它位于白海捷尔斯基海岸，被瓦尔祖加河分为两部分。
      </p>
      <p class="modalBlock__description">
         尤为珍贵的是东岸历史悠久的&quot;尼科利斯卡亚侧&quot;，仅能乘船抵达。在此，时间仿佛停滞，古老的木屋构成了独特的建筑群。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_1.jpg" alt="瓦尔祖加村河流与木屋全景" loading="lazy">
   </div>
</div>
<!-- Блок 2: Деревянное зодчество -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">木结构建筑的宝库</h2>
      <p class="modalBlock__description">
         瓦尔祖加保存了独特的古迹群：阿法纳西教堂、乌斯佩尼亚钟楼建筑群、圣尼古拉教堂、彼得保罗教堂及无名修士小教堂。
      </p>
      <p class="modalBlock__description">
         在昔日&quot;特雷&quot;要塞所在的丘陵上，立着一个巨大的十字架。从高处可望见被植被固定的沙丘&mdash;&mdash;捷尔斯基海岸的独特景观。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_2.jpg" alt="瓦尔祖加的木制教堂与山丘眺望" loading="lazy">
   </div>
</div>
<!-- Блок 3: Успенская церковь -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">瓦尔祖加的明珠</h2>
      <p class="modalBlock__description">
         村庄的骄傲是乌斯佩尼亚教堂，17世纪木结构建筑的绝佳典范。它按照&quot;黄金比例&quot;原则以帐篷顶风格建造，高达34米。
      </p>
      <p class="modalBlock__description">
         教堂饰以传统的山形墙和木鳞片，其比例的完美令人惊叹。圣像屏风中保存有84幅圣像，部分为索洛韦茨基工匠所作。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_3.jpg" alt="瓦尔祖加的乌斯佩尼亚教堂——外观与内部" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         从最近的较大城市坎达拉克沙出发最为便捷。前往瓦尔祖加最好驾驶经过改装的汽车，并建议由熟悉当地道路的向导陪同。
      </p>
      <p class="modalBlock__description">
         沿坎达拉克沙湾岸行驶约三小时。瓦尔祖加将古老传统与现代和谐地融为一体，是波莫尔地区丰富历史与文化的鲜活见证。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/selo_varsuga/selo_varsuga_4.jpg" alt="Дорога к Варзуге вдоль берега Белого моря" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Маяк Русский-----------------------------------------------------------
        {
            id: 'mayak_ruskii',
            title: '“俄罗斯”灯塔',
            image: '../../img/murmansk/cards_culture/mayak_russkii_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">&quot;俄罗斯&quot;灯塔</h1>
</div>
<!-- Блок 1: Страж Северного пути -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">北方海路的守护者</h2>
      <p class="modalBlock__description">
         大奥列尼岛上的&quot;俄罗斯&quot;灯塔是为保障巴伦支海北方海路航行安全而建的首批导航设施之一。
      </p>
      <p class="modalBlock__description">
         19世纪末，随着摩尔曼斯克沿岸航运的增加，建立导航系统的需求出现。岛上西端的首座灯塔建于1925年。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_1.jpg" alt="大奥列尼岛上的“俄罗斯”灯塔" loading="lazy">
   </div>
</div>
<!-- Блок 2: Архитектура и история -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">建筑与历史</h2>
      <p class="modalBlock__description">
         1953年，在原建筑旁建起了一座高28米的整体钢筋混凝土塔身。塔身漆成黄色，顶部为红色钢制灯室。
      </p>
      <p class="modalBlock__description">
         灯塔的建筑风格具有典型的苏联时期特征&mdash;&mdash;形式严格的功能性与经过北极风暴考验的结构可靠性相结合。其光芒至今仍是航海者的重要参考。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_2.jpg" alt="灯塔的钢筋混凝土塔身与灯室" loading="lazy">
   </div>
</div>
<!-- Блок 3: Остров-заповедник -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">岛屿-保护区</h2>
      <p class="modalBlock__description">
         距海岸7公里的大奥列尼岛，作为独特的北方动物群保护区，具有特殊价值。其面积1.2平方公里。
      </p>
      <p class="modalBlock__description">
         珍稀红皮书鸟类在此筑巢：绒鸭、燕鸥，以及众多鸥类和涉禽。其位于迁徙路线上的便利位置，使其成为鸟类觅食和筑巢的理想之地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_3.jpg" alt="大奥列尼岛上的鸟群栖息地" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться и исследования -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往与探索</h2>
      <p class="modalBlock__description">
         登岛仅能通过水路&mdash;&mdash;参加从摩尔曼斯克或其他港口出发的巴伦支海专项巡航。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/mayak_russkii/mayak_russkii_4.jpg" alt="Круизное судно у берегов острова и карта расположения" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Культурные центры саамов-----------------------------------------------------------
        {
            id: 'culture_centr_saamov',
            title: '萨米文化中心',
            image: '../../img/murmansk/cards_culture/centr_saamov_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">萨米文化中心</h1>
</div>
<!-- Блок 1: Столица мурманских саамов -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">摩尔曼斯克萨米人的&quot;首都&quot;</h2>
      <p class="modalBlock__description">
         洛沃泽罗村是科拉半岛最古老的萨米人定居点之一，被公认为俄罗斯萨米人的文化中心。在此，北方原住民的传统被悉心保存并传承。
      </p>
      <p class="modalBlock__description">
         由当地居民倡议于1994年成立的民族文化中心，已成为保存萨米传统的主要中心。该中心的建筑呈传统居所&mdash;&mdash;楚姆（圆锥形帐篷）的形状。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_1.jpg" alt="洛沃泽罗村与楚姆形民族文化中心" loading="lazy">
   </div>
</div>
<!-- Блок 2: Музей и традиции -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">博物馆与鲜活的传统</h2>
      <p class="modalBlock__description">
         科拉萨米人历史、文化与生活博物馆，讲述着传统居所的内部陈设、民族服饰和生活用品。展览的骄傲是庞大的考古收藏。
      </p>
      <p class="modalBlock__description">
         中心支持民间创作团体&mdash;&mdash;萨米传统剧院和民俗乐团此处还举办民族节日和庆典，如传统的萨米人运动会。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_2.jpg" alt="萨米博物馆的展览与民俗乐团的表演" loading="lazy">
   </div>
</div>
<!-- Блок 3: Этнопарки и деревни -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">民族主题公园与村庄</h2>
      <p class="modalBlock__description">
         旅行者会喜爱那些再现游牧驯鹿牧民生活条件的模拟萨米村庄。民族主题公园&quot;伊曼德拉之光&quot;拥有楚姆、驯鹿和互动表演，让人沉浸于过去。
      </p>
      <p class="modalBlock__description">
         在萨米村和&quot;萨米-赛特&quot;村庄，组织科拉半岛野外游览、驯鹿雪橇、楚姆内大师班以及北方菜肴品尝活动。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/centr_saamov_4.jpg" alt="民族主题公园的驯鹿、楚姆与雪橇体验" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться и адреса -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往与地址</h2>
      <p class="modalBlock__description">
         洛沃泽罗距摩尔曼斯克170公里。可沿通往洛沃泽罗苔原方向的道路自驾前往，车程约2.5小时。
      </p>
      <p class="modalBlock__description">
         <strong>主要地址:</strong> <br>
         &bull; 文化中心：洛沃泽罗村，苏维埃街8号<br>
         &bull; 博物馆：洛沃泽罗村，苏维埃街28号<br>
         &bull; 萨米村：莫克拉亚基察镇<br>
         &bull; &quot;萨米-赛特&quot;：奥列涅戈尔斯克市辖区<br>
         &bull; &quot;伊曼德拉之光&quot;：阿帕季特市辖区，伊曼德拉湖畔
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/culture_centr_saamov/kak_dobratsya.jpg" alt="Карта расположения саамских центров на Кольском полуострове" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Большой Вудъявр-----------------------------------------------------------
        {
            id: 'bolshoi_vudyavr',
            title: '大武德亚夫尔',
            image: '../../img/murmansk/cards_culture/bolshoi_vudyavr_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">&quot;大武德亚夫尔&quot;滑雪度假村</h1>
</div>
<!-- Блок 1: Крупнейший на Севере -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">俄罗斯北方最大的滑雪场</h2>
      <p class="modalBlock__description">
         在希比内山脉的艾库艾文乔尔山北坡和南坡，坐落着&quot;大武德亚夫尔&quot;滑雪度假村的雪道&mdash;&mdash;这是俄罗斯北方最大的滑雪场。
      </p>
      <p class="modalBlock__description">
         度假村的最高点位于南坡海拔1060米处，可乘缆车抵达。从这里可以俯瞰科拉半岛无垠的广阔天地。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_1.jpg" alt="希比内山脉大武德亚夫尔滑雪度假村全景" loading="lazy">
   </div>
</div>
<!-- Блок 2: Трассы и инфраструктура -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">雪道与基础设施</h2>
      <p class="modalBlock__description">
         度假村提供总长25公里、难度不一的雪道。其中15公里设有照明，可供极夜期间滑雪。这里拥有适合任何水平的高山滑雪和单板滑雪爱好者的条件&mdash;&mdash;从教学坡道到坡度达40% 的专业雪道。
      </p>
      <p class="modalBlock__description">
         滑雪季从十一月持续至五月。度假村距基洛夫斯克咫尺之遥：从市中心到北坡雪道仅需步行15分钟。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_2.jpg" alt="大武德亚夫尔度假村的雪道与缆车" loading="lazy">
   </div>
</div>
<!-- Блок 3: Летний сезон -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">山间夏季</h2>
      <p class="modalBlock__description">
         夏季，山坡邀请人们探索通往山顶和观景平台的山间小径。可乘缆车登高，置身于群山之巅，饱览希比内山谷和无垠苔原的全景。
      </p>
      <p class="modalBlock__description">
         户外运动爱好者可选择难度不一的徒步路线。当地向导可以带您认识希比内特有的植物，并讲解这座古老山脉的地质知识。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/bolshoi_vudyavr_3.jpg" alt="度假村的夏季徒步路线与缆车" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         北坡的下部缆车站位于基洛夫斯克东部，城市公园边缘。可自驾或乘巴士（&quot;奥林匹克街&quot;站）抵达。
      </p>
      <p class="modalBlock__description">
         南坡雪道可从缆车上部站进入。在山脚度过活力满满的一天后，可在舒适的咖啡馆小憩，品尝当地美食，享受北方自然的宁静。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/bolshoi_vudyavr/kak_dobratsya.jpg" alt="Нижняя станция курорта в Кировске и схема расположения склонов" loading="lazy">
   </div>
</div>
`
        },

//--------------------------------------Святоносский маяк-----------------------------------------------------------
        {
            id: 'svyatonoskii_mayak',
            title: '圣诺斯灯塔',
            image: '../../img/murmansk/cards_culture/svyatonoskii_mayak_0.jpg',
            modalContent:

`
<div class="modalHeader">
   <h1 class="modalHeader__title">圣诺斯灯塔</h1>
</div>
<!-- Блок 1: Старейший страж -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">北方海洋最古老的守护者</h2>
      <p class="modalBlock__description">
         圣诺斯灯塔是俄罗斯北方仍在运行的最古老灯塔之一，自1862年11月6日起便履行着职责。它位于科拉半岛东北海岸的圣诺斯角。
      </p>
      <p class="modalBlock__description">
         圣诺斯角如狭窄的楔子般伸入大海，是海上航线的关键转折点。这段水域既是科拉北极地区最繁忙的，也是最危险的。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_1.jpg" alt="圣诺斯角上的圣诺斯灯塔" loading="lazy">
   </div>
</div>
<!-- Блок 2: Навигационный ориентир -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">最重要的导航标志</h2>
      <p class="modalBlock__description">
         该灯塔是往返于白海与巴伦支海之间的船舶最重要的导航标志。其光芒可见距离达22海里，一个半多世纪以来，它帮助船舶安全通过这段复杂水域。
      </p>
      <p class="modalBlock__description">
         陡峭、无植被覆盖、坡高壁陡的海岸，要求航海者格外小心。灯塔高22米，海拔94.5米。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_2.jpg" alt="从海上眺望灯塔及航段示意图" loading="lazy">
   </div>
</div>
<!-- Блок 3: Объект культурного наследия -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">文化遗产</h2>
      <p class="modalBlock__description">
         被认定为联邦级文化遗产的圣诺斯灯塔，不仅是重要的导航设施，更是北极海洋开发史的历史丰碑。
      </p>
      <p class="modalBlock__description">
         其19世纪灯塔特有的严谨金字塔形，与极地海岸的严酷景观和谐相融。灯塔象征着极地航海者的勇气与专业精神。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/svyatonoskii_mayak_3.jpg" alt="灯塔建筑特写与历史照片" loading="lazy">
   </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
   <div class="modalBlock__text">
      <h2 class="modalBlock__title">如何前往</h2>
      <p class="modalBlock__description">
         可通过水路抵达圣诺斯角&mdash;&mdash;参加从摩尔曼斯克或科拉半岛其他港口出发的巴伦支海专项巡航。
      </p>
      <p class="modalBlock__description">
         冬季，可沿封冻的海岸乘雪地摩托前往，但这种方式需要特殊的准备和装备。建议通过专营北极线路的可靠旅行社规划灯塔参观行程。
      </p>
   </div>
   <div class="modalBlock__image">
      <img src="../../img/murmansk/cards_modal/svyatoskii_mayak/kak_dobratsya.jpg" alt="Круизное судно у мыса Святой Нос и карта расположения" loading="lazy">
   </div>
</div>
`
        }

    ]

};

window.zh_murmanskData = zh_murmanskData;
