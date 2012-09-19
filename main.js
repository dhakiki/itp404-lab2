//$('.fancybox').lightBox();

(function($) {
	
	 var clicked=0;
	 // console.log(clicked);
	 //$('.like-count').replaceWith('1'); playing around with these functions
	 //console.log($('.like-count').html())
	 // clicked=parseInt($('.like-count').html());
	 // console.log(clicked);
	 // clicked=clicked+1;
	 // console.log(clicked);
	 // console.log($('.like').html());
	 // $this.('.like').replaceWith('<a href="#" class="liked">Liked</a>');
	 // console.log($('.liked').html());
	 $('#gallery').on('click', '.like', function() {
	 	var $this= $(this);
	 	clicked=parseInt($('.like-count').html())+1;
	 	$('.like-count').text(clicked);
	 	$this.parent().addClass('highlight');
	 	$this.replaceWith('<a href="#" class="liked">Liked</a>');
	 })	;
})(jQuery);	 
	// $('gallery').on('click', '.like', function() {
	// 	var $this=$(this);
	// 		$this.parent().addClass('.highlight');
	// 	clicked = parseInt($('.like-count'))+1;
	// 	console.log(clicked);
	// 	$('.like-count').text(clicked);
	// 	$this.replaceWith('<a class="liked">Liked!!</a>');


	// } );
	// //$('div.second').replaceWith('<h2>New heading</h2>');




	