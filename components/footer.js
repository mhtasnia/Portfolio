class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            footer {
                height: 120px;
                padding: 0 10px;
                display: flex;
                justify-content: center; /* Center the ul element */
                align-items: center;
                background-color: #dfdfe2;
            }

            ul li {
                list-style: none;
                display: inline;
            }

            a {
                margin: 0 15px;
                color: inherit;
                text-decoration: none;
            }

            a:hover {
                padding-bottom: 5px;
                box-shadow: inset 0 -2px 0 0 #333;
            }

            .social-row {
                font-size: 20px;
                display: flex; /* Ensure flexbox is used */
                align-items: center;
                justify-content: center; /* Center items within the ul */
                padding: 0; /*Reset padding*/
                margin: 0; /*Reset margin*/
            }

            .social-row li a {
                color: #333;
                size: 30px;
                padding: 0 10px;
                scale: 1.5;
            }
            </style>

            <footer>
            <ul class="social-row">
                <li>
                <a href="https://github.com/mhtasnia"
                    ><i class="fab fa-github"></i
                ></a>
                </li>
                <li>
                <a href="mailto:tasnia22205341191@diu.edu.bd"
                    ><i class="fas fa-envelope"></i
                ></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/meherose-hossain-tasnia-763074266/"
                    ><i class="fab fa-linkedin"></i
                ></a>
                </li>
            </ul>
            </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);