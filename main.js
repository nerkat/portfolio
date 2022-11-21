import './main.scss';
import { name } from './src/data';
import './components/header';
import * as Turbo from "@hotwired/turbo"

console.log(`Bonsoir ${name}`);

document.addEventListener('turbo:load', async (event) => {

    setTimeout(() => {
        document.querySelector('#cart-counter').classList.toggle('big');
    }, 200);

})