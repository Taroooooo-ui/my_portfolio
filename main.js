// Hamburger toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
// Typing effect
const target = document.getElementById('typing');
const arr = ["Mark Daniel","a Student", "an aspiring Web Developer", "an aspiring Android App Maker"];
let w = 0, l = 0, direction = 1;
function typeIt() {
  const word = arr[w];
  target.textContent = word.substring(0, l);
  l += direction;
  if (l === word.length + 1) {
    direction = -1;
    setTimeout(typeIt, 1000);
    return;
  }
  if (l === 0) { direction = 1; w = (w + 1) % arr.length; }
  setTimeout(typeIt, direction === 1 ? 100 : 50);
}
window.addEventListener('DOMContentLoaded', typeIt);