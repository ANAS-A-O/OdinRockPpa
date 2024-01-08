
const chooses = ["rock", "peper", "scissors"];

function getComputerChoice() {
    let luckynum = Math.floor(Math.random() * 3);
    return chooses[luckynum];
}

function getPlayerChoice() {
    const plchoice = prompt("choose Rock, Peper, Scissors");
    let badchoose = 0;
    for (let n = 0; n < 3; n++) {
        if (plchoice.toLowerCase() !== chooses[n]) {
            badchoose++;
            if (badchoose === 3) {
                console.log("enter the right answer!!");
                return false
            }
        }
    }

    return plchoice.toLowerCase();

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("it's a Draw!!");
    } else if ((playerSelection == "scissors" && computerSelection == "peper") || (playerSelection == "peper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        console.log(`player wins ${playerSelection} beat ${computerSelection}`);
        return 0;
    } else {
        console.log(`computer wins ${computerSelection} beat ${playerSelection}`);
        return 1;
    }

}

function game() {
    let plwins = 0;
    let cpwins = 0;
    let round;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        if (playerSelection === false) {
            i--;
            continue;
        }
        const computerSelection = getComputerChoice();

        round = playRound(playerSelection, computerSelection);
        if (round === 0) {
            plwins++;
        } else if (round === 1) {
            cpwins++;
        }
        console.log(`It's round ${i + 1} | record is player: ${plwins} computer: ${cpwins}|`);
    }
    if (plwins > cpwins) {
        console.log("player wins the game");
    } else if (plwins < cpwins) {
        console.log("computer wins the game");
    } else {
        console.log("no one wins this game");
    }
}

game();