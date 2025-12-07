// Function to show only one section at a time
function showSection(sectionId) {

  // Hide all sections (ONLY ones you have)
  document.getElementById('home').style.display = 'none';
  document.getElementById('details').style.display = 'none';
  document.getElementById('tickets').style.display = 'none';
  document.getElementById('card-details').style.display = 'none';
  document.getElementById('signin').style.display = 'none';
  document.getElementById('venues').style.display = 'none';

  // Show the section requested
  var section = document.getElementById(sectionId);
  section.style.display = 'block';
}

// Handle Apple Pay popup
var applePayButton = document.getElementById('applePayBtn');

if (applePayButton) {
  applePayButton.onclick = function () {
    alert("Apple Pay successful");
  };
}



