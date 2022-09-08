
// "Getters" and "Setters"

class MyClass {
    private secretKey: string;

    constructor(key: string) {
        this.secretKey = key
    }

    get latestSecretKey() { 
        return this.secretKey
    }

    set latestSecretKey(key: string) { 
        this.secretKey = key
    }
}

const accounting = new MyClass('P8UO65RFG')
console.log(accounting.latestSecretKey)         // P8UO65RFG

accounting.latestSecretKey = 'KKKKKKKKK'
console.log(accounting.latestSecretKey)         // KKKKKKKKK