$(document).ready(function(){
    level1();
    level3();
    level4();
    level5();
    if($(window).width()<768){
        alert('Version mobile en cours de développement...');
    }
});
$(window).load(function(){
    $('#mask').fadeOut();
    level1();
    level3();
    level4();
    level5();
});
$(window).resize(function(){
    level1();
    level3();
    level4();
    level5();
    if($(window).width()<768){
        alert('Version mobile en cours de développement...');
    }
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
    // NAV
    $('#nav').css('margin-top', ($(window).height()-$('#nav').outerHeight())/2);
    // ./NAV
    // #level2
    $('#level2 nav').css('margin-top', ($(window).height()-$('#level2 nav').outerHeight())/2);
    // ./#level2
});



// level 1
function level1(){
    // #logo
    $('#layer-logo').css('width', $(window).width()).css('height',$(window).height());
    if($(window).width()>$(window).height()){
        $('#logo').css('height',$(window).height()*0.8);
    }else{
        $('#logo').css('height',$(window).width()/1.5).css('width',$(window).width()/1.5);
    }
    $('#logo').css('margin-top',($(window).height()-$('#logo').outerHeight())/2+'px').css('margin-left',($(window).width()-$('#logo').outerWidth())/2+'px');
    setTimeout(function(){
        $('#logo').addClass('done');
    },6000);
    // ./#logo

    if($(window).width()>768){
        $('#signature img').width($(window).width()*1/5);
    }
    $("#signature").width($('#signature img').outerWidth());
    if($(window).width() > 1000){
        $('#signature').css('left',$(window).width()*4/5 - 100);
    }else if($(window).width()>768){
        $('#signature').css('left',$(window).width()*4/5 - 30);
    }else{
        $('#signature').width('100%').css('left',0);
    }
    letter_spacing = 0;
    font_size = 18;
    while($('#signature h4').width()<$('#signature img').width() && $('#signature img').height()<$('#signature h4').height()){
            letter_spacing += 0.1;
            $('#signature h4').css('letter-spacing',letter_spacing+'px');
            font_size --;
            // $('#signature h4').css('font-size',font_size+'px');
    }

    // $('#city').css('margin-left', ($(window).width()-$('#city').outerWidth())/2+20);
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
function level4(){
    $('#level4 .banner').css('margin-top',$('#secondary-logo').outerHeight()/2)
    $('#offre').css('margin-top',($(window).height()-$('#offre').outerHeight())/2);
}
// ./#level4

// #level5
function level5(){
    $('#mail').css('margin-top', ($(window).height()-$('#mail').outerHeight())/2);
}
// ./#level5