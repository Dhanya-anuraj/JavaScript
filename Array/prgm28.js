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

// 1.  Display all product prices.
console.log(`all product prices`);
products.forEach((item )=>console.log(item[2]))
console.log(`-------------------------------------`);

// 2. Display products with stock greater than 50.
console.log(`products with stock greater than 50`);
 products.filter((pro)=>pro[3]>50).forEach((item)=>console.log(item[1]))
console.log(`-------------------------------------`);

// 3. Find the product with the lowest price.
console.log('product with the lowest price.');
lwstprice = products.reduce((pr1,pr2)=>pr1[2]<pr2[2]?pr1:pr2)
products.filter((item)=>item[2]==lwstprice[2]).forEach((pro)=>console.log(pro[1]))
console.log('-------------------------------------');
// 4. Display products whose names start with the letter 'l'.
console.log(`products whose names start with the letter 'l'`);
 products.filter((prdct)=>prdct[1].startsWith('l')).forEach((item)=>console.log(item[1]))
 console.log(`-------------------------------------`);

// 5. Calculate the total stock of all products.
console.log(`total stock of all products`);
totstk = products.map((pro)=>pro[3]).reduce((prdct1,prdct2)=>prdct1+prdct2)
console.log(totstk );
console.log(`-------------------------------------`);

// 6. Print the name of the cheapest product.
console.log(`name of the cheapest product`);
console.log(lwstprice[1]);
console.log(`-------------------------------------`);

// 7. Check if all products have stock available.
avstck = products.every((prdct)=>prdct[3]>0)
console.log(avstck?`yes`:`no`);
console.log(`-------------------------------------`);

// 8. Find the first product with a price above Rs. 60.
console.log('first product with a price above Rs. 60.');
x = products.find((prdct)=>prdct[2]>60)
console.log(x[1]);
console.log(`-------------------------------------`);

// 9. Sort products based on price in ascending order.
console.log(`Sort products based on price in ascending order.`);
 products.sort((prdct1,prdct2)=>prdct1[2]-prdct2[2]).forEach((item)=>console.log(item[1]) )
 console.log(`-------------------------------------`);

// 10. Create a new array containing only product names.
console.log(` a new array containing only product names.`);
prdctname = products.map((prdct)=>prdct[1])
console.log(prdctname);
console.log(`-------------------------------------`);

// 11. Count how many products are priced below Rs. 40.
console.log(` how many products are priced below Rs. 40.`);
// for(let prdct of products){
//   if(prdct[2]<40){
//     console.log(prdct[1]);
    
//   }
// }
cntprdct = products.filter((prdct)=>prdct[2]<40).length
console.log(cntprdct);
console.log(`-------------------------------------`);

// 12. Check if there is any product with a stock of exactly 20.
console.log(`if there is any product with a stock of exactly 20`);
stck = products.some((prdct)=>prdct[3]==20)
console.log(stck?`yes`: `no`);
console.log(`-------------------------------------`);

// 13. Display the product with the second-highest price.
console.log(`the product with the second-highest price.`);
// x = products.slice().sort((prdct1,prdct2)=> prdct2[2]-prdct1[2])
// console.log(x[1][1]);

console.log(`-------------------------------------`);

// 14. Find the total value of the stock for each product (price × stock).
products.forEach((prdct) => {
    let stockValue = prdct[2] * prdct[3];
    console.log(`${prdct[1]}: Rs. ${stockValue}`);
});


// 15. Display all product names in uppercase.

// 16. Group products by their price range:

// Below Rs. 30
// Rs. 30 to Rs. 60
// Above Rs. 60

// 17. Find the average price of all products.

// 18. Remove products that are out of stock.

// 19. Check if any product name contains the word 'day'.

// 20. Reverse the order of the product array.
console.log(`Reverse the order of the product array.`);
products.slice().reverse().forEach((item) => console.log(item[1]));


