// ============================================
// ДАННЫЕ КАРТОЧЕК ИРКУТСКОГО КРАЯ
// ============================================

const irkutskData = {

    attractions: [
        {
            id: 'baykal',
            title: 'Байкал',
            image: '../../img/irkutsk/cards_tochki/Baikal_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Озеро Байкал</h1>
</div>
<!-- Блок 1: Тектонический исполин -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Тектонический исполин</h2>
        <p class="modalBlock__description">
            Этот тектонический исполин, рожденный в&nbsp;разломе земной коры 25&nbsp;млн лет назад, напоминает гигантский лунный серп, брошенный среди живописных горных хребтов.
        </p>
        <p class="modalBlock__description">
            Байкал&nbsp;&mdash; это озеро-загадка, чьи масштабы и&nbsp;свойства поражают воображение. Прежде всего, оно является крупнейшим на&nbsp;планете резервуаром пресной воды, сосредоточив&nbsp;19% ее&nbsp;мировых запасов. Этого объема хватило&nbsp;бы каждому жителю России на&nbsp;170 тысяч лет.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal/Baikal_1.jpg" alt="Озеро Байкал с высоты" loading="lazy">
    </div>
</div>
<!-- Блок 2: Живой, растущий организм -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Живой, растущий организм</h2>
        <p class="modalBlock__description">
            Главная уникальность Байкала&nbsp;&mdash; его динамичная природа. Озеро не&nbsp;статично: его берега ежегодно расходятся на&nbsp;2&nbsp;см, подобно континентальным плитам, что заставляет ученых рассматривать его как зарождающийся океан.
        </p>
        <p class="modalBlock__description">
            Исследования с&nbsp;помощью глубоководных аппаратов &laquo;Мир&raquo; позволили уточнить возраст озера. Оказалось, что хотя процесс формирования Байкала начался миллионы лет назад, его современная береговая линия&nbsp;&mdash; очень молодая, ей&nbsp;всего около 6&minus;8&nbsp;тыс. лет. Таким образом, мы&nbsp;наблюдаем не&nbsp;древний, застывший водоем, а&nbsp;живой, растущий организм.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal/Baikal_2.jpg" alt="Берег Байкала, тектонический разлом" loading="lazy">
    </div>
</div>
<!-- Блок 3: Уникальная экосистема -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Уникальная экосистема</h2>
        <p class="modalBlock__description">
            Уникальность озера не&nbsp;только в&nbsp;масштабах&nbsp;&mdash; его экосистема стала домом для более чем 2500 видов животных и&nbsp;растений, большинство из&nbsp;которых не&nbsp;встречаются больше нигде.
        </p>
        <p class="modalBlock__description">
            Например, байкальская нерпа&nbsp;&mdash; единственный в&nbsp;мире пресноводный тюлень, чья популяция полностью зависит от&nbsp;другой эндемичной рыбы-голомянки. Сейсмическая активность в&nbsp;Прибайкалье образовала множество горячих источников, создающих идеальные условия для бальнеологического отдыха.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal/Baikal_3.jpg" alt="Байкальская нерпа" loading="lazy">
    </div>
</div>
<!-- Блок 4: Зимнее чудо -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Зимнее чудо</h2>
        <p class="modalBlock__description">
            Лучшее время для посещения&nbsp;&mdash; с&nbsp;середины июля до&nbsp;августа, когда вода прогревается достаточно для купания. Но&nbsp;настоящие ценители приезжают и&nbsp;зимой, чтобы услышать &laquo;шепот&raquo; льда, увидеть бирюзовые наплески на&nbsp;скалах и&nbsp;пройти по&nbsp;знаменитой Кругобайкальской железной дороге.
        </p>
        <p class="modalBlock__description">
            Зимний Байкал преображается в&nbsp;ледяную галерею: толща прозрачного льда испещрена трещинами, которые образуются с&nbsp;громким треском. Эти разломы не&nbsp;разрушают озеро, а&nbsp;помогают ему дышать&nbsp;&mdash; насыщают воду кислородом и&nbsp;поддерживают жизнь подледного мира.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal/Baikal_4.jpg" alt="Лед Байкала зимой" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Основной точкой отправления для путешествия на&nbsp;Байкал является город Иркутск.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> из&nbsp;Иркутска до&nbsp;поселка Листвянка можно добраться по&nbsp;Байкальскому тракту, время в&nbsp;пути&nbsp;&mdash; один час.</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> из&nbsp;центра Иркутска до&nbsp;Листвянки ходят рейсовые автобусы, время в&nbsp;пути&nbsp;&mdash; 1,5&nbsp;часа.</li>
            <li class="modalBlock__listItem"><strong>Посещение:</strong> для некоторых заповедных территорий и&nbsp;национальных парков может потребоваться оформление разрешения.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal/kak_dobratsya.jpg" alt="Дорога на Байкал" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'baykal_hrebet',
            title: 'Байкальский хребет',
            image: '../../img/irkutsk/cards_tochki/Baikalskiy_hrebet_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Байкальский хребет</h1>
</div>
<!-- Блок 1: Горная гряда на севере Байкала -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Горная гряда на&nbsp;севере Байкала</h2>
        <p class="modalBlock__description">
            Байкальский хребет&nbsp;&mdash; часть большого горного амфитеатра, практически неразрывным кольцом окружающего самое глубокое озеро планеты. Он&nbsp;является частью той грандиозной горной системы, в&nbsp;недрах которой рождается великая сибирская река Лена.
        </p>
        <p class="modalBlock__description">
            Побережье Байкала хранит следы бурных геологических процессов, которые длились миллионы лет. Эта &laquo;геологическая головоломка&raquo; делает расшифровку происхождения Байкала крайне трудной задачей.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal_hrebet/Baikalskiy_hrebet_1.jpg" alt="Вид на Байкальский хребет с озера" loading="lazy">
    </div>
</div>
<!-- Блок 2: Геологическая головоломка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Геологическая головоломка</h2>
        <p class="modalBlock__description">
            Катастрофические землетрясения, поднятия и&nbsp;опускания гигантских участков суши, а&nbsp;также масштабные обвалы привели к&nbsp;тому, что метаморфические, осадочные и&nbsp;магматические породы разных эпох оказались здесь хаотично перемешаны.
        </p>
        <p class="modalBlock__description">
            Более молодые породы лежат глубоко, а&nbsp;древние&nbsp;&mdash; на&nbsp;поверхности. Эта уникальная особенность привлекает геологов со&nbsp;всего мира.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal_hrebet/Baikalskiy_hrebet_2.jpg" alt="Геологические обнажения в Байкальском хребте" loading="lazy">
    </div>
</div>
<!-- Блок 3: Байкальская рифтовая зона -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Байкальская рифтовая зона</h2>
        <p class="modalBlock__description">
            Центром этих грандиозных преобразований является Байкальская котловина&nbsp;&mdash; глубочайший разлом земной коры на&nbsp;стыке двух гигантских геологических структур: древней Сибирской платформы и&nbsp;молодого Центрально-Азиатского складчатого пояса.
        </p>
        <p class="modalBlock__description">
            Это колоссальное понижение рельефа со&nbsp;всех сторон обрамлено величественными горными хребтами, что лишь подчеркивает его тектоническую мощь.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal_hrebet/Baikalskiy_hrebet_3.jpg" alt="Схема Байкальской рифтовой зоны" loading="lazy">
    </div>
</div>
<!-- Блок 4: Горное кольцо Байкала -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Горное кольцо Байкала</h2>
        <p class="modalBlock__description">
            Со&nbsp;стороны западного побережья вздымаются Приморский и&nbsp;Байкальский хребты, увенчанные вершиной Трехголовый Голец (1746&nbsp;м) и&nbsp;горой Черского (2588&nbsp;м). Юго-восточная часть озера охраняется хребтом Хамар-Дабан с&nbsp;высочайшей точкой&nbsp;&mdash; горой Хан-Ула (2371&nbsp;м).
        </p>
        <p class="modalBlock__description">
            Далее к&nbsp;северо-востоку простирается самый высокий исполин из&nbsp;байкальских хребтов&nbsp;&mdash; Баргузинский хребет, достигающий отметки 2841&nbsp;м. Пространство между Хамар-Дабаном и&nbsp;Баргузинским хребтом заполняет хребет Улан-Бургасы (2033&nbsp;м).
        </p>
        <p class="modalBlock__description">
            Помимо наземных, у&nbsp;Байкала есть и&nbsp;подводные хребты. Самый масштабный&nbsp;&mdash; Академический хребет, который практически делит озеро пополам.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal_hrebet/Baikalskiy_hrebet_4.jpg" alt="Карта горного кольца вокруг Байкала" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Наиболее доступная часть Байкальского хребта находится в&nbsp;районе Северобайкальска.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;поезде:</strong> по&nbsp;Байкало-Амурской магистрали (БАМ) до&nbsp;станции Северобайкальск.</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> от&nbsp;Северобайкальска через хребет идет автодорога (автодублер БАМа), позволяющая попасть в&nbsp;отдаленные районы хребта и&nbsp;к&nbsp;берегу Байкала.</li>
            <li class="modalBlock__listItem"><strong>Для туристов:</strong> существуют пешие и&nbsp;водные маршруты разной сложности, требующие подготовки&nbsp;и, зачастую, сопровождения гидов.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/baikal_hrebet/kak_dobratsya.jpg" alt="Дорога через Байкальский хребет" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'nerpinarii',
            title: 'Нерпинарий',
            image: '../../img/irkutsk/cards_tochki/Nerpinariy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Нерпинарий</h1>
</div>
<!-- Блок 1: Аквариум Байкальской Нерпы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Аквариум Байкальской Нерпы</h2>
        <p class="modalBlock__description">
            Байкальский нерпинарий&nbsp;&mdash; уникальное место, где можно встретиться с&nbsp;живым символом озера Байкал. Эти пресноводные тюлени, обладающие врожденной осторожностью, в&nbsp;естественной среде редко подпускают к&nbsp;себе человека.
        </p>
        <p class="modalBlock__description">
            Нерпинарий&nbsp;&mdash; мостик между человеком и&nbsp;удивительным эндемиком Байкала, возможность заглянуть в&nbsp;мир этого осторожного, но&nbsp;невероятно умного создания.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/nerpinarii/Nerpinariy_1.jpg" alt="Байкальская нерпа в нерпинарии" loading="lazy">
    </div>
</div>
<!-- Блок 2: История и исследования -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">История и&nbsp;научные открытия</h2>
        <p class="modalBlock__description">
            Первый нерпинарий открылся в&nbsp;Листвянке в&nbsp;1998&nbsp;году, а&nbsp;спустя шесть лет его основатель, биолог Евгений Баранов, создал аналогичный центр в&nbsp;Иркутске.
        </p>
        <p class="modalBlock__description">
            За&nbsp;тридцать лет работы исследователь опроверг миф о&nbsp;слабом интеллекте байкальской нерпы, доказав, что эти животные не&nbsp;уступают в&nbsp;сообразительности дельфинам.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/nerpinarii/Nerpinariy_2.jpg" alt="Ученый и нерпа в нерпинарии" loading="lazy">
    </div>
</div>
<!-- Блок 3: Условия содержания и забота -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Условия содержания и&nbsp;забота</h2>
        <p class="modalBlock__description">
            Благодаря многолетним исследованиям ученым удалось создать условия, где нерпы не&nbsp;просто комфортно существуют, но&nbsp;и&nbsp;демонстрируют свои удивительные способности.
        </p>
        <p class="modalBlock__description">
            Особое внимание уделяется условиям содержания: современные системы очистки воды, регулярные ветеринарные осмотры и&nbsp;профессиональный уход. Многие артисты нерпинария&nbsp;&mdash; спасенные детеныши, которые не&nbsp;смогли&nbsp;бы выжить в&nbsp;дикой природе.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/nerpinarii/Nerpinariy_3.jpg" alt="Современный бассейн и уход за нерпами" loading="lazy">
    </div>
</div>
<!-- Блок 4: Представление и уникальные способности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Представление и&nbsp;уникальные способности</h2>
        <p class="modalBlock__description">
            Тренеры терпеливо работают с&nbsp;каждым животным, раскрывая их&nbsp;природные таланты. Тридцатиминутное представление позволяет не&nbsp;только увидеть завораживающие трюки&nbsp;&mdash; от&nbsp;танцев до&nbsp;решения простейших математических задач&nbsp;&mdash; но&nbsp;и&nbsp;узнать поразительные факты о&nbsp;единственном в&nbsp;мире пресноводном тюлене.
        </p>
        <p class="modalBlock__description">
            Гости могут даже приобрести картину, созданную самой нерпой, с&nbsp;сертификатом подлинности.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/nerpinarii/Nerpinariy_4.jpg" alt="Нерпа выступает на представлении" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Нерпинарий имеет два адреса:
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Нерпинарий в&nbsp;Иркутске:</strong> улица 2-я Железнодорожная, 66.</li>
            <li class="modalBlock__listItem"><strong>Нерпинарий в&nbsp;Листвянке:</strong> улица Горького, 101А.</li>
        </ul>
        <p class="modalBlock__description">
            Подробное расписание представлений, стоимость билетов и&nbsp;контактную информацию можно найти на&nbsp;официальном сайте проекта.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/nerpinarii/kak_dobratsya.jpg" alt="Здание нерпинария в Иркутске или Листвянке" loading="lazy">
    </div>
</div>`
        },
        {
            id: 'olhon',
            title: 'Ольхон',
            image: '../../img/irkutsk/cards_tochki/Olhon_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Остров Ольхон</h1>
</div>
<!-- Блок 1: Сакральное сердце Байкала -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Сакральное сердце Байкала</h2>
        <p class="modalBlock__description">
            Крупнейший остров, сакральное сердце Байкала, где каждая скала хранит память тысячелетий. Очертания Ольхона напоминают миниатюрную копию самого Байкала.
        </p>
        <p class="modalBlock__description">
            Остров Ольхон&nbsp;&mdash; часть Прибайкальского национального парка, отличается природной красотой и&nbsp;разнообразием ландшафтов. Это земля контрастов: здесь песчаные дюны соседствуют с&nbsp;мраморными утесами, степи внезапно обрываются кедровыми рощами.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  Ольхона с высоты -->
        <img src="../../img/irkutsk/cards_modal/olhon/Olhon_1.jpg" alt="Остров Ольхон с высоты птичьего полета" loading="lazy">
    </div>
</div>
<!-- Блок 2: Земля контрастов и уникальных явлений -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Земля контрастов</h2>
        <p class="modalBlock__description">
            Солнечных дней здесь больше, чем на&nbsp;черноморском побережье&nbsp;&mdash; пасмурно всего 48&nbsp;дней в&nbsp;году. Уникальный феномен острова&nbsp;&mdash; &laquo;хождение песков&raquo;, когда под воздействием ветров песчаные массивы буквально путешествуют по&nbsp;острову, погребая под собой леса.
        </p>
        <p class="modalBlock__description">
            Местные почвы настолько подвержены эрозии, что сельское хозяйство возможно лишь с&nbsp;искусственным орошением, а&nbsp;уровень засухи сравним с&nbsp;пустынными регионами Средней Азии. Восточное побережье обрамляет подводный академический хребет.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  песчаных дюн или "хождения песков" -->
        <img src="../../img/irkutsk/cards_modal/olhon/Olhon_2.jpg" alt="Песчаные дюны Ольхона" loading="lazy">
    </div>
</div>
<!-- Блок 3: Древняя история и археология -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Древняя история и&nbsp;археология</h2>
        <p class="modalBlock__description">
            Остров хранит множество уникальных фактов: археологи обнаружили здесь стоянки древних людей эпохи неолита, а&nbsp;курумчинская культура, существовавшая на&nbsp;острове в&nbsp;V&nbsp;&mdash; X&nbsp;веках, считается предком современных якутов.
        </p>
        <p class="modalBlock__description">
            В&nbsp;пещерах скалы Шаманки найдены ритуальные предметы из&nbsp;нефрита и&nbsp;бронзы возрастом 5000&nbsp;лет. Ольхон остается местом силы, где древние легенды переплетаются с&nbsp;реальностью. Это единственное место на&nbsp;Байкале, где можно увидеть следы древних цивилизаций.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  археологических находок или петроглифов -->
        <img src="../../img/irkutsk/cards_modal/olhon/Olhon_3.jpg" alt="Археологические находки Ольхона" loading="lazy">
    </div>
</div>
<!-- Блок 4: Точки притяжения острова -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Точки притяжения Ольхона</h2>
        <p class="modalBlock__description">
            Ольхон&nbsp;&mdash; это место, где природа продолжает творить свою геологическую летопись, а&nbsp;каждый природный объект имеет сакральное значение.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Скала Шаманка (мыс Бурхан)</strong>&nbsp;&mdash; двуглавая мраморная святыня со&nbsp;сквозной пещерой, где столетиями проводились шаманские обряды.</li>
            <li class="modalBlock__listItem"><strong>Мыс Хобой</strong>&nbsp;&mdash; северная оконечность острова с&nbsp;панорамным видом на&nbsp;Байкал, самая знаменитая смотровая площадка.</li>
            <li class="modalBlock__listItem"><strong>13&nbsp;столбов Сэргэ</strong>&nbsp;&mdash; одно из&nbsp;священных мест на&nbsp;острове, связанное с&nbsp;древними обрядами и&nbsp;верованиями.</li>
        </ul>
        <p class="modalBlock__description">
            Каждое из&nbsp;этих мест имеет свою уникальную энергетику и&nbsp;историю, делая Ольхон настоящим музеем под открытым небом.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  Шаманки или Хобоя -->
        <img src="../../img/irkutsk/cards_modal/olhon/Olhon_4.jpg" alt="Скала Шаманка на Ольхоне" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Основной путь на&nbsp;остров лежит через паромную переправу, но&nbsp;есть и&nbsp;сезонные альтернативы.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> из&nbsp;Иркутска до&nbsp;паромной переправы (с. Сахюрта)&nbsp;&mdash; 3,5&nbsp;часа. На&nbsp;остров попасть можно на&nbsp;пароме с&nbsp;автомобилем или на&nbsp;теплоходе.</li>
            <li class="modalBlock__listItem"><strong>Ледовая переправа:</strong> с&nbsp;января до&nbsp;конца апреля по&nbsp;крепкому льду Байкала действует зимняя дорога, что значительно сокращает время в&nbsp;пути.</li>
            <li class="modalBlock__listItem"><strong>Важно:</strong> при планировании поездки учитывайте сезонность и&nbsp;возможные очереди на&nbsp;паром в&nbsp;летний период.</li>
        </ul>
        <p class="modalBlock__description">
            Рекомендуется уточнять актуальное расписание паромов и&nbsp;состояние ледовой переправы перед поездкой.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  парома или ледовой переправы -->
        <img src="../../img/irkutsk/cards_modal/olhon/kak_dobratsya.jpg" alt="Паромная переправа на Ольхон" loading="lazy">
    </div>
</div>`
        },
        {
            id: 'istok_angary',
            title: 'Исток Ангары',
            image: '../../img/irkutsk/cards_tochki/Istok_Angary_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Исток Ангары</h1>
</div>
<!-- Блок 1: Единственная река из Байкала -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Единственная река из&nbsp;Байкала</h2>
        <p class="modalBlock__description">
            Единственная река, берущая свой путь из&nbsp;глубин Байкала. Широкий километровый проток будто разрывает байкальские воды, устремляясь в&nbsp;ущелье между живописными сопками.
        </p>
        <p class="modalBlock__description">
            В&nbsp;переводе с&nbsp;бурятского &laquo;Ангара&raquo; означает &laquo;разинутая пасть&raquo;, и&nbsp;действительно, исток напоминает гигантскую пасть, поглощающую байкальские воды. У&nbsp;истока Ангары находится поселок Листвянка и&nbsp;порт Байкал, отсюда начинается маршрут Кругобайкальской железной дороги.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  истока Ангары -->
        <img src="../../img/irkutsk/cards_modal/istok_angary/Istok_Angary_1.jpg" alt="Исток реки Ангара из Байкала" loading="lazy">
    </div>
</div>
<!-- Блок 2: Легенда о Шаман-камне -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Легенда о&nbsp;Шаман-камне</h2>
        <p class="modalBlock__description">
            У&nbsp;самого истока находится знаменитый Шаман-камень&nbsp;&mdash; скальный останец, выглядывающий из&nbsp;воды и&nbsp;разделяющий поток на&nbsp;два рукава. Согласно древней легенде, это глыба, которую бросил вдогонку дочери разгневанный Байкал, пытаясь остановить ее&nbsp;побег к&nbsp;возлюбленному Енисею.
        </p>
        <p class="modalBlock__description">
            Сегодня этот камень служит естественным символом истока Ангары и&nbsp;важным индикатором экологического состояния озера&nbsp;&mdash; при понижении уровня Байкала он&nbsp;обнажается все сильнее. Это место считается сакральным у&nbsp;местных народов.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  Шаман-камня -->
        <img src="../../img/irkutsk/cards_modal/istok_angary/Istok_Angary_2.jpg" alt="Шаман-камень в истоке Ангары" loading="lazy">
    </div>
</div>
<!-- Блок 3: Гидрологические особенности -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Гидрологические особенности</h2>
        <p class="modalBlock__description">
            Уникальность истока проявляется в&nbsp;его гидрологических особенностях. При ширине около километра и&nbsp;глубине до&nbsp;трех метров скорость течения здесь достигает 5&minus;8&nbsp;км/ч даже в&nbsp;безветренную погоду.
        </p>
        <p class="modalBlock__description">
            Половину водного потока реке обеспечивает Байкал, а&nbsp;температура воды даже летом редко поднимается выше 10&nbsp;градусов. Именно отсюда начинается крупнейший в&nbsp;России Ангарский каскад ГЭС, использующий перепад высот в&nbsp;380&nbsp;м на&nbsp;протяжении всей реки.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  течения Ангары -->
        <img src="../../img/irkutsk/cards_modal/istok_angary/Istok_Angary_3.jpg" alt="Течение Ангары у истока" loading="lazy">
    </div>
</div>
<!-- Блок 4: Обзорные площадки и музей -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Обзорные площадки и&nbsp;музей</h2>
        <p class="modalBlock__description">
            Полюбоваться местом, где рождается одна из&nbsp;великих сибирских рек, можно на&nbsp;смотровых площадках в&nbsp;поселке Листвянка, откуда открывается панорамный вид на&nbsp;исток. Лучшие виды открываются со&nbsp;смотровой у&nbsp;Камня Черского, на&nbsp;вершину которого можно попасть по&nbsp;канатной дороге.
        </p>
        <p class="modalBlock__description">
            Байкальский лимнологический музей с&nbsp;детальной экспозицией об&nbsp;экосистеме подробно расскажет обо всех природных особенностях Байкала и&nbsp;Ангары. В&nbsp;окрестностях истока сосредоточились самые популярные достопримечательности региона.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  смотровой площадки или музея -->
        <img src="../../img/irkutsk/cards_modal/istok_angary/Istok_Angary_4.jpg" alt="Смотровая площадка на исток Ангары" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Исток Ангары находится в&nbsp;непосредственной близости от&nbsp;Иркутска, что делает его одним из&nbsp;самых доступных природных объектов Байкала.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> от&nbsp;Иркутска в&nbsp;сторону Листвянки ходят автобусы, нужная остановка&nbsp;&mdash; &laquo;Байкальский музей&raquo;. Время в&nbsp;пути&nbsp;&mdash; около 1,5&nbsp;часов.</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> по&nbsp;Байкальскому тракту из&nbsp;Иркутска, время в&nbsp;пути&nbsp;&mdash; около часа.</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;катере:</strong> от&nbsp;Иркутска по&nbsp;Ангаре или от&nbsp;Листвянки по&nbsp;Байкалу&nbsp;&mdash; самый живописный способ увидеть исток с&nbsp;воды.</li>
            <li class="modalBlock__listItem"><strong>Посещение:</strong> большинство смотровых площадок доступны бесплатно, для посещения музея и&nbsp;канатной дороги необходимо приобрести билеты.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <!--  дороги или карты -->
        <img src="../../img/irkutsk/cards_modal/istok_angary/kak_dobratsya.jpg" alt="Дорога к истоку Ангары" loading="lazy">
    </div>
</div>`
        }

    ],

    // Выбраться на природу
    nature: [

        {
            id: 'tofalariya',
            title: 'Тофалария',
            image: '../../img/irkutsk/cards_nature/Tofalaria_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Тофалария</h1>
</div>
<!-- Блок 1: Затерянный мир Восточного Саяна -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Затерянный мир Восточного Саяна</h2>
        <p class="modalBlock__description">
            Тофалария&nbsp;&mdash; затерянный мир в&nbsp;сердце Восточного Саяна, где время течет по&nbsp;особым законам. Эта труднодоступная территория хранит наследие одного из&nbsp;самых малочисленных народов России&nbsp;&mdash; тофов, чья история прослеживается с&nbsp;V&nbsp;века.
        </p>
        <p class="modalBlock__description">
            Труднодоступный высокогорный запад Приангарья&nbsp;&mdash; одно из&nbsp;немногих оставшихся белых пятен на&nbsp;карте мира. Это историко-культурный регион на&nbsp;западе Иркутской области, на&nbsp;границе с&nbsp;Красноярским краем и&nbsp;Тувой.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  Тофаларии -->
        <img src="../../img/irkutsk/cards_modal/tofalaria/Tofalaria_1.jpg" alt="Ландшафты Тофаларии в Восточном Саяне" loading="lazy">
    </div>
</div>
<!-- Блок 2: Живой памятник культурного разнообразия -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Живой памятник культурного разнообразия</h2>
        <p class="modalBlock__description">
            Тофалария&nbsp;&mdash; это живой памятник хрупкости культурного разнообразия&nbsp;&mdash; место, где вековые традиции кочевого народа встречаются с&nbsp;вызовами глобализации, а&nbsp;изоляция одновременно и&nbsp;сохраняет, и&nbsp;обрекает на&nbsp;исчезновение уникальное наследие Восточных Саян.
        </p>
        <p class="modalBlock__description">
            Земля тофаларов остается обособленной и&nbsp;по&nbsp;сей день&nbsp;&mdash; сюда не&nbsp;проложены автомобильные дороги, а&nbsp;добраться можно лишь вертолетом, по&nbsp;рекам или зимникам. Административная неопределенность усугубляет изоляцию: с&nbsp;1965 года Тофалария существует без четких границ.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  жизни тофов -->
        <img src="../../img/irkutsk/cards_modal/tofalaria/Tofalaria_2.jpg" alt="Традиционная жизнь тофаларов" loading="lazy">
    </div>
</div>
<!-- Блок 3: Культура под угрозой -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Культура под угрозой</h2>
        <p class="modalBlock__description">
            Традиционный уклад тофов держится на&nbsp;охоте и&nbsp;оленеводстве, однако поголовье оленей в&nbsp;последние годы катастрофически сократилось. Культурное наследие находится под угрозой&nbsp;&mdash; язык постепенно выходит из&nbsp;употребления, а&nbsp;шаманские традиции, целенаправленно искоренявшиеся в&nbsp;советский период, утрачены безвозвратно.
        </p>
        <p class="modalBlock__description">
            Самоназвание &laquo;тофы&raquo;, что означает просто &laquo;человек&raquo;: сегодня в&nbsp;Иркутской области проживает чуть больше 500 представителей этого древнего народа, чья уникальная культура продолжает растворяться в&nbsp;современном мире.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  тофаларской культуры -->
        <img src="../../img/irkutsk/cards_modal/tofalaria/Tofalaria_3.jpg" alt="Тофаларские традиции и ремесла" loading="lazy">
    </div>
</div>
<!-- Блок 4: Последний оплот культуры -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Последний оплот культуры</h2>
        <p class="modalBlock__description">
            В&nbsp;селе Алыгджер, столице Тофаларии, находится местный этнокультурный центр и&nbsp;музей&nbsp;&mdash; последний оплот тофаларской культуры. Это место, где сохраняются и&nbsp;передаются традиции древнего народа.
        </p>
        <p class="modalBlock__description">
            Здесь базируется фольклорный ансамбль &laquo;Дыырак ибиллер&raquo; (в&nbsp;переводе&nbsp;&mdash; &laquo;быстроногий олень&raquo;), который занимал немало призовых мест на&nbsp;этнофестивалях и&nbsp;всероссийских конкурсах. Ансамбль играет ключевую роль в&nbsp;сохранении музыкального наследия тофов.
        </p>
        <p class="modalBlock__description">
            Эти институции становятся важными центрами сопротивления культурному исчезновению, сохраняя память о&nbsp;традиционном укладе жизни, ремеслах и&nbsp;верованиях тофаларов.
        </p>
    </div>
    <div class="modalBlock__image">
        <!--  этнокультурного центра или ансамбля -->
        <img src="../../img/irkutsk/cards_modal/tofalaria/Tofalaria_4.jpg" alt="Этнокультурный центр в Алыгджере" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Добраться до&nbsp;Тофаларии&nbsp;&mdash; настоящее приключение, требующее тщательной подготовки из-за отсутствия дорог и&nbsp;труднодоступности региона.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Первый этап:</strong> из&nbsp;Иркутска до&nbsp;Нижнеудинска по&nbsp;трассе Р-255, время в&nbsp;пути&nbsp;&mdash; около 7&nbsp;часов (500&nbsp;км).</li>
            <li class="modalBlock__listItem"><strong>Второй этап:</strong> из&nbsp;Нижнеудинска до&nbsp;поселка Алыгджер (столицы Тофаларии) можно добраться только вертолетом. Это единственный регулярный способ попасть в&nbsp;регион.</li>
            <li class="modalBlock__listItem"><strong>Альтернативные пути:</strong> в&nbsp;зимний период иногда используются зимники (ледовые и&nbsp;снежные дороги), летом&nbsp;&mdash; по&nbsp;рекам на&nbsp;лодках, но&nbsp;эти способы ненадежны и&nbsp;требуют специальной подготовки.</li>
            <li class="modalBlock__listItem"><strong>Важно:</strong> посещение Тофаларии требует предварительного согласования и&nbsp;оформления пропусков, так как территория частично относится к&nbsp;Тофаларскому заказнику.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <!--  дороги или карты -->
        <img src="../../img/irkutsk/cards_modal/tofalaria/kak_dobratsya.jpg" alt="Карта Тофаларии и пути доступа" loading="lazy">
    </div>
</div>`
        },
        {
            id: 'kodar',
            title: 'Кодар',
            image: '../../img/irkutsk/cards_nature/Kodar_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Горный хребет Кодар</h1>
</div>
<!-- Блок 1: Величественная горная страна -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Величественная горная страна</h2>
        <p class="modalBlock__description">
            Горный хребет Кодар&nbsp;&mdash; величественная горная страна, большая часть которой находится в&nbsp;Забайкалье, но&nbsp;северные склоны спускаются к&nbsp;Иркутской области.
        </p>
        <p class="modalBlock__description">
            Сегодня Кодар остается терра инкогнита для большинства туристов&nbsp;&mdash; суровый климат и&nbsp;труднодоступность сохранили его природу в&nbsp;первозданном виде. Это царство скал и&nbsp;ледников: эвенкийское название &laquo;хада&raquo;&nbsp;&mdash; &laquo;скала&raquo;&nbsp;&mdash; как нельзя лучше отражает суровый характер этих мест.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kodar/Kodar_1.jpg" alt="Величественные виды хребта Кодар" loading="lazy">
    </div>
</div>
<!-- Блок 2: Пространство и ледники -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Царство скал и&nbsp;ледников</h2>
        <p class="modalBlock__description">
            Протянувшись изящной дугой на&nbsp;250&nbsp;км от&nbsp;долины Витима до&nbsp;реки Чара, Кодар образует естественную границу между горными системами Восточной Сибири.
        </p>
        <p class="modalBlock__description">
            Настоящую известность этим горам принесли ледники: Кодар остается единственным районом современного оледенения в&nbsp;Забайкалье. Тридцать ледников общей площадью 19&nbsp;км&sup2;, висячие долины и&nbsp;каровые озера создают уникальный высокогорный ландшафт, больше характерный для Альп, чем для сибирских широт.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kodar/Kodar_2.jpg" alt="Ледники и высокогорные ландшафты Кодара" loading="lazy">
    </div>
</div>
<!-- Блок 3: История и природа -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">История и&nbsp;природные зоны</h2>
        <p class="modalBlock__description">
            История освоения этих мест хранит разные страницы: от&nbsp;первых карт князя Кропоткина до&nbsp;урановых рудников Мраморного ущелья, где в&nbsp;1950-х годах трудились заключенные Борлага.
        </p>
        <p class="modalBlock__description">
            Строительство БАМа сделало Кодар более доступным, но&nbsp;не&nbsp;лишило его дикой природы. Лиственничные леса нижнего пояса сменяются здесь березовым криволесьем, а&nbsp;выше 2000&nbsp;м начинается царство горных тундр и&nbsp;альпийских лугов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kodar/Kodar_3.jpg" alt="Природные зоны и история Кодара" loading="lazy">
    </div>
</div>
<!-- Блок 4: Тектоническая активность и охрана -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Тектоническая активность и&nbsp;охрана природы</h2>
        <p class="modalBlock__description">
            Особую значимость Кодару придает его положение в&nbsp;Байкальской рифтовой зоне, где возможны землетрясения силой до&nbsp;10&nbsp;баллов. Эта тектоническая активность формирует непрерывно меняющийся рельеф с&nbsp;глубокими ущельями и&nbsp;водопадами.
        </p>
        <p class="modalBlock__description">
            Геологическая история Кодара насчитывает миллиарды лет. С&nbsp;2018 года значительная часть хребта вошла в&nbsp;состав национального парка &laquo;Кодар&raquo;, получив наконец должный охранный статус.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kodar/Kodar_4.jpg" alt="Ущелья и водопады Кодара, национальный парк" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Добраться до&nbsp;хребта Кодар можно несколькими способами:
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;поезде:</strong> до&nbsp;станции Новая Чара (БАМ, Забайкальский край), далее&nbsp;&mdash; автобусом или такси до&nbsp;села Чара, отсюда начинаются маршруты на&nbsp;Кодар.</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;самолете:</strong> из&nbsp;Читы до&nbsp;села Чара.</li>
            <li class="modalBlock__listItem"><strong>Важно:</strong> посещение хребта, особенно его охраняемых территорий в&nbsp;составе нацпарка &laquo;Кодар&raquo;, требует предварительного согласования маршрута и&nbsp;оформления необходимых разрешений.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kodar/kak_dobratsya.jpg" alt="Карта и транспортная схема до хребта Кодар" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'zapovednoye_pribaykalie',
            title: 'Заповедное Прибайкалье',
            image: '../../img/irkutsk/cards_nature/Zapovednoe_Pribaikalie_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Заповедное Прибайкалье</h1>
</div>
<!-- Блок 1: Система охраняемых территорий -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Система охраняемых территорий</h2>
        <p class="modalBlock__description">
            Система особо охраняемых природных территорий по&nbsp;берегам Байкала включает четыре резервата общей площадью более 1,3 млн&nbsp;га: Прибайкальский национальный парк, Байкало-Ленский заповедник, заказники &laquo;Тофаларский&raquo; и&nbsp;&laquo;Красный Яр&raquo;.
        </p>
        <p class="modalBlock__description">
            Основная миссия заповедных территорий&nbsp;&mdash; сохранение уникальных экосистем Прибайкалья, которые играют ключевую буферную роль для экологии Байкала. От&nbsp;состояния окружающих озеро лесов, болот и&nbsp;горных массивов напрямую зависит чистота байкальских вод. Эти пространства представляют огромную ценность сами по&nbsp;себе&nbsp;&mdash; здесь сохранились реликтовые леса, экзотические формы рельефа и&nbsp;богатейший животный мир.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zapovednoe_pribakailie/Zapovednoe_Pribaikalie_1.jpg" alt="Карта заповедного Прибайкалья" loading="lazy">
    </div>
</div>
<!-- Блок 2: Прибайкальский национальный парк -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Прибайкальский национальный парк</h2>
        <p class="modalBlock__description">
            Прибайкальский национальный парк, пожалуй, самое посещаемое место на&nbsp;Байкале&nbsp;&mdash; это весь Ольхон, Малое море и&nbsp;значительная часть западного берега озера. Парк раскинулся узкой лентой вдоль побережья протяженностью 470&nbsp;км на&nbsp;417&nbsp;тыс.&nbsp;га.
        </p>
        <p class="modalBlock__description">
            Парк дышит контрастами: от&nbsp;мистического острова Ольхон до&nbsp;песчаных дюн, ароматы степных трав смешиваются с&nbsp;бризом с&nbsp;Байкала. Это царство эндемиков и&nbsp;древней истории с&nbsp;петроглифами Саган-Заба.
        </p>
        <p class="modalBlock__description">
            <strong>Точки притяжения:</strong> утес Чаячий, мыс Хобой, утес Саган-Заба, соленые Тажеранские озера, бухта Ая.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zapovednoe_pribakailie/Zapovednoe_Pribaikalie_2.jpg" alt="Прибайкальский национальный парк" loading="lazy">
    </div>
</div>
<!-- Блок 3: Байкало-Ленский заповедник -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Байкало-Ленский заповедник</h2>
        <p class="modalBlock__description">
            Байкало-Ленский заповедник&nbsp;&mdash; это земля, где рождается великая сибирская река Лена. Этот природный коридор площадью почти 660&nbsp;тыс.&nbsp;га&nbsp;протянулся от&nbsp;байкальского побережья к&nbsp;заснеженным гольцам Байкальского хребта.
        </p>
        <p class="modalBlock__description">
            Здесь сохранились ландшафты, почти не&nbsp;тронутые цивилизацией. Реликтовые степи соседствуют с&nbsp;альпийскими лугами, горная тундра переходит в&nbsp;заросли кедрового стланика. Территория стала убежищем для баргузинского соболя, бурого медведя и&nbsp;дикого северного оленя.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zapovednoe_pribakailie/Zapovednoe_Pribaikalie_3.jpg" alt="Байкало-Ленский заповедник" loading="lazy">
    </div>
</div>
<!-- Блок 4: Заказники «Красный Яр» и «Тофаларский» -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Заказники &laquo;Красный&nbsp;Яр&raquo; и&nbsp;&laquo;Тофаларский&raquo;</h2>
        <p class="modalBlock__description">
            <strong>Заказник &laquo;Красный Яр&raquo;</strong>&nbsp;&mdash; это древние леса на&nbsp;склонах Онотской возвышенности площадью 49,1&nbsp;тыс.&nbsp;га. Почти вся территория покрыта первозданными хвойными лесами&nbsp;&mdash; вековыми соснами, лиственницами, кедрами и&nbsp;елями.
        </p>
        <p class="modalBlock__description">
            <strong>Тофаларский заказник</strong> раскинулся в&nbsp;сердце Восточного Саяна. Горные хребты покрыты кедровой тайгой, где вековые деревья соседствуют с&nbsp;альпийскими лугами. Особую ценность представляют кристально чистые озера, среди которых выделяется Агульское.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zapovednoe_pribakailie/Zapovednoe_Pribaikalie_4.jpg" alt="Заказники Прибайкалья" loading="lazy">
    </div>
</div>
<!-- Блок 5: Наука и как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Научная деятельность и&nbsp;посещение</h2>
        <p class="modalBlock__description">
            Научная деятельность включает многолетние наблюдения за&nbsp;природными процессами, экологический мониторинг флоры и&nbsp;фауны. Специалисты ведут &laquo;Летопись природы&raquo;, изучают последствия пожаров и&nbsp;антропогенного воздействия, разрабатывают методы сохранения биоразнообразия.
        </p>
        <h3 class="modalBlock__subtitle">Как добраться</h3>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Перед путешествием</strong> в&nbsp;Прибайкальский национальный парк или Байкало-Ленский заповедник необходимо получить разрешение на&nbsp;посещение.</li>
            <li class="modalBlock__listItem"><strong>Из&nbsp;Иркутска</strong> можно добраться на&nbsp;автомобиле, по&nbsp;воде или на&nbsp;электричке. Подробнее&nbsp;&mdash; на&nbsp;сайте заповедника.</li>
            <li class="modalBlock__listItem"><strong>В&nbsp;Тофаларский заказник</strong> можно добраться по&nbsp;рекам или на&nbsp;вертолете из&nbsp;Нижнеудинска.</li>
            <li class="modalBlock__listItem"><strong>Дорога в&nbsp;заказник &laquo;Красный&nbsp;Яр&raquo;</strong> из&nbsp;Иркутска займет пару часов на&nbsp;автомобиле (ориентир&nbsp;&mdash; п. Усть-Ордынский).</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zapovednoe_pribakailie/kak_dobratsya.jpg" alt="Научные исследования в заповеднике" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'vitimskii_zapovednik',
            title: 'Витимский заповедник',
            image: '../../img/irkutsk/cards_nature/Vitimskiy_zapovednik_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Заповедник &laquo;Витимский&raquo;</h1>
</div>
<!-- Блок 1: Первый заповедник в Иркутской области -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Первый заповедник в&nbsp;Иркутской области</h2>
        <p class="modalBlock__description">
            Витимский заповедник&nbsp;&mdash; природная крепость на&nbsp;стыке тайги и&nbsp;горных хребтов. Это первый заповедник в&nbsp;Иркутской области, созданный для охраны редких видов и&nbsp;уникальных экосистем.
        </p>
        <p class="modalBlock__description">
            Заповедник охватывает горные системы Кодара с&nbsp;единственным в&nbsp;Забайкалье ледниковым районом, и&nbsp;древнее озеро Орон, чьи воды изучаются как эталонная экосистема. Эти территории стали убежищем для краснокнижных видов&nbsp;&mdash; кодарского снежного барана и&nbsp;прибайкальского черношапочного сурка, чьи популяции сохраняются в&nbsp;условиях нарастающего климатического давления.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/vitimskii_zapovednik/Vitimskiy_zapovednik_1.jpg" alt="Горные ландшафты Витимского заповедника" loading="lazy">
    </div>
</div>
<!-- Блок 2: Живая лаборатория под открытым небом -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Живая лаборатория под открытым небом</h2>
        <p class="modalBlock__description">
            Научная работа здесь развернута с&nbsp;1983&nbsp;года, превращая заповедник в&nbsp;живую лабораторию под открытым небом. Гидробиологи следят за&nbsp;чистотой водоемов, гляциологи фиксируют сокращение ледников, а&nbsp;экологи изучают влияние глобального потепления на&nbsp;таежные экосистемы.
        </p>
        <p class="modalBlock__description">
            Особую ценность представляют многолетние ряды наблюдений, позволяющие отслеживать изменения природной среды в&nbsp;условиях золотодобывающего региона. Витимский заповедник охраняет редкий подвид кодарских снежных баранов&nbsp;&mdash; толсторогов, а&nbsp;еще&nbsp;&mdash; баргузинского соболя.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/vitimskii_zapovednik/Vitimskiy_zapovednik_2.jpg" alt="Научные исследования в заповеднике" loading="lazy">
    </div>
</div>
<!-- Блок 3: Фауна заповедника -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Фауна заповедника: срез сибирской тайги</h2>
        <p class="modalBlock__description">
            Фауна заповедника представляет срез сибирской тайги: от&nbsp;бурых медведей и&nbsp;росомах до&nbsp;стад северных оленей. Орнитологи насчитывают 252 вида птиц&nbsp;&mdash; от&nbsp;таежных кедровок до&nbsp;горных вьюрков.
        </p>
        <p class="modalBlock__description">
            Но&nbsp;главными символами остаются эндемики Кодарского хребта, чье выживание напрямую зависит от&nbsp;сохранности этих труднодоступных территорий. Витимский заповедник продолжает выполнять миссию, заложенную при его создании&nbsp;&mdash; служить эталоном дикой природы в&nbsp;регионе, где промышленное освоение постоянно наступает на&nbsp;хрупкие экосистемы.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/vitimskii_zapovednik/Vitimskiy_zapovednik_3.jpg" alt="Животные Витимского заповедника" loading="lazy">
    </div>
</div>
<!-- Блок 4: Маршруты для путешественников -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Маршруты для путешественников</h2>
        <p class="modalBlock__description">
            Для путешественников по&nbsp;территории заповедника проложено несколько маршрутов&nbsp;&mdash; экотроп по&nbsp;светлохвойной тайге и&nbsp;водных путей по&nbsp;реке Витим.
        </p>
        <p class="modalBlock__description">
            Его история&nbsp;&mdash; это пример того, как научный подход и&nbsp;строгая охрана позволяют сохранять биоразнообразие даже в&nbsp;условиях меняющегося климата и&nbsp;антропогенного давления.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/vitimskii_zapovednik/Vitimskiy_zapovednik_4.jpg" alt="Экотропы и маршруты заповедника" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Дирекция заповедника находится по&nbsp;адресу: г. Бодайбо, ул. Иркутская, дом 4а.
        </p>
        <p class="modalBlock__description">
            К&nbsp;границам заповедника проще всего добраться из&nbsp;Бодайбо по&nbsp;реке Витим или вертолетом. Посещение территории требует обязательного согласования с&nbsp;администрацией заповедника и&nbsp;оформления соответствующих пропусков.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/vitimskii_zapovednik/kak_dobratsya.jpg" alt="Карта и расположение Витимского заповедника" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'ostrov_ogoi',
            title: 'Остров Огой',
            image: '../../img/irkutsk/cards_nature/Ostrov_Ogoy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Остров Огой</h1>
</div>
<!-- Блок 1: Безмолвный страж Малого Моря -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Безмолвный страж Малого Моря</h2>
        <p class="modalBlock__description">
            Остров Огой&nbsp;&mdash; безмолвный страж Малого Моря, пролива, отделяющего Ольхон от&nbsp;материка. Этот узкий трехкилометровый остров, название которого с&nbsp;бурятского переводится как &laquo;безводный&raquo;,&nbsp;&mdash; сакральный символ Байкала.
        </p>
        <p class="modalBlock__description">
            Всего километр воды отделяет остров Огой от&nbsp;западного берега Ольхона, создавая уникальную миниатюрную экосистему.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/ostrov_ogoy/Ostrov_Ogoy_1.jpg" alt="Вид на остров Огой с воды" loading="lazy">
    </div>
</div>
<!-- Блок 2: Ступа Просветления -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Ступа Просветления&nbsp;&mdash; духовный центр</h2>
        <p class="modalBlock__description">
            Главный символ острова&nbsp;&mdash; восьмиметровая буддийская ступа Просветления, возведенная в&nbsp;2005 году под руководством бутанского ламы. Белоснежное сооружение на&nbsp;высшей точке острова (512&nbsp;м) хранит уникальные реликвии.
        </p>
        <p class="modalBlock__description">
            Здесь находятся три тонны священных текстов, мощи тибетских святых, вода из&nbsp;всех океанов мира. Это место паломничества стало духовным центром, примиряющим древние шаманские верования с&nbsp;буддийской традицией.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/ostrov_ogoy/Ostrov_Ogoy_2.jpg" alt="Буддийская ступа Просветления на острове Огой" loading="lazy">
    </div>
</div>
<!-- Блок 3: Мыс Дракон -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Мыс Дракон</h2>
        <p class="modalBlock__description">
            Мыс Дракон на&nbsp;западной оконечности острова&nbsp;&mdash; словно всплеск раскаленной лавы, застывшей по&nbsp;мановению руки волшебника. Юго-западную оконечность острова венчает мыс Дракон&nbsp;&mdash; кварцевый утес, своими очертаниями напоминающий мифическое существо.
        </p>
        <p class="modalBlock__description">
            Зимой здесь образуется &laquo;сокуй&raquo;&nbsp;&mdash; наплесковый лед, превращающий скалы в&nbsp;хрустальные скульптуры. А&nbsp;прибрежные пески отличаются необычным красноватым оттенком благодаря вкраплениям граната.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/ostrov_ogoy/Ostrov_Ogoy_3.jpg" alt="Мыс Дракон на острове Огой" loading="lazy">
    </div>
</div>
<!-- Блок 4: Природа острова -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природа острова</h2>
        <p class="modalBlock__description">
            Остров представляет собой уникальный ландшафт с&nbsp;сочетанием скалистых берегов, редкой растительности и&nbsp;особой атмосферы уединенности.
        </p>
        <p class="modalBlock__description">
            Его скалистые берега и&nbsp;безводные просторы создают ощущение пребывания в&nbsp;месте силы, где природа и&nbsp;духовность существуют в&nbsp;гармонии.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/ostrov_ogoy/Ostrov_Ogoy_4.jpg" alt="Природа и ландшафты острова Огой" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Добраться до&nbsp;острова Огой можно несколькими способами в&nbsp;зависимости от&nbsp;времени года:
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Летом:</strong> по&nbsp;воде на&nbsp;катере или лодке из&nbsp;поселков на&nbsp;Ольхоне (Хужир, Харанцы) или во&nbsp;время организованного круиза по&nbsp;Байкалу.</li>
            <li class="modalBlock__listItem"><strong>Зимой:</strong> по&nbsp;крепкому льду Малого Моря на&nbsp;коньках, лыжах или на&nbsp;судне на&nbsp;воздушной подушке (ховеркрафте).</li>
            <li class="modalBlock__listItem"><strong>Важно:</strong> посещение острова требует уважительного отношения к&nbsp;священному месту и&nbsp;ступе, а&nbsp;также соблюдения природоохранных правил.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/ostrov_ogoy/kak_dobratsya.jpg" alt="Карта Малого Моря с островом Огой" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'tazheranskaya_step',
            title: 'Тажеранская степь',
            image: '../../img/irkutsk/cards_nature/Tajeranskaya_step_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Тажеранская степь</h1>
</div>
<!-- Блок 1: Удивительный мир на стыке стихий -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Удивительный мир на&nbsp;стыке стихий</h2>
        <p class="modalBlock__description">
            Тажеранская степь&nbsp;&mdash; это удивительный мир на&nbsp;стыке берегов Байкала и&nbsp;сибирских предгорий. 40-километровая полоса земли между рекой Ангой и&nbsp;Ольхонскими Воротами: с&nbsp;востока ее&nbsp;омывают байкальские волны, с&nbsp;запада поднимаются склоны Приморского хребта, создавая уникальный микроклимат.
        </p>
        <p class="modalBlock__description">
            На&nbsp;правом берегу Анги находится идеальный конус священной горы Ехэ-Ердо: бурятские шаманы по&nbsp;сей день проводят здесь свои ритуалы. С&nbsp;бурятского &laquo;тажеран&raquo; переводится как &laquo;летний&raquo;, &laquo;солнечный&raquo;&nbsp;&mdash; идеальное место для летних кочевий.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/tajeranskaya_step/Tajeranskaya_step_1.jpg" alt="Ландшафт Тажеранской степи на берегу Байкала" loading="lazy">
    </div>
</div>
<!-- Блок 2: Природные особенности и охрана -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Природные особенности и&nbsp;охрана</h2>
        <p class="modalBlock__description">
            Эти сухие, прогретые солнцем просторы с&nbsp;небогатой растительностью веками служили пастбищами для скота. Среди выжженных трав здесь можно встретить удивительное сокровище&nbsp;&mdash; карликовую лилию, занесенную в&nbsp;Красную книгу.
        </p>
        <p class="modalBlock__description">
            Тажеранская степь входит в&nbsp;состав Прибайкальского национального парка, для посещения этой заповедной территории требуется разрешение.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/tajeranskaya_step/Tajeranskaya_step_2.jpg" alt="Карликовая лилия и степная растительность" loading="lazy">
    </div>
</div>
<!-- Блок 3: Подземные сокровища и пещеры -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Подземные сокровища и&nbsp;пещеры</h2>
        <p class="modalBlock__description">
            Главные сокровища степи скрыты под землей&nbsp;&mdash; это десятки пещер, где селились древние люди и&nbsp;где, по&nbsp;поверьям, до&nbsp;сих пор обитают духи.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/tajeranskaya_step/Tajeranskaya_step_3.jpg" alt="Пещеры Тажеранской степи" loading="lazy">
    </div>
</div>
<!-- Блок 4: Петроглифы — послания древних -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Петроглифы&nbsp;&mdash; послания древних</h2>
        <p class="modalBlock__description">
            На&nbsp;утесе Саган-Заба сохранилась уникальная галерея петроглифов каменного века: летящие гуси, бегущие олени и&nbsp;танцующие шаманы, которые, по&nbsp;легенде, были оставлены спустившимися с&nbsp;неба богами. Ученые датируют эти рисунки II&nbsp;тыс.&nbsp;до&nbsp;н.э.
        </p>
        <p class="modalBlock__description">
            Не&nbsp;менее впечатляют петроглифы на&nbsp;горе Сахюрта, где различимы изображения беременной женщины, лошадей, лосей и&nbsp;быков&nbsp;&mdash; безмолвные свидетельства древней цивилизации, существовавшей на&nbsp;берегах Байкала четыре тысячи лет назад.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/tajeranskaya_step/Tajeranskaya_step_4.jpg" alt="Петроглифы на утесе Саган-Заба" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Из&nbsp;Иркутска до&nbsp;села Еланцы можно добраться на&nbsp;автобусе, который соединяет город с&nbsp;островом Ольхон, или на&nbsp;автомобиле, время в&nbsp;пути&nbsp;&mdash; около 3&nbsp;часов.
        </p>
        <p class="modalBlock__description">
            От&nbsp;Еланцов начинаются дороги и&nbsp;тропы, ведущие в&nbsp;сердце Тажеранской степи, к&nbsp;побережью Байкала и&nbsp;к&nbsp;местам расположения петроглифов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/tajeranskaya_step/kak_dobratsya.jpg" alt="Карта дорог до Тажеранской степи" loading="lazy">
    </div>
</div>`
        }

    ],

    // Культурный код
    culture: [
        {
            id: 'irkutsk_kraevedcheskii_musei',
            title: 'Иркутский краеведческий музей',
            image: '../../img/irkutsk/cards_culture/Kraeevedcheskiy_muzey_Irkutsk_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Краеведческий музей Иркутска</h1>
</div>
<!-- Блок 1: Один из старейших музеев России -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Один из&nbsp;старейших музеев России</h2>
        <p class="modalBlock__description">
            Иркутский областной краеведческий музей, основанный в&nbsp;1782 году по&nbsp;инициативе губернатора Франца Клички, является одним из&nbsp;старейших музеев России.
        </p>
        <p class="modalBlock__description">
            Становление музея как центра изучения Сибири неразрывно связано с&nbsp;открытием в&nbsp;1851 году Сибирского отдела Русского географического общества, под эгидой которого музей начал систематическое научное изучение региона.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kraeevedcheskiy_muzey/Kraeevedcheskiy_muzey_Irkutsk_1.jpg" alt="Главное здание Краеведческого музея на ул. Карла Маркса" loading="lazy">
    </div>
</div>
<!-- Блок 2: История и возрождение -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">История и&nbsp;возрождение из&nbsp;пепла</h2>
        <p class="modalBlock__description">
            Трагической вехой в&nbsp;истории музея стал пожар 1879&nbsp;года, уничтоживший не&nbsp;только здание на&nbsp;Тихвинской площади, но&nbsp;и&nbsp;бесценные коллекции&nbsp;&mdash; более 22&nbsp;тысяч экспонатов и&nbsp;уникальную библиотеку.
        </p>
        <p class="modalBlock__description">
            Благодаря поддержке горожан, уже через четыре года было построено новое каменное здание, торжественно открытое в&nbsp;октябре 1883&nbsp;года. Сегодня музейное собрание насчитывает свыше 500 тысяч экспонатов, представленных в&nbsp;семи тематических отделах.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kraeevedcheskiy_muzey/Kraeevedcheskiy_muzey_Irkutsk_2.jpg" alt="Историческое здание музея или изображение пожара 1879 года" loading="lazy">
    </div>
</div>
<!-- Блок 3: Основные отделы: История и Природа -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Основные отделы: История и&nbsp;Природа</h2>
        <p class="modalBlock__description">
            <strong>Отдел истории</strong> размещается в&nbsp;главном здании музея. Его хронологическая экспозиция последовательно раскрывает историю региона: от&nbsp;залов, посвященных коренным народам и&nbsp;археологическим находкам, до&nbsp;разделов о&nbsp;русском освоении Приангарья с&nbsp;XVII века и&nbsp;промышленном развитии.
        </p>
        <p class="modalBlock__description">
            <strong>Отдел природы</strong> занимает два этажа особняка. Палеонтологические, геологические и&nbsp;зоологические коллекции представляют уникальную природу Предбайкалья, включая редкие минералы, окаменелости и&nbsp;таксидермические экспонаты местной фауны.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kraeevedcheskiy_muzey/Kraeevedcheskiy_muzey_Irkutsk_3.jpg" alt="Экспозиции отделов истории и природы" loading="lazy">
    </div>
</div>
<!-- Блок 4: Уникальные объекты: от Ледокола до Музея Распутина -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Уникальные объекты музея</h2>
        <p class="modalBlock__description">
            Музей включает несколько уникальных площадок:
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Ледокол &laquo;Ангара&raquo;</strong>&nbsp;&mdash; один из&nbsp;старейших в&nbsp;мире сохранившихся судов такого типа, музей на&nbsp;воде, посвященный истории судоходства.</li>
            <li class="modalBlock__listItem"><strong>Экспозиция &laquo;Окно в&nbsp;Азию&raquo;</strong> освещает вклад иркутских исследователей в&nbsp;освоение азиатских территорий.</li>
            <li class="modalBlock__listItem"><strong>Мемориальный музей В.Г. Распутина</strong> хранит личные вещи писателя, раскрывая его творческую лабораторию.</li>
            <li class="modalBlock__listItem"><strong>&laquo;Музейная студия&raquo;</strong> сочетает историческую экспозицию с&nbsp;динамичной программой мероприятий и&nbsp;фестивалей.</li>
        </ul>
        <p class="modalBlock__description">
            Каждый отдел создает иммерсивное пространство, позволяющее погрузиться в&nbsp;разные аспекты истории и&nbsp;культуры Восточной Сибири.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kraeevedcheskiy_muzey/Kraeevedcheskiy_muzey_Irkutsk_4.jpg" alt="Ледокол 'Ангара' и залы Музея Распутина" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться (адреса отделов) -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться и&nbsp;адреса отделов</h2>
        <p class="modalBlock__description">
            Музей располагается в&nbsp;нескольких зданиях в&nbsp;центре Иркутска:
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>Отдел истории:</strong> ул. Карла Маркса, 2.</li>
            <li class="modalBlock__listItem"><strong>Отдел природы:</strong> ул. Карла Маркса, 11.</li>
            <li class="modalBlock__listItem"><strong>Музейная студия:</strong> ул. Карла Маркса, 13.</li>
            <li class="modalBlock__listItem"><strong>Окно в&nbsp;Азию:</strong> ул.&nbsp;3&nbsp;Июля, 21А.</li>
            <li class="modalBlock__listItem"><strong>Ледокол &laquo;Ангара&raquo;:</strong> просп. Маршала Жукова, 36А/1 (набережная Ангары у&nbsp;плотины ГЭС).</li>
            <li class="modalBlock__listItem"><strong>Музей В.Г. Распутина:</strong> ул. Свердлова, 20.</li>
        </ul>
        <p class="modalBlock__description">
            Основные здания находятся в&nbsp;пешей доступности друг от&nbsp;друга в&nbsp;историческом центре. Добраться можно на&nbsp;общественном транспорте (автобусы, троллейбусы) до&nbsp;остановок &laquo;Центральный рынок&raquo;, &laquo;Сквер им. Кирова&raquo; или &laquo;Драматический театр&raquo;.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/kraeevedcheskiy_muzey/kak_dobratsya.jpg" alt="Карта центра Иркутска с расположением отделов музея" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'etnopark_zolotaya_orda',
            title: 'Этнопарк «Золотая Орда»',
            image: '../../img/irkutsk/cards_culture/Zolotaya_orda_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Этнопарк &laquo;Золотая орда&raquo;</h1>
</div>
<!-- Блок 1: Погружение в мир бурятских традиций -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Погружение в&nbsp;мир бурятских традиций</h2>
        <p class="modalBlock__description">
            Этнопарк &laquo;Золотая орда&raquo;&nbsp;&mdash; культурный комплекс в&nbsp;часе езды от&nbsp;Иркутска, погружающий посетителей в&nbsp;мир бурятских традиций и&nbsp;кочевой культуры.
        </p>
        <p class="modalBlock__description">
            Этнопарк по&nbsp;дороге на&nbsp;Ольхон является важным центром сохранения и&nbsp;популяризации наследия коренных народов Прибайкалья, создавая живое пространство диалога культур.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zolotaya_orda/Zolotaya_orda_1.jpg" alt="Вход в этнопарк 'Золотая орда'" loading="lazy">
    </div>
</div>
<!-- Блок 2: Архитектура и сердце парка -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Архитектура и&nbsp;сердце парка</h2>
        <p class="modalBlock__description">
            Архитектурной доминантой парка является величественная Хан-Юрта из&nbsp;ценных пород дерева, чьи резные орнаменты отражают духовные ценности бурятского народа.
        </p>
        <p class="modalBlock__description">
            Это многофункциональное пространство служит площадкой для выставок народных промыслов, творческих встреч и&nbsp;кинопоказов, здесь гости могут приобрести уникальные сувениры местных мастеров.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zolotaya_orda/Zolotaya_orda_2.jpg" alt="Хан-Юрта и внутренние интерьеры этнопарка" loading="lazy">
    </div>
</div>
<!-- Блок 3: Интерактивные программы и мастер-классы -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Интерактивные программы и&nbsp;мастер-классы</h2>
        <p class="modalBlock__description">
            Интерактивная программа парка довольно разнообразна, от&nbsp;обучения стрельбе из&nbsp;традиционного лука и&nbsp;бурятской борьбы до&nbsp;участия в&nbsp;древних обрядах и&nbsp;исторических реконструкциях.
        </p>
        <p class="modalBlock__description">
            Гастрономические мастер-классы знакомят с&nbsp;секретами бурятской кухни, а&nbsp;фольклорные коллективы демонстрируют искусство горлового пения и&nbsp;зажигательный танец ёхор под аккомпанемент национальных инструментов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zolotaya_orda/Zolotaya_orda_3.jpg" alt="Мастер-классы, стрельба из лука и танцы в парке" loading="lazy">
    </div>
</div>
<!-- Блок 4: Образовательные программы и диалог культур -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Образовательные программы и&nbsp;диалог культур</h2>
        <p class="modalBlock__description">
            Особое внимание уделяется образовательным программам для школьников и&nbsp;студентов, включающим квесты и&nbsp;познавательные экскурсии.
        </p>
        <p class="modalBlock__description">
            Этнопарк органично сочетает аутентичность традиций с&nbsp;современным подходом к&nbsp;их&nbsp;презентации, создавая живое пространство диалога культур в&nbsp;самом сердце бурятских земель.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zolotaya_orda/Zolotaya_orda_4.jpg" alt="Дети на экскурсии и образовательные мероприятия в парке" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Этнопарк &laquo;Золотая орда&raquo; находится на&nbsp;72-м километре Качугского тракта, в&nbsp;окрестностях поселка Усть-Ордынский.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> от&nbsp;автовокзала Иркутска до&nbsp;поселка Усть-Ордынский можно добраться на&nbsp;маршрутном такси. От&nbsp;остановки в&nbsp;поселке до&nbsp;парка&nbsp;&mdash; около 4&nbsp;км пешком или на&nbsp;местном такси.</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> по&nbsp;Качугскому тракту (трассе в&nbsp;сторону Ольхона). Время в&nbsp;пути из&nbsp;Иркутска&nbsp;&mdash; около часа. На&nbsp;территории парка есть бесплатная парковка.</li>
            <li class="modalBlock__listItem"><strong>Важно:</strong> Перед посещением рекомендуется уточнить режим работы парка, расписание программ и&nbsp;мастер-классов, а&nbsp;также наличие предварительной записи на&nbsp;официальных ресурсах или по&nbsp;телефону.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/zolotaya_orda/kak_dobratsya.jpg" alt="Схема проезда к этнопарку 'Золотая орда' на карте" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'budda_stoupa_ogoe',
            title: 'Буддийская ступа на Огое',
            image: '../../img/irkutsk/cards_culture/Buddiyskaya_stopa_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Буддийская ступа</h1>
</div>
<!-- Блок 1: Символичный духовный памятник Байкала -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Символичный духовный памятник Байкала</h2>
        <p class="modalBlock__description">
            Ступа Просветления на&nbsp;высшей точке безлюдного острова Огой&nbsp;&mdash; один из&nbsp;самых символичных духовных памятников Байкала.
        </p>
        <p class="modalBlock__description">
            Место расположения ступы глубоко символично&nbsp;&mdash; с&nbsp;воздуха очертания острова Огой напоминают танцующую дакини (женскую богиню, носительницу тайных знаний), а&nbsp;ступа расположена как раз в&nbsp;области сердца этого природного силуэта.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/buddiyskaya_stopa/Buddiyskaya_stopa_1.jpg" alt="Буддийская ступа на острове Огой на фоне Байкала" loading="lazy">
    </div>
</div>
<!-- Блок 2: Реликвии и символизм -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Священные реликвии и&nbsp;символизм</h2>
        <p class="modalBlock__description">
            Внутри ступы хранятся особые реликвии, включая священные тексты, и&nbsp;бронзовая статуэтка женского божества Трома Нагмо, которую последователи тибетского буддизма почитают как мать всех Будд.
        </p>
        <p class="modalBlock__description">
            Огой, как и&nbsp;соседний Ольхон, сохранил первозданную чистоту&nbsp;&mdash; здесь никогда не&nbsp;было постоянных поселений, что делает его &laquo;чистой землей&raquo; с&nbsp;энергетической точки зрения для возведения такого сооружения.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/buddiyskaya_stopa/Buddiyskaya_stopa_2.jpg" alt="Детали и символы буддийской ступы" loading="lazy">
    </div>
</div>
<!-- Блок 3: История возведения и значение -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">История возведения и&nbsp;духовное значение</h2>
        <p class="modalBlock__description">
            Ступа, возведенная в&nbsp;2005&nbsp;году, стала важным духовным и&nbsp;туристическим объектом. Ежегодно сюда прибывают паломники и&nbsp;туристы, особенно во&nbsp;время буддийских праздников, когда ламы проводят особые обряды.
        </p>
        <p class="modalBlock__description">
            Проект, инициированный московским Дхарма-центром, символизирует диалог культур, хотя и&nbsp;поднимает вопросы сохранения баланса между духовным поиском и&nbsp;экологической ответственностью в&nbsp;заповедном месте.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/buddiyskaya_stopa/Buddiyskaya_stopa_3.jpg" alt="Паломники и проведение обрядов у ступы" loading="lazy">
    </div>
</div>
<!-- Блок 4: Напоминание о хрупкости и уважении -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Напоминание о&nbsp;хрупкости и&nbsp;уважении</h2>
        <p class="modalBlock__description">
            Сегодня белоснежная ступа на&nbsp;фоне байкальских просторов служит не&nbsp;только местом поклонения, но&nbsp;и&nbsp;напоминанием о&nbsp;хрупкости природы и&nbsp;уважении к&nbsp;многовековым традициям разных конфессий, сосуществующих на&nbsp;берегах священного озера.
        </p>
        <p class="modalBlock__description">
            Это место силы, притягивающее людей, ищущих уединения, духовного очищения и&nbsp;единения с&nbsp;величественной природой Байкала.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/buddiyskaya_stopa/Buddiyskaya_stopa_4.jpg" alt="Ступа на фоне байкальских пейзажей" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Добраться до&nbsp;острова Огой и&nbsp;ступы Просветления можно только по&nbsp;воде.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>С&nbsp;острова Ольхон:</strong> из&nbsp;поселков Хужир или Харанцы на&nbsp;катере или моторной лодке. Это самый популярный и&nbsp;короткий маршрут.</li>
            <li class="modalBlock__listItem"><strong>С&nbsp;материка:</strong> из&nbsp;поселка Сахюрта (МРС) или других населенных пунктов на&nbsp;материковом побережье Малого Моря.</li>
            <li class="modalBlock__listItem"><strong>В&nbsp;составе тура:</strong> многие туристические компании Иркутска и&nbsp;Ольхона предлагают однодневные экскурсии на&nbsp;остров Огой, включая трансфер на&nbsp;катере.</li>
            <li class="modalBlock__listItem"><strong>Важно:</strong> Посещение ступы требует уважительного отношения. Принято обходить ступу по&nbsp;часовой стрелке, можно оставить символическое подношение (обычно монетку или зерно).</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/buddiyskaya_stopa/kak_dobratsya.jpg" alt="Карта Малого Моря с путями до острова Огой" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'zheleznaya_doroga',
            title: 'Кругобайкальская железная дорога',
            image: '../../img/irkutsk/cards_culture/KZD_0.jpg',
            modalContent:
`<div class="modalHeader">
    <h1 class="modalHeader__title">Кругобайкальская железная дорога</h1>
</div>
<!-- Блок 1: Уникальный природно-исторический ансамбль -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Уникальный природно-исторический ансамбль</h2>
        <p class="modalBlock__description">
            Кругобайкальская железная дорога (КБЖД)&nbsp;&mdash; это уникальное место, где индустриальная мощь стальных путей встречается с&nbsp;дикой красотой скал и&nbsp;бирюзовой водной гладью, создавая впечатляющий природно-исторический ансамбль.
        </p>
        <p class="modalBlock__description">
            Современная Кругобайкальская железная дорога представляет собой участок в&nbsp;89&nbsp;км от&nbsp;порта Байкал до&nbsp;поселка Култук, сохранившийся от&nbsp;первоначальной 260-километровой трассы. Этот участок когда-то был частью Транссибирской магистрали, но&nbsp;после строительства Иркутской ГЭС превратился в&nbsp;тупиковую ветку, сохранившую особую атмосферу старой железной дороги.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/krugobaikalskaya_zheleznaya_doroga/KZD_1.jpg" alt="Поезд на КБЖД на фоне Байкала и скал" loading="lazy">
    </div>
</div>
<!-- Блок 2: Погружение в историю инженерной мысли -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Погружение в&nbsp;историю инженерной мысли</h2>
        <p class="modalBlock__description">
            Сегодня путешествие по&nbsp;КБЖД&nbsp;&mdash; погружение в&nbsp;историю инженерной мысли. Ретропоезд следует мимо ажурных виадуков, каменных арок и&nbsp;тоннелей, открывая виды на&nbsp;исток Ангары.
        </p>
        <p class="modalBlock__description">
            Сегодня по&nbsp;этому историческому маршруту курсируют три типа туристических составов: современный тепловоз, ретро-паровоз и&nbsp;комфортабельный рельсовый автобус. Путешествие обычно начинается из&nbsp;Иркутска или Листвянки и&nbsp;длится около 12&nbsp;часов, включая остановки у&nbsp;ключевых достопримечательностей.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/krugobaikalskaya_zheleznaya_doroga/KZD_2.jpg" alt="Виадуки и тоннели КБЖД" loading="lazy">
    </div>
</div>
<!-- Блок 3: История строительства «Золотой пряжки» -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">История строительства &laquo;Золотой пряжки&raquo;</h2>
        <p class="modalBlock__description">
            История Кругобайкальской железной дороги начинается с&nbsp;императорского указа Александра III от&nbsp;17&nbsp;мая 1891&nbsp;года, положившего начало грандиозному проекту Транссибирской магистрали. Строительство КБЖД как ключевого участка этой артерии велось с&nbsp;1899 по&nbsp;1905&nbsp;год.
        </p>
        <p class="modalBlock__description">
            Технологии того времени делали строительство настоящим подвигом. Прокладка тоннелей велась преимущественно вручную, с&nbsp;использованием взрывчатки&nbsp;&mdash; рабочие продвигались всего на&nbsp;50&nbsp;см в&nbsp;сутки.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/krugobaikalskaya_zheleznaya_doroga/KZD_3.jpg" alt="Исторические фото строительства КБЖД" loading="lazy">
    </div>
</div>
<!-- Блок 4: Инженерное чудо: тоннели и галереи -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Инженерное чудо: тоннели и&nbsp;галереи</h2>
        <p class="modalBlock__description">
            Дорога получила поэтичное название &laquo;Золотая пряжка&raquo; не&nbsp;только из-за баснословной стоимости (на&nbsp;участке длиной 89&nbsp;км построили 40&nbsp;тоннелей, 16&nbsp;каменных галерей и&nbsp;280 подпорных стенок), но&nbsp;и&nbsp;за&nbsp;роль связующего звена в&nbsp;Транссибирской магистрали.
        </p>
        <p class="modalBlock__description">
            Главное чудо КБЖД&nbsp;&mdash; 40&nbsp;тоннелей общей протяженностью 9&nbsp;км, что составляет десятую часть всего пути. Эти подземные сооружения пробивали сквозь скальные мысы в&nbsp;течение 6&minus;12 месяцев каждый, часто дополняя их&nbsp;каменными галереями с&nbsp;обеих сторон.
        </p>
        <p class="modalBlock__description">
            Сегодня поездка по&nbsp;КБЖД позволяет увидеть Байкал с&nbsp;уникального ракурса&nbsp;&mdash; через окно ретропоезда, следующего по&nbsp;самому живописному железнодорожному маршруту России.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/krugobaikalskaya_zheleznaya_doroga/KZD_4.jpg" alt="Тоннели и каменные галереи КБЖД" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться и посетить -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться и&nbsp;посетить</h2>
        <p class="modalBlock__description">
            Путешествие по&nbsp;Кругобайкальской железной дороге организуется туристическими компаниями.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem">Туры обычно стартуют из&nbsp;Иркутска. Туристов доставляют автобусом до&nbsp;начальной точки маршрута (станция Слюдянка, Култук или порт Байкал), где происходит посадка на&nbsp;поезд.</li>
            <li class="modalBlock__listItem">Существуют как однодневные, так и&nbsp;двухдневные туры с&nbsp;ночевкой в&nbsp;одном из&nbsp;поселков на&nbsp;берегу Байкала.</li>
            <li class="modalBlock__listItem">Бронирование тура необходимо производить заранее, особенно в&nbsp;летний сезон. Расписание, типы составов и&nbsp;стоимость можно уточнить на&nbsp;сайтах туроператоров Иркутска.</li>
            <li class="modalBlock__listItem">Самостоятельное посещение отдельных участков дороги пешком также возможно, но&nbsp;требует подготовки и&nbsp;учета расписания редких рабочих поездов.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/krugobaikalskaya_zheleznaya_doroga/kak_dobratsya.jpg" alt="Схема маршрута КБЖД и карта" loading="lazy">
    </div>
</div>`
        },


        {
            id: 'otec_baikal',
            title: '«Отец Байкал»',
            image: '../../img/irkutsk/cards_culture/Otec_Baikal_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">&laquo;Отец Байкал&raquo;</h1>
</div>
<!-- Блок 1: Философское осмысление духа озера -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Философское осмысление духа озера</h2>
        <p class="modalBlock__description">
            Скульптурная композиция &laquo;Отец Байкал&raquo; (Хранитель Байкала) работы бурятского мастера Даши Намдакова представляет собой философское осмысление образа духа великого озера.
        </p>
        <p class="modalBlock__description">
            Композиция, установленная на&nbsp;возвышенности острова Ольхон, изображает древнюю лиственницу с&nbsp;ветвями, переходящими в&nbsp;бронзовые оленьи рога&nbsp;&mdash; символ царского рода и&nbsp;водной стихии в&nbsp;местной мифологии.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/otec_baikal/Otec_Baikal_1.jpg" alt="Скульптура 'Отец Байкал' на фоне озера" loading="lazy">
    </div>
</div>
<!-- Блок 2: Многозначный образ Хранителя -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Многозначный образ Хранителя</h2>
        <p class="modalBlock__description">
            В&nbsp;отличие от&nbsp;традиционных представлений о&nbsp;духе Байкала как о&nbsp;старце или девочке, Намдаков создал многозначный образ. В&nbsp;наклоне ствола угадывается лик древнего существа, склонившегося под тяжестью лет или экологических проблем.
        </p>
        <p class="modalBlock__description">
            В&nbsp;образе Хранителя Байкала раскрывается вся история жизни дерева: от&nbsp;хрупкого ростка, поборовшего стихии, до&nbsp;засохшего великана, в&nbsp;трещинах коры которого угадывается образ древнего старика.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/otec_baikal/Otec_Baikal_2.jpg" alt="Детали скульптуры: лицо в стволе и бронзовые рога" loading="lazy">
    </div>
</div>
<!-- Блок 3: Символизм и ритуал -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Символизм и&nbsp;ритуал</h2>
        <p class="modalBlock__description">
            На&nbsp;ветвях подвешены колокольчики, чей звон на&nbsp;ветру воспринимается как голос байкальских духов. Особый ритуал связан с&nbsp;большим колоколом внутри дупла&nbsp;&mdash; чтобы позвонить в&nbsp;него, нужно оставить подношение в&nbsp;специальных углублениях-даровницах.
        </p>
        <p class="modalBlock__description">
            Выбор лиственницы как материала глубоко символичен&nbsp;&mdash; это дерево особо почиталось шаманами и&nbsp;могло достигать 800-летнего возраста.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/otec_baikal/Otec_Baikal_3.jpg" alt="Колокольчики и ритуальные детали скульптуры" loading="lazy">
    </div>
</div>
<!-- Блок 4: Мост между мифами и реальностью -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Мост между мифами и&nbsp;реальностью</h2>
        <p class="modalBlock__description">
            Скульптура органично вписана в&nbsp;ландшафт: с&nbsp;утеса открывается панорама озера, а&nbsp;сама композиция становится мостом между мифами прошлого и&nbsp;экологическими вызовами настоящего.
        </p>
        <p class="modalBlock__description">
            Автор сознательно не&nbsp;раскрывает полную символику, предлагая зрителю самостоятельно интерпретировать этот мощный образ, который отлично дополняет колорит и&nbsp;мистическую энергетику Ольхона.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/otec_baikal/Otec_Baikal_4.jpg" alt="Панорама Байкала со смотровой площадки у скульптуры" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Скульптура находится на&nbsp;северо-восточной оконечности острова Ольхон, недалеко от&nbsp;поселка Узуры.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> из&nbsp;главного поселка острова Хужир по&nbsp;основной островной дороге на&nbsp;северо-восток. Время в&nbsp;пути&nbsp;&mdash; около 1,5&nbsp;часов. Дорога грунтовая, рекомендуется использовать автомобиль с&nbsp;повышенной проходимостью.</li>
            <li class="modalBlock__listItem">Посещение скульптуры&nbsp;&mdash; бесплатное. Рекомендуется проявлять уважение к&nbsp;сакральному месту и&nbsp;оставлять подношения (монетки, ленточки) только в&nbsp;специально отведенных местах.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/otec_baikal/kak_dobratsya.jpg" alt="Карта острова Ольхон с указанием места нахождения скульптуры" loading="lazy">
    </div>
</div>`
        },

        {
            id: 'talcy',
            title: '«Тальцы»',
            image: '../../img/irkutsk/cards_tochki/Talcy_0.jpg',
            modalContent:

`<div class="modalHeader">
    <h1 class="modalHeader__title">Музей Тальцы</h1>
</div>
<!-- Блок 1: Живой портал в историю Прибайкалья -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Живой портал в&nbsp;историю Прибайкалья</h2>
        <p class="modalBlock__description">
            Архитектурно-этнографический музей &laquo;Тальцы&raquo;&nbsp;&mdash; это живой портал в&nbsp;историю Прибайкалья, где под открытым небом сохраняются уникальные памятники деревянного зодчества XVII&ndash;XX&nbsp;веков.
        </p>
        <p class="modalBlock__description">
            На&nbsp;живописном берегу Ангары ретроспективно воссозданы четыре историко-культурные зоны: русская, бурятская, эвенкийская и&nbsp;тофаларская, позволяющие погрузиться в&nbsp;материальную и&nbsp;духовную культуру народов Сибири.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/talcy/Talcy_1.jpg" alt="Панорама музея Тальцы на берегу Ангары" loading="lazy">
    </div>
</div>
<!-- Блок 2: Шедевры деревянного зодчества -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Шедевры деревянного зодчества</h2>
        <p class="modalBlock__description">
            Центром коллекции стали подлинные шедевры оборонного и&nbsp;культового зодчества&nbsp;&mdash; Спасская проезжая башня 1667 года и&nbsp;Казанская церковь 1679 года из&nbsp;Илимского острога, спасенные от&nbsp;затопления при строительстве Усть-Илимской ГЭС.
        </p>
        <p class="modalBlock__description">
            Эти уникальные сооружения являются редчайшими примерами сибирской фортификации и&nbsp;храмового зодчества. Помимо воссозданных построек в&nbsp;музее хранятся более 30&nbsp;тысяч подлинных экспонатов.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/talcy/Talcy_2.jpg" alt="Спасская башня и Казанская церковь в Тальцах" loading="lazy">
    </div>
</div>
<!-- Блок 3: Живая традиция и ремесла -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Живая традиция и&nbsp;ремесла</h2>
        <p class="modalBlock__description">
            Музей живет активной творческой жизнью: здесь регулярно проводятся народные праздники&nbsp;&mdash; от&nbsp;Рождества до&nbsp;Троицы, работает международный фестиваль &laquo;Хоровод ремесел&raquo;.
        </p>
        <p class="modalBlock__description">
            Берестяные изделия, гончарное искусство и&nbsp;традиционное ткачество сохраняются усилиями местных мастеров. Это место, где история перестает быть учебным материалом и&nbsp;становится осязаемой реальностью&nbsp;&mdash; от&nbsp;замков крепостных башен до&nbsp;аромата свежеиспеченного хлеба в&nbsp;крестьянской избе.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/talcy/Talcy_3.jpg" alt="Мастера ремесленники и народные праздники в музее" loading="lazy">
    </div>
</div>
<!-- Блок 4: Развитие и современность -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Развитие и&nbsp;современность</h2>
        <p class="modalBlock__description">
            Продолжается реконструкция Илимского острога и&nbsp;создание Трактовой зоны, что делает музей динамично развивающимся проектом.
        </p>
        <p class="modalBlock__description">
            Начать знакомство с&nbsp;музеем можно заранее с&nbsp;помощью виртуальных экскурсий на&nbsp;официальном сайте музея.
        </p>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/talcy/Talcy_4.jpg" alt="Реконструкция и новые экспозиции музея Тальцы" loading="lazy">
    </div>
</div>
<!-- Блок 5: Как добраться -->
<div class="modalBlock">
    <div class="modalBlock__text">
        <h2 class="modalBlock__title">Как добраться</h2>
        <p class="modalBlock__description">
            Музей находится на&nbsp;берегу Ангары, в&nbsp;поселке Тальцы, на&nbsp;47-м километре Байкальского тракта.
        </p>
        <ul class="modalBlock__list">
            <li class="modalBlock__listItem"><strong>На&nbsp;общественном транспорте:</strong> автобусом от&nbsp;Листвянки или с&nbsp;автовокзала Иркутска (маршруты, следующие в&nbsp;сторону Листвянки).</li>
            <li class="modalBlock__listItem"><strong>На&nbsp;автомобиле:</strong> по&nbsp;Байкальскому тракту из&nbsp;Иркутска, время в&nbsp;пути&nbsp;&mdash; около часа.</li>
            <li class="modalBlock__listItem">Музей работает круглый год, рекомендуется уточнять график работы и&nbsp;стоимость билетов на&nbsp;официальном сайте перед посещением.</li>
        </ul>
    </div>
    <div class="modalBlock__image">
        <img src="../../img/irkutsk/cards_modal/talcy/kak_dobratsya.jpg" alt="Схема проезда к музею Тальцы на карте" loading="lazy">
    </div>
</div>`
        }

    ]

};

window.irkutskData = irkutskData;
