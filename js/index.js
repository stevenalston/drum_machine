const displayEl = document.getElementById('display');
let displayText = '';

function playSound(e) {
  let audio = this.children[0];
  addEffect(this);
  addText(this)
  audio.currentTime = 0;
  audio.play();

}

Array.from(document.querySelectorAll('.drum-pad')).forEach(el => {
  el.addEventListener('click', playSound);
});

window.addEventListener('keydown', function (e) {
  let audio = document.getElementById(e.key.toUpperCase());
  let pad = audio.parentElement;
  addEffect(pad);
  addText(pad);
  audio.currentTime = 0;
  audio.play();
});


function addEffect(el) {
  el.classList.add('play');
  setTimeout(function () {
    el.classList.remove('play');
  }, 200);

}

function addText(el) {
  displayText = el.id;
  displayEl.textContent = displayText;
}
