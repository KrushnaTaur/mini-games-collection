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
},

{
name:"Rock Paper Scissors",
icon:"✊",
desc:"Play Rock Paper Scissors vs computer.",
link:"./games/rock-paper-scissors/index.html"
},

{
name:"Even or Odd Game",
icon:"🔢",
desc:"Guess if the number will be even or odd.",
link:"./games/even-odd/index.html"
},

{
name:"Heads or Tails Predictor",
icon:"🪙",
desc:"Predict heads or tails before flip.",
link:"./games/heads-tails/index.html"
},

{
name:"Color Guessing Game",
icon:"🎨",
desc:"Guess the correct RGB color.",
link:"./games/color-guess/index.html"
},

{
name:"Emoji Guess Game",
icon:"😀",
desc:"Guess the meaning of the emoji.",
link:"./games/emoji-guess/index.html"
},

{
name:"Reaction Time Tester",
icon:"⚡",
desc:"Test how fast your reaction time is.",
link:"./games/reaction-time/index.html"
},

{
name:"Click Speed Test",
icon:"🖱️",
desc:"How many clicks can you make in 5 seconds?",
link:"./games/click-speed/index.html"
},

{
name:"Tap the Moving Box",
icon:"📦",
desc:"Click the moving box before it escapes.",
link:"./games/moving-box/index.html"
},

{
name:"Stop the Timer",
icon:"⏱️",
desc:"Stop the timer exactly at 5 seconds.",
link:"./games/stop-timer/index.html"
},

{
name:"Whack-a-Box",
icon:"🔨",
desc:"Click appearing boxes before time runs out.",
link:"./games/whack-box/index.html"
},

{
name:"Target Click Game",
icon:"🎯",
desc:"Click targets appearing on screen.",
link:"./games/target-click/index.html"
},

{
name:"Balloon Pop Game",
icon:"🎈",
desc:"Pop balloons before they escape.",
link:"./games/balloon-pop/index.html"
},

{
name:"Catch the Falling Object",
icon:"🧺",
desc:"Catch falling objects with a basket.",
link:"./games/catch-object/index.html"
},

{
name:"Hit the Random Circle",
icon:"⚪",
desc:"Click circles quickly to score.",
link:"./games/hit-circle/index.html"
},

{
name:"Memory Color Click",
icon:"🧠",
desc:"Repeat the color sequence correctly.",
link:"./games/memory-color/index.html"
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