//w.a.p to return a new array with elements with following condition
//if the parent array contain element greater than equal to 13, decrement with 1
// if the parent array contain element less than   13, increment with 1

a = [10,11,12,13,14]

x = a.map(num =>num>=13? num-1 : num+1 )
console.log(x);
