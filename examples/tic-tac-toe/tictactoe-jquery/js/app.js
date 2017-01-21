
// select the dom elements to manipulate
var $boardTarget = $("#gameboard-target");
var $newGameButton = $("#new-game-button");
var gameState = {
  playerOne: "x",
  playerTwo:"o",
  currentTurn: "x",
  board: ["", "", "",
          "", "", "",
          "", "", ""]
}
function changeTurn(state) {
  if (state.playerOne === state.currentTurn) {
    state.currentTurn = state.playerTwo;
  } else {
    state.currentTurn = state.playerOne;
  }
}

function render(state) {
  $boardTarget.html( [
  '<div class="game__block game__block--lg-text" data-block="0">' + gameState.board[0] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="1">' + gameState.board[1] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="2">' + gameState.board[2] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="3">' + gameState.board[3] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="4">' + gameState.board[4] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="5">' + gameState.board[5] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="6">' + gameState.board[6] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="7">' + gameState.board[7] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="8">' + gameState.board[8] +'</div>',
  ].join("") )
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
render(gameState);


$boardTarget.on("click", function boardHandler(event) {
  var block = event.target;
  var blockId = block.dataset.block;
  var winner;

  if (block.innerHTML === "") {
    gameState.board[blockId] = gameState.currentTurn;
    render(gameState);
  }
  winner = checkForWinner(gameState);
  if (winner.length) {
    $boardTarget.off("click", boardHandler);
    winner.forEach( function(blockId) {
      $("[data-block='" + blockId[0] + "']").addClass("game__block--bg-success");
      $("[data-block='" + blockId[1] + "']").addClass("game__block--bg-success");
      $("[data-block='" + blockId[2] + "']").addClass("game__block--bg-success");
    })
    setTimeout(function(event) {
      // alert("winner is Player:", gameState.currentTurn);
        var $msg = $("<div>");
        $msg.addClass("game__msg game__msg--success");
        $msg.html("winner is Player:" + gameState.currentTurn);
        $("#msg-target").append($msg);
    },1000);
  } else {
    changeTurn(gameState);
  }
});
$newGameButton.on("click", newGameHandler);
