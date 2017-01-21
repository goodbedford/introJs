var blocks = document.querySelectorAll(".game__block");

blocks.forEach(function(block) {
  block.addEventListener("mouseenter", mouseEnterHandler);
  block.addEventListener("mouseleave", mouseLeaveHandler);

})
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
