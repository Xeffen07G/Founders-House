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
      overflow-x: hidden;
      background-color: #0b6839;
    }
    button[aria-expanded="true"] + p {
      height: auto !important;
      opacity: 1 !important;
      transform: none !important;
      pointer-events: auto !important;
    }
  </style>
</head>`;

const body = fs.readFileSync('body_customized.html', 'utf8');

const script = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
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

    const muteBtn = document.querySelector('button[aria-label="Mute video"]');
    const video = document.querySelector('video');
    if (muteBtn && video) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
      });
    }
  });
</script>
`;

const finalHtml = head + '\n' + body.replace('</body>', script + '\n</body>');
fs.writeFileSync('index.html', finalHtml);
console.log('Successfully generated index.html!');
