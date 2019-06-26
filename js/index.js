class Preproduct {
  contructor(description, price, qty) {
    this.description = description;
    this.price = price;
    this.qty = qty;
  }
}

let product = new Preproduct();
let store = [];

function deleteItem(product) {
  const productToRemove = product.target.parentNode.parentNode;
  const AllProduct = document.getElementsByClassName("products")[0];
  AllProduct.removeChild(productToRemove);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem(product) {
  
}

window.onload = function() {
  // let allProducts=document.getElementsByClassName("wrapper-product");
  //  let id=document.getElementById("p1");
  //  let products=document.getElementsByClassName("products")[0];
  //  products.removeChild(id);
  /*  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  } */
  //Programming buttons
  let product1 = document
    .getElementsByClassName("wrapper-product")[0]
    .querySelector(".btn-delete");

  let product2 = document
    .getElementsByClassName("wrapper-product")[1]
    .querySelector(".btn-delete");

  product1.addEventListener("click", deleteItem);
  product2.addEventListener("click", deleteItem);
};
