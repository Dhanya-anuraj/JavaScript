// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

// row == 1, row == 5 | (2,2) (3,3) (4,4) -> (row == col) | (2,4) (3,3), (4,2)  -> (row + col == 6)

for(row=1; row<=5; row++){
    str = ""
    for(col=1; col<=5; col++){
        if(row == 1 || row == 5 || row == col || (row+ col) == 6){
            str = str + "* "
        }
        else{
            str = str + "  "
        }

    }
    console.log(str);
    
}