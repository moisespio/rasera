$('#presentation h1').typed({
    strings: ['I design stuff.'],
    typeSpeed: 120
});

$('.carousel').owlCarousel({
    items: 1,
    nav: true,
    navSpeed: 400,
    center: true,
    URLhashListener: true,
    startPosition: 'URLHash',
    dots: false
});

$('.ip-one a').click(function () {
    var ip_one = $(this).attr('href');
    $('.item-one').css('background-image', 'url(public/images/screens/w-' + ip_one + '.png)');
    return false;
});

$('.ip-two a').click(function () {
    var ip_two = $(this).attr('href');
    $('.item-two').css('background-image', 'url(public/images/screens/w-' + ip_two + '.png)');
    return false;
});
