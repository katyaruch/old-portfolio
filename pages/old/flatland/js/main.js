$(document).ready(function(){

///////// burger navigation /////////

  var burgerToggle = document.querySelector(".header__burger");
  var closeNav = document.querySelector(".header__burger-close");
  var navigation = document.querySelector(".header__navigation");

  $(burgerToggle).on("click", function (evt) {
    evt.preventDefault();
    $(burgerToggle).fadeOut(300);
    $(navigation).fadeIn(300,function(){$(this).focus();});
  });

  $(window).on("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      $(navigation).fadeOut(300);
      $(burgerToggle).fadeIn(300);
      
    }
  });

  $(closeNav).on("click", function (evt) {
    evt.preventDefault();
    $(navigation).fadeOut(300);
    $(burgerToggle).fadeIn(300);
  })

  $(navigation).on('blur',function(){
    $(this).fadeOut(300);
    $(burgerToggle).fadeIn(300);
  });

///////// header links /////////

  var positions = [],
      currentActive = null,
      links = $('.header__link');

  $(links).click(function (evt) {
    evt.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top - 80;
    $('body,html').animate({scrollTop: top}, 1500); //плавный скролл
  });

  $(".anchor").each(function(){
    positions.push({
      top: $(this).position().top - 100,
      a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
  });

  positions = positions.reverse();

  $(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    if($(window).scrollTop() > 100) {
      $(".header").addClass("header_active");
    } else {
       $(".header").removeClass("header_active");
    }

    for(var i = 0; i < positions.length; i++){
      if(positions[i].top < winTop){
        if(currentActive !== i){
          currentActive = i;
          links.removeClass('header__link_active');
          positions[i].a.addClass("header__link_active");
        }
        break;
      }
    }
  });

///////// gallery /////////

  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });

  ///////// timer 2019,10-1,20/////////
  $(function(){
    var dataSold = new Date(2019,10-1,20);
    $('.timer').countdown({
      until: dataSold,
      format: 'dHM'
    });
  })

});