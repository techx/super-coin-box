!function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){function o(t){var e=t.message,i=t.filename+": "+t.lineno;-1==window.location.href.indexOf("localhost")?(ga("send","event","Unhandled Error",e,i),console.log("Error caught by google analytics")):console.log("Localhost, not sending error...")}if(window.addEventListener("error",o,!1),"object"==typeof localStorage)try{localStorage.setItem("localStorage",1),localStorage.removeItem("localStorage")}catch(s){Storage.prototype._setItem=Storage.prototype.setItem,Storage.prototype.setItem=function(){},alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you. In this case, your coins and lives will not be saved! To be fixed soon.')}var a=new Phaser.Game(800,560,Phaser.AUTO,"game"),n=i(4),r=i(1)(a),l=i(2)(a),d=i(3)(a),h=i(5)(a),c=i(6)(a);a.global={score:0,coins:window.localStorage.coins||0,modal:new n(a)},a.state.add("boot",r),a.state.add("load",l),a.state.add("shop",c),a.state.add("menu",d),a.state.add("play",h),a.state.start("boot")},function(t,e){t.exports=function(t){return{preload:function(){t.device.desktop||(t.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,document.body.style.backgroundColor="#3498db",t.scale.pageAlignHorizontally=!0,t.scale.pageAlignVertically=!0),t.load.image("progressBar","assets/progressBar.png")},create:function(){t.stage.backgroundColor="#3498db",t.physics.startSystem(Phaser.Physics.ARCADE),t.state.start("load")}}}},function(t,e){t.exports=function(t){return{preload:function(){var e=t.add.text(t.world.centerX,150,"loading...",{font:"30px Arial",fill:"#ffffff"});e.anchor.setTo(.5,.5);var i=t.add.sprite(t.world.centerX,200,"progressBar");i.anchor.setTo(.5,.5),t.load.setPreloadSprite(i),t.load.spritesheet("player","assets/player2.png",20,20),t.load.image("enemy","assets/enemy.png"),t.load.image("coin","assets/coin.png"),t.load.image("background","assets/background.png"),t.load.audio("jump",["assets/jump.ogg","assets/jump.mp3"]),t.load.audio("coin",["assets/coin.ogg","assets/coin.mp3"]),t.load.audio("dead",["assets/dead.ogg","assets/dead.mp3"]),t.load.audio("music",["assets/music_happy.mp3"]),t.load.image("pixel","assets/pixel.png"),t.load.spritesheet("mute","assets/muteButton.png",28,22),t.load.image("tileset","assets/tileset.png"),t.load.tilemap("map","assets/map.json",null,Phaser.Tilemap.TILED_JSON),t.load.image("jumpButton","assets/jumpButton.png"),t.load.image("rightButton","assets/rightButton.png"),t.load.image("leftButton","assets/leftButton.png"),t.load.image("backButton","assets/back.png"),t.load.image("moreLives","assets/more-lives.png")},create:function(){t.state.start("menu")}}}},function(t,e){t.exports=function(t){return{checkDecoded:!0,create:function(){var e=t.add.sprite(0,0,"background");e.inputEnabled=!0;var i=t.add.text(t.world.centerX,-100,"Super Coin Box",{font:"100px Geo",fill:"#ffffff"});i.anchor.setTo(.5,.5);var o=t.add.text(t.world.centerX,t.world.centerY,"score: "+t.global.score,{font:"40px Arial",fill:"#ffffff"});if(o.anchor.setTo(.5,.5),t.device.desktop)var s="press the up arrow key to start";else var s="touch the screen to start";var a=t.add.text(t.world.centerX,t.world.height-120,s,{font:"40px Arial",fill:"#ffffff"});a.anchor.setTo(.5,.5),a.angle=2;var n=t.input.keyboard.addKey(Phaser.Keyboard.UP);n.onDown.addOnce(this.start,this),this.checkDecoded&&(this.musicLoadingLabel=t.add.text(t.world.centerX,t.world.height-18,"Loading music...",{font:"14px Arial",fill:"#ffffff"}),this.musicLoadingLabel.anchor.setTo(.5,.5)),t.add.tween(i).to({y:80},700).easing(Phaser.Easing.Bounce.Out).start(),t.add.tween(a).to({angle:-2},500).to({angle:2},500).loop().start(),this.music=t.add.audio("music"),this.muteButton=t.add.button(40,40,"mute",this.toggleSound,this),this.muteButton.input.useHandCursor=!0,t.sound.mute&&(this.muteButton.frame=1);var r=t.device.desktop?"Press the Down Arrow key to shop":"Tap to shop";this.shopButton=t.add.text(t.world.centerX,t.world.height-200,r,{font:"36px Arial",fill:"#ffffff"}),this.shopButton.anchor.setTo(.5,.5),this.shopButton.inputEnabled=!0,this.shopButton.events.onInputDown.addOnce(this.shop,this);var l=t.input.keyboard.addKey(Phaser.Keyboard.DOWN);l.onDown.addOnce(this.shop,this),e.events.onInputDown.add(this.start,this)},shop:function(){t.state.start("shop")},toggleSound:function(){t.sound.mute=!t.sound.mute,this.muteButton.frame=t.sound.mute?1:0},start:function(){t.state.start("play")},update:function(){this.checkDecoded&&!this.music.isDecoding&&(t.world.remove(this.musicLoadingLabel),this.checkDecoded=!1)}}}},function(t,e){t.exports=function(t){var e=this;return t.modals={},this.hideModal=function(e){window.console.log(e),t.modals[e].visible=!1},{createModal:function(i){var o,s=i.type||"",a=i.includeBackground,n=i.backgroundColor||"0x000000",r=void 0===i.backgroundOpacity?.7:i.backgroundOpacity,l=i.modalCloseOnInput||!1,d=i.modalBackgroundCallback||!1,h=(i.vCenter||!0,i.hCenter||!0,i.itemsArr||[]),c=i.fixedToCamera||!1,u=t.add.group();if(c===!0&&(u.fixedToCamera=!0,u.cameraOffset.x=0,u.cameraOffset.y=0),a===!0)if(o=t.add.graphics(t.width,t.height),o.beginFill(n,r),o.x=0,o.y=0,o.drawRect(0,0,t.width,t.height),l===!0){var p=t.add.sprite(0,0);p.inputEnabled=!0,p.width=t.width,p.height=t.height,p.type=s,p.input.priorityID=0,p.events.onInputDown.add(function(t,e){this.hideModal(t.type)},e,2),u.add(p)}else d=!0;if(d){var p=t.add.sprite(0,0);p.inputEnabled=!0,p.width=t.width,p.height=t.height,p.type=s,p.input.priorityID=0,u.add(p)}a&&u.add(o);for(var y,f=0;f<h.length;f+=1){var g=h[f],m=g.type||"text",v=g.color||0,b=g.fontFamily||"Arial",x=g.fontSize||32,w=g.stroke||"0x000000",T=g.strokeThickness||0,L=g.align||"center",E=g.offsetX||0,k=g.offsetY||0,S=g.contentScale||1,B=g.content||"",P=t.width/2,C=t.height/2,D=g.callback||!1,M=g.textAlign||"left",A=g.atlasParent||"",I=g.buttonHover||B,O=g.buttonActive||B,K=g.graphicColor||16777215,X=g.graphicOpacity||1,j=g.graphicWidth||200,F=g.graphicHeight||200,R=g.lockPosition||!1;y=null,"text"===m||"bitmapText"===m?"text"===m?(y=t.add.text(0,0,B,{font:x+"px "+b,fill:"#"+String(v).replace("0x",""),stroke:"#"+String(w).replace("0x",""),strokeThickness:T,align:L}),y.contentType="text",y.update(),y.x=t.width/2-y.width/2+E,y.y=t.height/2-y.height/2+k):(y=t.add.bitmapText(0,0,b,String(B),x),y.contentType="bitmapText",y.align=M,y.updateText(),y.x=P-y.width/2+E,y.y=C-y.height/2+k):"image"===m?(y=t.add.image(0,0,B),y.scale.setTo(S,S),y.contentType="image",y.x=P-y.width/2+E,y.y=C-y.height/2+k):"sprite"===m?(y=t.add.sprite(0,0,A,B),y.scale.setTo(S,S),y.contentType="sprite",y.x=P-y.width/2+E,y.y=C-y.height/2+k):"button"===m?(y=t.add.button(0,0,A,D,this,I,B,O,B),y.scale.setTo(S,S),y.contentType="button",y.x=P-y.width/2+E,y.y=C-y.height/2+k):"graphics"===m&&(y=t.add.graphics(j,F),y.beginFill(K,X),y.drawRect(0,0,j,F),y.endFill(),y.x=P-y.width/2+E,y.y=C-y.height/2+k),y._offsetX=0,y._offsetY=0,y.lockPosition=R,y._offsetX=E,y._offsetY=k,D!==!1&&"button"!==m&&(y.inputEnabled=!0,y.pixelPerfectClick=!0,y.priorityID=10,y.events.onInputDown.add(D,y)),"bitmapText"!==m&&"graphics"!==m?(y.bringToTop(),u.add(y),y.bringToTop(),u.bringToTop(y)):(u.add(y),u.bringToTop(y))}u.visible=!1,t.modals[s]=u},updateModalValue:function(e,i,o,s){var a;void 0!==o&&null!==o&&(a=t.modals[i].getChildAt(o)),"text"===a.contentType?(a.text=e,a.update(),a.lockPosition===!0||(a.x=t.width/2-a.width/2+a._offsetX,a.y=t.height/2-a.height/2+a._offsetY)):"bitmapText"===a.contentType?(a.text=e,a.updateText(),a.lockPosition===!0||(a.x=t.width/2-a.width/2+a._offsetX,a.y=t.height/2-a.height/2+a._offsetY)):"image"===a.contentType&&a.loadTexture(e)},getModalItem:function(e,i){return t.modals[e].getChildAt(i)},showModal:function(e){t.world.bringToTop(t.modals[e]),t.modals[e].visible=!0},hideModal:function(e){t.modals[e].visible=!1},destroyModal:function(e){t.modals[e].destroy(),delete t.modals[e]}}}},function(t,e){t.exports=function(t){return playState={level:1,maxLevel:1,coinPositions:[{x:120,y:135},{x:680,y:135},{x:120,y:295},{x:680,y:295},{x:120,y:455},{x:680,y:455}],typed:"",lives:3,energy:100,maxEnergy:100,currentFadeOutEnergyLabelTween:null,prevEnergyUpdateTime:0,create:function(){t.time.advancedTiming=!0,t.renderer.renderSession.roundPixels=!0,this.level=1,this.lives=window.localStorage.lives||3,t.global.score=0,this.maxEnergy=100,this.energy=this.maxEnergy,this.currentFadeOutEnergyLabelTween=null,this.cursor=t.input.keyboard.createCursorKeys(),this.player=t.add.sprite(t.world.centerX,t.world.centerY,"player"),this.player.anchor.setTo(.5,.5),t.physics.arcade.enable(this.player),this.player.body.gravity.y=500,this.player.animations.add("right",[1,2],8,!0),this.player.animations.add("left",[3,4],8,!0),this.enemies=t.add.group(),this.enemies.enableBody=!0,this.enemies.createMultiple(30,"enemy"),this.bullets=t.add.group(),this.bullets.enableBody=!0,this.bullets.createMultiple(20,"pixel"),this.coin=t.add.sprite(0,0,"coin"),this.coin.anchor.setTo(.5,.5),this.updateCoinPosition(),t.physics.arcade.enable(this.coin),this.scoreLabel=t.add.text(30,30,"Score: 0",{font:"24px Arial",fill:"#ffffff"}),t.global.score=0,this.levelLabel=t.add.text(30,60,"Level "+this.level,{font:"24px Arial",fill:"#ffffff"}),this.livesLabel=t.add.text(30,90,"Lives: "+this.lives,{font:"24px Arial",fill:"#ffffff"}),this.coinsLabel=t.add.text(30,120,"Coins: "+t.global.coins,{font:"24px Arial",fill:"#ffffff"}),this.jumpSound=t.add.audio("jump"),this.coinSound=t.add.audio("coin"),this.deadSound=t.add.audio("dead"),this.emitter=t.add.emitter(0,0),this.emitter.makeParticles("pixel",0,150,!0),this.emitter.setYSpeed(-150,150),this.emitter.setXSpeed(-150,150),this.emitter.gravity=0,this.music=t.add.audio("music"),this.music.loop=!0,this.music.volume=.5,this.music.play(),this.createWorld(),this.maxLevel=this.map.layers.length,this.nextEnemy=0,t.input.keyboard.addKeyCapture([Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.SPACEBAR]),this.wasd={up:t.input.keyboard.addKey(Phaser.Keyboard.W),left:t.input.keyboard.addKey(Phaser.Keyboard.A),right:t.input.keyboard.addKey(Phaser.Keyboard.D)},t.device.desktop||this.addMobileInputs();var e=t.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);e.onDown.add(this.fire,this),t.input.keyboard.onUpCallback=this.checkCheats,this.muteButton=t.add.button(t.world.width-40,30,"mute",this.toggleSound,this),this.muteButton.input.useHandCursor=!0,this.muteButton.anchor.setTo(1,0),t.sound.mute&&(this.muteButton.frame=1),this.energyLabel=t.add.text(t.world.width-40,60,"Energy: 100",{font:"24px Arial",fill:"#ffffff"}),this.updateEnergy(),this.energyLabel.anchor.setTo(1,0),this.notEnoughEnergyLabel=t.add.text(t.world.centerX,t.world.height-34,"Not Enough Energy!",{font:"24px Arial",fill:"#ffffff"}),this.notEnoughEnergyLabel.anchor.setTo(.5,.5),this.notEnoughEnergyLabel.alpha=0},incrementEnergy:function(){this.energy>=this.maxEnergy||(this.energy+=5,this.updateEnergy())},fire:function(){if(this.energy>=20){this.prevEnergyUpdateTime=t.time.now,this.energy-=20,Math.abs(this.player.body.velocity.x)>this.player.body.velocity.y?(this.emitter.x=this.player.x+this.player.body.velocity.x/2,this.emitter.y=this.player.y):0==this.player.body.velocity.x&&0==this.player.body.velocity.y?(this.emitter.x=this.player.x,this.emitter.y=this.player.y+this.player.body.velocity.y/2):(this.emitter.x=this.player.x,this.emitter.y=this.player.y),this.emitter.start(!0,600,null,30);for(var e=0;4>e;e++){var i=this.bullets.getFirstDead();switch(i.reset(this.player.x,this.player.y),i.lifespan=1e3,e){case 0:i.body.velocity.y=400;break;case 1:i.body.velocity.x=400;break;case 2:i.body.velocity.x=-400;break;case 3:i.body.velocity.y=-400}}this.updateEnergy()}else this.notEnoughEnergy()},notEnoughEnergy:function(){null!=this.currentFadeOutEnergyLabelTween&&this.currentFadeOutEnergyLabelTween.stop(),this.notEnoughEnergyLabel.alpha=1,t.time.events.add(2*Phaser.Timer.SECOND,this.enoughEnergy,this)},enoughEnergy:function(){this.currentFadeOutEnergyLabelTween=t.add.tween(this.notEnoughEnergyLabel).to({alpha:0},1e3,Phaser.Easing.Linear.None,!0)},updateEnergy:function(){this.energyLabel.setText("Energy: "+this.energy)},toggleSound:function(){t.sound.mute=!t.sound.mute,this.muteButton.frame=t.sound.mute?1:0},checkCheats:function(e){playState.typed+=String.fromCharCode(e.keyCode),playState.typed=playState.typed.substring(playState.typed.length-4,playState.typed.length),-1!=playState.typed.indexOf("HELP")?playState.enemies.forEachAlive(function(t){t.kill()}):-1!=playState.typed.indexOf("MORE")?(t.global.score+=50,playState.checkLevelUp(),playState.scoreLabel.setText("Score: "+t.global.score)):-1!=playState.typed.indexOf("LIVE")&&(playState.lives++,playState.livesLabel.setText("Lives: "+playState.lives))},checkLevelUp:function(){t.global.score%50==0&&this.levelUp()},addMobileInputs:function(){this.jumpButton=t.add.sprite(650,400,"jumpButton"),this.jumpButton.inputEnabled=!0,this.jumpButton.alpha=.5,this.moveLeft=!1,this.moveRight=!1,this.leftButton=t.add.sprite(50,400,"leftButton"),this.leftButton.inputEnabled=!0,this.leftButton.events.onInputOver.add(function(){this.moveLeft=!0},this),this.leftButton.events.onInputOut.add(function(){this.moveLeft=!1},this),this.leftButton.events.onInputDown.add(function(){this.moveLeft=!0},this),this.leftButton.events.onInputUp.add(function(){this.moveLeft=!1},this),this.leftButton.alpha=.5,this.rightButton=t.add.sprite(170,400,"rightButton"),this.rightButton.inputEnabled=!0,this.rightButton.events.onInputOver.add(function(){this.moveRight=!0},this),this.rightButton.events.onInputOut.add(function(){this.moveRight=!1},this),this.rightButton.events.onInputDown.add(function(){this.moveRight=!0},this),this.rightButton.events.onInputUp.add(function(){this.moveRight=!1},this),this.rightButton.alpha=.5,this.jumpButton.events.onInputDown.add(this.jumpPlayer,this)},createWorld:function(){this.map=t.add.tilemap("map"),this.map.addTilesetImage("tileset"),this.layer=this.map.createLayer("Level "+this.level),this.setupMap()},levelUp:function(){this.lives++,this.livesLabel.setText("Lives: "+this.lives),this.level>=this.maxLevel||(this.level++,this.layer.destroy(),this.enemies.forEachAlive(function(t){t.kill()}),this.player.x=t.world.centerX,this.player.y=t.world.centerY,this.layer=this.map.createLayer("Level "+this.level),this.setupMap(),this.levelLabel.setText("Level "+this.level))},setupMap:function(){this.layer.resizeWorld(),this.map.setCollision(1,!0,this.layer),this.map.setTileIndexCallback(2,this.collidedWithRed,this,this.layer)},collidedWithRed:function(t){t==this.player&&this.playerDie()},addEnemy:function(){var e=this.enemies.getFirstDead();e&&(e.anchor.setTo(.5,1),e.reset(t.world.centerX,0),Phaser.Utils.chanceRoll(Math.min(10+t.global.score/2.5,50))?(e.scale.setTo(1.3,1.3),e.body.gravity.y=700,e.body.velocity.x=150*(Math.random()>.5==1?-1:1)):(e.scale.setTo(1,1),e.body.gravity.y=500,e.body.velocity.x=100*(Math.random()>.5==1?-1:1)),e.body.bounce.x=1,e.checkWorldBounds=!0,e.outOfBoundsKill=!0)},update:function(){if(window.location.href.indexOf("localhost")&&t.debug.text(t.time.fps,2,14,"#00ff00"),t.physics.arcade.collide(this.player,this.layer),t.physics.arcade.collide(this.enemies,this.layer),t.physics.arcade.overlap(this.player,this.coin,this.takeCoin,null,this),t.physics.arcade.overlap(this.player,this.enemies,this.playerDie,null,this),t.physics.arcade.collide(this.enemies,this.emitter,this.enemyDie,null,this),t.physics.arcade.collide(this.enemies,this.bullets,this.enemyDie,null,this),this.movePlayer(),this.player.inWorld||this.playerDie(),this.nextEnemy<t.time.now){var e=4e3,i=1e3,o=100,s=Math.max(e-(e-i)*t.global.score/o,i);3==this.level&&(s=500),this.addEnemy(),this.nextEnemy=t.time.now+s}t.time.now-this.prevEnergyUpdateTime>=5*Phaser.Timer.SECOND/2&&(this.incrementEnergy(),this.prevEnergyUpdateTime=t.time.now)},enemyDie:function(t){t.kill()},movePlayer:function(){this.cursor.left.isDown||this.wasd.left.isDown||this.moveLeft?(this.player.body.velocity.x=-200,this.player.animations.play("left")):this.cursor.right.isDown||this.wasd.right.isDown||this.moveRight?(this.player.body.velocity.x=200,this.player.animations.play("right")):(this.player.body.velocity.x=0,this.player.frame=0),(this.cursor.up.isDown||this.wasd.up.isDown)&&this.jumpPlayer()},takeCoin:function(e,i){t.global.score+=5,t.global.coins++,this.scoreLabel.text="Score: "+t.global.score,this.coinsLabel.text="Coins: "+t.global.coins,window.localStorage.coins=t.global.coins,this.coinSound.play(),this.updateCoinPosition(),t.global.score%50==0&&this.levelUp(),this.coin.scale.setTo(0,0),t.add.tween(this.coin.scale).to({x:1,y:1},300).start(),t.add.tween(this.player.scale).to({x:1.3,y:1.3},50).to({x:1,y:1},150).start()},updateCoinPosition:function(){for(var e,i=0;i<this.coinPositions.length;i++)if(this.coinPositions[i].x===this.coin.x&&this.coinPositions[i].y==this.coin.y)var e=this.coinPositions.splice(i,1);var o=this.coinPositions[t.rnd.integerInRange(0,this.coinPositions.length-1)];null!=e&&this.coinPositions.push(e[0]),this.coin.reset(o.x,o.y)},playerDie:function(){this.player.alive&&(this.lives--,this.enemies.forEachAlive(function(t){t.kill()}),this.livesLabel.setText("Lives: "+this.lives),this.player.kill(),this.emitter.x=this.player.x,this.emitter.y=this.player.y,this.emitter.start(!0,600,null,15),this.deadSound.play(),this.lives<1?(this.music.stop(),t.time.events.add(1e3,this.startMenu,this)):t.time.events.add(1e3,function(){this.player.reset(t.world.centerX,t.world.centerY)},this))},jumpPlayer:function(){this.player.body.onFloor()&&(this.player.body.velocity.y=-320,this.jumpSound.play())},startMenu:function(){t.state.start("menu")}}}},function(t,e){t.exports=function(t){return{preload:function(){t.global.modal.createModal({type:"notEnoughMoney",includeBackground:!0,modalCloseOnInput:!0,itemsArr:[{type:"text",content:"Not Enough Money!",fontFamily:"Arial",fontSize:42,color:"0xFEFF49",offsetY:-50}]})},create:function(){var e=t.add.text(t.world.centerX,-100,"Shop",{font:"100px Geo",fill:"#ffffff"});e.anchor.setTo(.5,.5),t.add.tween(e).to({y:80},700).easing(Phaser.Easing.Bounce.Out).start();var i=t.add.button(50,50,"backButton",this.back);i.scale.setTo(.3,.3),this.coinsLabel=t.add.text(t.world.width-50,50,"Coins: "+t.global.coins,{font:"36px Arial",fill:"#ffffff"}),this.coinsLabel.anchor.setTo(1,0);var o=t.add.group();o.x=50,o.y=140;var s=t.add.group(),a=s.create(0,0,"moreLives");this.addClickListener(a,this.moreLives),this.moreLivesText=t.add.text(50,100,"",{font:"18px Arial",fill:"#ffffff"}),this.setMoreLivesText(),this.moreLivesText.anchor.setTo(.5,0),this.addClickListener(this.moreLivesText,this.moreLives),s.add(this.moreLivesText),o.add(s)},setMoreLivesText:function(){this.moreLivesText.setText("More Lives $"+this.getMoreLivesCost())},getMoreLivesCost:function(){return 20*((window.localStorage.lives||3)-3)+10},moreLives:function(){t.global.coins>=this.getMoreLivesCost()?(this.updateCoins(t.global.coins-this.getMoreLivesCost()),window.localStorage.lives?window.localStorage.lives++:window.localStorage.lives=4,this.setMoreLivesText()):t.global.modal.showModal("notEnoughMoney")},updateCoins:function(e){t.global.coins=e,window.localStorage.coins=t.global.coins,this.coinsLabel.setText("Coins: "+t.global.coins)},addClickListener:function(t,e){t.inputEnabled=!0,t.input.useHandCursor=!0,t.events.onInputDown.add(e,this)},update:function(){},back:function(){t.state.start("menu")}}}}]);