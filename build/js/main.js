'use strict';

var headerToggle = document.querySelector('.header__toggle');
var headerList = document.querySelector('.header__list');
var inputTel = document.querySelector('#tel');
var inputName = document.querySelector('#name');
var form = document.querySelector('.callback form');
var body = document.querySelector('body');

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

headerToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (headerToggle.classList.contains('header__toggle--opened')) {
    body.style.overflow = 'visible';
    headerList.style.display = 'none';
    headerToggle.classList.remove('header__toggle--opened');
  } else {
    body.style.overflow = 'hidden';
    headerList.style.display = 'flex';
    headerToggle.classList.add('header__toggle--opened');
  }
});

setInputFilter(inputTel, function(value) {
  return /^-?\d*$/.test(value);
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  localStorage.setItem('name', inputName.value);
  localStorage.setItem('tel', inputTel.value);

  inputName.value = "";
  inputTel.value = "";
});
