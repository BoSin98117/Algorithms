// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.



function countdownByFours() {
    let i = 2016;
    while(i > 0) {
        if(i % 4 == 0) {
            console.log(i);
        }
        i--
    }
}

countdownByFours();