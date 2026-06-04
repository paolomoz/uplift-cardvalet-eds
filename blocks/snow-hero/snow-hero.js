/**
 * snow-hero — full-bleed photo hero with navy overlay (home prototype "hero" section)
 * Authoring rows (positional):
 *   1. <picture> background image
 *   2. headline (becomes <h1>)
 *   3. lead paragraph
 *   4. app-store links (App Store, Google Play) — rendered as badges
 */
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
    content.append(badges);
  }
  const bg = document.createElement('div');
  bg.className = 'snow-hero-bg';
  if (picture) bg.append(picture.closest('picture') || picture);
  block.replaceChildren(bg, content);
}
