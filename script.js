let input1 = document.getElementById("petInput");
let input2 = document.getElementById("quantityInput");
let input3 = document.getElementById("colorInput");

let button = document.getElementById("submitButton");

button.onclick = function () {
  let type = input1.value;
  let quantity = input2.value;
  let color = input3.value;

  if (quantity < 2) {
    alert("You ordered " + quantity + " " + color + " " + type);
  } else {
    alert("You ordered " + quantity + " " + color + " " + type + "s");
  }
};
