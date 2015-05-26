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
});