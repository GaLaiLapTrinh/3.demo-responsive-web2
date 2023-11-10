$(document).on('ready', function() {
    jQuery('#styleswitch').styleSwitcher();
	/* Function show-hide settings Div */
    jQuery('#settings').on("click",function() {		
		if (jQuery(this).parent().css('left') == '-280px') {
			jQuery(this).parent().animate({
				"left": "0"
			}, 300);
		$('.skin-options span').addClass('shake');	
		} else {
			jQuery(this).parent().animate({
				"left": "-280px"
			}, 300);
			$('.skin-options span').removeClass('shake');
		}
	});
    /* Function swith stylesheet */
    $('.skins').on("click",function() {		 
         var colorName = $(this).attr('href');	
	     var stylesheet =  '<link rel="stylesheet" href="css/custom/style_'+colorName+'.css" class="skincss">';				
         $('head').append(stylesheet); 
         return false;		 
    });
});