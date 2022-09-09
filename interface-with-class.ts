

// Implementating "interface"

interface Greetable {
    name: string;

    greet(phrase: string): void
}

class Person implements Greetable {
    constructor(public name: string, private age: number) {}

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}, your age is ${this.age}`)
    }
}

let userOne = new Person("Shan", 30)
userOne.greet("Hi")