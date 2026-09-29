let num1='';
let num2='';
let sign='';
let operator='';
let display=document.querySelector('.display');
let buttons=document.querySelector('.buttons');

function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a,b){
    return +a / +b;
}

function operate(num1,num2,operator){
    switch (operator) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}


buttons.addEventListener('click',(event)=>{
    let target=event.target;
    let value=target.textContent;
    let classList=target.classList.value;
    
    console.log(classList.includes('number'));
    if(classList.includes('number')){
        if(num1=='' && sign!=''){
            num1+=sign;
        }
        if(operator==''){
            num1+=value;
        }else if(operator!=''){
            num2+=value;
        }
        display.textContent+=value;
        if(operator=='='){
            display.textContent=value;
            operator='';
        }
    }else if(classList.includes('operator')){
        console.log('operator clause happened');
        if(value=='+' || value=='-'){
            if(num1===''){
                sign=value;
                display.textContent=sign;
            }
            else if(num2==''){
                if(operator==''){
                    operator=value;
                    display.textContent+=value;
                }else{
                    operator=value;
                    display.textContent=display.textContent.slice(0,display.textContent.length-1) + value;
                }
            }else{
                console.log(`num1=${num1} | num2=${num2} | operator=${operator}`);
                num1=operate(num1,num2,operator);
                num2='';
                operator=value;
                display.textContent= num1+value;
                
            }
        }else if(value=='/' || value=='*'){
            if(num1!='' && operator==''){
                operator=value;
                display.textContent+=value;
            }else if(operator!='' && num2==''){
                operator=value;
                display.textContent=display.textContent.slice(0,display.textContent.length-1) + value;
            }else if(num2!=''){
                num1=operate(num1,num2,operator);
                num1=parseFloat(num1).toFixed(2);
                num2='';
                operator=value;
                display.textContent=num1 + value;
            }
        }else if(value=='C'){
            num1='';
            num2='';
            sign='';
            operator='';
            display.textContent='';
        }else if(value=='='){
            if(num1!='' && operator!='' && num2!=''){
                num1=operate(num1,num2,operator);
                num1=parseFloat(num1).toFixed(2);
                num2='';
                operator='';
                display.textContent=num1;
            }
        }
    }

});