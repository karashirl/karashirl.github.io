function initMap() {
    "use strict";
    // var key = 'AIzaSyAXv__8Lntps83xCckPJSuseFxz6g5c64k';
    // var markerArray = [];
    // var menuList = $('#menu ul');
    var mapDiv = document.getElementById('map');
    
    var styles = [
        {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
        {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
        {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":5}]},
        {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":7},{"weight":1.2}]},
        {"featureType":"administrative.country","elementType":"labels.text","stylers":[{"color":"#fffdfd"}]},
        {"featureType":"administrative.province","elementType":"labels.text","stylers":[{"color":"#ffffff"},{"weight":".5"}]},
        {"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"color":"#fcfcfc"},{"weight":".5"}]},
        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":0}]},
        {"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#F1C232"},{"saturation":"100"},{"lightness":"0"},{"gamma":"1"},{"weight":"1"}]},
        {"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#4E3F11"},{"saturation":"0"}]},
        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":10}]},
        {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#001900"},{"lightness":0}]},
        {"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"weight":"1.48"}]},
        {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#f8f8f8"}]},
        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#4E3F11"},{"lightness":10},{"saturation":"0"}]},
        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":18},{"weight":0.2}]},
        {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":10}]},
        {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#F1C232"}]},
        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":8}]},
        {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":9}]},
        {"featureType":"water","elementType":"geometry","stylers":[{"color":"#0B5394"},{"lightness":10}]},
        {"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0B5394"},{"saturation":"0"}]}
     ];
    
    // Render map
    map = new google.maps.Map(mapDiv, {
        center: {lat: 39.2904, lng : -76.6122},
        zoom: 13,
        styles: styles,
        mapTypeControl: false
    }), ko.applyBindings(new AppViewModel)


    
  //   for (i = 0; i < locations().length; i++) {

 //        var geocoder = new google.maps.Geocoder;

    //  var infowindow = new google.maps.InfoWindow();

    //  google.maps.event.addListener(marker, 'click', (function(marker, i) {
 //         return function() {
 //             infowindow.setContent(locations()[i].name);
 //             infowindow.open(map, marker);
 //         }
 //         })(marker, i));         
    // };

}


// Define array of location data
var locations = [
     {
     name : 'BistroRx',
     lat : 39.2920615,
     lng : -76.5782233,
     type : 'Food'
     },
     {
     name : 'The Chasseur',
     lat : 39.2846791,
     lng : -76.5712218,
     type : 'Food'
     },
     {
     name : 'Dangerously Delicious Pies',
     lat : 39.2799631,
     lng : -76.5777407,
     type : 'Food'
     },
     {
     name : 'Gnocco',
     lat : 39.2858521,
     lng : -76.5675488,
     type : 'Food'
     },
     {
     name : 'Little Morocco Cafe',
     lat : 39.286708,
     lng : -76.5716104,
     type : 'Food'
     },
     {
     name : 'Matthews Pizzeria',
     lat : 39.2862558,
     lng : -76.5740734,
     type : 'Food'
     },
     {
     name : 'Salt',
     lat : 39.289315,
     lng : -76.5884216,
     type : 'Food'
     },
     {
     name : 'Samos Greek Island Grill',
     lat : 39.2762044,
     lng : -76.5667088,
     type : 'Food'
     },
     {
     name : 'Annabel Lee Tavern',
     lat : 39.2844733,
     lng : -76.5725401,
     type : 'Bars'
     },
     {
     name : 'Hudson Street Stackhouse',
     lat : 39.2832564,
     lng : -76.5826611,
     type : 'Bars'
     },
     {
     name : 'Myth & Moonshine Tavern',
     lat : 39.2821398,
     lng : -76.5842346,
     type : 'Bars'
     },
     {
     name : 'Of Love & Regret',
     lat : 39.280919,
     lng : -76.5720681,
     type : 'Bars'
     },
     {
     name : 'Smaltimore',
     lat : 39.2832564,
     lng : -76.5826611,
     type : 'Bars'
     },
     {
     name : 'Snake Hill',
     lat : 39.287051,
     lng : -76.570225,
     type : 'Bars'
     },
     {
     name : 'Baltimore Taphouse',
     lat : 39.2841992,
     lng : -76.5779046,
     type : 'Bars'
     },
     {
     name : 'Cafe Latte\' Da',
     lat : 39.2837325,
     lng : -76.595116,
     type : 'Coffee & Juice Bars'
     },
     {
     name : 'Corner Juice Bar',
     lat : 39.285137,
     lng : -76.5849182,
     type : 'Coffee & Juice Bars'
     },
     {
     name : 'Firehouse Coffee Company',
     lat : 39.2801979,
     lng : -76.5778987,
     type : 'Coffee & Juice Bars'
     },
     {
     name : 'High Grounds Coffee Roasters',
     lat : 39.286267,
     lng : -76.5735574,
     type : 'Coffee & Juice Bars'
     },
     {
     name : 'Patterson Perk',
     lat : 39.2859289,
     lng : -76.583508,
     type : 'Coffee & Juice Bars'
     },
     {
     name : 'Starbucks',
     lat : 39.2800452,
     lng : -76.5793524,
     type : 'Coffee & Juice Bars'
     },
     {
     name : '2910 on the Square',
     lat : 39.280521,
     lng : -76.5772158,
     type : 'Shopping'
     },
     {
     name : 'Canton Crossing Wine & Spirits',
     lat : 39.2763134,
     lng : -76.5663636,
     type : 'Shopping'
     },
     {
     name : 'Chesapeake Wine Co.',
     lat : 39.2812818,
     lng : -76.5827119,
     type : 'Shopping'
     },
     {
     name : 'Cloud 9 Boutique',
     lat : 39.2812105,
     lng : -76.5825012,
     type : 'Shopping'
     },
     {
     name : 'Dana\'s Boutique',
     lat : 39.2842225,
     lng : -76.5817693,
     type : 'Shopping'
     },
     {
     name : 'Dogma',
     lat : 39.2780312,
     lng : -76.568651,
     type : 'Shopping'
     },
     {
     name : 'Old Navy',
     lat : 39.2755156,
     lng : -76.5661053,
     type : 'Shopping'
     },
     {
     name : 'Target',
     lat : 39.2748148,
     lng : -76.5683416,
     type : 'Shopping'
     },
     {
     name : 'Canton Waterfront Park',
     lat : 39.2772397,
     lng : -76.5756887,
     type : 'Recreation'
     },
     {
     name : 'Du Burns Arena',
     lat : 39.2777761,
     lng : -76.5738148,
     type : 'Recreation'
     },
     {
     name : 'M Power Yoga',
     lat : 39.2807703,
     lng : -76.5687095,
     type : 'Recreation'
     },
     {
     name : 'Patterson Park Dog Park',
     lat : 39.2883303,
     lng : -76.5762252,
     type : 'Recreation'
     },
     {
     name : 'Patterson Park Ice Rink',
     lat : 39.288877,
     lng : -76.5793917,
     type : 'Recreation'
     },
     {
     name : 'Patterson Park Pagoda',
     lat : 39.290002,
     lng : -76.583599,
     type : 'Recreation'
     },
     {
     name : 'Patterson Park Pool',
     lat : 39.2896978,
     lng : -76.5798344,
     type : 'Recreation'
     }
];

var filters = ['All', 'Food', 'Bars', 'Coffee & Juice Bars', 'Shopping', 'Recreation'];

var map;

var Place = function(self, bounds, infowindow) {
    "use strict";
    this.name = ko.observable(self.name), this.lat = ko.observable(self.lat), this.lng =
    ko.observable(self.lng), this.type = ko.observable(self.type), this.marker = ko.observable();
    // , this.phone = ko.observable(""), this.description = ko.observable(""), this.address = ko.observable(""), this.rating = ko.observable(""), this.url = ko.observable(""), this.canonicalUrl = ko.observable(""), this.photoPrefix = ko.observable(""), this.photoSuffix = ko.observable(""), this.contentString = ko.observable("")
    
    // Render markers
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.lat(), this.lng()),
        map: map,
        animation: google.maps.Animation.DROP
    });
    
    self.marker = marker;

    // Set colored marker icons based on place type
    switch (this.type()) {
        case 'Food':
            self.marker.setIcon('images/pin_orange.png');
            break;
        case 'Shopping':
            self.marker.setIcon('images/pin_green.png');
            break;
        case 'Coffee & Juice Bars':
            self.marker.setIcon('images/pin_purple.png');
            break;
        case 'Recreation':
            self.marker.setIcon('images/pin_teal.png');
            break;
        case 'Bars':
            self.marker.setIcon('images/pin_yellow.png');
            break;
    };
    
    // Extend bounds based on markers
    bounds.extend(marker.position);

    this.isVisible = ko.observable(false);

    this.isVisible.subscribe(function(currentState) {
        if (currentState) {
            marker.setMap(map);
        } else {
            marker.setMap(null);
        }
    });  
    this.isVisible(true);

    // Animate markers and populate info window on click
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, this);
        marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null)
            }, 1400), infowindow.setContent(self.name)
    });
};

var AppViewModel = function() {
    "use strict";
    var self = this;
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow({
        maxWidth: 200
    });

    // Create observable array for all places
    self.places = ko.observableArray([]), locations.forEach(function(marker) {
        self.places.push(new Place(marker, bounds, infowindow));
    });

    // Fit entire map area to bounds
    map.fitBounds(bounds);

    self.animatePlace = function(marker) {
        console.log(marker);
        google.maps.event.trigger(marker, 'click');
    };

    self.places().forEach(function(self, marker) {
    // Something is supposed to go here
    });

    // Filter place list and markers based on dropdown selection
    self.filters = ko.observableArray(filters);
    self.filter = ko.observable('');
    self.filteredItems = ko.computed(function() {
        var filter = self.filter();
        if (!filter || filter == 'All') {
            return ko.utils.arrayFilter(self.places(), function(item) {
                item.isVisible(item.type());
                return self.places();
            });
        } else {
            return ko.utils.arrayFilter(self.places(), function(item) {
                item.isVisible(item.type() == filter);
                return item.type() == filter;
            });
        }
    });

   // Fit map area to bounds
};






