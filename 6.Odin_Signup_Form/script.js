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
});
