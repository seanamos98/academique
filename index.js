(function () {
  "use strict";

  $('[data-toggle="sidebar"]').click(function (event) {
    event.preventDefault();
    $(".app").toggleClass("sidebar-toggled");
  });
})();

// google map
function initMap() {
  var options = {
    zoom: 8,
    center: { lat: 6.465422, lng: 3.406448 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
    position: { lat: 6.55136, lng: 3.266265 },
    map: map,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  });
}
