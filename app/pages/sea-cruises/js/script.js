$(document).ready(function(){
  var menuToggle = document.querySelector(".gamburger-menu");
  var menu = document.querySelector(".gamburger-menu__list");
  var closeMenu = document.querySelector(".gamburger-menu__close");

  $(menuToggle).on("click", function (evt) {
    evt.preventDefault();   //отменяем стандартную обработку нажатия по ссылке
    menu.classList.toggle("gamburger-menu__list_show"); //добавляем класс появления меню
  });

  $(window).on("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      menu.classList.remove("gamburger-menu__list_show"); //при нажатии клавиши ESC меню закрывается
    }
  });

  $(closeMenu).on("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("gamburger-menu__list_show");
  })


  $("#button-catalog").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});