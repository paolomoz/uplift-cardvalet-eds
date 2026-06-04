/**
 * snow-download — centered light band: eyebrow + h2 + app badges ("Download CardValet").
 * Rows: 1 eyebrow · 2 headline · 3 app-store links
 */
const t = (r) => (r?.firstElementChild?.textContent || '').trim();
export default function decorate(block) {
  const rows = [...block.children];
  const inner = document.createElement('div');
  inner.className = 'snow-download-inner';
  inner.innerHTML = `<p class="snow-eyebrow">${t(rows[0])}</p><h2>${t(rows[1])}</h2>`;
  const links = rows[2] ? [...rows[2].querySelectorAll('a')] : [];
  if (links.length) {
    const badges = document.createElement('div');
    badges.className = 'snow-appbadges';
    links.forEach((a) => {
      const badge = document.createElement('a');
      badge.className = 'snow-appbadge';
      badge.href = a.href;
      badge.innerHTML = `<small>Download on the</small>${a.textContent.trim()}`;
      badges.append(badge);
    });
    inner.append(badges);
  }
  block.replaceChildren(inner);
}
