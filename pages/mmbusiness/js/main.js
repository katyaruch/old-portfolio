$(document).ready(function(){
  //////// burger navigation /////////

  var burgerToggle = document.querySelector(".header__burger");
  var navigation = document.querySelector(".header__navigation");

  $(burgerToggle).on("click", function (evt) {
    evt.preventDefault();
    $(navigation).toggle("header__navigation_show"); //добавляем класс появления меню
  });

});