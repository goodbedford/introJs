
var questions = [
  {
    question: `How do I select an HTML element by id?`,
    answers: [
      {
        catergory: `es5`,
        answer: `document.getElementById("someBox")`
      },
      {
        catergory: `es5`,
        answer: `document.querySelector("someBox")`
      },
      {
        catergory: `es2015 -aka- es6`,
        answer: `document.getElementById("someBox")`
      },
      {
        catergory: `$Jquery`,
        answer: `$("#someBox")`
      }
    ]
  },
  {
    question: `How do I select one HTML element by class?`,
    answers: [
      {
        catergory: `es5`,
        answer: `document.getElementsByClassName("some-style")[0]`
      },
      {
        catergory: `es5`,
        answer: `document.querySelector(".some-style")`
      },
      {
        catergory: `$Jquery`,
        answer: `$(".some-style:first")`
      }
    ]
  },
  {
    question: `How do I select all HTML elements by class?`,
    answers: [
      {
        catergory: `es5`,
        answer: `document.getElementsByClassName("some-style")`
      },
      {
        catergory: `es5`,
        answer: `document.querySelectorAll(".some-style")`
      },
      {
        catergory: `$Jquery`,
        answer: `$(".some-style")`
      }
    ]
  },
  {
    question: `How do I select one HTML element by tag?`,
    answers: [
      {
        catergory: `es5`,
        answer: `document.querySelector("p")`
      },
      {
        catergory: `$Jquery`,
        answer: `$("p:first")`
      }
    ]
  }
]

var questionsFavorites = [
  {
    question: `My favorite thing to listen to while house cleaning is?`,
    answers: [
      {
        catergory: `music`,
        answer: `70's Funk 🎷`
      },
      {
        catergory: `music`,
        answer: `Awaken My Love, Childish Gambino ❤️`
      },
      {
        catergory: `podcast`,
        answer: `First Take 🔊`
      },
      {
        catergory: `podcast`,
        answer: `Javascript Jabber`
      }
    ]
  },
  {
    question: `My favorite thing to eat lately.`,
    answers: [
      {
        catergory: `food`,
        answer: `Veggie Ramen!!!🍜`
      },
      {
        catergory: `food`,
        answer: `homemade azuki beans & rice 🍚`
      },
    ]
  },
  {
    question: `My favorite thing to watch on tv.`,
    answers: [
      {
        catergory: `entertainment`,
        answer: `I love all things Marvel`
      },
      {
        catergory: `entertainment`,
        answer: `Portlandia 😂`
      },
    ]
  },
]

var $page = $("#page");


activate();
function activate() {
  addQuestions(questionsFavorites, $page);
}

function addQuestions(questions, target) {
  var $infoBox = $("<div class=\"info-box info-box--md\">");
  questions.forEach( function(question, index) {
    var $infoBoxSection = $("<div class=\"info-box__section\">")
    $infoBoxSection.html(makeInfoBox(question, index) );
    $infoBox.append($infoBoxSection);
  });
  target.append($infoBox);
};
function makeInfoBox(item, index) {
  var infoBox = [
        "<header class=\"info-box__header\">" + (index + 1) + ":" + item.question + "</header>",
        "<div class=\"info-box__section info-box__section--content\">"
  ]
  var answers = item.answers.map( item => {
    return [
      "<p class=\"info-box__section info-box__section--body\">",
        "<span class=\"info-box__text info-box__text--sm info-box__text--bg\">" + item.catergory + "::</span>",
        "" + item.answer,
      "</p>"
    ].join("");
  });
  infoBox = infoBox.concat(answers);

  infoBox.push("</div>")

  return infoBox.join("");
}
