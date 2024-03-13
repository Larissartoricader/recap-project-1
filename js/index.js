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
