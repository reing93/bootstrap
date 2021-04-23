$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });

})