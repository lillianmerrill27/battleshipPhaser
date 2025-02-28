import { Scene } from 'phaser';

export class Game extends Scene
{
    grid: Phaser.Physics.Arcade.StaticGroup;
    cursor: Phaser.Types.Input.Keyboard.CursorKeys;
    //ships
    destroyer: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    submarine: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    cruiser: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    battleship: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    carrier: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    playButton: Phaser.GameObjects.Image;

    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('destroyer', 'assets/destroyerShip.png');
        this.load.image('submarine', 'assets/submarine.png');
        this.load.image('cruiser', 'assets/cruiser.png');
        this.load.image('battleship', 'assets/battleship.png');
        this.load.image('carrier', 'assets/battleship.png');
    }

    create ()
    {
        this.cursor = this.input.keyboard!.createCursorKeys(); 

        this.add.image(60,60,'background');
        this.add.image(30,30,'destroyer');

        this.grid = this.physics.add.staticGroup();

        this.playButton = this.add.image(1,2, 'button', 1).setInteractive();


    }
}
