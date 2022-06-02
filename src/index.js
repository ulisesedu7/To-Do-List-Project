// CSS styles import
import './style.css';

// Main Function
class ToDoListItems {
  constructor(description, complete, index) {
    this.complete = complete;
    this.description = description;
    this.index = index;
  }
}


/*
Create HTML Dynamically
*/
const toDoListContainer = document.getElementById('to-do-list');

function genToDoListMarkUp(completed, description, index) {
  const toDoListMarkup = `
    <div class="list-items-c">
      <div>
        <input class="to-do-check" type="checkbox" id="${completed}">
        <p class="to-do-des">${description}</p>
      </div>
      <i class="fa-solid fa-ellipsis-vertical" id="${index}"></i>
    </div>
  `;

  return toDoListMarkup;
}

const toDoListMarkUp = toDoListItems.reduce((acc, { completed, description, index }) => `${acc}${genToDoListMarkUp(completed, description, index)}`, '');

toDoListContainer.insertAdjacentHTML('afterbegin', toDoListMarkUp);

// Submission Event Function to Add List Item 

