// CSS styles import
import './style.css';

// Main Function 
const toDoListItems = [{
  description: 'Finish the project of today',
  completed: false,
  index: 0,
},
{
  description: 'Finish additional reading exercises',
  completed: false,
  index: 1,
},
{
  description: 'Finish webpack exercise',
  completed: true,
  index: 2,
}];

const toDoListContainer = document.getElementById('to-do-list');

function genToDoListMarkUp(description, completed, index) {
  const toDoListMarkup = `
    <li></li>
    <li></li>
    <li></li>
  `
}
