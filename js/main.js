$(document).ready(function(){
    level1();
    level3();
    level5();
});
$(window).load(function(){
    level1();
    level3();
    level5();
});
$(window).resize(function(){
    level1();
    level3();
    level5();
});


// GESTION LOGO rebuilding
$(document).ready(function(){

});
// ./GESTION LOGO rebuiding


$(document).ready(function(){


    $(window).load(function(){
        $('#logo').removeClass('logo-hide');
        setTimeout(function(){
            $('#logo').addClass('logo-rotate');
        }, 3000);
    // NAV
        $('#nav').css('margin-top', ($(window).height()-$('#nav').outerHeight())/2);
    // ./NAV

    // #level2
        // Placement menu en milieu de page
        $('#level2 nav').css('margin-top', ($(window).height()-$('#level2 nav').outerHeight())/2);
    // ./#level2

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
function level1(){
    $('#layer-logo').css('width', $(window).width()).css('height',$(window).height());
    if($(window).width()>$(window).height()){
        $('#logo').css('height',$(window).height());
    }else{
        $('#logo').css('height',$(window).width()/1.5).css('width',$(window).width()/1.5);
    }
    $('#logo').css('margin-top',($(window).height()-$('#logo').outerHeight())/2+'px').css('margin-left',($(window).width()-$('#logo').outerWidth())/2+'px');
    $('#city').css('margin-left', ($(window).width()-$('#city').outerWidth())/2+20);
}


// #level3
function level3(){
    if($(window).width()>=768){
        $('#level3 .side-image').height($(window).height()).width($(window).width()/3);
        // $('#level3 .side-image img').height($(window).height()).width($(window).width()/3);
        $('#level3 .side-caption').width($(window).width()-$('#level3 .side-image').width());
    }else{
        $('#level3 .side-caption').width('100%');
    }
    $('#level3 .side-caption').css('margin-top', ($(window).height()-$('#level3 .side-caption').outerHeight())/2-50);
}
// ./#level3

// #level4
// ./#level4

// #level5
function level5(){
    $('#level5 a').css('margin-top', ($(window).height()-$('#level5 a').outerHeight())/2);
}
// ./#level5