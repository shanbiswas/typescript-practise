
// "id" is defined as a read-only property, it can be initialized only, can't be changed


class Department {
    constructor(private readonly id: number, public name: string) {
    }

    printDepartmanetName(this: Department) {
        console.log("Department: " + this.name)
    }

    changeDepartmentId(id: number) {
        this.id = id     // ERROR: "id" is defined as a read-only property, it can be initialized only, can't be changed
    }
}