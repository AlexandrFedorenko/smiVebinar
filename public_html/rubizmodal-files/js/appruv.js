var cchecker =
{
	cookieName: "pp_msg",

	createCookie: function (name, value, days) {
		if (days) {
			var date = new Date();
			//date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}
		else var expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	},

	readCookie: function (name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	},

	eraseCookie: function (name) {
		createCookie(name, "", -1);
	},

	checkSubmitted: function () {
		return this.readCookie(this.cookieName) == "1";
	},

	trackSubmit: function () {
		this.createCookie(this.cookieName, "1", "1");
	}


};

function hideFlash() {
	var embeds = document.getElementsByTagName('embed');
	for (i = 0; i < embeds.length; i++) {
		embeds[i].style.visibility = 'hidden';
	}
	var objects = document.getElementsByTagName('object');
	for (i = 0; i < objects.length; i++) {
		objects[i].style.visibility = 'hidden';
	}
}

function showFlash() {
	var embeds = document.getElementsByTagName('embed');
	for (i = 0; i < embeds.length; i++) {
		embeds[i].style.visibility = 'visible';
	}
	var objects = document.getElementsByTagName('object');
	for (i = 0; i < objects.length; i++) {
		objects[i].style.visibility = 'visible';
	}
}