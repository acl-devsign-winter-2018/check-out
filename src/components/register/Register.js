import html from './register.html';
import './register.css';
import Template from '../Template';

const template = new Template(html);

export default class Register {

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('test', obj);
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    // form.addEventListener('blur', event => {
    //   const element = event.srcElement;
    //   if(element.type === 'submit') return;
    //   element.nextElementSibling.textContent = element.validationMessage;

    //   const valid = form.checkValidity();
    //   if(!valid) {
    //     this.submit.setAttribute('disabled', 'true');
    //   }
    //   else {
    //     this.submit.removeAttribute('disabled');
    //   }
    // }, true);

    // this.submit = dom.querySelector('button[type=submit');

    // const password = dom.querySelector('input[name=password]');
    
    // password.addEventListener('keyup', event => {
    //   const target = event.target;
    //   target.setCustomValidity('');
    //   if(!target.checkValidity()) return;
          
    //   const valid = target.value.toLowerCase() !== target.value;
    //   if(!valid) {
    //     target.setCustomValidity('Password must contain at least one uppercase character');
    //   }
    // });

    return dom;
  }
}
