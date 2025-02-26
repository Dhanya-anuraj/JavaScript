class Bank{
    //property
    accountDetails = {
        1000 :{acno :1000,username:"userone",password:"userone",balance:5000},
        1001 :{acno :1001,username:"usertwo",password:"usertwo",balance:10000},
        1002 :{acno :1002,username:"userthree",password:"userthree",balance:1000},
        1003 :{acno :1003,username:"userfour",password:"userfour",balance:2000},
    }
    //1. w.a.p t0 validate a given account number
    validate(acno){
        return  acno in this.accountDetails?true : false
    }
    //2. w.a.p to authenticate a given account
    authenticate(acno , pswd){
        if(this.validate(acno)){
          if(this.accountDetails[acno].password == pswd){
            console.log(`valid Account details`);
            
          }
          else{
            console.log(`invalid Account or password`);
            
          }
        }
        else{
            console.log(`invalid Account or password`);
            
        }
    }

    //3. w.a.p to check the balance of a given account number
    balanceCheck(acno, pswd){
        if(this.validate(acno)){
            if(this.accountDetails[acno].password == pswd){
                console.log(`current balance of ${acno} is `);
                console.log(this.accountDetails[acno].balance);
                
              }
              else{
                console.log(`invalid password`);
                
              }
    
        }
        else{
            console.log(`invalid Account number`);
            
        }
    }

    //4. w.a.p to transfer money between two accounts
    moneyTransfer(fromacno , frompswd, toacno, amount){
        if(this.validate(fromacno)&&this.validate(toacno)){
            if(this.accountDetails[fromacno].password == frompswd){
                if(this.accountDetails[fromacno].balance>=amount){
                   console.log(`current balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance}`);

                   this.accountDetails[fromacno].balance -= amount
                   this.accountDetails[toacno].balance += amount

                   console.log(`balance of ${fromacno} is ${this.accountDetails[fromacno].balance} and ${toacno} is ${this.accountDetails[toacno].balance} after money transfer`);
                }
                else{
                    console.log(`insufficient balance`);
                    
                }
            }
            else{
              console.log(`invalid password`);
              
            }
        }
    else{
        console.log(`Invalid account number or password`);
        
    }
    }
}
//1
const obj = new Bank()
console.log(obj.validate(1000)?`account exist `: `no such accounts`);
console.log(`-----------------------------------`);

//2
obj.authenticate(1000 , 'userone')
console.log(`-----------------------------------`);

//3
obj.balanceCheck(1000 , 'userone')
console.log(`-----------------------------------`);

//4
obj.moneyTransfer(1000, 'userone' , 1003 , 1000)
console.log(`-----------------------------------`);
