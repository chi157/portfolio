import { motion } from "framer-motion";
import { certificationsData } from "../../data/portfolioData";
import { FiAward, FiCalendar, FiCheckCircle, FiShield, FiCloud } from "react-icons/fi";
import "./Certifications.css";

const issuerIcon = (issuer) => {
  if (issuer === "Oracle") return <FiShield />;
  if (issuer === "Microsoft") return <FiCloud />;
  return <FiAward />;
};

const typeColor = (type) => {
  switch (type) {
    case "國際證照": return "cert-tag--intl";
    case "國內證照": return "cert-tag--local";
    case "國內競賽": return "cert-tag--competition";
    case "國際檢定": return "cert-tag--test";
    default: return "";
  }
};

export default function Certifications() {
  return (
    <section className="certs section" id="certifications">
      <div className="container">
        <motion.div
          className="certs__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="certs__label">── 證照 / 競賽 / 檢定</p>
          <h2 className="section-title">
            專業<span className="gradient-text"> 認證</span>
          </h2>
          <p className="section-subtitle">持續精進，用證照驗證實力</p>
        </motion.div>

        <div className="certs__grid">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="certs__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="certs__card-icon">
                {issuerIcon(cert.issuer)}
              </div>
              <div className="certs__card-body">
                <span className={`certs__tag ${typeColor(cert.type)}`}>
                  {cert.type}
                </span>
                <h3 className="certs__card-name">{cert.name}</h3>
                <div className="certs__card-meta">
                  <span className="certs__card-issuer">
                    <FiCheckCircle />
                    {cert.issuer}
                  </span>
                  <span className="certs__card-date">
                    <FiCalendar />
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
