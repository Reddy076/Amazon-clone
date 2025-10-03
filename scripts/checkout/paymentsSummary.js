import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOptions } from "../../data/deliveryOptions.js";
import { formatMoney } from "../utils/money.js";


export function renderPaymentsSummary(){

  let productPriceCents=0;
  let shippingPriceCents=0;

  cart.forEach((cartItem)=>{ 
    const product= getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption= getDeliveryOptions(cartItem.deliveryOptionId);

    shippingPriceCents += deliveryOption.priceCents;


  });

  const totalBeforeTaxCents=productPriceCents + shippingPriceCents;
  const taxCents=totalBeforeTaxCents * 0.1;
  const totalCents=totalBeforeTaxCents + taxCents;

  const paymentSummaryHtml=`
  <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatMoney(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatMoney(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatMoney(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatMoney(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatMoney(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML=paymentSummaryHtml;
  renderPaymentsSummary();
}


