// w.a.p to check whether a given number is palindrome or not.
// eg : 121 - 121

num = 121
ld = 0
str = ""
temp = num
while (num>0){// 123>0
    ld = num % 10 // 123 % 10 = 3
    str = str +ld // "" + 3 = "3"
    num = parseInt(num/10) // 123/10 = 12
 }
console.log(temp == str ?`Number is Palindrome` : `not palindrome`);
 