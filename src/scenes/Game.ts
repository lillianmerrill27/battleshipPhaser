import { Scene } from 'phaser';

const WIDTH = 400;
const HEIGHT = 400;
const CELL_SIZE = 32;
const offsetX = 10;
const offsetY = 10

export class Game extends Scene
{
    grid: Phaser.GameObjects.Grid;
    cursor: Phaser.Types.Input.Keyboard.CursorKeys;
    //ships
    destroyer: Phaser.GameObjects.Sprite;
    submarine: Phaser.GameObjects.Sprite;
    cruiser: Phaser.GameObjects.Sprite;
    battleship: Phaser.GameObjects.Sprite;
    carrier: Phaser.GameObjects.Sprite;
    positions: any;

    playButton: Phaser.GameObjects.Image;

    gameObject: any; 
    pointer: any;
    dragX: any;
    dragY: any;

    area: any;
    lengthDestroyer: any;
    lengthCruiser: any;
    lengthSub: any;
    lengthBattl: any;
    lengthCarrier: any;


    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('background', 'assets/bg.png')
        
        this.load.image('destroyer', 'assets/battleships/destroyerShip.png');
        this.load.image('submarine', 'assets/battleships/submarine.png');
        this.load.image('cruiser', 'assets/battleships/cruiser.png');
        this.load.image('battleship', 'assets/battleships/battleship.png');
        this.load.image('carrier', 'assets/battleships/carrier.png');

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
        this.grid = this.add.grid(192,180,CELL_SIZE*10,CELL_SIZE*10,CELL_SIZE,CELL_SIZE,0xff0000)

        
        this.destroyer = this.add.sprite(200, 500, 'destroyer').setScale(2.6).setInteractive({ draggable: true });
        this.submarine = this.add.sprite(250, 200, 'submarine').setOrigin(0, 0.5).setScale(2.6).setInteractive({ draggable: true });
        this.cruiser = this.add.sprite(300, 200, 'cruiser').setOrigin(0 ,0.5).setScale(2.6).setInteractive({ draggable: true });
        this.battleship = this.add.sprite(150, 200, 'battleship').setOrigin(0, 0.65).setScale(2.6).setInteractive({ draggable: true });
        this.carrier = this.add.sprite(100, 200, 'carrier').setOrigin(0, 0.65).setScale(2.6).setInteractive({ draggable: true });
        this.positions = {};
       
        this.lengthDestroyer = 1; //+1 --> 2
        this.lengthSub = 2; //+1 --> 3
        this.lengthCruiser = 2; //+1 --> 3
        this.lengthBattl = 3; //+1 --> 4
        this.lengthCarrier = 4; //+1 --> 5

        // this.playButton = this.add.image(1,2, 'button', 1).setInteractive();

        // this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        //     this.dragX = Phaser.Math.Snap.To(dragX, 64);
        //     this.dragY = Phaser.Math.Snap.To(dragY, 64);
        //     gameObject.setPosition(dragX, dragY);
        // });

        for(let i=0; i < this.lengthDestroyer ; i++) {
            // x = this.dragX/32-1
            // y = this.dragY/32-1
        }

        for(let i=0; i < this.lengthSub ; i++) {
            
        }

        for(let i=0; i < this.lengthCruiser ; i++) {
            
        }

        for(let i=0; i < this.lengthBattl ; i++) {
            
        }

        for(let i=0; i < this.lengthCarrier ; i++) {
            
        }

        this.input.on(
            'drag',
            (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number) => {
                this.dragX = Phaser.Math.Snap.To(dragX, CELL_SIZE);
                this.dragY = Phaser.Math.Snap.To(dragY, CELL_SIZE);
                (gameObject as Phaser.GameObjects.Image).setPosition(this.dragX, this.dragY);
                this.positions[gameObject.texture.key] = {
                    x: this.dragX/32-1,
                    y: this.dragY/32-1
                }
                console.log(this.positions);
                console.log(this.dragX/32 - 1,this.dragY/32 - 1) //then update grid
            }
        );


    }
}
