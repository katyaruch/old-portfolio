$(document).ready(function() {

  ////////////////// gamburger-menu //////////////////////

  var menuToggle = document.querySelector(".burger-menu");
  var menu = document.querySelector(".burger__navigation");

  $(menuToggle).on("click", function (evt) {
    evt.preventDefault();   //отменяем стандартную обработку нажатия по ссылке
    menu.classList.toggle("burger__navigation_show");
    // $(menu).fadeIn(300);
  });

  ////////////////// animate scroll //////////////////////

  $('a[href*="#"]').click(function (evt) {
    //отменяем стандартную обработку нажатия по ссылке
    evt.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

  ////////////////// magnificPopup //////////////////////

  // $('.popup-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //     titleSrc: function(item) {
  //       return item.el.attr('title');
  //     }
  //   }
  // });

  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});