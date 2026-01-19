export default function Experience() {
  return (
    <section className="resume-section section-gradient-2" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">工作經驗</h2>
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5 card-item">
              <div className="flex-grow-1">
                <h3 className="mb-0">軟體工程師實習生</h3>
                <div className="subheading mb-3">希艾資訊有限公司</div>
                <p>在為期一年的實習期間，擔任軟體工程師實習生，主要負責動勞教系統開發與維護工作。使用 PHP 與 MySQL 開發網頁資料庫系統，參與前後端整合開發。實際應用敏捷開發方法，與團隊協作完成多項專案功能開發。</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2022/02 - 2022/07</span></div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div className="gallery-vertical-single mt-0">
              <img src="/assets/img/photo2.jpg" alt="生活照2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
