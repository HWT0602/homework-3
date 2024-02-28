const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const more = document.querySelector('.hide-menu')

const item1 = document.querySelector('.hide-button1')
const item2 = document.querySelector('.hide-button2')
const item3 = document.querySelector('.hide-button3')
const item4 = document.querySelector('.hide-button4')
const item5 = document.querySelector('.hide-button5')
const item6 = document.querySelector('.hide-button6')

hamburger.addEventListener('click', function () {
    menu.classList.toggle('hide')
})

item1.addEventListener('click', function () {
    menu.classList.add('hide')
})
item2.addEventListener('click', function () {
    menu.classList.add('hide')
})
item3.addEventListener('click', function () {
    menu.classList.add('hide')
})
item4.addEventListener('click', function () {
    menu.classList.add('hide')
})
item5.addEventListener('click', function () {
    menu.classList.add('hide')
})
item6.addEventListener('click', function () {
    more.classList.toggle('hide')
})

let pic1 = document.querySelector('.pic1')
let pic2 = document.querySelector('.pic2')
let pic3 = document.querySelector('.pic3')

setInterval(function () {
    pic1.classList.toggle('hide');
    pic2.classList.toggle('hide');
    setInterval(function () {
        pic3.classList.toggle('hide');
        pic1.classList.toggle('hide');
        setInterval(function () {
            pic1.classList.toggle('hide');
            pic3.classList.toggle('hide');
        }, 3000)
    }, 3000)
}, 3000)

