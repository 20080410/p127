M1 = "music.mp3";
M2 = "music2.mp3";
leftwristx = 0;
rightwristy = 0;
leftwristy = 0;
rightwristx = 0;
function preload() {
    song = loadSound(M1);
    song = loadSound(M2);
}
function preload() {
    createCanvas(250,250);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}
