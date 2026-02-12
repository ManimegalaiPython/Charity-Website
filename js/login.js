const forms = document.querySelectorAll(".form");

function showLogin() {
    forms.forEach(f => f.classList.remove("active"));
    document.getElementById("loginForm").classList.add("active");
}

function showSignup() {
    forms.forEach(f => f.classList.remove("active"));
    document.getElementById("signupForm").classList.add("active");
}

function showForgot() {
    forms.forEach(f => f.classList.remove("active"));
    document.getElementById("forgotForm").classList.add("active");
}

/* MODAL */
function showModal(title, text) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* LOGIN */
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = loginEmail.value;
    let pass = loginPassword.value;

    if (!email || !pass) {
        showModal("Error", "Please fill all fields");
        return;
    }

    showModal("Success", "Login successful!");
    setTimeout(() => window.location.href = "index.html", 1500);
});

/* SIGNUP */
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    showModal("Account Created", "You can now login");
    showLogin();
});

/* FORGOT */
document.getElementById("forgotForm").addEventListener("submit", function(e) {
    e.preventDefault();
    showModal("Reset Link Sent", "Check your email");
    showLogin();
});
