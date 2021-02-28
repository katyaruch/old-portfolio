$(document).ready(function () {

/////////////// fullpage.js

    $('#fullpage').fullpage({
        //options here
        recordHistory: false,
        anchors : [ 'top-banner' ,  'about', 'production', 'projects', 'contacts' ],
        normalScrollElements: '.modal',
        scrollBar: true,
        // navigation: true
    });

    $('.modal').on('show.bs.modal', function (e) {
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
    });

    $('.modal').on('hide.bs.modal', function (e) {
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    });

/////////////// Эффект при наведении на баннер

  if($(window).width() > 576) {
        let bgs = document.querySelectorAll('.top-banner__bg');
        window.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            for (var i = 0, len = bgs.length; i < len; i++) {
                bgs[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
            }
        });
    }

/////////////// модальные окна

    $('.button__signup').click(function (e) {
        e.preventDefault();
        $('#signupModal').modal('show');
    });

    $('.modal .close').click(function (e) {
        e.preventDefault();
        $('.modal').modal('hide');
    });

    $('.header__location, .footer__location, .sidenav__location').click(function (e) {
        e.preventDefault();

        $('#cityModal').modal('show');
    });

    $('.header__auth, .footer__auth, .sidenav__auth').click(function (e) {
        e.preventDefault();

        $('#loginModal').modal('show');
    });

    $('.to-reg').click(function(e) {
        e.preventDefault();
        $('.modal-body--login').removeClass('active');
        $('.modal-body--reg').addClass('active');
    });
    $('.to-login').click(function(e) {
        e.preventDefault();
        $('.modal-body--reg').removeClass('active');
        $('.modal-body--login').addClass('active');
    });

    $('.hamburger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.sidenav').toggleClass('active');
        $('body').toggleClass('opacity');
    });

    $('.sidenav ul a, .sidenav__close').click(function (e) {
        $('.hamburger').toggleClass('active');
        $('.sidenav').toggleClass('active');
        $('body').toggleClass('opacity');
    });

    $('.openLogin').click(function (e) {
        e.preventDefault();
        $('#loginModal').modal('show');
    });

/////////////// слайдеры

    $('.top-banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    $('.about__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
        cssEase: 'linear',
    });

    $('.partners__list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        dots: false,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                speed: 3000
              }
            },
            {
              breakpoint: 480,
              settings: {
              }
            }
        ]
    });

    $('.grid-item__slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        draggable: false,
        dots: false,
        arrows: true,
        prevArrow: '<a href="#" class="arrow-prev"><i class="icon icon__arrow-left"></i></a>',
        nextArrow: '<a href="#" class="arrow-next"><i class="icon icon__arrow-right"></i></a>',
    })

    $('.production__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<a href="#" class="arrow-prev"><i class="icon icon__prod-left"></i></a>',
        nextArrow: '<a href="#" class="arrow-next"><i class="icon icon__prod-right"></i></a>',
        dots: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
                variableWidth: true,
                  arrows: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true
              }
            }
        ]
    });

    $('.projects__gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<a href="#" class="arrow-prev"><i class="icon icon__arrow-left"></i></a>',
        nextArrow: '<a href="#" class="arrow-next"><i class="icon icon__arrow-right"></i></a>',
    });

    $('.news__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 10000,
        lazyLoad: 'progressive',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                variableWidth: false    ,
              }
            }
        ]
    });

    $('.page-news-single__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="arrow-prev"><i class="icon icon__arrow-left"></i></a>',
        nextArrow: '<a href="#" class="arrow-next"><i class="icon icon__arrow-right"></i></a>',
    });

/////////////// 

    $('.phone__input').mask('+7(000)000-00-00');

    $('.select__city a').click(function (e) {
        e.preventDefault();
        $('.select__city a').removeClass('active');
        $(this).addClass('active');
        var city = $(this).text();
        $('.header__location-right .accent, .footer__location-right .accent, .sidenav__location .accent').text(city);
        $('#cityModal').modal('hide');
    });

    $('.news-btn-like').click(function (e) {
        e.preventDefault();

        var val = $(this).next('.like').text();

        if ( !$(this).hasClass('active') ) {
            $(this).addClass('active');
            var result = parseInt(val) + 1;
        } else {
            $(this).removeClass('active');
            var result = parseInt(val) - 1;
        }

        $(this).next('.like').text(result);

    });

});

function citySelect() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('select__input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("select__city");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

