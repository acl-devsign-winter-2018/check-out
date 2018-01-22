import html from './checkout.html';
import './checkout.css';
import Template from '../Template';

const template = new Template(html);

export default class Checkout {

  render() {
    const dom = template.clone();

    return dom;
  }
}