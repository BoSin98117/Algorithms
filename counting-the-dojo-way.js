// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".



for(let i = 0; i <= 100; i++) {
    if(i % 10 === 0) {
        console.log("Num = " + i + " Coding Dojo");
    }
    else if(i % 5 === 0) {
        console.log("Num = " + i + " Coding");
    }
}


