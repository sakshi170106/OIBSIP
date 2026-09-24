const form = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const message = document.getElementById("message");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const ABSOLUTE_ZERO_C = -273.15;
const ABSOLUTE_ZERO_F = -459.67;
const ABSOLUTE_ZERO_K = 0;

function format(value) {
  return Number(value.toFixed(2)).toString();
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function clearResults() {
  celsiusResult.textContent = "—";
  fahrenheitResult.textContent = "—";
  kelvinResult.textContent = "—";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = Number(temperatureInput.value);
  const unit = unitSelect.value;

  if (temperatureInput.value.trim() === "" || !Number.isFinite(value)) {
    clearResults();
    showMessage("Please enter a valid numeric temperature.", "error");
    return;
  }

  if (unit === "C" && value < ABSOLUTE_ZERO_C) {
    clearResults();
    showMessage("Temperature cannot be below absolute zero (−273.15°C).", "error");
    return;
  }

  if (unit === "F" && value < ABSOLUTE_ZERO_F) {
    clearResults();
    showMessage("Temperature cannot be below absolute zero (−459.67°F).", "error");
    return;
  }

  if (unit === "K" && value < ABSOLUTE_ZERO_K) {
    clearResults();
    showMessage("Kelvin cannot be below absolute zero (0 K).", "error");
    return;
  }

  let celsius;
  let fahrenheit;
  let kelvin;

  if (unit === "C") {
    celsius = value;
    fahrenheit = (value * 9 / 5) + 32;
    kelvin = value + 273.15;
  } else if (unit === "F") {
    fahrenheit = value;
    celsius = (value - 32) * 5 / 9;
    kelvin = celsius + 273.15;
  } else {
    kelvin = value;
    celsius = value - 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;
  }

  celsiusResult.textContent = `${format(celsius)} °C`;
  fahrenheitResult.textContent = `${format(fahrenheit)} °F`;
  kelvinResult.textContent = `${format(kelvin)} K`;

  showMessage("Conversion completed successfully.", "success");
});
