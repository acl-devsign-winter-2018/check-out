import html from './register.html';
import './register.css';
import Template from '../Template';

const template = new Template(html);

export default class Register {

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log('Form values:', obj);
  }

  handleToggleShowPassword() {
    const type = this.password.type;
    this.password.type = type === 'password' ? 'text' : 'password';
    this.showPassword.textContent = type === 'password' ? 'Hide' : 'Show';
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
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

    this.showPassword = dom.querySelector('button[type=button]');
    this.showPassword.addEventListener('click', () => this.handleToggleShowPassword());

    this.password = dom.querySelector('input[name=password]');
    this.password.addEventListener('keyup', event => {
      const target = event.target;
      target.setCustomValidity('');
      if(!target.checkValidity()) return;
          
      const valid = target.value.toLowerCase() !== target.value;
      if(!valid) {
        target.setCustomValidity('Password must contain at least one uppercase character');
      }
    });

    return dom;
  }
}
