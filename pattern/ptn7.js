// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * * 
// *

for(row=1; row<=5; row++){
    str = ""
    for(col=1;col<=row; col++){
        str = str+ "* "
    }
    console.log(str);
    
}
for(row=1; row<=4; row++){
    str = ""
    for(col=4; col>=row; col--){
        str = str + "* "
    }
    console.log(str);
    
}