#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWellcome to codewithabbas - cli-number-guessing\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a (number limit from 1 to 5): ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guess a correct number.");
}
else {
    console.log("Sorry, You guees a wrong number");
}
