Descriptor=[];
function writer(id, text, interval) {
	var elem = document.getElementById(id);
	n="";
	for (var i = 0;i<text.length;i++) {
		n=n+text[i];
		Descriptor.push(n);
	}
	Write(id,interval);
}

function Write(id,interval) {
	setTimeout(function() {
		if (Descriptor.length !=0) {
			document.getElementById(id).innerHTML = Descriptor[0];
			Descriptor=Descriptor.splice(1);
			Write(id,interval);
		}
	}, (interval+(i*5)));
}