function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 25,
            lng: 0.0077
        },
        zoom: 2
    });

    var geocoder = new google.maps.Geocoder();

    // If you want to add your location, just follow the example and add to the contributors array:
    // {user: "YOUR USERNAME"
    // address: "WHERE YOU ARE FROM"},

    // I wanted to also add a function where you click on the marker and it shows the username of who's from there,
    // but it's proving more difficult than I thought :( So if you are looking for something to do, try that

    var contributors = [
        {
            user: "visampaio",
            address: "Toronto, ON"
        },

        {
            user: "prikkprikkprikk",
            address: "Oslo, Norway"
        },

        {
            user: "GardenSnake",
            address: "New York, USA"
        },

        {
            user: "StanTheMan132",
            address: "Arnhem, Netherlands"
        },

        {
            user: "karimhurani",
            address: "Ottawa, ON"
        },
		{
			user: "IKnowBashFu",
			address: "Bay Ridge, Brooklyn, NY, USA"
        },
        {
            user: "Snoopy",
            address: "Columbus, OH, USA"
        },
        {
            user: "KMM",
            address: "Manchester, UK"
        },
        {
            user: 'ad-dan',
            address: "Pune, India"
        },
	{
            user: "Firsteo",
            address: "Noida, India"
        }

  ];


    for (var i = 0; i < contributors.length; i++)
        geocoder.geocode({
            "address": contributors[i].address
        }, function (results, status) {
            if (status === 'OK') {
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });

                var contentString = 'Not yet implemented'

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            }
        });









}
