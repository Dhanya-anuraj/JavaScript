text = "HAI HELLO ALL HELLO WORLD"

//W.A.P to print the word count from the given string
// o/p -> {
// HAI :1,

// HELLO : 2,
// ALL : 1,
// WORLD : 1
//}

//  wrds  = text.split(' ')
//  console.log(wrds);
//  console.log(`-------------------------------`);
 obj = {}
//  for(let w of wrds){
//   if(w in obj){
//     obj[w] += 1
//   }
//   else{
//     obj[w] = 1
//   }
//  }
//  console.log(obj);
 
text.split(" ").forEach((item) =>item in obj?obj[item]+=1 : obj[item]=1);
console.log(obj);

