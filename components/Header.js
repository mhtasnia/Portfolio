class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 100px;
          background-color: #312f36;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: height 0.3s ease;
        }

        header-component{ /* target the nav inside the custom element*/
          position: sticky;
          top: 0;
          z-index: 100;

        }

        nav.shrink {
          height: 60px;
        }

        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }

        nav li {
          margin: 0 15px;
        }

        nav a {
          font-weight: 700;
          font-size: 1.2rem;
          color: #fff;
          text-decoration: none;
          padding: 8px 12px;
          position: relative;
        }

        nav a:not(:has(img))::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          display: block;
          width: 100%;
          height: 2px;
          background: #62aeb0;
          transition: transform 0.3s ease;
        }

        nav a:not(:has(img)):hover::after {
          transform: scaleX(1);
        }

        nav a img {
          transition: transform 0.3s ease;
          text-decoration: none;
        }

        nav a:hover img {
          transform: scale(1.1);
          text-decoration: none;
        }

        .logo img {
          height: 140px;
          align-self: center;
          margin-left: -20px;
          text-decoration: none;
        }

        /* Visited and active underline */
        nav a:visited,
        nav a.active,
        nav a.active-link { /* Add active-link class */
          border-bottom: 2px solid lightblue; /* Add underline */
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
            <li><a href="#about">About</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="project.html">Projects</a></li>
            <li><a href="education.html">Education</a></li>
          </ul>
        </nav>
      </header>
    `;

    // Dynamic active link script
    const navLinks = this.querySelectorAll('nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-link');
      }
    });
  }
}

customElements.define('header-component', Header);