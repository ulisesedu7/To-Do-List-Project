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

export default LocalStorage;