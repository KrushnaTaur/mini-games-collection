const games = [

{
name:"Number Guessing Game",
icon:"🔢",
desc:"Guess the correct number.",
link:"./games/number-guess/index.html"
},

{
name:"Higher or Lower",
icon:"📈",
desc:"Guess if the next number is higher or lower.",
link:"./games/higher-lower/index.html"
},

{
name:"Dice Roll Simulator",
icon:"🎲",
desc:"Roll a dice and get a random number.",
link:"./games/dice-roll/index.html"
},

{
name:"Random Card Picker",
icon:"🃏",
desc:"Pick a random card from the deck.",
link:"./games/card-picker/index.html"
},

{
name:"Coin Flip Game",
icon:"🪙",
desc:"Flip a coin and see heads or tails.",
link:"./games/coin-flip/index.html"
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