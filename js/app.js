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
