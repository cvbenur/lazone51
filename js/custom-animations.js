const $ = require('./jquery-3.4.1.min.js');

var on = 0;

// Showing the text on click
$('#vdc').on('click', function() {
    $(this).next().removeClass('invisible').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated fadeIn');
        $(this).children().eq(0).text("T'as cru !");
        $(this).children().eq(0).addClass('animated jackInTheBox');
    });
});

//  Showing/hiding the "Et pourquoi pas ?" element and changing the value of the button's text
$('#show-btn').on('click', function() {
    if (on == 0) {
        $('#show-btn').removeClass('bounce');
        $('#reponse').removeClass().addClass('animated fadeInDown pt-5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass().addClass('pt-5');
        });
        
        setTimeout(function() {
            if (konamiActivatedConfirmed == true) {
                $('#show-btn').children().eq(1).text("Eh oui !");
            } else {
                $('#show-btn').children().eq(1).text("CHEH !");
            }

            $('#show-btn').addClass('heartBeat');
        }, 700);

        on = 1;

    } else if (on == 1) {
        $('#reponse').removeClass().addClass('animated fadeOutUp pt-5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass().addClass('pt-5 invisible');
        });
        
        setTimeout(function() {
            $('#show-btn').children().eq(1).text("Clique ici !");
            $('#show-btn').removeClass('heartBeat').addClass('bounce');
        }, 700);

        on = 0;
    }
});