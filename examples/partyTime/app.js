//app.js

var btn = document.querySelector(".button");
var body = document.body;
var title = document.querySelector("#title");
var target = document.querySelector(".target");


// this listener will add a box when button is mouseover
btn.addEventListener("mouseover", function(event) {
  console.log("button mouseover event");

  var div = document.createElement("div");
  var colorTime;
  div.classList.add("box");

  // this setInterval will change backgroundColor using random time between 0-3s
  colorTime = setInterval(function() {
    div.style.backgroundColor = changeColor();
  }, (Math.random() * 3000));

  // this listener is will clear the colorTime interval and make invisible
  div.addEventListener("mouseenter", function(event) {
    clearInterval(colorTime);
    div.style.visibility = "hidden";
  });
  target.appendChild(div);
});

// this function will return a rgb color as a string
function changeColor() {
  var color = randColor();
  // console.log("color is:" + color);
  return "rgb(" + color + ")";
}

// this function will return a string of three numbers
function randColor() {
  var color = [];
  var r = randNumber(255, 1);
  var g = randNumber(255, 13);
  var b = randNumber(255, 36);

  color.push(r, g, b);

  return color.join(",");
}

// this function takes the highest possible number and the lowest number and returns the number
function randNumber(high, low) {
  var num = Math.floor((Math.random() * high) + low);

  return num;
}
