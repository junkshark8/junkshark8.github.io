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
        <footer>
            <p>© ` + copyrightYear + ` Kate Doolittle. Hand coded by me, Kate Doolittle :P</p>
            <div class='contact'>
                <a href='https://www.instagram.com/kdoolittleart/' target='blank'>
                    <img alt="instagram" class="fa-icon grow" src="images/instagram.svg"></img>
                </a>
                <a href='https://vimeo.com/katedoolittle' target='blank'>
                    <img alt="vimeo" class="fa-icon grow" src="images/vimeo-v.svg"></img>
                </a>
                <a class='edge' href='mailto:kdoolittleart@gmail.com'>
                    <img alt="email" class="fa-icon grow" src="images/envelope.svg"></img>
                </a>
            </div>
        </footer>
    `;
    }
  }
  
// define custom element with <footer-component> tag
// and Footer custom element
customElements.define('footer-component', Footer);