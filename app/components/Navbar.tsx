'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {

  const handleLinkClick = () => {
    // 取得導覽列摺疊元素
    const navbarCollapse = document.getElementById('navbarResponsive');
    // 如果導覽列是打開的 (有 show class)，則關閉它
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // 使用 Bootstrap 的 collapse 實例來關閉 (如果有引入 bootstrap js)
      // 或者簡單地模擬點擊 toggler 按鈕 (如果有的話)
      const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
      if (toggler && window.getComputedStyle(toggler).display !== 'none') {
        toggler.click();
      } else {
        // Fallback: 直接移除 class
        navbarCollapse.classList.remove('show');
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-nav fixed-top" id="sideNav">
      <Link className="navbar-brand" href="/" onClick={handleLinkClick}>
        <span className="d-block d-lg-none">
          <div className="d-flex align-items-center">
            <img className="img-fluid img-profile rounded-circle me-2" src="/assets/img/profile.jpg" alt="張謦麒" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
            張謦麒 Chang, Ching-Chi
          </div>
        </span>
        <span className="d-none d-lg-block">
          <div className="profile-img-container">
            <img className="img-fluid img-profile" src="/assets/img/profile.jpg" alt="張謦麒" />
          </div>
        </span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" href="/" onClick={handleLinkClick}>關於我</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/experience" onClick={handleLinkClick}>工作經驗</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/education" onClick={handleLinkClick}>學歷</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/skills" onClick={handleLinkClick}>技能</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/projects" onClick={handleLinkClick}>研究專案</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/certifications" onClick={handleLinkClick}>專業證照</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/competitions" onClick={handleLinkClick}>競賽獲獎</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/tests" onClick={handleLinkClick}>檢定證明</Link></li>
        </ul>
      </div>
    </nav>
  );
}

