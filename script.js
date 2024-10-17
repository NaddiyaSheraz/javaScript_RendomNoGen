

// function 
var secret_Num = Math.floor(Math.random()*20)+1;
var attempts = 0;
function guess(){
    attempts++;

    var user_guess = parseInt(document.getElementById("enter-number").value);
    var feedback = document.getElementById("quick-ans");

if(user_guess === secret_Num){
    feedback.innerText = "Congratulations! You've guessed the correct number!";
    feedback.style.color = "green";
    
}else if(user_guess < secret_Num){
    feedback.innerText = "Your guess is too low. Try again!";
    feedback.style.color = "red";
}else if(user_guess > secret_Num){
    feedback.innerText = "Your guess is too high. Try again!";
    feedback.style.color = "blue";
}else{
    feedback.innerText = "Your guess is out of range";
}
document.getElementById("row5").innerHTML = `<h4>Total attempts: ${attempts}</h4>`;
}

function restart() {
    secret_Num = Math.floor(Math.random() * 20) + 1; // Generate a new secret number
    attempts = 0;

    // Clear the input field and feedback
    document.getElementById("enter-number").value = ""; // Correct ID for input field
    document.getElementById("quick-ans").innerText = ""; // Clear feedback message
    document.getElementById("row5").innerHTML = "<h4>Total attempts: 0</h4>"; // Reset attempts display
}

