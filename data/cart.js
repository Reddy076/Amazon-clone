export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));


if(!cart){
  cart=[];
}
}
 

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchedItem;
    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
          matchedItem=cartItem;
      }
    });

    if(matchedItem){
      matchedItem.quantity+=1;
    }else{
        cart.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
    });
    }
    saveToStorage();

};

export function clearCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
          newCart.push(cartItem);
      }
    });

    cart=newCart;
    saveToStorage();
}


export function updateDeliveryOption(productId, deliveryId){
  let matchedItem;
    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
          matchedItem=cartItem;
      }
    });

    matchedItem.deliveryOptionId=deliveryId;
    saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}