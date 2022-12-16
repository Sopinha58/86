
var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL("Birthdayimage.jpg", function(Img){
        blocImageObject=Img;
        blocImageObject.scaleToWidth(700);
        blocImageObject.scaleToHeight(510);
        blocImageObject.set({top:0, left:0});
        canvas.add(blocImageObject);
    });
	
}

function playSound(){
	x.play();
}