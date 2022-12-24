function calculateResult() {
  // Get the values from the input fields
  const value1 = parseInt(document.getElementById("input1").value);
  const value2 = parseInt(document.getElementByIdd("input2").value);
  const value3 = parseInt(document.getElementByIdd("input3").value);
  const value4 = parseInt(document.getElementByIdd("input4").value);

  // Calculate the result
  const result = value1 + value2 + value3 + value4 / 15 ;
   /* your calculation using the values here */

  // Display the result
  document.getElementById("result-value").textContent = result;
}

// Add an event listener to the calculate button
document.getElementById("calculate").addEventListener("click", calculateResult);
