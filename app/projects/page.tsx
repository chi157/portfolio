export default function Projects() {
  return (
    <section className="resume-section section-gradient-1" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">研究專案</h2>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5 card-item">
              <h3 className="mb-2">基於YOLO 行人行為分析系統</h3>
              <p className="mb-2"><strong>研究人數：</strong>2人 · <strong>使用技術：</strong>Python、YOLO v8</p>
              <p>
                本研究結合 YOLO v8 和 MediaPipe Pose 技術，研發了一套創新的行人行為識別系統，能夠提升自動駕駛車輛的盲點偵測能力。系統在夜間、有遮蔽物、左右轉彎時補足盲點警告能力，並透過時間序列追蹤矯正誤報，提升道路安全。
              </p>
            </div>
            <div className="mb-5 card-item">
              <h3 className="mb-2">圖書館管理系統</h3>
              <p className="mb-2"><strong>開發人數：</strong>1人 · <strong>使用技術：</strong>Java、Spring Boot、Hibernate、MySQL、Thymeleaf</p>
              <p>
                本專案採用物件化的圖書館管理系統，達成報表查詢管理功能，解決手工紀錄和查找資料會失誤或損毀的問題。活用報表視覺化能暫查核心指標，解決管理者必須依賴經驗或直覺的問題，最終提升管理效率並減少人為錯誤。
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className="gallery-vertical-single mt-0">
              <img src="/assets/img/photo4.jpg" alt="生活照4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

