var delta = 0;
var currentSlideIndex = 0;
var scrollThreshold = 20;
var slides = $(".slide");
var numSlides = slides.length -1;

function elementScroll(e){
  console.log (Math.abs(delta));
    // --- Scrolling up ---
    if(e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0){
        delta--;
        if($('#timer').attr('deploy') == 'off'){
            if(Math.abs(delta) >= scrollThreshold){
                prevSlide();
            }
        }else{
            delta = 0;
        }
    }
    // --- Scrolling down ---
    else{
        delta++;
        if($('#timer').attr('deploy') == 'off'){
            if(Math.abs(delta) >= scrollThreshold){
                nextSlide();
            }
        }else{
            delta = 0;
        }
    }
    // Prevent page from scrolling
    return false;
}

function showSlide(){
    // reset
    $('#timer').attr('deploy', 'on');
    setTimeout(function(){
        $('#timer').attr('deploy', 'off');
    },700);
    delta = 0;
    slides.each(function(i, slide){
        $(slide).toggleClass('active', (i >= currentSlideIndex));
    });
    $(document).trigger('showingSlide');
}

function prevSlide(){
    currentSlideIndex--;
    if (currentSlideIndex <= 0){
        currentSlideIndex = 0;
        reduceSecondaryLogo();
    }
    showSlide();
    indexNav();
}
 
function nextSlide(){
    currentSlideIndex++;
    if (currentSlideIndex > numSlides){
        currentSlideIndex = numSlides;
    }
    showSlide();
    indexNav();
    deploySecondaryLogo();
}

function deploySecondaryLogo(){
    setTimeout(function(){
        $('#secondary-logo').fadeIn();
    },450);
}
function reduceSecondaryLogo(){
    $('#secondary-logo').fadeOut();
}

function indexNav(){
    if(currentSlideIndex > 1){
        navIndex = currentSlideIndex-2;
        setTimeout(function(){
            $('#nav').removeClass('fade-nav');
            $('#nav .fa-custom').not('#nav .fa:eq('+navIndex+')').removeClass('fa-circle').addClass('fa-circle-o');
            $('#nav .fa-custom:eq('+navIndex+')').removeClass('fa-circle-o').addClass('fa-circle');
            $('#nav .side-menu-caption').addClass('off');
            $('#nav .side-menu-caption:eq('+(navIndex+1)+')').removeClass('off');

            if(currentSlideIndex == 3){
                $('#nav').addClass('green-nav');
            }else{
                $('#nav').removeClass('green-nav');
            }
        },200);
    }else{
        $('#nav').addClass('fade-nav');
    }
}
 
$(window).on({
    'DOMMouseScroll mousewheel': elementScroll
});


// MOBILE
var delta;
    dragThreshold = 0.15;/-/ "percentage" to drag before engaging
    dragStart = null;    /-/ used to determine touch / drag distance
    percentage = 0,
    target,
    previousTarget;
 
function touchStart(event) {
 
    if (dragStart !== null) { return; }
    if (event.originalEvent.touches) { 
        event = event.originalEvent.touches[0];
    }
 
    // where in the viewport was touched
    dragStart = event.clientY;
 
    // make sure we're dealing with a slide
    target = slides.eq(currentSlideIndex)[0];   
 
    // disable transitions while dragging
    target.classList.add('no-animation');
 
    previousTarget = slides.eq(currentSlideIndex-1)[0];
    previousTarget.classList.add('no-animation');
}
 
function touchMove (event) {
 
    if (dragStart === null) { return; }
    if (event.originalEvent.touches) { 
        event = event.originalEvent.touches[0];
    }
 
    delta = dragStart - event.clientY;
    percentage = delta / windowHeight;
 
    // Going down/next. Animate the height of the target element.
    if (percentage > 0) {
        target.style.height = (100-(percentage*100))+'%';
        if (previousTarget) { 
            previousTarget.style.height = '';   // reset
        }
    }
 
    // Going up/prev. Animate the height of the _previous_ element.
    else if (previousTarget) {
        previousTarget.style.height = (-percentage*100)+'%';
        target.style.height = '';   // reset
    }
 
    // Don't drag element. This is important.
    return false;
}
 
function touchEnd () {
 
    dragStart = null;
    target.classList.remove('no-animation');
    if (previousTarget) { 
        previousTarget.classList.remove('no-animation'); 
    }
 
    if (percentage >= dragThreshold) {
        nextSlide();
    }
    else if ( Math.abs(percentage) >= dragThreshold ) {
        prevSlide();
    } else {
        // show current slide i.e. snap back
        showSlide();
    }
 
    percentage = 0;
 
}
 
$(‘#projects’).on({
    'touchstart': touchStart,
    'touchmove': touchMove,
    'touchend': touchEnd
});



    $('#level2 a').click(function(){
        if($(this).attr('href') == '#level3'){
            currentSlideIndex = 2;
            showSlide();
            indexNav();
        }else if($(this).attr('href') == '#level4'){
            currentSlideIndex = 3;
            showSlide();
            indexNav();
        }else if($(this).attr('href') == '#level5'){
            currentSlideIndex = 4;
            showSlide();
            indexNav();
        }
    });