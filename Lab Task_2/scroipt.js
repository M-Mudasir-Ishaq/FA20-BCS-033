document.getElementById("checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
  
    // Clear previous errors
    const errorFields = document.querySelectorAll(".error");
    errorFields.forEach((el) => el.textContent = "");
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => input.classList.remove("is-invalid"));
  
    // Full Name
    const fullName = document.getElementById("fullName");
    if (!/^[A-Za-z\s]+$/.test(fullName.value.trim())) {
      isValid = false;
      fullName.classList.add("is-invalid");
      document.getElementById("fullNameError").textContent = "Only alphabets allowed.";
    }
  
    // Email
    const email = document.getElementById("email");
    if (!email.checkValidity()) {
      isValid = false;
      email.classList.add("is-invalid");
      document.getElementById("emailError").textContent = "Enter a valid email.";
    }
  
    // Phone
    const phone = document.getElementById("phone");
    if (!/^\d{10,15}$/.test(phone.value.trim())) {
      isValid = false;
      phone.classList.add("is-invalid");
      document.getElementById("phoneError").textContent = "Enter a valid phone number (10–15 digits).";
    }
  
    // Address
    const address = document.getElementById("address");
    if (address.value.trim() === "") {
      isValid = false;
      address.classList.add("is-invalid");
      document.getElementById("addressError").textContent = "Address is required.";
    }
  
    // Credit Card
    const cardNumber = document.getElementById("cardNumber");
    if (!/^\d{16}$/.test(cardNumber.value.trim())) {
      isValid = false;
      cardNumber.classList.add("is-invalid");
      document.getElementById("cardNumberError").textContent = "Enter a 16-digit card number.";
    }
  
    // Expiry Date
    const expiry = document.getElementById("expiry");
    const today = new Date();
    const selectedDate = new Date(expiry.value + "-01");
  
    if (!expiry.value || selectedDate <= today) {
      isValid = false;
      expiry.classList.add("is-invalid");
      document.getElementById("expiryError").textContent = "Expiry date must be in the future.";
    }
  
    // CVV
    const cvv = document.getElementById("cvv");
    if (!/^\d{3}$/.test(cvv.value.trim())) {
      isValid = false;
      cvv.classList.add("is-invalid");
      document.getElementById("cvvError").textContent = "Enter a valid 3-digit CVV.";
    }
  
    // If valid, show success and reset form
    if (isValid) {
      document.getElementById("checkoutForm").reset();
      document.getElementById("successMessage").classList.remove("d-none");
  
      setTimeout(() => {
        document.getElementById("successMessage").classList.add("d-none");
      }, 3000);
    }
  });
  