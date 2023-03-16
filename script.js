// Prompt the user for their name and save it in a variable
var name = prompt("What is your name?");

function int2bin() {
  event.preventDefault();
  var decimal = document.getElementById("decimalInput").value;
  var originalDecimal = decimal;

  var greeting = "Hello " + name + ", you have typed " + originalDecimal + ". This is its equivalent to binary: ";

  var binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  var resultElement = document.getElementById("result");
  resultElement.textContent = greeting + binary + " ";
  
  // Create a button to ask the user if they want to perform another conversion
  var btn = document.createElement("button");
  btn.textContent = "Do another conversion?";
  btn.onclick = function() {
    resultElement.textContent = "";
    var anotherConversion = confirm("Would you like to do another conversion?");
    if (anotherConversion) {
      document.getElementById("decimalInput").value = "";
    } else {
      resultElement.textContent = "Thank you for using my website, " + name + ", till next time!";
      btn.style.display = "none";
    }
  }
  
  // Add the button to the page
  resultElement.appendChild(btn);
}
