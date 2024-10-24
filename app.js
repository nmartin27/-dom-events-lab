/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('button'); 
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');


/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let result = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
// console.log (event.target.innerText);

    });
});

calculator.addEventListener('click', (event) => {
     // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
//   console.log(event.target.innerText);
  const value = event.target.innerText
  //==========was running event twice ===========
//   if (event.target.classList.contains('number')) {
//     //do something with number
//     currentInput += event.target.innerText
//     display.innerText = currentInput;
//   }
//   //example
//   if (event.target.innerText === '*') { 
//     //Do something with this operator
//     currentInput += event.target.innerText
//     display.innerText = currentInput;
//   }
  // looked up the function if currentInput is number or false
  if (!isNaN(value) || value === '+' || value === '-' || value === '*' || value === '/') {
    currentInput += event.target.innerText  //had to look up meaning of +=, was not understanding
    display.innerText = currentInput;
  }
  if (value === '=') {
    result = eval(currentInput);
    display.innerText = result;
  }
  if (value === 'C') {
    currentInput = '';
    display.innerText = '';
  }
});


//not correct method
// display.forEach((button) => {
//     display.addEventListener('click', (event) => {
//     });
/*-------------------------------- Functions --------------------------------*/
