// Function to Add and Remove Items
const itemDescription = document.getElementById('to-do-input');

class StoredItems {
  static displayItems() {

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
    const items = StoredItems.getItem();

    items.push(item);

    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeItemStorage(item) {
    const items = StoredItems.getItem();
    
    items.forEach((item, index) => {
      // If statement to compare the selected item
      items.splice(index, 1);
    });

    localStorage.setItem('items', JSON.stringify(items));
  }
}