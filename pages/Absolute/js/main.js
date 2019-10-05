$(document).ready(function() {
  $('.review__list').slick({
    // rtl: true,
    // dots: true,
    // infinite: false,
    // speed: 300,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  });

  $('.banks__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  

    $('.calc__range').rangeslider({
    // Feature detection the default is `true`.
      // Set this to `false` if you want to use
      // the polyfill also in Browsers which support
      // the native <input type="range"> element.
      polyfill: false,

      // Default CSS classes
      rangeClass: 'rangeslider',
      disabledClass: 'rangeslider--disabled',
      horizontalClass: 'rangeslider--horizontal',
      fillClass: 'rangeslider__fill',
      handleClass: 'rangeslider__handle',

      // Callback function
      onInit: function() {
        $rangeEl = this.$range;
        // add value label to handle
        var $handle = $rangeEl.find('.rangeslider__handle');
        var handleValue = '<div class="rangeslider__handle__value">' + this.value + '</div>';
        $rangeEl.append(handleValue);
        
        // get range index labels 
        var rangeLabels = this.$element.attr('labels');
        rangeLabels = rangeLabels.split(', ');
        
        // add labels
        $rangeEl.append('<div class="rangeslider__labels"></div>');
        $(rangeLabels).each(function(index, value) {
          $rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
        })
      },

      // Callback function
      onSlide: function(position, value) {
        var $handle = this.$range.find('.rangeslider__handle__value');
        $handle.text(this.value);
      },

      // Callback function
      onSlideEnd: function(position, value) {}
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