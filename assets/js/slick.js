$(document).ready(function() {
    $('.promotion-goods-slick').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        arrows: true,
        prevArrow: '<div class="slick-arrow-wrapper arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',
        nextArrow: '<div class="slick-arrow-wrapper arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',
        dots: true,
        responsive: [{
            breakpoint: '600',
            variableWidth: true
        }]
    });

});