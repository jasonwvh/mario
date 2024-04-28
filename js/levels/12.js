var onetwo = Mario.onetwo = function() {
  //The things that need to be passed in are basically just dependent on what
  //tileset we're in, so it makes more sense to just make one variable for that, so
  //TODO: put as much of this in the Level object definition as possible.
  level = new Mario.Level({
    levelNumber: 1,
    playerPos: [35,192],
    loader: Mario.onetwo,
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),

    houseRoofSprite: new Mario.Sprite('sprites/tiles.png', [176, 00],[16,16],0),
    houseRoofTopSprite: new Mario.Sprite('sprites/tiles.png', [176, 16],[16,16],0),
    houseSprite: new Mario.Sprite('sprites/tiles.png', [208, 00],[16,16],0),
    houseLeftWindowSprite: new Mario.Sprite('sprites/tiles.png', [192, 00],[16,16],0),
    houseRightWindowSprite: new Mario.Sprite('sprites/tiles.png', [224, 00],[16,16],0),
    houseDoorTopSprite: new Mario.Sprite('sprites/tiles.png', [192, 16],[16,16],0),
    houseDoorBottomSprite: new Mario.Sprite('sprites/tiles.png', [208, 16],[16,16],0),

    LPipeSprites:[
      new Mario.Sprite('sprites/tiles.png', [32,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [32,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [48,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [48,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [64,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [64,144],[16,16],0),
    ],
    
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0,32], [16,16], 20, [0,1,2,3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0,48], [16,16], 20, [0,1,2,3]),
    ringSprite: new Mario.Sprite('sprites/items.png', [0,186], [16,16], 20, [0]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),

    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    bcoinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,112],[16,16], 20,[0,1,2,3]);
    },
    cloudSprites:[
      new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
    bushSprites: [
     new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)],
   goombaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]);
   },
   koopaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [96,0], [16,32], 2, [0,1]);
   },
   flagPoleSprites: [
     new Mario.Sprite('sprites/tiles.png', [256, 128], [16,16], 0),
     new Mario.Sprite('sprites/tiles.png', [256, 144], [16,16], 0),
     new Mario.Sprite('sprites/items.png', [128, 32], [16,16], 0)
   ]
 });
  ground = [[0,212]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  //build THE GROUND
  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  //build scenery
  clouds = [[7,3],[19, 2],[56, 3],[67, 2],[87, 2],[103, 2],[152, 3],[163, 2],[200, 3]];
  clouds.forEach(function(cloud){
    level.putCloud(cloud[0],cloud[1]);
  });

  twoClouds = [[36,2],[132,2],[180,2]];
  twoClouds.forEach(function(cloud){
    level.putTwoCloud(cloud[0],cloud[1]);
  });

  threeClouds = [[27,3],[75,3],[123,3],[171,3]];
  threeClouds.forEach(function(cloud){
    level.putThreeCloud(cloud[0],cloud[1]);
  });

  bHills = [0,48,96,144,192]
  bHills.forEach(function(hill) {
    level.putBigHill(hill, 12);
  });

  sHills = [16,64,111,160];
  sHills.forEach(function(hill) {
    level.putSmallHill(hill, 12);
  });

  bushes = [23,71,118,167];
  bushes.forEach(function(bush) {
    level.putBush(bush, 12);
  });

  twoBushes = [41,89,137];
  twoBushes.forEach(function(bush) {
    level.putTwoBush(bush, 12);
  });

  threeBushes = [11,59,106];
  threeBushes.forEach(function(bush) {
    level.putThreeBush(bush, 12);
  });

  //interactable terrain
  level.buildHouse(0, 11);
  level.buildHouse(0, 12);
  level.buildHouse(1, 11);
  level.buildHouse(1, 12);
  level.buildHouse(3, 11);
  level.buildHouse(3, 12);
  level.buildHouse(4, 11);
  level.buildHouse(4, 12);
  level.buildHouseDoorBottom (2, 12);
  level.buildHouseDoorTop (2, 11);
  level.buildHouseRoof(0, 10);
  level.buildhouseRoofTop(1, 10);
  level.buildhouseRoofTop(2, 10);
  level.buildhouseRoofTop(3, 10);
  level.buildHouseRoof(4, 10);
  level.buildHouseLeftWindow (1, 9);
  level.buildHouseRoof(1, 8);
  level.buildHouseRoof(2, 8);
  level.buildHouseRoof(3, 8);
  level.buildHouseRightWindow (3, 9);
  level.buildHouse(2, 9);

  //interactable terrain
  level.putQBlock(16, 9, new Mario.Bcoin([256, 144]));
  level.putBrick(20, 9, null);
  level.putQBlock(21, 9, new Mario.Mushroom([336, 144]));
  level.putBrick(22, 9, null);
  level.putQBlock(22, 5, new Mario.Bcoin([352, 80]));
  level.putQBlock(23, 9, new Mario.Bcoin([368, 144]));
  level.putBrick(24, 9, null);
  level.putPipe(28, 13, 2);
  level.putPipe(38, 13, 3);
  level.putPipe(46, 13, 4);
  // level.putBrick(77, 9, null);
  // level.putQBlock(78, 9, new Mario.Mushroom([1248, 144]));

  // e
  level.putBrick(85, 4);
  level.putBrick(86, 4);
  level.putBrick(87, 4);
  level.putBrick(85, 5);
  level.putBrick(86, 5);
  level.putBrick(87, 5);
  level.putBrick(85, 6);
  level.putBrick(86, 7);
  level.putBrick(87, 7);
  // l
  level.putBrick(89, 4);
  level.putBrick(89, 5);
  level.putBrick(89, 6);
  level.putBrick(89, 7);
  level.putBrick(90, 7);
  // level.putBrick(110, 7);
  // a
  level.putBrick(92, 4);
  level.putBrick(93, 4);
  level.putBrick(94, 4);
  level.putBrick(94, 5);
  level.putBrick(94, 6);
  level.putBrick(93, 6);
  level.putBrick(92, 6);
  level.putBrick(92, 5);
  level.putBrick(94, 7);
  // i
  level.putBrick(96, 4);
  level.putBrick(96, 5);
  level.putBrick(96, 6);
  level.putBrick(96, 7);
  // n
  level.putBrick(98, 7);
  level.putBrick(98, 6);
  level.putBrick(98, 5);
  level.putBrick(99, 4);
  level.putBrick(100, 5);
  level.putBrick(100, 6);
  level.putBrick(100, 7);
  // e
  level.putBrick(102, 4);
  level.putBrick(103, 4);
  level.putBrick(104, 4);
  level.putBrick(102, 5);
  level.putBrick(103, 5);
  level.putBrick(104, 5);
  level.putBrick(102, 6);
  level.putBrick(103, 7);
  level.putBrick(104, 7);

  // w
  level.putBrick(107, 4);
  level.putBrick(107, 5);
  level.putBrick(107, 6);
  level.putBrick(108, 7);
  level.putBrick(109, 6);
  level.putBrick(109, 5);
  level.putBrick(109, 4);
  level.putBrick(110, 7);
  level.putBrick(111, 6);
  level.putBrick(111, 5);
  level.putBrick(111, 4);
  // i
  level.putBrick(113, 4);
  level.putBrick(113, 5);
  level.putBrick(113, 6);
  level.putBrick(113, 7);
  // l
  level.putBrick(115, 4);
  level.putBrick(115, 5);
  level.putBrick(115, 6);
  level.putBrick(115, 7);
  level.putBrick(116, 7);
  // level.putBrick(110, 7);
  // l
  level.putBrick(118, 4);
  level.putBrick(118, 5);
  level.putBrick(118, 6);
  level.putBrick(118, 7);
  level.putBrick(119, 7);
  // level.putBrick(114, 7);
  // y
  level.putBrick(122, 4);
  level.putBrick(122, 5);
  level.putBrick(123, 6);
  level.putBrick(123, 7);
  level.putBrick(124, 5);
  level.putBrick(124, 4);
  // o
  level.putBrick(127, 4);
  level.putBrick(126, 4);
  level.putBrick(126, 5);
  level.putBrick(126, 6);
  level.putBrick(126, 7);
  level.putBrick(127, 7);
  level.putBrick(128, 7);
  level.putBrick(128, 6);
  level.putBrick(128, 5);
  level.putBrick(128, 4);
  // u
  level.putBrick(130, 4);
  level.putBrick(130, 5);
  level.putBrick(130, 6);
  level.putBrick(131, 7);
  level.putBrick(132, 6);
  level.putBrick(132, 5);
  level.putBrick(132, 4);
  // m
  level.putBrick(135, 7);
  level.putBrick(135, 6);
  level.putBrick(135, 5);
  level.putBrick(136, 4);
  level.putBrick(137, 5);
  level.putBrick(137, 6);
  level.putBrick(137, 7);
  level.putBrick(138, 4);
  level.putBrick(139, 5);
  level.putBrick(139, 6);
  level.putBrick(139, 7);
  // a
  level.putBrick(141, 4);
  level.putBrick(142, 4);
  level.putBrick(143, 4);
  level.putBrick(143, 5);
  level.putBrick(143, 6);
  level.putBrick(142, 6);
  level.putBrick(141, 6);
  level.putBrick(141, 5);
  level.putBrick(143, 7);
  // r
  level.putBrick(145, 4);
  level.putBrick(145, 5);
  level.putBrick(145, 6);
  level.putBrick(145, 7);
  level.putBrick(146, 4);
  // level.putBrick(146, 4);
  // r
  level.putBrick(148, 4);
  level.putBrick(148, 5);
  level.putBrick(148, 6);
  level.putBrick(148, 7);
  level.putBrick(149, 4);
  // level.putBrick(146, 4);
  // y
  level.putBrick(151, 4);
  level.putBrick(151, 5);
  level.putBrick(152, 6);
  level.putBrick(152, 7);
  level.putBrick(153, 5);
  level.putBrick(153, 4);
  // m
  level.putBrick(156, 7);
  level.putBrick(156, 6);
  level.putBrick(156, 5);
  level.putBrick(157, 4);
  level.putBrick(158, 5);
  level.putBrick(158, 6);
  level.putBrick(158, 7);
  level.putBrick(159, 4);
  level.putBrick(160, 5);
  level.putBrick(160, 6);
  level.putBrick(160, 7);
  // e
  level.putBrick(162, 4);
  level.putBrick(163, 4);
  level.putBrick(164, 4);
  level.putBrick(162, 5);
  level.putBrick(163, 5);
  level.putBrick(164, 5);
  level.putBrick(162, 6);
  level.putBrick(163, 7);
  level.putBrick(164, 7);

  // ?
  level.putBrick(166, 4);
  level.putBrick(167, 4);
  level.putBrick(168, 5);
  level.putBrick(167, 6);
  level.putBrick(166, 6);
  level.putBrick(166, 7);
  level.putQBlock(166, 9, new Mario.Ring([2656, 144]));

  //and enemies
  level.putGoomba(22, 12);
  level.putGoomba(40, 12);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};


