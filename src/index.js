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
StoredItems.displayItems();

// Submission Event Function to Add List Item 
itemDescription.addEventListener('keypress', (e) => {

  // Get Value
  const description = itemDescription.value;

  if(e.key === 'Enter'  && description !== '') {
    // Create item
    const item = new ToDoListItems(false, description, description.length);

    // Add item 
    StoredItems.addItem(item);

    // Add item to Local Storage
    LocalStorage.addItemStorage(item);

    // Clear Input
    StoredItems.clearInput();

    // Reload screen
    window.location.reload();
  }
  
});

// Change to do list item when clicked 
const listItem = document.querySelectorAll('.list-items-c');
const listItemP = document.querySelectorAll('.to-do-des');
const listCheckBox = document.querySelectorAll('to-do-check');

listItemP.forEach((i) => {
  i.addEventListener('click', () => {
    i.parentElement.parentElement.classList.toggle('new-background');
  });
});

listCheckBox.forEach((i) => {
  i.addEventListener('click', () => {
    i.nextElementSibling.classList.add('line-through');
  });
});

// Remove item Event 
toDoListContainer.addEventListener('', (e) => {
  // Remove item from List 
  StoredItems.removeItem(e.target);

  // Remove item from Local Storage
  LocalStorage.removeItemStorage();

});