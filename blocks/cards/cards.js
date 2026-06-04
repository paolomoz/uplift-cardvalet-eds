export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    [...row.children].forEach((cell) => {
      if (cell.querySelector('picture, img')) cell.className = 'cards-card-image';
      else cell.className = 'cards-card-body';
      li.append(cell);
    });
    ul.append(li);
  });
  block.replaceChildren(ul);
}
