data=[];
let utterance = new SpeechSynthesisUtterance();
document.getElementsByClassName('content')[0].style.opacity="100%";
function continu() {
	document.getElementsByClassName("content")[0].style.opacity="0%";
	document.getElementsByClassName('content')[0].style.animation="hide 1s";
	setTimeout(function () {
		document.getElementsByClassName('content')[0].style.display="none";
		document.getElementsByClassName('content')[1].style.display="block";
		document.getElementsByClassName('content')[1].style.opacity="100%";
		writer("EnterName","We will help you to solve your confusion related to car selection of TATA company. So let's start with your name",10);
	}, 900);
	
	setTimeout(function () {
		document.getElementById('name').style.display="block";
	}, 2500);
}
function LetsGo() {
	document.getElementsByClassName("content")[1].style.animation="hide 1s";
	document.getElementsByClassName("content")[1].style.opacity="0%";
	setTimeout(function() {
		document.getElementsByClassName("content")[1].style.display="none";
		document.getElementsByClassName("content")[2].style.display="block";
		document.getElementsByClassName("content")[2].style.opacity="100%";
		writer("EnterOccupation","Hi "+document.getElementById("name").value+", I'm curious what do you do for living and what is your profession?",10);
	}, 900);
	setTimeout(function () {
		document.getElementById('Occupation').style.display="block";
	}, 2500);
}
function GoForward() {
	document.getElementsByClassName("content")[2].style.animation="hide 1s";
	document.getElementsByClassName("content")[2].style.opacity="0%";
	setTimeout(function() {
		document.getElementsByClassName("content")[2].style.display="none";
		document.getElementsByClassName("content")[3].style.display="block";
		document.getElementsByClassName("content")[3].style.opacity="100%";
		writer("EnterIncome","That's impressive "+document.getElementById("name").value+"! I've always been fascinated by how things work. What do you enjoy most about your work and how much you are paid?",10);
	}, 900);
	setTimeout(function () {
		document.getElementById('Income').style.display="block";
	}, 2800);
}
function Proceed() {
	document.getElementsByClassName("content")[3].style.animation="hide 1s";
	document.getElementsByClassName("content")[3].style.opacity="0%";
	setTimeout(function() {
		document.getElementsByClassName("content")[3].style.display="none";
		document.getElementsByClassName("content")[4].style.display="block";
		document.getElementsByClassName("content")[4].style.opacity="100%";
		writer("EnterDistance","That's Awesome "+document.getElementById("name").value+"! Could you please indicate the distance from your residence to your office?",10);
	}, 900);
	setTimeout(function () {
		document.getElementById('Distance').style.display="block";
	}, 2800);
}
function GetRecommendations() {
	document.getElementsByClassName("content")[4].style.animation="hide 1s";
	document.getElementsByClassName("content")[4].style.opacity="0%";
	setTimeout(function() {
		document.getElementsByClassName("content")[4].style.display="none";
		document.getElementsByClassName("content")[5].style.display="block";
		document.getElementsByClassName("content")[5].style.opacity="100%";
		document.getElementsByClassName("content")[5].style.animation="show 2s";
	}, 900);
	setTimeout(function() {
		writer("Processing","We are processing your information...",1);
	}, 2900);
	var xhr = new XMLHttpRequest();
	var frm= new FormData();
	frm.append("salary", document.getElementById("Income").value);
	frm.append("occupation", document.getElementById("Occupation").value);
	frm.append("distance", document.getElementById("Distance").value);
	xhr.open("POST","/",true);
	xhr.send(frm);
	xhr.onloadend = function () {
		data.push(xhr.responseText.replaceAll("\n","<br>").replaceAll("#",""));
		setTimeout(function() {
			document.getElementsByClassName("content")[5].style.opacity="0%";
			document.getElementsByClassName("content")[5].style.animation="hide 2s";
			document.getElementsByClassName("content")[6].style.opacity="100%";
			document.getElementsByClassName("content")[5].style.display="none";
			document.getElementsByClassName("content")[6].style.display="block";
		}, 1000);
		setTimeout(function() {
			var n = ""
			for (var i = data.length - 1; i >= 0; i--) {
				if (data[i].length > 1) {
					n=n+data[i];
				}
			}
			setTimeout(function() {
				document.getElementById("rcm").style.display="flex";
			}, 10000);
			writer("Recomm",n, 1);
		},2000);
	}
}
function listen() {
	var n ="";
	for (var i = data.length - 1; i >= 0; i--) {
		n=n+data[i];
	}
	utterance.text=n.replaceAll("<br>","");
	if (document.getElementById("lsn").innerText.indexOf("Listen") > -1) {
		speechSynthesis.speak(utterance);
		document.getElementById("lsn").innerHTML='Stop<i class="material-icons">mic_off</i>';
	} else {
		speechSynthesis.cancel();
		document.getElementById("lsn").innerHTML='Listen<i class="material-icons">mic</i>';
	}
}
function reset() {
	Descriptor=[];
	document.getElementById("name").value="";
	document.getElementById("Distance").value="";
	document.getElementById("Income").value="";
	document.getElementById("Occupation").value="";
	for (var i = document.getElementsByClassName("content").length - 1; i >= 0; i--) {
		document.getElementsByClassName("content")[i].style.display="none";
		document.getElementsByClassName("content")[i].style.opacity="0%";
		document.getElementsByClassName("content")[i].style.animation="";
	}
	document.getElementsByClassName("content")[0].style.display="block";
	document.getElementsByClassName("content")[0].style.opacity="100%";
}
