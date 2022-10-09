canvas = document.getElementById("myCanvas")
ctx = can.getContext('2D')



green_car_width = 75;
green_car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

green_car_x = 5;
green_car_y = 255;

function add() {
	background_imgTag = new Image();
	green_car_imageTag = uploadgreencar;
	green_car_image_tag.src= "car2.png"
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

	ctx.drawImage(green_car_imageTag, green_car_x, green_car_y, green_car_width, green_car_height);

}

function uploadgreencar() {
	
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

	ctx.drawImage(green_car_imageTag, green_car_x, green_car_y, green_car_width, green_car_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (rover_y >= 0){
    rover_y = rover_y - 10;
    uploadBackground();
    uploadrover();
}

function down()
{
	if (rover_y <= 500){
		rover_y = rover_y + 10;
		uploadBackground();
		uploadrover();
}

function left()
{
	if (rover_x >= 0){
		rover_x = rover_x - 10;
		uploadBackground();
		uploadrover();
}

function right()
{
	if (rover_x <= 0){
		rover_x = rover_x + 10;
		uploadBackground();
		uploadrover();
}
