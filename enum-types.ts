

enum Status {ACTIVE, DEACTIVE, DELETED}

const person = {
    name: 'Shan',
    age: 30,
    status: Status.ACTIVE,
}

if( person.status === Status.ACTIVE) {
    console.log('Person is active')
}
else {
    console.log('Person is not active')
}

