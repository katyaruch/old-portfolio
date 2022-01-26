$(document).ready(function(){

  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true
  });

  //////////// gamburger-menu

  var menuBtn = document.querySelector(".header__btn");
  var menu = document.querySelector(".navigation");
  var closeMenu = document.querySelector(".navigation__close");

  $(menuBtn).on("click", function (evt) {
    evt.preventDefault();
    $(menu).addClass("navigation_show");
    $(menuBtn).fadeOut(300);
  });

  $(closeMenu).on("click", function (evt) {
    evt.preventDefault();
    $(menu).removeClass("navigation_show");
    $(menuBtn).fadeIn(300);
  })

  $(window).on("keydown", function (evt) {
    if (evt.keyCode === 27) { //клавиша ESC
      evt.preventDefault();
      $(menu).removeClass("navigation_show");
      $(menuBtn).fadeIn(300);
      
    }
  });

  //////////// Swiper https://swiperjs.com/swiper-api#parameters

  var mySwiper = new Swiper ('.swiper-container', {
    // spaceBetween: 30,
    // direction: 'vertical',
    speed: 1500,
    loop: true,
    centeredSlides: true,
    mousewheel: true,
    slidesPerView: 'auto',
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    autoplay: {
      delay: 4000,
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

  /////////////

  $('.verstka__norm').hover(function() {
    $('.verstka__norm').removeClass('active');
    $(this).addClass('active');
  });

  //////////// Feedback

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