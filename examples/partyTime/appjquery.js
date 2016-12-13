//app.js

var btn = $(".button");
var body = document.body;
var title = $("#title");
var target = $(".target");

// listening for mouseover
btn.on("mouseover", function(event) {
  var div = document.createElement("div");
  div.classList.add("box");

  setInterval(function() {
    div.style.backgroundColor = changeColor();
  }, 1000);

  target.append(div);
});

// this function will return a rgb color as a string
function changeColor() {
  var color = randColor();
  return "rgb(" + color + ")";
}

// this function will return a string of three numbers
function randColor() {
  var color = [];
  var r = randNumber(255, 50);
  var g = randNumber(20, 13);
  var b = randNumber(40, 36);

  color.push(r, g, b);

  return color.join(",");
}
// this function takes the highest possible number and the lowest number and returns the number
function randNumber(high, low) {
  var num = Math.floor((Math.random() * high) + low);

  return num;
}
