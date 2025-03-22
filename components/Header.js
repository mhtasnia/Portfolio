class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          nav {
            height: 40px;
            background-color: #0a0a23;
            display: flex;
            align-items: center;
            justify-content: space-between; /* Distribute space between logo and links */
            padding: 0 15px; /* Add padding to the nav */
          }

          nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex; /* Display list items in a row */
          }

          nav li {
            margin: 0 15px;
          }

          nav a {
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            padding: 8px 12px;
          }

          nav a:hover {
            box-shadow: inset 0 -2px 0 0 #fff;
          }

          .logo img {
            height: 80px;
            align-self: center;
            margin-left: -20px; /* Remove left margin */
          }
      </style>

      <header>
        <nav>
        <div class="logo">
          <a href="index.html">
            <img src="./images/NameLogo.png" alt="Your Logo" />
          </a>
        </div>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="work.html">Work</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);