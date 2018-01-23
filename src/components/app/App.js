import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from './Header';
import { removeChildren } from '../dom';
import Login from '../checkout/Login';
import Checkout from '../checkout/Checkout';

const template = new Template(html);

const map = new Map();
map.set('#checkout', Checkout);
map.set('#login', Login);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || Login;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }

  render() {
    const dom = template.clone();   
    
    dom.querySelector('header').appendChild(new Header().render());

    this.main = dom.querySelector('main');
    this.setPage();

    return dom;
  }
}
