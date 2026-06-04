export default function decorate(block) {
  block.querySelectorAll(':scope > div > div').forEach((cell) => {
    [...cell.childNodes].forEach((n) => block.append(n));
  });
  [...block.querySelectorAll(':scope > div')].forEach((d) => d.remove());
}
