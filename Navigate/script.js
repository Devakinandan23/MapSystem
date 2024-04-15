// function initAutocomplete() {
//   var fromInput = document.getElementById("from");
//   var toInput = document.getElementById("to");

//   var autocompleteFrom = new google.maps.places.Autocomplete(fromInput);
//   var autocompleteTo = new google.maps.places.Autocomplete(toInput);
// }


// Define an array of objects containing the "from", "to", and "link" properties
var routes = [
  {
    from: "Main Gate",
    to: "AB3",
    link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2058.9707099462803!2d80.1532922386538!3d12.842560161979593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3a5259af888ad1f5%3A0x97644f6646055611!2zVklUIFVuaXZlcnNpdHkgQWRtaW5pc3RyYXRpdmUgLyBNQkHigKYg4K614K6_4K6Q4K6f4K6_4oCm!3m2!1d12.8408571!2d80.1539548!4m5!1s0x3a52596570aca2d1%3A0x7b0a59f791122a5a!2sAcademic%20Block%203%2C%20ACADEMIC%20BLOCK%2C%20VIT%20UNIVERSITY%2C%20Tamil%20Nadu!3m2!1d12.8435127!2d80.15466959999999!5e1!3m2!1sen!2sin!4v1712686182643!5m2!1sen!2sin",
  },
  {
    from: "Admin Block",
    to: "AB1",
    link: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1945.0059984880334!2d80.15233198865388!3d12.842501111980239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x3a5259af888ad1f5%3A0x97644f6646055611!2zVklUIFVuaXZlcnNpdHkgQWRtaW5pc3RyYXRpdmUgLyBNQkEgQmxvY2ssIDU2LCDgrrXgrqPgr43grp_grrLgr4LgrrDgr40t4K6V4K-H4K6z4K6u4K-N4K6q4K6-4K6V4K-N4K6V4K6u4K-NIOCumuCuvuCusuCviCwgS292aWxhbmNoZXJpLCBUYW1pbCBOYWR1IDYwMDEyNw!3m2!1d12.8408571!2d80.1539548!4m3!3m2!1d12.8433918!2d80.153841!5e0!3m2!1sen!2sin!4v1713189865607!5m2!1sen!2sin",
  },
  {
    from: "AB1",
    to: "AB2",
    link: "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1945.0057961042621!2d80.15399495824316!3d12.842527263107602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d12.8430286!2d80.156232!4m3!3m2!1d12.8433918!2d80.153841!5e0!3m2!1sen!2sin!4v1713190004132!5m2!1sen!2sin",
  },
  {
    from: "Main Gate",
    to: "D-Block",
    link: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1053.1819585865508!2d80.1523935912823!3d12.841077340318918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d12.840621299999999!2d80.15296099999999!4m5!1s0x3a5259007503af69%3A0x976b1c6f1bb5dcd8!2sR5V2%2B7PJ%20D1%20Block%20Hostel%2C%20Madurapakkam%2C%20Tamil%20Nadu%20600127!3m2!1d12.843621899999999!2d80.1521818!5e0!3m2!1sen!2sin!4v1713192525962!5m2!1sen!2sin",
  },


];

// Function to find the link based on "from" and "to" inputs
function findLink(fromValue, toValue) {
  // Iterate over the routes array to find the matching route
  for (var i = 0; i < routes.length; i++) {
    if (routes[i].from === fromValue && routes[i].to === toValue) {
      return routes[i].link; // Return the link if the route is found
    }
  }
  // Return null if no matching route is found
  return null;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the selected values from the dropdown menus
    var fromValue = document.getElementById("from").value;
    var toValue = document.getElementById("to").value;
  
    // Find the link based on the selected "from" and "to" values
    var link = findLink(fromValue, toValue);
  
    if (link) {
      // Redirect to the found link
      window.location.href = "../Maps/index.html?link=" + encodeURIComponent(link);
    } else {
      // Display an error message if no matching link is found
      alert("No route found for the selected 'From' and 'To' options.");
      return;
    }
  }
  
  

// Add event listener to the form submit button
document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("submitBtn");
  submitButton.addEventListener("click", handleFormSubmit);
});

// document.getElementById("submitBtn").addEventListener("click", function () {
//     // Redirect to map.html
//     window.location.href = "../Maps/index.html";
//   });

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
