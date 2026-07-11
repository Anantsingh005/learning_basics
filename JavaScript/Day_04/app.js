let fav ="Avatar";
let guess = prompt("Guess my favorite movie?");

while((fav != guess) && (guess!= "")){
    guess = prompt("What is my favorite movie?");
}

if(fav == guess){
    console.log("Congratulations!!!");
}