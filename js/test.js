$(document).ready(function(){
    $('.item-offre').click(function(){
        target = $(this);
        wrapper = target.children('.item-offre-wrapper');
        content = wrapper.children('.item-offre-content');
        if(target.attr('deploy') == 'off'){
            wrapper.css('height', content.outerHeight());
            target.attr('deploy', 'on');
            $('.item-offre').not(this).children('.item-offre-wrapper').css('height', '0px');
            $('.item-offre').not(this).attr('deploy','off');
        }else{
            target.attr('deploy','off');
            wrapper.css('height', 0);
        }
    });
});


// SideMenu icon btn
$(document).ready(function(){
    $('.side-menu-item').mouseover(function(){
        $(this).children('.side-menu-caption').removeClass('off');
    })
    $('.side-menu-item').mouseout(function(){
        target = $(this).children('.side-menu-caption');
        if(parseInt($(this).attr('rel')) != currentSlideIndex){
            target.addClass('off');
        }
    })
    $('.side-menu-item').click(function(){
        currentSlideIndex = parseInt($(this).attr('rel'));
        showSlide();
        indexNav();
        deploySecondaryLogo();
    })
});

// ./SideMenu icon btn