
// intersection types can be created using 2 ways
        // : object type (union of all the object types provided)
        // : union type (intersection of all the intersection types provided)

// in this example intersection type is created with "union" types only


type Combinable = string | number
type Numeric = number | boolean

// intersection of "Combinable" and "Numeric", ie "number"
type Universal = Combinable & Numeric

let test_1: Universal = 56
