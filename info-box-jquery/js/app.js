

function activate() {
  var headers = Array.from( document.querySelectorAll(".info-box__header"));

  headers.forEach(item => {
    // debugger;
    item.addEventListener("click", function(e) {
      var questions = Array.from(document.querySelectorAll(".info-box__section--content"));
      questions.forEach(item => {
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
