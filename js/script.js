$(document).ready(function(){

  // const el = document.querySelectorAll('.portfolio__img');
  // const observer = lozad(el);
  // observer.observe();

  if($(window).width() > 576) {
    setTimeout($('.main__bg').attr('src', 'img/video.mp4'), 1000);
  }

  //////////// gamburger-menu

  var menuBtn = document.querySelector(".navigation__btn");
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

  //////////// animate scroll

  $('a[href*="#"]').click(function (evt) {
    evt.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 80;
    $('html').animate({scrollTop: top}, 1500);
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
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
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