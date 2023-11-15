// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
console.log(body);
const mainElement = body.querySelector('main');
console.log(mainElement);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
//ul  =>  parent node = main  =>  parent element = body
const bodyElement = ul.parentNode.parentElement;
console.log(bodyElement);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const thirdLi = p.previousElementSibling.querySelector('li:last-child');
console.log(thirdLi)