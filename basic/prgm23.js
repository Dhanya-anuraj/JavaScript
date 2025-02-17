//w.a.p to display  number whose exponential is in the given range  8-36
//user can input the power to find the exponential for a particular number

power = 2
up = 36
low = 8
i = 1

while(i<=up){ //1<=36
    if(i>=low ** power && i**power <= up ){
        console.log(i); 
    }
    i++
}
