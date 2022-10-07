


// using "generics" we can use a type dynamically
// "generics" are defined using "<>"

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

let mergeOne = merge({name: 'John'}, {age: 25})
console.log(mergeOne.name)
console.log(mergeOne.age)


console.log('-------------------------')


let mergeTwo = merge({city: 'Kolkata'}, {country: 'India'})
console.log(mergeTwo.city)
console.log(mergeTwo.country)