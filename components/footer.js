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
                padding: 1rem 1.5rem;
                background-color: var(--yellow);
                color: var(--dark);
                font-size: 14px;
                display: flex;
                position: fixed;
                z-index: 2;
                left: 0;
                bottom: 0;
                justify-content: space-between;
                align-items: center;
                border-top: 2px solid var(--purple);

                .contact {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                a {
                    display: flex;
                    align-items: center;
                    margin-inline: 0.5rem;
                    border: 2px solid;
                    border-color: var(--purple); 
                    border-radius: 5px;
                    text-decoration: none;
                    color: var(--dark);
                    font-size: 1.5rem;
                    font-weight: 300;
                    height: 2rem;
                    padding: 0.25rem;
                  }

                .edge {
                    margin-right: 0;
                }
                
                a:hover, a:focus {
                    border-color: var(--dark);
                    border-style: dotted;
                  }

                i {
                    padding: 0;
                }
            }
        </style>
            
        <footer>
            <p>© ` + copyrightYear + ` Kate Doolittle. Hand coded by me, Kate Doolittle :P</p>
            <div class='contact'>
                <a href='https://www.instagram.com/kdoolittleart/' target='blank'>
                    <i class="fab fa-instagram"></i>
                </a>
                <a href='https://vimeo.com/katedoolittle' target='blank'>
                    <i class="fab fa-vimeo"></i>
                </a>
                <a class='edge' href='mailto:kdoolittleart@gmail.com'>
                <i class="fas fa-envelope"></i>
                </a>
            </div>
        </footer>
    `;
    }
  }
  
// define custom element with <footer-component> tag
// and Footer custom element
customElements.define('footer-component', Footer);