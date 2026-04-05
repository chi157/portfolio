import { Link } from "react-router-dom";
import { personalInfo } from "../../data/portfolioData";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import "./Footer.css";

const socialLinks = [
  { icon: <FiGithub />, url: personalInfo.social.github, label: "GitHub" },
  { icon: <FiLinkedin />, url: personalInfo.social.linkedin, label: "LinkedIn" },
];

const footerLinks = [
  { label: "關於我", path: "/about" },
  { label: "技能", path: "/skills" },
  { label: "作品集", path: "/projects" },
  { label: "聯繫", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            <span className="footer__logo-name">{personalInfo.nameEn.split(" ")[0]}</span>
            <span className="footer__logo-slash"> /</span>
            <span className="footer__logo-bracket">&gt;</span>
          </Link>

          <nav className="footer__nav">
            {footerLinks.map(({ label, path }) => (
              <Link key={path} to={path} className="footer__nav-link">
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer__socials">
            {socialLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer__made-with">
            用 <FiHeart className="footer__heart" /> 與 React 打造
          </p>
        </div>
      </div>
    </footer>
  );
}
