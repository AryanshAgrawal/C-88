var canvas = new fabric.Canvas("myCanvas");
blockheight = 30;
blockwidth = 30;
player_x = 10;
player_y = 10;
var playerobject = "";
function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: player_y,
            left: player_x
        });
        canvas.add(playerobject);

    });
}
function newimage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blockobject);

    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80') {
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10;
        document.getElementById("currentwidth").innerHTML = blockwidth;
        document.getElementById("currentheight").innerHTML = blockheight;
        console.log("shift+p");
    }
    if (e.shiftKey == true && keypressed == '77') {
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("currentwidth").innerHTML = blockwidth;
        document.getElementById("currentheight").innerHTML = blockheight;
        console.log("shift+m");
    }
    if (keypressed == '37') {
        console.log("left");
        left();
    }
    if (keypressed == '40') {
        console.log("down");
        down();
    }
    if (keypressed == '38') {
        console.log("up");
        up();
    }
    if (keypressed == '39') {
        console.log("right");
        right();
    }
    if (keypressed == '87') {
        console.log("w");
        newimage('wall.jpg');
    }
    if (keypressed == '71') {
        console.log("g");
        newimage('ground.png');
    }
    if (keypressed == '76') {
        console.log("m");
        newimage('light_green.png');
    }
    if (keypressed == '84') {
        console.log("t");
        newimage('trunk.jpg');
    }
    if (keypressed == '82') {
        console.log("r");
        newimage('roof.jpg');
    }
    if (keypressed == '89') {
        console.log("y");
        newimage('yellow_wall.png');
    }
    if (keypressed == '68') {
        console.log("d");
        newimage('dark_green.png');
    }
    if (keypressed == '85') {
        console.log("u");
        newimage('unique.png');
    }
    if (keypressed == '67') {
        console.log("c");
        newimage('cloud.jpg');
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - blockheight;
        console.log("blockheight=" + blockheight);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + blockheight;
        console.log("blockheight=" + blockheight);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function right(){
    if (player_x <= 850) {
        player_x = player_x + blockwidth;
        console.log("blockwidth=" + blockwidth);
        canvas.remove(playerobject);
        playerupdate();
}}
function left(){
    if (player_x >= 0) {
        player_x = player_x - blockwidth;
        console.log("blockwidth=" + blockwidth);
        canvas.remove(playerobject);
        playerupdate();
    }}


