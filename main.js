
let num1 = null;
let num2 = null;
let result =0;
let operator ='';
let nextOper ='';


let toDisplay =document.querySelector('.display')



function addNumber(num){

    
    if(num1==null){
        num1=num;

        toDisplay.textContent=`${num1}`;
    }
    else if(num1!=null && operator==''){
        num1 = String(num1)+ String(num);
        num1 =Number(num1);

        toDisplay.textContent=`${num1}`;
    }
    else if(num2==null){
        num2=num;

        toDisplay.textContent=`${num2}`;
    }
    else{
        num2 = String(num2)+ String(num);
        num2 =Number(num2);

        toDisplay.textContent=`${num2}`;
    }

    
}





function addOper(oper){

    if(num1 != null && num2!= null && operator !=''){
        num1 =calculate();
        toDisplay.textContent=`${num1}`;

        num2 =null;
        result =0;
        operator =oper;
   
    }
    else if(operator !='' && num2== null){
        nextOper =oper;
    }
    else if( nextOper!=''){
        operator=nextOper;
    }
    else{
        operator =oper;
    }
}


function calculate(){
    if(operator=='+'){
        num1=Number(num1);
        num2=Number(num2);

        result =num1+num2;
    }
    else if(operator=='-'){
        result =num1-num2;
    }
    else if(operator=='*'){
        result =num1*num2;
    }
    else if(operator=='/' && num2 !=0){
        result =num1/num2;
    }
    else if(operator=='/' && num2 ==0){
        result ="Error : divide by zero";
    }


    toDisplay.textContent=`${result}`;
    return result;

}



const del =document.querySelector('.del');
del.addEventListener('click', (e) =>{
    num1=null;
    num2=null;
    result = 0;
    operator='';
    nextOper ='';

    toDisplay.textContent=`${result}`;
})




