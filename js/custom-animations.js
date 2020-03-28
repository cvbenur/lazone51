const $ = require('./jquery-3.4.1.min.js');

var pqOn = false;
var validOn = false;
var alerted = false;

//  Showing/hiding the "Et pourquoi pas ?" element and changing the value of the button's text
$('#show-btn').on('click', function() {
    if (pqOn === false) {
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

        pqOn = true;

    } else if (pqOn === true) {
        $('#reponse').removeClass().addClass('animated fadeOutUp pt-5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass().addClass('pt-5 invisible');
        });
        
        setTimeout(function() {
            $('#show-btn').children().eq(1).text("Clique ici !");
            $('#show-btn').removeClass('heartBeat').addClass('bounce');
        }, 700);

        pqOn = false;
    }
});




// Highlighting the selected radio buttons with click as refresh
$("input:radio").on('click', function() {

    // Parsing each radio button
    $("input:radio").each(function() {

        nextElt = $(this).next();
        let labelText = nextElt.text();

        // If this radio button is checked, making text strong
        if ($(this).prop('checked')) {
            nextElt.html("<strong>" + labelText + "</strong>");
        } else {    // Making text not strong
            nextElt.html(labelText);
        }
    });
});


// Checking for missing input in the test
function anyCheckMissing() {
    
    let missing = false;
    
    // Parsing each div that has an id starting with 'test'
    $('div[id^="test"]').each(function() {

        // Restricting to divs which belong to the test
        if ($(this).attr('id') != 'test-rep') {

            let foundChecked = false;

            // Parsing each child div
            $(this).children().each(function() {

                // If this child div's input tag is checked
                if ($(this).children().eq(0).prop('checked')) {
                    foundChecked = true;
                } else {
                    // Do nothing
                }
            });

            // If we haven't found a signle checked input inside of any of the children div
            if (!foundChecked) {
                missing = true;
                alerted = false;
            } else {
                // Do nothing
            }
        }
    });

    return missing;
}

//  Showing/hiding the #test-rep element and changing the value of the button's text
$('#test-valider').on('click', function() {

    if (anyCheckMissing() === true)  {

        if (!alerted) {
            alert("Attention ! Tu dois sélectionner une option pour chaque question !");
            alerted = true;
        }

        rulez = $('#rulez');
        rulez.html("<strong>" + rulez.text() + "</strong>").addClass('animated bounce red-text');

    } else {

        if (validOn === false) {
            $('#rulez').addClass('d-none');
            $('#test-valider').removeClass('bounce');
            $('#test-rep').removeClass().addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass();
            });
            
            setTimeout(function() {
                if (konamiActivatedConfirmed == true) {
                    $('#test-valider').children().eq(1).text("Eh oui !");
                } else {
                    $('#test-valider').children().eq(1).text("Et paf !");
                }
    
                $('#test-valider').addClass('heartBeat');
            }, 700);
    
            validOn = true;
    
        } else {
            // Do nothing
        }
    }
});