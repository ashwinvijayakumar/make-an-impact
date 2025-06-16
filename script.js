const events = [
  { year: '2006 - Founder @ Afflatus Techtronics', text: 'Founded a startup | Employed two engineers | Cash-flow positive | Unable to scale - folded it!' },
  { year: '2012 - Engineering Lead @ Delphi Automotive Electronics & Safety', text: "Led a global software team to develop world's first Radar-based Blindspot Indicator System (Early ADAS)." },
  { year: '2014 - Intrapreneur @ Qualcomm', text: "Catalyzed a new robotics business unit at Qualcomm | Innovated the use of Snapdragon mobile chipsets in Robotics." },
  { year: '2017 - Developer Evangelist @ Intel AI Platforms Group', text: "1 of 15 member team that built Intel Neural Compute Stick (NCS), world's first AI accelerator on a USB stick | Built & scaled developer ecosystem for NCS!" },
  { year: '2019 - Product Manager @ Intel IoT Group', text: "Lead the development & scale of 3 generations of Intel Movidius discrete NPU PCIe cards." },
  { year: '2022 - Product Manager @ Intel Client Computing Group', text: "Incubated NUCaaS, a software & services offering | Deployed in 13 locations across the Americas & EMEA | Bumped up NUC operating margin to 33%." },
  { year: '2023 - Product Manager @ Intel Client Computing Group', text: "Recorded $30M opportunity for NUCaaS | Only $1M realized before NUC-G spin-off to Asus." },
  { year: '2024 - Product Manager @ Intel Network & Edge Group', text: "Transitioned AWS, Azure and RedHat engagements from NUCaaS to Intel Tiber Edge Infrastructure Manager." },
  { year: '20xx [Future Goal] - General Manager @ TDB Enterprise', text: "Gain GM experience by running a PnL within an enterprise company." }
];

const timeline = document.querySelector('.timeline');
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');

// Helper to render timeline
function renderTimeline(filteredEvents) {
  timeline.innerHTML = '';

  if (filteredEvents.length === 0) {
    timeline.innerHTML = `
      <div class="no-results">
        I am working on it! In the meantime, <a href="https://elgoog.im/dinosaur-game/" target="_blank">play this game</a>.
      </div>`;
    return;
  }

  filteredEvents.forEach(e => {
    const el = document.createElement('div');
    el.className = 'event';
    el.innerHTML = `<div class="year">${e.year}</div><div>${e.text}</div>`;
    timeline.appendChild(el);
  });
}

// Extract keyword suggestions from events
function extractKeywords(events) {
  const words = new Set();
  events.forEach(e => {
    e.text.split(/[\s|,.-]+/).forEach(word => {
      const clean = word.trim().toLowerCase();
      if (clean.length > 3) words.add(clean);
    });
  });
  return Array.from(words);
}

const keywords = extractKeywords(events);
renderTimeline(events);

// Search handler
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();

  const filtered = events.filter(event =>
    event.text.toLowerCase().includes(query) ||
    event.year.toLowerCase().includes(query)
  );

  renderTimeline(filtered);

  // Show suggestions
  if (query.length > 0) {
    const matched = keywords.filter(k => k.includes(query));
    suggestionsList.innerHTML = matched.map(m => `<li>${m}</li>`).join('');
    suggestionsList.style.display = 'block';
  } else {
    suggestionsList.style.display = 'none';
  }
});

// Fill input when clicking a suggestion
suggestionsList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    searchInput.value = e.target.textContent;
    searchInput.dispatchEvent(new Event('input'));
    suggestionsList.style.display = 'none';
  }
});
