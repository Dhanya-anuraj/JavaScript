//w.a.p to check a given string  is palindrome or not.
//eg :- "malayalam"
str = "malayalam"
pal = ''
for(i=str.length-1; i>=0; i--){
    pal = pal + str[i]
}
console.log(pal == str ? `palindrome`:'not palindrome');
console.log(`----------------------------`);

//using array method
pal1 = str.split('').reverse().join('')
console.log(pal1==str?`palindrome`:'not palindrome');
console.log(`----------------------------`);

//using start and end

start = 0
end = str.length-1
isPal = true
while(start<end){
    if(str[start] != str[end]){
      isPal = false
    }
    start++
    end--
}
console.log(isPal?`palindrome`:'not palindrome');
