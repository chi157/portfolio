import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { personalInfo } from "../../data/portfolioData";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const navLinks = [
  { label: "關於我", path: "/about" },
  { label: "技能", path: "/skills" },
  { label: "經歷", path: "/experience" },
  { label: "證照", path: "/certifications" },
  { label: "作品集", path: "/projects" },
  { label: "聯繫", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} id="navbar">
      <div className="navbar__inner container">
        {/* Logo → goes back to home */}
        <button
          className="navbar__logo"
          onClick={() => navigate("/")}
          aria-label="回首頁"
        >
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">{personalInfo.nameEn.split(" ")[0]}</span>
          <span className="navbar__logo-slash"> /</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </button>

        <ul className="navbar__links">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href={personalInfo.resumeUrl} className="navbar__cta" target="_blank" rel="noopener noreferrer" download="張謦麒_履歷.jpg">
          下載履歷
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={personalInfo.resumeUrl} className="navbar__mobile-cta" target="_blank" rel="noopener noreferrer" download="張謦麒_履歷.jpg">
              下載履歷
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
