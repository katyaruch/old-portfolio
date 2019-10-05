$(document).ready(function() {
  $('.review__list').slick({
    // rtl: true,
    // dots: true,
    // infinite: false,
    // speed: 300,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  });

  $('.btn-next').on('click',function(){ $('#slick').slick('slickNext'); });
  $('.btn-prev').on('click',function(){ $('#slick').slick('slickPrev'); });


  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // var myMap;
  // ymaps.ready(init);

  // function init () {
  //   // Создание экземпляра карты и его привязка к контейнеру с
  //   // заданным id ("map").
  //   myMap = new ymaps.Map('map', {
  //       center: [55.636975, 37.434843], // Москва
  //       zoom: 15
  //   }, {
  //       searchControlProvider: 'yandex#search'
  //   }),

  //   myGeoObject = new ymaps.GeoObject({
  //       // Описание геометрии.
  //       geometry: {
  //           type: "Point",
  //           coordinates: [55.636975, 37.434843]
  //       },
  //   }, {
  //     preset: 'islands#redDotIcon'
  //   });

  //   myMap.geoObjects
  //       .add(myGeoObject)
  // }

});