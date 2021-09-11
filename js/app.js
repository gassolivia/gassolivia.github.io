/* https://cssdeck.com/blog/showhide-content-css-javascript/ */

/*
<a href="javascript:showMore()" id="link">Read more</a>
<div id="more" style="display:none;">

function showMore(){
    //removes the link
    document.getElementById('link').parentElement.removeChild(document.getElementById('link'));
    //shows the #more
    document.getElementById('more').style.display = "block";
}
*/
/*
<div><a href="javascript:showHide('div_1035677');">more...</a></div>
<div id="div_1035677" style="display:none">

function showHide(elementid){
    if (document.getElementById(elementid).style.display == 'none'){
        document.getElementById(elementid).style.display = '';
    } else {
        document.getElementById(elementid).style.display = 'none';
    }
}
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
