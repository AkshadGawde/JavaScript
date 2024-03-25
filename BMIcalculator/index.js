function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid weight and height values.";
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  document.getElementById("result").innerText = `Your BMI is: ${bmi.toFixed(
    2
  )}`;
}
