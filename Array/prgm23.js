//[id, name, designation, location, salary, experience]
//using array methods
employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log(`all employee name`);
 employee.forEach((emp) => {
    console.log(emp[1]);  
});
console.log(`------------------------------------`);

//print total numbers of employee
console.log(`total numbers of employee`);
console.log(employee.length);

console.log(`------------------------------------`);


//print developer employee details
console.log(`developer employee details`);
developer = employee.filter((emp)=>emp[2]=='developer')
console.log(developer);

console.log(`------------------------------------`);

//print employee whose salary > 30000
console.log(`employee whose salary > 30000`); employee.filter((emp)=>emp[4]>30000).forEach((item)=>console.log(item[1]));



console.log(`------------------------------------`);

// print details of employee Laisha
console.log(`details of employee Laisha`);
laisha = employee.find((emp)=>emp[1]=='Laisha')
console.log(laisha);
console.log(`------------------------------------`);

//arrange the employee based on their salary in descending order
descsal = employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(descsal);

console.log(`------------------------------------`);
//arrange the employee based on their experience in ascending order
ascexp = employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(ascexp);

console.log(`------------------------------------`);
//find the total salary expence of the company
console.log(`------------------------------------`);

//find the highest salary
highest = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1[4]:emp2[4])
console.log(highest);

//find the lowest salary
//find the highest salary
lowest = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1[4]:emp2[4])
console.log(lowest);


