const inputs = document.querySelectorAll("input[type=number]");

inputs.forEach(input => {
  input.min = 1;
  input.max = 100;
  input.setAttribute("onkeyup", "enforceMinMax(this)");
  input.placeholder = 'Input a number between 1 - 100';
});

function enforceMinMax(inputElement) {
  const value = inputElement.value;
  const min = inputElement.min;
  const max = inputElement.max;

  if (value === "") {
    return;
  }

  const valueAsNumber = parseInt(value);
  const minAsNumber = parseInt(min);
  const maxAsNumber = parseInt(max);

  if (valueAsNumber < minAsNumber) {
    inputElement.value = min;
  }
  if (valueAsNumber > maxAsNumber) {
    inputElement.value = max;
  }
}



function calculateResult() {
  // Initialize a variable to hold the total value
  let total = 0;

  // Loop through all of the input elements
  for (let i = 1; i <= 15; i++) {
    // Get the value of the current input element
    const value = document.getElementById(`input${i}`).value;

    // Check if the value is empty
    if (value !== "") {
      // Convert the value to a number and add it to the total
      total += parseInt(value);
    }
  }

  // Calculate the result by dividing the total by 15
  const result = total / 15;

  /* your calculation using the result here */

  // Display the result
  document.getElementById("result-value").textContent = result;
}

// Add an event listener to the calculate button
document.getElementById("calculate").addEventListener("click", calculateResult);
