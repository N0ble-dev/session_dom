let isAuthenticated = false;

const loginButton = document.getElementById("loginButton");
const deleteAccountButton = document.getElementById("deleteAccountButton");
const feedbackMessage = document.getElementById("feedbackMessage");

// Login button functionality
loginButton.addEventListener("click", () => {
  isAuthenticated = true; // User is now logged in
  feedbackMessage.textContent = "You are now logged in!";
  feedbackMessage.classList.remove("error");
  feedbackMessage.classList.add("success");
  loginButton.disabled = true; // Disable login button after logging in
});

// Delete account button functionality with authentication check
deleteAccountButton.addEventListener("click", (event) => {
  if (!isAuthenticated) {
    feedbackMessage.textContent =
      "You must be logged in to delete your account.";
    feedbackMessage.classList.remove("success");
    feedbackMessage.classList.add("error");

    // Stop all further event listeners and propagation
    event.stopImmediatePropagation();

    // Show login prompt or any other modal (optional)
    alert("Please log in to perform this action.");
    return;
  }

  // If authenticated, proceed with account deletion
  feedbackMessage.textContent = "Your account has been successfully deleted.";
  feedbackMessage.classList.remove("error");
  feedbackMessage.classList.add("success");
  console.log("User is authenticated. Account deleted.");
});

deleteAccountButton.addEventListener("click", () => {
  console.log("please sign in the account ");
});

// Another event listener to display a confirmation dialog (won't fire if not authenticated)
deleteAccountButton.addEventListener("click", () => {
  const confirmed = confirm("Are you sure you want to delete your account?");
  if (confirmed) {
    console.log("Account deletion confirmed.");
  } else {
    console.log("Account deletion canceled.");
  }
});
