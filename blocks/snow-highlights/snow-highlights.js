/**
 * snow-highlights — eyebrow + h2 + 3 icon features + CTA ("Your card, on your terms")
 * Authoring rows (positional):
 *   1. eyebrow text
 *   2. headline (h2)
 *   3..5. feature rows: cell1 = icon name (shield|sliders|bell), cell2 = title, cell3 = body
 *   last. CTA link
 */
const ICONS = {
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="#002754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="#002754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="#002754" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
};
const cells = (r) => [...r.children].map((c) => c.textContent.trim());
export default function decorate(block) {
  const rows = [...block.children];
  const head = document.createElement('div');
  head.className = 'snow-section-head';
  head.innerHTML = `<p class="snow-eyebrow">${rows[0].textContent.trim()}</p><h2>${rows[1].textContent.trim()}</h2>`;
  const featRows = rows.slice(2).filter((r) => r.children.length >= 2 && !r.querySelector('a'));
  const grid = document.createElement('div');
  grid.className = 'snow-feat3';
  featRows.forEach((r) => {
    const [icon, title, body] = cells(r);
    const f = document.createElement('div');
    f.className = 'snow-feat';
    f.innerHTML = `<div class="snow-feat-ic">${ICONS[icon] || ICONS.shield}</div><h3>${title}</h3><p>${body}</p>`;
    grid.append(f);
  });
  const ctaRow = rows.slice(2).find((r) => r.querySelector('a'));
  const out = [head, grid];
  if (ctaRow) {
    const a = ctaRow.querySelector('a');
    const wrap = document.createElement('div');
    wrap.className = 'snow-cta';
    a.className = 'snow-btn snow-btn-secondary';
    wrap.append(a);
    out.push(wrap);
  }
  block.replaceChildren(...out);
}
