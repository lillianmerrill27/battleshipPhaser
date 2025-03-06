import { Scene } from 'phaser';

const WIDTH = 400;
const HEIGHT = 400;
const CELL_SIZE = 32;

export class Game extends Scene
{
    grid: Phaser.GameObjects.Grid;
    cursor: Phaser.Types.Input.Keyboard.CursorKeys;
    //ships
    destroyer: Phaser.GameObjects.Sprite;
    submarine: Phaser.GameObjects.Sprite;;
    cruiser: Phaser.GameObjects.Sprite;;
    battleship: Phaser.GameObjects.Sprite;;
    carrier: Phaser.GameObjects.Sprite;;

    playButton: Phaser.GameObjects.Image;

    gameObject: any; 
    pointer: any;
    dragX: any;
    dragY: any;


    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('background', 'assets/bg.png')
        
        this.load.image('destroyer', 'assets/battleships/destroyerShip.png');
        this.load.image('submarine', 'assets/submarine.png');
        this.load.image('cruiser', 'assets/cruiser.png');
        this.load.image('battleship', 'assets/battleship.png');
        this.load.image('carrier', 'assets/carrier.png');

        this.load.image('grid', 'assets/grid.jpg');
        
        this.load.image('tiles', 'assets/tiles.png'); // Ensure correct path
        this.load.tilemapTiledJSON('map', 'assets/map.json'); // Ensure the map is loaded
    }

    create ()
    {

        // const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
        // const tileset = map.addTilesetImage('tiles');
        // const layer = map.createLayer('tile', tileset, 0, 0);

        if (this.input.keyboard) {
            this.cursor = this.input.keyboard!.createCursorKeys(); 
        }

        this.add.image(200,200,'background');
        // this.add.image(200,200,'grid');
        this.grid = this.add.grid(200,200,CELL_SIZE*10,CELL_SIZE*10,CELL_SIZE,CELL_SIZE,0xff0000)

        this.destroyer = this.add.sprite(200, 200, 'destroyer').setScale(4).setInteractive({ draggable: true });
        this.submarine = this.add.sprite(250, 200, 'submarine').setInteractive({ draggable: true });
        this.cruiser = this.add.sprite(300, 200, 'cruiser').setInteractive({ draggable: true });
        this.battleship = this.add.sprite(150, 200, 'battleship').setInteractive({ draggable: true });
        this.carrier = this.add.sprite(100, 200, 'carrier').setInteractive({ draggable: true });
       
        this.grid = this.add.grid();

        // this.playButton = this.add.image(1,2, 'button', 1).setInteractive();

        // this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        //     this.dragX = Phaser.Math.Snap.To(dragX, 64);
        //     this.dragY = Phaser.Math.Snap.To(dragY, 64);
        //     gameObject.setPosition(dragX, dragY);
        // });

        this.input.on(
            'drag',
            (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number) => {
                this.dragX = Phaser.Math.Snap.To(dragX, CELL_SIZE);
                this.dragY = Phaser.Math.Snap.To(dragY, CELL_SIZE);
                (gameObject as Phaser.GameObjects.Image).setPosition(this.dragX, this.dragY);
            }
        );


    }
}
