class student{
    //properties
    stdntName
    stdntRollno
    stdntDiv

    //constructor
    constructor(name,rollno,div){
        this.stdntName = name
        this.stdntRollno = rollno
        this.stdntDiv = div
    }

    //method
    display(){
        console.log(`student division is ${this.stdntDiv}`);
    }
}
const stdnt1 = new student('Anu','3','A')
stdnt1.display()