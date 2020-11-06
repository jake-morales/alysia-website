'use strict';

var tabs = document.querySelectorAll('.tabs li');
var tab_contents = document.querySelectorAll('.tab-content');

// Switches tabs
tabs.forEach(function (tab, index) {
  if (tab.textContent == "CV") {
    tab.addEventListener('click', function () {
      window.location.href = "/AlysiaBurbidge_CV.pdf";
    });
    return;
  }
  tab.addEventListener('click', function () {
    tabs.forEach(function (t) {
      return t.classList.remove("is-active");
    });
    tab_contents.forEach(function (tc) {
      return tc.classList.add("is-hidden");
    });
    tabs[index].classList.add("is-active");
    tab_contents[index].classList.remove("is-hidden");
  });
});