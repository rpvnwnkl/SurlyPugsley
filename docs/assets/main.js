
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var sidebar = document.getElementById('sidebar');
  toggle.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
  });
});
