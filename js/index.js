// const allbuttonsAnswer = document.querySelectorAll('[data-js="button-answer"]');
const buttonAnswer = document.querySelector('[data-js="button-answer"]');
console.log(buttonAnswer);
const boxQuestion = document.querySelector("[data-js=box-question]");
console.log(boxQuestion);
const boxSolution = document.querySelector("[data-js=box-solution]");
console.log(boxSolution);
const buttonHint = document.querySelector('[data-js="hint-button"]');
console.log(buttonHint);
const hinText = document.querySelector('[data-js="hint-Text"]');
console.log(hinText);

// allbuttonsAnswer.forEach((buttonAnswer) => {
//   buttonAnswer.addEventListener("mouseover", () => {
//     buttonAnswer.style.backgroundColor = "hotpink";
//     buttonAnswer.style.color = "#f9f07a";
//   });

//   buttonAnswer.addEventListener("mouseout", () => {
//     buttonAnswer.style.backgroundColor = "#f9f07a";
//     buttonAnswer.style.color = "hotpink";
//   });
// });

// boxSolution.style.visibility = "visible";

// ------- SVG Bookmarks ----------

const bookmark = document.querySelector(`[data-js="bookmark"]`);

bookmark.addEventListener("click", () => {
  const emptyBookmark = bookmark.getAttribute("xlink:href");

  if (emptyBookmark === `assets/images/bookmark-heart-fill.svg`) {
    const newBookmark = "assets/images/bookmark-heart.svg";
    bookmark.setAttribute("xlink:href", newBookmark);
  } else {
    const newBookmark = `assets/images/bookmark-heart-fill.svg`;
    bookmark.setAttribute("xlink:href", newBookmark);
  }
});

buttonAnswer.addEventListener("click", () => {
  console.log(boxSolution);
  boxSolution.classList.toggle("box-solution--visible");
  boxQuestion.classList.toggle("box-question--unvisible");
});

buttonHint.addEventListener("click", () => {
  hinText.classList.toggle("hint--visible");
});
