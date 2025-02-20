//14-> splice()-> add and remove items in an array diff. location
colours = ['red','blue','green','yellow','white']
console.log(colours);
console.log(`---------------------------`);

//delete blue
colours.splice(1,1)
console.log(colours);
console.log(`---------------------------`);

//delete yellow
colours = ['red','blue','green','yellow','white']
colours.splice(-2,1)
console.log(colours);
console.log(`---------------------------`);

//delete green and add purple
colours = ['red','blue','green','yellow','white']
colours.splice(2,1,'purple')
console.log(colours);
console.log(`---------------------------`);

//15 -> includes()
colours = ['red','blue','green','yellow','white']
console.log(colours.includes('green'));

console.log(`---------------------------`);
//16 -> indexof()
colours = ['red','blue','green','yellow','white']
console.log(colours.includes('green'));
console.log(`---------------------------`);

//17 -> slice()
colours = ['red','blue','green','yellow','white']
x = colours.slice(0,3)

colours = ['red','blue','green','yellow','white']
console.log(x);
y = colours.slice(-3)
console.log(y);



