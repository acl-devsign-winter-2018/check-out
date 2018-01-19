import html from './checkout.html';
import './checkout.css';
import Template from '../Template';
import { removeChildren } from '../dom';

const template = new Template(html);

export default class Checkout {

  render() {
    const dom = template.clone();

    // const checkoutStage = dom.querySelector('checkout-stage');
    // const shippingAddress = new ShippingAddress();
    // checkoutStage.appendChild(shippingAddress.render());

    // const shippingMethod = new ShippingMethod();
    // checkoutStage.appendChild(shippingMethod.render());

    // const billing = new Billing();
    // checkoutStage.appendChild(billing.render());

    // const payment = new Payment();
    // checkoutStage.appendChild(payment.render());

    // const review = new Review();
    // checkoutStage.appendChild(review.render());

    return dom;
  }
}