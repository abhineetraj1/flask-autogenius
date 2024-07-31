for (var i = document.getElementsByTagName('*').length - 1; i >= 0; i--) {
	document.getElementsByTagName('*')[i].style.cursor="none";
}
if (window.innerHeight < window.innerWidth) {
	var cursor = document.createElement("div");
	cursor.id="cursor";
	document.body.appendChild(cursor);
	window.onmousemove = function (e) {
		document.getElementById('cursor').style.top=e.clientY+"px";
		document.getElementById('cursor').style.left=e.clientX+"px";
	}
}