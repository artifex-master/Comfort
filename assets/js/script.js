'use strict'

const catalogueSidebarTitle = document.querySelectorAll('.catalogue-sidebar__item');
const catalogueDropdown = document.querySelector('.catalogue-sidebar__dropdown');

catalogueSidebarTitle.forEach(o => {
  o.addEventListener("click", function() {
    o.classList.toggle("active");
  });
});