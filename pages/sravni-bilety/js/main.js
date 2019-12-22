$(document).ready(function(){
  // https://bootstrap-datepicker.readthedocs.io/en/latest/index.html
  $('#date').datepicker({
    format: "dd M yyyy",
    language: "ru",
    todayHighlight: true,    
    autoclose: true,
    startDate: "0d",
    endDate: "+1m",
    startView: "days",
    orientation: "bottom left",
    todayBtn: true,
    todayHighlight: true,
    leftArrow: "<i class='fas fa-chevron-left'></i>",
    rightArrow: "<i class='fas fa-chevron-right'></i>"
  });


});