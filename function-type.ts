
// we can use FUNCTION as TYPE

function add( n1: number, n2: number ) {
    return n1 + n2
}

function multiply( n1: number, n2: number ) {
    let result = n1 * n2
    return `The result is ${result}`
}

function printGreetMessage(name: string) {
    console.log(`Hi ${name}!, welcome to India`)
}

let myFunc: (a: number, b: number) => number

myFunc = add
// myFunc = multiply              // Compile Error : Because multiple() is returning a STRING, and myFunc() is accepting a number as a result
// myFunc = printGreetMessage  // Compile Error : Because printGreetMessage() is returning a STRING and accepting only 1 argument

console.log(myFunc(2, 3))

