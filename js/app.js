/**
 * Project: Calculator-Js
 * Author: Michael Williams
 * Version: 2.0.0
 * date: 2018-09-20 10:41:25 -0500
 * License: MIT, You may use this code in full or in part With written acknowledgement
 * Inside the code or in the README.md referencing Michael Williams.
 */

// bubble event sent from buttons up to box-container where i will bubble delegate.
const boxContainer = document.querySelector('.box-container');

/**
 *
 * @type {buttons}
 */
function showButton(event) {
    const seven = document.querySelector('.sevenBtn');
    const display = document.querySelector('.displayOutput');

    display.innerText = seven;

};

boxContainer.addEventListener('click', showButton, false);

const seven = document.querySelector('.sevenBtn');
seven.addEventListener('click', function(event) {
    const display = document.querySelector('.displayOutput');

    let s = event.target;

    display.innerText = s;
});