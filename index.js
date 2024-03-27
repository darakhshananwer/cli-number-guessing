#!/user/bin/env node
import inquirer from "inquirer";
// 1)commputer will generate a random number
// 2)User input a guessing number
// 3)Compare user input with computer generate number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess the number between 1-6:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation right number");
}
else {
    console.log("you guess a wrong number");
}
