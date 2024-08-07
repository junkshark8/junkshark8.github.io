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
              <li><a class="navlink home" href="/">HOME</a></li>
              <div>
                  <li><a class="navlink" href="//katedoolittle.com/off-the-clock.html">OFF THE CLOCK</a></li>
                  <li><a class="navlink" href="//katedoolittle.com/gigs.html">GIGS</a></li>
                  <li><a class="navlink" href="//katedoolittle.com/about.html">ABOUT</a></li>
              </div>
          </ul>
          <!-- hamburger icon for small screens -->
          <a href="javascript:void(0);" class="icon" onclick="collapseMenu()" title="toggle menu">
              <img alt="" id="bars" class="fa-icon" src="../images/bars.svg" aria-hidden="true"></img>
          </a>
      </div>
    </nav>
      `;
    // javascript for active navlinks

    // get the end of the url
    const currentLocation = location.href;
    // get nav links
    const navLink = document.querySelectorAll('a');
    // get nav menu length
    const menuLength = navLink.length

    //iterate through nav links
    for (var i = 0; i < menuLength; i++) {
      if (navLink[i].href === currentLocation) {
        navLink[i].className += ' active'
      }
      else if (navLink[i].href === '/') {
        navLink[i].className += ' active'
      }
    }
  }
}

// define custom element with <navbar-component> tag
// and Navbar custom element
customElements.define('navbar-component', Navbar);