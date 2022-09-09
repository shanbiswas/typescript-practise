
// intersection types can be created using 2 ways
        // : object type (union of all the object types provided)
        // : union type (intersection of all the intersection types provided)

// in this example intersection type is created with "object" types only


type Person = {
        name: string;
        age: number;
}

type Company = {
        companyName: string;
        companyAddress: string;
}

// all the keys from "Person" and "Company"
type Employee = Person & Company


let emp_1: Employee = {
        name: 'John',
        age: 25,
        companyName: 'Google Inc',
        companyAddress: 'California'
}