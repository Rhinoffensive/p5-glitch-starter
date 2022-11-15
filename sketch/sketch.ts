

const left_start = (p: p5) => {

    let x = 100;
    let y = 100;

    let base_img: p5.Image;
    let car_img: p5.Image;

    let car_width: number, car_height: number;
    let origin: p5.Vector;
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(128);

        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);

        let car_ratio = car_img.width / car_img.height;
        car_width = p.windowWidth / 10;
        car_height = car_width / car_ratio;

        car_img.resize(car_width, car_height);


        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        origin = p.createVector(3 * p.windowWidth / 4, p.windowHeight / 2);

        p.image(car_img, origin.x, origin.y);

    };

    p.preload = function () {
        base_img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        car_img = p.loadImage('assets/car.png');
    }
    let firstPoint: p5.Vector;
    let lastPoint: p5.Vector;
    let movement = 0;
    p.draw = function () {

        if (
            p.mouseX > origin.x - car_width / 2 &&
            p.mouseX < origin.x + car_width / 2 &&
            p.mouseY > origin.y - car_height / 2 &&
            p.mouseY < origin.y + car_height / 2
        ) {
            overBox = true;
        } else {
            overBox = false;
        }
        p.background(128);
        p.imageMode(p.CORNER);
        p.image(base_img, 0, 0);

        // car_img.resize(mouse_to_origin_unit.mag() * car_width, mouse_to_origin_unit.mag() * car_height);


        // p.imageMode(p.CENTER);

        // p.image(car_img, 3 * p.windowWidth / 4, p.windowHeight / 2);




        p.imageMode(p.CENTER);
        // car_img.resize(car_width * (1-movement) , car_height * (1-movement));
        // p.scale((1 + movement.x * 10));


        p.image(car_img, 3 * p.windowWidth / 4, p.windowHeight / 2, car_width * ( movement), car_height * (movement));


    }
   
    let boxSize = 75;
    let overBox = false;
    let locked = false;
 

    p.mousePressed = function () {
        if (overBox) {
            locked = true;
        } else {
            locked = false;
        }
       
    }

    p.mouseDragged = function (drag:MouseEvent) {
        if (locked) {

           let origin_to_mouse = p.createVector(p.mouseX - origin.x, p.mouseY - origin.y);
           movement = origin_to_mouse.mag() / car_img.height;
           movement = p.sin(origin.angleBetween(p.createVector(1,0))) * movement;
            


            // car_img.resize(mouse_to_origin_unit.mag() * car_width, mouse_to_origin_unit.mag() * car_height);
            // p.image(car_img, 3 * p.windowWidth / 4, p.windowHeight / 2, car_width * (1 - movement), car_height * (1 - movement));
        }
    }

    p.mouseReleased = function () {
        locked = false;
    }

    // p.keyPressed = function () {
    //     if (p.keyCode == 65) {

    //         movement-= 0.01;
    //     } else if(p.keyCode == 83)  {
    //         movement += 0.01;
    //     }
    // }



    // p.mousePressed = function (mouse: MouseEvent) {

    //     firstPoint = p.createVector(mouse.x, mouse.y);
    // }




    // p.mouseDragged = function (drag: MouseEvent) {
    //     lastPoint = p.createVector(drag.x, drag.y);
    //     movement = lastPoint.sub(firstPoint).normalize();
    //     console.log(movement.x);
    //     // p.scale((1 + movement.x));

    //     // car_img.resize(car_width * (1 + movement.x), car_height * (1 + movement.x));
    //     // let origin_to_mouse = mouse.sub(origin);
    // }

    // p.draw = function () {
    //   p.background(0);
    //   p.fill(255);
    //   p.rect(x, y, 50, 50);
    // };
};




