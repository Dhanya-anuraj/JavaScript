//w.a.p to display all the vowels from the given string.
Str = "Good afternoon"
characters = Array.from(Str)
vowels =['a','e','i','o','u','A','E','I','O','U']
for(let char of characters){
    if(vowels.includes(char)){
        console.log(char);
        
    }
}
console.log(`------------------------------------`);

//array->
Str = "Good afternoon"
characters = Array.from(Str)
vowels =['a','e','i','o','u','A','E','I','O','U']
o = []

for(let char of characters){
    if(vowels.includes(char)){
        o.push(char);
        
    }
}
console.log(o);
console.log(`------------------------------------`);





