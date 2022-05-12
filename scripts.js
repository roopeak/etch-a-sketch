// Function creates 16x16 grid.
function makeGrid() {
    for (let rows = 0; rows <= 16; rows++) {
        for (let columns = 0; columns <= 16; columns++)
            $('.container').append("<div class='square'></div>")
    }
    $('.grid').width(480/x);
    $('.grid').height(480/x);


}