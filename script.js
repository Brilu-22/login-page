document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

  // Add click event listener to the login button
  loginBtn.addEventListener("click", function () {
    alert("Login button clicked. Implement your login functionality here.");
  });

  // Add click event listener to the register button
  registerBtn.addEventListener("click", function () {
    alert(
      "Register button clicked. Implement your registration functionality here."
    );
  });
});
