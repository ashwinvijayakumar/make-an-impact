const events = [
  { year: '2006 - Entreprenuer @ Afflatus Techtronics', text: 'Founded a startup | Cash-flow positive | Unable to scale - folded it!' },
  { year: '2012 - Engineering Lead @ Delphi Automotive Electronics & Safety', text: "Led a global software team for world's first Radar-based Blindspot Indicator System (Early ADAS)." },
  { year: '2014 - Intraprenuer @ Qualcomm', text: "Catalyzed a new robotics business unit at Qualcomm | Innovated the use of Snapdragon mobile chipsets in Robotics." },
  { year: '2017 - Developer Evangelist @ Intel Movidius', text: "Founding member of Intel Movidius Neural Compute Stick (NCS) | Built & scaled developer.movidius.com." },
  { year: '2019 - Product Manager @ Intel IoTG/VMC', text: "Lead the development & scale of 3 generations of Intel Movidius discrete NPU PCIe cards." },
  { year: '2022 - Product Manager @ Intel CCG/NUC-G', text: "Incubated NUCaaS inside Intel CCG, deployed in 13 locations across the Americas & EMEA | Bumped up NUC operating margin to 33%." },
  { year: '2023 - Product Manager @ Intel CCG/NUC-G', text: "$30M opportunity recorded on Salesforce | Only $1M realized before NUC-G spin-off to Asus." },
  { year: '2024 - Product Manager @ Intel NEX', text: "Transitioned AWS, Azure and RedHat engagements from NUCaaS to Intel Tiber Infrastructure Manager." },
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
