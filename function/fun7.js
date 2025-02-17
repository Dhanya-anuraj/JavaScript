// callback function
function greet(name,callback){
    console.log(`hai ${name}`);
    callback()
    
}
function A(){
    console.log(`i am a callback function`);
    
}
greet('Dhanya',A)