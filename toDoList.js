// If an li element is clicked, toggle the class "done" on the <li>
const todayList = document.querySelector('.today-list');
todayList.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'LI') {
    event.target.classList.toggle('done');
  }


// If a delete link is clicked, delete the li element / remove from the DOM
if (clickedElement.classList.contains('delete')) {
  const liElement = clickedElement.closest('li');
  if (liElement) {
    liElement.remove();
  }
}
});


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  // if not an empty string, adds a new element to <ul> .todayList
  if (text !== '') {
    const ul = document.querySelector('.today-list');

    // Create new elements
    const li = document.createElement('li'); // adds li element to parent <ul> .today-list
    const span = document.createElement('span'); // adds text content to list item
    const deleteLink = document.createElement('a'); // adds a delete link to item

    // enables functionality to the created elements above
    span.textContent = text;
    deleteLink.classList.add('delete');
    deleteLink.textContent = 'Delete';

    // Append elements to the <li>
    li.appendChild(span);
    li.appendChild(deleteLink);

    // Add event listener to the new <li> for toggling the "done" class
    li.addEventListener('click', function () {
      this.classList.toggle('done');
    });

    // Append the new <li> to the <ul>
    ul.appendChild(li);

    // This clears the input field after adding the new item
    input.value = '';
  }
};
const addLink = document.querySelector('.add-item'); // This will access line 16 on html file
addLink.addEventListener('click', addListItem); // click listener and applies function properties of addListItem above