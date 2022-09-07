
// FUNCTION type with CALLBACK


// Example 1
function calculateAndHandle( n1: number, n2: number, cb: (num: number) => void ) {
    let result = n1 + n2

    cb(result)
}

calculateAndHandle(2, 3, (result) => {
    console.log(`Callback result is ${result}`)
})




////////////////////////////////////////////////////////////////////////////////////////




// Example 2
function calculateAndPrint( n1: number, n2: number, cb: (num: number) => number ) {     // the callback function is expecting a NUMBER
    let result = n1 + n2

    let callbackResult = cb(result)
    console.log(callbackResult)
}

calculateAndPrint(2, 3, (result) => {
    return result * 5
})