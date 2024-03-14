console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const formValues = new FormData(event.target);
  // const values = Object.fromEntries(formValues);
  // console.log(values);
  const createQuestionWording =
    event.target.elements.createQuestionWording.value;
  console.log(createQuestionWording);

  const createQuestionChoiseA = event.target.elements.choiseOptionA.value;
  console.log(createQuestionChoiseA);
  const createQuestionChoiceB = event.target.elements.choiseOptionB.value;
  console.log(createQuestionChoiceB);
  const createQuestionChoiseC = event.target.elements.choiseOptionC.value;
  console.log(createQuestionChoiseC);

  const createQuestionRightChoice = event.target.elements.rightChoice.value;
  console.log(createQuestionRightChoice);

  const createQuestionTag = event.target.elements.tag.value;
  console.log(createQuestionTag);

  const createQuestionHint = event.target.elements.hint.value;
  console.log(createQuestionHint);

  const createNewQuestionBox = document.createElement("div");
  const createQuestionsFormBox = document.querySelector(
    '[data-js="creater-question-form-box"]'
  );
  createNewQuestionBox.classList.add("question");

  createQuestionsFormBox.append(createNewQuestionBox);

  const createNewQuestionWord = document.createElement("h2");
  createNewQuestionWord.textContent = createQuestionWording;
  createNewQuestionBox.append(createNewQuestionWord);

  const createNewQuestionChoiseA = document.createElement("p");
  createNewQuestionChoiseA.textContent = createQuestionChoiseA;
  createNewQuestionBox.append(createNewQuestionChoiseA);

  const createNewQuestionChoiseB = document.createElement("p");
  createNewQuestionChoiseB.textContent = createQuestionChoiceB;
  createNewQuestionBox.append(createNewQuestionChoiseB);

  const createNewQuestionChoiseC = document.createElement("p");
  createNewQuestionChoiseC.textContent = createQuestionChoiseC;
  createNewQuestionBox.append(createNewQuestionChoiseC);

  const createNewQuestionRightChoice = document.createElement("p");
  createNewQuestionRightChoice.textContent = createQuestionRightChoice;
  createNewQuestionBox.append(createNewQuestionRightChoice);

  const createNewQuestionTag = document.createElement("p");
  createNewQuestionTag.textContent = createQuestionTag;
  createNewQuestionBox.append(createNewQuestionTag);

  const createNewQuestionHint = document.createElement("p");
  createNewQuestionHint.textContent = createQuestionHin;
  createNewQuestionBox.append(createNewQuestionHint);
});
