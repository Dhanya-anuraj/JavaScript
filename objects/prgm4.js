NewArray = [10,20,30,10,50,20,30,30,60]
//w.a.p to find the number count

numcount = {}
for(let n of NewArray ){
    if(n in numcount ){
        numcount[n] += 1
    }
    else{
        numcount[n] = 1
    }
}
console.log(numcount);



//  NewArray.forEach((item) => item in obj? obj[item]+=1 : obj[item] = 1 ); 
// console.log(obj);
