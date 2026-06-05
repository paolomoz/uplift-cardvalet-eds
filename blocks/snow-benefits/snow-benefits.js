/**
 * snow-benefits — Fiserv insights-card grid: optional image · navy category band · headline · body.
 * Rows: 1 eyebrow · 2 headline · 3..N card rows ([image?] · category · title · body+list)
 */
const BOOK = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.4 5.3 8 4.7 6 4.7 4.4 4.7 2.7 5 2 5.5v13c.7-.5 2.4-.8 4-.8 2 0 4.4.5 6 1.8 1.6-1.3 4-1.8 6-1.8 1.6 0 3.3.3 4 .8v-13c-.7-.5-2.4-.8-4-.8-2 0-4 .6-6 1.8z"/><path d="M12 6.5V19.5"/></svg>';
export default function decorate(block) {
  const rows = [...block.children];
  const head = document.createElement('div');
  head.className = 'snow-section-head';
  head.innerHTML = `<p class="snow-eyebrow">${rows[0].textContent.trim()}</p><h2>${rows[1].textContent.trim()}</h2>`;
  const grid = document.createElement('div');
  grid.className = 'snow-cardgrid';
  rows.slice(2).forEach((r) => {
    const cells = [...r.children];
    const imgCell = cells.find((c) => c.querySelector('img, picture'));
    const [catCell, titleCell, bodyCell] = imgCell ? cells.filter((c) => c !== imgCell) : cells;
    const card = document.createElement('div');
    card.className = 'snow-card';
    if (imgCell) {
      const pic = imgCell.querySelector('picture') || imgCell.querySelector('img');
      const im = document.createElement('div');
      im.className = 'snow-card-img';
      im.append(pic.closest('picture') || pic);
      card.append(im);
    }
    const band = document.createElement('div');
    band.className = 'snow-card-band';
    band.innerHTML = `${BOOK}<span>${(catCell?.textContent || 'CardValet').trim()}</span>`;
    card.append(band);
    const body = document.createElement('div');
    body.className = 'snow-card-body';
    const h3 = document.createElement('h3');
    h3.textContent = (titleCell?.textContent || '').trim();
    body.append(h3);
    if (bodyCell) [...bodyCell.childNodes].forEach((n) => body.append(n.cloneNode(true)));
    card.append(body);
    grid.append(card);
  });
  block.replaceChildren(head, grid);
}
