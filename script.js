// script.js

const translations = {
  en: {
    nav_about: "About",
    nav_tools: "Tools",
    nav_resources: "Resources",
    nav_contact: "Contact",
    hero_title: "Welcome to Stone Metrics",
    hero_subtitle: "Your Universal Finance Tool for Knowledge and Growth",
    about_title: "About Us",
    about_content: "Stone Metrics: Universal Finance Tool. Stone Metrics is a website designed to be a comprehensive resource and tool for finance and investment. Our goal is to support learning and effective financial management, making it suitable for anyone interested in investing and wanting to enhance their understanding in various areas. Key Features and Content: Financial and Investment Tools: A collection of easy-to-use tools covering everything from personal finance management to fundamental analysis, technical analysis, and quantitative analysis. Calculation functions designed to help users assess risk, plan their investment portfolio, and track market trends effectively. Knowledge Articles: A source of articles providing insights into various topics, ranging from basic financial management concepts to in-depth analysis. Suitable for beginners wanting to learn about finance and investment, as well as experienced individuals looking to expand their knowledge. Learning Videos: Videos that teach how to use tools effectively and provide case studies from the real world. Content suitable for all levels, from newcomers to seasoned investors. Personal Finance: Guidance and advice on managing personal finances, such as budgeting, saving, debt reduction, and future planning. Aimed at helping users achieve long-term financial stability and reach their financial goals. In-depth Investment Analysis (Fundamental, Technical, and Quantitative): Fundamental Analysis: Evaluating the underlying factors of companies and the economy for long-term investment decisions. Technical Analysis: Understanding and analyzing technical charts to identify investment opportunities. Quantitative Analysis: Using data and mathematical models to support systematic decision-making. Stone Metrics is designed to be a guide and helper for those interested in finance and investment. We focus on simplicity and effectiveness, offering diverse and comprehensive content to meet the needs of users at all levels.",
    tools_title: "Our Tools",
    tools_1: "Personal Finance Management",
    tools_2: "Fundamental, Technical, and Quantitative Analysis",
    tools_3: "Market Trend Tracking",
    tools_4: "Portfolio Risk Assessment",
    resources_title: "Resources",
    resources_content: "Access articles, tutorials, and videos designed for everyone from beginners to professionals in finance and investment.",
    contact_title: "Contact Us",
  },
  th: {
    nav_about: "เกี่ยวกับ",
    nav_tools: "เครื่องมือ",
    nav_resources: "ทรัพยากร",
    nav_contact: "ติดต่อ",
    hero_title: "ยินดีต้อนรับสู่ Stone Metrics",
    hero_subtitle: "เครื่องมือการเงินที่ครบวงจรสำหรับความรู้และการเติบโต",
    about_title: "เกี่ยวกับเรา",
    about_content: "Stone Metrics: Universal Finance Tool. Stone Metrics เป็นเว็บไซต์ที่พัฒนาขึ้นเพื่อเป็นแหล่งข้อมูลและเครื่องมือที่ครบวงจรสำหรับการเงินและการลงทุน โดยมีเป้าหมายเพื่อสนับสนุนการเรียนรู้และการจัดการทางการเงินอย่างมีประสิทธิภาพ เหมาะสำหรับผู้ที่สนใจในเรื่องการลงทุนและต้องการยกระดับความรู้ความเข้าใจในทุกมิติ คุณสมบัติและเนื้อหาหลัก เครื่องมือการเงินและการลงทุน รวมเครื่องมือที่ใช้งานง่าย ครอบคลุมตั้งแต่การบริหารการเงินส่วนบุคคล ไปจนถึงการวิเคราะห์การลงทุนเชิงพื้นฐาน (Fundamental Analysis) การวิเคราะห์ทางเทคนิค (Technical Analysis) และการวิเคราะห์เชิงปริมาณ (Quantitative Analysis) ฟังก์ชันคำนวณที่ออกแบบมาเพื่อช่วยให้ผู้ใช้งานประเมินความเสี่ยง วางแผนพอร์ตการลงทุน และติดตามแนวโน้มของตลาดได้อย่างมีประสิทธิภาพ บทความและเนื้อหาความรู้ แหล่งรวมบทความที่ให้ความรู้ในหลากหลายด้าน ตั้งแต่แนวคิดการจัดการการเงินพื้นฐานไปจนถึงการวิเคราะห์เชิงลึก เหมาะสำหรับผู้ที่ต้องการเริ่มต้นเรียนรู้เกี่ยวกับการเงินการลงทุน หรือผู้ที่มีประสบการณ์และต้องการเสริมสร้างความรู้เพิ่มเติม คลิปวิดีโอเพื่อการเรียนรู้ วิดีโอที่สอนเทคนิคการใช้งานเครื่องมือ พร้อมกรณีศึกษาในโลกจริง เนื้อหาที่ครอบคลุมทุกระดับ ตั้งแต่มือใหม่จนถึงนักลงทุนมืออาชีพ การเงินส่วนบุคคล (Personal Finance) เนื้อหาและคำแนะนำเกี่ยวกับการจัดการการเงินส่วนบุคคล เช่น การวางแผนงบประมาณ การออม การลดหนี้ และการวางแผนเพื่ออนาคต ช่วยสร้างความมั่นคงทางการเงินและสนับสนุนให้บรรลุเป้าหมายทางการเงินในระยะยาว การลงทุนเชิงลึก (Fundamental, Technical, and Quantitative) Fundamental Analysis: การวิเคราะห์ปัจจัยพื้นฐานของบริษัทและเศรษฐกิจเพื่อการลงทุนระยะยาว Technical Analysis: การอ่านและวิเคราะห์กราฟทางเทคนิคสำหรับการจับจังหวะการลงทุน Quantitative Analysis: การใช้ข้อมูลและโมเดลทางคณิตศาสตร์ในการสนับสนุนการตัดสินใจอย่างเป็นระบบ Stone Metrics ได้รับการออกแบบมาเพื่อเป็นคู่มือและผู้ช่วยสำหรับผู้สนใจในโลกการเงินและการลงทุน โดยมุ่งเน้นความเรียบง่ายและประสิทธิภาพ พร้อมทั้งเนื้อหาที่หลากหลายและครอบคลุม เพื่อตอบโจทย์ผู้ใช้งานในทุกระดับอย่างแท้จริง",
    tools_title: "เครื่องมือของเรา",
    tools_1: "การจัดการการเงินส่วนบุคคล",
    tools_2: "การวิเคราะห์พื้นฐาน เทคนิค และเชิงปริมาณ",
    tools_3: "การติดตามแนวโน้มตลาด",
    tools_4: "การประเมินความเสี่ยงของพอร์ต",
    resources_title: "ทรัพยากร",
    resources_content: "เข้าถึงบทความ บทเรียน และวิดีโอที่ออกแบบสำหรับทั้งผู้เริ่มต้นและมืออาชีพในด้านการเงินและการลงทุน",
    contact_title: "ติดต่อเรา",
  },
};

// Change language dynamically
document.querySelectorAll(".language-switch button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    document.querySelectorAll("[data-lang-key]").forEach((el) => {
      const key = el.getAttribute("data-lang-key");
      el.textContent = translations[lang][key];
    });
  });
});
