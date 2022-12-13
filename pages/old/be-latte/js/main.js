$(document).ready(function(){
  console.log('jQuery ready!');

  //////////// animate scroll

  $('a[href*="#"]').click(function (evt) {
    //отменяем стандартную обработку нажатия по ссылке
    evt.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top + 80;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
})