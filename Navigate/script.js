function initAutocomplete() {
    var fromInput = document.getElementById('from');
    var toInput = document.getElementById('to');

    var autocompleteFrom = new google.maps.places.Autocomplete(fromInput);
    var autocompleteTo = new google.maps.places.Autocomplete(toInput);
}

document.getElementById('submitBtn').addEventListener('click', function() {
    // Redirect to map.html
    window.location.href = '../Maps/index.html';
});


// document.getElementById('submitBtn').addEventListener('click', function() {
//     var from = document.getElementById('from').value;
//     var to = document.getElementById('to').value;

//     if (from === 'none' || to === 'none') {
//         alert('Please select valid locations');
//         return;
//     }

//     var mapUrl = 'https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=' + encodeURIComponent(from) + '&destination=' + encodeURIComponent(to);
    
//     var iframe = document.createElement('iframe');
//     iframe.src = mapUrl;
//     iframe.setAttribute('width', '100%');
//     iframe.setAttribute('height', '500');
//     iframe.setAttribute('frameborder', '0');
//     iframe.setAttribute('allowfullscreen', '');
    
//     var mapDiv = document.getElementById('mapDiv');
//     mapDiv.innerHTML = '';
//     mapDiv.appendChild(iframe);
// });

