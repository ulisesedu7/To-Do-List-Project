// CSS styles import
import './style.css';

// Import functionalities of adding and removing
import { StoredItems } from './add-remove-fs';
import { LocalStorage } from './add-remove-fs';

// Main Function
class ToDoListItems {
  constructor(description, completed, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

// Const from HTML 
const itemDescription = document.getElementById('to-do-input');

toDoListContainer.insertAdjacentHTML('afterbegin', toDoListMarkUp);

// Load local storage information
document.addEventListener('DOMContentLoaded', StoredItems.displayItems)

// Submission Event Function to Add List Item 
itemDescription.addEventListener('keypress', (e) => {
  e.preventDefault();

  // Get Value
  const inputItem = itemDescription.value;

  if(e.key === 'Enter' && inputItem !== '') {
    // Create item
    const item = new ToDoListItems();

    // Add item 
    StoredItems.addItem(item);

    // Add item to Local Storage
    LocalStorage.addItemStorage(item);

    // Clear Input
    StoredItems.clearInput();

  }
});

// Remove item Event 
