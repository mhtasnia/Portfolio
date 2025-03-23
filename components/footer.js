class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            footer {
                background-color: #334464;
                color: #fff;
                padding: 60px 0 30px;
            }
            
            .footer-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 40px;
            }
            
            .footer-section {
                margin-bottom: 30px;
            }
            
            .footer-section h3 {
                font-size: 1.3rem;
                margin-bottom: 20px;
                position: relative;
                padding-bottom: 10px;
            }
            
            .footer-section h3:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 50px;
                height: 2px;
                background-color: #62aeb0;
            }
            
            .footer-about p {
                line-height: 1.6;
                margin-bottom: 20px;
                color: #ddd;
            }
            
            .footer-links ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .footer-links li {
                margin-bottom: 12px;
            }
            
            .footer-links a {
                color: #ddd;
                text-decoration: none;
                transition: all 0.3s ease;
                display: inline-block;
            }
            
            .footer-links a:hover {
                color: #62aeb0;
                transform: translateX(5px);
            }
            
            .footer-links i {
                margin-right: 10px;
                color: #62aeb0;
            }
            
            .footer-contact p {
                margin-bottom: 15px;
                display: flex;
                align-items: flex-start;
                color: #ddd;
            }
            
            .footer-contact i {
                margin-right: 15px;
                color: #62aeb0;
                font-size: 1.1rem;
                margin-top: 4px;
            }
            
            .social-icons {
                display: flex;
                margin-top: 20px;
            }
            
            .social-icons a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.1);
                margin-right: 10px;
                color: #fff;
                font-size: 1.2rem;
                transition: all 0.3s ease;
            }
            
            .social-icons a:hover {
                background-color: #62aeb0;
                transform: translateY(-5px);
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 30px;
                margin-top: 30px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                color: #aaa;
                font-size: 0.9rem;
            }
            
            .footer-bottom p {
                margin-bottom: 10px;
            }
            
            .footer-bottom a {
                color: #62aeb0;
                text-decoration: none;
            }
            
            @media screen and (max-width: 768px) {
                .footer-container {
                    grid-template-columns: 1fr;
                    gap: 30px;
                }
                
                .footer-section {
                    margin-bottom: 20px;
                }
                
                .footer-section h3 {
                    font-size: 1.2rem;
                }
            }
        </style>

        <footer>
            <div class="footer-container">
                <div class="footer-section footer-about">
                    <h3>About Me</h3>
                    <p>I'm a Software Engineering student passionate about creating innovative solutions. I specialize in web development, machine learning, and competitive programming.</p>
                    <div class="social-icons">
                        <a href="https://github.com/mhtasnia" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/meherose-hossain-tasnia-763074266/" target="_blank" rel="noopener">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="mailto:tasnia22205341191@diu.edu.bd">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#about"><i class="fas fa-chevron-right"></i> About Me</a></li>
                        <li><a href="#tech-stack"><i class="fas fa-chevron-right"></i> Tech Stack</a></li>
                        <li><a href="#projects"><i class="fas fa-chevron-right"></i> Projects</a></li>
                        <li><a href="#education"><i class="fas fa-chevron-right"></i> Education</a></li>
                        <li><a href="#problem-solving"><i class="fas fa-chevron-right"></i> Problem Solving</a></li>
                        <li><a href="./documents/Cv_v2.pdf" target="_blank" rel="noopener"><i class="fas fa-chevron-right"></i> Download CV</a></li>
                    </ul>
                </div>
                
                <div class="footer-section footer-contact">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Daffodil International University, Dhaka, Bangladesh</p>
                    <p><i class="fas fa-phone"></i> +123 456 7890</p>
                    <p><i class="fas fa-envelope"></i> tasnia22205341191@diu.edu.bd</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Meherose Hossain Tasnia. All Rights Reserved.</p>
                <p>Designed with <i class="fas fa-heart" style="color: #62aeb0;"></i> by Meherose</p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);