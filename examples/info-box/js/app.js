

function activate() {
  var headers = document.querySelectorAll(".info-box__header");

  headers.forEach(function(item) {
    // debugger;
    item.addEventListener("click", function(e) {
      var questions = document.querySelectorAll(".info-box__section--content");
      questions.forEach(function(item) {
        if (e.target.nextElementSibling == item) {
          item.classList.toggle("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });
    });
  });
}

activate();
