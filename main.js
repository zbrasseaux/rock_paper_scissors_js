
var userscore = 0;
var computerscore = 0;

const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");

const scoreboard_div = document.querySelector(".scorboard");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice()
{
	const choices = ['r', 'p', 's'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber];
}

function choiceToWord(letter)
{
	if (letter === 'r')
		return "Rock";
	if (letter === 'p')
		return "Paper";
	return "Scissors";
}

function win(user, comp)
{
	userscore++;
	userscore_span.innerHTML = userscore;
	result_div.innerHTML = `${choiceToWord(user)} beats ${choiceToWord(comp)}. You win!`;
}

function lose(user, comp)
{
	computerscore++;
	compscore_span.innerHTML = computerscore;
	result_div.innerHTML = `${choiceToWord(comp)} beats ${choiceToWord(user)}. You lose...`;
}

function tie(user, comp)
{
	result_div.innerHTML = `${choiceToWord(user)} equals ${choiceToWord(comp)}. It's a tie!`;
}

function game(userChoice)
{
	const compChoice = getCompChoice();

	switch (userChoice + compChoice) {
		case "pr":
		case "sp":
		case "rs":
			win(userChoice, compChoice);
			break;
		
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);
			break;
		
		case "pp":
		case "rr":
		case "ss":
			tie(userChoice, compChoice);
			break;
	}
}


function main() 
{

	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})

}

main();

