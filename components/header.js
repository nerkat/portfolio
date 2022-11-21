// a custom element to be used as the app header
class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
      <header>
        <h1>My App</h1>
      </header>
    `;
    }
}

// a custom element to be used as the app footer
class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <p>My App &copy; 2019</p>
        </footer>
        `;
    }
}

customElements.define('app-header', Header);
customElements.define('app-footer', Footer);
