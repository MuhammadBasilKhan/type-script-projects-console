import inquirer from 'inquirer'
async function myfunc(){
type userType={
    name:string;
    pin:number;
    balance:number;
}
let user:userType={
    name:"BVasil khan",
    pin:1001,
    balance:100000
}
const resp=await inquirer.prompt([
    {
        message:"please enter pin",
        name:"pin",
        type:"number",
    },
]);
if(resp.pin!==user.pin){
    console.log("you have entered an incorrect pin");

}
else{
    const resp=await inquirer.prompt([
        {
            name:"selectedType",
            message:"please select an option",
            type:'list',
            choices:['withdraw','FastCash','BalanceInquiry']
        },
        {
            name:"amount",
            message:"please select amount",
            type:'list',
            choices:['500','1000','2000','3000','4000','5000','10000','20000'],
            when(resp){
                return resp.selectedType=='FastCash';
            },
        },
        {
            name:"amount",
            message:"please enter amount",
            when(resp){
                return resp.selectedType=='withdraw';
            },
        },
    ]);
    if(resp.selectedType=='BalanceInquiry'){
        console.log("your balance is",user.balance);
    }
    else{
        user.balance=user.balance-resp.amount
        console.log("you new balance is:",user.balance);
    }
}
}
async function repeat(){
    
    do{await myfunc();
        var again=await inquirer.prompt([
        {
            type:"input",
            name:"restart",
            message:"do you want to continue press y"

        }
    ])
}while(again.restart=='y'||
      again.restart=='yes'||
      again.restart=='YES')

}
repeat();
