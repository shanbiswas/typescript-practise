

// Abstract class and methods

abstract class MyClass {
    abstract describe(): void;
}

class Department extends MyClass {
    describe() {
        console.log('This is a Department class')
    }
}

const accounting = new Department()
accounting.describe()