## Tic Tac Toe Instructions

1. go to destination folder(/examples)
1. go to website
1. click on download link
1. download to choose destination
1. unzip folder
1. move into tictactoe folder
1. open your text editor
  1. atom .
1. you should see a folder structure like this
  ```
  tictactoe
    - css
        - main.css
    - js
        - app.js
    - index.html
  ```
1. let's hook up the css
  1. add link to css file

  ```   <link rel="stylesheet" href="css/main.css">
 ```
1. add script tag to connect javascript file place it right about the closing </body> tag

  ```
  <script src="js/app.js"></script>
  </body>
  ```
1. go to js/app.js file
1. create the var boardTarget to hold board area

  ```
  var boardTarget = document.querySelector("#gameboard-target");  
  ```
1. create addEventListener boardTarget that listens for clicks and print it to the console.

  ```
  boardTarget.addEventListener("click", function(event) {
    console.log(event.target);
    event.target.innerHTML = "X"
  })
  ```

1. we need away to keep track of the game state, who's turn is it and where are the pieces on the board
1. one way we can do it is to create an object that holds all that information for us
  ```
  var gameState = {
    playerOne: "x",
    playerTwo:"o",
    currentTurn: "x",
    board: ["", "", "",
            "", "", "",
            "", "", ""]
  }
  ```
1. let's create function that will use the gamestate to render a board

  ```
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
  }
  ```
1. let's add some logic to our app
1. create a changeTurn function that takes state as argument
  ```
  function changeTurn(state) {
    if (state.playerOne === state.currentTurn) {
      state.currentTurn = state.playerTwo;
    } else {
      state.currentTurn = state.playerOne;
    }
  }
  ```
1. create a checkForWinner function
  ```
  function checkForWinner(state) {
    var winningBlocks = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [ 2, 4, 6]
    ]
    var winner =  winningBlocks.filter( function(pattern) {
      return state.currentTurn === state.board[pattern[0]] &&
        state.currentTurn === state.board[pattern[1]] &&
        state.currentTurn === state.board[pattern[2]]
    });
    return winner;
  }
  ```
1. Note: add debugger to filter function so we can watch the iterations

  ```
  var winner =  winningBlocks.filter( function(pattern) {
  debugger;   
  ```
1. let's add more logic to the addEventListener the psuedo code looks like this
  ```
  get targetBlock
  get targetBlock data-block id
  check if block is empty
  if empty add currentTurn to board
  render board state
  checkForWinner
  if winner remove click event
  hightlight winner
  show start new game button
  clear board
  ```
1. add variables
  ```
  var block = event.target;
  var blockId = block.dataset.block;
  var winner;
  ```
1. the clickHandler function should look like this
  ```
  boardTarget.addEventListener("click", function boardHandler(event) {
    var block = event.target;
    var blockId = block.dataset.block;
    var winner;

    if (block.innerHTML === "") {
      gameState.board[blockId] = gameState.currentTurn;
      render(gameState);
    }
    winner = checkForWinner(gameState);
    if (winner.length) {
      boardTarget.removeEventListener("click", boardHandler);
      winner.forEach( function(blockId) {
        document.querySelector("[data-block='" + blockId[0] + "']").classList.add("game__block--bg-success");
        document.querySelector("[data-block='" + blockId[1] + "']").classList.add("game__block--bg-success");
        document.querySelector("[data-block='" + blockId[2] + "']").classList.add("game__block--bg-success");
      })
      setTimeout(function(event) {
        // alert("winner is Player:", gameState.currentTurn);
          var msg = document.createElement("div");
          msg.classList.add("game__msg");
          msg.innerHTML = "winner is Player:" + gameState.currentTurn;
          document.querySelector("#msg-target").appendChild(msg);

      },1000);
    } else {
      changeTurn(gameState);
    }
  })
  ```
1. create addEventListener for button clear
  ```
  newGameButton.addEventListener("click", function newGameHandler(event) {
    window.location.reload();
  ```
1.
### Bonus
1. Add different font stylesheet
  1. google fonts https://fonts.google.com/
  1. in the index.html add link to Google Font about our custom main.css

  ```
  <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" rel="stylesheet">

  <link rel="stylesheet" href="css/main.css">
```
1. Add font family style to css body

```
body {
  font-family: 'Fredericka the Great', cursive;
}
```

1. add bg hover effect for blocks
  1. if empty add game__block--bg-success
  2. if filled add game__block--bg-fail
