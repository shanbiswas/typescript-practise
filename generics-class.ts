// using "generics" we can use a type dynamically
// "generics" are defined using "<>"

// In this example, we are defining a class with generic type and creating objects from the class
// using the object we can only pass String, Number or Boolean type of data, not in combination of all, see 2 objects created after the class defination


class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
}
  


// For string types
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());



// For number types
const numberStorage = new DataStorage<number>();
numberStorage.addItem(3);
numberStorage.addItem(4);
numberStorage.removeItem(3);
console.log(numberStorage.getItems());