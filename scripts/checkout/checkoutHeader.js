import { calculateCartQuantity } from "../../data/cart.js";

// Update the cart count in the header
export function updateCheckoutHeader() {
  const cartCount = calculateCartQuantity();
  const headerText = cartCount === 0 ? 
    'Checkout' : 
    `Checkout (${cartCount} items)`;
  document.querySelector('.js-checkout-header-link').innerHTML = `<span class="js-checkout-header-text">${headerText}</span>`;
}