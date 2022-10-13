import readline from "readline-sync";
const randNum = Math.ceil(Math.random()*10);
let guess = Number(readline.question("What number am I thinking of? (1-10): "));
while(guess !== randNum){
    if (guess > randNum){
        guess = Number(readline.question("Your guess is too high. Try again: "))  
    } else {
        guess = Number(readline.question("Your guess is too low. Try again: "))
    }
}
console.log('Congratulations! You guess correct. ', guess);