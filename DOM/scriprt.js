'use strict';

// - для елементу з текстом 'Навігація по DOM дереву'
let headindTwo = document.getElementById('headerTwo');

// - для першого елементу <section>
let section = document.querySelector('section');
let firstSectionChild = section.firstElementChild;

// - для елементу списку з текстом 'Пункт 5'
// let list = document.querySelector('ul');
// let lastListChild = list.lastElementChild;
// let fifthParagraph = lastListChild.previousElementSibling;
// aбо
let fifthParagraph = document.querySelector('li:nth-child(5)');

// - для елементу з класом 'hatredLevelBlock'
let hatredLevelCounter = document.getElementsByClassName('hatredLevelCounter');


console.log(headindTwo);
console.log(firstSectionChild);
console.log(fifthParagraph);
console.log(hatredLevelCounter);