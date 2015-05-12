$(document).ready(function(){
    $('.item-offre').click(function(){
        target = $(this).children('.item-offre-wrapper');

        if(target.attr('deploy') == 'off'){
            content = target.children('.item-offre-content');
            target.css('height', content.outerHeight());
            target.attr('deploy', 'on');
        }else{
            target.css('height', '0px').attr('deploy','off');
        }
    });
});