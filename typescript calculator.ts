import inquirer from 'inquirer';
class cal{
    num:number;
    num2:number;
    constructor(numone:number,numtwo:number){
         this.num=numone;
         this.num2=numtwo;
    }
    calc(){
        return this.num,this.num2;

    }
}
async function call(){
const answer:{
       number1:number,
       number2:number,
       operator:string,
}=await inquirer.prompt([
    {
        type:'number',
        name:'number1',
        message:'Enter first number',


    },
    {
        type:'number',
        name:'number2',
        message:'Enter second number',

    },
    {
        type:'list',
        name:'operator',
        message:'Select an operation',
        choices:['+','-','*','/'],
    },

]);
const{number1,number2,operator}=answer;
if(number1 && number2 && operator){
    let result:number=0;
    let greet=new cal(number1,number2);
    if(operator==='+'){
        result=greet.num+greet.num2;
    }else if(operator==='-'){
        result=greet.num-greet.num2;
    }else if(operator==='*'){
        result=greet.num*greet.num2;
    }else if(operator==='/'){
        result=greet.num/greet.num2;
    }
    console.log("Answer=",result);
}else{
    console.log("Give correct information=");
}



}
async function repeat(){
do{await call();
   var again=await inquirer.prompt({
    type:'input',
    name:'restart',
    message:"if you want to continue than press y",
   })
}while(again.restart=='y'||
       again.restart=='yes'||
       again.restart=='YES')

}
repeat();




