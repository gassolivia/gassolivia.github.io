/* https://cssdeck.com/blog/showhide-content-css-javascript/
It checks to see if it can find an element with an ID that matches the variable we passed it.
If so, it checks to see if our “show” link is visible (this is where the ID naming convention starts to matter).
If the “show” link is visible, that means our content is still hidden. The JavaScript then hides the link and displays our hidden content.
If the “show” link is hidden, that means our extra content is currently visible. So it just reverses course, displaying our link again and hiding our extra content.
*/
function showHide(shID) {
	if (document.getElementById(shID)) {
		if (document.getElementById(shID+'-show').style.display != 'none') {
			document.getElementById(shID+'-show').style.display = 'none';
			document.getElementById(shID).style.display = 'block';
		}
		else {
			document.getElementById(shID+'-show').style.display = 'inline';
			document.getElementById(shID).style.display = 'none';
		}
	}
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Initialize and add the map
function initMap() {
	// initial location of the marker
  const brunsummerheide = { lat: 50.928, lng: 5.9997 };
	// map (optional) specifies the Map on which to place the marker
	// To add the marker to the map, call setMap();
	// marker.setMap(map);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: brunsummerheide,
  });
  const contentString =
    '<div id="content">' +
    	'<div id="siteNotice">' +
    	"</div>" +
    	'<h1 id="firstHeading" class="firstHeading">brunsummerheide</h1>' +
	    '<div id="bodyContent">' +
	    	"<p><b>Brunsummerheide</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p>" +
	    	'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p>' +
	    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
// Place marker
  const marker = new google.maps.Marker({
    position: brunsummerheide,
    map,
    title: "Brunsummerheide",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
