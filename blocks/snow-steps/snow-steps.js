/**
 * snow-steps — eyebrow + h2 + numbered step cards ("How It Works").
 * Rows: 1 eyebrow · 2 headline · 3..N step rows (title · body+list)
 */
export default function decorate(block) {
  const rows = [...block.children];
  const head = document.createElement('div');
  head.className = 'snow-section-head';
  head.innerHTML = `<p class="snow-eyebrow">${rows[0].textContent.trim()}</p><h2>${rows[1].textContent.trim()}</h2>`;
  const ol = document.createElement('ol');
  ol.className = 'snow-steps-list';
  rows.slice(2).forEach((r, i) => {
    const [titleCell, bodyCell] = r.children;
    const li = document.createElement('li');
    const num = document.createElement('div');
    num.className = 'snow-step-num';
    num.textContent = i + 1;
    const body = document.createElement('div');
    body.className = 'snow-step-body';
    const h3 = document.createElement('h3');
    h3.textContent = (titleCell?.textContent || '').trim();
    body.append(h3);
    if (bodyCell) [...bodyCell.childNodes].forEach((n) => body.append(n.cloneNode(true)));
    li.append(num, body);
    ol.append(li);
  });
  block.replaceChildren(head, ol);
}
