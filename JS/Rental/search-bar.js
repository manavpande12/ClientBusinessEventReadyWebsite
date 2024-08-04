// Search Function
function searchProducts() {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".product-card");

  // Loop through all elements
  elements.forEach((element, index) => {
    // Check if text includes the search value
    if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
      // Display matching card
      cards[index].classList.remove("hide");
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
  searchProducts();
  removeElements(); // Clear the list items when search button is clicked
});

// Enter key press
document.getElementById("search-input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchProducts();
    removeElements(); // Clear the list items when Enter key is pressed
  } else {
    // Call autocomplete function on keyup
    autocomplete();
  }
});

// Auto Complete
let productNames = products.data.map(product => product.productName);
// Sort names in ascending order
let sortedNames = productNames.sort();

// Reference
let input = document.getElementById("search-input");

// Execute function on keyup
function autocomplete() {
  // Initially remove all elements (so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    // Convert input to lowercase and compare with each string
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value !== ""
    ) {
      // Create li element
      let listItem = document.createElement("li");
      // One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.textContent = i; // Use textContent for simplicity
      listItem.addEventListener("click", () => {
        displayNames(i); // Use closure to pass the product name
      });
      // Display matched part in bold
      let word = `<b>${i.substr(0, input.value.length)}</b>`;
      word += i.substr(input.value.length);
      // Display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
}

function displayNames(value) {
  input.value = value; // Update the search input with the selected value
  searchProducts(); // Perform the search with the updated input
  removeElements(); // Clear the list items
}

function removeElements() {
  // Clear all the items
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
