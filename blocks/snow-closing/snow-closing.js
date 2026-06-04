/**
 * snow-closing — full-bleed navy CTA band ("Have questions...")
 * Authoring rows (positional):
 *   1. headline (h2)
 *   2. body paragraph
 *   3. CTA link
 */
const t = (r) => (r?.firstElementChild?.textContent || '').trim();
export default function decorate(block) {
  const rows = [...block.children];
  const inner = document.createElement('div');
  inner.className = 'snow-closing-inner';
  inner.innerHTML = `<h2>${t(rows[0])}</h2>${t(rows[1]) ? `<p>${t(rows[1])}</p>` : ''}`;
  const a = rows[2] && rows[2].querySelector('a');
  if (a) { a.className = 'snow-btn snow-btn-onnavy'; inner.append(a); }
  block.replaceChildren(inner);
}
