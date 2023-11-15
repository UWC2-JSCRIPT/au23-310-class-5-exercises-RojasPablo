// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tdElements = document.getElementsByTagName('td');

for (const td of tdElements){
    td.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        td.innerText = `X: ${x}, 
        Y: ${y}`;
    })
}