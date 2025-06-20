let carDoor = Math.floor(Math.random() * 3) + 1; // Random door with the car
let selectedDoor = null;
let revealedDoor = null;
let wins = 0;
let losses = 0;
let gameState = 'selection'; // 'selection', 'decision', 'ended'

// Disable buttons initially
document.getElementById('switchBtn').disabled = true;
document.getElementById('stayBtn').disabled = true;

function selectDoor(door) {
  if (gameState !== 'selection') return; // Only allow selection in the first phase

  selectedDoor = door;

  // Highlight selected door
  document.querySelectorAll('.door').forEach(d => d.classList.remove('selected'));
  document.getElementById(`door${door}`).classList.add('selected');

  // Show a "thinking" message
  document.getElementById('instructions').textContent = "Hmm, let me show you what's behind one of the other doors...";

  // Delay to create suspense
  setTimeout(() => {
    // Automatically reveal a goat door
    revealGoat();

    // Enable buttons
    document.getElementById('switchBtn').disabled = false;
    document.getElementById('stayBtn').disabled = false;

    // Update game state
    gameState = 'decision';

    // Update instructions with a more kid-friendly explanation
    document.getElementById('instructions').innerHTML =
      "I showed you a GOAT! 🐐<br>Do you want to STAY with your door or SWITCH to the other door?";
  }, 1500);
}

function revealGoat() {
  // Reveal a goat door (not selected or the car door)
  for (let i = 1; i <= 3; i++) {
    if (i !== selectedDoor && i !== carDoor) {
      revealedDoor = i;
      const doorEl = document.getElementById(`door${i}`);
      doorEl.classList.add('revealed');

      // Hide the door image and show goat
      doorEl.querySelector('.door-image').classList.add('hidden');
      const content = doorEl.querySelector('.door-content');
      content.textContent = '🐐';
      content.classList.remove('hidden');
      break;
    }
  }
}

function switchDoor() {
  if (gameState !== 'decision') {
    if (gameState === 'selection') {
      alert("Please pick a door first!");
    }
    return;
  }

  // Switch to the remaining door
  selectedDoor = [1, 2, 3].find(d => d !== selectedDoor && d !== revealedDoor);

  // Update UI to show the new selection with animation
  document.querySelectorAll('.door').forEach(d => d.classList.remove('selected'));
  const newDoor = document.getElementById(`door${selectedDoor}`);
  newDoor.classList.add('selected');

  document.getElementById('instructions').textContent = "You switched! Let's see what happens...";

  // Short delay before revealing results
  setTimeout(() => endGame(), 1000);
}

function stayDoor() {
  if (gameState !== 'decision') {
    if (gameState === 'selection') {
      alert("Please pick a door first!");
    }
    return;
  }

  document.getElementById('instructions').textContent = "You stayed! Let's see what happens...";

  // Short delay before revealing results
  setTimeout(() => endGame(), 1000);
}

function endGame() {
  gameState = 'ended';

  // Disable buttons during reveal
  document.getElementById('switchBtn').disabled = true;
  document.getElementById('stayBtn').disabled = true;

  // Reveal all doors with animation
  for (let i = 1; i <= 3; i++) {
    const doorEl = document.getElementById(`door${i}`);
    const doorImage = doorEl.querySelector('.door-image');
    const doorContent = doorEl.querySelector('.door-content');

    // Hide the door image
    doorImage.classList.add('hidden');

    // Show what's behind the door
    if (i === carDoor) {
      doorContent.textContent = '🚗';
      doorEl.style.backgroundColor = "#4CAF50"; // Green for car
    } else if (i !== revealedDoor) {
      doorContent.textContent = '🐐';
      doorEl.classList.add('revealed');
    }

    doorContent.classList.remove('hidden');
  }

  // Determine win/loss with kid-friendly messages
  if (selectedDoor === carDoor) {
    wins++;
    document.getElementById('result').innerHTML = "YOU WON! 🎉<br>The car was behind Door " + carDoor + "!";
  } else {
    losses++;
    document.getElementById('result').innerHTML = "You got a goat! 🐐<br>The car was behind Door " + carDoor;
  }

  // Update stats
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;

  // Reset for next round
  setTimeout(() => {
    document.getElementById('instructions').textContent = "Let's play again! Pick a door to start!";
    resetGame();
  }, 3000);
}

function resetGame() {
  carDoor = Math.floor(Math.random() * 3) + 1;
  selectedDoor = null;
  revealedDoor = null;
  gameState = 'selection';

  // Reset all doors
  document.querySelectorAll('.door').forEach(d => {
    d.classList.remove('selected', 'revealed');
    d.style.backgroundColor = "";

    const doorImage = d.querySelector('.door-image');
    const doorContent = d.querySelector('.door-content');

    // Show door image, hide content
    doorImage.classList.remove('hidden');
    doorContent.classList.add('hidden');
  });

  document.getElementById('result').textContent = "";
  document.getElementById('instructions').textContent = "Pick a door to start!";

  // Disable buttons until a door is selected
  document.getElementById('switchBtn').disabled = true;
  document.getElementById('stayBtn').disabled = true;
}