// Находим кнопку "sub_menu"
const menuLink = document.getElementById("sub_menu");

// Находим фоновый элемент
const background = document.querySelector(".sub_menu_focus");

// Добавляем обработчик события при наведении на кнопку
menuLink.addEventListener("mouseover", function() {
    // Добавляем класс "active" к фону
    background.classList.add("active");
});

// Добавляем обработчик события при уходе с кнопки
menuLink.addEventListener("mouseout", function() {
    // Удаляем класс "active" у фона
    background.classList.remove("active");
});



// Находим кнопку "sub_menu"
const menuLink2 = document.getElementById("sub_menu_anim");

// Находим фоновый элемент
const background2 = document.querySelector(".sub_menu_focus_anim");

// Добавляем обработчик события при наведении на кнопку
menuLink2.addEventListener("mouseover", function() {
    // Добавляем класс "active" к фону
    background2.classList.add("active");
});

// Добавляем обработчик события при уходе с кнопки
menuLink2.addEventListener("mouseout", function() {
    // Удаляем класс "active" у фона
    background2.classList.remove("active");
});