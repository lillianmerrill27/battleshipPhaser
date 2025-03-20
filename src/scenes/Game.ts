import { Scene, Tilemaps, Time } from 'phaser';

const WIDTH = 400;
const HEIGHT = 400;
const CELL_SIZE = 32;
const offsetX = 10;
const offsetY = 10
const coords = '(dragX/32, dragY/32)'

export class Game extends Scene
{
    grid: Phaser.GameObjects.Grid;
    cursor: Phaser.Types.Input.Keyboard.CursorKeys;
    //ships

    ships: any;
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

    totalCells: any;
    length: any;
    cellWidth: any;

    coordsX: any;
    coordsY: any;

    text: any;
    map: any;
    update: any;
    updateMap: any;
    tile: any;
    x: any;
    y: any;

    shipHit: any;


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

        if (this.input.keyboard) {
            this.cursor = this.input.keyboard!.createCursorKeys(); 
        }

        this.add.image(200,200,'background');
        this.grid = this.add.grid(192,180,CELL_SIZE*10,CELL_SIZE*10,CELL_SIZE,CELL_SIZE,0xff0000)

        
        this.destroyer = this.add.sprite(160, 415, 'destroyer').setOrigin(0, 0.5).setScale(2.6).setInteractive({ draggable: true });
        this.submarine = this.add.sprite(50, 435, 'submarine').setOrigin(0, 0.5).setScale(2.6).setInteractive({ draggable: true });
        this.cruiser = this.add.sprite(225, 435, 'cruiser').setOrigin(0 ,0.5).setScale(2.6).setInteractive({ draggable: true });
        this.battleship = this.add.sprite(220, 385, 'battleship').setOrigin(0, 0.65).setScale(2.6).setInteractive({ draggable: true });
        this.carrier = this.add.sprite(35, 385, 'carrier').setOrigin(0, 0.65).setScale(2.6).setInteractive({ draggable: true });
        this.positions = {};

        this.ships = [this.carrier, this.battleship, this.cruiser, this.destroyer, this.submarine];
       
        this.ships.forEach(ship => {
            this.totalCells = ship.length / CELL_SIZE;
        })

        this.x = this.dragX/32;
        this.y = this.dragY/32;

        this.input.on(
            'drag',
            (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number) => {
                this.dragX = Phaser.Math.Snap.To(dragX, CELL_SIZE);
                this.dragY = Phaser.Math.Snap.To(dragY, CELL_SIZE);
                (gameObject as Phaser.GameObjects.Image).setPosition(this.dragX, this.dragY);
                this.positions[gameObject.texture.key] = {
                    x: this.dragX/32,
                    y: this.dragY/32,
                }

                
                
                console.log(this.positions);
                console.log(this.dragX/32,this.dragY/32); //then update grid
                this.add.text = this.text.setText()
        });
    
        

        // this.update.grid(

        // )

    }
}

console.log()