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

    create ()
    {
        this.cursor = this.input.keyboard!.createCursorKeys(); 

        this.add.image(60,60,'background')

        this.grid = this.physics.add.staticGroup();

        this.playButton = this.add.image(1,2, 'button', 1).setInteractive();

    }
}
