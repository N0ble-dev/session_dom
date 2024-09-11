// Grab elements
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const notification = document.getElementById("notification");

// Custom event to toggle modal visibility
function toggleModal(isOpen) {
  const event = new CustomEvent("modalToggled", {
    detail: { isOpen },
  });
  document.dispatchEvent(event);
}

// Handle custom event to show/hide modal
document.addEventListener("modalToggled", (event) => {
  const { isOpen } = event.detail;
  if (isOpen) {
    modal.classList.add("active");
    overlay.classList.add("active");
    notification.textContent = "";
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    notification.textContent = "Modal closed.";
  }
});

// Open modal on button click
openModalButton.addEventListener("click", () => {
  toggleModal(true);
});

// Close modal on button click
closeModalButton.addEventListener("click", () => {
  toggleModal(false);
});

// Close modal by clicking outside of it
overlay.addEventListener("click", () => {
  toggleModal(false);
});
