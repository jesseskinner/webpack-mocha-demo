var chai = require('chai');
var expect = chai.expect;

var randomBackground = require('../src/random-background');

describe("randomBackground", function () {
	
	it("should return a random color", function () {
	
		var color = randomBackground();

		expect(color).is.not.empty;

	});

	it("should change the background of an element", function () {
		
		var div = document.createElement('div');

		randomBackground(div);

		expect(div.style.background).is.not.empty;

	});

});