let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

let switchKey = true;
let url = 'url("computer0.jpg")';
setInterval(function() {
	if(switchKey) {
		url = 'url("computer0.jpg")';
	} else {
		url = 'url("chess0.jpg")';
	}
	document.getElementById("welcome-container").style.backgroundImage = url;
	switchKey = !switchKey;
}, 3000);
