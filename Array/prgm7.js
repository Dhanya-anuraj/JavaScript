//w.a.p to find the duplicate number from given array
array = [10,20,30,20,30,40,50,60,10,10]
output =[]
for (i=0; i<array.length; i++){
    for(j=i+1; j<array.length; j++){
        if(array[i] == array [j]){
            isDuplicate = false
            for(k=0; k<=output.length-1; k++){
                if(array[i] == output[k]){
                    isDuplicate = true
                }
            }
            if(!isDuplicate){
                output.push(array[i])
            }

        }
    }
}
console.log(output.length==0? `no duplication`: output);
