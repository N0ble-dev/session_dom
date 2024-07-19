const newItemInput = document.getElementById("newItem");
const addButton = document.getElementById("addButton");
const itemsList = document.getElementById("itemsList");

// without delegation

//  function addItem() {
//    const newItemText = newItemInput.value.trim();
//    if (newItemText === "") return;

//    const itemDiv = document.createElement("div");
//    itemDiv.className = "item";
//    itemDiv.innerHTML = `
//             <span>${newItemText}</span>
//             <button class="removeButton">Remove</button>
//         `;

//    // Attach event listener to the remove button
//    const removeButton = itemDiv.querySelector(".removeButton");
//    removeButton.addEventListener("click", () => {
//      itemsList.removeChild(itemDiv);
//    });

//    itemsList.appendChild(itemDiv);
//    newItemInput.value = "";
//  }

//  addButton.addEventListener("click", addItem);

function addItem() {
  const newItemText = newItemInput.value.trim();
  if (newItemText === "") return;

  const itemDiv = document.createElement("div");
  itemDiv.className = "item";
  itemDiv.innerHTML = `
            <span>${newItemText}</span>
            <button class="removeButton">Remove</button>
        `;

  itemsList.appendChild(itemDiv);
  newItemInput.value = "";
}

// Event listener for the Add button
addButton.addEventListener("click", addItem);

// Event delegation for removing items
itemsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("removeButton")) {
    const itemDiv = event.target.parentElement;
    itemsList.removeChild(itemDiv);
  }
});
