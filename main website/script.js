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
    about_content: "Stone Metrics is a comprehensive platform offering tools and knowledge to enhance financial literacy and investment skills.",
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
    about_content: "Stone Metrics เป็นแพลตฟอร์มที่ครอบคลุมเครื่องมือและความรู้เพื่อเพิ่มพูนทักษะด้านการเงินและการลงทุน",
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
