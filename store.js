const info = {
  bannerimg: require("./src/assets/img/01.jpg"),
  skillsimg: require("./src/assets/img/bg01.png"),
  about:
    "我是黃亮庭，對於探索新知以及學習富有熱情，熱衷於解決程式問題並從中獲得成就感。由於喜歡將腦海中想法轉換為程式的過程以及結果直接呈現於眼前的感覺，因此立志成為一名前端工程師。",
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
        "RWD",
        "jQuery",
        "JavaScript ES6",
        "React.js",
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
        "操作日本樂天 ( 主要 )、Shopify、WordPress 後台系統<br>負責 6 間日本樂天商店後台維護<br>完成 15+ 個日本樂天活動廣告頁面切版製作<br>負責 2 間日本樂天首頁翻新/改修<br>負責 8+ 間日本樂天定期活動對應及 EDM 製作<br>網頁相關緊急對應處理",
    },
    {
      title: "兄弟繪數位設計工作室",
      time: "2021.07 - 2021.08",
      position: "網頁設計助理實習生",
      descript:
        "網頁 Layout 設計<br>實習期間完成 2 個一頁式網頁切版<br>使用 Bootstrap 進行前端切版<br>使用 jQuery、CSS Animation、SVG 網頁動畫渲染",
    },
    // {
    //   title: "予寧文理補習班",
    //   time: "2020.10 - 2022.06",
    //   descript: "檢查作業<br>管理秩序<br>數學輔導",
    // },
  ],
  portfolio: [
    {
      name: "ケルヒャー特集",
      time: "在職",
      img: require("./src/assets/img/bn1.jpg"),
      descript:
        "亮點在於表格的收合以及呈現方式，為了提高閱讀性，在滑動時需維持標題欄／商品圖欄不動，同時也透過按鈕收合使版面閱讀起來更為簡潔。",
      website: "https://www.rakuten.ne.jp/gold/ryouhinhyakka/kaercher/",
      tag: ["HTML", "SCSS", "JavaScript", "RWD", "Splide.js"],
    },
    {
      name: "カニ特集",
      time: "在職",
      img: require("./src/assets/img/bn3.jpg"),
      descript:
        "亮點在使用 JavaScript 抓取網頁滾動位置，在瀏覽網頁的同時增加使用者體驗。",
      website: "https://www.rakuten.ne.jp/gold/obamakaisanbutsu/lp/2023kani/",
      tag: ["HTML", "SCSS", "JavaScript", "RWD"],
    },
    {
      name: "新生活特集",
      time: "在職",
      img: require("./src/assets/img/bn2.jpg"),
      descript:
        "利用 jQuery 結合 CSS Animation 渲染，使網頁在滾動到該元件的同時會播放動畫。",
      website: "https://www.rakuten.ne.jp/gold/ryouhinhyakka/2023newlife/",
      tag: ["HTML", "SCSS", "jQuery", "RWD", "AOS.js"],
    },
    {
      name: "和平フレイズ特集",
      time: "在職",
      img: require("./src/assets/img/bn4.jpg"),
      descript:
        "使用 slick.js 套件結合 CSS 偽元素使商品名稱及按鈕能夠呈現在圖片上。",
      website: "https://www.rakuten.ne.jp/gold/ryouhinhyakka/lp/peace/",
      tag: ["HTML", "SCSS", "jQuery", "RWD", "slick.js"],
    },
    {
      name: "産地直送グルメ特集",
      time: "在職",
      img: require("./src/assets/img/bn5.jpg"),
      descript:
        "在文字描邊上的處理使用 span 以及 CSS 偽元素做細部的處理，和 text-shadow 不同的是在視覺上看起來會更為清晰，更能展現描繪邊框的感覺。",
      website: "https://www.rakuten.ne.jp/gold/ryouhinhyakka/sanchichokuso/",
      tag: ["HTML", "SCSS", "JavaScript", "RWD", "AOS.js"],
    },
    {
      name: "感謝祭廣告",
      time: "在職",
      img: require("./src/assets/img/bn6.jpg"),
      descript: "利用 CSS Animation 渲染按鈕動畫，使視覺看起來更加細緻。",
      website: "https://www.rakuten.ne.jp/gold/obamakaisanbutsu/eagles/",
      tag: ["HTML", "SCSS", "RWD", "AOS.js"],
    },
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
      tag: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "MongoDB"],
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
