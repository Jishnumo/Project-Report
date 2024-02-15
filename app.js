document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video");
  var playpausebtn = document.getElementById("playpausebtn");
  var mutebtn = document.getElementById("mutebtn");
  var fullscreenbtn = document.getElementById("fullscreenbtn");

  playpausebtn.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });

  mutebtn.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  });

  fullscreenbtn.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE/Edge */
      video.msRequestFullscreen();
    }
  });
});
