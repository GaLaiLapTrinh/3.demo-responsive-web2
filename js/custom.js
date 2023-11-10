/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	MAXI TEMPLATES
	Version     :	1.0
	Last Change : 	20/02/2018
	Primary Use :   MAXI TEMPLATES

=================================================================================================================================*/
$(document).on('ready', function() {
    "use strict"; //Start of Use Strict   
   
   //MENU SCROLL    
    var top_menu2 = $('#top-nav2');
    if (top_menu2.length) {
        var x = top_menu2.offset().top;
        if (x > 50) {
            top_menu2.fadeIn();
        } else {
            top_menu2.fadeOut();
        }
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 50) {
                top_menu2.fadeIn();
            } else {
                top_menu2.fadeOut();
            }
        });
    }   
    /* MENU SMOOTH SCROLL*/
    var menu2_list = $('.menu1-ul,.menu2-ul,.menu3-ul');
    if (menu2_list.length) {
        menu2_list.on("click", ".pagescroll", function(event) {
            event.stopPropagation();
            event.preventDefault();
            var hash_tag = $(this).attr('href');
            if ($(hash_tag).length) {
                $('html, body').animate({
                    scrollTop: $(hash_tag).offset().top - 50
                }, 2000);
            }
            return false;
        });
    }  
   
    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    var collapse = $('.navbar-collapse');
    var menu = $('.navbar-default li a')
    if (menu.length) {
        menu.on("click", function(event) {
            collapse.slideToggle();
        });
    }
    $('.navbar-default .navbar-toggle').on("click", function(e) {
        collapse.slideToggle();
    });    
    //COUNTER
    var counter = $('.count');
    if (counter.length) {
        counter.counterUp({
            delay: 10,
            time: 1000
        });
    }
    //GALLERY POPUP
    var gallery = $('.popup-gallery');
    if (gallery.length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }
    //CONTACT FORM VALIDATION	
    if ($('.form1-common').length) {
        $('.form1-common').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
                                $(form).find('.sucessMessage').html('Mail Sent Successfully !');
                                $(form).find('.sucessMessage').show();
                                $(form).find('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $(form).find('.failMessage').html(data);
                                $(form).find('.failMessage').show();
                                $(form).find('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $(form).find('.failMessage').html(textStatus);
                            $(form).find('.failMessage').show();
                            $(form).find('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }
    //ACCORDION
    var accordion = $(".accordion-row");
    if (accordion.length) {
        accordion.each(function() {
            var all_panels = $(this).find('.accordion-ans').hide();
            var all_titles = $(this).find('.accordion-title');
            $(this).find('.accordion-ans.active').slideDown();

            all_titles.on("click", function() {
                var acc_title = $(this);
                var acc_inner = acc_title.next();

                if (!acc_inner.hasClass('active')) {
                    all_panels.removeClass('active').slideUp();
                    acc_inner.addClass('active').slideDown();
                    all_titles.removeClass('active');
                    acc_title.addClass('active');
                } else {
                    all_panels.removeClass('active').slideUp();
                    all_titles.removeClass('active');
                }
            });
        }); 
       $(".accordion-row.col-sm-6 .faq-div:first-child .accordion-ans").css("display", "block");
	    $(".accordion8-row .col-md-6 .faq-div:first-child .accordion-ans").css("display", "block");
    }
    return false;
    // End of use strict
});