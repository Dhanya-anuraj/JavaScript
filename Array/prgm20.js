//10 -> reduce ()
// return single value
expense = [12000, 5000, 60000,1200,50]
//lowest
lowest = expense.reduce((n1, n2)=>n1<n2? n1 : n2)
console.log(lowest);
console.log(`---------------------------`);
// highest
highest = expense.reduce((n1, n2)=>n1>n2? n1 : n2)
console.log(highest);
console.log(`---------------------------`);
//sum
sum = expense.reduce((n1,n2) => n1+n2)
console.log(sum);

