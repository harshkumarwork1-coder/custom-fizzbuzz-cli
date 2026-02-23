//fizzbuzz
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter starting number : ", function(start){
    rl.question("Enter Ending number : ", function(end){
        
        start = parseInt(start);
        end = parseInt(end);

        for(let i = start; i <= end; i++){
            if(i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            }else if(i % 3 === 0    ) {
                console.log("Fizz");
            }else if (i % 5 === 0) {
                console.log("Buzz");
            }else{
                console.log(i + " Nothing, no Fizz-Buzz!");
            }
        }

        rl.close();
    });
});



