function mulberry32(a) {
	return function () {
		let t = (a += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

var getRand = mulberry32((Math.random() * 2 ** 32) >>> 0);
// for (let i = 0; i < 10; i++) console.log(getRand());
var pProps = [
	{
		name: "border",
		bouyancy: 1,
		falls: 0,
		s: "s",
		color: [0, 0, 20],
		radiates: 0,
	}, //0
	// //0
	{
		name: "nothing",
		bouyancy: 0,
		falls: 0,
		s: "g",
		radiates: 0,
		color: [50, 50, 50],
		// texture: 12,
		// resx: 16,
		// resy: 16,
	}, //1
	//1
	{
		name: "grass",
		bouyancy: 0.7,
		falls: 0,
		s: "s",
		color: [0, 255, 0],
		radiates: 0,
		stateChange: [13, 9, 0.51, 0, 0.3],
		mixes: [3, 9.5, 9.5],
	},
	//2
	{
		name: "water",
		bouyancy: 0.3,
		falls: 1,
		s: "l",
		mixes: [8, 12.5, 12.5, 9, 9.5, 9.5],
		stateChange: [6, 7, 0.6, 0.4, 0.1],
		color: [0, 0, 255],
		radiates: -0.01,
		mixes: [4, 14.5, 6.5],
	},
	//3
	{
		name: "lava",
		bouyancy: 0.9,
		falls: 1,
		s: "l",
		color: [255, 0, 0],
		stateChange: [4, 14, 1, 0.5, 0.5],
		// texture: 20,
		// resx: 60,
		// resy: 45,
		radiates: 0.4,
	},
	// 4
	{
		name: "staticRock",
		bouyancy: 1,
		falls: 0,
		s: "s",
		color: [150, 150, 150],
		texture: 0, //12, //3,
		resx: 16,
		resy: 16,
		scale: 1,
		stateChange: [4, 5, 0.7, -1, 0.001],
		radiates: 0,
	},
	//5
	{
		name: "steam",
		bouyancy: 0.2,
		falls: -1,
		s: "g",
		stateChange: [4, 3, 1, 0.6, 0.0001],
		color: [200, 200, 200],
		radiates: 0,
	},
	//6
	{
		name: "ice",
		bouyancy: 0.2,
		falls: 1,
		s: "s",
		stateChange: [3, 7, 0.2, -0.9, 0.5],
		color: [200, 200, 255],
		radiates: -0.5,
	},
	// //7
	{
		name: "dirt",
		bouyancy: 0.8,
		falls: 0,
		s: "s",
		resx: 200,
		resy: 200,
		scale: 4,
		texture: 13,
		color: [210, 105, 30],
		radiates: 0,
	},
	//8
	{
		name: "grass",
		bouyancy: 0.7,
		falls: 0,
		s: "s",
		color: [0, 255, 0],
		radiates: 0,
		stateChange: [13, 9, 0.51, 0, 0.3],
		mixes: [3, 9.5, 9.5],
	},
	//9
	{
		name: "fire",
		bouyancy: 0.9,
		falls: -1,
		s: "g",
		color: [255, 0, 0],
		radiates: 0.2,
		stateChange: [11, 11, 0, 1, 0.1],
	},
	//10
	{
		name: "smoke",
		bouyancy: 1,
		falls: -1,
		s: "g",
		color: [100, 100, 100],
		radiates: 0.05,
		stateChange: [1, 1, 1, 1, 0.11],
	},
	//11
	{
		name: "mud",
		bouyancy: 1,
		falls: 0,
		s: "s",
		color: [101, 67, 33],
		radiates: 0,
		stateChange: [8, 12, 0.7, 0, 0.9],
	},
	//12
	{
		name: "burning",
		bouyancy: 0.5,
		falls: 1,
		s: "g",
		color: [200, 0, 0],
		radiates: 0.1,
		mixes: [1, 13, 10],
		stateChange: [1, 1, 1, 1, 0.5],
	},
	//13
	{
		name: "gravel",
		bouyancy: 1,
		falls: 1,
		s: "s",
		color: [170, 170, 170],
		stateChange: [4, 5, 0.7, 0, 0.1],
		radiates: 0,
	},
	//14
	{
		name: "dust",
		bouyancy: 1,
		falls: -1,
		s: "g",
		color: [170, 170, 170],
		stateChange: [1, 1, 0, 1, 0.1],
		radiates: 0,
	},
	//15

	{
		name: "explosionDense",
		bouyancy: 1,
		falls: 0,
		s: "g",
		color: [245, 19, 2],
		radiates: 0.5,
		mixes: [1, 17.5, 17.5],
	},
	//16
	{
		name: "explosionMedium",
		bouyancy: 0.4,
		falls: 0,
		s: "g",
		color: [212, 66, 17],
		radiates: 0.5,
		mixes: [1, 18.5, 18.5],
	},
	//17
	{
		name: "explosionLight",
		bouyancy: 0,
		falls: 0,
		s: "g",
		color: [219, 150, 11],
		radiates: 0.3,
		mixes: [1, 10.5, 10.5, 8, 1.5, 1.5],
	},
	//18
	{
		name: "brick",
		bouyancy: 1,
		falls: 0,
		s: "s",
		color: [150, 150, 150],
		texture: 30, //12, //3,
		resx: 250,
		resy: 250,
		scale: 5,
		radiates: 0,
		// stateChange: [16, 19, 0, -1, 0.001],
	},
	//19

	{
		name: "poison",
		bouyancy: 1,
		falls: 0,
		s: "g",
		color: [250, 0, 250],
		scale: 5,
		radiates: 0,
		stateChange: [16, 16, 0, 0, 0.001],
		mixes: [3, 2, 2],
	},
	//20
	{
		name: "static ice",
		bouyancy: 0.2,
		falls: 0,
		s: "s",
		stateChange: [3, 7, 0.2, -0.9, 0.5],
		color: [200, 200, 255],
		radiates: -0.5,
	},
	// //21
];

const originalPPropsLength = pProps.length;

function getRandArrayIndex() {
	//exclue 'border'
	//return a random index (int)
	const validExistingMaterialIds = pProps.slice(2, pProps.length).map((_, index) => index + 2);
	if (validExistingMaterialIds.length === 0) {
		return 0; // Fallback to border if no valid materials
	}
	return validExistingMaterialIds[Math.floor(getRand() * validExistingMaterialIds.length)];
}
function addRandomMaterial() {
	const randomName = "Random_" + Math.floor(getRand() * 1000);
	const randomBouyancy = parseFloat((getRand() * 1.5).toFixed(2)); // Between 0 and 1.5
	const randomFalls = getRand() > 0.6 ? 1 : getRand() < 0.4 ? -1 : 0; // 1, 0, or -1
	const randomS = ["s", "l", "g"][Math.floor(getRand() * 3)]; // 's', 'l', or 'g'
	const randomColor = [Math.floor(getRand() * 256), Math.floor(getRand() * 256), Math.floor(getRand() * 256)];
	const randomRadiates = parseFloat((getRand() * 0.6 - 0.3).toFixed(2)); // Between -0.3 and 0.3

	let randomStateChange = undefined;
	// 50% chance to have stateChange
	if (getRand() < 0.5) {
		randomStateChange = [
			getRandArrayIndex(), // Target material A (index)
			getRandArrayIndex(), // Target material B (index)
			parseFloat(getRand().toFixed(2)), // Threshold A (e.g., heat > 0.5)
			parseFloat((getRand() - 0.5).toFixed(2)), // Threshold B (e.g., heat < -0.9)
			parseFloat(getRand().toFixed(3)), // Probability (e.g., 0.001 to 0.5)
		];
	}

	let randomMixes = undefined;
	// 50% chance to have mixes
	if (getRand() < 0.5) {
		randomMixes = [];
		const power = 1; // Tweak this value to adjust the average and skew
		numMixes = Math.min(10, Math.floor(1 + 9 * (1 - getRand() ** power)));
		numMixes = Math.max(1, numMixes); // Ensure minimum of 1
		console.log("numMixes", numMixes);
		for (let i = 0; i < numMixes; i++) {
			randomMixes.push(getRandArrayIndex()); // Trigger material (index)
			randomMixes.push(getRandArrayIndex() + getRand() / 1.01); // Result material A (index.fraction)
			randomMixes.push(getRandArrayIndex() + getRand() / 1.01); // Result material B (index.fraction)
		}
	}

	const newMaterial = {
		name: randomName,
		bouyancy: randomBouyancy,
		falls: randomFalls,
		s: randomS,
		color: randomColor,
		radiates: randomRadiates,
		stateChange: randomStateChange, // Will be undefined if no state change
		mixes: randomMixes, // Will be undefined if no mixes
	};

	// Assuming pProps is accessible in this scope for consistency
	pProps.push(newMaterial);
	return pProps.length - 1; // Return the index of the new material
}

// Helper function to get a random material ID (index) from pProps
function getRandomMaterialId(includeNewRandom = false) {
	if (includeNewRandom && getRand() < 0.3) {
		// 30% chance to generate a completely new material
		return addRandomMaterial();
	} else {
		// Exclude 'border' (index 0) and 'nothing' (index 1) for world generation
		const validExistingMaterialIds = pProps.slice(2, pProps.length).map((_, index) => index + 2);
		if (validExistingMaterialIds.length === 0) {
			// Fallback if somehow only border and nothing exist
			return addRandomMaterial();
		}
		return validExistingMaterialIds[Math.floor(getRand() * validExistingMaterialIds.length)];
	}
}

let particles = new Float16Array();

let frame = {
	x: 0,
	y: 0,
	width: 149,
	height: 80,
};
let canvasOne = document.getElementById("screen");

let canvasOneGraphics = canvasOne.getContext("2d", {
	alpha: "false",
});
let canvasTwo = document.getElementById("screen2");

let canvasTwoGraphics = canvasTwo.getContext("2d", {
	alpha: "false",
});
let canvasThree = document.getElementById("entitiesScreen");

let canvasThreeGraphics = canvasThree.getContext("2d", {
	alpha: "false",
});

let entities = [
	{
		name: "character",
		image: 0,
		x: 5,
		render: true,
		y: 15,
		width: 5,
		flipped: 1,
		height: 5,
		yVel: 0,
		xVel: 0,
		touchingGround: true,
	},
	{
		name: "stairs",
		image: 10,
		x: 3,
		render: true,
		y: 10,
		width: 10,
		gravityOff: true,
		flipped: 1,
		height: 10,
		yVel: 0,
		xVel: 0,
		touchingGround: true,
		physicsOff: true,
	},
];

let images = [
	new Image(), //0
];

images[0].src = "Images/rock8bit.jpg";

for (var i = 0; i < images.length; i++) {
	images[i].style.width = "60px";
	images[i].style.height = "60px";
}

var player = entities[0];

var gameloop;
