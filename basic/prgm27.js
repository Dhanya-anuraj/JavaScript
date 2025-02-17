// w.a.prgm to find Hcf of any 2 given number

num1 = 12
num2 = 28
hcf = 0
for(i = 1; i<num1 && i<num2 ; i++){
    if(num1%i == 0 && num2%i == 0){
         hcf = i
    }
}
console.log(`Hcf of ${num1} and ${num2} is ${hcf}`);

