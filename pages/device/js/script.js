//////////// animate scroll

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 600,
      framesCount = 60;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

////////////// Popup for login /////////////

var linkLogin = document.querySelector(".login-link");
var popupLogin = document.querySelector(".modal-login");
var closeModal = popupLogin.querySelector(".modal-close");

linkLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("hidden");
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("hidden");
  popupLogin.classList.remove("modal-error");
});

////////////// Popup for write /////////////

var linkwrite = document.querySelector(".link-write");
var popupwrite = document.querySelector(".modal-write-us");
var closeModal = popupwrite.querySelector(".modal-close");
var form = popupwrite.querySelector("form");
var name = popupwrite.querySelector("[name=name]");
var email = popupwrite.querySelector("[name=e-mail]");
var text = popupwrite.querySelector("[name=text]");

linkwrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupwrite.classList.remove("hidden");
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupwrite.classList.add("hidden");
  popupwrite.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !text.value) {
  evt.preventDefault();
  popupwrite.classList.remove("modal-error");
  popupwrite.offsetWidth = popupwrite.offsetWidth;
  popupwrite.classList.add("modal-error");
  }
});

////////////// Popup for map /////////////

var linkmap = document.querySelector(".contact-map");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".modal-close");

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("hidden");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupmap.classList.add("hidden");
    popupwrite.classList.add("hidden");
    popupwrite.classList.remove("modal-error");
  }
});