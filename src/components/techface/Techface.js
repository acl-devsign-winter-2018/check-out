import html from './techface.html';
import './techface.css';
import Template from '../Template';

const template = new Template(html);

export default class Techface {

  render() {
    const dom = template.clone();

    return dom;
  }
}