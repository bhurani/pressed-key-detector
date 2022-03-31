'use strict';

const box = document.querySelector('.box');

document.onkeydown = e =>{
  const key = e.keyCode === 32 ? e.code : e.key;
  
  box.querySelector('.key-code').innerText = e.keyCode;
  box.querySelector('.key-name').innerText = key.toUpperCase();
  box.querySelector('.key').innerText = key;
  box.querySelector('.code').innerText = e.keyCode;
  
  box.classList.add('active');
};