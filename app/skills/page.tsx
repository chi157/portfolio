export default function Skills() {
  return (
    <section className="resume-section section-gradient-2" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">技能</h2>
        
        {/* 程式語言 & 開發技術 */}
        <h3 className="mb-4 text-primary"><i className="fas fa-code me-2"></i>程式語言 & 開發技術</h3>
        <div className="row g-4 mb-5">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-danger bg-opacity-10">
                <i className="fab fa-java fa-3x text-danger mb-2"></i>
                <h6 className="mb-0">Java</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-primary bg-opacity-10">
                <i className="fab fa-python fa-3x text-primary mb-2"></i>
                <h6 className="mb-0">Python</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-info bg-opacity-10">
                <i className="fab fa-php fa-3x text-info mb-2"></i>
                <h6 className="mb-0">PHP</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-warning bg-opacity-10">
                <i className="fab fa-html5 fa-3x text-warning mb-2"></i>
                <h6 className="mb-0">HTML5</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-primary bg-opacity-10">
                <i className="fab fa-css3-alt fa-3x text-primary mb-2"></i>
                <h6 className="mb-0">CSS3</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-warning bg-opacity-10">
                <i className="fab fa-js-square fa-3x text-warning mb-2"></i>
                <h6 className="mb-0">JavaScript</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-info bg-opacity-10">
                <i className="fab fa-react fa-3x text-info mb-2"></i>
                <h6 className="mb-0">React</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-success bg-opacity-10">
                <i className="fab fa-node-js fa-3x text-success mb-2"></i>
                <h6 className="mb-0">Node.js</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-primary bg-opacity-10">
                <i className="fab fa-docker fa-3x text-primary mb-2"></i>
                <h6 className="mb-0">Docker</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card h-100 border-0 shadow-sm hover-card text-center">
              <div className="card-body p-3 bg-danger bg-opacity-10">
                <i className="fab fa-git-alt fa-3x text-danger mb-2"></i>
                <h6 className="mb-0">Git</h6>
              </div>
            </div>
          </div>
        </div>

        {/* 核心技能 */}
        <h3 className="mb-4 text-primary"><i className="fas fa-star me-2"></i>核心技能</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4 border-start border-5 border-danger bg-white rounded-end">
                <div className="d-flex align-items-center mb-3">
                  <div className="badge bg-danger text-white p-2 me-2"><i className="fab fa-java"></i></div>
                  <h5 className="card-title fw-bold mb-0">Java 全端開發</h5>
                </div>
                <p className="card-text text-muted mb-0">Spring Boot · Hibernate · MySQL · Thymeleaf</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4 border-start border-5 border-primary bg-white rounded-end">
                <div className="d-flex align-items-center mb-3">
                  <div className="badge bg-primary text-white p-2 me-2"><i className="fab fa-python"></i></div>
                  <h5 className="card-title fw-bold mb-0">AI/ML 開發</h5>
                </div>
                <p className="card-text text-muted mb-0">Python · YOLO v8 · Machine Learning · 深度學習</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4 border-start border-5 border-info bg-white rounded-end">
                <div className="d-flex align-items-center mb-3">
                  <div className="badge bg-info text-white p-2 me-2"><i className="fas fa-database"></i></div>
                  <h5 className="card-title fw-bold mb-0">網頁資料庫系統</h5>
                </div>
                <p className="card-text text-muted mb-0">PHP · MySQL · 資料庫設計與管理</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4 border-start border-5 border-success bg-white rounded-end">
                <div className="d-flex align-items-center mb-3">
                  <div className="badge bg-success text-white p-2 me-2"><i className="fas fa-project-diagram"></i></div>
                  <h5 className="card-title fw-bold mb-0">RESTful API 設計</h5>
                </div>
                <p className="card-text text-muted mb-0">API 開發 · CRUD 操作 · 後端架構設計</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4 border-start border-5 border-warning bg-white rounded-end">
                <div className="d-flex align-items-center mb-3">
                  <div className="badge bg-warning text-dark p-2 me-2"><i className="fas fa-users"></i></div>
                  <h5 className="card-title fw-bold mb-0">敏捷開發</h5>
                </div>
                <p className="card-text text-muted mb-0">Agile · Scrum · 團隊協作</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4 border-start border-5 border-secondary bg-white rounded-end">
                <div className="d-flex align-items-center mb-3">
                  <div className="badge bg-secondary text-white p-2 me-2"><i className="fab fa-git-alt"></i></div>
                  <h5 className="card-title fw-bold mb-0">版本控制</h5>
                </div>
                <p className="card-text text-muted mb-0">Git · GitHub · 版本管理與協作開發</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
