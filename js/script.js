$(document).ready(function(){

  //////////// gamburger-menu

  var menuToggle = document.querySelector(".gamburger-menu");
  var menu = document.querySelector(".gamburger-menu__list");
  var closeMenu = document.querySelector(".gamburger-menu__close");

  $(menuToggle).on("click", function (evt) {
    evt.preventDefault();   //отменяем стандартную обработку нажатия по ссылке
    menu.classList.toggle("gamburger-menu__list_show"); //добавляем класс появления меню
    $(menuToggle).fadeOut(300);
    // $(menu).fadeIn(300,function(){$(this).focus();});
  });

  $(window).on("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      $(menu).classList.remove("gamburger-menu__list_show");//при нажатии клавиши ESC меню закрывается
      // $(menu).fadeOut(300);
      
    }
  });

  $(closeMenu).on("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("gamburger-menu__list_show");
    // $(menu).fadeOut(300);
    $(menuToggle).fadeIn(300);
  })

  // $(menu).on('blur',function(){
  //   $(this).fadeOut(300);
  //   $(menuToggle).fadeIn(300);
  // });

  //////////// animate scroll

  var buttonPortfolio = document.querySelector(".button-portfolio");
  var links = document.querySelector(".navigation");

  $('a[href*="#"]').click(function (evt) {
    //отменяем стандартную обработку нажатия по ссылке
    evt.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 80;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

  //////////// Swiper

  var mySwiper = new Swiper ('.swiper-container', {
    // spaceBetween: 40,
    // direction: 'vertical',
    speed: 1500,
    loop: true,
    centeredSlides: true,
    mousewheel: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  //////////// Feedback

  // $('#feedback-form').on('submit', function(evt) {
  //   evt.preventDefault();
  //   var name = $('input[name=user-name]').val();
  //   var email = $('input[name=user-email]').val();
  //   var message = $('textarea[name=user-message]').val();

  //   $.ajax({
  //       headers: {          
  //         Accept: "application/json; charset=utf-8",         
  //         contentType: "application/json; charset=utf-8"   
  //       },     
  //       url: "https://formcarry.com/s/N1B21VwHRca",
  //       method: "POST",
  //       data: {
  //           user_name: name,
  //           user_email: email,
  //           user_message: message
  //       },
  //       dataType: "json"
  //   }).done(function(){
  //       $('.feedback__success').show();
  //     }).fail(function() {
  //       $('.feedback__fail').show();
  //     })
  // });

  $("#feedback-form").submit(function(e){
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://formcarry.com/s/N1B21VwHRca",
      data: $(this).serialize(),
      success: function(response){
        if(response.status == "success"){
          // $('#popup_thanks').show();
            $('#popup_thanks').fadeIn(300,function(){$(this).focus();});
          $('#feedback-form')[0].reset();
        }else{
          alert("An error occured: " + response.message);
        }
      }
    });

    $('.popup__close').on("click", function (evt) {
      evt.preventDefault();
      // $('#popup_thanks').hide();
      $('#popup_thanks').fadeOut(300);
    })
    $('#popup_thanks').on('blur',function(){
      $(this).fadeOut(300);
    });
  });
});