class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: "Scene1"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Monk1", "image/Scene1.png");
        this.load.image("speechBubble", "image/speech.png");
        this.load.audio("bgm", "audio/gabe.mp3");
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        this.isAnimationFinished = false;

        let bgm = this.sound.add("bgm", {loop : true, autoPlay: true});
        bgm.setVolume(1);
        bgm.play();
        
        let monk1 = this.add.sprite(centerX, 200, "Monk1");
        monk1.alpha = 0;
        this.tweens.add({
          targets: monk1,
          alpha: 1,
          duration: 1000,
        });

     
      
       



        let text1 = this.add.text(centerX, 450, "", {
            fontFamily: "PIXELADE",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index = 0;
        
        this.time.addEvent({
            delay: 80,
            repeat: "In a Temple far far away……\nA monk is training in his inner peace.".length - 1,
            callback: () => {
                text1.text += "In a Temple far far away……\nA monk is training in his inner peace."[index];
                index++;
            },
            callbackScope: this,
        });
        
        this.time.addEvent({
            delay: 80 * ("In a Temple far far away……\nA monk is training in his inner peace.".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
        
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
          this.scene.start("Scene2");
        }
    }
}  


class Scene2 extends Phaser.Scene {
    constructor() {
        super({key: "Scene2"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Monk2", "image/Scene2.png");
        this.load.audio("help", "audio/!.mp3");
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        this.isAnimationFinished = false;

        let Scene2 = this.add.sprite(centerX, 200, "Monk2");
        Scene2.alpha = 0;
        this.tweens.add({
          targets: Scene2,
          alpha: 1,
          duration: 1000,
        });

        let text2 = this.add.text(centerX, 450, "", {
            fontFamily: "PIXELADE",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index = 0;
        
        this.time.addEvent({
            delay: 80,
            repeat: "until.....".length - 1,
            callback: () => {
                text2.text += "until..........."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 80 * ("until.....".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
          this.scene.start("Scene3");
        }
    }
}

class Scene3 extends Phaser.Scene {
    constructor() {
        super({key: "Scene3"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Scene3", "image/Scene3.png");
        this.load.audio("help", "audio/!.mp3");

     
    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        this.isAnimationFinished = false;
        

        this.sound.stopAll();
        let hold = this.sound.add("help", {autoPlay: true});
        hold.setVolume(1);
        hold.play();

        let Scene3 = this.add.sprite(centerX, 200, "Scene3");
        Scene3.alpha = 0;
        this.tweens.add({
          targets: Scene3,
          alpha: 1,
          duration: 1000,
        });

        this.time.addEvent({
            delay: 80 * ("qqqqqqqqq".length - 1),
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
          this.scene.start("Scene4");
        }
    }
}


class Scene4 extends Phaser.Scene {
    constructor() {
        super({key: "Scene4"});
    }

    preload() {

    }    

    create() {
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;
        this.isAnimationFinished = false;

        let text5 = this.add.text(centerX, centerY, "", {
            fontFamily: "PIXELADE",
            fontSize: "48px",
            fill: "#ffffff",
        }).setOrigin(0.5);
        
        let index2 = 0;
        

        this.time.addEvent({
            delay: 500 ,
            callback: () => {
                this.onAnimationComplete();
            },
            callbackScope: this
        });
    }

    onAnimationComplete() {
        this.isAnimationFinished = true;
    }

    update() {
        let rect = this.add.rectangle(this.cameras.main.width / 2, this.cameras.main.height / 2, this.cameras.main.width, this.cameras.main.height, 0xffffff);

       
        rect.setAlpha(0);

  
        if (this.input.activePointer.leftButtonDown() && this.isAnimationFinished) {
            this.tweens.add({
                targets: rect,
                alpha: 1,
                duration: 5000, 
                onComplete: () => {
                   
                    this.scene.start("Scene5");
                }
            });
        }
        
    } 
}

class Scene5 extends Phaser.Scene {
    constructor() {
        super({key: "Scene5"});
    }

    preload() {
        this.load.path = "./assets/";
        this.load.image("Title", "image/title.png");
        this.load.image("man", "image/brucelee.png");
        this.load.image("background", "image/bg.png");
        this.load.audio("bgm", "audio/gabe.mp3");
    }    

    create() {
        this.cameras.main.fadeIn(1000, 255, 255, 255);

        let bgm = this.sound.add("bgm", {loop : true, autoPlay: true});
        bgm.setVolume(1);
        bgm.play();

        let bg = this.add.image(0, 0, 'background').setOrigin(0);

        let rect1 = this.add.graphics();
        rect1.fillStyle(0x000000, 1);
        rect1.fillRect(700, 510, 300, 60);

        let rect2 = this.add.graphics();
        rect2.fillStyle(0x000000, 1);
        rect2.fillRect(700, 400, 300, 60);

        let rect3 = this.add.graphics();
        rect3.fillStyle(0x000000, 1);
        rect3.fillRect(700, 290, 300, 60);

        let menu = this.add.text(850, 430, "PLAY\n\nOptions\n\nQuit", {
            fontFamily: "PIXELADE",
            fontSize: "50px",
            fill: "#ffffff",
        }).setOrigin(0.5);

        let title = this.add.sprite(870, 160, "Title");

        let sword = this.add.image(-100, this.cameras.main.centerY, "man");

        
        this.tweens.add({
            targets: sword,
            x: 400,
            duration: 1000,
            ease: 'Power1',
        });
    }
}
