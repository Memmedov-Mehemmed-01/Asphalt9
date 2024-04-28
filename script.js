// script codes

var background = document.querySelector(".background");
var cubes = document.querySelectorAll(".cube");
var content = document.querySelector(".content")

for (const cubeimg of cubes) {
  var cubeImg = document.createElement("img");
  cubeImg.src = "./assets/map.webp";
  cubeimg.appendChild(cubeImg);
}

var outcube = document.querySelectorAll(".outcube");
var fon = new Audio(); // Instantiate the Audio object first
fon.loop = true;
fon.volume = 0.2;
fon.src ="./music/Asphalt 9 City by the bay 1-02.4 [599xEvo].mp3";
let soundtrack = new Audio(
  "./music/Asphalt 9_ Railroad Bustle - San Francisco - Touchdrive Guide (mp3cut.net).mp3"
);
soundtrack.volume = 4
var video = document.querySelector(".background-video")
video.pause()
function playMusic() {
  soundtrack.play();
  for (const cube of cubes) {
    cube.classList.add("transparent");
  }
  setTimeout(() => {
    background.classList.add("transparent");
  }, 1200);

  setTimeout(() => {
    fon.play();
    video.play()
  }, 900);

  setTimeout(() => {
    for (const out of outcube) {
      out.classList.add("noneBorder");
    }
  }, 2500);

  content.classList.add("transparent");
}
