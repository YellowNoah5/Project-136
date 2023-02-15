status = ""

function setup()
{
    canvas = createCanvas(500, 500)
    canvas.position(715,400)

    vid = createCapture(VIDEO)
    vid.hide()
}

function preload()
{
    

 
}

function start()
{
    modl = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("statuss").innerHTML = "Status: Detecting Objects"
    inputxt = document.getElementById("inp").value
    console.log(inputxt)
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true
}

function draw() 
{
    image(vid, 0, 0, 500, 500)
}