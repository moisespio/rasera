$('#presentation h1').typed({
    strings: ['I design stuff.'],
    typeSpeed: 110
});

$('.carousel').owlCarousel({
    items: 1,
    nav: true,
    navSpeed: 1200,
    center: true,
    URLhashListener: true,
    startPosition: 'URLHash',
    dots: false,
});

var s = skrollr.init();