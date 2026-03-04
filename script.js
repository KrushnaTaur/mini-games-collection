const games = [

{
name:"Number Guessing Game",
icon:"🔢",
desc:"Guess the correct number.",
link:"./games/number-guess/index.html"
},

{
name:"Rock Paper Scissors",
icon:"✊",
desc:"Play against the computer.",
link:"./games/rock-paper-scissors/index.html"
},

{
name:"Dice Roll Simulator",
icon:"🎲",
desc:"Roll a random dice.",
link:"./games/dice-roll/index.html"
},

{
name:"Tic Tac Toe",
icon:"❌",
desc:"Classic 2 player grid game.",
link:"./games/tic-tac-toe/index.html"
}

];

const grid = document.getElementById("gamesGrid");
const count = document.getElementById("gameCount");

games.forEach(game => {

const card = document.createElement("div");

card.className="game-card";

card.innerHTML = `
<div class="game-icon">${game.icon}</div>
<h4>${game.name}</h4>
<p>${game.desc}</p>
<a href="${game.link}">Play</a>
`;

grid.appendChild(card);

});

count.textContent = games.length;