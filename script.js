/* ============================================
   FOUNDERS' HOUSE — JavaScript
   Countdown, scroll animations, FAQ accordion,
   tabs, sticky navbar, and back-to-top.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Sticky Navbar ----
  initNavbar();

  // ---- Mobile Menu ----
  initMobileMenu();

  // ---- Countdown Timer ----
  initCountdown();

  // ---- Scroll Reveal Animations ----
  initScrollReveal();

  // ---- Day Tabs ----
  initDayTabs();

  // ---- People Tabs ----
  initPeopleTabs();

  // ---- FAQ Accordion ----
  initFAQ();

  // ---- Back to Top ----
  initBackToTop();

  // ---- Smooth scroll for nav links ----
  initSmoothScroll();

  // ---- Contact Form ----
  initContactForm();
});


/* ===== Navbar ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


/* ===== Mobile Menu ===== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('mobileOverlay');
  if (!hamburger || !navLinks) return;

  const toggle = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  };

  const close = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', toggle);
  if (overlay) overlay.addEventListener('click', close);

  // Close menu on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', close);
  });
}


/* ===== Countdown Timer ===== */
function initCountdown() {
  // TODO: Update this date if the event date changes
  const eventDate = new Date('2026-12-18T09:00:00+05:30').getTime();

  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMins');
  const secsEl = document.getElementById('countSecs');

  if (!daysEl) return;

  function update() {
    const now = Date.now();
    const diff = eventDate - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}


/* ===== Scroll Reveal ===== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  revealElements.forEach(el => observer.observe(el));
}


/* ===== Day Tabs ===== */
function initDayTabs() {
  const tabs = document.querySelectorAll('.days__tab');
  const panels = document.querySelectorAll('.days__panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.day;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}


/* ===== People Tabs ===== */
function initPeopleTabs() {
  const tabs = document.querySelectorAll('.people__tab');
  const panels = document.querySelectorAll('.people__panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}


/* ===== FAQ Accordion ===== */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-item__answer').style.maxHeight = null;
      });

      // Open clicked one (if it wasn't already open)
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}


/* ===== Back to Top ===== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ===== Smooth Scroll ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}


/* ===== Contact Form ===== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const formSuccess = document.getElementById('formSuccess');
  const formError = document.getElementById('formError');
  const submitBtn = document.getElementById('contactSubmit');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time error clearance
  [nameInput, emailInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const err = document.getElementById(input.id.replace('contact', '').toLowerCase() + 'Error');
      if (err) err.classList.remove('visible');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    // Reset feedback
    if (formSuccess) formSuccess.style.display = 'none';
    if (formError) formError.style.display = 'none';

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      if (nameError) nameError.classList.add('visible');
      hasError = true;
    } else {
      nameInput.classList.remove('is-invalid');
      if (nameError) nameError.classList.remove('visible');
    }

    // Validate Email
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      if (emailError) emailError.classList.add('visible');
      hasError = true;
    } else {
      emailInput.classList.remove('is-invalid');
      if (emailError) emailError.classList.remove('visible');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.classList.add('is-invalid');
      if (messageError) messageError.classList.add('visible');
      hasError = true;
    } else {
      messageInput.classList.remove('is-invalid');
      if (messageError) messageError.classList.remove('visible');
    }

    if (hasError) return;

    // Simulate sending / success state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... ⏳';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Show success
      if (formSuccess) {
        formSuccess.style.display = 'flex';
      }
      form.reset();
    }, 700);
  });
}
