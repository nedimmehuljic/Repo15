function checkVariableScope(){
    'use strict';
    
    // only change line of code below
    let i = 'function variable';
    // only change line of code above
    
    if(true){
      
      // only change code below this line
      let i = 'block variable';
      // only change code above this line
      
      console.log('Scope i is: ', i);
    }
    console.log('Scope i is: ', i);
    return i;
  }
  checkVariableScope();
  module.exports = checkVariableScope;