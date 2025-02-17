//w.a.p to print common numbers from the given numbers from the arrays

p = [10,11,12,20,30]
q = [11,20,25,30,33]
//o/p => 11,20,30

// for(i=0; i<=p.length-1; i++){
//     for(j=0; j<=q.length-1; j++){
//         if(p[i] == q[j]){
//             console.log(p[i]);
            
//         }
//     }
// }
isCommon = false
for(let p1 of p){
    for(let q1 of q){
      if(p1 ==q1){
        isCommon = true
        console.log(p1);
        
      }
    }
}
!isCommon && console.log(`no common nubers`);
