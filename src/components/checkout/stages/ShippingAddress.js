import html from './shipping-address.html';
import './shipping-address.css';
import Template from '../../Template';

const template = new Template(html);

export default class ShippingAddress {

  handleSubmit(target) {
    
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');

    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });
   
    return dom;
  }
}