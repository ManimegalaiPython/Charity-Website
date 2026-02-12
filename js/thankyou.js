 // Optional personalization
    const name = sessionStorage.getItem("donorName");
    if (name) {
      document.getElementById("thankUser").innerText =
        `Thank You, ${name} ❤️`;
    }

    function donateAgain() {
      window.location.href = "donor.html";
    }

    function shareCause() {
      alert("Thank you for spreading the word ❤️");
    }

    function becomeVolunteer() {
      window.location.href = "volenteer.html";
    }