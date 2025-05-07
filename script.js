const events = [
  { year: '2006 - Entreprenuer @ Afflatus Techtronics', text: 'Founded a startup | Employed two engineers | Cash-flow positive | Unable to scale - folded it!' },
  { year: '2012 - Engineering Lead @ Delphi Automotive Electronics & Safety', text: "Led a global software team to develop world's first Radar-based Blindspot Indicator System (Early ADAS)." },
  { year: '2014 - Intraprenuer @ Qualcomm', text: "Catalyzed a new robotics business unit at Qualcomm | Innovated the use of Snapdragon mobile chipsets in Robotics." },
  { year: '2017 - Developer Evangelist @ Intel AI Platforms Group', text: "1 of 15 member team that built Intel Neural Compute Stick (NCS), world's first AI accelerator on a USB stick | Built & scaled developer ecosystem for NCS!" },
  { year: '2019 - Product Manager @ Intel IoT Group', text: "Lead the development & scale of 3 generations of Intel Movidius discrete NPU PCIe cards." },
  { year: '2022 - Product Manager @ Intel Client Computing Group', text: "Incubated NUCaaS, a software & services offering | Deployed in 13 locations across the Americas & EMEA | Bumped up NUC operating margin to 33%." },
  { year: '2023 - Product Manager @ Intel Client Computing Group', text: "Recorded $30M opportunity for NUCaaS | Only $1M realized before NUC-G spin-off to Asus." },
  { year: '2024 - Product Manager @ Intel Network & Edge Group', text: "Transitioned AWS, Azure and RedHat engagements from NUCaaS to Intel Tiber Edge Infrastructure Manager." },
  { year: '20xx - General Manager @ TDB Enterprise', text: "Gain GM experience by running a PnL within an enterprise company." },
  { year: '20xx - Entreprenuer @ Stealth Startup', text: "Back to startup grassroots! This time, plan for scale!" }
];

const timeline = document.querySelector('.timeline');
events.forEach(e => {
  const el = document.createElement('div');
  el.className = 'event';
  el.innerHTML = `<div class="year">${e.year}</div><div>${e.text}</div>`;
  timeline.appendChild(el);
});
