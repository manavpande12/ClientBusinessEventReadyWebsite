//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("actives");
    } else {
      button.classList.remove("actives");
    }
    
  });

  //select all cards
  let elements = document.querySelectorAll(".product-card");
  //loop through all cards
  elements.forEach((element) => {
    
    //display all cards on 'all' button click
    if (value == "All") {
      element.classList.remove("hide");
    }
    
    else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
    
  });
}

//Initially display all products

window.onload = function () {
  filterProduct('All');
};







