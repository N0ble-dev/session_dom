const outerDiv = document.getElementById("outer");
const middleDiv = document.getElementById("middle");
const innerDiv = document.getElementById("inner");
const button = document.getElementById("button");

// Event listener for capture phase
outerDiv.addEventListener(
  "click",
  (event) => {
    console.log("Outer div (capture phase)");
  },
  true
);

middleDiv.addEventListener(
  "click",
  (event) => {
    console.log("Middle div (capture phase)");
  },
  true
);

innerDiv.addEventListener(
  "click",
  (event) => {
    console.log("Inner div (capture phase)");
  },
  true
);

// Event listener for bubbling phase
outerDiv.addEventListener("click", (event) => {
  console.log("Outer div (bubble phase)");
});

middleDiv.addEventListener("click", (event) => {
  console.log("Middle div (bubble phase)");
});

innerDiv.addEventListener("click", (event) => {
  console.log("Inner div (bubble phase)");
});

button.addEventListener("click", (event) => {
  console.log("Button clicked");
  // Stop propagation to see the effect of stopping events
  event.stopPropagation();
});

// Event delegation example
document.body.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    console.log("Event delegated to body");
  }
});
