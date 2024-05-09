#! /usr/bin/env node

import inquirer  from "inquirer";

// Initialize user balance and pin code

let myBalance = 5000;
let myPin = 1234;

// Welcome message

console.log("Welcome to the Ahmed's ATM");

let pinAnswer = await inquirer.prompt([{
    name: "pin",
    type:"number",
    message: "Enter Your Pin Code:"
}])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Sucessfully");
    console.log("Current Account Balance is ${myBalance}`")
    let operationAns = await inquirer.prompt([
        {
        name:"operation",
        type:"list",
        message:"Select An Operator:",
        choices: ["Withdraw Amount", "Check Balance"]

    }
])
     if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                tyoe: "number",
                message:"Enter the amount to withdraw:",
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insuffficent Balance Gareeb");            
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw SucessFully`);
            console.log(`Your Remaining Balance Is : ${myBalance}`);
            
        }

     }
     else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
        
     }

}
else{
    console.log("Pin is Incorrect, Try Again!");    
}




