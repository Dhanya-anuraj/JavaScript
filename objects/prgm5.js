//w.a.p to find the first repeated letter
pattern = "ABCBCDA"
obj = {}
frl = pattern.split('')
//    [ 'A', 'B', 'C',
//     'B', 'C', 'D',
//     'A']
console.log(frl);
for(let f of frl){
  if(f in obj){
    console.log(f);
    break
  }
  else{
    obj[f] = 1
  }
}

