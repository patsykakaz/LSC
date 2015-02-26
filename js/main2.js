

$(document).ready(function(){
    $('.level').each(function(){
        $(this).height($(window).height());
    });


    $('#level2 nav').css('margin-top', ($(window).height()-$('#level2 nav').outerHeight())/2);


    $('#level3 .side-image').height($(window).height()).width($(window).width()/3);

    $('#level3 .side-image img').height($(window).height());

    $('#level3 .side-caption').width($(window).width()-$('#level3 .side-image').width()).css('left', $('#level3 .side-image').width()).height($(window).height());

    // array des offset.top des étages 
    levelPositions = [];
    $('.level').each(function(){
        offsetTop = $(this).offset().top;
        levelPositions.push(offsetTop);
    });

    // gestion du scroll
    previousScroll = 0;
    // $(document).scroll(function(){
    // currentScroll = $(this).scrollTop();
    // if (currentScroll > previousScroll +20){
    //     scrollTop = $(window).scrollTop();
    //     for (i = 1; i<=6; i++) {
    //         if(levelPositions[i]>scrollTop){
    //             nextLevel = i;
    //             break;
    //         }
    //     };
    //     $('body').animate({
    //         scrollTop: levelPositions[nextLevel]
    //     });
    // } else {
    //     scrollTop = $(window).scrollTop();
    //     for (i = 1; i<=6; i++) {
    //         if(levelPositions[i]>scrollTop){
    //             nextLevel = i;
    //             break;
    //         }
    //     };
    //     $('body').animate({
    //         scrollTop: levelPositions[nextLevel-2]
    //     });
    // }
    // previousScroll = currentScroll;


    // });


});





// .css('left', ($('#level3 .side-image img').width()-$('#level3 .side-image').width())/2)