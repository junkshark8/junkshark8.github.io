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
                <a href='https://www.instagram.com/kdoolittleart/' target='blank' title='instagram'>
                    <i class="fab fa-instagram"></i>
                </a>
                <a href='https://vimeo.com/katedoolittle' target='blank' title='vimeo'>
                    <i class="fab fa-vimeo-v"></i>
                </a>
                <a class='edge' href='mailto:kdoolittleart@gmail.com' title='email'>
                    <i class="far fa-envelope"></i>
                </a>
            </div>
        </footer>
    `;
    }
  }
  
// define custom element with <footer-component> tag
// and Footer custom element
customElements.define('footer-component', Footer);