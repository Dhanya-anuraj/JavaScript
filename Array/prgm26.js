 //[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log(`display all product name`);
 products.forEach((prdct)=>{
    console.log(prdct[1]);
    
 });
 console.log(`--------------------------------------------`);
 
//2. display product whose price < Rs.50
console.log('product whose price < Rs.50');
prdctprice = products.filter((num)=>num[2]<50).forEach((item)=>{
    (console.log(item[1]));
})
console.log(prdctprice);
console.log(`--------------------------------------------`);

//3. print price of oreo
console.log(`price of oreo`);
priceoreo = products.find((prdct)=>prdct[1]=='oreo')
console.log(priceoreo[2]);
console.log(`--------------------------------------------`);

//4. print costly product name
console.log(`costly product name`);
cstlyprdct = products.reduce((prdct1,prdct2)=>prdct1[2]>prdct2[2]?prdct1:prdct2)
console.log(cstlyprdct[1]);
console.log(`--------------------------------------------`);

//5. display out of stock product
console.log(`out of stock product`);
stock = products.filter((prdct)=>prdct[3]==0).forEach((item)=>console.log(item[1]));
console.log(`--------------------------------------------`);

//6. sort products based on stock in decsending order
 products.sort((prdct1,prdct2)=>prdct2[3]-prdct1[3]).forEach((item)=>{
    console.log(item[1]);
    
})
console.log(`--------------------------------------------`);

//7. print product having maximum available stock
maxstck = products.reduce((prdct1,prdct2)=>prdct1[3]>prdct2[3]?prdct1:prdct2)
console.log(maxstck[1]);
console.log(`--------------------------------------------`);

//8. is there any product can be purchased by Rs. 10
p = products.some((prdct)=>prdct[2]==10)
console.log(p);
console.log(`--------------------------------------------`);

//9. Is there any product in the range of 10 to 30


//10. print all products in the range of 10 to 30