let currentPlayers = 2;
let scores = {};
let makiScores = {};
let puddingScores = {};

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupGame();
});

function setupGame() {
    const playerCount = parseInt(document.getElementById('player-count').value);
    currentPlayers = playerCount;
    
    // Initialize scores object
    scores = {};
    makiScores = {};
    puddingScores = {};
    for (let i = 1; i <= playerCount; i++) {
        scores[`player${i}`] = {
            round1: 0,
            round2: 0,
            round3: 0,
            total: 0
        };
        makiScores[`player${i}`] = {
            round1: 0,
            round2: 0,
            round3: 0
        };
        puddingScores[`player${i}`] = 0;
    }
    
    generateScorecard();
    document.getElementById('scorecard').classList.add('active');
}

function generateScorecard() {
    const scorecard = document.getElementById('scorecard');
    
    let html = '<table class="score-table">';
    
    // Header row with player names
    html += '<tr>';
    html += '<th class="round-label">Players</th>';
    
    for (let i = 1; i <= currentPlayers; i++) {
        html += `<th class="player-column" id="player${i}-header">
                    <div class="crown" id="crown${i}" style="display: none;">👑</div>
                    <input type="text" class="player-name" id="player${i}-name" 
                           value="Player ${i}" onchange="updatePlayerName(${i})">
                 </th>`;
    }
    html += '</tr>';
    
    // Round rows
    for (let round = 1; round <= 3; round++) {
        html += '<tr>';
        html += `<td class="round-label round-header">
                    Round ${round}
                    <div class="maki-controls">
                        <h4>🍙 Maki Roll Scoring</h4>
                        <div class="maki-checkboxes">
                            <div style="margin-bottom: 8px; width: 100%;">
                                <strong>Most (6 pts):</strong>
                                ${generateMakiCheckboxes(round, 'most')}
                            </div>
                            <div style="width: 100%;">
                                <strong>2nd Most (3 pts):</strong>
                                ${generateMakiCheckboxes(round, 'second')}
                            </div>
                        </div>
                    </div>
                 </td>`;
        
        for (let player = 1; player <= currentPlayers; player++) {
            html += `<td>
                        <div class="base-score-label">Base Score:</div>
                        <input type="number" class="score-input" 
                               id="player${player}-round${round}" 
                               value="0" min="0" max="999"
                               onchange="updateScore(${player}, ${round}, this.value)">
                        <div class="maki-points" id="player${player}-round${round}-maki">+0 maki</div>
                     </td>`;
        }
        html += '</tr>';
    }
    
    // Pudding row
    html += '<tr>';
    html += `<td class="round-label round-header">
                🍮 Pudding
                <div class="pudding-controls">
                    <h4>Final Game Scoring</h4>
                    <div class="pudding-row">
                        <span class="pudding-label">Most (+6):</span>
                        <div class="pudding-checkboxes">
                            ${generatePuddingCheckboxes('most')}
                        </div>
                    </div>
                    <div class="pudding-row">
                        <span class="pudding-label">Least (-6):</span>
                        <div class="pudding-checkboxes">
                            ${generatePuddingCheckboxes('least')}
                        </div>
                    </div>
                </div>
             </td>`;
    
    for (let player = 1; player <= currentPlayers; player++) {
        html += `<td>
                    <div class="pudding-points" id="player${player}-pudding">+0 pudding</div>
                 </td>`;
    }
    html += '</tr>';
    
    // Total row
    html += '<tr>';
    html += '<td class="round-label">Total</td>';
    
    for (let player = 1; player <= currentPlayers; player++) {
        html += `<td class="total-score" id="player${player}-total">0</td>`;
    }
    html += '</tr>';
    
    html += '</table>';
    
    scorecard.innerHTML = html;
    
    // Update totals and rankings
    updateAllTotals();
}

function generateMakiCheckboxes(round, type) {
    let html = '';
    for (let i = 1; i <= currentPlayers; i++) {
        const playerName = document.getElementById(`player${i}-name`)?.value || `Player ${i}`;
        html += `<label class="maki-checkbox">
                    <input type="checkbox" id="maki-${round}-${type}-player${i}" 
                           onchange="handleMakiCheckboxChange(${round}, '${type}', ${i})">
                    <span id="maki-${round}-${type}-player${i}-name">${playerName}</span>
                 </label>`;
    }
    return html;
}

function updatePlayerName(playerNum) {
    // Update the player name in all maki checkboxes when the name changes
    const newName = document.getElementById(`player${playerNum}-name`).value;
    
    // Update maki checkbox labels for all rounds
    for (let round = 1; round <= 3; round++) {
        const mostLabel = document.getElementById(`maki-${round}-most-player${playerNum}-name`);
        const secondLabel = document.getElementById(`maki-${round}-second-player${playerNum}-name`);
        
        if (mostLabel) mostLabel.textContent = newName;
        if (secondLabel) secondLabel.textContent = newName;
    }
    
    // Update pudding checkbox labels
    const puddingMostLabel = document.getElementById(`pudding-most-player${playerNum}-name`);
    const puddingLeastLabel = document.getElementById(`pudding-least-player${playerNum}-name`);
    
    if (puddingMostLabel) puddingMostLabel.textContent = newName;
    if (puddingLeastLabel) puddingLeastLabel.textContent = newName;
}

function updateScore(playerNum, round, value) {
    const score = parseInt(value) || 0;
    scores[`player${playerNum}`][`round${round}`] = score;
    
    updatePlayerTotal(playerNum);
    updateRankings();
}

function updatePlayerTotal(playerNum) {
    const playerScores = scores[`player${playerNum}`];
    const playerMakiScores = makiScores[`player${playerNum}`];
    const playerPuddingScore = puddingScores[`player${playerNum}`];
    
    const total = playerScores.round1 + playerScores.round2 + playerScores.round3 +
                  playerMakiScores.round1 + playerMakiScores.round2 + playerMakiScores.round3 +
                  playerPuddingScore;
    
    playerScores.total = total;
    document.getElementById(`player${playerNum}-total`).textContent = total;
}

function updateAllTotals() {
    for (let i = 1; i <= currentPlayers; i++) {
        updatePlayerTotal(i);
    }
    updateRankings();
}

function updateRankings() {
    // Create array of players with their totals
    const playerTotals = [];
    for (let i = 1; i <= currentPlayers; i++) {
        playerTotals.push({
            playerNum: i,
            total: scores[`player${i}`].total,
            name: document.getElementById(`player${i}-name`).value
        });
    }
    
    // Sort by total score (descending)
    playerTotals.sort((a, b) => b.total - a.total);
    
    // Clear all first place styling and crowns
    for (let i = 1; i <= currentPlayers; i++) {
        const header = document.getElementById(`player${i}-header`);
        const crown = document.getElementById(`crown${i}`);
        header.classList.remove('first-place');
        crown.style.display = 'none';
    }
    
    // Apply first place styling to the leader(s)
    const highestScore = playerTotals[0].total;
    
    // Only show first place if there are actual scores (not all zeros)
    if (highestScore > 0) {
        playerTotals.forEach(player => {
            if (player.total === highestScore) {
                const header = document.getElementById(`player${player.playerNum}-header`);
                const crown = document.getElementById(`crown${player.playerNum}`);
                header.classList.add('first-place');
                crown.style.display = 'block';
            }
        });
    }
}

// Add some keyboard navigation for better UX
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('score-input')) {
        if (e.key === 'Enter' || e.key === 'Tab') {
            // Move to next input field
            const inputs = Array.from(document.querySelectorAll('.score-input'));
            const currentIndex = inputs.indexOf(e.target);
            const nextIndex = (currentIndex + 1) % inputs.length;
            
            if (e.key === 'Enter') {
                e.preventDefault();
                inputs[nextIndex].focus();
                inputs[nextIndex].select();
            }
        }
    }
});

// Auto-select input content when focused for easier editing
document.addEventListener('focusin', function(e) {
    if (e.target.classList.contains('score-input') || e.target.classList.contains('player-name')) {
        setTimeout(() => e.target.select(), 50);
    }
});

function handleMakiCheckboxChange(round, type, playerNum) {
    const currentCheckbox = document.getElementById(`maki-${round}-${type}-player${playerNum}`);
    const isChecked = currentCheckbox.checked;
    
    if (isChecked) {
        // If checking a player for most maki, uncheck them from second most
        if (type === 'most') {
            const secondMostCheckbox = document.getElementById(`maki-${round}-second-player${playerNum}`);
            if (secondMostCheckbox.checked) {
                secondMostCheckbox.checked = false;
            }
        }
        // If checking a player for second most maki, uncheck them from most
        else if (type === 'second') {
            const mostCheckbox = document.getElementById(`maki-${round}-most-player${playerNum}`);
            if (mostCheckbox.checked) {
                mostCheckbox.checked = false;
            }
        }
    }
    
    // Update the scoring after handling the checkbox logic
    updateMakiScoring(round);
}

function updateMakiScoring(round) {
    // Clear previous maki scores for this round
    for (let i = 1; i <= currentPlayers; i++) {
        makiScores[`player${i}`][`round${round}`] = 0;
    }
    
    // Get selected players for most maki
    const mostSelected = [];
    for (let i = 1; i <= currentPlayers; i++) {
        if (document.getElementById(`maki-${round}-most-player${i}`).checked) {
            mostSelected.push(i);
        }
    }
    
    // Get selected players for second most maki
    const secondSelected = [];
    for (let i = 1; i <= currentPlayers; i++) {
        if (document.getElementById(`maki-${round}-second-player${i}`).checked) {
            secondSelected.push(i);
        }
    }
    
    // Calculate points for most maki (6 points split)
    if (mostSelected.length > 0) {
        const pointsPerPlayer = Math.floor(6 / mostSelected.length);
        mostSelected.forEach(playerNum => {
            makiScores[`player${playerNum}`][`round${round}`] += pointsPerPlayer;
        });
    }
    
    // Calculate points for second most maki (3 points split) - only if there are players with most
    if (secondSelected.length > 0 && mostSelected.length === 1) {
        const pointsPerPlayer = Math.floor(3 / secondSelected.length);
        secondSelected.forEach(playerNum => {
            makiScores[`player${playerNum}`][`round${round}`] += pointsPerPlayer;
        });
    }
    
    // Update display and totals
    for (let i = 1; i <= currentPlayers; i++) {
        const makiPoints = makiScores[`player${i}`][`round${round}`];
        document.getElementById(`player${i}-round${round}-maki`).textContent = `+${makiPoints} maki`;
        updatePlayerTotal(i);
    }
    
    updateRankings();
}

function generatePuddingSection() {
    const mostPuddingHtml = generatePuddingCheckboxes('most');
    const leastPuddingHtml = generatePuddingCheckboxes('least');
    
    document.getElementById('most-pudding-checkboxes').innerHTML = mostPuddingHtml;
    document.getElementById('least-pudding-checkboxes').innerHTML = leastPuddingHtml;
}

function generatePuddingCheckboxes(type) {
    let html = '';
    for (let i = 1; i <= currentPlayers; i++) {
        const playerName = document.getElementById(`player${i}-name`)?.value || `Player ${i}`;
        html += `<label class="pudding-checkbox">
                    <input type="checkbox" id="pudding-${type}-player${i}" 
                           onchange="updatePuddingScoring()">
                    <span id="pudding-${type}-player${i}-name">${playerName}</span>
                 </label>`;
    }
    return html;
}

function showPuddingSection() {
    // Refresh player names in pudding section
    generatePuddingSection();
    document.getElementById('pudding-section').style.display = 'block';
    document.getElementById('pudding-section').scrollIntoView({ behavior: 'smooth' });
}

function updatePuddingScoring() {
    // Clear previous pudding scores
    for (let i = 1; i <= currentPlayers; i++) {
        puddingScores[`player${i}`] = 0;
    }
    
    // Get selected players for most pudding
    const mostSelected = [];
    for (let i = 1; i <= currentPlayers; i++) {
        if (document.getElementById(`pudding-most-player${i}`).checked) {
            mostSelected.push(i);
        }
    }
    
    // Get selected players for least pudding
    const leastSelected = [];
    for (let i = 1; i <= currentPlayers; i++) {
        if (document.getElementById(`pudding-least-player${i}`).checked) {
            leastSelected.push(i);
        }
    }
    
    // Calculate points for most pudding (+6 points split)
    if (mostSelected.length > 0) {
        const pointsPerPlayer = Math.floor(6 / mostSelected.length);
        mostSelected.forEach(playerNum => {
            puddingScores[`player${playerNum}`] += pointsPerPlayer;
        });
    }
    
    // Calculate points for least pudding (-6 points split)
    if (leastSelected.length > 0) {
        const pointsPerPlayer = Math.floor(-6 / leastSelected.length);
        leastSelected.forEach(playerNum => {
            puddingScores[`player${playerNum}`] += pointsPerPlayer;
        });
    }
    
    // Update display and totals
    for (let i = 1; i <= currentPlayers; i++) {
        const puddingPoints = puddingScores[`player${i}`];
        const sign = puddingPoints >= 0 ? '+' : '';
        document.getElementById(`player${i}-pudding`).textContent = `${sign}${puddingPoints} pudding`;
        updatePlayerTotal(i);
    }
    
    updateRankings();
}
