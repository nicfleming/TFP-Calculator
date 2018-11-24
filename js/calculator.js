//
//JavaScript file for the simple calculator
//

// This function sets the three main values used to track
// our calculator's computations.
function init() {

    // set document.newValue to the value 0
    document.newValue = 0;
    // set document.oldValue to the value 0
    document.oldValue = 0;
    // set document.prevOp to the default op value of addition
    document.prevOp = '+';
    // set our document.repeatHitOp flag to false
    document.repeatHitOp = false;
    // call the function that is going to update the value with the new value to display
    updateResult(document.newValue);
    console.log('initialized');
  }
  
  // This function updates the calculator result screen with
  // the value of document.newValue.
  function updateResult(value) {
    var resultEl = document.getElementById('result');
    var text = document.createTextNode(value);
    resultEl.replaceChild(text, resultEl.firstChild);
    console.log('result updated to: ' + value);
  
  }
  
  // This function updates the value of document.newValue then
  // calls the function to update the results on the screen.
  function digitPressed(number) {
    // set the document repeatHitOp flag to be false since we just pressed a number
    document.repeatHitOp = false;
    // check to see if the prevOp was an = sign (this means a number being pressed
    // is a reset to a new expression)
    if (document.prevOp == '=') {
      // if true, set the old value to 0
        document.oldValue = 0;
        // then set the prev  Op to be +
        document.prevOp = '+';
        // then set the new value to be a number.
        document.newValue = number;
    } else {
    // otherwise
        console.log('number pressed: ' + number);
      // what math do we need to perform to add a new number in the ones place?
        var newVal = number; 
      // should we prevent a number from being above or below any certain values?
        if (number < -100000 || number > 100000){
            newVal = 'Number too large!';
        }
      // set the document new value to our computer newVal
        document.newValue = newVal;
        console.log('document newVal: ' + document.newValue);
    }
    // update the result with our function from above.
    updateResult(document.newValue);
  }
  
  // this function triggers the computation of the value when
  // an operator is selected
  function opPressed(operator) {
    // check to see if it's a repeatHitOp
    if (operator != document.prevOp) {
      // set the prevOp to the new operator pressed
        document.prevOp = operator;
      // do nothing since we're just changing the operation
  
    }
    // set repeatHitOp to be true
    repeatHitOp = true;
    //  initialize the result variable
    var result;
    // put oldValue and newValue into smaller variables for ease of writing
    var oldV = document.oldValue;
    var newV = document.newValue;
    // create a switch statement to determine the math to perform based on the previous operator
    // this is because if we do 1 + 2 and then press *, we need to multiply by the result of 1 + 2
    switch(operator) {
      // case for +
      case "add" :
        // set result to addition of prev and next and then break
        result = oldV + newV;
        console.log('added: ' + result);
        break;
      // case for -
      case "subtract" :
        // set result to subtraction of next from prev and then break
        result = oldV - newV;
        console.log('subtracted: ' + result);
        break;
       // case for * 
      case 'multiply':
        // set result to product of next and prev and then break
        result = oldV * newV;
        console.log('multiplied: ' + result);
        break;
      // case for / 
      case 'divide':
        // set result to dividend of next into prev then break;
        result = oldV / newV;
        console.log('divided: ' + result);
        break;
      // default case (=)
      default:
        // do nothing
        return;
    }
    // result beyond our extreme values?
    if (result > 100000 || result < -1000000){
        result = 'Result is too large!';
    }
    // set oldValue to be our result
    document.oldValue = result;
    // set the new value to be 0
    document.newValue = 0;
    // set the prevOp to be the given operator
    document.prevOp = operator;
    // update the result with our function from above with the result
    updateResult(result);
  }
  // still need- operators don't work
  // when i click two numbers the second one just replaces the old one
  // (can't type two digit numbers)