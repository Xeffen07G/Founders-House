/**
 * Founders' House — Main Application Logic
 * Integrates:
 * 1. SVG Asset mounting (Howrah bridge, Ambassador taxi, tram, ferry, waves, kulhad chai, victoria memorial)
 * 2. Howrah Station Clock Countdown to 18 Dec 2026
 * 3. Tram scroll interaction across the 3 Days route (Station 1, 2, 3)
 * 4. Stock Exchange live ticker numbers animation
 * 5. Market stall awnings & Durga Puja pandal marquee bulbs
 * 6. Steaming Kulhad Chai FAQ accordion
 * 7. Mobile-first responsive handling & prefers-reduced-motion checks
 */

import { siteContent } from './siteContent.js';
import { kolkataSVGs } from './kolkataSVGs.js';

document.addEventListener('DOMContentLoaded', () => {
  mountAssets();
  initHowrahClock();
  initTramJourney();
  initStockTicker();
  initPerksStalls();
  initJoshAwards();
  initGhoomi();
  initFAQ();
  initNavScroll();
  initAudioToggle();
});

/**
 * 1. Mount Inline SVGs
 */
function mountAssets() {
  // Fairy lights banner
  const fairyContainer = document.getElementById('fairyLightsContainer');
  if (fairyContainer) fairyContainer.innerHTML = kolkataSVGs.fairyLights;

  // Taxi icons on apply buttons
  const brandTaxi = document.getElementById('brandTaxiIcon');
  if (brandTaxi) brandTaxi.innerHTML = kolkataSVGs.ambassadorTaxi(36, 20);

  const navTaxi = document.getElementById('navTaxiIcon');
  if (navTaxi) navTaxi.innerHTML = kolkataSVGs.ambassadorTaxi(22, 14);

  const heroTaxi = document.getElementById('heroTaxiIcon');
  if (heroTaxi) heroTaxi.innerHTML = kolkataSVGs.ambassadorTaxi(28, 18);

  const footerTaxi = document.getElementById('footerTaxiIcon');
  if (footerTaxi) footerTaxi.innerHTML = kolkataSVGs.ambassadorTaxi(28, 18);

  // Hero interactive illustrated stage
  const skylineLayer = document.getElementById('skylineLayer');
  if (skylineLayer) {
    skylineLayer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-end; width: 100%; height: 100%;">
        <div style="width: 280px; height: 110px; opacity: 0.85;">${kolkataSVGs.victoriaMemorial}</div>
        <div style="width: 140px; height: 90px; opacity: 0.9;">${kolkataSVGs.rickshaw(110, 75)}</div>
      </div>
    `;
  }

  const bridgeLayer = document.getElementById('bridgeLayer');
  if (bridgeLayer) bridgeLayer.innerHTML = kolkataSVGs.howrahBridge;

  const taxiTrack = document.getElementById('taxiDriveTrack');
  if (taxiTrack) taxiTrack.innerHTML = kolkataSVGs.ambassadorTaxi(75, 38);

  const riverWaves = document.getElementById('riverWavesLayer');
  if (riverWaves) {
    riverWaves.innerHTML = `
      <div class="wave-svg">${kolkataSVGs.riverWaves}</div>
      <div class="wave-svg">${kolkataSVGs.riverWaves}</div>
    `;
  }

  const ferry = document.getElementById('riverFerry');
  if (ferry) ferry.innerHTML = kolkataSVGs.ferry(75, 32);

  // Skyline section dividers (Rule #9)
  for (let i = 1; i <= 6; i++) {
    const divider = document.getElementById(`divider${i}`);
    if (divider) divider.innerHTML = kolkataSVGs.skylineDivider(`theme-${i}`);
  }

  // Kulhad chai in FAQ
  const kulhadBox = document.getElementById('kulhadChaiGraphic');
  if (kulhadBox) kulhadBox.innerHTML = kolkataSVGs.kulhadChai;
}

/**
 * 2. Howrah Station Clock Countdown to 18 Dec 2026
 */
function initHowrahClock() {
  const targetDate = new Date('2026-12-18T09:00:00+05:30').getTime();

  const daysBox = document.getElementById('clockDays');
  const hoursBox = document.getElementById('clockHours');
  const minsBox = document.getElementById('clockMins');
  const secsBox = document.getElementById('clockSecs');

  function update() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (daysBox) daysBox.textContent = '00';
      if (hoursBox) hoursBox.textContent = '00';
      if (minsBox) minsBox.textContent = '00';
      if (secsBox) secsBox.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysBox) daysBox.textContent = String(d).padStart(2, '0');
    if (hoursBox) hoursBox.textContent = String(h).padStart(2, '0');
    if (minsBox) minsBox.textContent = String(m).padStart(2, '0');
    if (secsBox) secsBox.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/**
 * 3. "The 3 Days" Section: Tram travels along track as user scrolls or clicks
 */
function initTramJourney() {
  const tramVehicle = document.getElementById('tramVehicle');
  if (tramVehicle) {
    tramVehicle.innerHTML = kolkataSVGs.tram(85, 52);
  }

  const stationCards = document.querySelectorAll('.station-card');
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 900;

  // Station positions on track (percentages)
  const stationPercentages = [4, 46, 88];

  function setTramPosition(index) {
    stationCards.forEach((c, idx) => {
      c.classList.toggle('active', idx === index);
    });

    if (tramVehicle && !isMobile && !isReducedMotion) {
      tramVehicle.style.left = `${stationPercentages[index]}%`;
    }
  }

  stationCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => setTramPosition(index));
    card.addEventListener('click', () => setTramPosition(index));
  });

  // Scroll listener for tram progress
  const threeDaysSection = document.getElementById('three-days');
  if (threeDaysSection && !isReducedMotion && !isMobile) {
    window.addEventListener('scroll', () => {
      const rect = threeDaysSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top <= viewportHeight * 0.6 && rect.bottom >= viewportHeight * 0.3) {
        const total = rect.height - viewportHeight * 0.3;
        const progress = Math.min(Math.max((viewportHeight * 0.6 - rect.top) / total, 0), 1);

        let targetIndex = 0;
        if (progress > 0.66) targetIndex = 2;
        else if (progress > 0.33) targetIndex = 1;

        setTramPosition(targetIndex);
      }
    }, { passive: true });
  }
}

/**
 * 4. Founder Points Leaderboard: Stock-Exchange Ticker
 */
function initStockTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  const items = siteContent.leaderboard.marqueeTicker;
  let html = '';

  // Double items for infinite marquee
  const allItems = [...items, ...items, ...items];
  allItems.forEach(item => {
    const isUp = item.change.startsWith('+');
    html += `
      <div class="ticker-item">
        <span class="ticker-sym">${item.sym}</span>
        <span class="ticker-price">${item.price}</span>
        <span class="ticker-change ${isUp ? 'up' : 'down'}">${isUp ? '▲' : '▼'} ${item.change}</span>
      </div>
    `;
  });

  track.innerHTML = html;

  // Numbers ticker micro-increment simulation (stock exchange live feel)
  setInterval(() => {
    const scores = ['teamScore1', 'teamScore2', 'teamScore4', 'teamScore5'];
    const randomId = scores[Math.floor(Math.random() * scores.length)];
    const el = document.getElementById(randomId);
    if (el) {
      const current = parseInt(el.textContent.replace(/,/g, ''), 10);
      const increment = Math.floor(Math.random() * 5) + 1;
      el.textContent = (current + increment).toLocaleString();
    }
  }, 3500);
}

/**
 * 5. Perks: Market-stall cards with striped awnings that lift on hover
 */
function initPerksStalls() {
  const container = document.getElementById('stallsGrid');
  if (!container) return;

  const stalls = siteContent.perks.items;
  let html = '';

  stalls.forEach(stall => {
    html += `
      <div class="market-stall-card">
        <!-- Striped Awning -->
        <div class="stall-awning ${stall.awningColor}"></div>

        <div class="stall-meta-bar">
          <span class="stall-no">${stall.stallNo}</span>
          <span class="stall-icon">${stall.icon}</span>
        </div>

        <h3 class="stall-title">${stall.title}</h3>
        <p class="stall-bengali">${stall.bengali}</p>
        <p class="stall-desc">${stall.desc}</p>
        <span class="stall-perk-badge">${stall.perk}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * 6. Josh Awards: Durga Puja pandal style with blinking marquee bulbs around cards & gold shimmer
 */
function initJoshAwards() {
  const container = document.getElementById('awardsGrid');
  if (!container) return;

  const awards = siteContent.joshAwards.awards;
  let html = '';

  awards.forEach((award, idx) => {
    // Generate bulb positions around the border
    let bulbsHtml = '';
    const bulbCount = 16;
    for (let b = 0; b < bulbCount; b++) {
      let top = '6px';
      let left = '6px';
      
      if (b < 4) {
        // Top edge
        top = '6px';
        left = `${(b / 3) * 88 + 6}%`;
      } else if (b < 8) {
        // Right edge
        left = 'calc(100% - 14px)';
        top = `${((b - 4) / 3) * 88 + 6}%`;
      } else if (b < 12) {
        // Bottom edge
        top = 'calc(100% - 14px)';
        left = `${((11 - b) / 3) * 88 + 6}%`;
      } else {
        // Left edge
        left = '6px';
        top = `${((15 - b) / 3) * 88 + 6}%`;
      }

      bulbsHtml += `<span class="pandal-bulb" style="top:${top}; left:${left}; animation-delay:${(b * 0.15).toFixed(2)}s;"></span>`;
    }

    html += `
      <div class="award-card shimmer-gold">
        <!-- Durga Puja Marquee Perimeter Bulbs -->
        <div class="marquee-bulbs-border">
          ${bulbsHtml}
        </div>

        <h3 class="award-trophy-name">${award.trophy}</h3>
        <p class="award-bengali">${award.bengali}</p>
        <div class="award-prize-pill">${award.prize}</div>
        <p class="award-desc">${award.desc}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * 7. Ghoomi Ghoomi (Getting Here) Cards
 */
function initGhoomi() {
  const container = document.getElementById('ghoomiGrid');
  if (!container) return;

  const routes = siteContent.ghoomi.routes;
  let html = '';

  routes.forEach(route => {
    html += `
      <div class="ghoomi-card">
        <div class="ghoomi-time">ETA: ${route.time}</div>
        <h3 class="ghoomi-title">${route.from}</h3>
        <div class="ghoomi-mode">${route.mode}</div>
        <p class="ghoomi-desc">${route.desc}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

/**
 * 8. FAQ Accordion
 */
function initFAQ() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  const faqs = siteContent.faq.items;
  let html = '';

  faqs.forEach((item, index) => {
    const isFirst = index === 0;
    html += `
      <div class="faq-item ${isFirst ? 'open' : ''}">
        <button class="faq-question" type="button" aria-expanded="${isFirst}">
          <span>${item.q}</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${item.a}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Toggle handlers
  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/**
 * 9. Navbar scroll styling
 */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * 10. Ambient Audio Soundwave Toggle (Inspired by convergence1.tech)
 */
function initAudioToggle() {
  const audioBtn = document.getElementById('audioToggleBtn');
  const statusText = document.getElementById('audioStatusText');
  if (!audioBtn) return;

  let isPlaying = true;
  audioBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    audioBtn.classList.toggle('muted', !isPlaying);
    if (statusText) {
      statusText.textContent = isPlaying ? 'KOLKATA AMBIENCE: ON' : 'KOLKATA AMBIENCE: MUTED';
    }
  });
}

