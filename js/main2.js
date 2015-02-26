

$(document).ready(function(){
    $('.level').each(function(){
        $(this).height($(window).height());
    });


    $('#level2 nav').css('margin-top', ($(window).height()-$('#level2 nav').outerHeight())/2);


    $('#level3 .side-image').height($(window).height()).width($(window).width()/3);

    $('#level3 .side-image img').height($(window).height());

    $('#level3 .side-caption').width($(window).width()-$('#level3 .side-image').width()).css('left', $('#level3 .side-image').width()).height($(window).height());

});



// .css('left', ($('#level3 .side-image img').width()-$('#level3 .side-image').width())/2)