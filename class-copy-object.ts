

class Department {
    name: string;

    constructor(n: string) {
        this.name = n
    }

    // printDepartmanetName() {
    //     console.log("Department: " + this.name)
    // }

    printDepartmanetName(this: Department) {
        console.log("Department: " + this.name)
    }
}

const accounting = new Department('Accounting')
accounting.printDepartmanetName()



// the NAME key is not defined below, so it will print UNDEFINED
// const accountingCopy = { printDepartmanetName: accounting.printDepartmanetName }

// this will print UNDEFINED if the function printDepartmanetName() is not having type declaration like the commented code from line 10-12
// accountingCopy.printDepartmanetName()



const accountingCopy = { name: 'Another Department', printDepartmanetName: accounting.printDepartmanetName }
accountingCopy.printDepartmanetName()