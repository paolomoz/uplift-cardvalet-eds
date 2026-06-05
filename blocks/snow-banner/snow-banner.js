/**
 * snow-banner — full-bleed photo CTA banner with left text overlay + white button.
 * Rows: 1 image · 2 headline · 3 subcopy · 4 CTA link
 */
const t = (r) => (r?.firstElementChild?.textContent || '').trim();
const ARROW = '<svg class="snow-banner-arrow" viewBox="0 0 40 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 8h35M30 2l7 6-7 6"/></svg>';
export default function decorate(block) {
  const rows = [...block.children];
  const pic = block.querySelector('picture') || block.querySelector('img');
  const content = document.createElement('div');
  content.className = 'snow-banner-content';
  const h2 = document.createElement('h2');
  h2.textContent = t(rows[1]);
  content.append(h2);
  if (t(rows[2])) {
    const p = document.createElement('p');
    p.className = 'snow-banner-sub';
    p.textContent = t(rows[2]);
    content.append(p);
  }
  const a = rows[3] && rows[3].querySelector('a');
  if (a) {
    a.className = 'snow-banner-cta';
    a.innerHTML = `<span>${a.textContent.trim()}</span>${ARROW}`;
    content.append(a);
  }
  const bg = document.createElement('div');
  bg.className = 'snow-banner-bg';
  if (pic) bg.append(pic.closest('picture') || pic);
  block.replaceChildren(bg, content);
}
