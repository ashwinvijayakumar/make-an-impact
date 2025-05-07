const events = [
  { year: '2006', text: 'Founded a rapid prototyping consulting firm' },
  { year: '2007', text: 'Two engineers on payroll, achieved cash-flow positive' },
  { year: '2008', text: 'Unable to scale, folded company' },
  { year: '2012', text: "Led a global team for world's first Radar-based Blindspot Indicator (BLIS)" },
  { year: '2014', text: "Catalyzed a new robotics business unit at Qualcomm" },
  { year: '2017', text: "Founding member of Intel Movidius Neural Compute Stick (NCS), built developer.movidius.com" },
  { year: '2019', text: "Product managed 3 generations of Intel Movidius discrete NPU PCIe cards" },
  { year: '2022', text: "Incubated NUCaaS inside Intel CCG, deployed in 13 real-world cases, OM improved to 33%" },
  { year: '2023', text: "$30M opportunity recorded on Salesforce; only $1M realized before NUC-G spin-off to Asus" },
  { year: '2024', text: "Transitioned cloud engagements to Intel Tiber Infrastructure Manager" },
  { year: '20xx', text: "Gain GM experience by running a PnL within an enterprise company" },
  { year: '20xx', text: "Back to startup grassroots! This time, plan for scale!" }
];

const timeline = document.querySelector('.timeline');
events.forEach(e => {
  const el = document.createElement('div');
  el.className = 'event';
  el.innerHTML = `<div class="year">${e.year}</div><div>${e.text}</div>`;
  timeline.appendChild(el);
});
