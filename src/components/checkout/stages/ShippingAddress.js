import html from './shipping-address.html';
import './shipping-address.css';
import Template from '../../Template';

const template = new Template(html);

export default class ShippingAddress {

  render() {
    const dom = template.clone();

   
    return dom;
  }
}