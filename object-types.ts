

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Shan',
//     age: 30
// }

// TS automatically inferred that this is an OBJECT and also inferred the types of the KEY VALUES
// hover over the PERSON variable to see the inferred types by TS
// means we don't have to manually write types like the above commented code
const person = {
    name: 'Shan',
    age: 30,
    hobbies: ['Football', 'Cricket', 'Badminton']
}


// But here we need to manually write the types, because of the TUPPLE data type
// now the ROLE key will accepte only NUMBER in the 1st position and STRING in the 2nd position
const person_2: {
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string];  // Tupple
} = {
    name: 'Shan',
    age: 30,
    hobbies: ['Football', 'Cricket', 'Badminton'],
    role: [2, 'admin']
}

let favoriteFoodList: string[]
favoriteFoodList = ['Mutton', 'Egg Chicken Role']

console.log(person.name)