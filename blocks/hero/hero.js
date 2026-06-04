export default function decorate(block) {
  const pic = block.querySelector('picture');
  const content = document.createElement('div');
  content.className = 'hero-content';
  [...block.querySelectorAll(':scope > div')].forEach((row) => {
    [...row.children].forEach((cell) => {
      if (cell.querySelector('picture')) return;
      [...cell.childNodes].forEach((n) => content.append(n));
    });
  });
  const bg = document.createElement('div');
  bg.className = 'hero-bg';
  if (pic) bg.append(pic);
  const rule = document.createElement('span');
  rule.className = 'hero-rule';
  content.prepend(rule);
  block.replaceChildren(bg, content);
}
