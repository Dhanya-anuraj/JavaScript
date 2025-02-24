//5) substring()

str = 'luminar'
x = str.substring(0,3)
console.log(x);
y = str.substring(2)
console.log(y);

console.log(`----------------------`);

//6) slice()

z = str.slice(-5)
console.log(z);

console.log(`----------------------`);

//7) trim()

str1 = "   hello"
console.log(str1);
console.log(str1.trim());
console.log(`----------------------`);

//8) split(separator)
text = "good evening all"
arr = text.split(" ")// (""), ("e")
console.log(arr);
console.log(`----------------------`);

//9) replace()
sentence = "I come from kakkanadu, i also work in kakkanadu"
a = sentence.replace('kakkanadu','kochi')
console.log(a);
console.log(`----------------------`);

//10) replaceAll()
sentence1 = "I come from kakkanadu, i also work in kakkanadu"
a1 = sentence.replaceAll('kakkanadu','kochi')
console.log(a1);
//11) Array.from()
str2 = 'luminar'
c = Array.from(str2)
console.log(c);




