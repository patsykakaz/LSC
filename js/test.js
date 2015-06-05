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

if($(window).width() > $(window).height()){
    masterX = $(window).height()*0.8;
    $('#puzzle').width(masterX).height(masterX).css('margin-top', ($(document).height()-masterX)/2);
    $('.puzzle-item').width(masterX/3).height(masterX/3);

    x = 0;
    y = 0;
    $('.puzzle-item').each(function(){
        title = $(this).children('h3');
        title.css('margin-top', ($(this).outerHeight()-title.outerHeight())/2);
        if(x >= masterX){
            x = 0;
            y += masterX/3;
        }
        $(this).css('background-position', x+'px '+y+'px');
        $(this).css('left',x).css('top',y);
        x += masterX/3;
    });
    $('.puzzle-item:eq(0)').css('background-image','none');
}

    // moving puzzle
    $('.puzzle-item').click(function(){
        emptyRel = parseInt($('#puzzle-empty').attr('rel'));
        offset = $(this).position();
        emptyPosition = $('#puzzle-empty').position();
        if(parseInt($(this).attr('rel'))-emptyRel == 3){
            $('#puzzle-empty').attr('rel',$(this).attr('rel'));
            $(this).attr('rel',emptyRel);
            $(this).css('top', offset.top-masterX/3);
            $('#puzzle-empty').css('top', emptyPosition.top+masterX/3);
        }else if(emptyRel-parseInt($(this).attr('rel')) == 3){
            $('#puzzle-empty').attr('rel',$(this).attr('rel'));
            $(this).attr('rel',emptyRel);
            $(this).css('top', offset.top+masterX/3);
            $('#puzzle-empty').css('top', emptyPosition.top-masterX/3);
        }
        else if(parseInt($(this).attr('rel'))-emptyRel == 1){
            $('#puzzle-empty').attr('rel',$(this).attr('rel'));
            $(this).attr('rel',emptyRel);
            $(this).css('left', offset.left-masterX/3);
            $('#puzzle-empty').css('left', emptyPosition.left+masterX/3);
        }else if(emptyRel-parseInt($(this).attr('rel')) == 1){
            $('#puzzle-empty').attr('rel',$(this).attr('rel'));
            $(this).attr('rel',emptyRel);
            $(this).css('left', offset.left+masterX/3);
            $('#puzzle-empty').css('left', emptyPosition.left-masterX/3);
        }
    });
    // ./moving puzzle

// ./puzzle






























