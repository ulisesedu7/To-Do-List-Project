/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import { LocalStorage } from './add-remove-fs.js';

class checkboxStatus {
  static updateStorageCheck(item, currentIndex) {
    const items = LocalStorage.getItemStorage();

    for (const obj of items) {
      const itemIndex = items.indexOf(obj);

      if (item.classList.contains('true') && (currentIndex == itemIndex + 1)) {
        obj.completed = true;
      } else if (item.classList.contains('false') && (currentIndex == itemIndex + 1)) {
        obj.completed = false;
      }
    }

    localStorage.setItem('items', JSON.stringify(items));
  }

  static clearAllCompleted() {
    const items = LocalStorage.getItemStorage();

    for (let i = 0; i <= items.length; i++) {
      items.forEach((item, index) => {
        if (item.completed === true) {
          items.splice(index, 1);
        }
      });
    }

    localStorage.setItem('items', JSON.stringify(items));
  }
}

export default checkboxStatus;