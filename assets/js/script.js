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

function openProductReview(evt, productItem) {
  let x, i, productTabLinks;
  x = document.getElementsByClassName('product-review-tab-wrapper__bottom-list-item');
  for(i = 0 ; i < x.length; i++) {
    x[i].style.display = "none";
  }

  productTabLinks = document.getElementsByClassName('tab-item');
  for(i = 0 ; i < x.length ; i++) {
    productTabLinks.className = productTabLinks[i].className.replace(" product-active", "");
  }

  document.getElementById(productItem).style.display = "block";
  evt.currentTarget.className += " product-active";
}
