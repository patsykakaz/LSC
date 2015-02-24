
$(document).ready(function(){
    $('#layer-logo').css('width', $(window).width()).css('height',$(window).height());
    if($(window).width()>$(window).height()){
        $('#logo').css('height',$(window).height()/1.5).css('width',$(window).height()/1.5);
    }else{
        $('#logo').css('height',$(window).width()*1).css('width',$(window).width()*1);
    }
    $('#logo').css('margin-top',($(window).height()-$('#logo').outerHeight())/2+'px');

    $(window).load(function(){
        $('#logo').addClass('scale-test');
        setTimeout(function() {
            $('#logo').removeClass('logo-hide');
        }, 100);
        setTimeout(function() {
            $('#logo').addClass('logo-rotate');
        }, 5000);
    });
});

