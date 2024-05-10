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
    <nav id="navbar">
      <div class="topnav" id="topnav">
          <ul id="nav-container">
              <li><a class="navlink home active" href="index.html">HOME</a></li>
              <div>
                  <li><a class="navlink" href="off-the-clock.html">OFF THE CLOCK</a></li>
                  <li><a class="navlink" href="gigs.html">GIGS</a></li>
                  <li><a class="navlink" href="about.html">ABOUT</a></li>
              </div>
          </ul>
          <!-- hamburger icon for small screens -->
          <a href="javascript:void(0);" class="icon" onclick="collapseMenu()">
              <i class="fa fa-bars"></i>
          </a>
      </div>
    </nav>
      `;
  }
}

// define custom element with <navbar-component> tag
// and Navbar custom element
customElements.define('navbar-component', Navbar);