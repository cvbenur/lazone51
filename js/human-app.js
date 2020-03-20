const Konami = require('./konami.js');
const $ = require('./jquery-3.4.1.min.js');

konamiActivatedConfirmed = false;

$(document).ready(() => {
	const easterEgg = new Konami(() => {

		konamiActivatedConfirmed = true;
		alert("Human'App a encore frappé.");

		let haLogo = {
			src: require("../img/ziak/humanapp_logo.png"),
			alt: "Logo Human'App"
		};

		$('img').each(function() {
			$(this).attr({
				src: haLogo.src,
				alt: haLogo.alt
			});
		});

		$('p').text("Human'App est partout.");
		
		$('a').each(function() {
			if ($(this).attr("id") == "show-btn") { } else {
				$(this).attr({
					href: 'https://human-app.fr/'
				});
			}
		});

		$('#reponse').text("Human'App est partout.");
		$('#vote-efranchouille').text("Human'app");
	});

	easterEgg.load();
});
