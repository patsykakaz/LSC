var delta = 0;
var currentSlideIndex = 0;
var scrollThreshold = 25;
var slides = $(".slide");
var numSlides = slides.length;
 
function elementScroll (e) {
    // --- Scrolling up ---
    if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
        delta--;
        if ( Math.abs(delta) >= scrollThreshold) {
        prevSlide();
        }
    }
    // --- Scrolling down ---
    else {
        delta++;
        if (delta >= scrollThreshold) {
            nextSlide();
        }
    }
    // Prevent page from scrolling
    return false;
}
 
function showSlide(){
    // reset
    $('#timer').attr('rel', 'on');
    setTimeout(function(){
        $('#timer').attr('rel', 'off');
    },700);
    delta = 0;
    slides.each(function(i, slide){
        $(slide).toggleClass('active', (i >= currentSlideIndex));
    });
    $(document).trigger('showingSlide');
}
 
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = 0;
    }
    showSlide();
}
 
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex > numSlides) { 
        currentSlideIndex = numSlides;
    }
    showSlide();
}
 
$(window).on({
    'DOMMouseScroll mousewheel': elementScroll
});