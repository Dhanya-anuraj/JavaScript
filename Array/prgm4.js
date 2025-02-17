expense = [12000, 5000, 60000,1200,50]
//w.a.p to find highest expense - 60000
highest = expense[0]
for(let exp of expense){
  if(highest<exp){
    highest = exp
  }  
}
console.log(highest);
console.log(`-----------------------------------`);

//w.a.p to find lowest expense - 50
lowest = expense[0]
for(let exp of expense){
    if(lowest>exp){
        lowest = exp
    }
}
console.log(lowest);
console.log(`-----------------------------------`);

//w.a.p to find the total expense
sum = 0
for(let exp of expense){
    sum = sum + exp
}
console.log(sum);

