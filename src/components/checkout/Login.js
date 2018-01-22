import html from './login.html';
import './login.css';
import Template from '../Template';

const template = new Template(html);

export default class Login {

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('would have submitted', obj);
    window.location.hash = 'checkout';
  }

  checkPassword(password) {
    const target = password.target;
    target.setCustomValidity('');
    if(!target.checkValidity()) return; //check for minimum length

    const valid = target.value.toLowerCase() !== target.value; //check for uppercase
    if(!valid) {
      target.setCustomValidity('Password must contain at least one uppercase character');
    }
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
    const guest = dom.querySelector('#guest');
    const password = dom.querySelector('input[type=password');
    
    this.submit = dom.querySelector('button[type=submit]');
    
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    form.addEventListener('blur', event => {
      const element = event.srcElement;
      if(element.type === 'submit') return;
      element.nextElementSibling.textContent = element.validationMessage;

      const valid = form.checkValidity();
      if(!valid) {
        this.submit.setAttribute('disabled', 'true');
      } else {
        this.submit.removeAttribute('disabled');
      }
    }, true);


    guest.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.hash = 'checkout';
    });

    password.addEventListener('keyup', event => this.checkPassword(event));

    return dom;
  } //render

}