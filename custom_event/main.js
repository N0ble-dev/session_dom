const toggleButton = document.getElementById("toggleButton");
const textElement = document.getElementById("textElement");

// Define the custom event
function toggleTextVisibility() {
  const event = new CustomEvent("textToggled");
  // const event = new CustomEvent("textToggled", {
  //   detail: { isVisible: textElement.style.display === "none" },
  // });
  document.dispatchEvent(event);
}

// Listen for the custom event to toggle text visibility
document.addEventListener("textToggled", () => {
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
});

// how to Receive data that send with custom event

// document.addEventListener("textToggled", (event) => {
//   const isVisible = event.detail.isVisible;
//   if (isVisible) {
//     textElement.style.display = "block";
//   } else {
//     textElement.style.display = "none";
//   }
// });

// Handle the button click to trigger the custom event
toggleButton.addEventListener("click", toggleTextVisibility);

// without custom event
// const toggleButton = document.getElementById("toggleButton");
// const textElement = document.getElementById("textElement");

// toggleButton.addEventListener("click", () => {
//   if (textElement.style.display === "none") {
//     textElement.style.display = "block";
//   } else {
//     textElement.style.display = "none";
//   }
// });

///////////////////
