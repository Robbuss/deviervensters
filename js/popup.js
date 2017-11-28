$(document).ready(function() {
$('a.login-window').click(function() {
    
            //Getting the variable's value from a link 
    var loginBox = $(this).attr('href');

    //Fade in the Popup
    $(loginBox).fadeIn(300);
    
    //Set the center alignment padding + border see css style
    var popMargTop = ($(loginBox).height() + 24) / 2; 
    var popMargLeft = ($(loginBox).width() + 24) / 2; 
    
    $(loginBox).css({ 
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });
    
    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    
    return false;
});



// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() { 
  $('#mask , .login-popup1').fadeOut(300 , function() {
    $('#mask').remove();  
}); 
return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() { 
  $('#mask , .login-popup2').fadeOut(300 , function() {
    $('#mask').remove();  
}); 
return false;
});
// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() { 
  $('#mask , .login-popup3').fadeOut(300 , function() {
    $('#mask').remove();  
}); 
return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() { 
  $('#mask , .login-popup4').fadeOut(300 , function() {
    $('#mask').remove();  
}); 
return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').live('click', function() { 
  $('#mask , .login-popup7').fadeOut(300 , function() {
    $('#mask').remove();  
}); 
return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask, li').live('click', function() { 
  $('#mask , .login-popup7').fadeOut(1500 , function() {
    $('#mask').remove();  
}); 
return false;
});

});
