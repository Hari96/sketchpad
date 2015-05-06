$(document).ready(function(){
   makeGrid();
   

    $('button').click(function() {
    $('.inner').css("background", "blue");
    clearGrid();
    makeGrid();
    $('.inner').css("background", "yellow");    
   });

    
    function makeGrid() {
    var num = parseInt(prompt("Enter number of squares per side (<=120)"));
    if(num >120) {
        num = parseInt(prompt("Too many try again!"));
    }
    $('.inner').css("background", "yellow");
    var squaresize = (640/num) - 2;
    var size = num * num;
    for(var i = 1; i <= size; i++) {
    $('#grid').append('<div class="inner"></div>');
    }
    $('.inner').css("width", squaresize + "px");
    $('.inner').css("height", squaresize + "px");   
}

function clearGrid() {
    $('#grid').empty();
}
$(document).on('mouseover', '.inner', function() {
        $(this).css("background", "green");
    });
    
});
