// CSS styles import
import './style.css';

// Import functionalities of adding and removing
import { StoredItems } from './add-remove-fs';
import { LocalStorage } from './add-remove-fs';

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
let id = 0;

// Load local storage information
StoredItems.displayItems();

// Submission Event Function to Add List Item 
itemDescription.addEventListener('keypress', (e) => {

  // Get Value
  const description = itemDescription.value;
  

  if(e.key === 'Enter'  && description !== '') {
    
    // Create item
    const item = new ToDoListItems(false, description, id);

    // Add item 
    StoredItems.addItem(item);

    // Add item to Local Storage
    LocalStorage.addItemStorage(item);

    // Clear Input
    StoredItems.clearInput();

    id++;
  }
  
});

/*
Remove item Event and Change to do list item when clicked
*/
toDoListContainer.addEventListener('click', (e) => {
  // Remove Element
  if(e.target.classList.contains('remove') === true) {
    // Remove item from List 
    StoredItems.removeItem(e.target);

    // Remove item from Local Storage
    LocalStorage.removeItemStorage(e.target.previousElementSibling.previousElementSibling.lastElementChild.innerHTML);

    // Update Index once item is deleted
    
  }

  // Add line-through
  if (e.target.classList.contains('to-do-check') === true) {
    e.target.parentElement.classList.toggle('line-through');
  }

  // Change Color of P tag
  if (e.target.classList.contains('to-do-des') === true) {
    e.target.parentElement.parentElement.classList.toggle('new-background');
    e.target.parentElement.nextElementSibling.classList.toggle('item-removed');
    e.target.parentElement.nextElementSibling.nextElementSibling.classList.toggle('remove');
  }

  // Make Content Editable 
  
});