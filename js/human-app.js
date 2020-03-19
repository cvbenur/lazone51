const Konami = require('./konami.js');
const $ = require('./jquery-3.4.1.min.js');

$(document).ready(() => {
	const easterEgg = new Konami(() => {
		alert("Human'App est partout.");

		let haLogo = {
			src: require("../img/ziak/humanapp_logo.png"),
			alt: "Logo Human'App"
		};
		
		document.querySelectorAll("img").forEach(img => {
			img.src = haLogo.src;
			img.alt = haLogo.alt;
		});

		$('#description').each(function() {
			this.text("Human'App est partout.");
		});

		$('.body').css("background-color", "#85d4ff");
	});

	easterEgg.load();
});
