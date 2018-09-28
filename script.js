// Hides the navigation on scrolldown
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

// Rotate background pic of Welcome section
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


// Project tiles interaction
/*
let tiles = document.getElementsByClassName('project-tile');


for(let i in tiles) {
	let tile = tiles[i];
	
	tile.addEventListener('mouseover', function(event) {
		event.target.children[0].style.display = 'none';
		setTimeout(function() {
			event.target.children[0].style.display = 'block';
		},3000);
	});
}
*/
