canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
//variable declared

car_x = 10;
car_y = 30;
car_height = 90;
car_width = 100;
bg_img = "road.jpg";
car_img = "car.jpg";

function add() {
    backgroundimg_Tag = new Image(); 
    backgroundimg_Tag.onload = upload_bg ; 
    backgroundimg_Tag.src = bg_img; 

    carimg_Tag = new Image();
    carimg_Tag.onload = upload_car ; 
    carimg_Tag.src = car_img;
}

function upload_bg() {
    ctx.drawImage(backgroundimg_Tag, 0, 0, canvas.width, canvas.height);
}

function upload_car() {
    ctx.drawImage(carimg_Tag, car_x, car_y, car_width, car_height);

}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    var key_press = e.keyCode ; 

    if(key_press == "37") {
    left();   
    }

    if(key_press == "38") {
        up();
    }

    if(key_press == "39") {
        right();
    }

    if(key_press == "40") {
        down();
    }
}

function left() {
    if(car_x >= 0) {
        car_x = car_x - 10 ;
        upload_bg();
        upload_car();
    }
}

function right() {
    if(car_x <= 700) {
        car_x = car_x + 10 ;
        upload_bg();
        upload_car();
    }
}

function up() {
    if(car_y >= 0) {
        car_y = car_y - 10 ;
        upload_bg();
        upload_car();
    }
}

function down() {
    if(car_y <= 500) {
        car_y = car_y + 10 ;
        upload_bg();
        upload_car();
    }
}