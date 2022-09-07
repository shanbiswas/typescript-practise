
// LITERAL type is when we can define not only the type of a variable, but also the value that allowed for the variable, just like ENUM

function performOperation(
        input1: number, 
        input2: number,
        operation: 'add' | 'multiply'       // LITERAL type
    ) {
        switch (operation) {
            case 'add':
                return input1 + input2
            
            case 'multiply':
                return input1 * input2
        
            default:
                return undefined
        }
}

console.log(performOperation(2, 3, 'add'))
console.log(performOperation(2, 3, 'multiply'))