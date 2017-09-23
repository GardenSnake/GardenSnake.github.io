// IMPORTANT:
// Contributors are loaded from /data/contributors.js

var delay = 100;
var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 25, lng: 0.0077},
	zoom: 2
});

var infowindow = new google.maps.InfoWindow();

function geocodeAddress(contributor, next) {
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({address: contributor.address}, function (results, status) {
		if (status === 'OK') {
			var p = results[0].geometry.location;
			var lat = p.lat();
			var lng = p.lng();
			createMarker(contributor.user, lat, lng);
		}
		else {
			if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
				nextContributor--;
				delay++;
			}
		}
		next();
	});
}

function createMarker(username, lat, lng) {
	var contentString = username;
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: map
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(contentString);
		infowindow.open(map, marker);
	});
}

var nextContributor = 0;
function theNext() {
	if (nextContributor < contributors.length) {
		setTimeout(geocodeAddress(contributors[nextContributor], theNext), delay);
		nextContributor++;
	}
}
theNext();
