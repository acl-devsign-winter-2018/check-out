import html from './checkout.html';
import './checkout.css';
import Template from '../Template';
import { removeChildren } from '../dom';
// import ShippingAddress from './stages/ShippingAddress';
// import Billing from './stages/Billing';
// import ShippingMethod from './stages/ShippingMethod';
import Payment from './stages/Payment';

const template = new Template(html);

export default class Checkout {

  // handleShippingAddressSubmit(needsBilling) {
  //   if(needsBilling) { //if billing info is needed
  //     removeChildren(this.checkoutStage);
  //     const billing = new Billing(this.handleBillingAddressSubmit);
  //     this.checkoutStage.appendChild(billing.render());
  //     this.shipping.classList.remove('active');
  //     this.billing.classList.add('active');
  //   } else {
  //     removeChildren(this.checkoutStage);
  //     const shippingMethod = new ShippingMethod();
  //     this.checkoutStage.appendChild(shippingMethod.render());
  //   }
  // }

  // handleBillingAddressSubmit() {
  //   removeChildren(this.checkoutStage);
  //   const payment = new Payment();
  //   this.checkoutStage.appendChild(payment.render());
  // }

  render() {
    const dom = template.clone();
  
    this.checkoutStage = dom.querySelector('#checkout-stage');
    this.shipping = dom.querySelector('#shipping-page');
    this.billing = dom.querySelector('#billing-page');
    this.review = dom.querySelector('#review-page');
    this.payment = dom.querySelector('#payment-page');
    // const shippingAddress = new ShippingAddress(needsBilling => this.handleShippingAddressSubmit(needsBilling));
    // this.checkoutStage.appendChild(shippingAddress.render());
    
    // const billing = new Billing();
    // this.checkoutStage.appendChild(billing.render());
    
    // const shippingMethod = new ShippingMethod();
    // this.checkoutStage.appendChild(shippingMethod.render());

    const payment = new Payment();
    this.checkoutStage.appendChild(payment.render());

    // const review = new Review();
    // this.checkoutStage.appendChild(review.render());

    return dom;
  }
}