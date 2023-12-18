// Arrays,Built-in Array Methods,Loops,TDD Exercise

// Arrays are a special type of objects .The typeof operator in javascript returns "object" for arrays.
// Arrays use numbers to access its "elements".e.g.[0] and objects use names to access its "members.".e.g. person.firstName
// You should use ibjects when you want the element names to be strings and  should use arrays when you want the element names to be numbers.

// basic syntax

// while(condtion){
//     // code
//     // so called "loop body"
// }

// While the condition is "truthy",the code from the loop body is executed
// A single execution of the loop body is called an iteration

// do{
//     // loop body
// }while(condition);

// This should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy,the other form is preferred while{...
// }

// for (begin; condition; step) {
//   // ...loop body
// }

// Any part of the for loop can be skipped also whole part can be skipped that leads to inifinite loop.

// continue directiove is loghter version of break.It doesn't stop the whole loop.Instead,it stops the current iteration and forces the loop to start a new one(if the condition allows).
// .i.e. we can use it if we are done with the current iteration and would like to move on to the next one

// for (i = 0; i <= 10; i++) {
//   // if true ,skip the remaining part of the body
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// Break and continue cannot be used with ternary operator

// postfix form returns the original value of the  variable,before the increment/decrement.
// The prefix form returns the vaue after the increment/decrement.
