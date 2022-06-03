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

    // Reload screen
    window.top.location.refresh();

    id++;
  }
  
});

// Change to do list item when clicked 
const listItemP = document.querySelectorAll('.to-do-des');
const listCheckBox = document.querySelectorAll('to-do-check');
const toDoDiv = document.querySelectorAll('to-do-div');

listItemP.forEach((i) => {
  i.addEventListener('click', () => {
    // Change Color and Add styles and trash can 
    i.parentElement.parentElement.classList.toggle('new-background');
    i.parentElement.nextElementSibling.classList.toggle('item-removed');
    i.parentElement.nextElementSibling.nextElementSibling.classList.toggle('remove');

    // Make Content Editable and update the storage 
  });
});

// Remove item Event 
toDoListContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('remove') === true) {
    // Remove item from List 
    StoredItems.removeItem(e.target);

    // Remove item from Local Storage
    LocalStorage.removeItemStorage(e.target.previousElementSibling.previousElementSibling.lastElementChild.innerHTML);

    // Update Index once item is deleted
    
  }

  if (e.target.classList.contains('to-do-check') === true) {
    e.target.parentElement.classList.toggle('line-through');
  }

});