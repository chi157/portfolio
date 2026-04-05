import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, contactData } from "../../data/portfolioData";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // 模擬發送 - 你可以替換為真正的 API 呼叫
    setTimeout(() => {
      setSending(false);
      alert("訊息已送出！（這是模擬功能）");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="contact__label">── 聯繫方式</p>
          <h2 className="section-title">
            {contactData.title.split("聯繫")[0]}
            <span className="gradient-text">聯繫</span>
          </h2>
          <p className="section-subtitle">{contactData.description}</p>
        </motion.div>

        <div className="contact__grid">
          {/* Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-card">
              <div className="contact__info-icon"><FiMail /></div>
              <div>
                <h4 className="contact__info-title">Email</h4>
                <p className="contact__info-value">{personalInfo.email}</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon"><FiPhone /></div>
              <div>
                <h4 className="contact__info-title">電話</h4>
                <p className="contact__info-value">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon"><FiMapPin /></div>
              <div>
                <h4 className="contact__info-title">地點</h4>
                <p className="contact__info-value">{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact__cta-text">
              <p>也可以直接透過社群媒體找到我，期待能與你交流！</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__field-label">姓名</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="你的名字"
                  required
                  className="contact__input"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__field-label">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="contact__input"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__field-label">主題</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="想討論什麼？"
                required
                className="contact__input"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__field-label">訊息內容</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="請在這裡寫下你的訊息..."
                required
                rows={5}
                className="contact__input contact__textarea"
              />
            </div>

            <button type="submit" className="contact__submit" disabled={sending}>
              {sending ? (
                <span className="contact__submit-loading">發送中...</span>
              ) : (
                <>
                  <FiSend />
                  <span>發送訊息</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
