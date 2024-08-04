


for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("product-card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");

  image.setAttribute("src", i.image);
  image.onclick = function () {
    openFullImg(this.src);
  };

  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);


  //actionBtn
  let actionBtn = document.createElement("button");
  let whtIcon = document.createElement("i");
  whtIcon.classList.add("fa-brands", "fa-whatsapp");
  actionBtn.appendChild(whtIcon);

  let book = document.createElement("p");
  book.innerText = "BOOK NOW";
  actionBtn.appendChild(book);

  actionBtn.onclick = function () {
    window.open("https://wa.me/message/PT3FTVKXMTGID1", "_blank");
  };

  container.appendChild(actionBtn);



  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}









