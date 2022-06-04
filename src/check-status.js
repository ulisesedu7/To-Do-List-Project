import { LocalStorage, StoredItems } from "./add-remove-fs";

class checkboxStatus {
  static updateStorageCheck(item, currentIndex) {
    const items = LocalStorage.getItemStorage();
  
    for(const obj of items){
  
      let itemIndex = items.indexOf(obj);
  
      if(item.classList.contains('true') && (currentIndex == itemIndex)) {
        obj.completed = true;
      } else if (item.classList.contains('false')  && (currentIndex == itemIndex)){
        obj.completed = false;
      }
    }
  
    localStorage.setItem('items', JSON.stringify(items));
  
  }

  static clearAllCompleted() {
    const items = LocalStorage.getItemStorage();
    
    // for(const obj of items) {

    //   let itemIndex = items.indexOf(obj);

    //   items.forEach((item, index) => {
    //     if (item.completed === true) {
    //       items.splice(index, 1);
    //     }
    //   });
    // }

    for (let i = 0; i <= items.length; i++) {
      items.forEach((item, index) => {
        if (item.completed === true) {
          items.splice(index, 1);
        }
      });
    };
    

    localStorage.setItem('items', JSON.stringify(items));
  }
}

export default checkboxStatus;