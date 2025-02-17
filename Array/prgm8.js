//w.a.p to find the pairs that give  pairsum from the given array.
a = [2,3,4,5]
pairsum = 6
flag = false
for(i=0; i<=a.length-1; i++){
    for(j=i+1; j<=a.length-1; j++){
        if( a[i] + a[j] == pairsum
        ){
            flag =true
            console.log(`(${a[i]}, ${a[j]})`);

        }
    }
    if(flag == false){
        console.log(`no pairs`);
    }
}
