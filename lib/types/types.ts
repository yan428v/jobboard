export enum Cities {
    ChooseCity = 'Выбрать город',
    AllCountry = 'Вся страна',
    North = 'Север',
    Center = 'Центр',
    South = 'Юг',
    // Города Центрального региона
    TelAviv = 'Тель-Авив',
    RishonLeZion = 'Ришон ле-Цион',
    PetahTikva = 'Петах-Тиква',
    Holon = 'Холон',
    RamatGan = 'Рамат-Ган',
    BatYam = 'Бат-Ям',
    Rehovot = 'Реховот',
    Herzliya = 'Херцлия',
    KfarSaba = 'Кфар-Сава',
    Raanana = 'Раанана',
    Givatayim = 'Гиватаим',
    Yavne = 'Явне',
    Ramla = 'Рамла',
    Lod = 'Лод',
    ModiinMaccabimReut = 'Модиин-Маккабим-Реут',
    KiryatOno = 'Кирьят-Оно',
    NessZiona = 'Нес-Циона',
    GivatShmuel = 'Гиват-Шмуэль',
    RamatHaSharon = 'Рамат-Ха-Шарон',
    OrYehuda = 'Ор-Йеуда',
    YehudMonosson = 'Иегуд-Моноссон',
    BneiBrak = 'Бней-Брак',
    KiryatGat = 'Кирьят-Гат',
    GivatZeev = 'Гиват-Зеев',
    GaneiTikva = 'Ганей-Тиква',
    Gedera = 'Гедера',
    HerzliyaPituach = 'Херцлия-Питуах',

    // Города Северного региона
    Haifa = 'Хайфа',
    Nazareth = 'Назарет',
    Acre = 'Акко',
    Nahariya = 'Нагария',
    Tiberias = 'Тверия',
    Karmiel = 'Кармиэль',
    KiryatShmona = 'Кирьят-Шмона',
    Safed = 'Цфат',
    Shfaram = 'Шфарам',
    MaalotTarshiha = 'Маалот-Таршиха',
    MigdalHaEmek = 'Мигдаль-ха-Эмек',
    Afula = 'Афула',
    Hadera = 'Хадера',
    UmmAlFahm = 'Умм-аль-Фахм',
    BetShean = 'Бет-Шеан',
    KiryatBialik = 'Кирьят-Бялик',
    KiryatMozkin = 'Кирьят-Моцкин',
    Nahalal = 'Нахалал',
    TiratCarmel = 'Тират-Кармель',

    // Города Южного региона
    Beersheba = 'Беэр-Шева',
    Ashdod = 'Ашдод',
    Ashkelon = 'Ашкелон',
    Eilat = 'Эйлат',
    Dimona = 'Димона',
    Sderot = 'Сдерот',
    Ofakim = 'Офаким',
    Netivot = 'Нетивот',
    MitzpeRamon = 'Мицпе-Рамон',
    Arad = 'Арад',
    KiryatMalachi = 'Кирьят-Малахи',
    BeerYaakov = 'Беер-Яаков',
    BetShemesh = 'Бет-Шемеш',
}

export enum JobCategory {
    AllCategories = 'Все категории',
    CleaningAndHousekeeping = 'Уборка и помощь по хозяйству',
    ConstructionAndRepair = 'Строительство и ремонт',
    HotelsAndRestaurants = 'Гостиницы и рестораны',
    ManufacturingAndWarehousing = 'Производство и склады',
    CareAndSupervision = 'Уход и присмотр',
    DriversAndMechanics = 'Водители и автомеханики',
    OfficeAndManagement = 'Офис и менеджмент',
    ITAndRemoteWork = 'IT и удаленная работа',
    DeliveryAndCourierServices = 'Доставка и курьерские услуги',
    TradeAndRetailSales = 'Торговля и розничные продажи',
    FoodServiceWorkers = 'Работники общепита',
    SecurityAndSafety = 'Охрана и безопасность',
    PackersAndAssemblers = 'Упаковщики и комплектовщики',
    BeautyAndHealth = 'Красота и здоровье',
    EducationAndTutoring = 'Образование и репетиторство',
    Other = 'Другое'
}

export enum FilterButtonState {
    Open = 'open',
    Hide = 'hide',
    Apply = 'apply'
}

export interface JobPostData {
    id: number;
    name: string;
    phoneNumber: string;
    whatsappNumber?: string | null;
    telegramNumber?: string | null;
    city: string;
    jobTitle: string;
    jobDescription: string;
    jobCategory: string[];
    isVip: boolean;
    creationDate: Date
}
export interface JobPostCreateData {
    name: string;
    phoneNumber: string;
    whatsappNumber?: string | null;
    telegramNumber?: string | null;
    city: string;
    jobTitle: string;
    jobDescription: string;
    jobCategory: string[];
    isVip: boolean;
}
