/**
 * Project: Calculator-Js
 * Author: Michael Williams
 * Version: 2.1.0
 * date: 2018-09-20 10:41:25 -0500
 * License: MIT.
 */

let runningTotal = 0;
let buffer = '0';
let previousOperator = null;
const screen = document.querySelector('.screen');

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
    const key = event.target;
    const action = key.dataset.action;
 console.log(event.target.value);
    if (!action) {
        buttonClick(event.target.innerText);
    } else {
        if (action === 'divide') {
            divide(event.target.innerText);
        } else if(action === 'multiply') {
            multiply(event.target.innerText);
        } else if(action === 'subtract') {
            subtract(event.target.innerText);
        } else if(action === 'add') {
            addition(event.target.innerText);
        } else if(action === 'calculate') {
            calculate(event.target.innerText);
        } else if (action === 'clear') {
            clear(event.target.innerText);
        }
    }

});

/**
 * buttonClick
 * check whether a number or not, pass to handleSymbol function or handleNumber function.
 * @param value
 */
function buttonClick(value) {
    if(isNaN(parseInt(value))) {

        handleSymbol(value);
    } else {

            handleNumber(value);
    }
    rerender();
}

/**
 * handleNumber
 * checks buffer, if str(0) adds value, else concatenates value.
 * @param value
 */
function handleNumber(value) {
  if (buffer === '0') {
      buffer = value;
  } else {
      buffer += value;
  }

}

/**
 * handleSymbol
 * switch statement checking math symbols that are on calculator. else goes to handleMath.
 * @param value
 */
function handleSymbol(value) {


    switch(value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            console.log('blank');
            if (previousOperator === null) {
                return;
            }
            console.log('equals');
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = ' ' + runningTotal;
            runningTotal = 0;
            break;
            console.log('arrow');
        case `&larr;`:
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            console.log('default');
            handleMath(value);
            break;
    }
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;

    buffer = '0';
}

function flushOperation(intBuffer) {
    const divide = `&div;`;
    const times = `&times;`;
    const subtract = `&minus;`;
    const plus = `&plus;`;

    if (previousOperator === '&div;') {
        console.log('divide');
        runningTotal /= intBuffer;
    } else if (previousOperator === `&times;`) {
        console.log('times');
        runningTotal *= intBuffer;
    } else if (previousOperator === subtract) {
        console.log('sub');
        runningTotal -= intBuffer;
    } else {
        console.log('add');
        runningTotal += intBuffer
    }
}


/**
 * rerender
 * pushes text to screen.
 */
function rerender() {
    screen.innerText = buffer;
}