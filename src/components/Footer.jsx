import { styles } from '../styles'

/* Logos */

import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";

const Footer = () => {
    return (
      <footer className={`${styles.paddingX} pt-5 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5`}>
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a className="social-icon" href="https://github.com/Vignesh-1822" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} alt="github" className="w-1/2 h-1/2" />
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/vignesh-gopal-rajendran-6720211b2/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© {new Date().getFullYear()} Vignesh Gopal Rajendran. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  