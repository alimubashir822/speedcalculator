/* =============================================
   SpeedCalculator.net — Shared Header & Footer
   v2.0 — 2026-07-16
   ============================================= */

/* ── Immediate theme application to prevent flash ── */
(function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    document.documentElement.classList.add('light-mode');
  }
})();

/* ── Nav CSS injected for pages without main.css ── */
const NAV_CSS = `
  nav.sc-nav{padding:18px 0;border-bottom:1px solid rgba(59,130,246,.12);position:sticky;top:0;background:rgba(5,8,15,.95);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);z-index:1000;}
  nav.sc-nav .container{max-width:1100px;margin:0 auto;padding:0 24px;}
  nav.sc-nav .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;}
  nav.sc-nav .logo{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:900;letter-spacing:.04em;text-decoration:none;color:#f0f4ff;white-space:nowrap;}
  nav.sc-nav .logo span{color:#60a5fa;}
  nav.sc-nav .nav-links{display:flex;gap:4px;list-style:none;margin:0;padding:0;}
  nav.sc-nav .nav-links a{font-size:13px;font-weight:500;color:#94a3b8;text-decoration:none;letter-spacing:.03em;padding:6px 12px;border-radius:8px;transition:all .2s;}
  nav.sc-nav .nav-links a:hover,nav.sc-nav .nav-links a.nav-active{color:#60a5fa;background:rgba(59,130,246,.08);}
  nav.sc-nav .nav-right{display:flex;align-items:center;gap:14px;}
  nav.sc-nav .nav-cta{background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;padding:8px 18px;border-radius:20px;font-size:12px;font-weight:700;text-decoration:none;letter-spacing:.06em;text-transform:uppercase;transition:all .2s;white-space:nowrap;}
  nav.sc-nav .nav-cta:hover{opacity:.9;transform:translateY(-1px);}
  .sc-ham{display:none;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;background:rgba(59,130,246,.08);border:1px solid rgba(59,130,246,.2);border-radius:8px;cursor:pointer;padding:0;flex-shrink:0;}
  .sc-ham span{display:block;width:16px;height:2px;background:#94a3b8;border-radius:2px;margin:0 auto;transition:all .25s;}
  @media(max-width:900px){
    nav.sc-nav .nav-links{display:none;}
    .sc-ham{display:flex;}
  }
  nav.sc-nav .nav-links.sc-open{
    display:flex;flex-direction:column;gap:2px;
    position:fixed;top:61px;left:0;right:0;
    background:rgba(5,8,15,.98);
    border-bottom:1px solid rgba(59,130,246,.12);
    padding:12px 24px 16px;z-index:999;
  }
  nav.sc-nav .nav-links.sc-open a{padding:10px 14px;border-radius:10px;font-size:14px;}

  /* ── Theme Toggle — Premium Pill Switch ── */
  .theme-toggle-wrap{display:flex;align-items:center;gap:7px;flex-shrink:0;}
  .theme-icon-label{display:flex;align-items:center;width:16px;height:16px;flex-shrink:0;transition:opacity .3s;}
  .theme-icon-label svg{width:14px;height:14px;}
  .theme-icon-label.icon-moon{color:#94a3b8;opacity:.7;}
  .theme-icon-label.icon-sun{color:#f59e0b;opacity:.5;}
  :root.light-mode .theme-icon-label.icon-moon{opacity:.4;}
  :root.light-mode .theme-icon-label.icon-sun{opacity:1;}

  .theme-toggle-btn{
    position:relative;
    width:52px;height:27px;
    background:linear-gradient(135deg,#1e3a5f,#0f1f3d);
    border:1.5px solid rgba(59,130,246,.25);
    border-radius:100px;
    cursor:pointer;
    padding:0;
    transition:background .4s,border-color .4s,box-shadow .4s;
    flex-shrink:0;
    box-shadow:0 0 0 0 rgba(59,130,246,0);
    outline:none;
  }
  .theme-toggle-btn:hover{
    border-color:rgba(59,130,246,.5);
    box-shadow:0 0 10px rgba(59,130,246,.18);
  }
  .theme-toggle-btn:focus-visible{outline:2px solid #3b82f6;outline-offset:2px;}

  /* the sliding knob */
  .tt-knob{
    position:absolute;
    top:3px;left:3px;
    width:19px;height:19px;
    border-radius:50%;
    background:linear-gradient(135deg,#60a5fa,#3b82f6);
    box-shadow:0 2px 8px rgba(59,130,246,.5),inset 0 1px 0 rgba(255,255,255,.25);
    transition:transform .35s cubic-bezier(.34,1.56,.64,1),background .4s,box-shadow .4s;
    display:flex;align-items:center;justify-content:center;
    pointer-events:none;
  }
  .tt-knob svg{width:11px;height:11px;color:#fff;opacity:.95;transition:opacity .25s;}
  .tt-knob .tt-sun{display:none;}
  .tt-knob .tt-moon{display:block;}

  /* stars sparkle inside the track (dark mode) */
  .tt-stars{
    position:absolute;inset:0;border-radius:100px;overflow:hidden;pointer-events:none;
    display:flex;align-items:center;justify-content:flex-end;padding-right:6px;gap:2px;
  }
  .tt-star{width:3px;height:3px;border-radius:50%;background:#fff;opacity:.6;animation:tt-twinkle 2s infinite;}
  .tt-star:nth-child(2){width:2px;height:2px;opacity:.4;animation-delay:.5s;}
  .tt-star:nth-child(3){width:2px;height:2px;opacity:.5;animation-delay:1s;}
  @keyframes tt-twinkle{0%,100%{opacity:.6}50%{opacity:.15}}

  /* clouds for light mode */
  .tt-clouds{
    position:absolute;inset:0;border-radius:100px;overflow:hidden;pointer-events:none;
    display:flex;align-items:center;justify-content:flex-end;padding-right:5px;
    opacity:0;transition:opacity .4s;
  }
  .tt-cloud-dot{width:8px;height:5px;background:rgba(255,255,255,.8);border-radius:50px;}

  /* LIGHT MODE state */
  :root.light-mode .theme-toggle-btn{
    background:linear-gradient(135deg,#bfdbfe,#7dd3fc);
    border-color:rgba(59,130,246,.35);
    box-shadow:0 0 12px rgba(251,191,36,.15);
  }
  :root.light-mode .theme-toggle-btn:hover{
    box-shadow:0 0 16px rgba(251,191,36,.25);
  }
  :root.light-mode .tt-knob{
    transform:translateX(25px);
    background:linear-gradient(135deg,#fde68a,#fbbf24);
    box-shadow:0 2px 10px rgba(251,191,36,.55),inset 0 1px 0 rgba(255,255,255,.4);
  }
  :root.light-mode .tt-knob .tt-sun{display:block;}
  :root.light-mode .tt-knob .tt-moon{display:none;}
  :root.light-mode .tt-stars{opacity:0;}
  :root.light-mode .tt-clouds{opacity:1;}

  /* ── CSS Variable Light Mode Overrides ── */
  :root.light-mode {
    --bg: #f8fafc !important;
    --bg2: #ffffff !important;
    --bg3: #f1f5f9 !important;
    --text: #0f172a !important;
    --text2: #475569 !important;
    --text3: #64748b !important;
    --border: rgba(148, 163, 184, 0.18) !important;
    --border2: rgba(148, 163, 184, 0.3) !important;
    --card: #ffffff !important;
  }
  :root.light-mode body { background: #f8fafc !important; color: #0f172a !important; }
  :root.light-mode body::before {
    background: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37, 99, 235, 0.06), transparent) !important;
  }
  :root.light-mode body::after {
    background-image:
      linear-gradient(rgba(37, 99, 235, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(37, 99, 235, 0.015) 1px, transparent 1px) !important;
  }
  :root.light-mode nav, :root.light-mode nav.sc-nav {
    background: rgba(255, 255, 255, 0.94) !important;
    border-bottom: 1px solid rgba(148, 163, 184, 0.18) !important;
  }
  :root.light-mode nav .logo, :root.light-mode nav.sc-nav .logo { color: #0f172a !important; }
  :root.light-mode nav .nav-links a, :root.light-mode nav.sc-nav .nav-links a { color: #475569 !important; }
  :root.light-mode nav .nav-links a:hover, :root.light-mode nav .nav-links a.nav-active,
  :root.light-mode nav.sc-nav .nav-links a:hover, :root.light-mode nav.sc-nav .nav-links a.nav-active {
    color: #2563eb !important;
    background: rgba(59, 130, 246, 0.06) !important;
  }
  :root.light-mode .breadcrumb, :root.light-mode .breadcrumb a { color: #64748b !important; }
  :root.light-mode .breadcrumb a:hover { color: #2563eb !important; }
  :root.light-mode .coming-card {
    background: #ffffff !important;
    border: 1px solid rgba(37, 99, 235, 0.15) !important;
  }
  :root.light-mode .coming-card::before {
    background: linear-gradient(90deg, transparent, #2563eb, #3b82f6, transparent) !important;
  }
  :root.light-mode .coming-title, :root.light-mode .coming-label { color: #0f172a !important; }
  :root.light-mode .coming-btn { background: #2563eb !important; }
  :root.light-mode .coming-btn:hover { background: #1d4ed8 !important; }

  /* Relocated pages dynamic elements */
  :root.light-mode .calc-card { background: #ffffff !important; border-color: rgba(148, 163, 184, 0.25) !important; }
  :root.light-mode .calc-head { border-bottom-color: rgba(148, 163, 184, 0.18) !important; }
  :root.light-mode .calc-htitle { color: #0f172a !important; }
  :root.light-mode .m-pill { background: #f1f5f9 !important; border-color: rgba(148, 163, 184, 0.2) !important; color: #475569 !important; }
  :root.light-mode .m-pill.on { background: rgba(37, 99, 235, 0.08) !important; border-color: #2563eb !important; color: #2563eb !important; }
  :root.light-mode .sec-lbl { border-bottom-color: rgba(148, 163, 184, 0.18) !important; color: #64748b !important; }
  :root.light-mode .inp-lbl { color: #64748b !important; }
  :root.light-mode .inp-wrap, :root.light-mode .date-wrap { background: #f1f5f9 !important; border-color: rgba(148, 163, 184, 0.3) !important; }
  :root.light-mode .inp-wrap:focus-within, :root.light-mode .date-wrap:focus-within { border-color: #2563eb !important; }
  :root.light-mode .inp-wrap input, :root.light-mode .date-wrap input { color: #0f172a !important; }
  :root.light-mode .date-wrap input[type=date] { color-scheme: light !important; }
  :root.light-mode .sel-wrap select { background: #f1f5f9 !important; border-color: rgba(148, 163, 184, 0.3) !important; color: #0f172a !important; }
  :root.light-mode .sel-wrap select:focus { border-color: #2563eb !important; }
  :root.light-mode .sel-wrap select option { background: #ffffff !important; color: #0f172a !important; }
  :root.light-mode .r-placeholder { background: #f1f5f9 !important; border-color: rgba(148, 163, 184, 0.18) !important; }
  :root.light-mode .results-col, :root.light-mode .results-block { color: #0f172a !important; }
  
  /* Tables & content elements */
  :root.light-mode table { border-color: rgba(148, 163, 184, 0.18) !important; }
  :root.light-mode table thead tr { background: #f1f5f9 !important; }
  :root.light-mode table th { color: #475569 !important; }
  :root.light-mode table td { color: #475569 !important; border-top-color: rgba(148, 163, 184, 0.18) !important; }
  :root.light-mode table td:first-child { color: #0f172a !important; }
  :root.light-mode tr:hover td { background: rgba(37, 99, 235, 0.03) !important; }
  
  /* Article & FAQs */
  :root.light-mode .article-box { background: #ffffff !important; border-color: rgba(148, 163, 184, 0.2) !important; }
  :root.light-mode .article-box h2, :root.light-mode .article-box h3 { color: #0f172a !important; }
  :root.light-mode .article-box p { color: #475569 !important; }
  :root.light-mode .article-box strong { color: #0f172a !important; }
  :root.light-mode .fi { background: #f1f5f9 !important; border-color: rgba(148, 163, 184, 0.25) !important; color: #2563eb !important; }
  :root.light-mode .faq-item { background: #ffffff !important; border-color: rgba(148, 163, 184, 0.18) !important; }
  :root.light-mode .faq-q:hover, :root.light-mode .faq-item.open .faq-q { background: #f1f5f9 !important; }
  :root.light-mode .faq-a p { color: #475569 !important; }

  /* Footer */
  :root.light-mode footer { background: #ffffff !important; border-top: 1px solid rgba(148, 163, 184, 0.18) !important; }
  :root.light-mode footer .footer-brand a { color: #0f172a !important; }
  :root.light-mode footer .sc-fl { color: #64748b !important; }
  :root.light-mode footer .sc-fl:hover { color: #2563eb !important; }
  :root.light-mode footer span { background: #f1f5f9 !important; border-color: rgba(148, 163, 184, 0.2) !important; color: #64748b !important; }
`;

/* ── Nav HTML ── */
const HEADER_HTML = `
<nav class="sc-nav">
  <div class="container">
    <div class="nav-inner">
      <a href="/" class="logo">Speed<span>Calculator</span></a>
      <ul class="nav-links" id="sc-nav-links">
        <li><a href="/">Speed Calculator</a></li>
        <li><a href="/bmi-calculator/">Health</a></li>
        <li><a href="/loan-calculator/">Finance</a></li>
        <li><a href="/percentage-calculator/">Math</a></li>
        <li><a href="/blog/">Blog</a></li>
      </ul>
      <div class="nav-right">
<div class="theme-toggle-wrap" title="Toggle light / dark mode">
          <span class="theme-icon-label icon-moon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
          </span>
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle light/dark mode" role="switch">
            <span class="tt-stars" aria-hidden="true">
              <span class="tt-star"></span>
              <span class="tt-star"></span>
              <span class="tt-star"></span>
            </span>
            <span class="tt-clouds" aria-hidden="true">
              <span class="tt-cloud-dot"></span>
            </span>
            <span class="tt-knob" aria-hidden="true">
              <!-- Moon icon inside knob -->
              <svg class="tt-moon" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              <!-- Sun icon inside knob -->
              <svg class="tt-sun" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
            </span>
          </button>
          <span class="theme-icon-label icon-sun" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="4"/><path stroke-linecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          </span>
        </div>
        <button class="sc-ham" id="sc-ham" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <a href="/" class="nav-cta" id="nav-cta-btn">All Calculators</a>
      </div>
    </div>
  </div>
</nav>`;

/* ── Footer HTML ── */
const FOOTER_HTML = `
<footer style="background:var(--bg2,#0b1220);border-top:1px solid rgba(59,130,246,.12);padding:44px 0 28px;margin-top:auto;">
  <div class="container" style="max-width:1100px;margin:0 auto;padding:0 24px;">
    <div class="footer-inner" style="display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr 1fr;gap:24px;margin-bottom:30px;">

      <div class="footer-brand">
        <a href="/" style="font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:900;text-decoration:none;color:#f0f4ff;display:block;margin-bottom:10px;letter-spacing:.04em;">
          Speed<span style="color:#60a5fa;">Calculator</span>
        </a>
        <p style="font-size:13px;color:#4a6080;line-height:1.7;max-width:260px;margin-bottom:14px;">
          Free online calculators for speed, distance, health, finance, and math. Trusted by students, travelers, engineers, and professionals worldwide.
        </p>
        <a href="mailto:info@speedcalculator.net" style="font-size:12px;color:#4a6080;text-decoration:none;display:inline-flex;align-items:center;gap:5px;transition:color .2s;">
          ✉ info@speedcalculator.net
        </a>
      </div>

      <div>
        <div class="footer-col-title" style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4a6080;margin-bottom:12px;">Speed &amp; Travel</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
          <li><a href="/" class="sc-fl">Speed Calculator</a></li>
          <li><a href="/rpm-to-speed-calculator/" class="sc-fl">RPM to Speed</a></li>
          <li><a href="/gear-ratio-speed-calculator/" class="sc-fl">Gear Ratio Speed</a></li>
          <li><a href="/distance-calculator/" class="sc-fl">Distance Calculator</a></li>
          <li><a href="/travel-time-calculator/" class="sc-fl">Travel Time</a></li>
          <li><a href="/fuel-cost-calculator/" class="sc-fl">Fuel Cost</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title" style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4a6080;margin-bottom:12px;">Health &amp; Fitness</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
          <li><a href="/bmi-calculator/" class="sc-fl">BMI Calculator</a></li>
          <li><a href="/calorie-calculator/" class="sc-fl">Calorie Calculator</a></li>
          <li><a href="/tdee-calculator/" class="sc-fl">TDEE Calculator</a></li>
          <li><a href="/age-calculator/" class="sc-fl">Age Calculator</a></li>
          <li><a href="/sleep-calculator/" class="sc-fl">Sleep Calculator</a></li>
          <li><a href="/body-fat-calculator/" class="sc-fl">Body Fat Calculator</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title" style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4a6080;margin-bottom:12px;">Finance &amp; Math</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
          <li><a href="/loan-calculator/" class="sc-fl">Loan Calculator</a></li>
          <li><a href="/emi-calculator/" class="sc-fl">EMI Calculator</a></li>
          <li><a href="/mortgage-calculator/" class="sc-fl">Mortgage Calculator</a></li>
          <li><a href="/percentage-calculator/" class="sc-fl">Percentage Calculator</a></li>
          <li><a href="/fraction-calculator/" class="sc-fl">Fraction Calculator</a></li>
          <li><a href="/scientific-calculator/" class="sc-fl">Scientific Calculator</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-col-title" style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#4a6080;margin-bottom:12px;">Company</div>
        <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
          <li><a href="/about-us/" class="sc-fl">About Us</a></li>
          <li><a href="/contact-us/" class="sc-fl">Contact Us</a></li>
          <li><a href="/faq/" class="sc-fl">FAQ</a></li>
          <li><a href="/blog/" class="sc-fl">Blog</a></li>
          <li><a href="/privacy-policy/" class="sc-fl">Privacy Policy</a></li>
          <li><a href="/terms-and-conditions/" class="sc-fl">Terms &amp; Conditions</a></li>
          <li><a href="/sitemap/" class="sc-fl">Sitemap</a></li>
        </ul>
      </div>

    </div>
    <div style="border-top:1px solid rgba(59,130,246,.1);padding-top:20px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
      <div style="font-size:12px;color:#4a6080;">&copy; 2026 Speed Calculator &mdash; All Rights Reserved</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="font-size:10px;background:#111b2e;border:1px solid rgba(59,130,246,.12);border-radius:4px;padding:3px 8px;color:#4a6080;">speed calculator</span>
        <span style="font-size:10px;background:#111b2e;border:1px solid rgba(59,130,246,.12);border-radius:4px;padding:3px 8px;color:#4a6080;">BMI calculator</span>
        <span style="font-size:10px;background:#111b2e;border:1px solid rgba(59,130,246,.12);border-radius:4px;padding:3px 8px;color:#4a6080;">loan calculator</span>
        <span style="font-size:10px;background:#111b2e;border:1px solid rgba(59,130,246,.12);border-radius:4px;padding:3px 8px;color:#4a6080;">distance calculator</span>
      </div>
    </div>
  </div>
</footer>

<style>
  .sc-fl{font-size:13px;color:#4a6080;text-decoration:none;transition:color .2s;display:block;}
  .sc-fl:hover{color:#60a5fa;}
  @media(max-width:900px){
    footer .footer-inner,[class*="footer-inner"]{grid-template-columns:1fr 1fr !important;}
  }
  @media(max-width:520px){
    footer .footer-inner,[class*="footer-inner"]{grid-template-columns:1fr !important;}
  }
</style>
`;

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', function () {

  /* Inject nav CSS */
  if (!document.getElementById('sc-nav-css')) {
    const s = document.createElement('style');
    s.id = 'sc-nav-css';
    s.textContent = NAV_CSS;
    document.head.appendChild(s);
  }

  /* Render header */
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.innerHTML = HEADER_HTML;
    setActiveNav();
    fixCtaLink();
    initHamburger();
  }
  initThemeToggle();

  /* Render footer */
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = FOOTER_HTML;
  }
});

/* Point "All Calculators" CTA to in-page #calculator if it exists */
function fixCtaLink() {
  const cta = document.getElementById('nav-cta-btn');
  if (cta && document.getElementById('calculator')) {
    cta.setAttribute('href', '#calculator');
    cta.textContent = 'Calculate Now';
  }
}

/* Highlight active nav link */
function setActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('#sc-nav-links a').forEach(function (link) {
    link.classList.remove('nav-active');
    const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === '/' && (path === '' || path === '/')) {
      link.classList.add('nav-active');
    } else if (href !== '/' && path.startsWith(href)) {
      link.classList.add('nav-active');
    }
  });
}

/* Mobile hamburger toggle */
function initHamburger() {
  const btn  = document.getElementById('sc-ham');
  const menu = document.getElementById('sc-nav-links');
  if (!btn || !menu) return;
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = menu.classList.toggle('sc-open');
    btn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', function () {
    menu.classList.remove('sc-open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

/* Light/Dark mode — premium pill switch */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  /* Sync aria state on load */
  const syncAria = function () {
    const isLight = document.documentElement.classList.contains('light-mode');
    toggleBtn.setAttribute('aria-checked', isLight ? 'true' : 'false');
  };
  syncAria();

  toggleBtn.addEventListener('click', function () {
    const isLight = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggleBtn.setAttribute('aria-checked', isLight ? 'true' : 'false');

    /* micro-bounce on the knob */
    const knob = toggleBtn.querySelector('.tt-knob');
    if (knob) {
      knob.style.transition = 'transform .35s cubic-bezier(.34,1.56,.64,1),background .4s,box-shadow .4s';
    }
  });
}
