/* ------------ */
/* GAME OF LIFE */
/* ------------ */

'use strict'

class Configurations {

    constructor() {
        this.MAP_WIDTH = 50;
        this.MAP_HEIGHT = 50;
        this.SPEED_RATE = 100;

        this.MAP_WRAPPER = document.querySelector('.game-of-life__map-wrapper');
        this.SCORE_WRAPPER = document.querySelector('.game-of-life__score');
        this.TIMER_WRAPPER = document.querySelector('.game-of-life__timer');
        this.DIALOG_WRAPPER = document.querySelector('.game-of-life__dialog');
    };
};

class Map {

    constructor(wrapper, width, height) {
        this.container = wrapper;
        this.width = width;
        this.height = height;

        this.draw();
    };

    draw = () => {
        this.container.innerHTML = '';

        let map = document.createElement('div');
        map.classList.add('map');
        this.container.appendChild(map);

        for (let y = this.height - 1; y >= 0; y--) {
            for (let x = 0; x <= this.width - 1; x++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('x', x);
                cell.setAttribute('y', y);
                map.appendChild(cell);
            };
        };
    };
};

class Figures {

    constructor() {

        this.gliders = [
            [[1, 0, 0],
            [1, 0, 1],
            [1, 1, 0]],

            [[0, 1, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]],

            [[0, 1, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]],

            [[0, 1, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]]
        ];
    };
};

/* ---- */
/* GAME */
/* ---- */

class Game {

    constructor() {
        this._init();
    };

    _init = () => {
        this.configurations = new Configurations();
        this.figures = new Figures();

        this.map = new Map(this.configurations.MAP_WRAPPER, this.configurations.MAP_WIDTH, this.configurations.MAP_HEIGHT);
        this.cells = this._generateMatrix(50, 50);

        this._paste(20, 10, this.figures.gliders[0]);
        this._paste(20, 20, this.figures.gliders[1]);
        this._paste(20, 30, this.figures.gliders[2]);
        this._paste(20, 40, this.figures.gliders[3]);
        this._draw();

        this.interval = setInterval(this._gameloop, this.configurations.SPEED_RATE);
    };

    _gameloop = () => {
        this._update();
        this._draw();
    };

    _update = () => {
        let newMatrix = this._generateMatrix(50, 50);

        const fixCollision = (n) => {
            if (n < 0) {
                return 49;
            } else if (n > 49) {
                return 0;
            };
            return n;
        };

        const countMooreNeighbours = (x, y) => {
            let neigbours = 0;

            neigbours += (this.cells[fixCollision(x - 1)][fixCollision(y - 1)] === 1) ? 1 : 0;
            neigbours += (this.cells[fixCollision(x - 1)][fixCollision(y)] === 1) ? 1 : 0;
            neigbours += (this.cells[fixCollision(x - 1)][fixCollision(y + 1)] === 1) ? 1 : 0;

            neigbours += (this.cells[fixCollision(x)][fixCollision(y - 1)] === 1) ? 1 : 0;
            neigbours += (this.cells[fixCollision(x)][fixCollision(y + 1)] === 1) ? 1 : 0;

            neigbours += (this.cells[fixCollision(x + 1)][fixCollision(y - 1)] === 1) ? 1 : 0;
            neigbours += (this.cells[fixCollision(x + 1)][fixCollision(y)] === 1) ? 1 : 0;
            neigbours += (this.cells[fixCollision(x + 1)][fixCollision(y + 1)] === 1) ? 1 : 0;

            return neigbours;
        };

        const handle = () => {
            for (let x = 0; x < 50; x++) {
                for (let y = 0; y < 50; y++) {
                    let neigbours = countMooreNeighbours(x, y);

                    if (neigbours < 2 || neigbours > 3) {
                        newMatrix[x][y] = 0;
                        continue;
                    };

                    if (this.cells[x][y] === 0 && neigbours === 3) {
                        newMatrix[x][y] = 1;
                        continue;
                    };

                    newMatrix[x][y] = this.cells[x][y];
                };
            };
        };

        handle();

        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 50; y++) {
                this.cells[x][y] = newMatrix[x][y];
            };
        };
    };

    _draw = () => {
        this.map.draw();

        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 50; y++) {
                if (this.cells[x][y] !== 0) {
                    document.querySelector(`[x = "${x}"][y = "${y}"]`).classList.add('live');
                };
            };
        };
    };

    _generateMatrix = (width, height) => {
        let matrix = new Array();
        for (let x = 0; x < width; x++) {
            matrix[x] = new Array();
            for (let y = 0; y < height; y++) {
                matrix[x][y] = 0;
            };
        };
        return matrix;
    };

    _paste = (positionX, positionY, figure) => {
        for (let i = 0; i < figure.length; i++) {
            for (let j = 0; j < figure[i].length; j++) {
                this.cells[positionX + i][positionY + j] = figure[i][j];
            };
        };
    };

};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const GAME = new Game();

