const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(0)
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);
    /*if(hour>=12){
        text("Time : "+ hour + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",50,100);
       }else{
        text("Time : "+ hour + " AM", 50,100);
       }*/
       text("Time : "+ 05 + " AM", 50,100);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 0 && hour <= 2){
        bgImg = 'sunrise1.png'        
    }else if(hour >= 2 && hour <= 4){
        bgImg = 'sunrise2.png'
    }else if(hour >= 4 && hour <= 6){
        bgImg = 'sunrise3.png'
    }else if(hour >= 6 && hour <= 8){
        bgImg = 'sunrise4.png'
    }else if(hour >= 8 && hour <= 10){
        bgImg = 'sunrise5.png'
    }else if(hour >= 10 && hour <= 12){
        bgImg = 'sunrise6.png'
    }else if(hour >= 12 && hour <= 14){
        bgImg = 'sunset7.png'
    }else if(hour >= 16 && hour <= 18){
        bgImg = 'sunset8.png'
    }else if(hour >= 18 && hour <= 20){
        bgImg = 'sunset9.png'
    }else if(hour >= 20 && hour <= 22){
        bgImg = 'sunset10.png'
    }else if(hour >= 22 && hour == 0){
        bgImg = 'sunset11.png'
    }

    console.log(hour);
    backgroundImg = loadImage(bgImg);


}

