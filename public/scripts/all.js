var app = angular.module('app', []);
app.controller('mainController', function($scope, $timeout) {
	$('#presentation h1').typed({
		strings: ['I design stuff.'],
		typeSpeed: 110
	});

	$timeout(function () {
		$('.carousel').owlCarousel({
			items: 1,
            nav :  true,
            navSpeed : 500,

            center:true,
            URLhashListener:true,
            startPosition: 'URLHash'
		});
	});
});