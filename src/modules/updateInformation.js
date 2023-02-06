/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
import LocalStorage from './localStorage.js';

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

export default UpdateInformation;