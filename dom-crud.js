// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const anchorEl = document.createElement('a');
anchorEl.id = 'cta'; // sets the id to cta
anchorEl.innerText = 'BUY NOW!'
//finds the last paragraph in the document . . . in this case there is only one p
const lastParagraph = document.querySelector("p");
// PARAMETER DEF: (element i want to add, reference element or position i want inserted)
lastParagraph.parentNode.insertBefore(anchorEl, lastParagraph.nextSibling);

// or
// const lastParagraph = document.getElementByTagName("p")[0];
// lastParagraph.appendChild(anchorEl)
// not sure which was prefered 

// Access (read) the data-color attribute of the <img>,
// log to the console

const imgElement = document.querySelector('img');
const dataColor = imgElement.getAttribute('data-color');
console.log(dataColor);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const highEl = document.querySelectorAll('li')[2];
highEl.innerText = 'Highlight';


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const finalP = document.getElementsByTagName('p')[0];
// either works, perhaphs tagName is better practice to pull exact index element
// const finalP = document.querySelector('p');
finalP.remove()