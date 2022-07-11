// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 


function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

let x = getRandomNumber(11);
let y = getRandomNumber(11);

console.log("x = " + x);
console.log("y = " + y);

if(x == 9 && y == 10) {
    console.log("How did you know?");
}
else if(y == 9 && x == 10) {
    console.log("How did you know?");
}
else {
    console.log("Just another day...");
}