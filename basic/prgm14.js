//w.a.p to display 'fizz' when a number is divisible by 3, Buzz  when a number is divisible by 5 and fizzBuzz when it is divisible by 15
x = 15
if(x!=0){
    if (x % 15 == 0){
        console.log(`FizzBuzz`);
    
    }
    else if(x % 5 == 0){
        console.log('Buzz'); 
    }
    else if(x % 3 == 0){
        console.log(`Fizz`);
    }
    else{
        console.log(`Not divisible by 3,5,15`);
        
    }
}
else{
    console.log(`input numbers greater zero`);
    
}