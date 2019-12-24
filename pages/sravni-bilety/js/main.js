$(document).ready(function(){
  // https://bootstrap-datepicker.readthedocs.io/en/latest/index.html
  $('#date').datepicker({
    format: "dd M yyyy",
    language: "ru",
    autoclose: true,
    startDate: "0d",
    endDate: "+2m",
    startView: "days",
    orientation: "bottom left",
    todayBtn: "linked"
  });

  var tomorrowBtn = '<th colspan="7" class="tomorrow" style="display: table-cell;">Завтра</th>';
  $('.datepicker tfoot tr').append(tomorrowBtn);

  $('.tomorrow').on('click', function () {
     var date = $('#date').datepicker('getDate');
     date.setDate(date.getDate() +1)
     $('#date').datepicker('setDate', date);
  });


  // https://jqueryui.com/autocomplete/
  var cities = [
    "Белгород",
    "Белгород ЖД",
    "Воронеж Центральный",
    "Воронеж Юго-Западный",
    "Липецк",
    "Старый Оскол",
    "Тольятти",
    "Абатское АС","Августовка АС","Алексеевка","Алексеевка АС", "Самарская обл.","Армизонское АС","Аромашево АС","Аткарск АВ","Б. Солдатское ОП","Балаково АС","Балашов АВ","Белая ОП","Белгород","Белгород ЖД КП","Бердюжье АС","Бердюжье АС","Богандинский АС","Богандинский АС","Богандинский АС","Большая Глушица КП","Большая Черниговка КП","Большое Сорокино АС","В. Любаж ОП","Вагай Северный АС","Викулово АС","Викулово АС","Винзили АС","Винзили АС","Винзили АС","Воронеж АВ Центр","Воронеж АВ Юго-Западный","Воронеж Ж\/Д","Глушково ОП","Голышманово АС","Горшечное ОП","Губкин","Дмитриев ОП","Елец 1","Елец 2","Елховка КП","Железногорск АС","Жигулёвск АВ","Заводоуковск АВ","Заводоуковск АВ","Заводоуковск АВ","Ивановское ОП","Исетское АС","Исетское АС","Исетское АС","Ишим АВ","Ишим АВ","Ишим АВ","Казанское АС","Казанское АС","Казань АВ Столичный","Камышла","Кинель-Черкассы АС","Клявлино КП","Коренево ОП","Короча АС","Кошки АС","Курск АВ","Курчатов АС","Липецк","Липецк (АС Сокол)","Льгов АС","Майкоп","Маркс АС","Медвенка АС","Мехзавод КП","Нефтегорск АС","Нижняя Тавда АС","Нижняя Тавда АС","Нижняя Тавда АС","Обоянь АС","Омутинское АС","Отрадный АС","Пестравка АС","Похвистнево АС","Романовка АС","Россошь АВ","Ртищево АС","Рыльск АС","Самара","Самойловка АС","Саратов АВ","Сергиевск АС Ленина","Сергиевск КП","Сорокино АС","Старый Оскол АВ","Суходол КП","Тамбов АВ","Тамбов АВ \"Северный\"","Тим ОП","Тольятти Жиг. Море","Тольятти Центральный АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Тюмень АВ","Уват АС","Уват АС","Упорово АС","Упорово АС","Фатеж АС","Хворостянка АС","Хомутовка ОП","Челно-Вершины КП","Чернянка АС","Шебекино ","Шигоны КП","Щигры ОП","Южный КПП","Юргинское АС","Юргинское АС","Юргинское АС","Ялуторовск АВ","Ялуторовск АВ","Ялуторовск АВ","Ярково АС","Ярково АС","Ярково АС","Ярково АС"
  ];
  $( "#from" ).autocomplete({
    source: cities,
    autoFocus: true
  });
  $( "#to" ).autocomplete({
    source: cities
  });
  $( "#bus-stations" ).autocomplete({
    source: cities
  });


  $('.other-dates-list').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: false
  });

});