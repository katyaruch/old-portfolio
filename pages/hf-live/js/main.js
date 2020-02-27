$(document).ready(function(){
  console.log("Hello!");

  $('.reviews-list').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
})