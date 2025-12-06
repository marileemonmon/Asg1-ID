// When user clicks the Apple Pay button, show a popup message

document.addEventListener("DOMContentLoaded", function () {
  var payButton = document.getElementById("applePayButton");

  if (payButton) {
    payButton.addEventListener("click", function () {
      alert("Apple Pay payment successful!");
    });
  }
});
