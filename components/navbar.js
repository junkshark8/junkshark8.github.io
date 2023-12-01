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
            background-color: #262626;
            justify-content: space-between;
            align-items: center;
            z-index: 2;
            transition: all .3s ease;
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
            padding-block: 15px;
            padding-inline: 20px;
          }
        
        a.navlink {
            border-style: dotted;
            border-color: #262626; 
            text-decoration: underlined;
            color: #fedf1d;
            font-size: 14px;
            font-weight: 300;
            padding: 5px;
          }
        
        a.navlink:hover {
          border-color: #fedf1d;
          }

        a.navlink:focus {
          border-style: dotted;
        }
        
        a.navlink.home {
            text-align: left;
            width: 100%;
            font-weight: 600;
            color: #fedf1d;
            font-size: 18px;
          }
        </style>
        
        <div class="header">
            <li><a class="navlink home" href=index.html tabindex="0">HOME</a></li>
            <nav>
                <li><a class="navlink" href="off-duty.html" tabindex="0">OFF DUTY</a></li>
                <li><a class="navlink" href="on-the-clock.html" tabindex="0">ON THE CLOCK</a></li>
                <li><a class="navlink" href="about.html" tabindex="0">ABOUT</a></li>
            </nav>
        </div>
      `;
  }
}

// define custom element with <navbar-component> tag
// and Navbar custom element
customElements.define('navbar-component', Navbar);