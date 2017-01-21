
// select the dom elements to manipulate
var boardTarget = document.querySelector("#gameboard-target");
var newGameButton = document.querySelector("#new-game-button");
var gameState = {
  playerOne: "x",
  playerTwo:"o",
  currentTurn: "x",
  board: ["", "", "",
          "", "", "",
          "", "", ""]
}

function mouseEnterHandler(event) {
  if(this.innerHTML === "") {
    this.classList.add("game__block--bg-success");
  } else {
    this.classList.add("game__block--bg-fail");
  }
}
function mouseLeaveHandler(event) {

    this.classList.remove("game__block--bg-success");
    this.classList.remove("game__block--bg-fail");

}

function changeTurn(state) {
  if (state.playerOne === state.currentTurn) {
    state.currentTurn = state.playerTwo;
  } else {
    state.currentTurn = state.playerOne;
  }
}

function render(state) {
  boardTarget.innerHTML = [
  '<div class="game__block game__block--lg-text" data-block="0">' + gameState.board[0] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="1">' + gameState.board[1] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="2">' + gameState.board[2] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="3">' + gameState.board[3] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="4">' + gameState.board[4] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="5">' + gameState.board[5] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="6">' + gameState.board[6] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="7">' + gameState.board[7] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="8">' + gameState.board[8] +'</div>',
  ].join("");

  var blocks = document.querySelectorAll(".game__block");

  blocks.forEach(function(block) {
    block.addEventListener("mouseenter", mouseEnterHandler);
    block.addEventListener("mouseleave", mouseLeaveHandler);
  });
}
function checkForWinner(state) {
  var winningBlocks = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [ 2, 4, 6]
  ]
  var winner =  winningBlocks.filter( function(pattern) {
    // debugger;
    return state.currentTurn === state.board[pattern[0]] &&
      state.currentTurn === state.board[pattern[1]] &&
      state.currentTurn === state.board[pattern[2]]
  });
  return winner;
}
function newGameHandler() {
  window.location.reload();
}
function checkForTie(state) {
  for(var i = 0; i < state.board.length; i++) {
    if( state.board[i] === "") {
      return false;
    }
  }
  return true;
}


render(gameState);


boardTarget.addEventListener("click", function boardHandler(event) {
  var block = event.target;
  var blockId = block.dataset.block;
  var winner;
  var blocks;

  if (block.innerHTML === "") {
    gameState.board[blockId] = gameState.currentTurn;
    render(gameState);
  }
  blocks = document.querySelectorAll(".game__block");
  winner = checkForWinner(gameState);
  if (winner.length) {
    boardTarget.removeEventListener("click", boardHandler);

    blocks.forEach(function(block) {
      block.removeEventListener("mouseenter", mouseEnterHandler);
      block.removeEventListener("mouseleave", mouseLeaveHandler);
    });
    winner.forEach( function(blockId) {
      document.querySelector("[data-block='" + blockId[0] + "']").classList.add("game__block--bg-success");
      document.querySelector("[data-block='" + blockId[1] + "']").classList.add("game__block--bg-success");
      document.querySelector("[data-block='" + blockId[2] + "']").classList.add("game__block--bg-success");
    })
    setTimeout(function(event) {
      // alert("winner is Player:", gameState.currentTurn);
        var msg = document.createElement("div");
        msg.classList.add("game__msg", "game__msg--success");
        msg.innerHTML = "winner is Player:" + gameState.currentTurn;
        document.querySelector("#msg-target").appendChild(msg);
    },1000);
  } else {
    changeTurn(gameState);
    if(checkForTie(gameState)) {
      boardTarget.removeEventListener("click", boardHandler);

      blocks.forEach(function(block) {
        block.classList.add("game__block--bg-fail");
        block.removeEventListener("mouseenter", mouseEnterHandler);
        block.removeEventListener("mouseleave", mouseLeaveHandler);

      });
      setTimeout(function(event) {
        // alert("winner is Player:", gameState.currentTurn);
          var msg = document.createElement("div");
          msg.classList.add("game__msg", "game__msg--fail");
          msg.innerHTML = "Tie Game";
          document.querySelector("#msg-target").appendChild(msg);
      },1000);
    }
  }
});
newGameButton.addEventListener("click", newGameHandler);
