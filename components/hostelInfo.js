'use strict';


const hostelInfo = () => {
    const blockInfo = document.querySelector('.hostelInfo-blockInfo'),
        buttonReadMore = document.querySelector('.hostelInfo-buttonReadMore'),
        modalIconHostel = document.querySelector('.hostelInfo-modalIcon');


    const infoHostel = `                    
    <p class="hostelInfo-blockInfo-txt">
        Хостел находится в тихом коттеджном районе г. Киева с хорошей
        транспортной развязкой (скоростной
        трамвай №3 и №2, маршрутное такси №304 и №304д и другие автобусы и троллейбусы). До
        ближайшей
        станции метро Академгородок или Политехнический институт можно добраться за 15 мин. Рядом с
        хостелом
        находятся магазины и рынок.
        Хостел оборудован всем необходимым. Просторная кухня — столовая , мойка для посуды, горячая и
        холодная вода, газовые плиты, холодильники, телевизор. Современный санузел имеет достаточное
        количество
        туалетов, писсуаров, умывальников с зеркалами и подсветкой, душевая кабина, для стирки белья
        имеются
        стиральные машины. На территории двора имеется место для сушки белья и парковки автомобилей.
        Комнаты
        теплые и светлые, оборудованные различным количеством двухъярусных кроватей, тумбочками,
        вешалками для
        одежды, зеркалами, а также в комнатах есть стол и стулья. Количество койко-мест в разных
        комнатах
        рассчитано на 8, 10, 12 и 22 человека. Каждое койко-место включает в себя: кровать, подушку,
        матрац,
        одеяло. На территории имеется место для парковки нескольких автомобилей или автобусов.
    </p>
    `;

    blockInfo.innerHTML = infoHostel.split('').slice(0, 700).join('') + '...';

    const openModalIconHostel = () => {
        modalIconHostel.innerHTML = infoHostel;
        buttonReadMore.addEventListener('click', () => {

        })
    }

    openModalIconHostel();
}

export default hostelInfo;