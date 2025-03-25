import { Scene, Tilemaps, Time } from 'phaser';

const WIDTH = 400;
const HEIGHT = 400;
const CELL_SIZE = 32;
const offsetX = 10;
const offsetY = 10
const coords = '(dragX/32, dragY/32)'
const rowWidth = 10;
const colHeight = 10;

export class Game extends Scene
{
    grid: Phaser.GameObjects.Grid;
    cursor: Phaser.Types.Input.Keyboard.CursorKeys;
    confirmBttn: any;

    ships: Phaser.GameObjects.Sprite[];
    destroyer: Phaser.GameObjects.Sprite;
    submarine: Phaser.GameObjects.Sprite;
    cruiser: Phaser.GameObjects.Sprite;
    battleship: Phaser.GameObjects.Sprite;
    carrier: Phaser.GameObjects.Sprite;
    positions: { [key: string]: {x: number, y: number}};


    /** The currently dragged x coordinate on the grid. */
    dragX: number;
    /** The currently dragged x coordinate on the grid. */
    dragY: number;

    x: number;
    y: number;

    constructor ()
    {
        super('Game');
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

        this.x = this.dragX/32;
        this.y = this.dragY/32;

        this.input.on(
            'drag',
            (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.Sprite, dragX: number, dragY: number) => {
                this.dragX = Phaser.Math.Snap.To(dragX, CELL_SIZE);
                this.dragY = Phaser.Math.Snap.To(dragY, CELL_SIZE);
                (gameObject as Phaser.GameObjects.Image).setPosition(this.dragX, this.dragY);
                this.positions[gameObject.texture.key] = {
                    x: this.dragX/32,
                    y: this.dragY/32,
                }
                console.log(this.positions);
                console.log(this.dragX/32,this.dragY/32); //then update grid
        });
    
//confirm button
        this.confirmBttn = this.add.text(200,500, 'Confirm',  { fill: '#0f0' });
//button --> when click, 
        this.confirmBttn.setInteractive({
            onclick() {
                let coordinates = [];
                for (let gridY = 0; gridY < this.grid.rowWidth; gridY++) {
                    for (let gridX = 0; gridX < this.grid.rowWidth; gridX++) {
                        let busy = false; //
                        let shipname = null;
                        let shiplength = null;
                        //continue next tab over.... 
                    }

                }

            }
        });

        

    }
    update(){


    }
}