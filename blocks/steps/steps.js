export default function decorate(block) {
  const ol = document.createElement('ol');
  ol.className = 'steps-list';
  [...block.children].forEach((row, i) => {
    const li = document.createElement('li');
    const num = document.createElement('div');
    num.className = 'step-num';
    num.textContent = i + 1;
    const body = document.createElement('div');
    body.className = 'step-body';
    [...row.children].forEach((cell) => [...cell.childNodes].forEach((n) => body.append(n)));
    li.append(num, body);
    ol.append(li);
  });
  block.replaceChildren(ol);
}
