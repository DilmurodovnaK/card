const data = [{
        id: 1,
        name: 'Сыр',
        img: './img/dorblu.png',
        sale: null,
        price: '139.99 ₽',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»'
    },
    {
        id: 2,
        name: 'Молоко',
        img: './img/moloko.png',
        sale: '-50%',
        price: '469.99 ₽',

        desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...',

    },
    {
        id: 3,
        name: 'Сгушенка',
        img: './img/sgushenka.png',
        sale: '-50%',
        price: '79.9₽',
        desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ...',

    },
    {
        id: 4,
        name: 'Масло',
        img: './img/maslo.png',
        sale: null,
        price: '192.99 ₽',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',

    },
    {
        id: 5,
        name: 'Йогурт',
        img: './img/y.png',
        sale: null,
        price: '29.99 ₽',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',

    },
    {
        id: 6,
        name: 'Йогурт',
        img: './img/yogurt2.png',
        sale: null,
        price: '29.99 ₽',
        desc: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',

    },
];

const list = document.querySelector('.list');
const si = document.getElementById('search');
const sb = document.getElementById('sb');
const price = document.getElementById('price');
const desc = document.getElementById('desc');
const minPrice = document.getElementById('min-price');
window.addEventListener('DOMContentLoaded', function() {
    let displayitems = data.map(function(item) {
        return `
        <li id="el" data-id="${item.id}">
        <p class="heart">🤍</p>
        <h4>${item.name}</h4>
        <img src="${item.img}" alt="">
        <p class="text">${item.sale ?? ''}</p>
        <span>${item.price}</span>
        <p class="text">${item.desc}</p>
        <img class"star" src="/img/star.png">
        <button class="korzinu">В корзину</button>

        </li>
        `
    })
    displayitems = displayitems.join('')
    list.innerHTML = displayitems;

    const el = document.querySelectorAll("#el");

    for (let i = 0; i < el.length; i++) {
        console.log(el[i]);
    }

})


sb.addEventListener('click', function() {
    let displayitems = data.map(function(item) {
        if (si.value === item.name) {
            return `
            <li id="el" data-id="${item.id}">
        <h4>${item.name}</h4>
        <img src="${item.img}" alt="">
        <span>${item.price}</span>
        <p class="text">${item.desc}</p>
        <img class"star" src="/img/star.png">
        <button class="korzinu">В корзину</button>
        </li>
        `
        }

    })
    displayitems = displayitems.join('')
    list.innerHTML = displayitems;

})

price.addEventListener('click', function() {
    minPrice.value = price.value
    data.map(function(item) {
        if (item.price < price.value) {
            list.innerHTML += `<li>
           <h4>${item.name}</h4>
           <img src="${item.img}" alt="">
           <p class="text">${item.sale ?? ''}</p>
           <span>${item.price}</span>
           <p class="text">${item.desc}</p>
           <img class"star" src="/img/star.png">
           <button class="korzinu">В корзину</button>
           </li>`

        }
    })
})