var mapWidth = 400;
var mapHeight = 472;
//THIS CODE WAS ADAPTED FRMO A GAME I MADE, SO IT CONTAINS
// A LOT OF UNNECESSARY CODE
// Define a constant for the particle render scale
const PARTICLE_RENDER_SCALE = 1;
generate(mapWidth, mapHeight);

// addDoor();
// var music;
// if (window.localStorage.level <= 3) {
// 	spawnSnakes(0.002);
// 	spawnBats(0.001);
// 	generateLava();
// 	generateWater();
// 	music = new Audio("music/magma.wav");
// 	music.volume = 0.5;
// 	music.loop = true;
// } else if (window.localStorage.level <= 6) {
// 	generateCave(1, 1, mapWidth, mapHeight, 8);
// 	spawnEyes(0.001);
// 	generateVines(0.003);
// 	spawnBiters(0.005);
// 	spawnPoisongrass(0.005);
// 	generateWater();
// 	spawnBats(0.001);
// 	spawnSnakes(0.002);
// 	music = new Audio("music/jungle.mp3");
// 	music.volume = 0.5;
// 	music.loop = true;
// } else {
// 	generateCave(1, 1, mapWidth, mapHeight, 5);
// 	pProps[5].texture = 12;
// 	spawnEyes(0.001);
// 	spawnSlimes(0.011);
// 	pProps[5].color = [80, 50, 50];
// 	generateLava(0.05);
// 	generateGold(0.06);
// 	music = new Audio("music/magma.wav");
// 	music.volume = 0.5;
// 	music.loop = true;
// }
// music.play();

// generateGold(0.06);

// for (var i = 3; i < 20; i++) {
// 	for (var j = 3; j < 20; j++) {
// 		particles[i][j] = 1;
// 	}
// }

const times = [];
let fps;

var renderPix = function (i, j) {
	var part = Math.abs(particles[i][j]);
	var particle = pProps[Math.floor(part)];
	if (particle.texture) {
		canvasOneGraphics.drawImage(
			images[particle.texture],
			(i % (particle.resx / particle.scale)) * particle.scale,
			(j % (particle.resy / particle.scale)) * particle.scale,
			particle.scale,
			particle.scale,
			j * PARTICLE_RENDER_SCALE, // Use the constant here
			i * PARTICLE_RENDER_SCALE, // Use the constant here
			PARTICLE_RENDER_SCALE, // Use the constant here
			PARTICLE_RENDER_SCALE // Use the constant here
		);
	} else {
		var heat = (part - Math.floor(part) - 0.5) * 300;

		canvasOneGraphics.fillStyle = `rgb(${particle.color[0] + heat},${particle.color[1] - heat},${particle.color[2] - heat})`;
		canvasOneGraphics.fillRect(
			j * PARTICLE_RENDER_SCALE, // Use the constant here
			i * PARTICLE_RENDER_SCALE, // Use the constant here
			PARTICLE_RENDER_SCALE, // Use the constant here
			PARTICLE_RENDER_SCALE // Use the constant here
		);
	}
};

var renderEntity = function (entity) {
	if (entity.render) {
		canvasThreeGraphics.drawImage(images[entity.image], entity.x * 4, entity.y * 4, entity.width * 4, entity.height * 4);
	}
};

var fullRender = function () {
	for (var i = 0; i < particles.length; i++) {
		for (var j = 0; j < particles[i].length; j++) {
			if (particles[i][j] !== 0) {
				renderPix(i, j);
			} else {
				canvasOneGraphics.fillStyle = "black";
				canvasOneGraphics.fillRect(
					j * PARTICLE_RENDER_SCALE, // Apply here too
					i * PARTICLE_RENDER_SCALE, // Apply here too
					PARTICLE_RENDER_SCALE, // Apply here too
					PARTICLE_RENDER_SCALE // Apply here too
				);
			}
		}
	}
	// renderEntity(entities[0]);
};

// FPS Counter Variables
let fpsElement = document.getElementById("fps-counter");
let frames = 0;
let lastFpsUpdateTime = performance.now();

function updateFpsCounter() {
	frames++;
	const currentTime = performance.now();
	const elapsedTime = currentTime - lastFpsUpdateTime;

	if (elapsedTime > 1000) {
		// Update FPS every second
		const fps = Math.round((frames * 1000) / elapsedTime);
		if (fpsElement) {
			// Check if element exists before updating
			fpsElement.textContent = `FPS: ${fps}`;
		}
		frames = 0;
		lastFpsUpdateTime = currentTime;
	}
}

window.onload = function () {
	fullRender();
	document.getElementById("loadingScreen").hidden = true;
	gameloop = setInterval(function () {
		/********
		 * GAME LOOP
		 */
		stepParticles(
			particles,
			Math.max(Math.floor(frame.x), 0),
			Math.max(Math.floor(frame.y), 0),
			Math.min(Math.floor(frame.x) + frame.width, mapWidth),
			Math.min(Math.floor(frame.y) + frame.height, mapHeight)
		);
		// stepEntitiesPhysics(Math.max(frame.x, 0), Math.max(frame.y, 0), frame.x + frame.width, frame.y + frame.height);
		canvasTwoGraphics.drawImage(canvasOne, frame.x, frame.y, frame.width, frame.height, 0, 0, 450, 240);
		// canvasTwoGraphics.drawImage(canvasThree, frame.x * 4, frame.y * 4, frame.width * 4, frame.height * 4, 0, 0, 900, 480);
		stepCharacter();
		updateFpsCounter();
		// stepSnakes();
		// eyesStep();
		// bitersStep();
		// grassStep();
		// batsStep();
		// stepSlimes();
		// frame.x = Math.min(Math.max(0, lerp(frame.x, entities[0].x - 75, 0.1)), mapWidth - frame.width);
		// frame.y = Math.min(Math.max(lerp(frame.y, entities[0].y - 40, 0.1), 0), mapHeight - frame.height);
		// const now = performance.now();
		// while (times.length > 0 && times[0] <= now - 1000) {
		// 	times.shift();
		// }
		// times.push(now);
		// fps = times.length;
		// if (Math.random() < 0.01) {
		// 	console.log(fps);
		// }
	}, 10);
};
