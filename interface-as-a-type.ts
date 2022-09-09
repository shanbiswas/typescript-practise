interface Person {
    name: string;
    age: number;

    greet(phrase: string): void
}

let user1: Person = {
    name: 'John',
    age: 42,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}, your age is ${this.age}`)
    }
}

user1.greet("Hi")