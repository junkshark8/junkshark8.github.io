// this document creates a custom html element with the tag
// <footer-component> which can be reused across multiple pages

// generate the copyrightYear with date function to automatically update
const copyrightYear = new Date().getFullYear();

// create a custom html element
class Footer extends HTMLElement {
    constructor() {
      super();
    }
    // fires when component is render into DOM
    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                width: 100%;
                padding: 0;
                background-color: #262626;
                color: #fedf1d;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
    
        <footer>
            <p>© ` + copyrightYear + ` Kate Doolittle. Hand coded by Kate Doolittle.<p>
        </footer>
    `;
    }
  }
  
// define custom element with <footer-component> tag
// and Footer custom element
customElements.define('footer-component', Footer);