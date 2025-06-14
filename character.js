var input = {};

document.addEventListener("keyup", function (e) {
	if (e.key === "Escape") {
		window.close();
	}
	input[e.key] = false;
});

let keydown = function (e) {
	if (e.key === "Escape") {
		window.close();
	}
	console.log(e.key);
	input[e.key] = true;
};
document.addEventListener("keydown", keydown);

let stepCharacter = function () {
	if (input.w) {
		frame.y -= 1;
		frame.y = Math.max(frame.y, 0);
	}
	if (input.a) {
		frame.x -= 1;
		frame.x = Math.max(frame.x, 0);
	}
	if (input.s) {
		frame.y += 1;
		frame.y = Math.min(frame.y, particles.length - 1);
	}
	if (input.d) {
		frame.x += 1;
		frame.x = Math.min(frame.x, particles[0].length - 1);
	}
};
