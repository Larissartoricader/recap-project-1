console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formValues = new FormData(event.target);
  const values = Object.fromEntries(formValues);
  console.log(values);
});
