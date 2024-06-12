const hb = document.querySelector('.header_burger');
const menu = document.querySelector('.header_menu');
const body = document.querySelector('body');
const close = document.querySelector('.menu_cloze');
const bg = document.querySelector('.header_burger_bg')

hb.addEventListener('click', function() {
    menu.classList.toggle('open')
    body.classList.toggle('lock')

    bg.classList.toggle('open')
})

close.addEventListener('click', function() {
    menu.classList.remove('open')
    body.classList.remove('lock')

    bg.classList.remove('open')
})

bg.addEventListener('click', function() {
    menu.classList.remove('open')
    body.classList.remove('lock')

    bg.classList.remove('open')
})
