const $ = require('./jquery-3.4.1.min.js');

var on = 0;

$('#show-btn').on('click', function() {
    if (on == 0) {
        $('#show-btn').removeClass('bounce infinite');
        $('#reponse').removeClass().addClass('pt-5 animated fadeInDown');
        
        setTimeout(function() {
            $('#show-btn').children().eq(1).text("CHEH !");
            $('#show-btn').addClass('heartBeat').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('heartBeat');
            });
        }, 700);

        on = 1;

    } else if (on == 1) {
        $('#reponse').removeClass().addClass('animated fadeOutUp pt-5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass().addClass('pt-5 d-none');
        });
        
        setTimeout(function() {
            $('#show-btn').children().eq(1).text("Clique ici !");
        }, 700);

        on = 0;
    }
});