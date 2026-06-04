/**
 * snow-benefits — eyebrow + h2 + card grid ("Benefits of CardValet")
 * Authoring rows (positional):
 *   1. eyebrow text
 *   2. headline (h2)
 *   3..N. card rows: cell1 = title, cell2 = body (may contain <p> and <ul>)
 */
export default function decorate(block) {
  const rows = [...block.children];
  const head = document.createElement('div');
  head.className = 'snow-section-head';
  head.innerHTML = `<p class="snow-eyebrow">${rows[0].textContent.trim()}</p><h2>${rows[1].textContent.trim()}</h2>`;
  const grid = document.createElement('div');
  grid.className = 'snow-cardgrid';
  rows.slice(2).forEach((r) => {
    const [titleCell, bodyCell] = r.children;
    const card = document.createElement('div');
    card.className = 'snow-card';
    const h3 = document.createElement('h3');
    h3.textContent = (titleCell?.textContent || '').trim();
    card.append(h3);
    if (bodyCell) [...bodyCell.childNodes].forEach((n) => card.append(n.cloneNode(true)));
    grid.append(card);
  });
  block.replaceChildren(head, grid);
}
