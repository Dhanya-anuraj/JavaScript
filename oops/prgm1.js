//[1000, 'Neel','developer']
class employee{
    //properties 
    empId
    empName
    empDesg
    //constructor
    constructor(id,name,desig){
        this.empId = id
        this.empName = name
        this.empDesg = desig
    }

    //method - function
    display(){
        console.log(`employee name is ${this.empName}`);
        
    } 
}
const emp1 = new employee('1','Neel','developer')
emp1.display()