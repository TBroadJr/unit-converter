const inputEL = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");

const lengthOutput = document.getElementById("length-output");
const volumeOutput = document.getElementById("volume-output");
const massOutput = document.getElementById("mass-output");

convertBtn.addEventListener("click", () => {
  localStorage.setItem("value", JSON.stringify(inputEL.value))
  convertUnit()
});

if (localStorage.getItem("value")) {
  convertUnit()
}

function convertUnit() {
  let value = JSON.parse(localStorage.getItem("value"))
  inputEL.value = value

  lengthOutput.textContent = `${value} meters = ${(Number(value) * 3.281).toFixed(3)} feet | ${value} feet = ${(Number(value) / 3.281).toFixed(3)} meters`

  volumeOutput.textContent = `${value} liters = ${(Number(value) * 0.264).toFixed(3)} gallons | ${value} gallons = ${(Number(value) / 0.264).toFixed(3)} liters`

  massOutput.textContent = `${value} kilos = ${(Number(value) * 2.204).toFixed(3)} pounds | ${value} ppunds = ${(Number(value) / 2.204).toFixed(3)} kilos`
}

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound