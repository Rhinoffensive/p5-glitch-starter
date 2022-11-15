
    const s = (p) => {

        let x = 100;
        let y = 100;
  
        let img;
        p.setup = function () {
          p.createCanvas(p.windowWidth, p.windowHeight);
          // get lower dimension of window
          let dim_min = p.min(p.windowWidth, p.windowHeight);
          let dim_max = p.max(p.windowWidth, p.windowHeight);
  
  
  
          p.background(128);
          img.resize(dim_min, dim_min);
  
  
  
          p.image(img, p.windowWidth / 2 - dim_min / 2, p.windowHeight / 2 - dim_min / 2);
        };
        
  
        p.preload = function () {
          img = p.loadImage('assets/BackCar_Intact_upright.jpg');
        }
        // p.draw = function () {
        //   p.background(0);
        //   p.fill(255);
        //   p.rect(x, y, 50, 50);
        // };
      };
  
  
  
  
      // Full screen button: Set the example to fullscreen.
      const fullscreen_btn = document.querySelector('#fullscreen_button');
      fullscreen_btn.addEventListener('click', () => {
        
  
        const container = document.querySelector("#example_container");
        container.requestFullscreen().catch((error) => {
        });
        screen.orientation.lock("landscape");
        fullscreen_btn.hidden = true;
        let myp5 = new p5(s, 'example_container');
  
  
  
  
  
  
  
  
      });