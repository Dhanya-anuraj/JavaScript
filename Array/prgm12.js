//w.a.p to print common numbers from the given arrays using binary search.

p = [10,11,12,20,30]
q = [11,20,25,30,33]

a = 0
b = 0
isDuplicate = false
while(a <= p.length-1 && b <= q.length-1){
    if(p[a]== q[b]){
        isDuplicate = true
        console.log(p[a]);
      a++
      b++  
    }
    else if(p[a]<q[b]){
        a++
    }
    else{
        b++
    }
}
!isDuplicate && console.log(`no common numbers`);
