// =============================================
// 個人履歷資料 - 張謦麒 Chang, Ching-Chi
// =============================================

export const personalInfo = {
  name: "張謦麒",
  nameEn: "Ching-Chi Chang",
  title: "資訊管理研究生 & 軟體開發者",
  subtitle: "專注於機器學習、自然語言處理與全端開發",
  email: "hello@example.com",
  phone: "+886 912-345-678",
  location: "桃園市, 台灣",
  avatar: "/avatar.jpg",
  resumeUrl: "/resume.jpg",
  social: {
    github: "https://github.com/chi157",
    linkedin: "https://www.linkedin.com/in/cynthia-69bb2b288/",
  },
};

export const aboutData = {
  description: [
    "我是張謦麒，目前就讀國立中央大學資訊管理研究所碩一，研究方向聚焦於自然語言處理（NLP）與大型語言模型（LLM），隸屬於 Advanced Data Mining & Learning Laboratory（ADML），由陳以錚教授指導。",
    "大學畢業於國立雲林科技大學資訊管理系，以全系排名第 1（1/61, 1.64%）、歷年平均成績 91.41 分的優異表現逕行錄取碩士班。在學期間取得多張國際證照，並於國際期刊發表研究論文。",
    "除了研究，我也具備全端開發實務經驗，曾於希文資訊擔任軟體工程師實習生。我相信技術不只是工具，更是解決真實世界問題的橋樑。",
  ],
  highlights: [
    { label: "全系排名", value: "1", unit: "/61" },
    { label: "國際證照", value: "4", unit: "張" },
    { label: "GPA 均分", value: "91.41", unit: "分" },
    { label: "TOEIC", value: "715", unit: "分" },
  ],
};

export const skillsData = [
  {
    category: "後端開發",
    icon: "backend",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 65 },
      { name: "Hibernate / JPA", level: 70 },
    ],
  },
  {
    category: "前端 & 網頁",
    icon: "frontend",
    skills: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "Thymeleaf", level: 70 },
      { name: "React", level: 60 },
    ],
  },
  {
    category: "AI / 機器學習",
    icon: "database",
    skills: [
      { name: "YOLO v8", level: 80 },
      { name: "MediaPipe Pose", level: 70 },
      { name: "Machine Learning", level: 70 },
      { name: "NLP / LLM", level: 65 },
    ],
  },
  {
    category: "資料庫 & 工具",
    icon: "tools",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Git", level: 75 },
      { name: "Microsoft Azure", level: 65 },
      { name: "Docker", level: 55 },
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    role: "碩士研究生（逕行錄取）",
    company: "國立中央大學 資訊管理研究所",
    period: "2025/09 - 2027/07（預計）",
    description: [
      "ADML 實驗室，研究方向：Machine Learning，指導教授：陳以錚",
      "碩論方向聚焦於自然語言處理與大型語言模型，應用於政府公文自動分類與智慧問答系統",
      "目標提升文件分類效率並支援政府資訊的自然語言查詢",
    ],
  },
  {
    id: 2,
    role: "學士（全系排名 1/61，GPA 91.41）",
    company: "國立雲林科技大學 資訊管理系",
    period: "2023/09 - 2025/06",
    description: [
      "歷年排名 1/61（1.64%），歷年平均成績 91.41 分",
      "專題：AIoT 速安行人智慧心流體驗教具（Python、YOLO v8）",
      "重點課程成績：資料結構（100）、物件導向程式語言（96）、資料庫管理系統（89）",
    ],
  },
  {
    id: 3,
    role: "軟體工程師 實習生",
    company: "希文資訊有限公司",
    period: "2022/02 - 2022/07",
    description: [
      "協助教務系統及購物網站的前後端開發",
      "負責前後端程式設計與資料庫 CRUD 操作",
      "使用技術：PHP、網頁程式語言、MySQL",
    ],
  },
  {
    id: 4,
    role: "國際期刊第一作者",
    company: "Journal of Big Data Application and Management（JBDAM）",
    period: "2024/09 接受刊登",
    description: [
      "論文主題：基於 YOLO 行人行為分析修正自動駕駛盲點偵測系統",
      "結合 YOLO v8 與 MediaPipe Pose 技術，精準判斷行人過馬路意圖與位置",
      "論文編號：JBDAM202409-3，研究人數 2 人（本人為第一作者）",
    ],
  },
  {
    id: 5,
    role: "社團幹部 & 輔導課程講師",
    company: "國立雲林科技大學 學生組織",
    period: "2019 - 2025",
    description: [
      "資訊管理科學會 會長、學生議會 副議長（兩學期）",
      "資訊應用服務社 美宣組組長、圖書志工社 總務組副組長",
      "擔任電腦軟體設計丙級輔導課程主要講師（三學期）及會計事務丙級輔導課程講師",
    ],
  },
];

export const certificationsData = [
  {
    id: 1,
    name: "Oracle Certified Associate, Java SE 8 Programmer (1z0-808)",
    issuer: "Oracle",
    date: "2021/08",
    type: "國際證照",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2021/10",
    type: "國際證照",
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2022/07",
    type: "國際證照",
  },
  {
    id: 4,
    name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "2022/07",
    type: "國際證照",
  },
  {
    id: 5,
    name: "電腦軟體應用 乙級",
    issuer: "勞動部",
    date: "2021/08",
    type: "國內證照",
  },
  {
    id: 6,
    name: "電腦軟體設計 丙級",
    issuer: "勞動部",
    date: "2019/09",
    type: "國內證照",
  },
  {
    id: 7,
    name: "第50、51屆 商務軟體設計 北區 佳作",
    issuer: "勞動部",
    date: "2021 & 2022",
    type: "國內競賽",
  },
  {
    id: 8,
    name: "TOEIC 715 分",
    issuer: "ETS",
    date: "2024/09",
    type: "國際檢定",
  },
];

export const projectsData = [
  {
    id: 1,
    slug: "autonomous-driving-blind-spot",
    title: "自動駕駛盲點偵測系統",
    subtitle: "基於 YOLO 行人行為分析修正自動駕駛盲點",
    description:
      "結合 YOLO v8 和 MediaPipe Pose 技術，研發一套創新的自動駕駛盲點偵測系統，精準判斷行人過馬路的意圖與位置，即時通知車輛安全行駛，提升交通效率與行車安全。已發表於國際期刊 JBDAM。",
    fullDescription: [
      "本研究針對現有自動駕駛系統在行人偵測方面的盲點問題，提出一套結合電腦視覺與行為分析的創新解決方案。傳統系統僅能偵測行人位置，卻無法判斷行人是否正打算穿越馬路，導致不必要的急煞或潛在危險。",
      "我們透過 YOLO v8 進行即時行人偵測，再結合 MediaPipe Pose 進行骨架姿態估算，分析行人的身體朝向、步態特徵與視線方向，建立行人穿越意圖預測模型。系統能在行人進入危險區域前 2-3 秒提前預警，給予自動駕駛系統足夠的反應時間。",
      "本研究成果以第一作者身份發表於國際期刊 Journal of Big Data Application and Management（JBDAM），論文編號 JBDAM202409-3，於 2024 年 9 月正式接受刊登。",
    ],
    features: [
      "即時行人位置偵測（YOLO v8）",
      "骨架姿態估算與分析（MediaPipe Pose）",
      "行人穿越意圖預測（提前 2-3 秒預警）",
      "危險區域自動劃定與監控",
      "即時視覺化偵測結果輸出",
    ],
    techStack: [
      { category: "電腦視覺", items: ["YOLO v8", "MediaPipe Pose", "OpenCV"] },
      { category: "程式語言", items: ["Python"] },
      { category: "深度學習", items: ["PyTorch", "TensorFlow"] },
    ],
    results: [
      { label: "論文狀態", value: "已發表" },
      { label: "期刊名稱", value: "JBDAM" },
      { label: "論文編號", value: "JBDAM202409-3" },
      { label: "作者排序", value: "第一作者" },
    ],
    tags: ["Python", "YOLO v8", "MediaPipe Pose", "Computer Vision"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    period: "2024",
    type: "學術研究",
  },
  {
    id: 2,
    slug: "aiot-pedestrian-safety",
    title: "AIoT 速安行人智慧心流體驗教具",
    subtitle: "結合 AIoT 技術的互動式交通安全教育教具",
    description:
      "大學專題作品，運用 AIoT 技術結合 Python 與 YOLO v8，打造智慧行人安全體驗教具，探索人工智慧在交通安全教育領域的應用可能性。",
    fullDescription: [
      "本專題旨在透過互動式體驗教具，提升民眾（尤其是兒童與學生）對於行人交通安全的認知與意識。傳統交通安全教育多以靜態圖文或演講方式進行，缺乏互動性，難以留下深刻印象。",
      "我們運用 AIoT（人工智慧物聯網）技術，結合 YOLO v8 影像辨識與硬體感應器，打造一套沉浸式體驗裝置。使用者站在模擬的行人道前，系統會即時偵測使用者的位置與姿態，並模擬車輛從不同方向靠近的情境，引導使用者體驗判斷安全過馬路時機。",
      "本作品榮獲大學專題競賽肯定，並作為系上教學展示教具持續使用。",
    ],
    features: [
      "即時行人位置偵測與追蹤",
      "模擬車輛靠近情境互動體驗",
      "多感官回饋（視覺、聽覺警示）",
      "IoT 感應器整合（距離感測、LED 指示燈）",
      "兒童友好的使用者介面設計",
    ],
    techStack: [
      { category: "電腦視覺", items: ["YOLO v8", "OpenCV"] },
      { category: "程式語言", items: ["Python"] },
      { category: "硬體 / IoT", items: ["Raspberry Pi", "距離感測器", "LED 模組"] },
    ],
    results: [
      { label: "專題類型", value: "大學畢業專題" },
      { label: "完成時間", value: "2024/06" },
      { label: "應用領域", value: "交通安全教育" },
    ],
    tags: ["Python", "YOLO v8", "AIoT", "Raspberry Pi"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    period: "2023–2024",
    type: "專題研究",
  },
  {
    id: 3,
    slug: "library-management-system",
    title: "圖書館管理系統",
    subtitle: "數位化圖書館完整管理解決方案",
    description:
      "獨立開發的數位化圖書館管理系統，透過電子化紀錄借還書、活動與通知管理等功能，解決傳統圖書館管理低效且易出錯的痛點，提升整體營運效率與讀者體驗。",
    fullDescription: [
      "本系統為解決圖書志工社傳統紙本管理的痛點而開發。原有系統依賴紙本紀錄，不僅查詢效率低落，更常因人為疏失導致借還書紀錄錯誤，嚴重影響社務運作。",
      "系統採用 Spring Boot 作為後端框架，Hibernate/JPA 處理資料庫 ORM 映射，MySQL 儲存資料，前端使用 Thymeleaf 模板引擎配合原生 HTML/CSS/JavaScript。完整實現 CRUD 操作、使用者權限管理（管理員/普通讀者）、借還書流程、逾期提醒與活動公告等功能。",
      "系統上線後，圖書管理效率顯著提升，借還書處理時間從平均 5 分鐘縮短至不到 1 分鐘，並消除了人工登記的錯誤率。",
    ],
    features: [
      "完整 CRUD 書籍資料管理",
      "借還書流程自動化與紀錄查詢",
      "使用者分級權限控管（管理員 / 讀者）",
      "逾期書籍自動標記與提醒通知",
      "活動公告與館務通知系統",
      "借閱紀錄統計報表",
    ],
    techStack: [
      { category: "後端框架", items: ["Java", "Spring Boot", "Hibernate / JPA"] },
      { category: "資料庫", items: ["MySQL"] },
      { category: "前端", items: ["Thymeleaf", "HTML / CSS", "JavaScript"] },
    ],
    results: [
      { label: "借還書處理時間", value: "↓ 80%" },
      { label: "人工錯誤率", value: "↓ 100%" },
      { label: "開發週期", value: "3 個月" },
      { label: "開發人數", value: "獨立開發" },
    ],
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    period: "2023",
    type: "個人專案",
  },
  {
    id: 4,
    slug: "government-document-qa",
    title: "政府公文智慧問答系統",
    subtitle: "NLP × LLM 驅動的政府文件自動分類與問答",
    description:
      "碩士論文研究方向，聚焦於 NLP 與大型語言模型應用，開發政府公文自動分類與智慧問答系統，目標提升文件分類效率並支援政府資訊的自然語言查詢。",
    fullDescription: [
      "本研究為碩士論文方向，在國立中央大學 ADML 實驗室（Advanced Data Mining & Learning Laboratory）進行，由陳以錚教授指導。研究核心問題是：如何讓民眾能以自然語言方式查詢政府公文，降低政府資訊的取得門檻。",
      "系統分為兩大模組：其一為公文自動分類器，透過Fine-tuned BERT/RoBERTa 模型對政府公文進行多標籤分類，準確率目標達 90% 以上；其二為智慧問答引擎，結合 RAG（Retrieval-Augmented Generation）技術，讓使用者用口語化問句即可查詢政府公文資料庫。",
      "研究目前進行中，預計 2027 年完成並發表成果，預期能顯著提升政府資訊透明度與公民服務效率。",
    ],
    features: [
      "政府公文多標籤自動分類（BERT / RoBERTa）",
      "RAG 架構智慧問答引擎",
      "繁體中文 NLP 處理管線",
      "使用者自然語言查詢介面",
      "文件向量化索引與高效檢索",
    ],
    techStack: [
      { category: "NLP / AI", items: ["BERT", "RoBERTa", "LLM", "RAG"] },
      { category: "程式語言", items: ["Python"] },
      { category: "框架 / 工具", items: ["HuggingFace Transformers", "LangChain", "Faiss"] },
    ],
    results: [
      { label: "研究狀態", value: "進行中" },
      { label: "研究機構", value: "國立中央大學 ADML" },
      { label: "指導教授", value: "陳以錚 教授" },
      { label: "預計完成", value: "2027/07" },
    ],
    tags: ["NLP", "LLM", "BERT", "RAG", "Python"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    period: "2025–",
    type: "碩士論文",
  },
];


export const contactData = {
  title: "與我聯繫",
  description: "歡迎學術交流、技術討論或合作提案，隨時與我聯絡！",
};
