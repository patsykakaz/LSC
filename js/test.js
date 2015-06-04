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

$svg = $("#secondary-logo-svg");
$("#testSVG", $svg).attr('style', "fill:red");
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


// puzzle
x = 0;
y = 0;
unit = 200;
$('.puzzle-item').each(function(){
    title = $(this).children('h3');
    title.css('margin-top', ($(this).outerHeight()-title.outerHeight())/2);
    if(x >= 600){
        x = 0;
        y += 200;
    }
    $(this).css('background-position', x+'px '+y+'px');
    $(this).css('left',x).css('top',y);
    x += 200;
});
$('.puzzle-item:eq(0)').css('background-image','none');
// ./puzzle






























