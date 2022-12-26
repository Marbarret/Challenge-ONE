let textResult = "";
let btnCopy = document.getElementById("btn-copy");
let btnClear = document.getElementById("btn-clear");

let btnCripto = document.getElementById("btn-encrypt");
let btnDescripto = document.getElementById("btn-decrypt");

var inputText = document.getElementById("inputText");
var returnText = document.getElementById("returnText");

document.querySelector(".return").style.display = "none";

function cripto() {
  var text = inputText.value;
  textResult = text.replace(/a/g, "ai")
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
  returnText.innerHTML = textResult;
}

function descripto() {
  var text = inputText.value;
  textResult = text.replace(/ai/g, "a")
                    .replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
  returnText.innerHTML = textResult;
}

function removeInfo() {
  document.querySelector("#mainInfo").style.display = "none";
  document.querySelector(".return").style.display = "inline";
}

function visibleCripto() {
  document.querySelector(".return").style.display = "none";
  document.querySelector("#mainInfo").style.display = "inline";
}

function copy() {
  var output = document.querySelector("#returnText");
  output.select();
  document.execCommand("btn-copy")
  alert("Texto Copiado: " + output.value);
}

btnCripto.onclick = function() {
  cripto();
  removeInfo();
}

btnClear.onclick = function() {
  visibleCripto();
}