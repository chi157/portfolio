import { motion } from "framer-motion";
import { aboutData, personalInfo } from "../../data/portfolioData";
import { FiMapPin, FiMail } from "react-icons/fi";
import "./About.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="about__label">── 關於我</p>
          <h2 className="section-title">
            認識<span className="gradient-text"> 我自己</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__avatar-wrapper">
              {personalInfo.avatar ? (
                <img src={personalInfo.avatar} alt={personalInfo.name} className="about__avatar" />
              ) : (
                <div className="about__avatar-placeholder">
                  <span>{personalInfo.name.charAt(0)}</span>
                </div>
              )}
              <div className="about__avatar-ring" />
            </div>

            <div className="about__meta">
              <div className="about__meta-item">
                <FiMapPin />
                <span>{personalInfo.location}</span>
              </div>
              <div className="about__meta-item">
                <FiMail />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {aboutData.description.map((text, i) => (
              <p key={i} className="about__text">{text}</p>
            ))}

            <div className="about__highlights">
              {aboutData.highlights.map(({ label, value, unit }, i) => (
                <motion.div
                  key={label}
                  className="about__highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <span className="about__highlight-value gradient-text">{value}</span>
                  <span className="about__highlight-unit">{unit}</span>
                  <span className="about__highlight-label">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
