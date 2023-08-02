const arabic = document.querySelector(".inputNum");
const buttons = document.querySelector(".buttons");
const conversion = document.querySelector(".conversion");

//event listener on the div containing the clear and enter buttons
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    //if enter button is pushed
    if (action === "enter") {
      const num = arabic.value;

      let result = convertToRoman(num);

      conversion.textContent = result;
    }

    //if clear button is pressed
    if (action === "clear") {
      arabic.value = "";
      conversion.textContent = "";
    }
  }
});

function convertToRoman(num) {
  var arabicToRoman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
  };

  var digits = String(+num).split(""); //array with digits
  var result = ""; //empty result initialized
  for (var i = 0; i < digits.length; i++) {
    var lookupKey = digits[i] * Math.pow(10, digits.length - i - 1); //find the key of the current index value multiplied by power of 10^i
    if (arabicToRoman[lookupKey]) {
      result += arabicToRoman[lookupKey];
    }
  }
  return result;
}
