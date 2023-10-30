import inquirer from 'inquirer';
console.log('let guess the number between i to 10 in 3 tries');
let randNum=Math.floor(Math.random()*10+1);
let numTries:number=3;
let actualAnswerType:number=randNum;
interface AnswerType{
    meraGuess:number
}while(numTries>0){
 const answers=await inquirer.prompt([
    {
        name:'meraGuess',
        message:'number dalo bahi',
        type:'number',
    },

 ]);
 console.log(answers);
 console.log('you have @{numTries-1}left');
 if(answers.meraGuess=actualAnswerType){
     console.log("you guessed it right");
     numTries=0;
 }else{
    console.log("you guessed wrong");

 }
 numTries--;

 }












