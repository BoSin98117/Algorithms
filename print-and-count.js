// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.


for(let i = 512; i <= 4096; i++) {
    if(i % 5 == 0) {
        console.log(i);
        i++;
    }
}
