$(document).ready(function(){
  //////// burger navigation /////////

  var burgerToggle = document.querySelector(".header__burger");
  var navigation = document.querySelector(".header__navigation");

  $(burgerToggle).on("click", function (evt) {
    evt.preventDefault();
    $(navigation).toggle("header__navigation_show"); //добавляем класс появления меню
  });

///////// gallery /////////

  $('.reviews__list').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      preload: [1,2],
      // removalDelay: 300,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      gallery: {
        enabled: true,
        tPrev: 'Предыдущий',
        tNext: 'Следующий'
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  });


  //////// popup thanks /////////

  var buttonConsultation1 = document.querySelector("#button-consultation1");
  var buttonConsultation2 = document.querySelector("#button-consultation2");

  var popupThank = document.querySelector(".popup_thank");
  var closePopup = document.querySelector(".popup__close");

  $(buttonConsultation1).on("click", function (evt) {
    evt.preventDefault();
    $(popupThank).fadeIn(300,function(){$(this).focus();});
  });

  $(buttonConsultation2).on("click", function (evt) {
    evt.preventDefault();
    $(popupThank).fadeIn(300,function(){$(this).focus();});
  });



  $(window).on("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      $(popupThank).fadeOut(300);
    }
  });

  $(closePopup).on("click", function (evt) {
    evt.preventDefault();
    $(popupThank).fadeOut(300);
  })
});