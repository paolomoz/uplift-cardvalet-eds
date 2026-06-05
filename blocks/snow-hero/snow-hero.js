/**
 * snow-hero — full-bleed photo hero with navy overlay.
 * Rows: 1 image · 2 headline · 3 lead · 4 app-store links
 */
import { appBadges } from '../../scripts/appbadges.js';

const t = (r) => (r?.firstElementChild?.textContent || '').trim();
export default function decorate(block) {
  const rows = [...block.children];
  const picture = block.querySelector('picture') || block.querySelector('img');
  const content = document.createElement('div');
  content.className = 'snow-hero-content';
  content.innerHTML = '<span class="snow-hero-rule"></span>';
  const h1 = document.createElement('h1');
  h1.textContent = t(rows[1]);
  content.append(h1);
  if (t(rows[2])) {
    const p = document.createElement('p');
    p.className = 'snow-hero-lead';
    p.textContent = t(rows[2]);
    content.append(p);
  }
  const links = rows[3] ? [...rows[3].querySelectorAll('a')] : [];
  if (links.length) content.append(appBadges(links));
  const bg = document.createElement('div');
  bg.className = 'snow-hero-bg';
  if (picture) bg.append(picture.closest('picture') || picture);
  block.replaceChildren(bg, content);
}
