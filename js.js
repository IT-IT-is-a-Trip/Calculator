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

buttons.addEventListener('click', (e) => {
    // if (!e.target.classList.contains('')) return;
    if (e.target.classList.contains('clear all')) return;
    const key = e.target.textContent;
    if (numbers.includes(key)) {
        if (key === '0' || key === '00') {
            if (output.textContent == 0) return;
        }
        if (b == "" && operator == '') {
        a+=key;
        output.textContent = a;
        } else if (a !=='' && b !== '' && calculated && key !== '.') {
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
    } else if (key == '+/-') {
        if (output.textContent == a) {
            if (a > 0 && a !== 0 ) {
                a = -a;
                output.textContent = a;
            } else {
                a = +a
                output.textContent = a;
            };
        } else if (output.textContent == b) {
            if (b > 0 && b !== 0 ) {
                b = -b;
                output.textContent = b;
            } else {
                b = +b;
                output.textContent = b;
            };
        }
    };
    if (key === '=' ) {
        if (b === '') b = a;
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
                if (b === 0) {
                    output.textContent = 'Error';
                    a = '';
                    b = '';
                    operator = '';
                }
                a = a / b;
                break;
        }
        calculated = true;
        output.textContent = a;
        console.log(a,b,operator)
    }
    if (key === '.' && !output.textContent.includes('.'))  {
        if (b == '') {
        a += '.';
        output.textContent = a;
        } else if (b !=='') {
            b += '.';
            output.textContent = b;
        }
    }
})