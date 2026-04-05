import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personalInfo } from "../../data/portfolioData";
import { FiGithub, FiLinkedin, FiArrowRight, FiUser } from "react-icons/fi";
import "./Hero.css";

const socialIcons = [
  { icon: <FiGithub />, url: personalInfo.social.github, label: "GitHub" },
  { icon: <FiLinkedin />, url: personalInfo.social.linkedin, label: "LinkedIn" },
];

const navCards = [
  { label: "關於我", path: "/about", emoji: "👤" },
  { label: "技能", path: "/skills", emoji: "⚡" },
  { label: "經歷", path: "/experience", emoji: "📖" },
  { label: "證照", path: "/certifications", emoji: "🏅" },
  { label: "作品集", path: "/projects", emoji: "🚀" },
  { label: "聯繫", path: "/contact", emoji: "✉️" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background particles */}
      <div className="hero__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      <div className="hero__inner">
        {/* ---------- Left: Identity ---------- */}
        <motion.div
          className="hero__identity"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Avatar */}
          <motion.div
            className="hero__avatar-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {personalInfo.avatar ? (
              <img src={personalInfo.avatar} alt={personalInfo.name} className="hero__avatar" />
            ) : (
              <div className="hero__avatar-placeholder">
                <FiUser />
              </div>
            )}
            <div className="hero__avatar-ring" />
          </motion.div>

          {/* Name & Title */}
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="hero__greeting-line" />
            你好，我是
          </motion.p>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {personalInfo.name}
            <span className="gradient-text">.</span>
          </motion.h1>

          <motion.h2
            className="hero__title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Socials */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {socialIcons.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                className="hero__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}

            <a href={personalInfo.resumeUrl} className="hero__resume-btn" target="_blank" rel="noopener noreferrer" download="張謦麒_履歷.jpg">
              下載履歷 <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>

        {/* ---------- Right: Code Block + Nav Cards ---------- */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Floating orbs */}
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />

          {/* Code block */}
          <motion.div
            className="hero__code-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">portfolio.js</span>
            </div>
            <pre className="hero__code-content">
              <code>
{`const researcher = {
  name: "${personalInfo.name}",
  school: "國立中央大學",
  lab: "ADML",
  skills: ["Java", "Python",
           "Spring Boot", "YOLO"],
  research: "NLP & LLM",
  rank: "1/61 🏆"
};`}
              </code>
            </pre>
          </motion.div>

          {/* Navigation cards grid */}
          <div className="hero__nav-grid">
            {navCards.map((card, i) => (
              <motion.div
                key={card.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
              >
                <Link to={card.path} className="hero__nav-card">
                  <span className="hero__nav-emoji">{card.emoji}</span>
                  <span className="hero__nav-label">{card.label}</span>
                  <FiArrowRight className="hero__nav-arrow" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
