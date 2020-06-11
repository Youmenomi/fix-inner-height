// Fix window.innerHeight when resizing
const styleEl = document.createElement('style');
document.head.appendChild(styleEl);
styleEl.id = 'fix-inner-height';
const styleSheet = styleEl.sheet as CSSStyleSheet;
styleSheet.insertRule('body { height: 100vh;}');

// Fix initial scroll
let count = 0;
let temp = 0;
function loop() {
  if (count === 0) temp = window.document.body.scrollTop;
  else if (count === 2) window.document.body.scrollTop = temp;

  if (++count === 3) return;
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

// Fix resize scroll
window.addEventListener('resize', () => {
  window.document.body.scrollTop = 0;
});
