var marker;

function initMap() {
	var key = 'AIzaSyAXv__8Lntps83xCckPJSuseFxz6g5c64k';
	var map;
	var markerArray = [];
	var menuList = $('#menu ul');
	
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
	
	map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 39.2904, lng: -76.6122},
     	zoom: 13,
     	styles: styles,
     	mapTypeControl: false
    });
    
    for (i = 0; i < locations().length; i++) {

    	marker = new google.maps.Marker({
			position: locations()[i].location,
			map: map,
			title: locations()[i].name,
			animation: google.maps.Animation.DROP
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {  
 			return function() {
    			if (marker.getAnimation() != null) {  
        			marker.setAnimation(null); 
    			} else {  
        			marker.setAnimation(google.maps.Animation.BOUNCE);  
					window.setTimeout( function() {
                		marker.setAnimation(null); 
            		}, 2000);  
    			}  
			}
		})(marker, i));

    	markerArray.push(marker);

    	menuList.append('<li>' + locations()[i].name + '</li>');

    	switch (locations()[i].type) {
    		case 'food':
    			marker.setIcon('images/pin_orange.png');
    			break;
    		case 'shopping':
    			marker.setIcon('images/pin_green.png');
    			break;
    		case 'coffee':
    			marker.setIcon('images/pin_purple.png');
    			break;
    		case 'recreation':
    			marker.setIcon('images/pin_teal.png');
    			break;
    	};

		var infowindow = new google.maps.InfoWindow();

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
        	return function() {
          	infowindow.setContent(locations()[i].name);
          	infowindow.open(map, marker);
        	}
      	})(marker, i));

      	
	};
	fitBoundsToPins(markerArray, map);
};

function fitBoundsToPins(markerArray, map) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markerArray.length; i++) {
        bounds.extend(markerArray[i].getPosition());
    };
    map.fitBounds(bounds);
}; 

