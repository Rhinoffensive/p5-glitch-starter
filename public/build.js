var gui;
let params = {
    r: 200
};

//car 1134 x 1291
//base 5228 x 5228
const car2image_ratio_x = 1134 / 5228;
const car2image_ratio_y = 1291 / 5228;

let left_result = {};
let right_result = {};
let left_reverse_result = {};
let right_reverse_result = {};

var left_start = function (p) {
    let experiment = "LeftUP";


    left_result.experiment = experiment;
    left_result.user_car_size = [];

    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;

    var base_img_width, base_img_height;


    p.setSliderRandom = function () {
        // Set Params to random values between 1, 500 multiply of 5
        params.r = p.random(1, 100) * 5;
        p.draw();
    }




    p.setup = function () {

        const button = document.querySelector('#toggle_button');
        button.style.display = "block";
        button.hidden = false;

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
        base_img_height = base_img.height;
        base_img_width = base_img.width;

        left_result.base_size = [base_img_width, base_img_height];
        left_result.base_car_size = [base_img_width * car2image_ratio_x, base_img_height * car2image_ratio_y];


        var car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;

        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        origin = p.createVector(3 * p.windowWidth / 4, p.windowHeight / 2);
        p.image(car_img, origin.x, origin.y);


        gui = p.createGui(this, canvas);

        gui.id = 'guiLeft';
        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(3 * p.windowWidth / 4 - gui_width / 2, p.windowHeight - 50);



        p.sliderRange(1, 500, 1);
        gui.addObject(params);

        p.noLoop();

    };

    p.esit = function () {
        left_result.user_car_size.push([car_width * (params.r / 100), car_height * (params.r / 100)]);

        // test_data.data.push(car_width * (params.r/100));
        // socket.emit('esit', car_width * (params.r/100), car_height * (params.r/100));
        // console.log("ffff" + car_height * (params.r/100));

    }

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {
        document.getElementById('loading_text').style.display = 'none';
        p.background(128);
        p.imageMode(p.CORNER);
        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        p.image(car_img, 3 * p.windowWidth / 4, p.windowHeight / 2, car_width * (params.r / 100), car_height * (params.r / 100));

    };

};


var left_reverse_start = function (p) {
    let experiment = "LeftDOWN";

    left_reverse_result.experiment = experiment;
    left_reverse_result.user_car_size = [];

    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;

    var base_img_width, base_img_height;


    p.setSliderRandom = function () {
        // Set Params to random values between 1, 500 multiply of 5
        params.r = p.random(1, 100) * 5;
        p.draw();
    }


    p.setup = function () {

        const button = document.querySelector('#toggle_button');
        button.style.display = "block";
        button.hidden = false;

        socket = io();

        let div = p.createDiv();
        div.id("left_reverse_exp");

        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        // Give your canvas a unique ID
        canvas.id('canvas1');
        canvas.parent('left_reverse_exp');
        document.getElementById('left_reverse_exp').hidden = true;

        p.background(128);
        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);
        base_img_height = base_img.height;
        base_img_width = base_img.width;

        left_reverse_result.base_size = [base_img_width, base_img_height];
        left_reverse_result.base_car_size = [base_img_width * car2image_ratio_x, base_img_height * car2image_ratio_y];


        var car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;
        console.log("Left Reverse Experiment",car_width, car_height);


        // p.push();
        // p.translate(0, p.windowHeight);
        // p.scale(-1, -1);

        // p.image(base_img, 0, 0);
        // p.imageMode(p.CENTER);
        // p.pop();

        // origin = p.createVector(3 * p.windowWidth / 4, p.windowHeight / 2);
        // p.image(car_img, origin.x, origin.y);



        gui = p.createGui(this, canvas);

        gui.id = 'guiReverseLeft';
        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(3 * p.windowWidth / 4 - gui_width / 2, p.windowHeight - 50);


        p.sliderRange(1, 500, 1);
        gui.addObject(params);

        p.noLoop();

    };

    p.esit = function () {
        left_reverse_result.user_car_size.push([car_width * (params.r / 100), car_height * (params.r / 100)]);

        // test_data.data.push(car_width * (params.r/100));
        // socket.emit('esit', car_width * (params.r/100), car_height * (params.r/100));
        // console.log("ffff" + car_height * (params.r/100));

    }

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {
        document.getElementById('loading_text').style.display = 'none';
        p.background(128);

        p.push();
        p.translate(base_img_width / 2, base_img_height / 2);
        p.scale(1, -1);
        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        p.pop();

        p.imageMode(p.CENTER);
        p.push(); // Save the current transformation state
        p.translate(3 * p.windowWidth / 4, p.windowHeight / 2); // Move to the desired position
        p.scale(1, -1); // Apply the negative scale on the y-axis
        p.image(car_img, 0, 0, car_width * (params.r / 100), car_height * (params.r / 100)); // Draw the image at the new position and scale
        p.pop(); // Restore the transformation state
    };

};

var right_start = function (p) {

    let experiment = "RightUP";

    right_result.experiment = experiment;
    right_result.user_car_size = [];

    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;


    p.setSliderRandom = function () {
        // Set Params to random values between 1, 500 multiply of 5
        params.r = p.floor(p.random(1, 100)) * 5 + 1;
        p.draw();
    }


    p.setup = function () {
        const button = document.querySelector('#toggle_button');
        button.style.display = "block";
        button.hidden = false;

        socket = io();
        let div = p.createDiv();
        div.id("right_exp");


        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        // Give your canvas a unique ID
        canvas.id('canvas2');
        canvas.parent('right_exp');



        p.background(128);
        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);
        base_img_height = base_img.height;
        base_img_width = base_img.width;

        right_result.base_size = [base_img_width, base_img_height];
        right_result.base_car_size = [base_img_width * car2image_ratio_x, base_img_height * car2image_ratio_y];

        var car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;
        // car_img.resize(car_width, car_height);
        // p.image(base_img, p.windowWidth / 2, 0);
        // p.imageMode(p.CENTER);
        // origin = p.createVector(1 * p.windowWidth / 4, p.windowHeight / 2);
        // p.image(car_img, origin.x, origin.y);
        // gui =createGui('Style').setPosition(width - 220, 20)

        gui = p.createGui(this, canvas);

        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(1 * p.windowWidth / 4 - gui_width / 2, p.windowHeight - 50);

        p.sliderRange(1, 500, 1);
        gui.addObject(params);

        p.noLoop();

    };

    p.esit = function () {
        right_result.user_car_size.push([car_width * (params.r / 100), car_height * (params.r / 100)]);
        // test_data.data.push(car_width * (params.r/100));
        // socket.emit('esit', car_width * (params.r/100), car_height * (params.r/100));
    }

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {
        document.getElementById('loading_text').style.display = 'none';
        p.background(128);
        p.imageMode(p.CORNER);
        p.image(base_img, p.windowWidth / 2, 0);
        p.imageMode(p.CENTER);
        p.image(car_img, 1 * p.windowWidth / 4, p.windowHeight / 2, car_width * (params.r / 100), car_height * (params.r / 100));
    };

};


var right_reverse_start = function (p) {

    let experiment = "RightDOWN";

    right_reverse_result.experiment = experiment;
    right_reverse_result.user_car_size = [];

    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;


    p.setSliderRandom = function () {
        // Set Params to random values between 1, 500 multiply of 5
        params.r = p.floor(p.random(1, 100)) * 5 + 1;
        p.draw();
    }


    p.setup = function () {
        const button = document.querySelector('#toggle_button');
        button.style.display = "block";
        button.hidden = false;

        socket = io();
        let div = p.createDiv();
        div.id("right_reverse_exp");


        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        // Give your canvas a unique ID
        canvas.id('canvas2');
        canvas.parent('right_reverse_exp');



        p.background(128);
        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);
        base_img_height = base_img.height;
        base_img_width = base_img.width;

        right_reverse_result.base_size = [base_img_width, base_img_height];
        right_reverse_result.base_car_size = [base_img_width * car2image_ratio_x, base_img_height * car2image_ratio_y];

        var car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;
        // car_img.resize(car_width, car_height);
        console.log("Right Reverse Experiment",car_width, car_height);

        gui = p.createGui(this, canvas);

        let gui_width = document.getElementsByClassName('qs_main')[0].offsetWidth;
        gui.setPosition(1 * p.windowWidth / 4 - gui_width / 2, p.windowHeight - 50);

        p.sliderRange(1, 500, 1);
        gui.addObject(params);

        p.noLoop();

    };

    p.esit = function () {
        right_reverse_result.user_car_size.push([car_width * (params.r / 100), car_height * (params.r / 100)]);
        // test_data.data.push(car_width * (params.r/100));
        // socket.emit('esit', car_width * (params.r/100), car_height * (params.r/100));
    }

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {
        document.getElementById('loading_text').style.display = 'none';
        p.background(128);

        // Base Image
        p.push(); // Save the current transformation state
        p.imageMode(p.CENTER);
        p.translate(p.windowWidth / 2 + base_img_width/2, base_img_height/2); // Move to the desired position
        
        p.scale(1, -1); // Apply the negative scale on the y-axis
        p.image(base_img, 0, 0); // Draw the image at the new position and scale
        p.pop(); // Restore the transformation state

        // Car Image
        p.push(); // Save the current transformation state
        p.translate(1 * p.windowWidth / 4, p.windowHeight / 2); // Move to the desired position
        p.scale(1, -1); // Apply the negative scale on the y-axis
        p.imageMode(p.CENTER);
        p.image(car_img, 0, 0, car_width * (params.r / 100), car_height * (params.r / 100)); // Draw the image at the new position and scale
        p.pop(); // Restore the transformation state

    };

};



