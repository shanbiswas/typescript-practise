/**
 * "Property Decorator"
 * 
    1. To use "decorators" make sure to set "experimentalDecorators": true in "tsconfig.json"
    2. Decorators are all about classess
    3. Decorators are basically functions that applies to class in a certian way
    4. Decorators gets executed when the class is defined, not when the class is instanciated
 */



// Property decorators recieves two arguments
function Logger(target: any, propertyName: string) {
    console.log("Property decorators !!")
    console.log('target', target)
    console.log('propertyName', propertyName)
}

class Person {
    @Logger
    name: string;
    private _amount: number;

    set amount(val: number) {
        if( val > 0 ) {
            this._amount = val
        }
        else {
            throw new Error("Invalid amount")
        }
    }

    constructor(n: string, p: number) {
        this.name = n
        this._amount = p
        console.log(`Person name is ${this.name} and amount is ${this._amount}`)
    }
}

let obj = new Person("John", 100)