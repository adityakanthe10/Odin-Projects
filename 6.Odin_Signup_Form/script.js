document.addEventListener("DOMContentLoaded", function () {
  const firstname = document.querySelector("#firstname");
  const firstnameError = document.querySelector("#first-name-error");
  firstname.addEventListener("input", function (event) {
    if (firstname.value.trim() === "") {
      firstnameError.textContent = "Please Type in your first name.";
    } else {
      firstnameError.textContent = "";
    }
  });
  const lastname = document.querySelector("#lastname");
  const lastnameError = document.querySelector("#last-name-error");
  lastname.addEventListener("input", function (event) {
    if (lastname.value.trim() === "") {
      lastnameError.textContent = "Please Type in Your last name.";
    } else {
      lastnameError.textContent = "";
    }
  });

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      emailError.textContent =
        "Please Type in Your Email eg cristianosiuu10@gmail.com";
    } else {
      emailError.textContent = "";
    }
  });

  // validity.typeMismatch - When the user inputs something into an input field that is expected to be of a specific type (such as email), the browser automatically checks if the entered value conforms to the expected format for that type.
  const phonenumber = document.querySelector("#phonenumber");
  const phonenumberError = document.querySelector("#phonenumber-error");
  phonenumber.addEventListener("input", function (event) {
    if (phonenumber.validity.patternMismatch) {
      phonenumberError.textContent = "Please Type 10-digit phone number";
    } else {
      phonenumberError.textContent = "";
    }
  });

  const pwd = document.querySelector("#password");
  const pwdError = document.querySelector("#password-error");

  pwd.addEventListener("input", function (event) {
    if (pwd.value === "") {
      pwdError.textContent = "Please type in password";
    } else {
      pwdError.textContent = "";
    }
  });

  const cpwd = document.querySelector("#confirmpassword");
  const cpwdError = document.querySelector("#confirmpassword-error");

  cpwd.addEventListener("input", function (event) {
    if (pwd.value !== cpwd.value) {
      cpwdError.textContent = "Password do not match";
    } else {
      cpwdError.textContent = "";
    }
  });
});
