var image = document.getElementById("clickme"),
  count = 0;
  highscore = 0;

  function fadeout() {
    document.getElementById('hitmarker1').style.opacity = '0';
  }

image.onmousedown = function() {
  count += 100;
  document.getElementById("score").innerHTML = count;

  window.setTimeout(fadeout, 300);
  document.getElementById('hitmarker1').style.opacity = '1';

  if (count > 0 && count < 10) {
  document.body.style.backgroundImage = "url('gifs/gif1.gif')";
}
  if (count > 10 && count < 20) {
  document.body.style.backgroundImage = "url('gifs/gif2.gif'), url('gifs/gif1.gif')";
}
  if (count > 20 && count < 30) {
  document.body.style.backgroundImage = "url('gifs/gif3.gif'), url('gifs/gif2.gif'), url('gifs/gif1.gif')";
}
  if (count > 30 && count < 40) {
  document.body.style.backgroundImage = "url('gifs/gif4.gif'), url('gifs/gif3.gif'), url('gifs/gif2.gif'), url('gifs/gif1.gif')";
}
  if (count > 40 && count < 50) {
  document.body.style.backgroundImage = "url('gifs/gif5.gif'), url('gifs/gif4.gif'), url('gifs/gif3.gif'), url('gifs/gif2.gif'), url('gifs/gif1.gif')";
}
  if (count > 50 && count < 60) {
  document.body.style.backgroundImage = "url('gifs/gif6.gif'), url('gifs/gif5.gif'), url('gifs/gif4.gif'), url('gifs/gif3.gif'), url('gifs/gif2.gif'), url('gifs/gif1.gif')";
}
  if (count > 60 && count < 70) {
  document.body.style.backgroundImage = "url('gifs/gif7.gif'), url('gifs/gif6.gif'), url('gifs/gif5.gif'), url('gifs/gif4.gif'), url('gifs/gif3.gif'), url('gifs/gif2.gif'), url('gifs/gif1.gif')";
}
  if (count > 99 && count < 110) {
  document.getElementById("clickme").src="egg2.png";
  document.body.style.backgroundImage = "url('bomb.gif')"
}
  if (count > 110 && count < 120) {
  document.body.style.backgroundImage = "url(gifs/gif100.gif)"
}
  if (count > 120 && count < 999) {
    document.getElementById("clickme").src="egg.png";
    document.body.style.backgroundImage = "url('')"
}
  if (count > 999 && count < 1010) {
    document.body.style.backgroundImage = "url('gifs/gif1000.gif')"
}
if (count > 1010) {
  document.body.style.backgroundImage = "url('')"
}

if (count > highscore) {
highscore = count;

  document.getElementById("highscore").innerHTML = highscore;
}
};



var button = document.getElementById("resetcount"),
count = 0;
button.onmousedown = function() {
  count = 0;
  document.getElementById("score").innerHTML = count;
}

var button = document.getElementById("resethigh"),
highscore = 0;
button.onmousedown = function() {
  highscore = 0;
  document.getElementById("highscore").innerHTML = highscore;
}


document.onclick = userClicked;
function userClicked() {
    var x = event.clientX;
    var y = event.clientY;
    var hitmarker = document.getElementById("hitmarker1");
    hitmarker.style.display = '';
    hitmarker.style.position = 'absolute';
    hitmarker.style.left = x - 135 + 'px';
    hitmarker.style.top = y - 145 + 'px';
};
