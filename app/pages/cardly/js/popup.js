function showPopupByClass (popupClass) {
	var popup = document.querySelector(popupClass);

	if (!popup) { 
		console.error('попап не найден ' + popupClass); 
		return false;
	}

	if (popup) popup.classList.add('popup_active');

	window.onclick = function(event) {
	    if (event.target == popup) {
	        popup.classList.remove('popup_active');
	    }
	}
}

function hidePopup () {
	popup = document.querySelector('.popup_active');
	
    if (popup) popup.classList.remove('popup_active');
}

var linkWork = document.querySelector(".button_work");
var popupWork = document.querySelector(".popup_work");
var closeWrite = popupWork.querySelector(".popup__close");

linkWork.addEventListener("click", function (evt) {
	evt.preventDefault();
	showPopupByClass(".popup_work");
});

closeWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	hidePopup();
});

var linkCard = document.querySelectorAll(".card");
var popupCard = document.querySelector(".popup_2");
var closeCard = popupCard.querySelector(".popup__close");

for (var i = 0; i < linkCard.length; i++) {
	linkCard[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		showPopupByClass(".popup_2");
	})
};

closeCard.addEventListener("click", function (evt) {
	evt.preventDefault();
	hidePopup();
});