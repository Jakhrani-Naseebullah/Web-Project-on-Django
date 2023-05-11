// contact us form validation

function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var country = document.forms["myForm"]["country"].value;
  var message = document.forms["myForm"]["message"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (country == "") {
    alert("Country must be selected");
    return false;
  }
  if (message == "") {
    alert("Message must be filled out");
    return false;
  }
}

// login form

const form = document.getElementById("loginForm");
const username = document.getElementsByName("uname")[0];
const password = document.getElementsByName("psw")[0];

form.addEventListener("submit", function (event) {
  if (username.value === "" || password.value === "") {
    event.preventDefault();
    alert("Please fill in all fields");
  }
});

const registerBtn = document.querySelector(".registerbtn");

registerBtn.addEventListener("click", function () {
  window.location.href = "registration.html";
});

//registration form

function validateForm() {
  let formIsValid = true;
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const firstNameError = document.getElementById("first-name-error");
  const lastNameError = document.getElementById("last-name-error");
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );

  // Check username field
  if (!username) {
    usernameError.innerHTML = "Username is required";
    formIsValid = false;
  } else {
    usernameError.innerHTML = "";
  }

  // Check first name field
  if (!firstName) {
    firstNameError.innerHTML = "First name is required";
    formIsValid = false;
  } else {
    firstNameError.innerHTML = "";
  }

  // Check last name field
  if (!lastName) {
    lastNameError.innerHTML = "Last name is required";
    formIsValid = false;
  } else {
    lastNameError.innerHTML = "";
  }

  // Check email field
  if (!email) {
    emailError.innerHTML = "Email is required";
    formIsValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError.innerHTML = "Email is invalid";
    formIsValid = false;
  } else {
    emailError.innerHTML = "";
  }

  // Check password field
  if (!password) {
    passwordError.innerHTML = "Password is required";
    formIsValid = false;
  } else if (password.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters long";
    formIsValid = false;
  } else {
    passwordError.innerHTML = "";
  }

  // Check confirm password field
  if (!confirmPassword) {
    confirmPasswordError.innerHTML = "Confirm Password is required";
    formIsValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = "Passwords do not match";
    formIsValid = false;
  } else {
    confirmPasswordError.innerHTML = "";
  }

  return formIsValid;
}

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully");
    registrationForm.reset();
  }
});

// product form

// Get the form element
const form1 = document.getElementById("productForm");

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the form from submitting

  // Validate the form fields
  if (validateForm()) {
    // If the form is valid, perform any necessary actions
    console.log("Form submitted successfully!");
  }
};

// Function to validate the form fields
const validateForm = () => {
  // Get the form fields
  const productNameField = document.getElementById("productName");
  const categoryField = document.getElementById("category");
  const subcategoryField = document.getElementById("subcategory");
  const priceField = document.getElementById("price");
  const descriptionField = document.getElementById("description");
  const publishDateField = document.getElementById("publishDate");
  const imageField = document.getElementById("image");

  // Flag to track form validity
  let isValid = true;

  // Validate product name field
  if (productNameField.value.trim() === "") {
    isValid = false;
    productNameField.classList.add("error");
  } else {
    productNameField.classList.remove("error");
  }

  // Validate category field
  if (categoryField.value.trim() === "") {
    isValid = false;
    categoryField.classList.add("error");
  } else {
    categoryField.classList.remove("error");
  }

  // Validate subcategory field
  if (subcategoryField.value.trim() === "") {
    isValid = false;
    subcategoryField.classList.add("error");
  } else {
    subcategoryField.classList.remove("error");
  }

  // Validate price field
  if (priceField.value.trim() === "" || parseFloat(priceField.value) <= 0) {
    isValid = false;
    priceField.classList.add("error");
  } else {
    priceField.classList.remove("error");
  }

  // Validate description field
  if (descriptionField.value.trim() === "") {
    isValid = false;
    descriptionField.classList.add("error");
  } else {
    descriptionField.classList.remove("error");
  }

  // Validate publish date field
  if (publishDateField.value === "") {
    isValid = false;
    publishDateField.classList.add("error");
  } else {
    publishDateField.classList.remove("error");
  }

  // Validate image field
  if (imageField.value.trim() === "") {
    isValid = false;
    imageField.classList.add("error");
  } else {
    imageField.classList.remove("error");
  }

  return isValid;
};

// Function to handle cancel button click
const handleCancel = () => {
  form.reset();
};

// Function to handle view list button click
const handleViewList = () => {
  // Perform the necessary action to view the list of products
  console.log("View List of Products clicked!");
};

// Add event listeners
form.addEventListener("submit", handleSubmit);
document.getElementById("cancelBtn").addEventListener("click", handleCancel);
document
  .getElementById("viewListBtn")
  .addEventListener("click", handleViewList);
