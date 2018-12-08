
function Blast() {
  
  
    this.img = loadImage('images/k2.jpg');
  
  
  this.xL = (width/2)-(img.width/2)
  this.yL = height
  this.ySpeedL = random(3,5)
  this.xSpeedL = random(1,3)
  this.tSize= 16
  this.selectHeart = width/2

  
   this.xR = width/2
  this.yR = height
  this.ySpeedR = random(3,5)
  this.xSpeedR = random(1,3)
  
  
  this.crack = function(){
   
     //this.ySpeedL = map(mouseY,0,height,3,10)
     // this.tSize = map(mouseX,0,width,16,32)
     //   this.selectHeart = map(mouseX,0,width,16,32)

    
    this.yL = this.yL - this.ySpeedL
    this.xL = this.xL - this.xSpeedL
    
     this.yR = this.yR - this.ySpeedR
    this.xR = this.xR + this.xSpeedR
    
     if(this.xL<0){
       this.yL = height
     this.xL= (width/2)-(img.width/2)
      
    }
    if(this.xR>width){
      this.xR=width/2
      this.yR = height
    }
    
    
    
    
  }
  
  this.crackRight = function(){
   
     this.ySpeedL = map(mouseY,0,height,3,10)
      
    
    this.yL = this.yL - this.ySpeedL
    this.xL = this.xL - this.xSpeedL
    
    
   
  }
  
  this.showLeft = function(){
    
    stroke(255)
    strokeWeight(10)
    //point(this.xL,this.yL)
    point(this.xR,this.yR)
   
    //image(this.img,this.x,this.y)
   
  }
  
  
  
  
  
  this.show = function(){
    
    stroke(255)
    strokeWeight(10)
    //point(this.xL,this.yL)
    //  point(this.xR,this.yR)
    image(this.img,this.xL,this.yL)
    image(this.img,this.xR,this.yR)
   
  }
  
  this.emoji = function(){
   textSize(this.tSize)
 
 
    //blue
   text("💙",this.x,Lthis.y)
   

 
    
    
  }
  
  
  
  
}
