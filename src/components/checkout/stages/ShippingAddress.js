import html from './shipping-address.html';
import './shipping-address.css';
import Template from '../../Template';

const template = new Template(html);

export default class ShippingAddress {

  handleSubmit(target) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('would have submitted', obj);
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
    const city = dom.querySelector('#city');
    city.oninvalid = function(event) {
      event.target.setCustomValidity('No numbers or special characters allowed');
    }

    this.submit = dom.querySelector('button[type=submit]');

    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    form.addEventListener('blur', event => {
      const element = event.srcElement;
      if(element.type === 'submit') return;
      if(element.type === 'checkbox') return; //fix clear of checkbox label
      if(element.options){ //Checks that user selected a state
        if(element.options[element.selectedIndex].text === 'Select') {
          element.nextElementSibling.textContent = 'Please select a state / providence';
        }
        if(element.options[element.selectedIndex].text !== 'Select') {
          element.nextElementSibling.textContent = '';
        }
      } else {
        element.nextElementSibling.textContent = element.validationMessage;
      }

      const valid = form.checkValidity();
      if(!valid) {
        this.submit.setAttribute('disabled', 'true');
      } else {
        this.submit.removeAttribute('disabled');
      }
    }, true);
   
    return dom;
  }
}