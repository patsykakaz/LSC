






// GESTION LOGO rebuiding
$(document).ready(function(){
    $('#layer-logo').css('width', $(window).width()).css('height',$(window).height());
    if($(window).width()>$(window).height()){
        $('#logo').css('height',$(window).height());
    }else{
        $('#logo').css('height',$(window).width()/1.3).css('width',$(window).width()/1.3);
    }
    $('#logo').css('margin-top',($(window).height()-$('#logo').outerHeight())/2+'px').css('margin-left',($(window).width()-$('#logo').outerWidth())/2+'px');
});
// ./GESTION LOGO rebuiding


$(document).ready(function(){


    $(window).load(function(){
        $('#logo').removeClass('logo-hide');
        setTimeout(function() {
            $('#logo').addClass('logo-rotate');
        }, 3000);
    // NAV
        $('#nav').css('margin-top', ($(window).height()-$('#nav').outerHeight())/2);
    // ./NAV

    // #level2
        // Placement menu en milieu de page
        $('#level2 nav').css('margin-top', ($(window).height()-$('#level2 nav').outerHeight())/2);
    // ./#level2

        // #level3
        $('#level3 .side-image').height($(window).height()).width($(window).width()/3);
        $('#level3 .side-image img').height($(window).height());
        $('#level3 .side-caption').width($(window).width()-$('#level3 .side-image').width()).css('left', $('#level3 .side-image').width());
        $('#level3 .side-caption').css('margin-top', ($(window).height()-$('#level3 .side-caption').outerHeight())/2);
        // ./#level3
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

// NAV
    $('#nav').css('margin-top', ($(window).height()-$('#nav').outerHeight())/2);
// ./NAV

    // #level2
    $('#level2 nav').css('margin-top', ($(window).height()-$('#level2 nav').outerHeight())/2);
    // ./#level2

});



// level 1
$(document).ready(function(){
    $('#city').css('margin-left', ($(window).width()-$('#city').outerWidth())/2+20);
});

