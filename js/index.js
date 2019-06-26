function deleteItem(product) {
  const productToRemove = product.target.parentNode.parentNode;
  const AllProduct = document.getElementsByClassName("products")[0];
  AllProduct.removeChild(productToRemove);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(inputEventKeypressed) {
  inputEventKeypressed.target.value;
}
//aqui
function getTotalPrice() {
  let quantity = 0;
  let productPrice = 0;
  let products = document.getElementsByClassName("wrapper-product");
  let pricePerUnity = 0;
  for (let i = 0; i < products.length; i++) {
    //quantity = products[i]
    quantity = parseInt(products[i].childNodes[4].childNodes[2].value.toString();
    productPrice = parseFloat(
      products[i].childNodes[2].childNodes[0].innerHTML.slice(1).toString()
    );
     pricePerUnity=product[i].
    (quantity * productPrice)
  }
  return finalPrice;
}

function showPrice() {
  let h2FinalPrice = document.getElementById("finalprice");
  h2FinalPrice.innerHTML = "$" + getTotalPrice().toString();
  let thePrice = document.getElementsByClassName("theprice")[0];
  thePrice.style.display = "block;";
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
  let qtyInput = document.getElementById("qty");
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
};
