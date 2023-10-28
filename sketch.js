let player
let box = {}
let goal = {}
let obstacle = {}
let speed
let level = 1

function setup() {
	createCanvas(800, 800)
	speed = 3

	setupLevel()
}

function setupLevel() {
	switch(level) {
		case 1:
			setupLevel1()
			break
		case 2:
			setupLevel2()
			break
		case 3:
			setupLevel3()
			break
		case 4:
			setupLevel4()
			break
		case 5:
			setupLevel5()
			break
		case 6:
			setupLevel6()
			break
		default:
			console.log('ERROR');
	  } 
}

function setupClear() {
	for (let i = allSprites.length; i--;) {
		allSprites[i].remove()
	}

	box = {}
	goal = {}
	obstacle = {}
}

function setupLevel1() {
	setupClear()

	for (let x = 0; x <= 800; x += 50) {
		createWall(x, 0)
		createWall(x, 800)

		createWall(x, 200)
	}

	for (let y = 0; y <= 800; y += 50) {
		createWall(0, y)
		createWall(800, y)
	}

	createGoal('red', 'darkred', 700, 100)

	createBox('red', 'red', 200, 100)

	setupLevelboxAndHelperbox()

	createPlayer(100, 100)

	setupOverlaps()
}

function setupLevel2() {
	setupClear()
	
	for (let x = 0; x <= 800; x += 50) {
		createWall(x, 0)
		createWall(x, 800)
		
		createWall(x, 300)
	}
	
	for (let y = 0; y <= 800; y += 50) {
		createWall(0, y)
		createWall(800, y)
	}
	
	createGoal('red', 'darkred', 700, 100)
	createGoal('blue', 'darkblue', 700, 200)
	
	createBox('red', 'red', 200, 100)
	createBox('blue', 'blue', 200, 200)
	
	createPlayer(100, 150)
	
	setupLevelboxAndHelperbox()
	
	setupOverlaps()
}

function setupLevel3() {
	setupClear()
	
	for (let x = 0; x <= 800; x += 50) {
		createWall(x, 0)
		createWall(x, 800)
		
		createWall(x, 400)
	}
	
	for (let y = 0; y <= 800; y += 50) {
		createWall(0, y)
		createWall(800, y)
	}
	
	createWall(200, 50)
	createWall(200, 150)
	createWall(200, 200)
	createWall(200, 250)
	createWall(200, 350)
	
	createWall(50, 200)
	createWall(150, 200)
	createWall(200, 200)
	
	createWall(400, 50)
	createWall(400, 100)
	createWall(400, 150)
	createWall(400, 200)
	createWall(400, 250)
	createWall(400, 300)
	createWall(400, 350)
	
	createWall(250, 200)
	createWall(350, 200)
	
	createObstacle(200, 100)
	createObstacle(300, 300)
	
	createGoal('blue', 'darkblue', 100, 300)
	createBox('blue', 'blue', 300, 100)
	
	createPlayer(100, 100)
	
	setupLevelboxAndHelperbox()
	
	setupOverlaps()
}

function setupLevel4() {
	setupClear()
	
	for (let x = 0; x <= 800; x += 50) {
		createWall(x, 0)
		createWall(x, 800)
		createWall(x, 300)
	}
	
	for (let y = 0; y <= 800; y += 50) {
		createWall(0, y)
		createWall(800, y)
	}

	createWall(450, 100)
	createWall(450, 200)

	
	createGoal('blue', 'darkblue', 200, 100)
	createGoal('red', 'darkred', 200, 200)
	
	createObstacle(400, 150)
	createObstacle(500, 150)
	
	createBox('blue', 'blue', 700, 200)
	createBox('red', 'red', 700, 100)
	
	
	createPlayer(100, 150)

	setupLevelboxAndHelperbox()

	setupOverlaps()
}

function setupLevel5() {
	setupClear()
	
	for (let x = 0; x <= 800; x += 50) {
		createWall(x, 0)
		createWall(x, 800)
	}
	
	for (let y = 0; y <= 800; y += 50) {
		createWall(0, y)
		createWall(800, y)
	}

	createGoal('red', 'darkred', 200, 200)
	createGoal('blue', 'darkblue', 200, 600)

	for (let x = 50; x <= 750; x += 50) {
		for (let y = 50; y <= 750; y += 50) {
			if ((x + y) % 100 != 0) {
				createObstacle(x, y)
			}
		}
	}

	createBox('red', 'red', 600, 600)
	createBox('blue', 'blue', 600, 200)
	
	createPlayer(400, 400)

	setupOverlaps()
}

function setupLevel6() {
	setupClear()
	
	for (let x = 0; x <= 800; x += 50) {
		createWall(x, 0)
		createWall(x, 800)
	}
	
	for (let y = 0; y <= 800; y += 50) {
		createWall(0, y)
		createWall(800, y)
	}

	world.gravity.y = 10

	for (let i = 0; i < 200; i++) {
		blob = new Sprite()
		blob.d = 10
		blob.x = random(50, 750)
		blob.y = random(50, 200)
		blob.bounciness = 1
	}

	endbox = new Sprite()
	endbox.w = 200
	endbox.textSize = 40
	endbox.text = 'Geschaff!'
	endbox.collider = 'static'

	createPlayer(1000, 1000)

	setupOverlaps()
}

function setupOverlaps() {
	// overlaps
	for (let key in goal) {
		player.overlaps(goal[key])
	}
	
	for (let key_box in box) {
		for (let key_goal in goal) {
			if (key_box != key_goal) {
				box[key_box].overlaps(goal[key_goal])
			}
		}
	}
	
	for (let key_obstacle in obstacle) {
		for (let key_goal in goal) {
			obstacle[key_obstacle].overlaps(goal[key_goal])
		}
	}
}

function setupLevelboxAndHelperbox() {
	levelbox = new Sprite()
	levelbox.y = 600
	levelbox.w = 200
	levelbox.textSize = 30
	levelbox.text = 'Level ' + str(level) 

	helperbox = new Sprite()
	helperbox.y = 700
	helperbox.w = 200
	helperbox.h = 100
	helperbox.textSize = 15
	helperbox.text = 'Figur bewegen: Pfeiltasten\nLevel zurücksetzen: r'
}

function createObstacle(x, y) {
	let key = int(random(10000))
	obstacle[key] = new Sprite()
	obstacle[key].img = 'wood_box.png';
	obstacle[key].scale = 45/225
	obstacle[key].x = x
	obstacle[key].y = y
	obstacle[key].w = 45
	obstacle[key].h = 45
	obstacle[key].drag = 10
	obstacle[key].rotationLock = true
}

function createPlayer(x, y) {
	player = new Sprite()
	player.rotationLock = true
	player.d = 45
	player.x = x
	player.y = y
	player.facing = 0
	player.draw = () => {
		fill(0, 255, 0)
		circle(0, 0, player.d)
		push()
		rotate(player.facing)
		fill(255)
		circle(-8, -10, 18)
		circle(9, -11, 15)
		fill(0)
		circle(-5, -15, 5)
		circle(7, -15, 5)
		pop()
	}
}

function createWall(x, y) {
	wall = new Sprite()
	wall.color = 'gray'
	wall.collider = 'static'
	wall.w = 50
	wall.h = 50
	wall.x = x
	wall.y = y
	// wall.text = str(wall.x) + ',' + str(wall.y)
}

function createGoal(key, color, x, y) {
	goal[key] = new Sprite()
	goal[key].color = color
	goal[key].active_color = key
	goal[key].passive_color = color
	goal[key].active = false
	goal[key].x = x
	goal[key].y = y
}

function createBox(key, color, x, y) {
	box[key] = new Sprite()
	box[key].color = color

	box[key].w = 40
	box[key].h = 40
	box[key].x = x
	box[key].y = y
	box[key].drag = 10
	box[key].rotationLock = true
}

function draw() {
	clear()
	background(200)

	// movement
	if (kb.pressing('left')) {
		player.vel.x = -speed
		player.facing = 270
	} else if (kb.pressing('right')) {
		player.vel.x = speed
		player.facing = 90
	} else {
		player.vel.x = 0
	}
	if (kb.pressing('up')) {
		player.vel.y = -speed
		player.facing = 0
	} else if (kb.pressing('down')) {
		player.vel.y = speed
		player.facing = 180
	} else {
		player.vel.y = 0
	}

	// reload
	if (kb.pressing('r')) {
		setupLevel()
	}

	let all_goals_active = true
	for (let key in box) {
		if (box[key].overlapping(goal[key])) {
			goal[key].color = goal[key].active_color
			goal[key].active = true
		} else {
			goal[key].color = goal[key].passive_color
			goal[key].active = false
			all_goals_active = false
		}
	}
	if (all_goals_active) {
		level += 1
		setupLevel()
	}

}

