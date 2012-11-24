var addressField = document.getElementById('search_address');
var geocoder = new google.maps.Geocoder();
function search() {
    geocoder.geocode(
        {'address': addressField.value}, 
        function(results, status) { 
            if (status == google.maps.GeocoderStatus.OK) { 
                var loc = results[0].geometry.location;
                // use loc.lat(), loc.lng()
            } 
            else {
                alert("Not found: " + status); 
            } 
        }
    );
};
