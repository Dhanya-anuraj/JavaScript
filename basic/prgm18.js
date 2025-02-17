// input = 2 3 4
//0/p = 24 369 4936
//string
input = 2
i=1
str =""
pro = 0
while(i<=input){
    str = str +i
    i++
    pro = str * input
}
console.log(pro);
console.log(`------------------------------------`);
//number

input = 3
i = 1
num=0
while(i<=input){
    num = num*10 + i
    i++
}
console.log(num*input);

console.log(`------------------------------------`);

//using sum

input = 3
j = 1
str = ""
sum = 0
while(j <= input){ // 1<=3 //2<=3 //3<=3
  str = str + input // "" + 3 = "3" // "3"+3 ="33" // "33" + 3 = "333"
  sum = sum + Number(str) // 0 + "3" =3 // 3 + "33" =36// 36 + " 333" = 369
  j++
}
console.log(sum);
