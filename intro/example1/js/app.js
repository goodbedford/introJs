
var $btnStart = $("#btn-start");
// var btnStart = document.getElementById("btn-start");
console.log("start btn", $btnStart);
// console.log("start btn", btnStart);





$btnStart.on("click", function() {
  var $bar1 = $("#bar1");
  var $bar2 = $("#bar2");

  var count = function() {
      var num = Math.random();
      if (num <= .25) {
        num = 25;
        return num;
      } 

      if (num <= .55) {
        num = 50;
        return num;
      }

      if (num >= .56) {
        num = 100;
        return num;
      }

  };
  var currentW = $bar1.width();
  var currentW2 = $bar2.width();


  setInterval(function() {
    currentW = $bar1.width();
    currentW2 = $bar2.width();
    $bar1.width( currentW +count() );
    $bar2.width( currentW2 +count() );
  },500)

});





// var $btnP1 = $("#btn-p1");

// $btnP1.on("click", function() {
//   var p1Bar = $("#p1-bar");
//   var p1Msg = $("#p1-msg");
//   var currentHeight = p1Bar.css("top").slice(0, -2);
//   currentHeight = parseInt(currentHeight);
//   console.log("currentH",  currentHeight)
    
//     if( currentHeight > 0) {
//         currentHeight -= 50;
//         p1Bar.css("top", currentHeight);
//          console.log("currentH --", currentHeight);
//       if( currentHeight === 0) {
//              p1Msg.text("You Win");
//             p1Bar.removeClass("bar-color1").addClass("bar-color2");
//       }
//     } 
// })