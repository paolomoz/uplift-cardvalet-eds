/**
 * snow-app — split: copy + app badges | product image ("Take control in minutes")
 * Authoring rows (positional):
 *   1. eyebrow text
 *   2. headline (h2)
 *   3. body paragraph
 *   4. app-store links
 *   5. <picture> product image
 */
const t = (r) => (r?.firstElementChild?.textContent || '').trim();
export default function decorate(block) {
  const rows = [...block.children];
  const left = document.createElement('div');
  left.className = 'snow-app-copy';
  left.innerHTML = `<p class="snow-eyebrow">${t(rows[0])}</p><h2>${t(rows[1])}</h2><p class="snow-app-lead">${t(rows[2])}</p>`;
  const links = rows[3] ? [...rows[3].querySelectorAll('a')] : [];
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
    left.append(badges);
  }
  const right = document.createElement('div');
  right.className = 'snow-app-media';
  const pic = block.querySelector('picture') || block.querySelector('img');
  if (pic) right.append(pic.closest('picture') || pic);
  const split = document.createElement('div');
  split.className = 'snow-split';
  split.append(left, right);
  block.replaceChildren(split);
}
