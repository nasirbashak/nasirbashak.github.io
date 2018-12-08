
var s
var i

// Set the date we're counting down to
var countDownDate 
var days
var hours
var minutes
var seconds
var hu
var img;

var blasts =[]



function preload() {
  img = loadImage('images/k2.jpg');
}

function setup() {
 createCanvas(13.7*width,6.5*height);
 //fullscreen(true)
 
 for(var i =0;i<10;i++){
   blasts[i]= new Blast()
 }
 
 
   background(0)
   //image(img,0,0)
   colorMode(HSB)
   this.i = 0;
   this.hu=0
   this.countDownDate = new Date("Dec 9, 2018 00:00:00").getTime();
   
   var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.getElementById("demo").innerHTML = this.days + "d " + this.hours + "h "
  //+ this.minutes + "m " + this.seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
   
}


function draw() {
  //frameRate(1)
  
  background(this.hu=hu+0.5,255,255)
  //image(img,(width/2)-(img.width/2),50)
  //print(hu)
  //print(width+" "+height  )
  //background(0)
  if(this.hu>255){
    this.hu=0
  }
  
  for(var i =0;i<blasts.length;i++){
   blasts[i].crack();
   blasts[i].show();
 }
  
  
  

  stroke(255,255,hu++)
  strokeWeight(1)
  textSize(50)
  
  
  var time = this.days + "d " + this.hours + "h "
  + this.minutes + "m " + this.seconds + "s "
  text(time,(width/2)-time.length-125,height/2)
  textSize(40)
  //strokeWeight(20)
  noStroke()
  fill(255)
  text("to go.....be ready for blast!!!!",(width/2)-time.length-235,(height/2)+100)
  
  
}
