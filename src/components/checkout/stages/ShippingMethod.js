import html from './shipping-method.html';
import './shipping-method.css';
import Template from '../../Template';

const template = new Template(html);

export default class ShippingAddress {

  constructor(cb) {
    this.cb = cb;
  }

  handleSubmit(target) {
    const data = new FormData(target);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('would have submitted', obj);
    if(obj.billing) { //if needs billing address;
      this.cb(false);
    } else {
      this.cb(true);
    }

  }