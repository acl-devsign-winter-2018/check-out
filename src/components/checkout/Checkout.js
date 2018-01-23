import html from './checkout.html';
import './checkout.css';
import Template from '../Template';

const template = new Template(html);

  

export default class Checkout {

  handleCheckoutSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('Form values:', obj);
  }

  render() {
    const dom = template.clone();

    // Checkout Form listener
    const form = dom.querySelector('.checkout');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleCheckoutSubmit(event.target);
    });

    // Submit true when all inputs are correct
    this.submit = dom.querySelector('button[type=submit');
    form.addEventListener('blur', event => {

      const element = event.srcElement;
      if(element.type === 'submit' || element.type === 'button') return;
      element.nextElementSibling.textContent = element.validationMessage;
      // element.parentNode.nextElementSibling.textContent = element.validationMessage;
      this.submit.disabled = !form.checkValidity();

      // const select = event

    }, true);

    return dom;
  }
}