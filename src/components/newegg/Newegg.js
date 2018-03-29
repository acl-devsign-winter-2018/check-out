import html from './newegg.html';
import './newegg.css';
import Template from '../Template';

const template = new Template(html);

export default class Newegg {

  render() {
    const dom = template.clone();

    return dom;
  }
}