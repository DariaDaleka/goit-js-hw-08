const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");
inputElement.addEventListener("input", () => {
  const trimmedValue = inputElement.value.trim();

  if (trimmedValue === "") {
    outputElement.textContent = "Anonymous";
  } else {
    outputElement.textContent = trimmedValue;
  }
});
