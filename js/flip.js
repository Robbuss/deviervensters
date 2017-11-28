        $(document).ready(function(){
            // set up hover panels
            // although this can be done without JavaScript, we've attached these events
            // because it causes the hover to be triggered when the element is tapped on a touch device
            $('.panel').click(function(){
                $(this).toggleClass('flip');
            },function(){
                $(this).toggleClass('flip');
            });
        });
        