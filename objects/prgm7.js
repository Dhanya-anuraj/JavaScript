products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log(`1 . product names`);

for(let prdct of products){
    console.log(prdct.pName);
}

// products.forEach((prdct)=>console.log(prdct.pName))
console.log(`---------------------------------`);

//2. print all mobile details whose display is lcd
console.log(`2. all mobile details whose display is lcd`);
for(let prdct of products){
    if(prdct.display == 'lcd'){
        console.log(prdct);
        
    }
}
// products.filter((prdct)=>prdct.display== "lcd").forEach((item)=>console.log(item))
console.log(`---------------------------------`);

//3. print 5g mobile phone name
console.log(`3. 5g mobile phone name`);
for(let prdct of products){
    if(prdct.band == "5g"){
        console.log(prdct.pName);
        
    }
}
// products.filter((prdct)=>prdct.band == "5g").forEach((item)=>console.log(item.pName))
console.log(`---------------------------------`);

//4. sort mobile based on price
console.log(`4. sort mobile based on price`);
products.sort((prdct1,prdct2)=>prdct1.price - prdct2.price).forEach((item) => console.log(item.pName)
)
console.log(`---------------------------------`);

//5. print costly mobile
console.log(`5.  costly mobile`);
costlyPrdct = products.reduce((prdct1,prdct2)=>prdct1.price >prdct2.price?prdct1 : prdct2)
console.log(costlyPrdct.pName);
console.log(`---------------------------------`);

//6. print low cost mobile
console.log(`5.  low cost mobile`);

lowcostpro = products.reduce((prdct1,prdct2)=>prdct1.price<prdct2.price? prdct1 : prdct2)
console.log(lowcostpro.pName);

