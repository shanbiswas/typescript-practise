

// using "keyof" constraint we can be check that a key in an object is present or not

function checks<T extends object, U extends keyof T>(obj: T, key: U) {
    console.log(obj[key])
}


checks({name: 'john', age: 25}, 'name')

checks({country: 'India', city: 'Kolkata'}, 'name')     // Error, because 'name' is not there in the object