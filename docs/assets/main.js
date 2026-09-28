document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const mobile = window.matchMedia('(max-width: 767px)');
  if (toggle && sidebar) {
    toggle.hidden = false;
    function syncNavigation() {
      // Reset to a visible desktop nav or a closed mobile disclosure.
      sidebar.classList.toggle('collapsed', mobile.matches);
      toggle.setAttribute('aria-expanded', String(!mobile.matches));
      if (mobile.matches && sidebar.contains(document.activeElement)) toggle.focus();
      if (!mobile.matches && document.activeElement === toggle) sidebar.querySelector('a')?.focus();
    }
    syncNavigation();
    mobile.addEventListener('change', syncNavigation);
    toggle.addEventListener('click', function () {
      const closed = sidebar.classList.toggle('collapsed');
      toggle.setAttribute('aria-expanded', String(!closed));
    });
    sidebar.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobile.matches) {
        sidebar.classList.add('collapsed');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
  document.querySelectorAll('main.content table').forEach(function (table, index) {
    const region = document.createElement('div');
    region.className = 'table-scroll';
    region.tabIndex = 0;
    region.setAttribute('role', 'region');
    region.setAttribute('aria-label', 'Scrollable reference table ' + (index + 1));
    const help = document.createElement('p');
    help.className = 'table-help';
    help.id = 'table-help-' + index;
    help.textContent = 'Scroll sideways to see all columns. Keyboard: focus the table area and use the arrow keys.';
    region.setAttribute('aria-describedby', help.id);
    table.before(region);
    region.append(table);
    region.before(help);
    function updateHelp() { help.hidden = region.scrollWidth <= region.clientWidth; }
    updateHelp();
    new ResizeObserver(updateHelp).observe(region);
  });
});
