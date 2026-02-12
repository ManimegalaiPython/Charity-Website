
//amount option
const buttons = document.querySelectorAll(".amount-btn");
const customInput = document.getElementById("customAmount");
const selectedAmount = document.getElementById("selectedAmount");
const customBtn = document.getElementById("customBtn");

buttons.forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();

    // Remove active from all
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add active to clicked
    this.classList.add("active");

    // If Custom clicked
    if (this.id === "customBtn") {
      customInput.style.display = "block";
      customInput.focus();
      selectedAmount.value = "";
    } else {
      customInput.style.display = "none";
      selectedAmount.value = this.getAttribute("data-amount");
    }
  });
});

// When custom amount typed
customInput.addEventListener("input", function() {
  selectedAmount.value = this.value;
});



document.querySelector(".donate-btn").addEventListener("click", function(e){
  const amount = selectedAmount.value;
  if(!amount || amount <= 0){
    e.preventDefault();
    alert("Please select or enter donation amount");
  }
});



//donate securely
const donateBtn = document.querySelector(".donate-btn1");
const modal = document.getElementById("paymentModal");
const finalAmount = document.getElementById("finalAmount");

donateBtn.addEventListener("click", () => {
  let amount = document.getElementById("selectedAmount").value || 
               document.getElementById("customAmount").value;

  if (!amount) {
    alert("Please select or enter a donation amount");
    return;
  }

  finalAmount.value = "Amount: ₹" + amount;
  modal.style.display = "flex";
});

function closePayment() {
  modal.style.display = "none";
}

// Optional: success message
document.getElementById("paymentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("donorName").value;
  const email = document.getElementById("donorEmail").value;
  const amount =
    document.getElementById("selectedAmount").value ||
    document.getElementById("customAmount").value;
  const cause = document.getElementById("donationCause").value;
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (!amount || amount <= 0) {
    alert("Please select or enter a donation amount");
    return;
  }

  // Save data
  sessionStorage.setItem("donorName", name);
  sessionStorage.setItem("donorEmail", email);
  sessionStorage.setItem("donationAmount", amount);
  sessionStorage.setItem("donationCause", cause);
  sessionStorage.setItem("paymentMethod", paymentMethod);

  // Hide payment modal
  document.getElementById("paymentModal").style.display = "none";

  // Show success popup AFTER payment
  document.getElementById("successMsg").style.display = "flex";
});


document.getElementById("okBtn").addEventListener("click", function() {
  window.location.href = "summary.html";
});




//payment card types

const paymentMethod = document.getElementById("paymentMethod");
const cardFields = document.getElementById("cardFields");
const upiFields = document.getElementById("upiFields");

paymentMethod.addEventListener("change", () => {
  if (paymentMethod.value === "upi") {
    cardFields.style.display = "none";
    upiFields.style.display = "block";
  } else {
    cardFields.style.display = "block";
    upiFields.style.display = "none";
  }
});
