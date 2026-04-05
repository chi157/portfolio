import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../../data/portfolioData";
import { FiExternalLink, FiGithub, FiFolder, FiArrowRight } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="projects__label">── 作品集</p>
          <h2 className="section-title">
            精選<span className="gradient-text"> 專案</span>
          </h2>
          <p className="section-subtitle">以下是我近期完成的部分代表作品，點擊查看完整介紹</p>
        </motion.div>

        <div className="projects__grid">
          {projectsData.map((project, i) => (
            <motion.article
              key={project.id}
              className="projects__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image / Placeholder */}
              <div className="projects__card-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="projects__card-placeholder">
                    <FiFolder />
                  </div>
                )}
                <div className="projects__card-overlay">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      className="projects__card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      className="projects__card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                  )}
                </div>

                {/* Type badge */}
                <span className="projects__type-badge">{project.type}</span>
              </div>

              {/* Body */}
              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="projects__tag">{tag}</span>
                  ))}
                </div>

                {/* Detail link */}
                <Link
                  to={`/projects/${project.id}`}
                  className="projects__detail-link"
                >
                  查看詳細介紹 <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
