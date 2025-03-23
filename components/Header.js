class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }
        
        nav {
          height: 80px;
          background-color: rgba(49, 47, 54, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          padding: 0 5%;
        }

        nav.shrink {
          height: 60px;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo img {
          height: 120px;
          transition: all 0.3s ease;
        }

        nav.shrink .logo img {
          height: 40px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-links li {
          margin: 0 5px;
          position: relative;
        }

        .nav-links a {
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .nav-links a:hover {
          color: #62aeb0;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nav-links a.active {
          color: #62aeb0;
          background-color: rgba(98, 174, 176, 0.1);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #62aeb0;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 70%;
        }

        .nav-links a i {
          margin-right: 6px;
          font-size: 1.1rem;
        }

        .hamburger-icon {
          display: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          z-index: 1001;
        }
        
        .hamburger-icon span {
          display: block;
          height: 3px;
          width: 100%;
          background-color: white;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        
        .hamburger-icon.active span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .hamburger-icon.active span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger-icon.active span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        /* Responsive styles */
        @media screen and (max-width: 768px) {
          .hamburger-icon {
            display: flex;
          }
          
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 250px;
            height: 100vh;
            background-color: rgba(49, 47, 54, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0,0,0,0.2);
          }
          
          .nav-links.active {
            right: 0;
          }
          
          .nav-links li {
            margin: 15px 0;
            width: 80%;
          }
          
          .nav-links a {
            width: 100%;
            text-align: center;
            padding: 12px 15px;
            justify-content: center;
          }
          
          .nav-links a::after {
            bottom: 5px;
          }
        }
      </style>

      <header>
        <nav>
          <div class="logo">
            <a href="index.html">
              <img src="./images/NameLogo.png" alt="Meherose Logo" />
            </a>
          </div>
          <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#problem-solving">Problem Solving</a></li>
          </ul>
        </nav>
      </header>
    `;

    // Dynamic active link script
    const navLinks = this.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Set active link based on current section in viewport
    const setActiveLink = () => {
      let scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    
    window.addEventListener('scroll', setActiveLink);
    
    // Hamburger menu toggle
    const hamburger = this.querySelector('.hamburger-icon');
    const navMenu = this.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Shrink header on scroll
    window.addEventListener('scroll', () => {
      const nav = this.querySelector('nav');
      if (window.scrollY > 100) {
        nav.classList.add('shrink');
      } else {
        nav.classList.remove('shrink');
      }
    });
  }
}

customElements.define('header-component', Header);