export default function Education() {
  return (
    <section className="resume-section section-gradient-1" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">學歷</h2>
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5 card-item">
              <div className="d-flex align-items-center flex-grow-1">
                <img src="/assets/img/education/NCU_logo.png" alt="中央大學校徽" className="me-3" style={{width: '80px', height: '80px', objectFit: 'contain'}} />
                <div>
                  <h3 className="mb-0">國立中央大學</h3>
                  <div className="subheading mb-3">資訊管理研究所 碩士一年級</div>
                  <div>專業：Advanced Data Mining & Learning Laboratory (ADML)</div>
                  <div>研究方向：Machine Learning</div>
                  <p>預計畢業年份：2027/07</p>
                </div>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2025/09 - 現在</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between card-item">
              <div className="d-flex align-items-center flex-grow-1">
                <img src="/assets/img/education/NYUST_logo.png" alt="雲林科技大學校徽" className="me-3" style={{width: '80px', height: '80px', objectFit: 'contain'}} />
                <div>
                  <h3 className="mb-0">國立雲林科技大學</h3>
                  <div className="subheading mb-3">資訊管理系 學士</div>
                  <div>專題：AIoT班多人智慧洗車核心教學 (Python、YOLO v8)</div>
                  <p>歷年排名：1 / 49 (2%) · 歷年平均成績：91.41</p>
                </div>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2023/09 - 2025/06</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5 card-item">
              <div className="d-flex align-items-center flex-grow-1">
                <img src="/assets/img/education/UKN_logo.jpg" alt="康寧大學校徽" className="me-3" style={{width: '80px', height: '80px', objectFit: 'contain'}} />
                <div>
                  <h3 className="mb-0">康寧學校財團法人康寧大學</h3>
                  <div className="subheading mb-3">資訊管理科 副學士</div>
                  <div>專題：元慶蔘藥行後台管理系統暨官方網站</div>
                  <p>歷年排名：1 / 36 (3%) · 歷年平均成績：95.03</p>
                </div>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2018/09 - 2023/06</span></div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className="gallery-vertical-single mt-0">
              <img src="/assets/img/photo3.jpg" alt="生活照3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
