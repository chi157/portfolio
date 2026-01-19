import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "張謦麒 Chang, Ching-Chi - Resume",
  description: "國立中央大學資訊管理研究所碩士生，專注於機器學習與資料探勘領域",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        <link href="/css/styles.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer></script>
        <script src="/js/scripts.js" defer></script>
      </head>
      <body id="page-top">
        <Navbar />
        <div className="container-fluid p-0">
          {children}
        </div>
      </body>
    </html>
  );
}
