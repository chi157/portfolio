export default function Certifications() {
  return (
    <section className="resume-section section-gradient-2" id="certifications">
      <div className="resume-section-content">
        <h2 className="mb-5">專業證照</h2>
        
        <div className="row">
          <div className="col-12">
            
            {/* 國際證照區塊 */}
            <h3 className="mb-4 text-primary"><i className="fas fa-globe-americas me-2"></i>國際證照</h3>
            <div className="row g-4 mb-5">
              
              {/* Oracle */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 border-start border-5 border-warning bg-white rounded-end">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="badge bg-warning text-dark p-2"><i className="fab fa-java me-1"></i> Oracle</div>
                      <small className="text-muted">2021/08/06</small>
                    </div>
                    <h5 className="card-title fw-bold mb-1">Oracle Certified Associate</h5>
                    <p className="card-subtitle text-muted mb-0">Java SE 8 Programmer (1z0-808)</p>
                  </div>
                </div>
              </div>

              {/* Microsoft AI-900 */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 border-start border-5 border-info bg-white rounded-end">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="badge bg-info text-white p-2"><i className="fab fa-microsoft me-1"></i> Microsoft</div>
                      <small className="text-muted">2021/10/02</small>
                    </div>
                    <h5 className="card-title fw-bold mb-1">Azure AI Fundamentals</h5>
                    <p className="card-subtitle text-muted mb-0">AI-900</p>
                  </div>
                </div>
              </div>

              {/* Microsoft AZ-900 */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 border-start border-5 border-primary bg-white rounded-end">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="badge bg-primary p-2"><i className="fab fa-microsoft me-1"></i> Microsoft</div>
                      <small className="text-muted">2022/07/17</small>
                    </div>
                    <h5 className="card-title fw-bold mb-1">Azure Fundamentals</h5>
                    <p className="card-subtitle text-muted mb-0">AZ-900</p>
                  </div>
                </div>
              </div>

              {/* Microsoft DP-900 */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 border-start border-5 border-success bg-white rounded-end">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="badge bg-success p-2"><i className="fab fa-microsoft me-1"></i> Microsoft</div>
                      <small className="text-muted">2022/07/31</small>
                    </div>
                    <h5 className="card-title fw-bold mb-1">Azure Data Fundamentals</h5>
                    <p className="card-subtitle text-muted mb-0">DP-900</p>
                  </div>
                </div>
              </div>

            </div>

            {/* 國內證照區塊 */}
            <h3 className="mb-4 text-primary"><i className="fas fa-certificate me-2"></i>國內證照</h3>
            <div className="row g-4">
              
              {/* 電腦軟體應用 乙級 */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 border-start border-5 border-danger bg-white rounded-end">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="badge bg-danger p-2"><i className="fas fa-award me-1"></i> 乙級技術士</div>
                      <small className="text-muted">2021/08/20</small>
                    </div>
                    <h5 className="card-title fw-bold mb-1">電腦軟體應用</h5>
                    <p className="card-subtitle text-muted mb-0">發證單位：勞動部</p>
                  </div>
                </div>
              </div>

              {/* 電腦軟體設計 丙級 */}
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body p-4 border-start border-5 border-secondary bg-white rounded-end">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="badge bg-secondary p-2"><i className="fas fa-award me-1"></i> 丙級技術士</div>
                      <small className="text-muted">2019/09/11</small>
                    </div>
                    <h5 className="card-title fw-bold mb-1">電腦軟體設計</h5>
                    <p className="card-subtitle text-muted mb-0">發證單位：勞動部</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

