$(document).ready(function() {
$('a.login-window-menu').click(function() {
    
            //Getting the variable's value from a link 
    var loginBoxM = $(this).attr('href');

    //Fade in the Popup
    $(loginBoxM).fadeIn(300);
    
    //Set the center alignment padding + border see css style
    var popMargTop = ($(loginBoxM).height() + 24) / 2; 
    var popMargLeft = ($(loginBoxM).width() + 24) / 2; 
    
    $(loginBoxM).css({ 
        'margin-top' : +popMargTop*0.95,
        'margin-left' : +popMargLeft*3.65
    });
    
    // Add the mask to body
    $('body').append('<div id="menu-mask"></div>');
    $('#menu-mask').fadeIn(300);
    
    return false;
});



// When clicking on the button close or the mask layer the popup closed
$('a.close, #menu-mask, a.button').live('click', function() { 
  $('#menu-mask , #login-window-menu').fadeOut(300 , function() {
    $('#menu-mask').remove();  
}); 
return false;
});

});