
let num1 = null;
let num2 = null;
let result =0;
let operator ='';

let toDisplay =document.querySelector('.display')



function addNumber(num){

    if(num1==null){
        num1=num;

        toDisplay.textContent=`${num1}`;
    }
    else if(num1!=null && operator==''){
        num1 = String(num1)+ String(num);
        num1 =Number(num1);

        console.log(num1);
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
    operator =oper;
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
    else if(operator=='/'){
        result =num1/num2;
    }


    toDisplay.textContent=`${result}`;

}



const del =document.querySelector('.del');
del.addEventListener('click', (e) =>{
    num1=null;
    num2=null;
    result = 0;
    operator='';

    toDisplay.textContent=`${result}`;
})




