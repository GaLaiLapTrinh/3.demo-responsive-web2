// JavaScript Document
$(document).on('ready', function() {
	
   var owl = $(".owl-carousel,.owl-demo7");
     
      owl.owlCarousel({
		loop: true, 
		pagination: false,
		autoPlay: 5000,
        itemsCustom : [
        [0, 1],
        [600, 2],
        [700, 2],
        [1000, 3],
        [1200, 3],
        [1400, 3],
        [1600,3]
      ]
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
	  
		
	    var owl = $(".testimonial-slider");
     
      owl.owlCarousel({
		loop: true, 
		pagination: false,
		autoPlay: 5000,
        itemsCustom : [
        [0, 1],
		[500, 1],
        [600, 1],
        [700,1],
        [1000, 1],
        [1200,1],
        [1400, 1],
        [1600,1]
      ]
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
	  
	  
	   var owl = $(".client-logo");
     
      owl.owlCarousel({
		loop: true, 
		pagination: false,
		autoPlay: 5000,
        itemsCustom : [
        [0, 1],
		[500, 2],
        [600, 2],
        [700,3],
        [1000, 4],
        [1200,5],
        [1400, 5],
        [1600,5]
      ]
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
      })
      $(".stop").click(function(){
        owl.trigger('owl.stop');
      })
	  
});
