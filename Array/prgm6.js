//w.a.p to display the following output
// i/p = [4,5,6] = 4 + 5 + 6 = 15
// o/p = [11,10,9] = 15-4=11 //15-5=10 // 15-6=9

array = [4,5,6]
sum = 0
arr = []
for(let num of array){
    sum = sum + num
}
for(let num of array){
    arr.push(sum-num)
}
console.log(arr);

