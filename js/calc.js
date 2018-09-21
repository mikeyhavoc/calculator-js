/**
 * Project: Calculator-Js
 * Author: Michael Williams
 * Version: 2.1.0
 * date: 2018-09-20 10:41:25 -0500
 * License: MIT.
 */

let runningTotal = 0;
let buffer = '0';
let previousOperator;
const screen = document.querySelector('.screen');

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
   buttonClick(event.target.value);
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
    rerender();
}

function handleSymbol(value) {}

/**
 * rerender
 * pushes buffer to screen.
 */
function rerender() {
    screen.innerText = buffer;
}
