import { motion } from "framer-motion";
import { skillsData } from "../../data/portfolioData";
import { FiMonitor, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import "./Skills.css";

const iconMap = {
  frontend: <FiMonitor />,
  backend: <FiServer />,
  database: <FiDatabase />,
  tools: <FiTool />,
};

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="skills__label">── 技術能力</p>
          <h2 className="section-title">
            我的<span className="gradient-text"> 技能</span>
          </h2>
          <p className="section-subtitle">不斷學習，持續進步</p>
        </motion.div>

        <div className="skills__grid">
          {skillsData.map((category, ci) => (
            <motion.div
              key={category.category}
              className="skills__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="skills__card-header">
                <div className="skills__card-icon">
                  {iconMap[category.icon]}
                </div>
                <h3 className="skills__card-title">{category.category}</h3>
              </div>

              <div className="skills__list">
                {category.skills.map((skill, si) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
