//w.a.p to display the second largest among three given number. and arrange in descending order
num1 = 50
num2 = 100
num3 = 200

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest number is ${num2}`);
        console.log(`descending order is ${num1}, ${num2}, ${num3}`);
        
    }
    else{
        console.log(`second largest number is ${num3}`);
        console.log(`descending order is ${num1}, ${num3}, ${num2}`);

    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`second largest number is ${num1}`);
        console.log(`descending order is ${num2}, ${num1}, ${num3}`);

 
    }
    else{
        console.log(`second largest number is ${num3}`);
        console.log(`descending order is ${num2}, ${num3}, ${num1}`);

  
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`second largest number is ${num1}`);
        console.log(`descending order is ${num3}, ${num1}, ${num2}`);

    }
    else{
        console.log(`second largest number is ${num2}`);
        console.log(`descending order is ${num3}, ${num2}, ${num1}`);


    }
}
else{
    console.log(`both numbers are equal`);
    
}