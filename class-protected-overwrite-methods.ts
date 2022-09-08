

class Department {

    // Defineing "name" and "employees" properties with shorthand syntax
    constructor(public name: string, private employees: string[]) {
    }

    printDepartmanetName(this: Department) {
        console.log("Department: " + this.name)
    }

    protected addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployees() {
        console.log("Employees: " + this.employees)
    }
}


class Accounting extends Department {
    constructor(private currentAccountant: string) {
        super("Accounts", [''])
    }

    printCurrentAccountant() {
        console.log(this.currentAccountant)
    }

    // OVERWRITING base class method, only methods of PUBLIC and PROTECTED access modifiers from base class can be overwriten
    addEmployee(employee: string) {
        // Convert to UPPERCASE
        super.addEmployee(employee.toUpperCase())
    }
}

const accounts = new Accounting('Rakesh')
accounts.printDepartmanetName()

accounts.addEmployee("John")
accounts.addEmployee("Rocky")

accounts.printEmployees()
accounts.printCurrentAccountant()