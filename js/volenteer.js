//volenteer
const form = document.getElementById("volunteerForm");
const overlay = document.getElementById("popupOverlay");
const okBtn = document.getElementById("okBtn");
const volunteerBtn = document.getElementById("volunteerBtn");

// On form submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page refresh

  // Show popup
  overlay.style.display = "flex";
});

// When OK clicked
okBtn.addEventListener("click", function () {
  overlay.style.display = "none";

  // Change button text
  volunteerBtn.innerText = "You're added to our team";

  // Optional: disable button after submit
  volunteerBtn.disabled = true;
  volunteerBtn.style.opacity = "0.7";
  volunteerBtn.style.cursor = "not-allowed";

  // Reset form
  form.reset();
});



