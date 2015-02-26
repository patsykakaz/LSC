
$(document).ready(function(){
    $('#layer-logo').css('width', $(window).width()).css('height',$(window).height());
    if($(window).width()>$(window).height()){
        $('#logo').css('height',$(window).height());
    }else{
        $('#logo').css('height',$(window).width()/1.3).css('width',$(window).width()/1.3);
    }
    $('#logo').css('margin-top',($(window).height()-$('#logo').outerHeight())/2+'px');

    $(window).load(function(){
        $('#logo').removeClass('logo-hide');
        setTimeout(function() {
            $('#logo').addClass('logo-rotate');
        }, 3000);
    });
});

$(window).resize(function(){
    $('#layer-logo').css('width', $(window).width()).css('height',$(window).height());
    if($(window).width()>$(window).height()){
        $('#logo').css('height',$(window).height()/1.5).css('width',$(window).height()/1.5);
    }else{
        $('#logo').css('height',$(window).width()/1.5).css('width',$(window).width()/1.5);
    }
    $('#logo').css('margin-top',($(window).height()-$('#logo').outerHeight())/2+'px');
});