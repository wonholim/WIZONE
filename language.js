(() => {
  'use strict';
  const translations = {
  "설계 경험을 쌓으며,": "Building design expertise.",
  "함께 성장해왔습니다.": "Growing together over time.",
  "경험으로 설계하고,": "Designing with experience.",
  "신뢰로 함께합니다.": "Working together in trust.",
  "돌아가기": "Back",
  "인사말": "Message",
  "인사말 | WIZONETECH": "Message | WIZONETECH",
  "위즈원텍의 인사말.": "A message from WIZONETECH.",
  "위즈원텍을 찾아주셔서 감사합니다.": "Thank you for visiting WIZONETECH.",
  "위즈원텍은 2018년 1월, 다양한 반도체 칩 개발 경험을 가진 엔지니어들이 모여 ASIC Design Service 사업을 시작했습니다.": "WIZONETECH launched its ASIC Design Service business in January 2018, bringing together engineers with diverse chip development experience.",
  "축적된 SoC 개발 경험을 바탕으로 고객의 설계 과제를 함께 고민하고 해결합니다. RTL 설계와 블록 통합부터 합성, 타이밍 분석, 전력 요구사항을 반영한 설계까지 각 단계에 필요한 전문성을 제공합니다.": "Drawing on our SoC development experience, we work with customers to address their design challenges. Our expertise spans RTL design and block integration, synthesis, timing analysis, and power-aware design.",
  "고객과의 약속을 지키고, 동료의 전문성을 존중하며 신뢰를 쌓아가겠습니다. 고객에게는 믿고 맡길 수 있는 설계 파트너로, 임직원에게는 함께 성장할 수 있는 회사로 나아가겠습니다.": "We build trust by keeping our commitments to customers and respecting the expertise of our colleagues. We strive to be a dependable design partner for customers and a company where our people can grow together.",
  "감사합니다.": "Thank you.",
  "맨 위로": "Back to top",
  "본문 바로가기": "Skip to content",
  "메뉴": "Menu",
  "회사소개": "About Us",
  "채용": "Careers",
  "RTL 설계 및 통합": "RTL Design & Integration",
  "Hard IP향 DA Vector Simulation": "DA vector simulation for Hard IP",
  "합성 및 타이밍 분석": "Synthesis & Timing Analysis",
  "SDC 제작 및 Clean-up": "SDC creation and clean-up",
  "P&R 이후 Timing Violation 수정": "Post-P&R timing violation fixes",
  "저전력 설계": "Low-power Design",
  "UPF 작성 및 전력 구조 정의": "UPF creation and power architecture definition",
  "전력 요구사항에 따른 Power-Aware Synthesis": "Power-aware synthesis based on power requirements",
  "전력 구조를 반영한 게이트 수준 설계": "Gate-level design reflecting the power architecture",
  "사람을 먼저 생각하고,": "Putting people first.",
  "함께 성장하는 위즈원텍": "Growing together at WIZONETECH.",
  "구성원에 대한 존중과 동료 간의 신뢰를 바탕으로,": "Built on respect for our people and trust in one another,",
  "각자의 전문성이 빛나는 일터를 만들어갑니다.": "we create a workplace where every engineer can thrive.",
  "함께 이루는 성장이 임직원과 고객의 만족으로 이어지도록 노력합니다.": "We strive to turn shared growth into lasting satisfaction for our people and customers.",
  "채용 바로가기": "Explore Careers",
  "오시는 길": "Location",
  "위즈원텍 디자인 하우스": "WIZONETECH Design House",
  "최고의 반도체 SoC 개발 Engineer가 모인": "A team of expert semiconductor SoC engineers at",
  "위즈원텍": "WIZONETECH",
  "2018년 1월 다양한 반도체 칩 개발 경험과 전문성을 기반으로": "Drawing on extensive chip development experience and expertise,",
  "ASIC Design Service 사업을 시작하였습니다.": "we launched our ASIC Design Service business in January 2018.",
  "주요 연혁": "Company History",
  "서비스": "Services",
  "ASIC 설계 서비스": "ASIC Design Services",
  "이미지 준비 중": "Image coming soon",
  "주식회사 위즈원텍": "WIZONETECH Co., Ltd.",
  "경기 용인시 기흥구 서천로201번길 11, 10층": "10F, 11 Seocheon-ro 201beon-gil, Giheung-gu, Yongin-si, Gyeonggi-do, Korea",
  "SoC 설계 전문가와": "Work with SoC design experts",
  "프로젝트를 구체화하세요.": "to shape your next project.",
  "대표자": "Representative",
  "한상원": "Han Sang-won",
  "주소": "Address",
  "연락처": "Contact",
  "이메일": "Email",
  "(주) 위즈원텍 법인 설립": "WIZONETECH Co., Ltd. established",
  "10nm 과제 참여": "Participation in a 10nm project",
  "7nm 과제 참여": "Participation in a 7nm project",
  "5nm 과제 참여": "Participation in a 5nm project",
  "4nm 과제 참여": "Participation in a 4nm project",
  "위즈원텍 홈": "WIZONETECH home",
  "주 메뉴": "Main navigation",
  "언어 선택": "Language selection",
  "위즈원텍 브랜드 영상": "WIZONETECH brand film",
  "주요 연혁 보기": "View company history",
  "RTL & Integration 프로젝트 문의": "RTL & Integration project inquiry",
  "Synthesis & STA 프로젝트 문의": "Synthesis & STA project inquiry",
  "Power-aware Design 프로젝트 문의": "Power-aware Design project inquiry",
  "위즈원텍 오시는 길 — 경기 용인시 기흥구 서천로201번길 11": "WIZONETECH location — 11 Seocheon-ro 201beon-gil, Yongin-si",
  "2018년부터 2026년까지의 연혁": "Company history from 2018 to 2026",
  "주요 연혁 | WIZONETECH": "Company History | WIZONETECH",
  "위즈원텍의 주요 연혁. 2018년 법인 설립부터 2026년까지.": "WIZONETECH company history, from its establishment in 2018 through 2026.",
  "RTL 설계와 블록 통합, Synthesis 및 STA, UPF 기반 합성. 위즈원텍의 반도체 설계 전문성을 만나보세요.": "Explore WIZONETECH semiconductor design expertise: RTL design, block integration, synthesis, STA, and UPF-based synthesis.",
  "WIZONETECH — 반도체 설계, 정밀함으로 연결하다": "WIZONETECH — Precision in Semiconductor Design",
  "RTL부터 합성 및 타이밍 분석까지, 연결된 반도체 설계 전문성.": "Connected semiconductor design expertise, from RTL through synthesis and timing analysis."
};
  const records=[];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
    const node=walker.currentNode;
    if(node.parentElement.closest('script,style,.language-switch'))continue;
    const original=node.nodeValue, key=original.trim();
    if(translations[key])records.push({node,original,english:original.replace(key,translations[key])});
  }
  const attributes=[];
  document.querySelectorAll('[aria-label],[title],[alt],meta[content]').forEach(el=>{
    ['aria-label','title','alt','content'].forEach(name=>{
      const original=el.getAttribute(name);
      if(original&&translations[original])attributes.push({el,name,original,english:translations[original]});
    });
  });
  const originalTitle=document.title;
  const setLanguage=language=>{
    const en=language==='en';
    document.documentElement.lang=en?'en':'ko';
    records.forEach(r=>r.node.nodeValue=en?r.english:r.original);
    attributes.forEach(r=>r.el.setAttribute(r.name,en?r.english:r.original));
    document.title=en?(translations[originalTitle]||originalTitle):originalTitle;
    document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));
    const map=document.querySelector('.location-map iframe');
    if(map){const url=new URL(map.src);url.searchParams.set('hl',language);if(url.href!==map.src)map.src=url.href;}
    document.querySelectorAll('a[href^="mailto:"]').forEach(a=>{
      if(a.href.includes('subject='))a.href='mailto:wizonetech@wizonetech.co.kr?subject='+encodeURIComponent(en?'Career Inquiry':'채용 문의');
    });
    try{localStorage.setItem('wizone-language',language);}catch{}
    window.ScrollTrigger?.refresh();
  };
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  let initial='en';try{const saved=localStorage.getItem('wizone-language');if(saved==='ko'||saved==='en')initial=saved;}catch{}
  setLanguage(initial);
  window.addEventListener('storage',e=>{if(e.key==='wizone-language')setLanguage(e.newValue==='ko'?'ko':'en');});
})();
