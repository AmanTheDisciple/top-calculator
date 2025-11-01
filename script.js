let num1 = '';
let num2 = '';
let operator = '';
let num1Sign=''; //Denoting whether the first number is negative or positive
let lastInputFlag=''; //Denoting last input (num1,operator or num2). Helps when clearing the last digit or operator.
let inputBox=document.querySelector('.input');

function add(num1,num2){
    return +num1 + +num2;
}

function subtract(num1,num2){
    return +num1 - +num2;
}

function multiply(num1,num2){
    return +num1 * +num2;
}

function divide(num1,num2){
    return +num1 / +num2;
}

function operate(num1,num2,operator){
    if(operator=='+'){
        return add(num1,num2);
    }else if(operator=='−'){
        return subtract(num1,num2);
    }else if(operator=='x'){
        return multiply(num1,num2);
    }else if(operator=='/'){
        return divide(num1,num2);
    }else{
        return num2;
    }
}

document.querySelector('.buttons').addEventListener('click',(e)=>{
    let classList=e.target.classList;

    if(classList.contains('number')){

        if(operator==''){
            num1 += e.target.textContent;
        }else{
            num2 += e.target.textContent;
        }
        inputBox.textContent += e.target.textContent;
        console.log('number listened');

    }else if(classList.contains('clear-all')){
        num1='';
        num2='';
        operator='';
        inputBox.textContent='';
        console.log('clear-all listened');
    }else if(classList.contains('clear')){
        switch(lastInputFlag){
            case 'num1sign':

            case 'num1':
                num1 = num1.slice(0,-1);
            case 'operator':
                operator='';
            case 'num2':
                num2 = num2.slice(0,-1);    
        }
        inputBox.textContent=inputBox.textContent.slice(0,-1);   
        console.log('clear listened');
    }
});

// num1='-2.4';
// console.log(+num1);

