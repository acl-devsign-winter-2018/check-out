import html from './register.html';
import './register.css';
import Template from '../Template';

const template = new Template(html);

export default class Register {

  render() {
    const dom = template.clone();

    return dom;
  }
}
