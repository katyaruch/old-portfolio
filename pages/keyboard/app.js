const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (e) => {
    let jiggleKey = keyboard.querySelector('.jiggle');
    let jiggleKeyValue = keyboard.querySelector('.jiggle').dataset.key.toLowerCase();
    
    console.log(`Key "${e.key}" pressed [event: keydown]`);

    if (jiggleKeyValue == e.key.toLowerCase()) {
        jiggleKey.classList.remove('jiggle');

        let randomKey = keys[Math.floor(Math.random()*keys.length)];
        randomKey.classList.add('jiggle');
    }
  });