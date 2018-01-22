import html from './review.html';
import './review.css';
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
    this.cb();

  }

  render() {
    const dom = template.clone();

    return dom;
  }
}
