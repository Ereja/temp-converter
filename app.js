/*pseudo code - practise of writing code in 'human language' before actualy writting a code. It will be steps that code has to do, written in English(or any other language) */

// setting our HTML elements as variables for easier access

const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

//function for rounding up numbers after decimal

function roundNum(num) {
    return Math.round(num*100)/100;
}

//convertion function from celcius to fahrenheit and kelvin

function celciusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  //using formula to convert celcius to fahrenheit
  const fTemp = cTemp * (9 / 5) + 32;
  //using formula to convert celcius to kelvin
  const kTemp = cTemp + 273.15;
  //making sure that values of temperatures will show up in input field
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

//convertion function from fahrenheit to celcius and kelvin
function fahrenheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  //converting fahrenheit to celcius
  const cTemp = (fTemp - 32) * (5 / 9);
  //converting fahrenheit to kelvin
  const kTemp = ((fTemp + 459.69) * 5) / 9;
  //for values to show up in input field
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

//convertion function from kelvin to celcius and fahrenheit
function kelvinToCelciusAndFahrenheit() {
  const kTemp = parseFloat(kelvinInput.value);
  //converting kelvin to celcius
  const cTemp = kTemp - 373.15;
  //converting kelvin to fahrenheit
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  //for values to show up in input field
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

//event listeners are looking for specific events (scroll, click, key press and so on. In this case its input event

celciusInput.addEventListener("input", celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener("input", kelvinToCelciusAndFahrenheit);
