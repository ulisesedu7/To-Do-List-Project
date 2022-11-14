/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
// Function to Add and Remove Items
const itemDescription = document.getElementById('to-do-input');
const toDoListContainer = document.getElementById('to-do-list');

// Local Storage Function
class LocalStorage {
  static getItemStorage() {
    let items;

    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
  }

  static addItemStorage(item) {
    const items = LocalStorage.getItemStorage();

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeItemStorage(content) {
    const items = LocalStorage.getItemStorage();

    items.forEach((item, index) => {
      if (item.description === content) {
        items.splice(index, 1);
      }
    });

    localStorage.setItem('items', JSON.stringify(items));
  }
}

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

class UpdateInformation {
  static updateIndex() {
    const items = LocalStorage.getItemStorage();
    let id = 0;

    // Update Items to current Index
    for (const obj of items) {
      id = items.indexOf(obj);
      obj.index = id + 1;
    }

    localStorage.setItem('items', JSON.stringify(items));
  }

  static updateDescription(newDescription, currentIndex) {
    const items = LocalStorage.getItemStorage();

    for (const obj of items) {
      const id = items.indexOf(obj);

      if (id == currentIndex) {
        obj.description = newDescription;
      }
    }

    localStorage.setItem('items', JSON.stringify(items));
  }
}

export { StoredItems, LocalStorage, UpdateInformation };