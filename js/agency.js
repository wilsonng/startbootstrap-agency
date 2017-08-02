(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });



})(jQuery); // End of use strict


var data = [
    {
        label: 'Seattle',
        type: ['work', 'education'],
        lat: 47.608013,
        lng: -122.335167
    },
    {
        label: 'Hong Kong',
        type: ['work', 'education'],
        lat: 22.344044,
        lng: 114.100998
    },
    {
        label: 'Shanghai',
        type: ['work'],
        lat: 31.217133,
        lng: 121.551491
    },
    {
        label: 'Barcelona',
        type: ['education'],
        lat: 41.390205,
        lng: 2.154007
    },
    {
        label: 'Bay Area',
        type: ['education'],
        lat: 37.368832,
        lng: -122.036346
    },
    {
        label: 'Chicago',
        type: ['work'],
        lat: 41.881832,
        lng: -87.623177
    },
    {
        label: 'London',
        type: ['education'],
        lat: 51.508530,
        lng: -0.076132
    }
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: { lat: 15, lng: 0 }
    });

    for (var i in data) {
        var item = data[i];
        var marker = new google.maps.Marker({
            position: { lat: item.lat, lng: item.lng },
            map: map,
            icon: {
                path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
                fillColor: '#00CCBB',
                fillOpacity: 1,
                strokeColor: '',
                strokeWeight: 0
            },
            map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
        });
    }
}

initMap();
