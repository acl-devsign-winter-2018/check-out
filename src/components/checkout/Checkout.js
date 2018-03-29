import html from './checkout.html';
import './checkout.css';
import Template from '../Template';

const template = new Template(html);

export default class Checkout {

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    // console.log('form values:', obj);
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('.checkout');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    this.submit = dom.querySelector('button[type=submit');
    form.addEventListener('blur', event => {

      const element = event.srcElement;
      if(element.type === 'submit' || element.type === 'button') return;
      element.nextElementSibling.textContent = element.validationMessage;
      this.submit.disabled = !form.checkValidity();

    }, true);

    return dom;
  }
}