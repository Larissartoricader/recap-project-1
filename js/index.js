const allbuttonsAnswer = document.querySelectorAll('[data-js="button-answer"]');
console.log(allbuttonsAnswer);
const allBoxQuestions = document.querySelectorAll("[data-js=box-question]");

const boxAnswer = document.querySelector("[data-js=box-answer]");
console.log(boxAnswer);

allbuttonsAnswer.forEach((buttonAnswer) => {
  buttonAnswer.addEventListener("mouseover", () => {
    buttonAnswer.style.backgroundColor = "hotpink";
    buttonAnswer.style.color = "#f9f07a";
  });

  buttonAnswer.addEventListener("mouseout", () => {
    buttonAnswer.style.backgroundColor = "#f9f07a";
    buttonAnswer.style.color = "hotpink";
  });
});

allBoxQuestions.forEach((boxQuestion) => {
  allbuttonsAnswer.addEventListener("click", () => {
    boxQuestion.style.visibility = "hidden";
  });
});
//   boxAnswer.style.visibility = "visible";
// });
