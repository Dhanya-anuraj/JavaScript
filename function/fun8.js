//nested function

function parent (){
    console.log(`inside the parent function`);
    function child(){
        console.log(`inside the child function`);    
    }
    child()
}
parent()