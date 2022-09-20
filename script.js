// linear gradient

let body, button, input1, input2, h1;
body = document.querySelector("body");
title = document.querySelector("#title");
input1 = document.querySelector("#input1");
input2 = document.querySelector("#input2");

input1.addEventListener("input", function () {
  setgredient(input1.value, input2.value);
});
input2.addEventListener("input", function () {
  setgredient(input1.value, input2.value);
});

function setgredient(color1, color2) {
  document.body.style.background = `linear-gradient(to right,${color1} ,${color2})`;
}
