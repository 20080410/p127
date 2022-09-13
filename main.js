M1 = "music.mp3";
M2 = "music2.mp3";

function preload() {
    createCanvas(250,250);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}
