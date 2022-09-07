
// UNION type is when we want the parameter to be of specific type and can have more than one choice
// in this example, the params must be of NUMBER or STARING

// we can use type aliases like below using TYPE keyword
type InputUnion = number | string

function add(
        input1: InputUnion, 
        input2: InputUnion
    ) {
    if( typeof input1 === 'number' && typeof input2 === 'number') {
        console.log(input1 + input2)
    }
    else {
        console.log(input1.toString() + input2.toString())
    }
}

add(2, 3)
add('Shan', 'Biswas')