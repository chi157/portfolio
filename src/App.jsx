import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import CertificationsPage from "./pages/CertificationsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ContactPage from "./pages/ContactPage";

// 切換頁面時自動回到頂部
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* 背景光暈 */}
      <div className="bg-glow bg-glow--purple" />
      <div className="bg-glow bg-glow--cyan" />
      <div className="bg-glow bg-glow--pink" />

      <ScrollToTop />

      {/* 非首頁才顯示 Navbar */}
      {!isHome && <Navbar />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
