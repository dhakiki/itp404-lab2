//$('.fancybox').lightBox();

(function($) {
	
	 var clicked=0;
    
	 $('#gallery').on('click', '.like', function() {
	 	var $this= $(this);
	 	clicked=parseInt($('.like-count').html())+1;
	 	$('.like-count').text(clicked);
	 	$this.parent().addClass('highlight');
	 	$this.replaceWith('<a href="#" class="liked">Liked</a>');
	 })	;
})(jQuery);	 
	



	