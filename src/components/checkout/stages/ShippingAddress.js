import html from './shipping-address.html';
import './shipping-address.css';
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

  checkCityValidity(element) { 
    if(element.checkValidity()) { // if the entry is valid
      element.nextElementSibling.textContent = '';
    } else if(element.value !== '' && !element.checkValidity()) { //if the value is not empty and invalid
      element.nextElementSibling.textContent = 'No numbers or special characters allowed';
    } else if(element.value === '') { // if the entry empty
      element.nextElementSibling.textContent = element.validationMessage;
    }
  }

  checkOptionValidity(element) {
    if(element.options[element.selectedIndex].text === 'Select') {
      element.nextElementSibling.textContent = 'Please select a state / providence';
    } else if(element.options[element.selectedIndex].text !== 'Select') {
      element.nextElementSibling.textContent = '';
    }
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
    
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
        this.checkOptionValidity(element);
      } 

      if(element.id === 'city') {
        this.checkCityValidity(element);
      }

      if(element.id !== 'city' && !element.options) {
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