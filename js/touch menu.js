
$(document).ready(function(){
    var touch = $('#touch-menu');
    var menu = $('.nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(menu).on('click', function(e) {
    	var wid = $(window).width();
        if(wid > 760) {
          e.preventDefault();  
        }
        else(
        	menu.slideToggle());
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
