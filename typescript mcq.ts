import inquirer from 'inquirer';
async function myfunc(){
const answer:{
    mcqa:string,
    mcqb:string,
    mcqc:string,
    mcqd:string,
    mcqe:string,
    mcqf:string,
    mcqg:string,
    mcqh:string,
    mcqi:string,
    mcqj:string,

}=await inquirer.prompt([
    {
      type:'list',
      name:'mcqa',
      message:'1- Who is the first governer general of Pakistan',
      choices:['a- Quaid e Azam','b- Imran Khan','c- ZiaUlhaq'],

    },
    {
        type:'list',
        name:'mcqb',
        message:'2- what is the name of pakistan highest mountain peak',
        choices:['a- Nanga parvat','b- K2','c- Mount Everest','d- Niagra Fall'],
    },
    {
        type:'list',
        name:'mcqc',
        message:'3- How many planets are there in the solar system',
        choices:['a- 9-planets','b- 10-planets','c- 11-planets'],
    },
    {
        type:'list',
        name:'mcqd',
        message:'4- The outer surface of the sun is called?',
        choices:['a- Ozonephere','b- Photosphere','c- Thermosphere','d- Stratosphere'],
    },
    {
        type:'list',
        name:'mcqe',
        message:'5- Which planet is the farthest from the sun',
        choices:['a- Mercury','b- Pluto','c- Saturn','d- Jupiter'],

    },
    {
        type:'list',
        name:'mcqf',
        message:'6- which planet is the nearest to the sun',
        choices:['a- Mercury','b- Mars','c- Uranus','d- Venus'],

    },
    {
        type:'list',
        name:'mcqg',
        message:'7- which is the largest planet of the solar system',
        choices:['a- Earth','b- Jupiter','c- Saturn','d- Pluto'],
    },
    {
        type:'list',
        name:'mcqh',
        message:'8- The architect of Taj Mahal was',
        choices:['a- Akbar','b- Humayun','c- Dara','d- Shajehan'],
    },
    {
        type:'list',
        name:'mcqi',
        message:'9- The oldest Era is ',
        choices:['a- Hijira_era','b- English_era','c- Saka_era','d- Buddhiest_era'],

    },
    {
        type:'list',
        name:'mcqj',
        message:'10- First war in kashmir between pakistan and india took place in',
        choices:['a- 1947','b- 1948','c- 1949'],
    },
]);
const{mcqa,mcqb,mcqc,mcqd,mcqe,mcqf,mcqg,mcqh,mcqi,mcqj}=answer;
let num1:number=0;
let num2:number=0;
let num3:number=0;
let num4:number=0;
let num5:number=0;
let num6:number=0;
let num7:number=0;
let num8:number=0;
let num9:number=0;
let num10:number=0;


if(mcqa==='a- Quaid e Azam'){
     num1=num1+1;
}else{
    num1;
}if(mcqb==='b- K2'){
    num2=num2+1;

}else{
    num2;
}if(mcqc==='a- 9-planets '){
    num3=num3+1;
}else{
    num3;
}if(mcqd==='a- Ozonephere'){
    num4=num4+1;
}else{
    num4;
}if(mcqe==='b- Pluto'){
    num5=num5+1;
}else{
    num5;
}if(mcqf==='a- Mercury'){
    num6=num6+1;
}else{
    num6;
}if(mcqg==='b- Jupiter'){
    num7=num7+1;
}else{
    num7;
}if(mcqh==='d- Shajehan'){
    num8=num8+1;
}else{
    num8;
}if(mcqi==='d- Buddhiest_era'){
    num9=num9+1;
}else{
    num9;
}if(mcqj==='b- 1948'){
    num10=num10+1;
}else{
    num10;
}
let result:number=(num1+num2+num3+num4+num5+num6+num7+num8+num9+num10);
console.log("Total marks are",result);
}
async function mufun(){
    do{
        await myfunc();
        var again=await inquirer.prompt({
            
                type:"input",
                name:"restart",
                message:"Do you want to  leave than press y"

            
    })

    }while(again.restart=='y'||
           again.restart=='yes'||
           again.restart=='YES')
}

mufun();




