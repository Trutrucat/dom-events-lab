/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      
    });
  });


  let num1 = 0
  let num2 
  let operator 
  let result = 0

const numberBtnEls = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const displayEl = document.querySelector('.display')
  const render = () => {
displayEl.textContent = result
  }
  const updateResult = () => {
    result = num1
    render ()
  }
  const updateNumbers = (event) => {
    console.log(event.target.textContent)
    if(!operator){
        if(!num1){
          num1 = event.target.textContent
        } else {
          num1 += event.target.textContent
          
        }
        }else{
          if (!num2) {
            num2 = event.target.textContent
          }else {
            num2 += event.target.textContent
      }
   }


      updateResult()
    }
const updateEqual = (event) => {
  console.log(event.target.textContent)
  if(operator === '+') {
    output = (num1+num2)
  }
  if(operator === '-'){
    output = (num1-num2)
  }
  if(operator === '*'){
    output = (num1*num2)
  }
  if(operator === '/'){
    output = (num1/num2)
  }
  
  }

//render()
const updateOperator = (event) => {
  console.log(event.target.textContent)
  operator = event.target.textContent
  event.target.style.border = 'solid white'

}

numberBtnEls.forEach((numBtnEl) => {
numBtnEl.addEventListener('click', updateNumbers)
})

operatorBtnEls.forEach((operatorBtnEl) => {
operatorBtnEl.addEventListener('click', updateOperator)
})

equalBtnEl.forEach((eqBtnEl) => {
  eqBtnEl.addEventListener('click', updateEqual)
})

render()

  // calculator.addEventListener('click', (event) => {
  //   // This log is for testing purposes to verify we're getting the correct value
  //   // You have to click a button to see this log
  //   console.log(event.target.innerText);
  
  //   // Example
  //   if (event.target.classList.contains('number')) {
  //     // Do something with a number
  //   }
  
  //   // Example
  //   if (event.target.innerText === '*') {
  //     // Do something with this operator
  //   }
  // });
  // constants ?
// variables
    // tbd
//     num1 = number(button text)
//     num2 = number(button text)
//     operator - "+", "-", "/", "*"
//     result = "3.14"
// // dom elements-
// buttons
//    div.number
//     div.operator
//     div.equal
// result - .display

// // event handler - 
//     click handler for each group of elements
    // functionality will be tied to its button 