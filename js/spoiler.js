// $(document).ready(function() {
//     $('.catalog_burger').click(function(event) {

//         if($('.spoiler').hasClass('one')){
//             $('.catalog_burger').not($(this)).removeClass('click');
//             $('.catalog_burger_menu').not($(this).next()).slideUp(300);
//         }/* Что бы всегда был активный 1 айтем */

//         $(this).toggleClass('click').next().slideToggle(300);
//     });
// });

$(document).ready(function() {
    $('.spoiler__title').click(function(event) {

        if($('.spoiler').hasClass('one')){
            $('.spoiler__title').not($(this)).removeClass('active');
            $('.spoiler__text').not($(this).next()).slideUp(300);
        }/* Что бы всегда был активный 1 айтем */

        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// const hb = document.querySelector('.catalog_burger');
// const menu = document.querySelector('.catalog_burger_menu');


// hb.addEventListener('click', function() {
//     menu.classList.toggle('open')
// })




/*
const hb = document.querySelector ('.spoiler');
const menu = document.querySelector ('.spoiler__title');
const nex = document.querySelector ('.next');


hb.addEventListener('click', function(){
    menu.classList.toggle('active'),next();
    nex.classList.toggle('active'),next();
})
*/
