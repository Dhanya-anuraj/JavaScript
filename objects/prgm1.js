//['1000','Neel','developer','kochi',25000,3]
a = ['1000','Neel','developer','kochi',25000,3]
//objtect -> key: value -> key is not index value as array , we can determine the key
employee = {
    empid : 1000,
    empname : 'Neel',
    empDesg : 'developer',
    empLoc : 'kochi',
    empSal : 25000,
    empExp : 3
}
console.log(a);
//display an object
console.log(employee);

console.log(`------------------------------`);
console.log(employee['empDesg']);
console.log(`------------------------------`);
// exactly empDsgn enna oru key indenkil mathre .key use cheyyavu
console.log(employee.empDesg);
console.log(`------------------------------`);

//display all keys in an given object

for(let key in employee){
    console.log(key);// all keys are display
    console.log(employee[key]);
    
}
console.log(`------------------------------`);

// object operations
//1) add ->
// (1) objectname['key] = value
employee['empAtten'] = "90%"
console.log(employee);
console.log(`------------------------------`);

//(2)Object.assign(objectname,{key:value})
Object.assign(employee,{'status':true})
console.log(employee);



