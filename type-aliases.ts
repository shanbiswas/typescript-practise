
// using TYPE ALIASES we can store out types in a type variable and use it to reduce our code

type User = {
    name: string;
    age: number;
}

function checkIfSeniorCitizen(user: User) {
    if( user.age > 60 ) {
        return true
    }

    return false
}

const u1: User = {
    name: 'John',
    age: 40
}

const u2: User = {
    name: 'Mike',
    age: 65
}

console.log(checkIfSeniorCitizen(u1))   // false
console.log(checkIfSeniorCitizen(u2))   // true

