const card = document.querySelector(".card");
const cardContent = card.querySelector(".card-content");

// Event listener on the card to toggle the content visibility
card.addEventListener("click", (event) => {
  card.classList.toggle("active");
});

// Prevent clicks inside the card content from closing it
cardContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Event listener on the document to close the card content when clicking outside
document.addEventListener("click", (event) => {
  if (!card.contains(event.target)) {
    card.classList.remove("active");
  }
});
