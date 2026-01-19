export default function Skills() {
  return (
    <section className="resume-section section-gradient-2" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">技能</h2>
        <div className="subheading mb-3">程式語言 & 開發技術</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><i className="fab fa-java"></i></li>
          <li className="list-inline-item"><i className="fab fa-python"></i></li>
          <li className="list-inline-item"><i className="fab fa-php"></i></li>
          <li className="list-inline-item"><i className="fab fa-html5"></i></li>
          <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
          <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
          <li className="list-inline-item"><i className="fab fa-react"></i></li>
          <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
          <li className="list-inline-item"><i className="fab fa-docker"></i></li>
          <li className="list-inline-item"><i className="fab fa-git-alt"></i></li>
        </ul>
        <div className="subheading mb-3">核心技能</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Java · Spring Boot · Hibernate · MySQL
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Python · YOLO v8 · 機器學習 (Machine Learning)
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            PHP · 網頁資料庫系統 · MySQL
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            RESTful API 設計 · CRUD 操作 · Thymeleaf
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            敏捷開發 (Agile) · 版本控制 (Git)
          </li>
        </ul>
      </div>
    </section>
  );
}
