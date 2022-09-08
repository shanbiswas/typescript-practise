

// "Static" properties and methods

class MyClass {
    static fullname: string;

    constructor() {
        // the static property "fullname" is accesiible like below
        // MyClass.fullname
    }

    static printHello() {
        console.log("Hello!")
    }
}

MyClass.printHello()

MyClass.fullname = "Santanu Biswas"
console.log(MyClass.fullname)