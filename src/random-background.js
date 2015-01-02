define(['randomcolor'], function (randomColor) {
	
	function randomBackground(element) {
		var color = randomColor();

		if (element) {
			element.style.background = color;
		}

		return color;
	}

	return randomBackground;

});