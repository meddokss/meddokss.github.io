$(document).ready(function() { 
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
    open_modal.click(function(event) {
        event.preventDefault(); 
        // var div = $(this).attr('href'); 
        var div = $(this).attr('data-selector'); 
        overlay.fadeIn(400, 
            function() { 
                $(div) 
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200); 
            });
    });

    function closeRegistrationForm() { 
        modal.animate(
            {
                opacity: 0,
                top: '45%'
            }, 
            200,
            function() {
                $(this).css('display', 'none');
                overlay.fadeOut(400); 
            }
        );
    }

    window.closeRegistrationForm = closeRegistrationForm;
console.log(window)
    close.click(closeRegistrationForm);

});







// <script>
//         $(document).ready(function() { 
//             var overlay = $('#overlay_success'); 
//             var open_modal = $('.open_modal_success'); 
//             var close = $('.modal_close_success, #overlay_success'); 
//             var modal = $('.modal_div_success'); 

//             function openModalSuccesWindow() {
//                 // var div = $(this).attr('href'); 
//                 var div = $(this).attr('data-selector'); 
//                 overlay.fadeIn(400, 
//                     function() { 
//                         $(div) 
//                             .css('display', 'block')
//                             .animate({
//                                 opacity: 1,
//                                 top: '50%'
//                             }, 200); 
//                     });
//                 return false;
//             }

//             function closeModalSuccesWindow() { 
//                 modal.animate({
//                         opacity: 0,
//                         top: '45%'
//                     }, 200,
//                     function() {
//                         $(this).css('display', 'none');
//                         overlay.fadeOut(400); 
//                     }
//                 });
//             } 

//             open_modal.click(openModalSuccesWindow);

//             close.click(closeModalSuccesWindow);
//          });
//     </script>

