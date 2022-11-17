var gui;
let params = {
    r: 200
};
let button_eql;

let socket;
let address = 'http://localhost'

var left_start = function (p) {
    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;

   
    p.setup = function () {

        socket = io();
        p.createCanvas(p.windowWidth, p.windowHeight);
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
        
        gui = p.createGui(this);
        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(3 * p.windowWidth/4 - gui_width /2, p.windowHeight - 50);

        console.log(gui);
        p.sliderRange(1, 500, 5);
        gui.addObject(params);

        button_eql = p.createButton("=");
        button_eql.position(p.windowWidth/2, p.windowHeight/2);
        button_eql.mousePressed(p.esit);
       

        // const slider = document.getElementsByClassName('qs_main')[0];
        // slider.style.position = 'absolute';
        // slider.style.left = (p.windowWidth - slider.style.width) + 'px';

        // console.log(slider.style.left);

        p.noLoop();
        
    };

    p.esit = function () {
        console.log(car_width * (params.r/100));
        console.log(car_height * (params.r/100));

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
    // p.mouseDragged = function (drag) {
    //     if (locked) {
    //         var origin_to_mouse = p.createVector(p.mouseX - origin.x, p.mouseY - origin.y);
    //         movement = origin_to_mouse.mag() / car_img.height;
    //         movement = p.sin(origin.angleBetween(p.createVector(1, 0))) * movement;
    //     }
    // };
    p.mouseReleased = function () {
        locked = false;
    };
};
//# sourceMappingURL=build.js.map