// 8-> array method - foreach()
a = [1, 4, 2, 14, 25]
//w.a.p to find square of each element in the given array.

a.forEach(num => {
    console.log(num**2);
    
})
console.log(`----------------------------------`);

// 9 -> array method - map()
sq = a.map(num => num ** 2 )
console.log(sq);

console.log(`----------------------------------`);

//w.a.p to find cube of the given array using map.

cube = a.map(num => num**3)
console.log(cube);
