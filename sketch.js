$(document).ready(function(){
    
   $('button#set').click(function() {
     col = prompt("Choose Red(R), Green(G) or Yellow(Y)") ; 
     if(col == "R" || col == "r") {
       col = "red";
   }
     else if(col == "G" || col == "g") {
      col = "green";
   }
     else if(col == "Y" || col == "y") {
      col = "yellow";
   }
     else {
      alert("Wrong colour - choose one of 3 colours");
   }   
   makeGrid();
   });
    $('button#clear').click(function() {
    $('#grid').css("background", "#222");
    clearGrid();
       
   });

    
function makeGrid() {
    clearGrid();
    $('#grid').css("background", "#ccc");
    var num = 124;
    while(num > 120) {
      var num = parseInt(prompt("Enter number of squares per side (<=120)"));
        if(num >120) {
          num = parseInt(prompt("Too many try again!"));
         }
    }
    var squaresize = (640/num);
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
        $(this).css("background", col);
    });
    
});
