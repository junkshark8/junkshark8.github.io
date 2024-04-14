// this document creates a custom html element with the tag
// <navbar-component> which can be reused across multiple pages

// create a custom html element
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  // fires when component is render into DOM
  connectedCallback() {
    this.innerHTML = `
    <style>
        .header {
            width: 100%;
            display: flex;
            position: fixed;
            background-color: var(--yellow);
            justify-content: space-between;
            align-items: center;
            z-index: 3;
            transition: all .3s ease;
            border-bottom: 2px solid var(--purple);
          }
    
        nav {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          padding: 0;
        }
        
        ul {
          list-style-type: none;
          padding: 0;
        }
        
        li {
            display: inline;
            text-align: right;
            width: min-content;
            white-space: nowrap;
            padding-block: 1rem;
            padding-inline: 1.5rem;
          }
        
        a.navlink {
            border: 2px solid;
            border-color: var(--purple); 
            border-radius: 5px;
            text-decoration: none;
            color: var(--dark);
            font-size: 1rem;
            font-weight: 300;
            padding: 5px;
          }
        
        a.navlink:hover, a.navlink:focus {
          border: 2px dotted;
          border-color: var(--dark);
          }
        
        a.navlink.home {
            text-align: left;
            width: 100%;
            font-weight: 600;
            color: var(--dark);
            font-size: 1.25rem;
          }
        </style>
        
        <div class="header">
            <li><a class="navlink home" href=index.html tabindex="0">HOME</a></li>
            <nav>
                <li><a class="navlink" href="off-duty.html" tabindex="0">OFF THE CLOCK</a></li>
                <li><a class="navlink" href="on-the-clock.html" tabindex="0">GIGS</a></li>
                <li><a class="navlink" href="about.html" tabindex="0">ABOUT</a></li>
            </nav>
        </div>
      `;
  }
}

// define custom element with <navbar-component> tag
// and Navbar custom element
customElements.define('navbar-component', Navbar);