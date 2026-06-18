/* =============================================
   CYBERFLIPPER — dashboard.js
   FLLC Developer Hardware Lab
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const loadText = document.querySelector('.loading-text');
  if (loadText) {
    const lines = [
      'CYBERFLIPPER FLLC DEV LAB',
      'Free hardware notes: online',
      'Flipper / Proxmark / Hak5 lanes: indexed',
      'Badgelife build logs: staged',
      'Authorized-use guardrails: active',
      'Lab dashboard ready'
    ];
    let i = 0;
    const typeNext = () => {
      if (i < lines.length) {
        loadText.textContent = lines[i];
        i += 1;
        setTimeout(typeNext, 260);
      }
    };
    typeNext();
  }

  setTimeout(() => {
    const ls = document.getElementById('loadingScreen');
    if (ls) ls.classList.add('hidden');
  }, 2100);

  setTimeout(() => {
    const ls = document.getElementById('loadingScreen');
    if (ls && !ls.classList.contains('hidden')) ls.classList.add('hidden');
  }, 5000);
});

(function uptimeClock() {
  const el = document.getElementById('uptime-clock');
  if (!el) return;
  const start = Date.now();
  setInterval(() => {
    const s = Math.floor((Date.now() - start) / 1000);
    const h = String(Math.floor(s / 3600)).padStart(2, '0');
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    el.textContent = `${h}:${m}:${ss}`;
  }, 1000);
})();

(function labSessionLabel() {
  const el = document.getElementById('geo-location');
  if (!el) return;
  el.textContent = 'LOCAL LAB';
})();

function animateCounter(el, target, duration = 1600) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.counter');
if (counters.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.val || el.textContent.replace(/\D/g, ''), 10) || 0;
        animateCounter(el, target);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(c => obs.observe(c));
}

document.querySelectorAll('.stat-item .value[data-val]').forEach(el => {
  const target = parseInt(el.dataset.val, 10) || 0;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounter(el, target);
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(el);
});

(function signalWave() {
  const canvas = document.getElementById('signalWave');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const resize = () => {
    canvas.width = canvas.offsetWidth || 300;
    canvas.height = 60;
  };
  resize();
  let t = 0;

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = 'rgba(6,6,8,0.25)';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(0,255,204,0.08)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,255,204,0.85)';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = 'rgba(0,255,204,0.5)';
    ctx.shadowBlur = 6;
    for (let x = 0; x <= w; x += 1) {
      const saw = ((x * 0.02 + t) % 1) * 2 - 1;
      const sin1 = Math.sin((x * 0.05) + t * 2.5) * 10;
      const sin2 = Math.sin((x * 0.12) + t * 1.1) * 4;
      const noise = Math.sin(x * 0.8 + t * 8) * 1.5;
      const y = h / 2 + sin1 + sin2 + saw * 3 + noise;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,0,110,0.3)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += 1) {
      const y = h / 2 + Math.sin((x * 0.08) + t * 3.2 + 2) * 6 + Math.cos((x * 0.03) + t) * 4;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    t += 0.03;
    requestAnimationFrame(draw);
  }

  draw();
  window.addEventListener('resize', resize);
})();

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.cyber-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    link.classList.toggle('active', href === '#' + current);
  });
}, { passive: true });
