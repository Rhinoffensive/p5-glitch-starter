var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.getColorVector = function (c) {
        return createVector(red(c), green(c), blue(c));
    };
    ColorHelper.rainbowColorBase = function () {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    };
    ColorHelper.getColorsArray = function (total, baseColorArray) {
        var _this = this;
        if (baseColorArray === void 0) { baseColorArray = null; }
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(function (x) { return _this.getColorVector(x); });
        ;
        var colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    };
    ColorHelper.getColorByPercentage = function (firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    };
    return ColorHelper;
}());
var PolygonHelper = (function () {
    function PolygonHelper() {
    }
    PolygonHelper.draw = function (numberOfSides, width) {
        push();
        var angle = TWO_PI / numberOfSides;
        var radius = width / 2;
        beginShape();
        for (var a = 0; a < TWO_PI; a += angle) {
            var sx = cos(a) * radius;
            var sy = sin(a) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    };
    return PolygonHelper;
}());
var left_start = function (p) {
    var x = 100;
    var y = 100;
    var base_img;
    var car_img;
    var car_width, car_height;
    var origin;
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(128);
        base_img.resize(p.windowWidth / 2, p.windowWidth / 2);
        var car_ratio = car_img.width / car_img.height;
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
    };
    var firstPoint;
    var lastPoint;
    var movement = 0;
    p.draw = function () {
        if (p.mouseX > origin.x - car_width / 2 &&
            p.mouseX < origin.x + car_width / 2 &&
            p.mouseY > origin.y - car_height / 2 &&
            p.mouseY < origin.y + car_height / 2) {
            overBox = true;
        }
        else {
            overBox = false;
        }
        p.background(128);
        p.imageMode(p.CORNER);
        p.image(base_img, 0, 0);
        p.imageMode(p.CENTER);
        p.image(car_img, 3 * p.windowWidth / 4, p.windowHeight / 2, car_width * (movement), car_height * (movement));
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
    p.mouseDragged = function (drag) {
        if (locked) {
            var origin_to_mouse = p.createVector(p.mouseX - origin.x, p.mouseY - origin.y);
            movement = origin_to_mouse.mag() / car_img.height;
            movement = p.sin(origin.angleBetween(p.createVector(1, 0))) * movement;
        }
    };
    p.mouseReleased = function () {
        locked = false;
    };
};
//# sourceMappingURL=build.js.map