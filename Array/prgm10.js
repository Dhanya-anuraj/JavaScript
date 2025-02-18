//w.a.p to  print the number present in an array using binary search.
arr = [12,13,14,3,2,1,9 ]
//sort
arr.sort((n1 , n2) => n1 - n2)// [1,2,3,9,12,13,14]
searchItem = 2
low = 0
up = arr.length-1
isPresent = false
while(low<=up){
    mid = Math.floor((low + up)/2)
    if(arr[mid] == searchItem){
        isPresent = true
        break
    }
    else if(arr[mid] > searchItem){
        up = mid - 1
    }
    else{
        low = mid +1
    }
}
console.log(isPresent?`present`: `not present`);
