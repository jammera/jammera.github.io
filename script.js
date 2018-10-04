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


// Thanks to @uchardon on CodePen for this code
initslider();
function initslider() {
  const elPrevButton = document.querySelector('.slider #prev');
  const elNextButton = document.querySelector('.slider #next');

  const elImages = Array.from(document.querySelectorAll('.slider .image'));

  let state = {
    photo: 0
  };

  function send(event) {

    const elActives = document.querySelectorAll('.slider [data-active]');

    Array.from(elActives)
      .forEach(el => el.removeAttribute('data-active'));

    switch (event) {
      case 'PREV':
        state.photo--;
        break;
      case 'NEXT':
        state.photo++;
        break;
      default:
        state.photo = +event;
        break;
    }

    var len = elImages.length;
    // Loop Around
    //state.photo = ( ( state.photo % len) + len ) % len;
    state.photo = Math.max(0, Math.min( state.photo, len - 1) );

    Array.from(document.querySelectorAll(`.slider [data-key="${state.photo}"]`))
      .forEach( el => {
      el.setAttribute('data-active', true);
    });


  }
  elPrevButton.addEventListener('click', () => {
    send('PREV');
  });

  elNextButton.addEventListener('click', () => {
    send('NEXT');
  });

  const elStatus = Array.from(document.querySelectorAll('.slider .stat'));
  elStatus.forEach( stat => { 
    stat.addEventListener('click', () => {
      send(stat.dataset.key);
    });
  });
  send(0);
};
