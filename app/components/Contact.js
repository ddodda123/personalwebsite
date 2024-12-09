import { FiGithub, FiLinkedin, FiInstagram, FiLink, FiMail } from 'react-icons/fi';
import Link from "next/link";

export default function Contact() {
    return(
    <div className="social-links flex space-x-4 mt-8" style={{"marginTop": "50px", "marginBottom": "50px"}}> {/* Increased margin-top */}
    <div className="social-link-wrapper fade-in-element">
      <Link legacyBehavior href="https://www.linkedin.com/in/dhruvdodda/" passHref>
        <a className="social-icon" aria-label="Linkedin">
          <FiLinkedin />
          <span className="icon-line"></span> {/* Line under the icon */}
        </a>
      </Link>
    </div>
    <div className="social-link-wrapper fade-in-element">
      <Link legacyBehavior href="https://github.com/ddodda123" passHref>
        <a className="social-icon" aria-label="GitHub">
          <FiGithub />
          <span className="icon-line"></span> {/* Vertical line */}
        </a>
      </Link>
    </div>
    <div className="social-link-wrapper fade-in-element">
      <a href="mailto:dhruvdodda@gmail.com" className="social-icon" aria-label="Email">
        <FiMail />
        <span className="icon-line"></span> {/* Vertical line */}
      </a>
    </div>
    <div className="social-link-wrapper fade-in-element">
      <Link legacyBehavior href="https://instagram.com/dhruvd_0927" passHref>
        <a className="social-icon" aria-label="Instagram">
          <FiInstagram />
          <span className="icon-line"></span> {/* Vertical line */}
        </a>
      </Link>
    </div>
    
  </div>
  )
}