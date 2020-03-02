$(document).ready(function(){
  console.log("Hello!");

  //////////// animate scroll

  var buttonPortfolio = document.querySelector(".button-portfolio");
  var links = document.querySelector(".navigation");

  $('a[href*="#"]').click(function (evt) {
    evt.preventDefault();

    var id  = $(this).attr('href'),
      top = $(id).offset().top - 60;
    $('body,html').animate({scrollTop: top}, 1500);
  });


  //////////// slick

  $('.reviews-list').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})