/**
 * "Parameter Decorator"
 * 
    1. To use "decorators" make sure to set "experimentalDecorators": true in "tsconfig.json"
    2. Decorators are all about classess
    3. Decorators are basically functions that applies to class in a certian way
    4. Decorators gets executed when the class is defined, not when the class is instanciated
 */



// Parameter decorators recieves two arguments, same as Accessor decorators
function Logger(target: any, name: string | symbol, position: Number) {
    console.log("Parameter Decorator")
    console.log("target", target)
    console.log('name', name)
    console.log('position', position)
}

class Person {
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

    printMsg(param1: number, param2: number, @Logger msg: string) {
        console.log(msg)
    }
}

let obj = new Person("John", 100)