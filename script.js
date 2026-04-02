/* ═══════════════════════════════════════════════════
   PAYTM VERSION B — shared script.js
═══════════════════════════════════════════════════ */

/* ── Bottom tab nav (NOT used in B — we use top tabs)
   But this renders a compact bottom utility bar       */
function renderBottomBar(active) {
  const items = [
    { id:'home',    href:'index.html',   label:'Home',    icon: icoHome() },
    { id: 'history', href: 'history.html', label: 'History', icon: historyIcon() },
    { id:'scan',    href:'scan.html',    label:'Scan',    icon: icoScan(), scan: true },
    { id:'offers',  href:'offers.html',  label:'Offers',  icon: icoOffers() },
    { id:'profile', href:'profile.html', label:'Profile', icon: icoProfile() },
  ];

  const bar = document.createElement('nav');
  bar.id = 'bottomBar';
  bar.style.cssText = `
    position:fixed;bottom:0;left:50%;transform:translateX(-50%);
    width:100%;max-width:430px;
    background:#fff;border-top:1px solid #E4EDF3;
    display:flex;align-items:center;padding:0 4px;
    height:var(--nav-h,56px);z-index:200;
  `;

  items.forEach(it => {
    const a = document.createElement('a');
    a.href = it.href;
    if (it.scan) {
      a.style.cssText = 'flex:0 0 68px;display:flex;align-items:center;justify-content:center;margin-top:-16px;';
      a.innerHTML = `<div style="width:50px;height:50px;border-radius:50%;background:var(--brand,#00BAF2);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,186,242,.4);">${it.icon}</div>`;
    } else {
      a.style.cssText = `flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:6px;color:${active===it.id?'var(--brand,#00BAF2)':'#9AAEBF'};font-size:10px;font-weight:600;text-decoration:none;letter-spacing:.3px;`;
      a.innerHTML = `${it.icon}<span>${it.label}</span>`;
    }
    bar.appendChild(a);
  });

  document.body.appendChild(bar);
}

function icoHome()    { return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`; }
function historyIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>`;
}
function icoScan()    { return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h.01M14 18h3M17 14v4M20 14h.01M20 18h.01"/></svg>`; }
function icoOffers()  { return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`; }
function icoProfile() { return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`; }

/* ── Shared clipboard copy ── */
function copyText(text, btn, done='Copied') {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = done;
    btn.style.color = 'var(--success, #10B981)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
  }).catch(() => {});
}

window.renderBottomBar = renderBottomBar;
window.copyText = copyText;
