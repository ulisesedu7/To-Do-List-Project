class ToDoListItems {
  constructor(description, complete, index) {
    this.complete = complete;
    this.description = description;
    this.index = index;
  }
}

const itemDescription = document.getElementById('to-do-input');

class StoredItems {
  static displayItems() {

  }
}

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
}