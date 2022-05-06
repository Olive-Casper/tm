function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(500, 500);
    canvas.position(900, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("model is initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background("grey");
}