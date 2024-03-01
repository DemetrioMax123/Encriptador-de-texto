const encripted = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const mascTextNImage = document.getElementById("mascTextNImage");

const scriptKeys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

let numberDPress = 0;

function removeImg() {
  numberDPress++;
  const encriptedValue = encripted.value;
  if (encriptedValue !== "" && numberDPress <= 1) {
    mascTextNImage.classList.toggle("hidden");
    encripted.classList.toggle("showResult");
  }
}

function encriptar() {
  let userInput = document.getElementById("userInput").value;
  let resultado = userInput
    .split("")
    .map((letter) => scriptKeys[letter] || letter)
    .join("");
  encripted.innerHTML = resultado;
  removeImg();
}
function desencriptar() {
  let userInput = document.getElementById("userInput").value;
  let resultado = userInput.replace(/enter|imes|ai|ober|ufat/g, (match) => {
    for (let key in scriptKeys) {
      if (scriptKeys[key] === match) {
        return key;
      }
    }
    return match;
  });
  encripted.innerHTML = resultado;
  removeImg();
}

copyBtn.addEventListener("click", function () {
  let encriptedW = document.getElementById("result");
  encriptedW.select();
  document.execCommand("copy");
});
