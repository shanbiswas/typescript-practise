
// Singleton

class Department {
    name: string;
    private static instance: Department;

    private constructor(n: string) {
        this.name = n
    }

    static getInstance(departmentName: string) {
        if( this.instance ) {
            return this.instance
        }
        
        this.instance = new Department(departmentName)
        return this.instance
    }
}

const accounting_1 = Department.getInstance("IT Department")
const accounting_2 = Department.getInstance("HR Department")        // will print "IT Department"

console.log(accounting_1, accounting_2)