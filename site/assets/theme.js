// Run before CSS to restore the appearance without a flash of the default theme.
(function () {
  'use strict';
  var key = 'kotowa:appearance';
  var root = document.documentElement;
  function apply(value) {
    var theme = value === 'theme2' ? 'theme2' : 'theme1';
    root.dataset.appearance = theme;
    var select = document.getElementById('theme-select');
    if (select) select.value = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'theme2' ? '#4b16cf' : '#d7263d';
  }
  var saved;
  try { saved = localStorage.getItem(key); } catch (err) { /* storage blocked */ }
  apply(saved);
  document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('theme-select');
    if (!select) return;
    select.value = root.dataset.appearance;
    select.addEventListener('change', function () {
      apply(select.value);
      try { localStorage.setItem(key, select.value); } catch (err) { /* session-only choice */ }
    });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
})();
