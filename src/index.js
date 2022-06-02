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

// Load local storage information
document.addEventListener('DOMContentLoaded', StoredItems.displayItems)

// Submission Event Function to Add List Item 
itemDescription.addEventListener('keypress', (e) => {

  // Get Value
  const description = itemDescription.value;

  if(e.key === 'Enter'  && description !== '') {
    // Create item
    const item = new ToDoListItems(false, description, 1);

    // Add item 
    StoredItems.addItem(item);

    // Add item to Local Storage
    LocalStorage.addItemStorage(item);

    // Clear Input
    StoredItems.clearInput();

  }
});

// Change to do list item when clicked 
const listItem = document.querySelector('.list-items-c');

listItem.addEventListener('click', (e) => {
  
});


// Remove item Event 
toDoListContainer.addEventListener('', (e) => {
  // Remove item from List 
  StoredItems.removeItem(e.target);

  // Remove item from Local Storage
  LocalStorage.removeItemStorage();

});