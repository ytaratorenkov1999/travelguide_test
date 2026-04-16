// ============================================
// ДАННЫЕ КАРТОЧЕК САМАРСКОЙ ОБЛАСТИ
// ============================================

const zh_samaraData = {
//---------------------------------Точки притяжения региона-------------------------------------------------------


    attractions: [
        {
            id: 'samarskaya_luka',
            title: '“萨马拉河湾”',
            image: '../../img/samara/cards_tochki/samarskaya_luka_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">&quot;萨马拉河湾&quot;国家公园</h1>
</div>
<!-- Блок 1: Где Волга рисует круг -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">伏尔加河在此画下一个圆</h2>
        <p class="modalBlock__description">
            这片保护区位于同名的半岛上，伏尔加河在此完成了它最长、也近乎完美的环形河曲。国家公园内穿行着俄罗斯地理学会在伏尔加河畔的生态小径&mdash;&mdash;一条风景如画的路线，适合任何体能水平的游客。
        </p>
        <p class="modalBlock__description">
            试想这样一个地方：一日之内，你可以漫步于西伯利亚松林，登上一座古老的山峦，再踏入羽茅草摇曳的辽阔草原。正是如此多样的地貌，造就了萨马拉河湾的独一无二。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_1.jpg" alt="萨马拉河湾鸟瞰全景，伏尔加河曲" loading="lazy">
    </div>
</div>
<!-- Блок 2: Сердце парка — Жигулевские горы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">公园之心&mdash;&mdash;日古利山</h2>
        <p class="modalBlock__description">
            国家公园的心脏，是日古利山。这座古老的构造山体，其成因对于平坦的伏尔加河流域而言，至今仍是一个谜。这绝非寻常的丘陵：在此处，你可以看到石灰岩和白云岩构成的奇特岩层，其中封存着远古生物的化石。
        </p>
        <p class="modalBlock__description">
            从山顶&mdash;&mdash;例如富有传奇色彩的&quot;猎鹰&quot;悬崖（相传彼得一世曾登上此处）&mdash;&mdash;放眼望去，伏尔加河、岛屿、森林与村庄的壮丽全景尽收眼底。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_2.jpg" alt="日古利山与从猎鹰悬崖眺望的景色" loading="lazy">
    </div>
</div>
<!-- Блок 3: Царство биологического разнообразия -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">生物多样性的王国</h2>
        <p class="modalBlock__description">
            春日里，山坡被番红花铺成紫丁香色的地毯；盛夏时，橡树林中则是一片沁人心脾的清凉。这里是生物多样性令人惊叹的王国：科学家在此记录到的植物种类超过1300种。
        </p>
        <p class="modalBlock__description">
            其中不乏真正的孑遗植物，例如独一无二的日古利大戟，这是世界上任何其他地方都找不到的特有物种。林间偶尔可见狍子的身影，或听闻啄木鸟的啄木声。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_3.jpg" alt="盛放的番红花、孑遗植物与公园内的动物" loading="lazy">
    </div>
</div>
<!-- Блок 4: Маршруты на любой вкус -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">丰俭由人的路线</h2>
        <p class="modalBlock__description">
            对于旅行者而言，萨马拉河湾提供了多种多样的选择：乘皮划艇泛舟伏尔加河，沿着纤夫和绿林好汉的足迹徒步（还有关于藏宝的传说），探访历史悠久的村镇和伏尔加河流域民族文化的博物馆。
        </p>
        <p class="modalBlock__description">
            与许多自然保护区不同，这个国家公园将原始自然与旅游设施巧妙地融为一体。一天的精彩之后，可以回到萨马拉、陶里亚蒂或日古廖夫斯克舒适的酒店休憩。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_luka/samarskaya_luka_4.jpg" alt="皮划艇之旅、徒步小径与公园设施" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Самарской Луки -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达萨马拉河湾</h2>
        <p class="modalBlock__description">
            萨马拉河湾半岛可从不同方向进入。
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem">陆路交通：从陶里亚蒂出发&mdash;&mdash;经由公路桥或铁路桥。从塞兹兰出发&mdash;&mdash;沿穿越半岛狭窄地峡的公路。</li>
            <li class="modalBlock__listItem">水路交通（夏季）：从萨马拉河运码头乘坐小型客船或&quot;瓦尔代&quot;快速快艇。</li>
            <li class="modalBlock__listItem">冬季交通：从萨马拉乘坐气垫船穿越冰封的伏尔加河。</li>
        </ul>
        <p class="modalBlock__description">
            进入公园的主要门户是日古廖夫斯克市和希里亚耶沃村，大多数游览路线均由此开始。
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
            title: '日古利山',
            image: '../../img/samara/cards_tochki/zhigulevskie_gory_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">日古利山</h1>
</div>
<!-- Блок 1: Молодые горы Русской равнины -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">俄罗斯平原的年轻山脉</h2>
        <p class="modalBlock__description">
            这片独特的构造山体，静卧于无垠的草原与森林之中，在俄罗斯平原本土堪称独一无二。其历史始于约700万年前，且至今仍是年轻而不断生长的山脉：每过一个世纪，它们便悄然抬升约1厘米。
        </p>
        <p class="modalBlock__description">
            伏尔加河在其奔流途中遇此古老山体，遂恭敬地绕行，从而塑造出著名的萨马拉河湾&mdash;&mdash;这条大河最壮阔的河曲。因其如画的风景，日古利山常被誉为&quot;俄罗斯的阿尔卑斯&quot;。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_1.jpg" alt="伏尔加河映衬下的日古利山全景" loading="lazy">
    </div>
</div>
<!-- Блок 2: Каменная летопись древних морей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">古海洋的石刻史书</h2>
        <p class="modalBlock__description">
            山体由石灰岩和白云岩构成，它们封存着远古海洋的化石&mdash;&mdash;这片土地曾一度为汪洋所覆。
        </p>
        <p class="modalBlock__description">
            漫步于山间小径，你可以看到奇崛的岩层露头，若有机缘，或许还能觅得远古软体动物或其他海洋生物的印痕，它们静默无言，却见证着遥远的地质年代。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_2.jpg" alt="日古利山的石灰岩露头与化石" loading="lazy">
    </div>
</div>
<!-- Блок 3: Вершины, легенды и тайны -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">峰峦、传说与秘境</h2>
        <p class="modalBlock__description">
            这片山体的最高点是&quot;观察者&quot;山（海拔381.2米），登临其上，伏尔加河的开阔景象尽收眼底。关于日古利山，流传着无数传说，其中最著名的一则称，斯捷潘&middot;拉辛的宝藏就藏匿于此。
        </p>
        <p class="modalBlock__description">
            群山深处，隐匿着&quot;石碗&quot;自然边界&mdash;&mdash;这是位于日古利自然保护区与&quot;萨马拉河湾&quot;国家公园交界处的一处至美且神秘的所在，拥有清澈的泉源和茂密的森林。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_3.jpg" alt="“观察者”山与“石碗”自然边界" loading="lazy">
    </div>
</div>
<!-- Блок 4: Заповедная территория и происхождение названия -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">保护区与名称由来</h2>
        <p class="modalBlock__description">
            如今，日古利山是一处受严格保护的区域，珍藏着独特的景观、珍稀的动植物物种。人们来此攀登峰峦，漫步生态小径，感受历史的呼吸。
        </p>
        <p class="modalBlock__description">
            即便是山的名称，也笼罩着一层神秘：学者们推测，它源于突厥语&quot;džegule&quot;，意为&quot;套上轭的&quot;，这与曾生活于此、在伏尔加河上逆水拉纤的纤夫们相关联。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_gory/zhigulevskie_gory_4.jpg" alt="日古利山的生态小径与受保护景观" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до Жигулевских гор -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达日古利山</h2>
        <p class="modalBlock__description">
            日古利山位于萨马拉河湾半岛的东北缘。
        </p>
        <p class="modalBlock__description">
            水路交通（夏季）：从萨马拉乘坐小型客船或快艇，至日古廖夫斯克市或希里亚耶沃村的码头。
        </p>
        <p class="modalBlock__description">
            汽车/巴士：从陶里亚蒂经伏尔加河大桥（约30-40公里）。从塞兹兰沿萨马拉河湾西侧绕行公路。从萨马拉经日古利水电站大坝（约70公里）。
        </p>
        <p class="modalBlock__description">
            进入部分保护区（如日古利自然保护区）可能需要特别许可。多数徒步路线的起点位于日古廖夫斯克市郊及希里亚耶沃村附近。
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
            title: '《伏尔加河上的纤夫》',
            image: '../../img/samara/cards_tochki/burlaki_na_volge_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">《伏尔加河上的纤夫》纪念碑</h1>
</div>
<!-- Блок 1: Картина, ожившая в бронзе на набережной -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">滨河长廊上青铜复现的画境</h2>
        <p class="modalBlock__description">
            一组由11名形容枯槁的纤夫组成的群雕，拉着一条货船，凝固在萨马拉历史悠久的滨河长廊上。青铜的画框和人物均按1:1的比例制作，而雕塑的背景，便是伏尔加河本身。
        </p>
        <p class="modalBlock__description">
            雕塑的作者、萨马拉艺术家尼古拉&middot;库克列夫创造了一种独特的效果，使河流与天空成为艺术构思的一部分，恰如伊利亚&middot;列宾的原画一般。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_1.jpg" alt="伏尔加河背景下的《伏尔加河上的纤夫》雕塑" loading="lazy">
    </div>
</div>
<!-- Блок 2: Связь с Репиным и самарской землей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">列宾与萨马拉土地的联结</h2>
        <p class="modalBlock__description">
            这座纪念碑是为纪念伊利亚&middot;列宾诞辰170周年而设立，这位大师的著名画作与萨马拉的土地有着直接的联系。正是在萨马拉河湾的希里亚耶沃村，年轻的艺术家于1870年沿伏尔加河旅行时，为这幅画作绘制了草稿，并研究了纤夫们的生活。
        </p>
        <p class="modalBlock__description">
            这座三米高的群像，精确地再现了那幅著名画作的构图。列宾的创作灵感，源于他在伏尔加河岸目睹的强烈反差：悠闲漫步的市民与拖着货船、疲惫不堪的纤夫。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_2.jpg" alt="雕塑与列宾画作的对比，远眺希里亚耶沃村" loading="lazy">
    </div>
</div>
<!-- Блок 3: Уникальная художественная композиция -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">独特的艺术作品</h2>
        <p class="modalBlock__description">
            这件雕塑是一件别出心裁的艺术作品：一个青铜的画框式画架，内置纤夫群像，而伏尔加河的辽阔景致则天然地成为其背景。从特定角度观看，那些人仿佛真的正牵引着货船在河上航行。
        </p>
        <p class="modalBlock__description">
            这座纪念碑不仅使一件艺术名作得以永恒，也提醒着人们那段重要的历史时期&mdash;&mdash;彼时伏尔加河是国家的交通命脉，而纤夫的劳作则是其象征之一。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_3.jpg" alt="雕塑细节与画框式画架" loading="lazy">
    </div>
</div>
<!-- Блок 4: Интерактивные выставки и фестивали -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">互动展览与节日活动</h2>
        <p class="modalBlock__description">
            这座纪念碑已不仅仅是一座静态的雕塑，更成为吸引文化活动的焦点。萨马拉艺术博物馆及其他机构定期在此举办主题活动。
        </p>
        <p class="modalBlock__description">
            例如，在&quot;伏尔加节&quot;期间，沙滩上会设立互动区，举办关于列宾艺术的讲座、&quot;寻找纤夫&quot;写生创作工作坊，以及以这幅名画为灵感的摄影打卡点。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/burlaki_na_volge/burlaki_na_volge_4.jpg" alt="“Volgafest”节与纪念碑旁交互活动现场" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться до памятника -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何前往纪念碑</h2>
        <p class="modalBlock__description">
            地址：萨马拉，老滨河长廊（列宁格勒坡道）， &quot;风帆&quot;喷泉对面。
        </p>
        <p class="modalBlock__description">
            位置：纪念碑坐落在伏尔加河风景如画的滨河长廊上，从市中心步行可达。
        </p>
        <p class="modalBlock__description">
            公共交通：多路公交车和无轨电车可至&quot;滨河长廊&quot;或&quot;列宁格勒街&quot;站（河运站区域）。
        </p>
        <p class="modalBlock__description">
            步行：从古比雪夫广场或古比雪夫步行街（&quot;萨马拉阿尔巴特街&quot;）步行至滨河长廊，约需15-20分钟。
        </p>
        <p class="modalBlock__description">
            参观纪念碑免费，全天开放。最佳的拍摄时间是傍晚日落时分，彼时伏尔加河天空的色彩将成为最美的背景。
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
            title: '“萨马拉航天”博物馆',
            image: '../../img/samara/cards_tochki/samara_kosmicheskaya_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">&quot;萨马拉航天&quot;博物馆</h1>
</div>
<!-- Блок 1: Музей у подножия настоящей ракеты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">真火箭脚下的博物馆</h2>
        <p class="modalBlock__description">
            这座年轻的博物馆于2007年开放，却已迅速成为该地区最引人入胜、最有趣的所在。其互动体验形式必将深受孩子们以及所有渴望化身遥远星系旅行者的人们的喜爱。
        </p>
        <p class="modalBlock__description">
            博物馆的核心展品是一枚真品&quot;联盟号&quot;运载火箭，它被垂直安装于建筑物的正面。这是欧洲唯一一枚以如此方式展出的完整组装火箭。该火箭于1984年制造于萨马拉的&quot;进步&quot;工厂。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_1.jpg" alt="博物馆建筑与外立面的“联盟”火箭" loading="lazy">
    </div>
</div>
<!-- Блок 2: Космическое наследие Самары -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">萨马拉的航天遗产</h2>
        <p class="modalBlock__description">
            博物馆的历史与这座城市的航天遗产密不可分。苏联时期，萨马拉（时称古比雪夫）已成为航天工业的关键中心之一。
        </p>
        <p class="modalBlock__description">
            1961年4月12日将尤里&middot;加加林的飞船送入轨道的&quot;东方号&quot;运载火箭，正是在本地的&quot;进步&quot;工厂组装而成。博物馆珍藏着这段历史以及苏联/俄罗斯航天事业的诸多其他成就。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_2.jpg" alt="“进步”工厂与加加林的历史照片" loading="lazy">
    </div>
</div>
<!-- Блок 3: Интерактивная экспозиция «Карманный космос» -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">互动展区&quot;口袋宇宙&quot;</h2>
        <p class="modalBlock__description">
            博物馆将真品展品与现代多媒体技术有机融合。特别引人入胜的是名为&quot;口袋宇宙&quot;的互动展区，参观者可在充满未来感的内部空间中与展品互动。
        </p>
        <p class="modalBlock__description">
            在这里，你可以按下按钮，探究模型，感觉自己仿佛成了太空飞行的一部分。这种形式营造出完全沉浸于主题的效果，尤其受到孩子们的欢迎。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_3.jpg" alt="互动区域与博物馆展品" loading="lazy">
    </div>
</div>
<!-- Блок 4: От двигателей для Луны до быта космонавтов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">从登月发动机到航天员生活</h2>
        <p class="modalBlock__description">
            博物馆的展览分为数个主题区域。展出了用于地球摄影的&quot;资源号&quot;和&quot;琥珀-2K&quot;号航天器，以及为苏联登月计划研制的传奇NK-33发动机。
        </p>
        <p class="modalBlock__description">
            展览的单独一部分聚焦于航天员在轨道上的生活&mdash;&mdash;此处可以看到航天服、太空食品样品，并了解太空探索者的日常生活。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samara_cosmicheskaya/samara_kosmicheskaya_4.jpg" alt="NK-33发动机、航天服与太空食品" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться и важная информация -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何前往及重要信息</h2>
        <p class="modalBlock__description">
            注意：博物馆列宁大街主楼因维修暂时关闭。
        </p>
        <p class="modalBlock__description">
            临时展览设于以下地址：红军街131号（Good&rsquo;Ok购物娱乐中心2楼）。主要藏品在此展出。
        </p>
        <p class="modalBlock__description">
            &quot;联盟号&quot;运载火箭仍位于其历史地址：列宁大街21号，外部可供参观。
        </p>
        <p class="modalBlock__description">
            如何抵达：从萨马拉市中心乘坐多种公共交通工具，均可方便抵达Good&rsquo;Ok购物娱乐中心（&quot;红军街&quot;站）以及火箭所在建筑（&quot;列宁大街&quot;站）。建议访问博物馆官方网站，查询最新地址和开放时间。
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
            title: '沙皇山岗',
            image: '../../img/samara/cards_tochki/tsarev_kurgan_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">沙皇山岗</h1>
</div>
<!-- Блок 1: Осколок Жигулей у слияния рек -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">河流交汇处的日古利遗珠</h2>
        <p class="modalBlock__description">
            这座孤独的残山矗立于伏尔加河与索克河交汇之处。山脚下是沙皇浴场。
        </p>
        <p class="modalBlock__description">
            尽管如今山岗的高度仅50余米，但在20世纪中叶以前，它几乎是现在的两倍高。密集的采石作业极大地改变了它的面貌。这不是一座人造的山岗，而是古老日古利山的一块碎片，在千万年水流与风蚀的作用下幸存至今。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_1.jpg" alt="伏尔加河与索克河交汇处的沙皇山岗" loading="lazy">
    </div>
</div>
<!-- Блок 2: Каменная книга древнего моря -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">古海洋的石书</h2>
        <p class="modalBlock__description">
            山岗的斜坡，如同一部石书的书页，封存着海胆、海百合和软体动物的化石&mdash;&mdash;它们是这片土地曾被史前海洋淹没的见证。
        </p>
        <p class="modalBlock__description">
            沙皇山岗的地质露头，是俄罗斯欧洲部分最古老的地层之一。尽管留有工业开采的痕迹，它仍是一处重要的自然与历史遗迹。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_2.jpg" alt="山岗上的化石与地质露头" loading="lazy">
    </div>
</div>
<!-- Блок 3: Место, дышащее легендами -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">传说萦绕之地</h2>
        <p class="modalBlock__description">
            此地几乎被传说所笼罩。据传，帖木儿在击败脱脱迷失后曾在此设宴庆功；斯捷潘&middot;拉辛在此迎娶了波斯公主；彼得一世则亲手在山顶竖立了一个木制十字架。
        </p>
        <p class="modalBlock__description">
            在不同时期，伊凡雷帝、亚历山大一世以及年轻的弗拉基米尔&middot;列宁都曾到访此地。也正是在这里，伊利亚&middot;列宾为其名画《伏尔加河上的纤夫》绘制了草图。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/tcarev_kurgan/tsarev_kurgan_3.jpg" alt="与山岗相关的传说插画" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться до Царева кургана -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达沙皇山岗</h2>
        <p class="modalBlock__description">
            沙皇山岗位于萨马拉州伏尔加区，靠近伏尔加斯基镇（原察廖夫希纳），距日古廖夫斯克市不远。
        </p>
        <p class="modalBlock__description">
            自驾：从萨马拉沿M-5公路（莫斯科公路）向伏尔加斯基/日古廖夫斯克方向行驶。在伏尔加斯基镇附近有通往沙皇山岗的指示牌。距萨马拉约50公里。
        </p>
        <p class="modalBlock__description">
            公共交通：从萨马拉汽车站乘坐前往日古廖夫斯克的巴士，请在沙皇山岗附近（公路旁）下车。
        </p>
        <p class="modalBlock__description">
            参观山岗免费。其旁坐落着神圣圣母喀山男修道院，亦可一并参观。
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
            title: '“环游日古利”',
            image: '../../img/samara/cards_tochki/zhigulevskaya_krugosvetka_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">&laquo;环游日古利&raquo;</h1>
</div>
<!-- Блок 1: Водный маршрут вокруг Самарской Луки -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">环绕萨马拉河湾的水上路线</h2>
        <p class="modalBlock__description">
            这是一条供皮划艇、木船和游艇环绕萨马拉河湾半岛的环形路线。其独特之处在于，由于伏尔加河巨大的河曲，起点与终点近在咫尺，仅被一道狭窄的地峡分隔。
        </p>
        <p class="modalBlock__description">
            自20世纪90年代中期起，人们开始以竞速方式挑战&quot;日古利绕行&quot;：参赛队伍乘坐皮划艇，以不间断方式在15至20小时内完成全程。水上部分总长度约为140公里。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_1.jpg" alt="环游日古利路线示意图" loading="lazy">
    </div>
</div>
<!-- Блок 2: История от Ленина до рекордов -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">从列宁到纪录创造者的历史</h2>
        <p class="modalBlock__description">
            这条航线的历史已逾百年。据传，19世纪90年代，年轻的弗拉基米尔&middot;列宁和作家马克西姆&middot;高尔基曾在此旅行（后者有一段路程是抓着轮船后的拖船完成的）。
        </p>
        <p class="modalBlock__description">
            1912年，萨马拉运动员弗拉基米尔&middot;波波夫创下首个纪录，他划桨船用18小时完成了全程。苏联时期，这条路线在水上旅行爱好者中尤受欢迎。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_2.jpg" alt="早期旅行者的历史照片" loading="lazy">
    </div>
</div>
<!-- Блок 3: Маршрут: Волга — Переволоки — Уса -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">路线：伏尔加河 &mdash; 佩列沃洛基村 &mdash; 乌萨河</h2>
        <p class="modalBlock__description">
            路线传统上始于陶里亚蒂附近，靠近费奥多罗夫草地，然后顺伏尔加河而下，沿途欣赏风景如画的日古利山。
        </p>
        <p class="modalBlock__description">
            抵达佩列沃洛基村后，参与者需将舟艇转运至乌萨河（历史上是&quot;拖运&quot;，如今使用汽车辅助）。接下来的行程在乌萨河平静的水面上继续，两岸坡势平缓，混交林密布。最后一段是横渡古比雪夫水库，返回陶里亚蒂。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevksya_krugosvetka/zhigulevskaya_krugosvetka_3.jpg" alt="伏尔加河与乌萨河湾的皮划艇旅行者" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как пройти кругосветку -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何完成环游</h2>
        <p class="modalBlock__description">
            起/终点：传统上在陶里亚蒂附近（费奥多罗夫草地）或日古廖夫斯克附近（勇士丘）。终点在勇士丘一带。
        </p>
        <p class="modalBlock__description">
            陆上路段：关键节点是佩列沃洛基村，需在伏尔加河与乌萨河之间转运约2公里。如今，装备转运通常由汽车支持。
        </p>
        <p class="modalBlock__description">
            适合人群：此路线要求一定的体能准备和装备。既可以参加当地俱乐部组织的旅行团，也适合经验丰富的水上旅行者独自前往。推荐季节为5月至9月。
        </p>
        <p class="modalBlock__description">
            这将是一次独特的体验，让你在一次旅程中，既能感受伏尔加河的磅礴，又能体会乌萨河的静谧，还能饱览如画的日古利山。
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
            title: '日古利之门',
            image: '../../img/samara/cards_nature/zhigulevskie_vorota_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">日古利之门</h1>
</div>
<!-- Блок 1: Парадный вход главной улицы России -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">&quot;俄罗斯主干道&quot;入口</h2>
        <p class="modalBlock__description">
            这是伏尔加河中游最狭窄的地段，位于硫磺山（日古利山）与蒂普佳夫山（索科尔山）之间。这个宽仅900米的风景如画的通道，被浪漫地称为&quot;俄罗斯主干道入口&quot;。
        </p>
        <p class="modalBlock__description">
            数百万年前，伏尔加河以其强劲的水流切穿了古老的山体，形成了日古利山与索科尔山两大山系。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_1.jpg" alt="从水面或高处眺望日古利门" loading="lazy">
    </div>
</div>
<!-- Блок 2: Место, нанесенное на карту в XII веке -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">12世纪即被绘入地图的地方</h2>
        <p class="modalBlock__description">
            历史记载，这一独特之地的存在早在12世纪便已为人所知。1154年，供职于西西里国王宫廷的阿拉伯地理学家阿尔-伊德里斯，首次将&quot;日古利门&quot;绘入当时已知世界的地图。
        </p>
        <p class="modalBlock__description">
            数个世纪以来，商船队、哥萨克的木船以及伏尔加河的纤夫们，都曾穿行于这道&quot;门&quot;。这是一个历史与地质在俄罗斯最令人叹为观止的景观中交汇的地方。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_2.jpg" alt="阿尔-伊德里斯古地图与纤夫图" loading="lazy">
    </div>
</div>
<!-- Блок 3: Смотровая площадка на горе Верблюд -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">骆驼山观景台</h2>
        <p class="modalBlock__description">
            领略这一自然&quot;剧场&quot;的最佳地点，是位于萨马拉一侧的骆驼山上的观景台。
        </p>
        <p class="modalBlock__description">
            从这里可以俯瞰全景，真切感受&quot;日古利门&quot;的宏大与力量。对岸，蒂普佳夫山巍然屹立，伏尔加河以磅礴之势奔流于两山之间。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskie_vorota/zhigulevskie_vorota_3.jpg" alt="从骆驼山观景台眺望日古利门" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться до Жигулевских ворот -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达日古利门</h2>
        <p class="modalBlock__description">
            可以从不同方向欣赏日古利门。
        </p>
        <p class="modalBlock__description">
            从观景台（推荐）：从萨马拉沿M-5公路向日古廖夫斯克方向自驾。在抵达市区前，根据指示牌拐向骆驼山（位于波德戈雷村附近）。随后徒步攀登至设施完善的观景台。
        </p>
        <p class="modalBlock__description">
            乘船：夏季，萨马拉或日古廖夫斯克会组织乘船游览，直接穿过日古利门。这让你能够以最震撼的视角欣赏这一奇观。
        </p>
        <p class="modalBlock__description">
            从蒂普佳夫山一侧：自驾至佐利诺耶村，随后徒步登上蒂普佳夫山顶，从那里同样可以欣赏到壮丽的景色。
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
            title: '希里亚耶沃矿洞',
            image: '../../img/samara/cards_nature/shiryaevskie_shtolni_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">希里亚耶沃矿洞</h1>
</div>
<!-- Блок 1: Подземный мир Поповой горы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">波波瓦山的地下世界</h2>
        <p class="modalBlock__description">
            这是一个由天然洞穴和人工开凿的坑道组成的庞大系统，于20世纪上半叶在波波瓦山山体内开掘而成。在萨马拉河湾，像这样的矿洞除希里亚耶沃外，还遍布各处。
        </p>
        <p class="modalBlock__description">
            希里亚耶沃矿洞最初是作为石灰岩采石场，所产石灰岩的碳酸钙含量高达100%，可用于生产最高品质的生石灰。最大规模的开采集中在20世纪20年代至50年代。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_1.jpg" alt="波波瓦山山坡上的希里亚耶沃矿洞入口" loading="lazy">
    </div>
</div>
<!-- Блок 2: Добыча камня и сорта породы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">石材开采与岩石种类</h2>
        <p class="modalBlock__description">
            波波瓦山（得名于当地一位神父的领地）可谓被坑道挖得千疮百孔，这里曾开采出约二十种岩石，它们都有着形象的名字。
        </p>
        <p class="modalBlock__description">
            如&quot;熊窝石&quot;、&quot;多孔石&quot;、&quot;白燧石&quot;等。这些石头被用于建筑和烧制石灰。如今，被废弃的地下坑道已成为重要的自然与历史遗迹。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_2.jpg" alt="矿洞内部景象与开采出的岩石样本" loading="lazy">
    </div>
</div>
<!-- Блок 3: Убежище летучих мышей и история Ширяево -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">蝙蝠的避难所与希里亚耶沃村的历史</h2>
        <p class="modalBlock__description">
            被废弃的矿洞成为蝙蝠种群的避难所，其中不乏被列入红皮书的珍稀物种。炎炎夏日，洞穴内却凉爽宜人。
        </p>
        <p class="modalBlock__description">
            山脚下的希里亚耶沃村本身便承载着丰厚的历史：19世纪，纤夫们曾在此歇脚；1870年，伊利亚&middot;列宾曾在此居住，为其名画《伏尔加河上的纤夫》绘制草图。各个矿洞入口周围设有观景台和休息区。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/schiryaevskie_shtolni/shiryaevskie_shtolni_3.jpg" alt="矿洞内的蝙蝠与远眺希里亚耶沃村" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться до Ширяевских штолен -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达希里亚耶沃矿洞</h2>
        <p class="modalBlock__description">
            矿洞位于&quot;萨马拉河湾&quot;国家公园内的希里亚耶沃村。
        </p>
        <p class="modalBlock__description">
            自驾：从萨马拉或陶里亚蒂沿通往萨马拉河湾的公路，经日古廖夫斯克或水电站大坝，至希里亚耶沃村。进村后需驶向村庄远端，即波波瓦山山脚，通往矿洞的小径由此开始。
        </p>
        <p class="modalBlock__description">
            水路交通（夏季）：从萨马拉乘坐小型客船或快艇，至希里亚耶沃码头。
        </p>
        <p class="modalBlock__description">
            重要提示：由于可能存在塌方风险，进入最深的矿洞内部恐有危险。建议仅参观洞口部分及周边区域。进行全面的洞穴探险需配备专门装备、具备相关经验并获得国家公园管理部门的许可。周边已设有安全的观景台。
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
            title: '斯特列利纳亚山',
            image: '../../img/samara/cards_nature/gora_strelnaya_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">斯特列利纳亚山</h1>
</div>
<!-- Блок 1: Легендарная вершина -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">日古利的传奇峰峦</h2>
        <p class="modalBlock__description">
            这是日古利山脉最高且最壮丽的峰峦之一（海拔351米）。其标志是山顶那块巨大的岩石峭壁。
        </p>
        <p class="modalBlock__description">
            山名与伏尔加河上的自由民历史有关。当年，绿林好汉曾在此设立瞭望哨，提前发现商船并发出信号。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_1.jpg" alt="斯特列利纳亚山顶的巨岩" loading="lazy">
    </div>
</div>
<!-- Блок 2: Уникальная природа -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">独特的自然群落</h2>
        <p class="modalBlock__description">
            山坡由距今约2.5亿年的古老石灰岩构成。地表保留着岩石草原区域，生长着孑遗植物。
        </p>
        <p class="modalBlock__description">
            此处可见七种特有种植物，它们在世界其他任何地方都无法找到。同样独特的是孑遗的松林，草原与针叶林物种在此相邻而生。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_2.jpg" alt="山坡上的岩石草原与孑遗植物" loading="lazy">
    </div>
</div>
<!-- Блок 3: Путь к вершине -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">通往山顶之路与&quot;魔鬼桥&quot;</h2>
        <p class="modalBlock__description">
            游客途中将经过&quot;魔鬼桥&quot;&mdash;&mdash;一道狭窄的岩脊。传说，绿林好汉们曾蒙着眼睛走过此桥，以显示他们的勇猛。
        </p>
        <p class="modalBlock__description">
            如今，山顶的岩脊上开辟了旅游路线。从山顶放眼望去，伏尔加河、河中岛屿、日古利水电站大坝乃至陶里亚蒂的轮廓都尽收眼底。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/gora_strelnaya/gora_strelnaya_3.jpg" alt="“魔鬼桥”岩脊上的游客" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达斯特列利纳亚山</h2>
        <p class="modalBlock__description">
            徒步路线始于佐利诺耶村。
        </p>
        <p class="modalBlock__description">
            汽车/巴士：从日古廖夫斯克前往佐利诺耶村。然后沿着标记清晰的小径登顶，此路线是日古利自然保护区游览路线的一部分。
        </p>
        <p class="modalBlock__description">
            重要提示：斯特列利纳亚山位于日古利自然保护区境内。游览只能沿着获准通行的生态小径，以有组织的团队形式或持有特别许可方可进入。
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
            title: '布祖卢克松林',
            image: '../../img/samara/cards_nature/buzulukskiy_bor_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">布祖卢克松林</h1>
</div>
<!-- Блок 1: Уникальный массив -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">独特的孑遗森林</h2>
        <p class="modalBlock__description">
            这是一片广袤的孑遗松林，绵延于欧亚大陆无垠的草原之中。它是位于萨马拉州与奥伦堡州交界处的国家公园。
        </p>
        <p class="modalBlock__description">
            此地融合了北方与南方的自然风貌：两米高的蕨类植物与羽茅草为邻，苔原带的地衣与南方的郁金香相伴，沼泽中的茅膏菜与森林中的木贼共生。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_1.jpg" alt="草原环抱中的布祖卢克松林全景" loading="lazy">
    </div>
</div>
<!-- Блок 2: Древние сосны -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">古松与生存的奇迹</h2>
        <p class="modalBlock__description">
            松林守护着树龄长达300年的古老松树群落，其间可见树干周长超过四米的巨木。
        </p>
        <p class="modalBlock__description">
            一个令人惊叹的奇迹是，这片松林竟能在干旱的草原环境中生存。深厚的沙质土壤如同海绵，积蓄融雪之水，即使在干旱期也能逐渐滋养着森林。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_2.jpg" alt="布祖卢克松林中的古老巨松" loading="lazy">
    </div>
</div>
<!-- Блок 3: История лесоводства -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">历史悠久的林场</h2>
        <p class="modalBlock__description">
            尤为珍贵的是19世纪末20世纪初由著名林学家瓦西里耶夫和托利斯基栽植的人工林。
        </p>
        <p class="modalBlock__description">
            这些林分成为几代俄罗斯林学家效仿的典范。如今，松林内铺设了生态小径，可一睹这些林业文化遗产。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_3.jpg" alt="林学家们栽植的养护良好的人工林" loading="lazy">
    </div>
</div>
<!-- Блок 4: Экологическая роль -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">生态作用与栖息动物</h2>
        <p class="modalBlock__description">
            松林发挥着重要的生态作用，形成独特的小气候，在超过10万公顷的范围内抵御干热风。
        </p>
        <p class="modalBlock__description">
            其领地成为包括白尾海雕和俄罗斯麝鼠等珍稀动植物的避难所。空气中弥漫着纯净的挥发性植物杀菌物质，使松林成为理想的休憩之地。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/buzulukskii_bor/buzulukskiy_bor_4.jpg" alt="松林上空的白尾海雕" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达布祖卢克松林</h2>
        <p class="modalBlock__description">
            自驾：从萨马拉沿R224公路至布祖卢克市，行程172公里。随后再行驶22公里至科尔图巴诺夫斯基镇，此处是国家公园的游客中心所在地。
        </p>
        <p class="modalBlock__description">
            公共交通：乘坐巴士或火车至布祖卢克市，然后换乘当地巴士前往科尔图巴诺夫斯基镇。
        </p>
        <p class="modalBlock__description">
            温馨提示：国家公园内生态旅游设施完善：设有民宿客栈、设施齐备的步道并提供导游服务。建议提前规划路线并确认参观须知。
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
            title: '日古利自然保护区',
            image: '../../img/samara/cards_nature/zhigulevskiy_zapovednik_0.jpg',
            modalContent:


`<div class="modalHeader">
    <h1 class="modalHeader__title">日古利自然保护区</h1>
</div>
<!-- Блок 1: Сердце Самарской Луки -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">萨马拉河湾未经侵扰的腹地</h2>
        <p class="modalBlock__description">
            这是一片由古老山峦、森林和岩石峭壁组成的土地，从这里可以眺望伏尔加河的无垠水域。斯普雷金自然保护区占据了萨马拉河湾的中部地区。
        </p>
        <p class="modalBlock__description">
            其占地2.3万公顷的区域包括大陆部分和伏尔加河水域内的岛屿。2007年，它被联合国教科文组织授予生物圈保护区地位。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_1.jpg" alt="从保护区眺望日古利山与伏尔加河全景" loading="lazy">
    </div>
</div>
<!-- Блок 2: Уникальное биоразнообразие -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">独特的自然带组合</h2>
        <p class="modalBlock__description">
            其主要特色在于草原、森林乃至苔原带的动植物群落的独特组合。这里保存着经历了数个地质年代而幸存下来的珍稀特有种和孑遗物种。
        </p>
        <p class="modalBlock__description">
            自然保护区的植物区系约有1000种植物。哺乳动物中，啮齿类与翼手类（蝙蝠）尤为丰富多样。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_2.jpg" alt="岩石山坡上的珍稀特有种植物" loading="lazy">
    </div>
</div>
<!-- Блок 3: Музей и экотропы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">自然博物馆与生态路线</h2>
        <p class="modalBlock__description">
            斯普雷金自然博物馆是重要的科普中心。其展览包括无脊椎动物种类、鸟巢收藏、植物标本以及关于日古利地质历史的资料。
        </p>
        <p class="modalBlock__description">
            保护区内开辟了数条徒步生态路线，例如通往斯特列利纳亚山顶以及穿越山隘至&quot;石碗&quot;自然边界的路线。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zgigulevskii_zapovednik/zhigulevskiy_zapovednik_3.jpg" alt="日古利自然保护区自然博物馆内的展品" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何参观日古利自然保护区</h2>
        <p class="modalBlock__description">
            重要提示：为保护自然，保护区境内不对公众自由开放。可通过博物馆及专门组织的游览活动了解其丰富资源。
        </p>
        <p class="modalBlock__description">
            游客中心和自然博物馆地址：日古廖夫斯克市，巴希洛瓦波利亚纳村，日古利街1号。
        </p>
        <p class="modalBlock__description">
            游览活动：需通过保护区游客中心预约游览路线（例如前往斯特列利纳亚山）。须提前协调参观事宜。
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
            title: '列宾故居博物馆',
            image: '../../img/samara/cards_culture/dom_muzey_repina_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">希里亚耶沃的列宾博物馆</h1>
</div>
<!-- Блок 1: Историко-культурный комплекс -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">19世纪的农家庄园</h2>
        <p class="modalBlock__description">
            这是一处历史文化综合体，再现了19世纪伏尔加河流域农家庄园的氛围。年轻的艺术家伊利亚&middot;列宾正是在这里创作了他的名画。
        </p>
        <p class="modalBlock__description">
            1870年夏，列宾和他的艺术家朋友费奥多尔&middot;瓦西里耶夫、叶夫根尼&middot;马卡罗夫住在农民伊万&middot;阿列克谢耶夫的这所房子里。三个月间，他为《伏尔加河上的纤夫》创作了大量草图。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_1.jpg" alt="希里亚耶沃村的列宾故居博物馆" loading="lazy">
    </div>
</div>
<!-- Блок 2: Создание шедевра -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">《伏尔加河上的纤夫》的诞生地</h2>
        <p class="modalBlock__description">
            希里亚耶沃村成为列宾的创作实验室。艺术家观察纤夫，为人物形象和风景绘制草图，这些素材构成了那幅伟大画作的基础。
        </p>
        <p class="modalBlock__description">
            从房子的窗户望去，正是当年曾激励过艺术家的伏尔加河与山峦的景致。此地的氛围是博物馆展览不可或缺的一部分。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_2.jpg" alt="从博物馆窗户眺望的伏尔加河景色，与列宾草图相似" loading="lazy">
    </div>
</div>
<!-- Блок 3: Усадьба Ширяевца -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">诗人亚历山大&middot;希里亚耶韦茨的庄园</h2>
        <p class="modalBlock__description">
            博物馆建筑群不仅包括列宾故居，还包括重建的出生于本地的诗人亚历山大&middot;希里亚耶韦茨（阿布拉莫夫）的庄园。
        </p>
        <p class="modalBlock__description">
            展览中陈列着19至20世纪的农具、民间艺术品等物品，讲述着这两位杰出居民的生活与创作。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_3.jpg" alt="诗人亚历山大·希里亚耶韦茨庄园内部" loading="lazy">
    </div>
</div>
<!-- Блок 4: Культурный центр -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">萨马拉河湾的文化中心</h2>
        <p class="modalBlock__description">
            如今，博物馆已成为重要的文化中心。这里举办民间节日、文学晚会以及&quot;希里亚耶沃当代艺术双年展&quot;框架下的展览。
        </p>
        <p class="modalBlock__description">
            参观此地，可以感受到曾吸引并将继续吸引艺术家、作家和诗人来此的创作氛围。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/dom_musei_repina/dom_muzey_repina_4.jpg" alt="博物馆园区内举办的节日或展览活动" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达希里亚耶沃的列宾博物馆</h2>
        <p class="modalBlock__description">
            地址：萨马拉州，日古廖夫斯克市辖区，希里亚耶沃村，苏维埃街14号。
        </p>
        <p class="modalBlock__description">
            自驾：从萨马拉或陶里亚蒂沿公路经日古廖夫斯克或日古利水电站大坝至萨马拉河湾，到达希里亚耶沃村。
        </p>
        <p class="modalBlock__description">
            公交车：从日古廖夫斯克有定时公交车开往希里亚耶沃村。
        </p>
        <p class="modalBlock__description">
            水路交通（通航期）：从萨马拉乘坐小型客船或快艇至希里亚耶沃码头&mdash;&mdash;这是风景最为优美的路线。
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
            title: '直升机坪',
            image: '../../img/samara/cards_culture/vertoletka_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">直升机坪</h1>
</div>
<!-- Блок 1: Лучшие виды на Самарскую Луку -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">俯瞰萨马拉河湾的最佳视野</h2>
        <p class="modalBlock__description">
            这是一处景观公园建筑群，拥有城市最佳的观景视野。从高于伏尔加河水面120米的观景台眺望，视野可达数十公里。
        </p>
        <p class="modalBlock__description">
            可以望见日古利门&mdash;&mdash;伏尔加河最狭窄之处，&quot;萨马拉河湾&quot;国家公园，索科尔山，以及远方陶里亚蒂和日古利水电站的轮廓。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/vertoletka/vertoletka_1.jpg" alt="从直升机坪俯瞰伏尔加河与萨马拉河湾的全景" loading="lazy">
    </div>
</div>
<!-- Блок 2: Авиационное прошлое -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">航空与航天的往昔</h2>
        <p class="modalBlock__description">
            此地的历史与航空业息息相关。这里曾是试验工厂的直升机起降坪，该工厂负责研制涡轮喷气发动机。总设计师尼古拉&middot;库兹涅佐夫的直升机曾从这里起飞。
        </p>
        <p class="modalBlock__description">
            在登月计划终止后，这里秘密保存了数十台NK-33发动机，这些发动机在40年后于美国的航天计划中找到了用武之地。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/vertoletka/vertoletka_2.jpg" alt="直升机在起降坪的历史照片或现代艺术再现" loading="lazy">
    </div>
</div>
<!-- Блок 3: Современное пространство -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">最佳公共空间项目</h2>
        <p class="modalBlock__description">
            经过2021年的大规模改造，&quot;直升机坪&quot;被评为俄罗斯最佳公共空间项目。
        </p>
        <p class="modalBlock__description">
            这里为包括行动不便者在内的所有人士创造了无障碍环境。精心设计的道路、照明、休闲区和儿童游乐场等基础设施，使其在一年四季都备受欢迎。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/vertoletka/vertoletka_3.jpg" alt="经过改造的直升机坪园区，设有步道和休闲区" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达&quot;直升机坪&quot;</h2>
        <p class="modalBlock__description">
            地址：维特维斯塔亚街2B号（乌普拉夫连切斯基镇）。
        </p>
        <p class="modalBlock__description">
            自驾：沿伏尔加公路行驶，从市中心出发约需30分钟。
        </p>
        <p class="modalBlock__description">
            公交：乘坐公交车至乌普拉夫连切斯基镇，然后根据指示牌步行至观景台。
        </p>
        <p class="modalBlock__description">
            建议：最佳的参观时间是日落时分或晴朗的日子。观景台附近停车位有限，周末尤为紧张。
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
            title: '日古利水电站',
            image: '../../img/samara/cards_culture/zhigulevskaya_ges_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">日古利水电站</h1>
</div>
<!-- Блок 1: Ключевая ГЭС России -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">俄罗斯最大的水电站之一</h2>
        <p class="modalBlock__description">
            这是国家电力系统中的关键水电站。从萨马拉河湾及日古廖夫斯克附近的观景台可以欣赏到它的壮丽景色。
        </p>
        <p class="modalBlock__description">
            它于1950年至1957年间建在伏尔加河上，位于日古廖夫斯克与陶里亚蒂之间，是伏尔加河水电站梯级的第六级。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_1.jpg" alt="从水面或岸边眺望雄伟的日古利水电站大坝" loading="lazy">
    </div>
</div>
<!-- Блок 2: Масштабы и уникальность -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">规模与多功能性</h2>
        <p class="modalBlock__description">
            其独特之处在于宏伟的规模和多功能性。混凝土大坝长度超过2.8公里，由其拦截形成的古比雪夫水库是欧洲最大的水库。
        </p>
        <p class="modalBlock__description">
            除了发电（年发电量超过100亿千瓦时）之外，水电站还通过船闸保障通航、提供防洪保护以及确保区域供水。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_2.jpg" alt="水电站的船闸及正在通过的船只" loading="lazy">
    </div>
</div>
<!-- Блок 3: Инфраструктура и музей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">至关重要的基础设施</h2>
        <p class="modalBlock__description">
            联邦公路M5&quot;乌拉尔&quot;线经大坝而过，连接着莫斯科与萨马拉、车里雅宾斯克。
        </p>
        <p class="modalBlock__description">
            自2005年起，水电站区域内设有一个博物馆，介绍其建设历史、工作原理以及对国家的重要意义。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/zhigulevskaya_ges/zhigulevskaya_ges_3.jpg" alt="从日古利水电站坝顶穿过的M5公路" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达与参观</h2>
        <p class="modalBlock__description">
            地址：日古廖夫斯克市，莫斯科公路2号。
        </p>
        <p class="modalBlock__description">
            汽车/巴士：从陶里亚蒂沿莫斯科公路直达大坝。从萨马拉出发则沿M5公路行驶。
        </p>
        <p class="modalBlock__description">
            重要提示：水电站本身属于保密设施。通行（穿越大坝）需遵守相关规定，可能面临检查。最佳的观赏点位于萨马拉或陶里亚蒂一侧河岸的观景台，或者从水面上观看。
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
            title: '“战船”纪念碑',
            image: '../../img/samara/cards_culture/stela_ladia_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">&quot;战船&quot;纪念碑</h1>
</div>
<!-- Блок 1: Символ Самары -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">伏尔加河畔城市的象征</h2>
        <p class="modalBlock__description">
            这是一座位于索菲亚滨河长廊上的20米高雕塑和观景台。它是萨马拉最知名的象征之一。
        </p>
        <p class="modalBlock__description">
            这座由建筑师阿纳托利&middot;扬金和伊戈尔&middot;加拉霍夫设计的混凝土结构，被艺术化地塑造成一艘古代俄罗斯战船，正朝着日古利山的方向航行。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_1.jpg" alt="从滨河长廊或伏尔加河上眺望“战船”纪念碑" loading="lazy">
    </div>
</div>
<!-- Блок 2: Панорама и детали -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">全景视野与市徽</h2>
        <p class="modalBlock__description">
            这座纪念碑矗立于滨河长廊的上层台地，从此处可以饱览伏尔加河及对岸地区的优美风光。
        </p>
        <p class="modalBlock__description">
            在纪念碑白色的&quot;船帆&quot;中央，镶嵌着萨马拉的市徽，其上绘有一只山羊的形象。整座碑体与城市沙滩的景观浑然一体。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_2.jpg" alt="市徽在“船帆”上的特写" loading="lazy">
    </div>
</div>
<!-- Блок 3: Популярное место -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">主要名胜与休憩之地</h2>
        <p class="modalBlock__description">
            根据民意调查，&quot;战船&quot;纪念碑位列该市三大主要名胜之一。其形象常被用于旅游纪念品。
        </p>
        <p class="modalBlock__description">
            纪念碑两侧环绕着设有台地、咖啡馆和休憩区的城市沙滩。这里是一处广受欢迎的举办庆典和拍照留影的场所。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/stela_ladia/stela_ladia_3.jpg" alt="人们在“战船”纪念碑脚下的沙滩上休憩" loading="lazy">
    </div>
</div>
<!-- Блок 4: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达&quot;战船&quot;纪念碑</h2>
        <p class="modalBlock__description">
            位置：索菲亚滨河长廊（萨马拉滨河长廊第四期）。
        </p>
        <p class="modalBlock__description">
            公共交通：许多前往市中心的公交和无轨电车线路均在滨河长廊附近设有站点（&quot;光荣广场&quot;站、&quot;森林街&quot;站）。
        </p>
        <p class="modalBlock__description">
            步行：从市中心（革命广场、古比雪夫街）沿森林街或维洛诺夫坡道下行至伏尔加河畔。
        </p>
        <p class="modalBlock__description">
            建议：理想的参观时间是夜晚，届时纪念碑及滨河长廊喷泉的灯光将被点亮。
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
            title: '萨马拉滨河长廊',
            image: '../../img/samara/cards_culture/samarskaya_naberezhnaya_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">萨马拉滨河长廊</h1>
</div>
<!-- Блок 1: Самая длинная набережная Волги -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">伏尔加河上最长的滨河长廊</h2>
        <p class="modalBlock__description">
            这是城市的磁力中心和旅游核心。其长度超过四公里，使其跻身俄罗斯最长的滨河长廊之列。
        </p>
        <p class="modalBlock__description">
            铸铁栏杆、栗树林荫道和沙滩，在一座大都市的中心营造出独特的河滨度假胜地氛围。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_1.jpg" alt="萨马拉绵长的滨河长廊全景" loading="lazy">
    </div>
</div>
<!-- Блок 2: История и реконструкция -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">从工业岸畔到度假胜地</h2>
        <p class="modalBlock__description">
            19世纪，河岸被码头和仓库占据。改造始于20世纪30年代，通过吹填沙子并修建首批台地。
        </p>
        <p class="modalBlock__description">
            滨河长廊在2012年至2018年的大规模重建后获得了现代风貌，同时保留了由四期建设形成的历史格局。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_2.jpg" alt="滨河长廊历史照片与现代风貌对比" loading="lazy">
    </div>
</div>
<!-- Блок 3: Знаменитые арт-объекты -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">著名的纪念碑与雕塑</h2>
        <p class="modalBlock__description">
            滨河长廊点缀着众多令人印象深刻的艺术作品，它们已成为此地的名片。
        </p>
        <p class="modalBlock__description">
            其中包括：城市奠基者扎谢金公爵纪念碑、电影《沙漠白日》中的青铜人物苏霍夫、《伏尔加河上的纤夫》群雕以及音乐喷泉。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_3.jpg" alt="滨河长廊上的著名雕塑拼贴：苏霍夫、扎谢金公爵、纤夫" loading="lazy">
    </div>
</div>
<!-- Блок 4: Инфраструктура и жизнь -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">多元化的生活空间</h2>
        <p class="modalBlock__description">
            这是一个多层级的综合体，设有步行道和自行车道、喷泉以及绿地。
        </p>
        <p class="modalBlock__description">
            其配套设施包括运动场地、儿童游乐场和咖啡馆，使滨河长廊无论四季如何，都成为市民和游客理想的休闲之地。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/samarskaya_naberezhnaya_4.jpg" alt="人们在滨河长廊骑行轮滑、休憩" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться и ориентироваться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">如何抵达及方位指南</h2>
        <p class="modalBlock__description">
            滨河长廊分为四期（段），每段各有特色。
        </p>
        <p class="modalBlock__description">
            第一段：与马克西姆&middot;高尔基街平行（自河运站起）。第二段（奥尔洛夫段）：与伏尔加沿岸街平行。第三段：自河运站至涅克拉索夫街。第四段（索菲亚段）：与森林街平行（&quot;战船&quot;纪念碑即在此处）。
        </p>
        <p class="modalBlock__description">
            到达方式：从任何市中心街道步行下行至伏尔加河畔即可。设有多个入口和阶梯。最近的公共交通站点遍布市中心各处。
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/samara/cards_modal/samarskaya_naberezhnaya/kak_dobratsya.jpg" alt="萨马拉滨河长廊各段示意图" loading="lazy">
    </div>
</div>`
        }

    ]

};

window.zh_samaraData = zh_samaraData;
