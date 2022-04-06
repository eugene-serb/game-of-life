/* ------------ */
/* GAME OF LIFE */
/* ------------ */

'use strict'

class Configurations {

    constructor() {
        this.MAP_WIDTH = 50;
        this.MAP_HEIGHT = 50;
        this.SPEED_GAME = 500;

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

/* ---- */
/* GAME */
/* ---- */

class Game {

    constructor() {
        this._init();
    };

    _init = () => {
        this.configurations = new Configurations();
        this.map = new Map(this.configurations.MAP_WRAPPER, this.configurations.MAP_WIDTH, this.configurations.MAP_HEIGHT);

        this.cells = this._generateMatrix(50, 50);
        this._pasteFigure();
        this._draw();

        this.interval = setInterval(this._gameloop, 100);
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

    _pasteFigure = () => {
        let figure = [[1, 0, 0],
                      [1, 0, 1],
                      [1, 1, 0]];

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                this.cells[x][y] = figure[x][y];
            };
        };
    };
};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const GAME = new Game();

