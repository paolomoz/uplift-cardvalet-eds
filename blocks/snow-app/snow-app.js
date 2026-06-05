/**
 * snow-app — split: copy (rich body + optional app badges) | media image.
 * Rows: 1 eyebrow · 2 headline · 3..N body paragraphs/lists, app-store links, image (any order)
 */
import { appBadges } from '../../scripts/appbadges.js';

const t = (r) => (r?.firstElementChild?.textContent || '').trim();
const isApp = (a) => /itunes\.apple|apps\.apple|play\.google/.test(a.href);
export default function decorate(block) {
  const rows = [...block.children];
  const left = document.createElement('div');
  left.className = 'snow-app-copy';
  left.innerHTML = `<p class="snow-eyebrow">${t(rows[0])}</p><h2>${t(rows[1])}</h2>`;
  const pic = block.querySelector('picture') || block.querySelector('img');
  rows.slice(2).forEach((r) => {
    if (r.querySelector('img, picture')) return;
    const links = [...r.querySelectorAll('a')];
    if (links.length && links.every(isApp)) left.append(appBadges(links));
    else if (r.firstElementChild) [...r.firstElementChild.childNodes].forEach((n) => left.append(n.cloneNode(true)));
  });
  const right = document.createElement('div');
  right.className = 'snow-app-media';
  if (pic) right.append(pic.closest('picture') || pic);
  const split = document.createElement('div');
  split.className = 'snow-split';
  split.append(left, right);
  block.replaceChildren(split);
}
