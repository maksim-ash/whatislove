const a = document.querySelector('.popylar_a_hit');
const a2 = document.querySelector('.popylar_a_onl');
const a3 = document.querySelector('.popylar_a_new');
const box = document.querySelector('.popylar_box');
const box2 = document.querySelector('.popylar_box_onl');
const box3 = document.querySelector('.popylar_box_new');


a.addEventListener('click', function() {
    box.classList.toggle('active')
    a.classList.toggle('active')
    a2.classList.remove('active')
    a3.classList.remove('active')
    box2.classList.remove('active')
    box3.classList.remove('active')
});

a2.addEventListener('click', function() {
    box2.classList.toggle('active')
    a.classList.remove('active')
    a2.classList.toggle('active')
    a3.classList.remove('active')
    box.classList.remove('active')
    box3.classList.remove('active')
});

a3.addEventListener('click', function() {
    box3.classList.toggle('active')
    a.classList.remove('active')
    a2.classList.remove('active')
    a3.classList.toggle('active')
    box2.classList.remove('active')
    box.classList.remove('active')
});





