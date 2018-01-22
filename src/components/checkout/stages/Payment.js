import html from './payment.html';
import './payment.css';
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

  //the folling two functions were found on stack overflow to check for credit card validation
  validateCardNumber(number, element) {
    var regex = new RegExp('^[0-9]*');
    if(!regex.test(number)) {
      element.nextElementSibling.textContent = 'numbers only';
    } else {
      this.luhnCheck(number) ? element.nextElementSibling.innerHTML = '&#10003;' : element.nextElementSibling.textContent = 'invalid card number';
    }
  }
  // 4147215001354109

  luhnCheck(val) {
    var sum = 0;
    for(var i = 0; i < val.length; i++) {
      var intVal = parseInt(val.substr(i, 1));
      if(i % 2 == 0) {
        intVal *= 2;
        if(intVal > 9) {
          intVal = 1 + (intVal % 10);
        }
      }
      sum += intVal;
    }
    return (sum % 10) == 0;
  }

  securityCodeCheck(element) {
    if(/[a-z]/i.test(element.value)) {
      element.nextElementSibling.textContent = 'numeric values only';
    } else {
      element.nextElementSibling.textContent = element.validationMessage;
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
      if(element.id === 'credit') {
        this.validateCardNumber(element.value, element);
      }

      if(element.id === 'security') {
        this.securityCodeCheck(element);
      }
          
      // if(element.id !== 'credit') {
      //   element.nextElementSibling.textContent = element.validationMessage;
      // }

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

