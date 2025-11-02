let num1 = '';
let num2 = '';
let operator = '';
let num1Sign=''; 
let lastInputFlag=''; 
let totalBox=document.querySelector('.total');
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

function raise(num1,num2){
    return (+num1) ** (+num2);
}

function remainder(num1,num2){
    return +num1 % +num2;
}



function operate(num1,num2,operator){
    console.log(`num1=${num1}, num2=${num2}, operator=${operator}`)
    if(operator=='+'){
        return add(num1,num2);
    }else if(operator=='-'){
        return subtract(num1,num2);
    }else if(operator=='x'){
        return multiply(num1,num2);
    }else if(operator=='/'){
        return divide(num1,num2);
    }else if(operator=='^'){
        return raise(num1,num2);    
    }else if( operator=='%'){
        return remainder(num1,num2);
    }else{
        return num2;
    }
}

document.querySelector('.buttons').addEventListener('click',(e)=>{
    let classList=e.target.classList;

    if(classList.contains('number')){
        if(lastInputFlag=='equals'){
            inputBox.textContent='';
            num1+=e.target.textContent;
            lastInputFlag='num1';
        }else if(operator==''){
            num1 += e.target.textContent;
            lastInputFlag='num1';
        }else{
            num2 += e.target.textContent;
            lastInputFlag='num2';
        }
        inputBox.textContent += e.target.textContent;
        console.log('number listened');

    }else if(classList.contains('clear-all')){
        num1='';
        num2='';
        operator='';
        inputBox.textContent='';
        totalBox.textContent='';
        lastInputFlag='';
        console.log('clear-all listened');
    }else if(classList.contains('clear')){
        switch(lastInputFlag){
            case 'num1sign':
                num1Sign='';
                lastInputFlag='';
                break;
            case 'num1':
                num1 = num1.slice(0,-1);
                if(num1=='' && num1Sign==''){
                    lastInputFlag='';
                }else if(num1==''){
                    lastInputFlag='num1Sign';
                }
                break;
            case 'operator':
                operator='';
                lastInputFlag='num1';
                break;
            case 'num2':
                num2 = num2.slice(0,-1);
                if(num2==''){
                    lastInputFlag='operator';
                }      
                break;
        }
        inputBox.textContent=inputBox.textContent.slice(0,-1);  
        console.log('clear listened');
    }else if(classList.contains('operator')){
        let op=e.target.textContent;
        switch(op){
            case '+': 
            case '-':
                if(lastInputFlag=='equals'){
                    num1=inputBox.textContent;
                    inputBox.textContent+=op;
                    operator=op;
                    lastInputFlag='operator';
                }else if(num1==''){
                    num1Sign=op;
                    lastInputFlag='num1Sign';
                    inputBox.textContent=op;
                }else if(num2=='' && operator==''){
                    operator=op;
                    inputBox.textContent=inputBox.textContent += op;
                    lastInputFlag='operator';
                }else if(num2=='' && operator!=''){
                    operator=op;
                    inputBox.textContent=inputBox.textContent.slice(0,-1) + op;
                }else if(num1!='' && operator!='' && num2!=''){
                    if(num1Sign=='-'){
                        totalBox.textContent=operate(+(num1Sign+num1),+num2,operator);
                        num1Sign='';
                    }else{
                        totalBox.textContent=operate(num1,num2,operator);
                    }
                    num1=totalBox.textContent;
                    num2='';
                    inputBox.textContent=num1+op;
                    operator=op;
                }
                break; 
            case 'x':
            case '/': 
            case '^': 
            case '%':
                if(lastInputFlag=='equals'){
                    num1=inputBox.textContent;
                    inputBox.textContent+=op;
                    operator=op;
                    lastInputFlag='operator';
                }else if(num1!='' && operator==''){
                    operator=op;
                    inputBox.textContent+=op;
                    lastInputFlag='operator';
                }else if(num2=='' && operator!=''){
                    operator=op;
                    inputBox.textContent=inputBox.textContent.slice(0,-1) + op;
                }else if(num1!='' && operator!='' && num2!=''){
                    if(num1Sign=='-'){
                        totalBox.textContent=operate(+(num1Sign+num1),+num2,operator);
                        num1Sign='';
                    }else{
                        totalBox.textContent=operate(num1,num2,operator);
                    }
                    num1=totalBox.textContent;
                    num2='';
                    inputBox.textContent=num1+op;
                    operator=op;
                }
                break;
        }
        console.log(op);
        console.log('operator listened');
    }else if(classList.contains('equals')){
        if(num1!='' && operator!='' && num2!=''){
            if(num1Sign=='-'){
                inputBox.textContent=operate(+(num1Sign+num1),+num2,operator);
                num1Sign='';
            }else{
                inputBox.textContent=operate(num1,num2,operator);
            }
            totalBox.textContent='';
            num1='';
            num2='';
            operator='';
            lastInputFlag='equals';
        }
    }
});

// num1='-2.4';
// console.log(+num1);

