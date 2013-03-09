$(document).ready(function() {

   $('.blue').mouseenter(function() {
       	$(this).animate({
           height: '+=10px'
       	});
   });


   $('.main_img').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
	$(this).fadeTo('fast',1);
   });


   $('.blue').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });


   $('.main_img').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
	$(this).fadeTo('fast',0.5);
   });


$('#blue_me').mouseenter(function() {
	$('#link_info').fadeTo('fast',1);
	$('#link_info').text('me');	
   });


   $('#blue_me').mouseleave(function() {
	$('#link_info').fadeTo('fast',0);
   });

  $('#blue_cv').mouseenter(function() {
	$('#link_info').fadeTo('fast',1);
	$('#link_info').text('cv');
   });


   $('#blue_cv').mouseleave(function() {
	$('#link_info').fadeTo('fast',0);
   });


});