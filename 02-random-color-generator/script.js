const range = document.querySelectorAll("input");
const rgbBox = document.querySelector(".rgb-box");
const createRGB = document.querySelector("#generate-rgb-code");
const copyRGBColor = document.querySelector("#copy-rgb-color");
// console.log(rgbBox);
// console.log(range);

// console.log(range[1].value)
let rgbValue = "";
let red = 83,
  green = 157,
  blue = 151;
range.forEach((ran) => {
  ran.addEventListener("input", (e) => {
    if (e.target.id === "red") {
      red = e.target.value;
    } else if (e.target.id === "green") {
      green = e.target.value;
    } else if (e.target.id === "blue") {
      blue = e.target.value;
    }
    rgbValue = `rgb(${red}, ${green}, ${blue})`;
  });
});

createRGB.addEventListener("click", () => {
//   console.log(rgbValue);
  rgbBox.style.backgroundColor = rgbValue;
  document.querySelector('#rgb-code').textContent = rgbValue;
});

copyRGBColor.addEventListener("click", async () => {
  try {
    if (rgbValue === "") {
      rgbValue = "rgb(83,157,151)";
    }
    await navigator.clipboard.writeText(rgbValue);
    // console.log('Text copied to clipboard successfully!');
    // console.log(rgbValue === "");

    copyRGBColor.textContent = "Copied!";
    setTimeout(() => {
      copyRGBColor.textContent = "Copy To Clipboard!";
      copyRGBColor.disabled = false;
    }, 1000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});


//  hex code generator


const createHexBtn = document.querySelector('#generate-hex-code');
const hexBox = document.querySelector('.hex-box');
const hexCode = document.querySelector('#hex-code');
const copyhexCode = document.querySelector('#copy-hex-color');

let hexColorCode = "#d28989"
createHexBtn.addEventListener("click", () => {
    const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
   hexColorCode = '#';
  
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexColorCode += hexChars[randomIndex];
  }

  hexBox.style.backgroundColor = hexColorCode;
  hexCode.textContent = hexColorCode;

})

copyhexCode.addEventListener("click", async () => {
  try {
    if (rgbValue === "") {
      rgbValue = "rgb(83,157,151)";
    }
    await navigator.clipboard.writeText(hexColorCode);
    // console.log('Text copied to clipboard successfully!');
    // console.log(hexColorCode)
    copyhexCode.textContent = "Copied!";
    setTimeout(() => {
      copyhexCode.textContent = "Copy To Clipboard!";
      copyhexCode.disabled = false;
    }, 1000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
})