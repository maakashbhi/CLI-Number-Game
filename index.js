#! /usr/bin/env node
import inquirer from "inquirer";
//const randomnumber = 13;
//const randomnumber = math.randomnumber();
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "guess number",
        type: "number",
        message: "think a number in your mind"
    },
]);
if (answer.guessnumber === randomnumber) {
    console.log("Winner Winner Chicken Dinner");
}
else {
    console.log("Better luck next time");
}
