// Given a string, check if it is a palindrome by using stacks methods only.
// Given an input string consisting of brackets such as "{ ( ) } [ ]" write a function to check whether the orders of each respective pair of brackets are correct. 
// Given an input stack, reverse the stack using recursion.
// 	Hint: This may require the use of a helper function.

//----------------------------------------------------------------

function isOrdered (str) {
  let newStack = new Stack();
  for(let el of str) {
      if(el === ")"){
          if(newStack.peek() !== "(" ){
              return false;
          } else {
              newStack.pop();
          }   
      } else if(el === "]"){
          if(newStack.peek() !== "[" ){
              return false;
          } else {
              newStack.pop();
          }   
      } else if(el === "}"){
          if(newStack.peek() !== "{" ){
              return false;
          } else {
              newStack.pop();
          }   
      } else {
          newStack.push(el)
      }
  }    
  return true;
}

​
console.log(isOrdered('({})[]'));
console.log(isOrdered('({)[]'));
console.log(isOrdered(']()[]'));
//----------------------------------------------------------------

function Stack() {
this.dataStore = [];
this.top = 0;
this.push = push;
this.pop = pop;
this.peek = peek;
this.clear = clear;
this.length = length;
}

function push(element) {
this.dataStore[this.top++] = element;

}

function pop() {
return this.dataStore[--this.top];

}

function peek() {
return this.dataStore[this.top - 1];
}

function length() {
return this.top;

}

function clear() {

this.top = 0;
}

function isPalindrom(word) {
if (word.length > 0) {
  let a = new Stack();
  for (let i = 0; i <= word.length - 1; i++) {
    a.push(word[i]);
  }
   reWord = '';
  while (a.length() > 0) {
    reWord += a.pop();
  }
  console.log(reWord);
}
if (word == reWord) {
  console.log(word + ' its a Palindrome');

} else {
  console.log(word + ' its not a Palindrome');
}

}

isPalindrom('wow');
isPalindrom('dad');
isPalindrom('long');
//----------------------------------------------------------------
function reverse(stack){
if(stack.length ===0){
  return;
}
let temp =stack.pop();
reverse(stack);
stack.push(temp);
console.log(stack)
}

reverse([1,2,3,4,5])
reverse([7,8,9])
reverse([1,2,3])
