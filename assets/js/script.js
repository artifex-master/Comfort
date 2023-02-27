'use strict'

const catalogueSidebarTitle = document.querySelectorAll('.catalogue-sidebar__item');
const catalogueDropdown = document.querySelector('.catalogue-sidebar__dropdown');

catalogueSidebarTitle.forEach(o => {
  o.addEventListener("click", function() {
    o.classList.toggle("active");
  });
});

function openSizeTableData(evt, sizeMenuItem) {
  let i, x, tablinks;
  x = document.getElementsByClassName('sizes-table__block');
  for(i = 0 ; i < x.length ; i++){
    x[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName('sizes-table__tabs-item');
  for(i = 0 ; i < x.length ; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }

  document.getElementById(sizeMenuItem).style.display = "flex";
  evt.currentTarget.className += " tab-active";
};
