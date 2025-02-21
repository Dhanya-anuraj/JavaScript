//w.a.p to find the largest word from the given string.
str = 'my first program'
word = str.split(' ')
largest = word[0]
for(let w of word){
    if(largest.length < w.length){
        largest = w
    }
}
console.log(largest);
console.log(`---------------------------`);
//using array method

x = str.split(' ').reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(x);


