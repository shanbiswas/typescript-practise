

class Department {

    // Defineing "name" and "employees" properties with shorthand syntax
    constructor(public name: string, private employees: string[]) {
    }

    printDepartmanetName(this: Department) {
        console.log("Department: " + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployees() {
        console.log("Employees: " + this.employees)
    }
}

const accounting = new Department('Accounting', [])
accounting.printDepartmanetName()

accounting.addEmployee("John")
accounting.addEmployee("Rocky")

accounting.printEmployees()