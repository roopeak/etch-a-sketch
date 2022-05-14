// Function creates 16x16 grid.
function makeGrid() {
    for (let i = 0; i <= 16; i++) {
        for (let j = 0; j <= 16; j++)
            $("#container").append("<div class='grid'></div>")
    }
    $('.grid').width(480/16);
    $('.grid').height(480/16);


}