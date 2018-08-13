$(document).ready(function () {
    $(document).on('sectionActive', function() {
        /*if ($(window).width() > 767) { 
            $('.title-1').each(function() {
                $(this).css("height", $(window).height());
            })
            $('.title-2').each(function() {
                $(this).css("height", $(window).height());
            })
        }*/
        
        if ($(window).width() > 767) {
            $('.introduction.active .intro-img').addClass('show'); 
            
            $('.introduction.active i').each(function() {
               $(this).addClass('show');
            }); 
            
            $('.work-experience.active .work > a').each(function() {
                $(this).addClass('show'); 
            });

            $('.portfolio.active .project > a').each(function() {
                $(this).addClass('show'); 
            });

            $('.skills.active .skill i').each(function() {
                $(this).addClass('show');
            });

            $('.education.active .school > a').each(function() {
                $(this).addClass('show'); 
            });

            $('.contact.active i').each(function() {
               $(this).addClass('show');
            }); 

            if ($('.introduction').hasClass('active') || $('.work-experience').hasClass('active') || $('.portfolio').hasClass('active') || $('.education').hasClass('active')) {
                $('#fp-nav ul li a span').each(function() {
                    $(this).css("background", "#fff");
                })
            }
            else {
                $('#fp-nav ul li a span').each(function() {
                    $(this).css("background", "rgb(22, 22, 22)");
                })
            }
        }
        
        $('.home.active .home-bg').addClass('show');
        
        $('.home.active .title h3').addClass('show');
        $('.home.active .title div.h0').addClass('show');
    
        $('.introduction.active .title h3').addClass('show');
        $('.introduction.active .title div.h0').addClass('show');
        
        $('.work-experience.active .title h3').addClass('show');
        $('.work-experience.active .title div.h0').addClass('show');
        $('.work-experience.active .title .btn').addClass('show');
        
        $('.portfolio.active .title h3').addClass('show');
        $('.portfolio.active .title div.h0').addClass('show');
        $('.portfolio.active .title .btn').addClass('show');
        
        $('.skills.active .title h3').addClass('show');
        $('.skills.active .title div.h0').addClass('show');
        $('.skills.active .title .btn').addClass('show');
       
        $('.education.active .title h3').addClass('show');
        $('.education.active .title div.h0').addClass('show');
        
        $('.contact.active .title h3').addClass('show');
        $('.contact.active .title div.h0').addClass('show');
    });
    
    $(window).resize(function() {
        /*$('.fp-section').css("height", $(window).height());
        $('.fp-tableCell').css("height", $(window).height());
        $('.fp-scrollable').css("height", $(window).height());*/
    });
    
    $(window).scroll(function() {
        $('.section .title .outer-div').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).find('h3').addClass('show');
                $(this).find('div.h0').addClass('show');
                $(this).find('.btn').addClass('show');
            }
        });
        $('.work > a').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
        $('.project > a').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
        $('.school > a').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
        $('.introduction i').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
        $('.skill i').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
        $('.contact i').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
           
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('show');
            }
        });
    });
})
