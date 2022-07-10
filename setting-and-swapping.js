// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.


let myNumber = 42;
let myName = "Bo";

let temp;

console.log("myNumber = " + myNumber);
console.log("myName = " + myName);

temp = myNumber;
myNumber = myName;
myName = temp;

console.log("myNumber = " + myNumber);
console.log("myName = " + myName);