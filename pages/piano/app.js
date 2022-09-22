const piano = document.querySelector('.piano');
const domKeys = piano.querySelectorAll('.white-keys, .black-keys');
const keys = [...domKeys];

for (const [index, div] of keys.entries()) {
		keys[index].addEventListener('click', function(e) {
			var audioName = 'audio/key-' + (index + 1) + '.mp3';
		  var audio = new Audio(audioName);
		  console.log(keys[index]);
			audio.play();
			console.log(index);
		});
}