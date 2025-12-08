// Test: this should show when payment.html loads
alert("JS file loaded");

// Pay button
var payBtn = document.getElementById("PayBtn");
if (payBtn) {
  payBtn.onclick = function () {
    alert("Payment successful!");
  };
}

// Apple Pay button
var applePayBtn = document.getElementById("applePayBtn");
if (applePayBtn) {
  applePayBtn.onclick = function () {
    alert("Apple Pay payment successful!");
  };
}
