var car = {
    name : "Baleno",
    model: "Hatch back",
    manufacturer: "maruti",
    price : "18Lakh"
}
//1. display the car name and manufacturer name.
console.log(` display the car name and manufacturer name.`);
console.log(`car name is${car.name} and manufacturer is ${car.manufacturer}`);
console.log(`-------------------------------------`);

//2. check "model" key is present in the object if present print the value.
console.log(`"model" key is present in the object if present print the value`);
for(let c in car){
    if(c == 'model'){
        console.log(car.model);
        
    }
}
// 'model' in car && console.log(car.model);
console.log(`-------------------------------------`);

// 3. add "varient" key to the car object with value as "Manuel"
car["varient"] = ["manuel"]
console.log(car);
console.log(`-------------------------------------`);

//4. insert another value to "automatic" to varient key.
car.varient.push('automatic')
console.log(car);
console.log(`-------------------------------------`);

//5. add 'color' key to the object with value as "red","yellow","white"
car["color"] = ["red","yellow","white"]
console.log(car);
