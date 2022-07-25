const EQUIP = [
  {
    button: 'Диагностика',
    left: [
      { background: '#F3F9FF', title: 'GE Healthcare Discovery PET/CT 710', image: 'PET-KT-skaner-discovery-petct-710 1.png' },
      { background: '#FFFFFF', title: 'GE Healthcare Discovery PET/CT 610', image: 'Rectangle 3273.png' },
      { background: '#0E3FB5', color: '#fff', title: 'Siemens Biograph Horizon 3R', image: 'Rectangle 3159.png' },
    ],
    right: [
      { background: '#FFFFFF', title: 'GE Healthcare Discovery IQ', image: 'gettyimages-1308927398-2048x2048 1.png' },
      { background: '#0E3FB5', color: '#fff', title: 'GE Healthcare Discovery ST8', image: 'Rectangle 3274.png' },
      { background: '#EEEFF0', title: 'Siemens Biograph Horizon 4R', image: 'Rectangle 3158.png' },
    ],
  },
  {
    button: 'ОФЭКТ/КТ ',
    left: [
      { background: '#F3F9FF', title: 'GE Healthcare Discovery NM/CT 670', image: 'discovery-nmct-670 1.png' }
    ],
    right: [
      { background: '#FFFFFF', title: 'Siemens Symbia Intevo 6', image: '32567 1.png' }
    ]
  },
  {
    button: 'МРТ аппараты',
    left: [
      { background: '#F3F9FF', title: 'GE Healthcare Optima MR450w 1,5T', image: 'Optima_MR_450w_GEM_Suite_product 1.png' }
    ],
    right: [
      { background: '#FFFFFF', title: 'GE Healthcare Signa HDe 1.5T', image: 'education-general-gehc_education_signa_hdxt15_product_front_right_jpg 1.png' }
    ]
  },
  {
    button: 'Лучевая терапия',
    left: [
      { background: '#F3F9FF', title: 'Кибер-нож Accuray Cyber Knife', image: 'cyberknaft 1.png' },
      { background: '#fff', title: 'Лучевой ускоритель Varian', image: 'lineyniy-uskoritel-Varian-TrueBeam-STxsm 1.png' },
    ],
    right: [
      { background: '#fff', title: 'Гамма-нож LGK Perfexion ', image: 'kisspng-gamma-knife-radiosurgery-cyberknife-stereotactic-s-radiation-protection-5adf182872a346 1.png' },
      { background: '#0E3FB5', color: '#fff', title: 'Medical Systems Halcyon 2.0 ', image: 'halcyon-3 1.png' },
    ]
  },
  {
    button: 'КТ',
    right: [
      { background: '#0E3FB5', color: '#fff', title: 'GE Healthcare Optima CT580w 16', image: '03_3QOptimaCT660_540_Large_Right 1.png' }
    ]
  },
];

const CENTER_MAPS = [
  {
    button: 'ПЭТ/КТ и РФП',
    type: 'pet',
    image: '/images/map/pet.png'
  },
  {
    button: 'Лучевая терапия',
    type: 'terapy',
    image: '/images/map/terapy.png'
  },
  {
    button: 'Все',
    type: 'all',
    image: '/images/map/all.png'
  },
];

const NEWS = [
  {
    title: 'В Новосибирске начал работу крупнейший в России центр лучевой терапии',
    info: 'Новосибирск ',
    category: 'Ядерная медицина',
    date: '19.04.2022',
    img: "/images/news/center-1.jpg",
    link: 'https://www.medinvest-group.ru/news/v-novosibirske-nachal-rabotu-krupneyshiy-v-rossii-tsentr-luchevoy-terapii-.html'
  },
  {
    title: 'В Омской области открылся Центр лучевой терапии «ПЭТ-Технолоджи»',
    info: 'Омск',
    category: 'Ядерная медицина',
    date: '08.02.2022',
    img: "/images/news/center-2.jpg",
    link: 'https://www.medinvest-group.ru/news/v-omskoy-oblasti-otkrylsya-tsentr-luchevoy-terapii-pet-tekhnolodzhi.html'
  },
  {
    title: 'Группа Компаний «МедИнвестГрупп» открыла в Туле новый Центр ядерной медицины «ПЭТ-Технолоджи»',
    info: 'Тула ',
    category: 'Ядерная медицина',
    date: '21.12.2021',
    img: "/images/news/center-3.jpg",
    link: 'https://www.medinvest-group.ru/news/gruppa-kompaniy-medinvestgrupp-otkryla-v-tule-novyy-tsentr-yadernoy-meditsiny-pet-tekhnolodzhi-.html'
  }
];


const ADVANTAGES = [
  {
    title: 'Работа в системе ОМС',
    text: 'ГК МИГ стремится обеспечить максимальную доступность высокотехнологичной медицинской помощи для всех пациентов бесплатно за счет системы ОМС. Поэтому медицинские центры Группы глубоко интегрированы в системы здравоохранения регионов, проводят конференции, семинары и практикумы, способствующие расширению практики применения высокоточных методов в онкологии.',
  },
  {
    title: 'Оборудование премиум-класса',
    text: 'ГК МИГ оснащает свои центры лучшим оборудованием от мировых производителей, благодаря чему высокотехнологичная диагностика онкозаболеваний и медицинская помощь стала доступной для более чем 200 тысяч пациентов в год из 27 регионов России.'
  },
  {
    title: 'Собственное радиофармпроизводство',
    text: 'Развитие региональной сети центров ПЭТ/КТ диагностики базируется в том числе на работе собственных циклотронно-радиохимических комплексов (ЦРК) и ЦРК эксклюзивных партнеров. В общей сложности потребности всех центов сегодня обеспечивают 4 ЦРК, 5 ЦРК находятся на стадии строительства и проектирования. В 2022 году планируется запуск ЦРК в г. Новосибирске, который обеспечит потребностью в РФП весь Сибирский регион.'
  },
  {
    title: 'Контроль качества диагностики – собственный референс-центр',
    text: 'Сложные процедуры требуют наличие не только высокопрофессиональной команды, но и системы контроля качества на каждом этапе работы. Референс-центр – наша гордость. Система выборочного взаимного контроля, система кураторства, постоянная поддержка от экспертов федерального уровня гарантируют и докторам и пациентам уверенность в правильном диагнозе и максимально эффективном лечении.'
  },
  {
    title: 'Сильная команда профессионалов',
    text: 'Отбор лучших из лучших, возможности карьерного роста, система постоянного повышения квалификации, стимулы для развития научного потенциала, лидерских навыков – вся система создает условия для того, чтобы к нам приходили и оставались самые квалифицированные  кадры.'
  },
  {
    title: 'Индивидуальный маршрут диагностики и лечения для каждого пациента',
    text: 'Медицинские центры МИГ – это центры передовых технологий, способные обеспечить индивидуальный подход и внимательное отношение к каждому пациенту. Мы оказываем медицинские услуги преимущественно в рамках ОМС, но считаем принципиальным поддерживать максимально высокий уровень сервиса и подхода к работе с пациентом.'
  }
]

export {
  EQUIP,
  CENTER_MAPS,
  NEWS,
  ADVANTAGES
}