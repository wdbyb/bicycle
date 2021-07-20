'use strict';

var headerToggle = document.querySelector('.header__toggle');
var headerList = document.querySelector('.header__list');

headerToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (headerToggle.classList.contains('header__toggle--opened')) {
    headerList.style.display = 'none';
    headerToggle.classList.remove('header__toggle--opened');
  } else {
    headerList.style.display = 'flex';
    headerToggle.classList.add('header__toggle--opened');
  }
});
