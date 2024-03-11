const allbuttonsAnswer = document.querySelectorAll('[data-js="button-answer"]');
const allBoxQuestions = document.querySelectorAll("[data-js=box-question]");
const boxSolution = document.querySelectorAll("[data-js=box-solution]");

allbuttonsAnswer.forEach((buttonAnswer, boxSolution) => {
  buttonAnswer.addEventListener("mouseover", () => {
    buttonAnswer.style.backgroundColor = "hotpink";
    buttonAnswer.style.color = "#f9f07a";
  });

  buttonAnswer.addEventListener("mouseout", () => {
    buttonAnswer.style.backgroundColor = "#f9f07a";
    buttonAnswer.style.color = "hotpink";
  });
  // buttonAnswer.addEventListener("click", () => {
  //   boxSolution.style.visibility = "visible";
  // });
});

// boxSolution.style.visibility = "visible";
