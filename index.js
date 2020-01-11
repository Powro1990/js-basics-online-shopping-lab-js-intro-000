var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var objItem = { itemName: item, itemPrice: Math.floor(Math.random()*101) };
 cart.push(objItem);
 return `${cart[cart.length -1].itemName} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }else{
    var message = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++){
      var nextItem = `${i === cart.length -1 && cart.length > 1 ?'and ' : ''}${cart[i].itemName} at $${cart[i].itemPrice}${i < cart.length -1 ?', ' : '.'}`;
      message +=nextItem;
    }return message;
  }
}

function total() {
  var totalValue = 0;
  for(var i = 0; i < cart.length; i++){
    var valueOfItem = cart[i].itemPrice;
    totalValue += valueOfItem;
  } return totalValue;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
