import { motion } from "framer-motion";
import { experienceData } from "../../data/portfolioData";
import { FiBriefcase } from "react-icons/fi";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="experience__label">── 工作經歷</p>
          <h2 className="section-title">
            職涯<span className="gradient-text"> 歷程</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          {experienceData.map((item, i) => (
            <motion.div
              key={item.id}
              className="experience__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="experience__dot">
                <FiBriefcase />
              </div>
              <div className="experience__card">
                <span className="experience__period">{item.period}</span>
                <h3 className="experience__role">{item.role}</h3>
                <p className="experience__company">{item.company}</p>
                <ul className="experience__desc-list">
                  {item.description.map((desc, j) => (
                    <li key={j} className="experience__desc-item">{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
