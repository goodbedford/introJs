## Tic Tac Toe Jquery Instructions

1. make a copy of the tictactoe folder and rename tictactoe-jquery
1. move into tictactoe-jquery folder
1. open your text editor
  1. atom .
1. you should see a folder structure like this
  ```
  tictactoe-jquery
    - css
        - main.css
    - js
        - app.js
        - bonusAnswer.js
    - index.html
  ```
1. go to js/app.js file
1. pseudo code:
  ```
  - add jquery
  - we change variables names to $jquery
  - change selectors to $() selectors
  - change event handler to .on
  ```
1. link to the jquery file https://cdnjs.com/libraries/jquery/2.2.4 by adding a script tag above the custom script tag js/app.js
  ```
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
  <script src="js/app.js"></script>
  </body>
    ```
1. change the var to $Jquery naming convention starting with boardTarget to $boardTarget
  - Note we are changing these names with the understanding they are $Jquery objects and must also change properties names as such
  -   ``` $boardTarget.innerHTML  to $boardTarget.html() ```
  - .classList.add() to .addClass()
    ```
    $("[data-block='" + blockId[0] + "']").addClass("game__block--bg-success");```
  - ``` document.createElement("div") to $("<div>") ```
  - .appendChild() to .append()
    ```
    $("#msg-target").appendChild(msg);
    ```
  -  


  ```
  var $boardTarget = document.querySelector("#gameboard-target");  
  ```
1. change DOM selectors to $() selectors
  ```
  var $boardTarget = $("#gameboard-target");  

  ```
1. change addEventListeners to .on() starting with $boardTarget

  ```
  boardTarget..on("click", function(event) {
    console.log(event.target);
    event.target.innerHTML = "X"
  })
  ```

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
