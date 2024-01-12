const info = {
  bannerimg: require("./src/assets/img/01.jpg"),
  skillsimg: require("./src/assets/img/bg01.png"),
  about:
    "我是黃亮庭，喜歡探索新知並且努力學習，擅長前端切版、靜態網頁、網頁動畫撰寫，能夠適應步調快速的工作環境，目前任職於日商博設技股份有限公司，擁有電商相關實作經驗及基礎，學習力強能夠快速理解專案所需並且實踐，善於溝通能夠快速融入團隊協作。",
  email: "joyce123415@gmail.com",
  links: {
    github: "https://github.com/joyce103",
    issuu: "https://issuu.com/joyce_huang/docs/__",
    resume:
      "https://www.cakeresume.com/s--Wf3bgXKBt7gIfmKLJ8QB2g--/joyce123415",
  },
  skills: [
    {
      title: "Technologies",
      descript: [
        "HTML",
        "CSS / SCSS",
        "JavaScript ES6",
        "jQuery",
        "RWD",
        "Vue.js",
      ],
    },
    {
      title: "Design",
      descript: ["Adobe illustrator", "Adobe Photoshop", "Adobe XD"],
    },
  ],
  education: [
    {
      title: "元智大學資訊傳播學系",
      time: "2018.09 - 2022.06",
      descript:
        "相關課程<br>網際網路程式設計、網頁遊戲、資料結構、網頁程式設計、人機互動......。",
    },
  ],
  experience: [
    {
      title: "日商博設技股份有限公司",
      time: "2022.09 - 現在",
      position: "網頁程式設計師",
      descript:
        "接觸日本樂天 ( 主要 )、Shopify、WordPress 後台系統<br>負責 6 間日本樂天商店後台維護<br>完成 15+ 個日本樂天活動廣告頁面切版製作<br>負責 2 間日本樂天首頁翻新/改修<br>負責 8+ 間日本樂天定期活動對應及製作電子報<br>網頁相關緊急對應處理",
    },
    {
      title: "兄弟繪數位設計工作室",
      time: "2021.07-2021.08",
      position: "網頁設計助理實習生",
      descript:
        "協助前端切版、Layout 設計<br>學習 CSS 關鍵禎以及 SVG 網頁動畫渲染<br>RWD 響應式網頁",
    },
    // {
    //   title: "予寧文理補習班",
    //   time: "2020.10 - 2022.06",
    //   descript: "檢查作業<br>管理秩序<br>數學輔導",
    // },
  ],
  portfolio: [
    {
      name: "2021空間設計大賽",
      time: "2021",
      img: require("./src/assets/img/02.png"),
      descript:
        "一頁式活動網頁，使用 svg 製作動畫以及利用視差捲動渲染出不同的視覺效果，增添了整體的豐富性，同時製作此網頁也讓我學到更多製作網頁動畫的技巧。",
      website: "https://joyce103.github.io/Space-design/",
      tag: ["HTML", "CSS", "jQuery", "RWD"],
    },
    {
      name: "碧潭我家",
      time: "2021",
      img: require("./src/assets/img/03.png"),
      descript:
        "電子錶板固定格式為1920x1080，不用顧慮RWD，因此製作起來相對簡單，但在製作CSS動畫時需要顧及到圖層以及整體編排上的和諧，因此需要事先計畫好動畫樣式。",
      website: "https://joyce103.github.io/Bitan/",
      tag: ["HTML", "CSS", "jQuery"],
    },
    {
      name: "桂田盤古",
      time: "2021",
      img: require("./src/assets/img/04.png"),
      descript:
        "一頁式網頁，利用 CSS 製作文字噴光效果，根據使用者滑動的速度描繪線段，讓頁面看起來生動而不呆版。",
      website: "https://joyce103.github.io/Greaten/",
      tag: ["HTML", "CSS", "jQuery", "RWD"],
    },
    {
      name: "YZUNOTE",
      time: "2020",
      img: require("./src/assets/img/06.png"),
      descript:
        "課堂學生交流筆記的網站，可以發布、收藏、搜尋...等，讓大家共同學習成長!<br>負責內容：內容規劃、前端切版、後端環境建置、登入登出、課表頁、搜尋頁",
      github: "https://github.com/joyce103/YZUNOTE",
      tag: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js"],
    },
    {
      name: "劇慌了嗎?",
      time: "2020",
      img: require("./src/assets/img/08.png"),
      descript:
        "依據觀眾選擇的類型推薦相關電視劇，透過此網站觀眾也可以發表自己對於此劇的感想，讓更多人知道!<br>負責內容：前導頁切版、搜尋功能、登入登出、下拉式選單、收藏功能",
      github: "https://github.com/joyce103/Drama_Website",
      tag: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      name: "加油吧!小木",
      time: "2020",
      img: require("./src/assets/img/07.png"),
      descript:
        "一款輕鬆休閒的網頁小遊戲，透過鍵盤上鍵進行跳躍獲得分數，小心!不要掉到水溝裡去了!<br>負責內容：遊戲構想、人物跑跳、遊戲機制、遊戲效果製作",
      website: "https://joyce103.github.io/Web_Game/",
      tag: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      name: "有 朋友",
      time: "2019",
      img: require("./src/assets/img/05.png"),
      descript:
        "推薦系上好友的網站，透過 RWD 讓網頁可以適應於各種行動裝置。<br>負責內容：所有程式內容",
      website: "https://joyce103.github.io/Friend_Website/",
      tag: ["HTML", "CSS", "RWD"],
    },
  ],
};
export default info;
