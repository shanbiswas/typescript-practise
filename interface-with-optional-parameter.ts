

// We can have "OPTIONAL PARAMETERS" in an interface or in a class


interface Greetable {
    name: string;
    age?: number;

    greet(phrase: string): void
}

class Person implements Greetable {
    constructor(public name: string, public age?: number) {}

    greet(phrase: string) {
        if( this.age )
            console.log(`${phrase} ${this.name}, your age is ${this.age}`)
        else
            console.log(`${phrase} ${this.name}`)
    }
}

let userOne = new Person("Shan", 30)
userOne.greet("Hi")

let userTwo = new Person("Rahul")
userTwo.greet("Hi")