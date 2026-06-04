/**
 * snow-prose — single prose column ("About Us", "Privacy Notice").
 * Rows: each cell's child nodes are appended into the prose column in order.
 */
export default function decorate(block) {
  const col = document.createElement('div');
  col.className = 'snow-prose-col';
  [...block.children].forEach((r) => {
    const cell = r.firstElementChild;
    if (cell) [...cell.childNodes].forEach((n) => col.append(n.cloneNode(true)));
  });
  block.replaceChildren(col);
}
