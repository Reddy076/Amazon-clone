const cart={
  cartItems:undefined,
  loadFromStorage:function(){
  this.cartItems=JSON.parse(localStorage.getItem('cart-oop'));


if(!this.cartItems){
  this.cartItems=[];
}
},
saveToStorage(){
  localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));
},

addToCart(productId) {
    let matchedItem;
    this.cartItems.forEach((cartItem)=>{
      if(productId===cartItem.productId){
          matchedItem=cartItem;
      }
    });

    if(matchedItem){
      matchedItem.quantity+=1;
    }else{
        this.cartItems.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
    });
    }
    this.saveToStorage();

},

clearCart(productId){
    const newCart=[];
    this.cartItems.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
          newCart.push(cartItem);
      }
    });

    this.cartItems=newCart;
    this.saveToStorage();
},

updateDeliveryOption(productId, deliveryId){
  let matchedItem;
    this.cartItems.forEach((cartItem)=>{
      if(productId===cartItem.productId){
          matchedItem=cartItem;
      }
    });

    matchedItem.deliveryOptionId=deliveryId;
    this.saveToStorage();
}

};


cart.loadFromStorage();




