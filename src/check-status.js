class checkboxStatus {
  static updateStorageCheck(item, currentIndex) {
    const items = LocalStorage.getItemStorage();
  
    for(const obj of items){
  
      let itemIndex = items.indexOf(obj);
  
      if(item.classList.contains('true') && (currentIndex == itemIndex)) {
        obj.completed = true;
      } else if (item.classList.contains('false')){
        obj.completed = false;
      }
    }
  
    localStorage.setItem('items', JSON.stringify(items));
  
  }
}