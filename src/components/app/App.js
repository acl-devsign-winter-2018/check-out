import Template from '../Template';
import html from './app.html';
import Checkout from '../checkout/Checkout';
import Header from './Header';
import './app.css';
import Home from '../home/Home';
import Newegg from '../newegg/Newegg';
import Register from '../register/Register';
import { removeChildren } from '../dom';

const template = new Template(html);

const map = new Map();
map.set('#newegg', Newegg);
map.set('#register', Register);
map.set('#checkout', Checkout);


export default class App {
  
  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || Home;
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
