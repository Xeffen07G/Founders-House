const fs = require('fs');

const head = `<!DOCTYPE html>
<html lang="en" class="h-full w-full victor_mono_6da19fdd-module__3-zVMW__variable imbue_3fe2e7f7-module__DkNdMq__variable playfair_display_48acfffe-module__lCIWgW__variable">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Founders' House — 3-Day Residential Startup Hackathon, Kolkata</title>
  <meta name="description" content="3 days. 10 teams. one launchpad. Top 10 teams live on-site, build startups, and pitch to investors. 18-20 December 2026, Kolkata."/>
  <link rel="stylesheet" href="hhgoa.css"/>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
      background-color: #0b6839;
    }
    
    /* Ensure the 1440px canvas scales smoothly to any viewport without overflow or cutoffs */
    #page-scaler {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    /* FAQ accordion expanded animation */
    button[aria-expanded="true"] + p {
      height: auto !important;
      opacity: 1 !important;
      transform: none !important;
      pointer-events: auto !important;
    }

    /* Marquee animation for partners */
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-partners-marquee {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }
    .animate-partners-marquee:hover {
      animation-play-state: paused;
    }
  </style>
</head>`;

let body = fs.readFileSync('body_no_video.html', 'utf8');

// Replace <section class="relative w-full overflow-hidden bg-brand-primary" with id="page-scaler"
body = body.replace('<section class="relative w-full overflow-hidden bg-brand-primary"', '<section id="page-scaler" class="relative w-full overflow-hidden bg-brand-primary"');

// Ensure the main element has an id="main-canvas"
body = body.replace('<main style="position:absolute;left:0;top:0;overflow:visible;width:1440px;', '<main id="main-canvas" style="position:absolute;left:0;top:0;overflow:visible;width:1440px;');

// Client script for dynamic scaling, FAQ toggles, and smooth UX
const script = `
<script>
  function updateScale() {
    const canvas = document.getElementById('main-canvas');
    const container = document.getElementById('page-scaler');
    if (!canvas || !container) return;

    const baseWidth = 1440;
    const baseHeight = 15594; // Total canvas height without video
    const windowWidth = window.innerWidth;
    const scale = windowWidth / baseWidth;

    canvas.style.transform = 'scale(' + scale + ')';
    canvas.style.transformOrigin = 'top left';
    
    // Set container height proportionally so page scrolling is 100% accurate without cutoffs or dead blank space
    container.style.height = (baseHeight * scale) + 'px';
    container.style.minHeight = (baseHeight * scale) + 'px';
  }

  window.addEventListener('resize', updateScale);
  window.addEventListener('DOMContentLoaded', () => {
    updateScale();

    // FAQ toggles
    const faqButtons = document.querySelectorAll('button[aria-controls]');
    faqButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        const icon = btn.querySelector('span');
        if (icon) icon.textContent = expanded ? '+' : '−';
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) {
          if (!expanded) {
            panel.style.height = 'auto';
            panel.style.opacity = '1';
            panel.style.transform = 'none';
            panel.style.pointerEvents = 'auto';
          } else {
            panel.style.height = '0px';
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(-4px)';
            panel.style.pointerEvents = 'none';
          }
        }
      });
    });
  });
</script>
`;

const finalHtml = head + '\n' + body.replace('</body>', script + '\n</body>');
fs.writeFileSync('index.html', finalHtml);
console.log('Successfully written index.html with auto-scaling and without video!');
