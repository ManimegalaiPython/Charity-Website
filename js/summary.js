  // ✅ Read data from sessionStorage
  const name = sessionStorage.getItem("donorName") || "-";
  const email = sessionStorage.getItem("donorEmail") || "-";
  const amount = sessionStorage.getItem("donationAmount") || "0";
  const method = sessionStorage.getItem("paymentMethod") || "-";
  const cause = sessionStorage.getItem("donationCause") || "-";

  // Display on page
  document.getElementById("name").innerText = name;
  document.getElementById("email").innerText = email;
  document.getElementById("amount").innerText = amount;
  document.getElementById("method").innerText = method;
  document.getElementById("cause").innerText = cause;

  // Download PDF
  function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Donation Receipt", 105, 20, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Amount: ₹${amount}`, 20, 60);
    doc.text(`Cause: ${cause}`, 20, 70);
    doc.text(`Payment Method: ${method}`, 20, 80);
    doc.text(`Status: Successful`, 20, 90);

    doc.setFontSize(11);
    doc.text(
      "Thank you for supporting HopeHands Foundation.\nYour contribution creates lasting impact.",
      20,
      110
    );

    doc.save("Donation_Receipt.pdf");
  }

  function goHome() {
    sessionStorage.clear();   // ✅ clear only session data
    window.location.href = "thankyou.html";
  }