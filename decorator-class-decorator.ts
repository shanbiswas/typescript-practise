/**
 * 
    1. To use "decorators" make sure to set "experimentalDecorators": true in "tsconfig.json"
    2. Decorators are all about classess
    3. Decorators are basically functions that applies to class in a certian way
    4. Decorators gets executed when the class is defined, not when the class is instanciated
 */


function Logger(constructor: Function) {
    console.log('Logging')
    console.log(constructor)
}

@Logger
class Person {
    name = 'John'

    constructor() {
        console.log('Loggin from constructor')
    }
}

let obj = new Person()