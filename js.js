let a = '';
let b = '';
let operator = '';
let calculated = false;

const output = document.getElementById("outputLine");

function clearAll() {
    a = '';
    b = '';
    operator = '';
    calculated = false;
    output.textContent = 0;
}
const OPERATIONS = ['+','-','x','/'];
const numbers = ['1','2','3','4','5','6','7','8','9','0','00'];
const AC = document.querySelector('.clear.all')
AC.addEventListener('pointerdown', clearAll);
let buttons = document.getElementById('buttons');

function calculate(a, b, operation) {
    let result = 0;
    switch (operation) {
        case OPERATIONS.sum:
            result = a + b;
            break;

        case OPERATIONS.substract:
            result = a - b;
            break;

        case OPERATIONS.multiply:
            result = a * b;
            break;

        case OPERATIONS.division:
            result = a / b;
            break;

        default:

            break;
    }
    return result;
}
buttons.addEventListener('click', (e) => {
    // if (!e.target.classList.contains('')) return;
    if (e.target.classList.contains('clear all')) return;
    const key = e.target.textContent;
    if (numbers.includes(key)) {
        if (b == "" && operator == '') {
        a+=key;
        output.textContent = a;
        } else if (a !=='' && b !== '' && calculated) {
            b = key;
            calculated = false;
            output.textContent = b;

        } else  {
            b+=key;
            output.textContent = b;
        }
    };
    if (OPERATIONS.includes(key)) {
        operator = key;
        output.textContent = operator;
        return;
    };
    if (key === '=' ) {
        let r = '';
        switch (operator) {
            case '+':
                a = (+a) + (+b);
                break;
    
            case '-':
                a = a - b;
                break;
    
            case 'x':
                a = a * b;
                break;
    
            case '/':
                a = a / b;
                break;
        }
        calculated = true;
        output.textContent = a;
        console.log(a,b,operator)
    }    
})