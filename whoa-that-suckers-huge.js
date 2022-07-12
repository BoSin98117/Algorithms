// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?



let sum = 0;

for(let i = -300000; i <= 300000; i++) {
    if(i % 2 == 1) {
        sum += i;
    }
}

console.log(sum);