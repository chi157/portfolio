export default function Home() {
  return (
    <section className="resume-section section-gradient-1" id="about">
          <div className="resume-section-content">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h1 className="mb-0">
                  張謦麒
                  <span className="text-primary">Chang, Ching-Chi</span>
                </h1>
                <div className="subheading mb-5">
                  台灣 · 0966-308-225 ·
                  <a href="mailto:aacindy1026@gmail.com">aacindy1026@gmail.com</a>
                </div>
                <p className="lead mb-5">
                  國立中央大學資訊管理研究所碩士生，專注於機器學習與資料探勘領域。擅長 Java、Spring Boot 與 Python 開發，持有多項國際技術認證，致力於將 AI/ML 技術應用於實際問題解決。TOEIC 715分，具備良好的英文溝通能力。
                </p>
                <div className="social-icons">
                  <a className="social-icon" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-icon" href="https://github.com/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  <a className="social-icon" href="mailto:aacindy1026@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="gallery-vertical-single">
                  <img src="/assets/img/photo1.jpg" alt="生活照1" />
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
