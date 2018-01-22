import html from './checkout.html';
import './checkout.css';
import Template from '../Template';
import { removeChildren } from '../dom';
import ShippingAddress from './stages/ShippingAddress';
import Billing from './stages/Billing';
import ShippingMethod from './stages/ShippingMethod';
import Payment from './stages/Payment';
import Review from './stages/Review';

const template = new Template(html);

export default class Checkout {

  handleShippingAddressSubmit(needsBilling) {
    if(needsBilling) this.needsBilling = true;

    removeChildren(this.checkoutStage);
    const shippingMethod = new ShippingMethod(() => this.handleShippingMethodSubmit());
    this.checkoutStage.appendChild(shippingMethod.render());
  }

  handleShippingMethodSubmit() {
    if(this.needsBilling) {
      removeChildren(this.checkoutStage);
      const billing = new Billing(() => this.handleBillingAddressSubmit());
      this.checkoutStage.appendChild(billing.render());
      this.shipping.classList.remove('active');
      this.billing.classList.add('active');
    } else {
      removeChildren(this.checkoutStage);
      const payment = new Payment(() => this.handlePaymentSubmit());
      this.checkoutStage.appendChild(payment.render());
      this.shipping.classList.remove('active');
      this.payment.classList.add('active');
    }
  }

  handleBillingAddressSubmit() {
    removeChildren(this.checkoutStage);
    const payment = new Payment(() => this.handlePaymentSubmit());
    this.checkoutStage.appendChild(payment.render());
    this.billing.classList.remove('active');
    this.payment.classList.add('active');
  }

  handlePaymentSubmit() {
    removeChildren(this.checkoutStage);
    const review = new Review();
    this.checkoutStage.appendChild(review.render());
    this.payment.classList.remove('active');
    this.review.classList.add('active');
  }

  render() {
    const dom = template.clone();
  
    this.checkoutStage = dom.querySelector('#checkout-stage');
    this.shipping = dom.querySelector('#shipping-page');
    this.billing = dom.querySelector('#billing-page');
    this.review = dom.querySelector('#review-page');
    this.payment = dom.querySelector('#payment-page');

    const shippingAddress = new ShippingAddress(needsBilling => this.handleShippingAddressSubmit(needsBilling));
    this.checkoutStage.appendChild(shippingAddress.render());
    
    return dom;
  }
}