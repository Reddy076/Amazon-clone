import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentsSummary } from "./checkout/paymentsSummary.js";
import { updateCheckoutHeader } from "./checkout/checkoutHeader.js";

updateCheckoutHeader();
renderOrderSummary();
renderPaymentsSummary();