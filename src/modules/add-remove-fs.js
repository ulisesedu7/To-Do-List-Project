/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
import LocalStorage from './localStorage.js';

// Function to Add and Remove Items
const itemDescription = document.getElementById('to-do-input');
const toDoListContainer = document.getElementById('to-do-list');

class StoredItems {
  static displayItems() {
    const items = LocalStorage.getItemStorage();

    items.forEach((item) => StoredItems.addItem(item));
  }

  static addItem(item) {
    const toDoListMarkUp = document.createElement('div');
    toDoListMarkUp.classList.add('list-items-c');

    toDoListMarkUp.innerHTML = `
    <div class="to-do-div">
      <input class="to-do-check ${item.completed}" type="checkbox">
      <p class="to-do-des" contentEditable="false">${item.description}</p>
    </div>
    <i class="fa-solid fa-ellipsis-vertical" id="${item.index}"></i>
    <i class="fa-solid fa-trash-can"></i>
    `;
    toDoListContainer.appendChild(toDoListMarkUp);
  }

  static removeItem(element) {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
    }
  }

  static clearInput() {
    itemDescription.value = '';
  }
}

export default StoredItems;