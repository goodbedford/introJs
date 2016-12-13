//app.js

var btn = document.querySelector(".button");
var body = document.body;
var title = document.querySelector("#title");
var target = document.querySelector(".target");


// this listener will add 500 small box when button is mouseover
btn.addEventListener("click", function(event) {
  console.log("button clicked");
  for (var i = 0; i < 500; i++) {
    (function() {
      var div = document.createElement("div");
      var colorTime;
      div.classList.add("box-sm");

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
    })();
  }
});

function changeColor() {
  var color = randColor();
  // console.log("color is:" + color);
  return "rgb(" + color + ")";
}

function randColor() {
  var color = [];
  var r = randNumber(255, 100);
  var g = randNumber(200, 1);
  var b = randNumber(150, 30);

  color.push(r, g, b);

  return color.join(",");
}

function randNumber(high, low) {
  var num = Math.floor((Math.random() * high) + low);

  return num;
}
