function deleteItem(product) {
  const productToRemove = product.target.parentNode.parentNode;
  const AllProduct = document.getElementsByClassName("products")[0];
  AllProduct.removeChild(productToRemove);
}

function creatingProduct(eventProduct) {
  let newProduct = eventProduct.target.parentNode.parentNode;
  let productName = newProduct.getElementsByClassName("productname")[0]
    .childNodes[1].value;
  let priceProduct = parseFloat(
    newProduct.getElementsByClassName("price")[0].childNodes[1].value
  );
  if (productName === "") {
    alert("Please introduce valid name for this product");
  } else if (priceProduct === 0) {
    alert("Please introduce valid price");
  } else {
    let elementToDelete = eventProduct.target;
    console.log (elementToDelete)
    // createNewItem(productName, priceProduct, 0);
    // deleteItem(elementToDelete);
  }
}
function designingProduct() {
  let divProduct = document.getElementsByClassName("products")[0];
  let divWrapper = document.createElement("div");
  divWrapper.setAttribute("class", "creating-product");

  divWrapper.innerHTML = `<div class="productname"><label>Product Name: </label><input id="productName" type="text" placeholder="Product name..." />
     </div><div class="price"><label>Price: </label><input id="price" type="text" placeholder="Product price" /></div>
     
     <div class="done-botton">
     <button class="done-escape btn">Done</button>
     <button class="done-escape btn">Escape</button>
     </div>`;
  let buttonDone = divWrapper
    .getElementsByClassName("done-botton")[0]
    .childNodes[1].addEventListener("click", creatingProduct);
  let buttonEscape = divWrapper
    .getElementsByClassName("done-botton")[0]
    .childNodes[3].addEventListener("click", deleteItem);

  divProduct.appendChild(divWrapper);
}
function getPriceByProduct(itemNode) {}

function updatePriceByProduct(inputEventKeypressed) {
  let qty = parseFloat(inputEventKeypressed.target.value);
  if (qty === isNaN) qty = 0;
  let price = parseFloat(
    inputEventKeypressed.target.parentNode.parentNode.childNodes[2].childNodes[0].innerHTML
      .slice(1)
      .toString()
  );
  let finalPrice = parseFloat(qty * price);
  if (finalPrice === isNaN) finalPrice = 0;
  inputEventKeypressed.target.parentNode.parentNode.childNodes[6].childNodes[0].innerHTML = `$${finalPrice.toFixed(
    2
  )}`;
}

function getTotalPrice() {
  let quantity = 0;
  let productPrice = 0;
  let products = document.getElementsByClassName("wrapper-product");
  let pricePerUnity = 0;
  let finalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    quantity = parseInt(
      products[i].childNodes[4].childNodes[2].value.toString()
    );
    productPrice = parseFloat(
      products[i].childNodes[2].childNodes[0].innerHTML.slice(1).toString()
    );
    pricePerUnity = quantity * productPrice;
    if (pricePerUnity === isNaN) pricePerUnity = 0;
    products[i].childNodes[6].childNodes[0].innerHTML = `$${pricePerUnity}`;
    finalPrice += pricePerUnity;
  }
  if (finalPrice === isNaN) finalPrice = 0;
  return finalPrice;
}

function showPrice() {
  let h2FinalPrice = document.getElementById("finalprice");
  h2FinalPrice.innerHTML = "$" + getTotalPrice().toString();
  let thePrice = document.getElementsByClassName("theprice")[0];
  thePrice.style.display = "block";
}

function createQuantityInput() {}

function createDeleteButton(deleteButtonObject) {
  deleteButtonObject.addEventListener("click", deleteItem);
}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem(description, price, qty) {
  let divProduct = document.getElementsByClassName("products")[0];
  let divWrapper = document.createElement("div");
  divWrapper.setAttribute("class", "wrapper-product");

  let nameProduct = description;
  let priceProduct = "$" + price.toString();

  divWrapper.innerHTML = `<div class="productname"><span>${nameProduct}</span></div>
   <div class="price"><span>${priceProduct}</span></div>
   <div class="qty">
   <label >QTY</label><input id="qty" type="text" value="${qty}" placeholder="Introduce the units..." />
   </div>
  <div class="totalpriceproduct" ><span>$0</span></div>
  <div class="delete-button">
  <button class="btn-delete">Delete</button>
  </div>`;

  divProduct.appendChild(divWrapper);

  //Programing button
  let deleteButton = divWrapper.getElementsByClassName("btn-delete")[0];
  createDeleteButton(deleteButton);

  //Programming input of qty
  let qtyInput = divWrapper.getElementsByClassName("qty")[0].childNodes[2];
  qtyInput.addEventListener("keyup", updatePriceByProduct);
}

window.onload = function() {
  let body = document.getElementsByTagName("body")[0];
  let divProducts = document.createElement("div");
  divProducts.setAttribute("class", "products");
  body.appendChild(divProducts);

  //Creating elements by default
  createNewItem("IronBubble-head", 25.0, 0);
  createNewItem("IronShirt", 15.0, 0);

  //Programming button calculate Prices
  let calculatePricesB = document.getElementsByClassName("btn-success")[0];
  calculatePricesB.addEventListener("click", showPrice);
  let btnCreate = document.getElementById("create");
  btnCreate.addEventListener("click", designingProduct);
};
