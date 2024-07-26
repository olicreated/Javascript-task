
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');

const score0E1 = document.getElementById('score--0');
const score1E1 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');
const current0E1 = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');

// Buttons
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Reset the default score to 0 
score0E1.textContent = 0;
score1E1.textContent = 0;
// Hide the image
diceE1.classList.add('hidden');

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;


// Function to switch players
function switchPlayer() {
   currentScore = 0;
   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0; // Toggle between players
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};


// Show image when clicked
btnRoll.addEventListener('click', function() {
    if (playing) {
        diceE1.classList.remove('hidden');

        // Generate the random number
        const dice = Math.floor(Math.random() * 6) + 1;

        // Display random image
        diceE1.src = `/images/dice-${dice}.png`;

        // Check for rolled player 1
        if (dice !== 1) {
            // Display the score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch the player

            document.getElementById(`current--${activePlayer}`).textContent = 0;
            switchPlayer();
        }
    }
});

// Hold button
btnHold.addEventListener('click', function() {
    if (playing) {
        // Add current score to the active player's total score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check for win condition
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceE1.classList.add('hidden');
            document.body.style.backgroundColor = 'green';
            document.getElementById(`name--${activePlayer}`).textContent = 'You Won!';
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// New game button
btnNew.addEventListener('click', init);

// Function to initialize the game
function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0E1.textContent = 0;
    score1E1.textContent = 0;
    current0E1.textContent = 0;
    current1E1.textContent = 0;

    diceE1.classList.add('hidden');
    document.body.style.backgroundColor = ''; // Reset background color
    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
}










