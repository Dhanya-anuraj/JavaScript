NewArray = [10,20,30,10,50,20,30,30,60]
//w.a.p to find the number count

obj = {}

 NewArray.forEach((item) => item in obj? obj[item]+=1 : obj[item] = 1 ); 
console.log(obj);
