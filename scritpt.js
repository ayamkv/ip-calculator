document.querySelectorAll("input[type=number]").forEach((input) => {
  input.min = 0;
  input.max = 100;
  input.setAttribute("onkeyup", "enforceMinMax(this)");
  input.placeholder = "Isi dengan nomor 1 - 100";
});

document.querySelectorAll(".inputs").forEach((div) => {
  div.setAttribute("tabindex", "0");
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
    // Pass in the id of an element

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

  // Add the "animated" class to the result element
  document.getElementById("result").classList.add("animated");
  document.getElementById("raw-c").classList.add("result");
  
  // Wait for 1 second before removing the "animated" class
  setTimeout(function () {
    document.getElementById("result").classList.remove("animated");
    document.getElementById("raw-c").classList.remove("result");
  }, 1000);
}

let backspaceCounter = 0;

function handleKeydown(event, button) {
  const inputs2 = document.querySelectorAll(".inputs input");
  const inputsArray = Array.from(inputs2);


  if (event.key === "Backspace" && event.target.value === "") {
    // Get the index of the current input
    const index = inputsArray.indexOf(event.target);
   // Increment the counter
   backspaceCounter++;

   // If the counter is less than 2
   if (backspaceCounter < 1) {
     // Cancel the default behavior of the backspace key
     event.preventDefault();
   }
   // If the counter is 2 or more
   else {
     // Reset the counter
     backspaceCounter = 0;

     // Get the index of the current input
     const index = inputsArray.indexOf(event.target);

     // If the current input is not the first input
     if (index > 0) {
       // Move focus to the previous input
       inputsArray[index - 1].focus();
     }
   }
 }
  // If the enter key was pressed
  else if (event.key === "Enter") {
    // Get the index of the current input
    const index = inputsArray.indexOf(event.target);

    // If the current input is not the last input
    if (index < inputsArray.length - 1) {
      // Move focus to the next input
      inputsArray[index + 1].focus();
    }
    // If the current input is the last input
    else {

      // Trigger the calculate button
      button.click();


    }
  }
}

// Add an event listener to the document to listen for keydown events
// Get the calculate button element
const button = document.getElementById("calculate");

// Add an event listener to the document to listen for keydown events
document.addEventListener("keydown", (event) => handleKeydown(event, button));


// Add an event listener to the calculate button
document.getElementById("calculate").addEventListener("click", calculateResult);
