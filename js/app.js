/**
 * Project: Calculator-Js
 * Author: Michael Williams
 * Version: 2.0.0
 * date: 2018-09-20 10:41:25 -0500
 * License: MIT, You may use this code in full or in part With written acknowledgement
 * Inside the code or in the README.md referencing Michael Williams.
 */
const box = document.querySelector('.box-container');

function addBtn(event) {
    const btn = '.addBtn';
    const addButton = document.querySelector('.addBtn');
    let display = document.querySelector('.outputSpace')
    if (addButton.classList.contains(btn)) {
        display += display;
        console.log(display);


    }
    event.preventDefault();
}


box.addEventListener('click', function(event) {
    const display = document.querySelector('.displayOutput');
    if(event.target.tagName === 'BUTTON') {
        display.innerText = event.target.innerText;

    }



});

