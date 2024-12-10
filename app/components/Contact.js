import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg, #141414 0%, #1a1a1a 100%)",
        position: "relative",
        minHeight: "10vh", // Ensure full-screen height for the section
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(138, 255, 185, 0.05) 0%, rgba(20, 20, 20, 0) 80%)",
          pointerEvents: "none",
        }}
      />
      <h1
        style={{
          color: "#8affb9",
          textShadow: "0 10px 30px rgba(92, 182, 129, 0.2)",
          fontSize: "2rem",
          fontWeight: 500,
          marginBottom: "30px",
          fontFamily: "Poppins",
        }}
      >
        Contact Me
      </h1>
      <div
        className="social-links flex space-x-4 mt-8"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "10px",
          gap: "20px",
        }}
      >
        <div className="social-link-wrapper fade-in-element">
          <Link legacyBehavior href="https://www.linkedin.com/in/dhruvdodda/" passHref>
            <a className="social-icon" aria-label="Linkedin" style={{ color: "#8affb9" }}>
              <FiLinkedin size={30} />
            </a>
          </Link>
        </div>
        <div className="social-link-wrapper fade-in-element">
          <Link legacyBehavior href="https://github.com/ddodda123" passHref>
            <a className="social-icon" aria-label="GitHub" style={{ color: "#8affb9" }}>
              <FiGithub size={30} />
            </a>
          </Link>
        </div>
        <div className="social-link-wrapper fade-in-element">
          <a
            href="mailto:dhruvdodda@gmail.com"
            className="social-icon"
            aria-label="Email"
            style={{ color: "#8affb9" }}
          >
            <FiMail size={30} />
          </a>
        </div>
        <div className="social-link-wrapper fade-in-element">
          <Link legacyBehavior href="https://instagram.com/dhruvd_0927" passHref>
            <a className="social-icon" aria-label="Instagram" style={{ color: "#8affb9" }}>
              <FiInstagram size={30} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
