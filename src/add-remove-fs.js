// Function to Add and Remove Items
const itemDescription = document.getElementById('to-do-input');
const toDoListContainer = document.getElementById('to-do-list');

class StoredItems {
  static displayItems() {
    const items = LocalStorage.getItems();

    items.forEach((item) => StoredItems.addItem(item));
  }

  static addItem(item) {
    const toDoListMarkUp = document.createElement('div');
    toDoListMarkUp.classList.add('list-items-c');

    toDoListMarkUp.innerHTML = `
    <div>
      <input class="to-do-check" type="checkbox" id="${item.complete}">
      <p class="to-do-des">${item.description}</p>
    </div>
    <i class="fa-solid fa-ellipsis-vertical" id="${item.index}"></i>
    `
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

// Local Storage Function 
class LocalStorage {
  static getItems () {
    let items;

    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
  }

  static addItemStorage(item) {
    const items = LocalStorage.getItem();

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeItemStorage(item) {
    const items = LocalStorage.getItem();
    
    items.forEach((item, index) => {
      // If statement to compare the selected item
      items.splice(index, 1);
    });

    localStorage.setItem('items', JSON.stringify(items));
  }
}

export {StoredItems, LocalStorage};