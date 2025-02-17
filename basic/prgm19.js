//w.a p to display reverse of a given number
// 123 - 321
// 123/10 = 2 quotient = 12.3

num = 123
ld = 0
str = ""
while (num>0){// 123>0
   ld = num % 10 // 123 % 10 = 3
   str = str +ld // "" + 3 = "3"
   num = parseInt(num/10) // 123/10 = 12

}
console.log(str);



