import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import {
  FiArrowLeft, FiExternalLink, FiGithub, FiCalendar,
  FiTag, FiCheckSquare, FiCode, FiBarChart2,
} from "react-icons/fi";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./ProjectDetailPage.css";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === Number(id) || p.slug === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="page-main">
          <div className="project-detail__not-found">
            <h2>找不到此專案 😢</h2>
            <Link to="/projects" className="project-detail__back-btn">
              <FiArrowLeft /> 返回作品集
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="page-main project-detail">

        {/* ── Hero Banner ─────────────────────── */}
        <section className="project-detail__hero">
          <div className="project-detail__hero-bg" />
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back */}
              <button
                className="project-detail__back-btn"
                onClick={() => navigate("/projects")}
              >
                <FiArrowLeft /> 返回作品集
              </button>

              <div className="project-detail__meta-row">
                <span className="project-detail__type-badge">{project.type}</span>
                <span className="project-detail__period">
                  <FiCalendar /> {project.period}
                </span>
              </div>

              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__subtitle">{project.subtitle}</p>

              {/* Tags */}
              <div className="project-detail__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-detail__tag">
                    <FiTag /> {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="project-detail__ctas">
                {project.liveUrl !== "#" && (
                  <a href={project.liveUrl} className="project-detail__cta project-detail__cta--primary" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> 查看 Live Demo
                  </a>
                )}
                {project.githubUrl !== "#" && (
                  <a href={project.githubUrl} className="project-detail__cta project-detail__cta--secondary" target="_blank" rel="noopener noreferrer">
                    <FiGithub /> 查看原始碼
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Content ─────────────────────────── */}
        <section className="project-detail__content">
          <div className="container project-detail__grid">

            {/* Left: Description + Features */}
            <motion.div
              className="project-detail__main"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Description */}
              <div className="project-detail__block">
                <h2 className="project-detail__block-title">
                  📋 專案介紹
                </h2>
                {project.fullDescription.map((para, i) => (
                  <p key={i} className="project-detail__para">{para}</p>
                ))}
              </div>

              {/* Features */}
              <div className="project-detail__block">
                <h2 className="project-detail__block-title">
                  <FiCheckSquare className="project-detail__block-icon" /> 主要功能
                </h2>
                <ul className="project-detail__feature-list">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={i}
                      className="project-detail__feature-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                    >
                      <span className="project-detail__feature-dot" />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Tech Stack + Results */}
            <motion.aside
              className="project-detail__sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Tech Stack */}
              <div className="project-detail__card">
                <h3 className="project-detail__card-title">
                  <FiCode /> 技術棧
                </h3>
                {project.techStack.map((stack) => (
                  <div key={stack.category} className="project-detail__stack-group">
                    <p className="project-detail__stack-category">{stack.category}</p>
                    <div className="project-detail__stack-items">
                      {stack.items.map((item) => (
                        <span key={item} className="project-detail__stack-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="project-detail__card">
                <h3 className="project-detail__card-title">
                  <FiBarChart2 /> 成果 / 狀態
                </h3>
                <div className="project-detail__results">
                  {project.results.map((r) => (
                    <div key={r.label} className="project-detail__result-row">
                      <span className="project-detail__result-label">{r.label}</span>
                      <span className="project-detail__result-value">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>

          </div>
        </section>

        {/* ── Other Projects ───────────────────── */}
        <section className="project-detail__others">
          <div className="container">
            <h2 className="project-detail__others-title">其他專案</h2>
            <div className="project-detail__others-grid">
              {projectsData
                .filter((p) => p.id !== project.id)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/projects/${p.id}`}
                    className="project-detail__other-card"
                  >
                    <div className="project-detail__other-type">{p.type}</div>
                    <h3 className="project-detail__other-title">{p.title}</h3>
                    <p className="project-detail__other-desc">{p.description.slice(0, 60)}…</p>
                    <div className="project-detail__other-tags">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="project-detail__other-tag">{t}</span>
                      ))}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
