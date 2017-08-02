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
        label: 'Seattle', type: ['work', 'education'],
        lat: 47.608013, lng: -122.335167
    },
    {
        label: 'Hong Kong', type: ['work', 'education'],
        lat: 22.344044, lng: 114.100998
    },
    {
        label: 'Shanghai', type: ['work'],
        lat: 31.217133, lng: 121.551491
    },
    {
        label: 'Barcelona', type: ['education'],
        lat: 41.390205, lng: 2.154007
    },
    {
        label: 'Bay Area', type: ['education'],
        lat: 37.368832, lng: -122.036346
    },
    {
        label: 'Chicago', type: ['work'],
        lat: 41.881832, lng: -87.623177
    },
    {
        label: 'London', type: ['education'],
        lat: 51.508530, lng: -0.076132
    }
];

var data1 = [
    {
        label: 'Taiwan', type: ['travel'],
        lat: 23.697810, lng: 120.960515
    },
    {
        label: 'Bangkok', type: ['travel'],
        lat: 13.756331, lng: 100.501765
    },
    {
        label: 'Beijing', type: ['travel'],
        lat: 39.904200, lng: 116.407396
    },
    {
        label: 'Tibet', type: ['travel'],
        lat: 30.153361, lng: 88.787868
    },
    {
        label: 'Macau', type: ['travel'],
        lat: 22.198745, lng: 113.543873
    },
    {
        label: 'Huangzhou', type: ['travel'],
        lat: 30.434049, lng: 114.879398
    },
    {
        label: 'Xian', type: ['travel'],
        lat: 34.341574, lng: 108.939770
    },
    {
        label: 'Xihang', type: ['travel'],
        lat: 34.351879, lng: 108.968354
    },
    {
        label: 'Ningbo', type: ['travel'],
        lat: 29.868336, lng: 121.543990
    },
    {
        label: 'Bath', type: ['travel'],
        lat: 43.910635, lng: -69.820602
    },
    {
        label: 'Cambridge', type: ['travel'],
        lat: 52.205337, lng: 0.121817
    },
    {
        label: 'Brighton', type: ['travel'],
        lat: 43.122272, lng: -77.573405
    }
];

var styledMapType = new google.maps.StyledMapType(
    [
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e9e9e9"
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e9e9e9"
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 18
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#e9e9e9"
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#dedede"
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    visibility: "on"
                },
                {
                    color: "#ffffff"
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    "saturation": 36
                },
                {
                    color: "#333333"
                },
                {
                    lightness: 40
                }
            ]
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                {
                    color: "#f2f2f2"
                },
                {
                    lightness: 19
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
                {
                    color: "#fefefe"
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
                {
                    color: "#fefefe"
                },
                {
                    lightness: 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ],
    { name: 'Styled Map' });

function initMap() {
    var style = [
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#cdcdcd'
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#e9e9e9'
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#ffffff'
                },
                {
                    lightness: 17
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#ffffff'
                },
                {
                    lightness: 29
                },
                {
                    weight: 0.2
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#ffffff'
                },
                {
                    lightness: 18
                }
            ]
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#ffffff'
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#e9e9e9'
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#dedede'
                },
                {
                    lightness: 21
                }
            ]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    visibility: 'on'
                },
                {
                    color: '#ffffff'
                },
                {
                    lightness: 16
                }
            ]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [
                {
                    saturation: 36
                },
                {
                    color: '#333333'
                },
                {
                    lightness: 40
                }
            ]
        },
        {
            elementType: 'labels.icon',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#f2f2f2'
                },
                {
                    lightness: 19
                }
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#fefefe'
                },
                {
                    lightness: 20
                }
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#fefefe'
                },
                {
                    lightness: 17
                },
                {
                    weight: 1.2
                }
            ]
        }
    ];
    var styledMapType = new google.maps.StyledMapType(
        style,
        { name: 'Styled Map' });

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        mapTypeControl: false,
        streetViewControl: false,
        center: { lat: 15, lng: 0 }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');


    for (var i in data1) {
        var item = data1[i];

        var markerIcon = {
            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5z',
            fillColor: '#99d3df',
            fillOpacity: 1,
            anchor: new google.maps.Point(12, 23),
            scale: 0.8,
            strokeColor: '#fff',
            strokeWeight: 1,
        };

        var marker = new google.maps.Marker({
            position: { lat: item.lat, lng: item.lng },
            map: map,
            icon: markerIcon,
            map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
        });
    }

    for (var i in data) {
        var item = data[i];

        var markerIcon = {
            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5z',
            fillColor: '#88bbd6',
            fillOpacity: 1,
            anchor: new google.maps.Point(12, 23),
            scale: 1.5,
            strokeColor: '#fff',
            strokeWeight: 1,
        };

        var marker = new google.maps.Marker({
            position: { lat: item.lat, lng: item.lng },
            map: map,
            icon: markerIcon,
            map_icon_label: '<span class="map-icon map-icon-point-of-interest"></span>'
        });
    }
}

initMap();
