var gui;
let params = {
    r: 200
};


let socket;
let address = 'http://localhost'

var left_start = function (p) {

    console.log(p);
    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;
    let button_eql;


   
    p.setup = function () {

        socket = io();

        let div = p.createDiv();
        div.id("left_exp");
        
        
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        // Give your canvas a unique ID
        canvas.id('canvas1');
        canvas.parent('left_exp');
        document.getElementById('left_exp').hidden = true;

        
        p.background(128);
        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);
        var car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;
        // car_img.resize(car_width, car_height);
        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        origin = p.createVector(3 * p.windowWidth / 4, p.windowHeight / 2);
        p.image(car_img, origin.x, origin.y);
        // gui =createGui('Style').setPosition(width - 220, 20)
        
        gui = p.createGui(this, canvas);

        gui.id = 'guiLeft';
        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(3 * p.windowWidth/4 - gui_width /2, p.windowHeight - 50);
        // set canvas as parent of gui





        p.sliderRange(1, 500, 5);
        gui.addObject(params);
        
        // gui.parent('left_exp');

        // button_eql = p.createButton("✅");
        // button_eql.position(p.windowWidth/2   , p.windowHeight - 50).style('font-size', '20px', 'transform', 'translateY(-50%)', 'background-color', 'gray','position', 'absolute');
        

        // button_eql.mousePressed(p.esit);
        // button_eql.mousePressed(p.aa);
        p.noLoop();
        
    };

    p.esit = function () {
        socket.emit('esit', car_width * (params.r/100), car_height * (params.r/100));
    } 

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {

        if (p.mouseX > origin.x - car_width * 2 &&
            p.mouseX < origin.x + car_width * 2 &&
            p.mouseY > origin.y - car_height * 2 &&
            p.mouseY < origin.y + car_height * 2) {
            overBox = true;
        }
        else {
            overBox = false;
        }
        p.background(128);
        p.imageMode(p.CORNER);
        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        p.image(car_img, 3 * p.windowWidth / 4, p.windowHeight / 2, car_width * (params.r/100), car_height * (params.r/100));
    };
    var boxSize = 75;
    var overBox = false;
    var locked = false;

    p.mousePressed = function () {
        if (overBox) {
            locked = true;
        }
        else {
            locked = false;
        }
    };
  
    p.mouseReleased = function () {
        locked = false;
    };
};


var right_start = function (p) {
    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;

   
    p.setup = function () {

        socket = io();
        let div = p.createDiv();
        div.id("right_exp");
        
        
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        // Give your canvas a unique ID
        canvas.id('canvas2');
        canvas.parent('right_exp');

        

        p.background(128);
        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);
        var car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;
        // car_img.resize(car_width, car_height);
        p.image(base_img, p.windowWidth / 2, 0);
        p.imageMode(p.CENTER);
        origin = p.createVector(1 * p.windowWidth / 4, p.windowHeight / 2);
        p.image(car_img, origin.x, origin.y);
        // gui =createGui('Style').setPosition(width - 220, 20)
        
        gui = p.createGui(this, canvas);
        

        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(1 * p.windowWidth/4 - gui_width /2, p.windowHeight - 50);
        

       
        p.sliderRange(1, 500, 5);
        gui.addObject(params);

        // button_eql = p.createButton("✅");
        // button_eql.position(p.windowWidth/2   , p.windowHeight - 50).style('font-size', '20px', 'transform', 'translateY(-50%)', 'background-color', 'gray','position', 'absolute');
        
        // button_eql.mousePressed(p.esit);
        // button_eql.mousePressed(p.aa);
        p.noLoop();
        
    };

    p.esit = function () {
        socket.emit('esit', car_width * (params.r/100), car_height * (params.r/100));
    } 

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {

        if (p.mouseX > origin.x - car_width * 2 &&
            p.mouseX < origin.x + car_width * 2 &&
            p.mouseY > origin.y - car_height * 2 &&
            p.mouseY < origin.y + car_height * 2) {
            overBox = true;
        }
        else {
            overBox = false;
        }
        p.background(128);
        p.imageMode(p.CORNER);
        p.image(base_img, p.windowWidth / 2, 0);
        p.imageMode(p.CENTER);
        p.image(car_img, 1 * p.windowWidth / 4, p.windowHeight / 2, car_width * (params.r/100), car_height * (params.r/100));
    };
    var boxSize = 75;
    var overBox = false;
    var locked = false;

    p.mousePressed = function () {
        if (overBox) {
            locked = true;
        }
        else {
            locked = false;
        }
    };
  
    p.mouseReleased = function () {
        locked = false;
    };
};


