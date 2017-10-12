
(function($) {
	var isAPILoaded = false;
    $.fn.placeSearch = function(psParams){
		
		function loadGoogleAPI(key){
			return new Promise(function(done){
				if(isAPILoaded) return done();
				var script = document.createElement("script");
				script.onload = function(){
					isAPILoaded = true;
					done();
				};
				script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&key="+key;
				document.getElementsByTagName("body")[0].appendChild(script);
			});
		}
		
		function addMarkerToMap(map, place, service, onMarkerClick){
			var marker = new google.maps.Marker({
				map: map,
				position: place.geometry.location,
				icon: {
					url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
					anchor: new google.maps.Point(10, 10),
					scaledSize: new google.maps.Size(10, 17)
				}
			});

			google.maps.event.addListener(marker, 'click', function () {
				getPlaceDetails(service, place).then(onMarkerClick);
			});

		}
		
		function getPlaceDetails(service, place){
			return new Promise(function(done){
				service.getDetails(place, function (result, status) {
					if (status !== google.maps.places.PlacesServiceStatus.OK) return;
					done({
						photo: result.photos && result.photos.length ? result.photos[0].getUrl({maxWidth: 640}) : null,
						address: result.formatted_address,
						rating: result.rating,
						name: result.name,
						phone: result.formatted_phone_number,
						place_id: result.place_id,
						reviews: result.reviews,
						website: result.website
					});
				});
			});
		}
		
		function placeSearch(input, params){
			
			// From input parameters
			var key = params.hasOwnProperty("key") ? params.key : "";
			var onSearchResults = typeof params.callback === "function" ? params.callback : function(){};
			var onMarkerClick = typeof params.markerCallback === "function" ? params.markerCallback : function(){};
			var radius = params.hasOwnProperty(radius) ? params.radius : 5;
			var type = params.hasOwnProperty(type) ? params.type : 'store';
			var mapSelector = params.hasOwnProperty("map") ? params.map : null;
			
			// Constructor vars
			if(!Array.isArray(type)) type = [type];
			var self = this;
			
			// Properties
			this.input = input;
			this.autoComplete = null;
			this.mapSelector = mapSelector;
			this.maps = [];
			
			loadGoogleAPI(key).then(function(){
				if(self.mapSelector){
					$(self.mapSelector).each(function(){
						self.maps.push(new google.maps.Map(this, {
							center: new google.maps.LatLng(-33.8665433, 151.1956316),
							zoom: 15
						}));
					});
				}
				
				var service = new google.maps.places.PlacesService(document.createElement("div"));
				self.autoComplete = new google.maps.places.Autocomplete(self.input, {
					types: ['geocode']
				});
				
				google.maps.event.addListener(self.autoComplete, 'place_changed', function(){
					var place = self.autoComplete.getPlace();					
					var q = {
						location: {
							lat: place.geometry.location.lat(),
							lng: place.geometry.location.lng()
						},
						radius: radius * 1609.34, // convert miles to meters
						type: type
					};					
					service.nearbySearch(q, function(results, status){
						if(!results.length) return;
						self.clearMap();
						
						for(var n=0; n<self.maps.length; n++){
							var bounds = new google.maps.LatLngBounds();
							for (var i = 0, result; result = results[i]; i++){
								addMarkerToMap(self.maps[n], result, service, onMarkerClick);
								bounds.extend(result.geometry.location);
							}
							self.maps[n].fitBounds(bounds);
						}
						
						var i=0;
						var ret = [];
						(function recurse(cb){
							if(i===results.length) return cb();
							getPlaceDetails(service, results[i]).then(function(res){
								i++;
								ret.push(res);
								recurse(cb);
							});
						})(function(){
							onSearchResults(ret);
						});
						
					});
				});
				
			});
		}
		
		placeSearch.prototype.clearMap = function(){
			for(var n=0; n<this.maps.legnth; n++){
				for (var i = 0; i < this.maps[n].markers.length; i++) {
					this.maps[n].markers[i].setMap(null);
				}
				this.maps[n].markers = new Array();
			}
		};
		
		return this.each(function() {
			if ($(this).data('psInstance') === undefined)
				$(this).data('psInstance', new placeSearch(this, psParams));
		});
    };
})(jQuery);