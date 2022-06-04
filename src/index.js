// CSS styles import
import './style.css';

// Import functionalities of adding and removing
import { StoredItems, LocalStorage, UpdateInformation } from './add-remove-fs.js';
import checkboxStatus from './check-status.js';

// Main Function
class ToDoListItems {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

// Const from HTML
const itemDescription = document.getElementById('to-do-input');
const toDoListContainer = document.getElementById('to-do-list');
const clearCompletedElement = document.getElementById('clear-completed');

// Load local storage information
StoredItems.displayItems();

// Submission Event Function to Add List Item
itemDescription.addEventListener('keypress', (e) => {
  // Get Value
  const description = itemDescription.value;

  if (e.key === 'Enter' && description !== '') {
    // Create item
    const item = new ToDoListItems(false, description);

    // Add item
    StoredItems.addItem(item);

    // Add item to Local Storage
    LocalStorage.addItemStorage(item);

    // Clear Input
    StoredItems.clearInput();

    // Update index of added Element
    UpdateInformation.updateIndex();

    window.location.reload();
  }
});

/*
Remove item Event and Change to do list item when clicked
*/
toDoListContainer.addEventListener('click', (e) => {
  // Remove Element
  if (e.target.classList.contains('remove') === true) {
    // Remove item from List
    StoredItems.removeItem(e.target);

    // Remove item from Local Storage
    LocalStorage.removeItemStorage(
      e.target.previousElementSibling.previousElementSibling.lastElementChild.innerHTML,
    );

    // Update Index once item is deleted
    UpdateInformation.updateIndex();
  }

  // Change Color of item div tag
  if (e.target.classList.contains('list-items-c') === true) {
    e.target.classList.toggle('new-background');
    e.target.firstElementChild.nextElementSibling.classList.toggle('item-removed');
    e.target.firstElementChild.nextElementSibling.nextElementSibling.classList.toggle('remove');

    // Add classes if P tag is clicked as well
    const listItemP = e.target.firstElementChild.lastElementChild;

    listItemP.contentEditable = 'true';

    // Current Index
    const indexEle = e.target.firstElementChild.nextElementSibling;
    const currentIndex = indexEle.getAttribute('id');

    e.target.firstElementChild.lastElementChild.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.target.contentEditable = 'false';

        const newdescription = e.target.innerHTML;

        e.target.parentElement.parentElement.classList.toggle('new-background');
        e.target.parentElement.nextElementSibling.classList.toggle('item-removed');
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.toggle('remove');

        UpdateInformation.updateDescription(newdescription, currentIndex);
      }
    });
  }

  // Checkbox Status
  if (e.target.classList.contains('to-do-check') === true) {
    e.target.parentElement.classList.toggle('line-through');

    // Change completed
    e.target.classList.toggle('false');
    e.target.classList.toggle('true');

    const indexEle = e.target.parentElement.nextElementSibling;
    const currentIndex = indexEle.getAttribute('id');

    // Update Local Storage
    checkboxStatus.updateStorageCheck(e.target, currentIndex);
  }
});

clearCompletedElement.addEventListener('click', () => {
  checkboxStatus.clearAllCompleted();

  UpdateInformation.updateIndex();

  window.location.reload();
});