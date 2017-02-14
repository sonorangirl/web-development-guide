(function printAlphabet(global) {

	function C() {
		console.log("OOPS");
	}

	function E(f) {
		console.log("E");
		f = F;
		f();
	}

	var A = function() {
		console.log("A");
		B();
	};

	function G(h) {
		console.log("G");
		var H = function() {
			console.log("H");
			I();
		};
		H();
	}

	function d() {
		console.log("D");
		E();
	}

	function I() {
		console.log("I");
		J();
	}

	var B = function() {
		console.log("B");
		C();
	};

	var F = function() {
		console.log("F");
		G();
	};

	function K() {
		var rest = "KLMNOPQRSTUVWXYZ".split("");
		for (let i=0; i<rest.length; i++) {
			console.log(rest[i]);
		}
	}

	var J = function() {
		console.log("J");
		K();
	};

	C = function() {
		console.log("C");
		d();
	};

	return A;

})(window)();
