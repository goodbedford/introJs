
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

function mouseEnterHandler(event) {
  if($(this).html() === "") {
    $(this).addClass("game__block--bg-success");
  } else {
    $(this).addClass("game__block--bg-fail");
  }
}
function mouseLeaveHandler(event) {
  $(this).removeClass("game__block--bg-success");
  $(this).removeClass("game__block--bg-fail");
}

function changeTurn(state) {
  if (state.playerOne === state.currentTurn) {
    state.currentTurn = state.playerTwo;
  } else {
    state.currentTurn = state.playerOne;
  }
}

function render(state) {
  $boardTarget.html([
  '<div class="game__block game__block--lg-text" data-block="0">' + state.board[0] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="1">' + state.board[1] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="2">' + state.board[2] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="3">' + state.board[3] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="4">' + state.board[4] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="5">' + state.board[5] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="6">' + state.board[6] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="7">' + state.board[7] +'</div>',
  '<div class="game__block game__block--lg-text" data-block="8">' + state.board[8] +'</div>',
  ].join(""));

  var $blocks = $(".game__block");
  // no need to iterate
  // blocks.forEach(function(block) {
  //   block.addEventListener("mouseenter", mouseEnterHandler);
  //   block.addEventListener("mouseleave", mouseLeaveHandler);
  // });
  //
  $blocks.on("mouseenter", mouseEnterHandler);
  $blocks.on("mouseleave", mouseLeaveHandler);

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

$boardTarget.on("click", function boardHandler(event) {
  var $block = $(event.target);
  var blockId = $block.data("block");
  var winner;
  var $blocks;

  if ($block.html() === "") {
    gameState.board[blockId] = gameState.currentTurn;
    render(gameState);
  }
  $blocks = $(".game__block");
  winner = checkForWinner(gameState);
  if (winner.length) {
    $boardTarget.off("click", boardHandler);
    $blocks.off("mouseenter", mouseEnterHandler);
    $blocks.off("mouseleave", mouseLeaveHandler);
    winner.forEach( function(blockId) {
      $("[data-block='" + blockId[0] + "']").addClass("game__block--bg-success");
      $("[data-block='" + blockId[1] + "']").addClass("game__block--bg-success");
      $("[data-block='" + blockId[2] + "']").addClass("game__block--bg-success");
    })
    setTimeout(function(event) {
        var $msg = $("<div>");
        $msg.addClass("game__msg game__msg--success");
        $msg.html("winner is Player:" + gameState.currentTurn);
        $("#msg-target").append($msg);
    },1000);
  } else {
    changeTurn(gameState);
    if(checkForTie(gameState)) {
      $boardTarget.off("click", boardHandler);

      $blocks.addClass("game__block--bg-fail");
      $blocks.off("mouseenter", mouseEnterHandler);
      $blocks.off("mouseleave", mouseLeaveHandler);
      setTimeout(function(event) {
          var $msg = $("<div>");
          $msg.addClass("game__msg game__msg--fail");
          $msg.html("Tie Game");
          $("#msg-target").append($msg);
      },500);
    }
  }
});
$newGameButton.on("click", newGameHandler);
