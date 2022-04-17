$(document).ready(function () {
    $(".carousel_part_2").owlCarousel();
});

$('.carousel_part_2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 6
        }
    }
})
