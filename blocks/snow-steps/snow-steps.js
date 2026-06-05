/**
 * snow-steps — editorial "big number + divider rule" steps (Fiserv stats treatment).
 * Rows: 1 eyebrow · 2 headline · 3..N step rows (title · body+list)
 */
export default function decorate(block) {
  const rows = [...block.children];
  const head = document.createElement('div');
  head.className = 'snow-section-head';
  head.innerHTML = `<p class="snow-eyebrow">${rows[0].textContent.trim()}</p><h2>${rows[1].textContent.trim()}</h2>`;
  const grid = document.createElement('div');
  grid.className = 'snow-steps-grid';
  rows.slice(2).forEach((r, i) => {
    const [titleCell, bodyCell] = r.children;
    const step = document.createElement('div');
    step.className = 'snow-step';
    const num = document.createElement('div');
    num.className = 'snow-step-num';
    num.textContent = String(i + 1).padStart(2, '0');
    const h3 = document.createElement('h3');
    h3.textContent = (titleCell?.textContent || '').trim();
    step.append(num, h3);
    if (bodyCell) [...bodyCell.childNodes].forEach((n) => step.append(n.cloneNode(true)));
    grid.append(step);
  });
  block.replaceChildren(head, grid);
}
