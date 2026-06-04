/**
 * snow-benefits — eyebrow + h2 + card grid. Cards optionally lead with an image.
 * Rows: 1 eyebrow · 2 headline · 3..N card rows ([image?] · title · body+list)
 */
export default function decorate(block) {
  const rows = [...block.children];
  const head = document.createElement('div');
  head.className = 'snow-section-head';
  head.innerHTML = `<p class="snow-eyebrow">${rows[0].textContent.trim()}</p><h2>${rows[1].textContent.trim()}</h2>`;
  const grid = document.createElement('div');
  grid.className = 'snow-cardgrid';
  rows.slice(2).forEach((r) => {
    const cells = [...r.children];
    const card = document.createElement('div');
    card.className = 'snow-card';
    const imgCell = cells.find((c) => c.querySelector('img, picture'));
    let rest = cells;
    if (imgCell) {
      const pic = imgCell.querySelector('picture') || imgCell.querySelector('img');
      const im = document.createElement('div');
      im.className = 'snow-card-img';
      im.append(pic.closest('picture') || pic);
      card.append(im);
      rest = cells.filter((c) => c !== imgCell);
    }
    const h3 = document.createElement('h3');
    h3.textContent = (rest[0]?.textContent || '').trim();
    card.append(h3);
    if (rest[1]) [...rest[1].childNodes].forEach((n) => card.append(n.cloneNode(true)));
    grid.append(card);
  });
  block.replaceChildren(head, grid);
}
