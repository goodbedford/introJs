
var questions = [
  {
    question: `How do I select an HTML element by id?`,
    answers: [
      {
        jsVersion: `es5`,
        answer: `document.getElementById("someBox")`
      },
      {
        jsVersion: `es5`,
        answer: `document.querySelector("someBox")`
      },
      {
        jsVersion: `es2015 -aka- es6`,
        answer: `document.getElementById("someBox")`
      },
      {
        jsVersion: `$Jquery`,
        answer: `$("#someBox")`
      }
    ]
  },
  {
    question: `How do I select one HTML element by class?`,
    answers: [
      {
        jsVersion: `es5`,
        answer: `document.getElementsByClassName("some-style")[0]`
      },
      {
        jsVersion: `es5`,
        answer: `document.querySelector(".some-style")`
      },
      {
        jsVersion: `$Jquery`,
        answer: `$(".some-style:first")`
      }
    ]
  },
  {
    question: `How do I select all HTML elements by class?`,
    answers: [
      {
        jsVersion: `es5`,
        answer: `document.getElementsByClassName("some-style")`
      },
      {
        jsVersion: `es5`,
        answer: `document.querySelectorAll(".some-style")`
      },
      {
        jsVersion: `$Jquery`,
        answer: `$(".some-style")`
      }
    ]
  },
  {
    question: `How do I select one HTML element by tag?`,
    answers: [
      {
        jsVersion: `es5`,
        answer: `document.querySelector("p")`
      },
      {
        jsVersion: `$Jquery`,
        answer: `$("p:first")`
      }
    ]
  }
]

var page = document.querySelector("#page");


activate();
function activate() {
  addQuestions(questions, page);
}

function addQuestions(questions, target) {
  questions.forEach((question, index) => {
    var infoBox = document.createElement("div");
    infoBox.innerHTML = makeInfoBox(question, index);
    target.appendChild(infoBox);

  });
};
function makeInfoBox(item, index) {
  var infoBox = [
    '<div class="info-box info-box--md">',
      '<div class="info-box__section">',
        '<header class="info-box__header">' + (index + 1) + ':' +  item.question + '</header>',
        '<div class="info-box__section info-box__section--content">' ].join("");
  infoBox += item.answers.map( function(item) {
            return ['<p class="info-box__section info-box__section--body">',
                      '<span class="info-box__text info-box__text--sm info-box__text--bg">' + item.jsVersion +'::</span>',
                      item.answer,
                  '</p>'].join("")
          }).join("");
  infoBox += "</div></div></div>";
  return infoBox;
}
