//w.a.p to check a given three number is armstrong or not.

num = 153 
ld = 0 
arm = 0
temp = num
while(num>0){ // 153>0 //15>0
    ld = num % 10 // 153%10 = 3 // 15%10 = 5 
    arm = arm + ld ** 3 // 0 + 3**3 = 27 // 27 + 5 ** 3 = 152 
    num = Math.floor(num/10) //153/10 = 15.3 = 15 //15/10 =1.5 =1
}
console.log(temp == arm? `number is armstrong` : 'not armstrong');
