//h.w 
//w.a.p to find the pairs that give  pairsum from the given array using binary search

a = [2,3,4,5]
x = 0
y = x+1
pairsum = 6
flag = false
while(x<=a.length-1 && y<=a.length-1){// 2<=3 && 3<=3 // 
    if (a[x] + a[y] == pairsum){//2 + 3 == 6 ->f
        flag = true
        x++
        break
    }

}
!flag && console.log(`no pairs`);





// pairsum = 6
// flag = false
// for(i=0; i<=a.length-1; i++){
//     for(j=i+1; j<=a.length-1; j++){
//         if( a[i] + a[j] == pairsum
//         ){
//             flag =true
//             console.log(`(${a[i]}, ${a[j]})`);

//         }
//     }
//     if(flag == false){
//         console.log(`no pairs`);
//     }
// }
