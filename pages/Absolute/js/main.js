$(document).ready(function() {
  //////////// popup feedback

  $('.button_feedback').magnificPopup({
    type: 'inline',
    focus: '#user-name'
  });

  $('.button_request').magnificPopup({
    type: 'inline',
    focus: '#user-name'
  });

  $('.feedback').submit(function(evt) {
    evt.preventDefault();

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function(result){
        alert(result);
      }
    });   
  });


  //////////// animate scroll

  $('a[href*="#"]').click(function (evt) {
    evt.preventDefault();

    var id  = $(this).attr('href'),
      top = $(id).offset().top - 80;
    
    $('body,html').animate({scrollTop: top}, 1500);
  });


  //////////// button_checked

  $('.button_tab').click(function(evt) {
    $('.button_tab').removeClass('button_checked');
    $(this).addClass('button_checked');
  });

  //////////// slick

  $('.review__list').slick({
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          // arrows: false
        }
      }
    ]
  });

  $('.slider_responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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

  $('.btn-next').on('click',function(){ $('#slick').slick('slickNext'); });
  $('.btn-prev').on('click',function(){ $('#slick').slick('slickPrev'); });
  
  //////////// rangesliders

  $('#calc-sum').rangeslider({
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
      var handleValue = '<div class="rangeslider__handle__value">' + this.value + ' ₽</div>';
      $rangeEl.append(handleValue);
    },

    // Callback function
    onSlide: function(position, value) {
      var $handle = this.$range.find('.rangeslider__handle__value');
      $handle.text(this.value + ' ₽');
    }
  });

  $('#calc-srok').rangeslider({
    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    onInit: function() {
      $rangeEl = this.$range;
      var $handle = $rangeEl.find('.rangeslider__handle');
      var handleValue = '<div class="rangeslider__handle__value">' + this.value / 12 + ' года </div>';
      $rangeEl.append(handleValue);
    },

    onSlide: function(position, value) {
      var $handle = this.$range.find('.rangeslider__handle__value');
      if(this.value < 12) {
        if(this.value < 5) {
          if(this.value == 1) {
            $handle.text(this.value + ' месяц');
          } else {
              $handle.text(this.value + ' месяца');
          }
        } else {
          $handle.text(this.value + ' месяцев');
        }
      } else {
        var srok = (this.value / 12).toFixed();
        if(srok < 5) {
          if(srok == 1) {
            $handle.text(srok + ' год');
          } else {
              $handle.text(srok + ' года');
          }
        } else {
          $handle.text((srok) + ' лет');
        }
      }
    }
    
  });

  $('.calc__range').on('change', function (evt) {
    var $sum = parseInt($('#calc-sum').val());
    var $srok = parseInt($('#calc-srok').val());
    var $k = parseInt($('#calc-percent').text().slice(0,-2));
    var $payment = (($sum / $srok) * (1 + ($k / 100))).toFixed() + ' ₽';
    $('#calc-payment').text($payment.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));
  });

  //////////// magnific gallery

  $('.gallery-popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true,
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