const data = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a scripting language used to create dynamic content on websites.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The Document Object Model (DOM) is a programming interface for HTML and XML documents.",
  },
  {
    question: "What is an event listener?",
    answer:
      "An event listener is a function that waits for and responds to user actions like clicks or keypresses.",
  },
  {
    question: "What is the difference between let, const, and var?",
    answer:
      "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordion() {
  accordionWrapper.innerHTML = data
    .map((dataItem) => {
      return `
        <div class="accordion_item">
        <div class="accordion_title">
            <h3>${dataItem.question}</h3>
            <i class="fa-solid fa-arrow-down arrow-btn"></i>
        </div>
        <div class="accordion_description hide">
            <hr/>
            <p>${dataItem.answer}</p>
        </div>
        </div>
        `;
    })
    .join(" ");
}

createAccordion();

const arrowBtns = document.querySelectorAll(".arrow-btn");
// console.log(arrowBtns)
const accordionDescriptions = document.querySelectorAll(
  ".accordion_description"
);
// const accordionItems = document.querySelector('.accordion');
// console.log(accordionDescriptions)

arrowBtns.forEach((arrowBtn) => {
  arrowBtn.addEventListener("click", (e) => {
    const currentDesc = e.target.parentElement.nextElementSibling;
    const isAlreadyOpen = currentDesc.classList.contains("show");

    // close all accordion descriptions

    accordionDescriptions.forEach((desc) => {
      desc.classList.replace("show", "hide");
    });

    // reset all arrow down
    arrowBtns.forEach((btn) => {
      btn.classList.replace("fa-arrow-up", "fa-arrow-down");
    });

    if (!isAlreadyOpen) {
      currentDesc.classList.replace("hide", "show");
      arrowBtn.classList.replace("fa-arrow-down", "fa-arrow-up");
    }
   
  });
});
