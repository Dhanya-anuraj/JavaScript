//w.a.p to check whether 2 is present in the given array
ispresent = false
array = [ 10,5,2,3,17,9,15]
for(let a of array){ // 10 // 5 // 2
    if(a==2){ //10==2-f // 5==2-f // 2==2-t 
        ispresent = true 
        break
    }
}
console.log(ispresent? `present` : `not Present`);

