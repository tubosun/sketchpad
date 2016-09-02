$(document).ready(function(){
	function grid(num){
	for (var i=0;i<num;i++){
	 for (var r=0;r<num;r++){
$('#container').append('<div class="sq" />');
	}
	}
	
$('.sq').css('height', 800 /num );
$('.sq').css('width', 800 /num);
 
 
 };
 $('#refresh').click(function(){
	 $('.sq').remove();
		 grid(16)
	});
 
  $('#no').click(function(){
	 $('.sq').remove();
	 var squares=prompt('How many squares? (between 1 and 120)');
	 grid(squares)
	});

	$('#colors').click(function(){
		 $('.sq').mouseenter(function(){
		
		var background='#'+Math.floor(Math.random()*16777215).toString(16);
			$(this).css('background-color',background);
			
	 });
	});
});

