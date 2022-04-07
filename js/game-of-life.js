/* ------------ */
/* GAME OF LIFE */
/* ------------ */

'use strict'

class Support {
    getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
};

class Configurations {

    constructor() {
        this.MAP_WIDTH = 50;
        this.MAP_HEIGHT = 50;
        this.SPEED_RATE = 100;

        this.MAP_WRAPPER = document.querySelector('.game-of-life__map-wrapper');
        this.GENERATION_WRAPPER = document.querySelector('.game-of-life__generation');

        this.START_BUTTON = document.querySelector('.game-of-life__start');
        this.STOP_BUTTON = document.querySelector('.game-of-life__stop');
        this.CLEAN_BUTTON = document.querySelector('.game-of-life__clean');
        this.RANDOMIZE_BUTTON = document.querySelector('.game-of-life__randomize');
        this.SPEED_SELECTOR = document.querySelector('.game-of-life__speed-menu');
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
        this.support = new Support();
        this.figures = new Figures();
        this.map = new Map(this.configurations.MAP_WRAPPER, this.configurations.MAP_WIDTH, this.configurations.MAP_HEIGHT);

        this._controls();

        this.interval = 0;
        this.generation = 0;
        this.cells = this._generateMatrix(50, 50);
        this.cells = this._randomizeMatrix(this.cells, 0, 2);
        this._draw();
    };

    _start = () => {
        this.interval = setInterval(this._gameloop, this.configurations.SPEED_RATE);
    };

    _gameloop = () => {
        this.generation++;

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

        this.configurations.GENERATION_WRAPPER.innerText = `Generation: ${this.generation}`;
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

    _randomizeMatrix = (cells, min, max) => {
        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                cells[i][j] = this.support.getRandomInteger(min, max);
            };
        };
        return cells;
    };

    _paste = (positionX, positionY, figure) => {
        for (let i = 0; i < figure.length; i++) {
            for (let j = 0; j < figure[i].length; j++) {
                this.cells[positionX + i][positionY + j] = figure[i][j];
            };
        };
    };

    _controls = () => {
        this.configurations.START_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;

            this.interval = setInterval(this._gameloop, this.configurations.SPEED_RATE);
        });

        this.configurations.STOP_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;
        });

        this.configurations.CLEAN_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;

            this.cells = this._generateMatrix(this.configurations.MAP_WIDTH, this.configurations.MAP_HEIGHT);
            this.generation = 0;
            this._draw();
        });

        this.configurations.RANDOMIZE_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;

            this.cells = this._randomizeMatrix(this.cells, 0, 2);
            this.generation = 0;
            this._draw();
        });

        this.configurations.SPEED_SELECTOR.addEventListener('input', () => {

            let status = (this.interval !== 0) ? 1 : 0;

            console.log(this.interval);

            if (status === 1) {
                clearInterval(this.interval);
                this.interval = 0;
            };
            
            this.configurations.SPEED_RATE = this.configurations.SPEED_SELECTOR.value;

            if (status === 1) {
                this.interval = setInterval(this._gameloop, this.configurations.SPEED_RATE);
            };
        });
    };
};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const GAME = new Game();

