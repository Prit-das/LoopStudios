const btn = document.getElementById('menu-btn')
const menu = document.getElementById('mobile')

btn.addEventListener('click', function () {
  menu.classList.toggle('open');
});