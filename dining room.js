status="";
img="";
objects=[];


 function preload(){
     img=loadImage('dining room.jpg');

 }

 function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modalLoaded);
document.getElementById('status').innerHTML="Status : Detecting Objects";
}

function modalLoaded(){
console.log("Modal is loaded") ;
status=true;
objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    }
function draw(){
    image(img,0,0,640,420);
    if (status != "") {
        for(i=0;i<objects.length;i++)
        {
            document.getElementById('status').innerHTML = "Status : object detected";
            fill("red");
            percentage=Math.floor(objects[i].confidence*100)
            text(objects[i].label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15 )
            noFill()
            stroke("red")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }

    }
}