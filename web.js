#! /usr/bin/env node
console.log("Hashir Ali");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence count the word: ",
    },
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
