class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene,x,y,key);

        scene.add.existing(this);
        this.name = key
        this.setInteractive({ draggable: true});

    }
}