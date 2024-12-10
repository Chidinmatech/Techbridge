<script>
      const buttons = document.querySelectorAll("button");
      const resultText = document.getElementById("result");
      const playerScoreText = document.getElementById("playerScore");
      const computerScoreText = document.getElementById("computerScore");
      const winnerText = document.getElementById("winner");
      const resetButton = document.querySelector(".reset");

      let playerScore = 0;
      let computerScore = 0;

      function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
      }
      console.log(getComputerChoice());

      function playRound(playerChoice) {
        const computerChoice = getComputerChoice();

        if (playerChoice === computerChoice) {
          return "TIE";
        }
        if (
          (playerChoice === "rock" && computerChoice === "scissors") ||
          (playerChoice === "scissors" && computerChoice === "paper") ||
          (playerChoice === "paper" && computerChoice === "rock")
        ) {
          playerScore++;
          return you win! ${playerChoice} beats ${computerChoice};
        } else {
          computerScore++;
          return you lose! ${computerChoice} beats ${playerChoice};
        }
      function updateDom(playerChoice) 
        const roundResult = playRound(playerChoice);
        resultText.textContent = roundResult;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;

        if (playerScore === 3 || computerScore === 3) {
          const winner = playerScore === 3 ? "player" : "computer";
          winnerText.textContent = ${winner} wins the game;
          buttons.forEach((button) => (button.disabled = true));
        }
      }
      buttons.forEach((button) => {
        button.addEventListener("click", () => updateDom(button.id));
      });

      resetButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        resultText.textContent = ""; // Clear the round result
        winnerText.textContent = ""; // Clear the game winner message
        buttons.forEach((button) => (button.disabled = false)); // Re-enable buttons
        console.log("clear");
      });
</script>