//diff. way to access array items
// regular for loop

fruits = ['Apple','orange', 'grapes', 'Kiwi']

for(i=0; i<=fruits.length-1; i++){
    console.log(fruits[i]);
}
console.log(`---------------------------------`);

// in method

for(let x in fruits){
     console.log(x);
     console.log(fruits[x]);
     
     
}
console.log(`---------------------------------`);
for(let y of fruits){
    console.log(y);
    
}
