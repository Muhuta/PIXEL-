// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let gridHeight = 0;
let gridWidth = 0;

function makeGrid() {
	mytable = $('<table></table>').attr({ id: "basicTable" });
	for (let i = 0; i < gridWidth; i++) {
		let row = $('<tr></tr>').attr({ class: ["cell", "class2", "class3"].join(' ') }).appendTo(mytable);
		for (let j = 0; j < gridHeight; j++) {
			$('<td></td>').appendTo(row); 
			$('td').attr('class','cell');
		}
		 		 
	}
	mytable.appendTo("#box");	    
	

}


//size input

$('#submit').click(function (e){
	e.preventDefault();
	 gridHeight= parseInt($('#input_height').val());
	gridWidth = parseInt($('#input_width').val());
makeGrid();

	
});

//color picking

$('#box').on('click',function (evt){
	var color;
		color = $("#colorPicker").val();
		$('.cell').attr('bgcolor', color);
});

//when submitted

$('#submitQuery').click(function(evt) {
  event.preventDefault();
  makeGrid();
});
