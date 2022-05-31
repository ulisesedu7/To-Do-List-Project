// CSS styles import
import './style.css';

// Main Function 
const toDoListItems = [{
  completed: false,
  description: 'Finish the project of today',
  index: 0,
},
{
  completed: false,
  description: 'Finish additional reading exercises',
  index: 1,
},
{
  completed: true,
  description: 'Finish webpack exercise',
  index: 2,
}];

/*
Create HTML Dynamically
*/
const toDoListContainer = document.getElementById('to-do-list');

function genToDoListMarkUp(completed, description, index) {
  const toDoListMarkup = `
    <div class="list-items-c">
      <input class="to-do-input" type="checkbox" id="${completed}">
      <p class="to-do-des">${description}</p>
      <i class="fa-solid fa-ellipsis-vertical" id="${index}"></i>
    </div>
  `;

  return toDoListMarkup;
}

const toDoListMarkUp = toDoListItems.reduce((acc, {completed, description, index}) => `${acc}${genToDoListMarkUp(completed, description, index)}`, '');

toDoListContainer.insertAdjacentHTML('afterbegin', toDoListMarkUp);
