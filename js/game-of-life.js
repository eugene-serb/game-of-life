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
        this.CANVAS_WIDTH = 500;
        this.CANVAS_HEIGHT = 500;
        this.MATRIX_WIDTH = 50;
        this.MATRIX_HEIGHT = 50;
        this.SPEED_RATE = 100;

        this.MAP_WRAPPER = document.querySelector('.game-of-life__map-wrapper');
        this.GENERATION_WRAPPER = document.querySelector('.game-of-life__generation');

        this.START_BUTTON = document.querySelector('.game-of-life__start');
        this.STOP_BUTTON = document.querySelector('.game-of-life__stop');
        this.CLEAN_BUTTON = document.querySelector('.game-of-life__clean');
        this.RANDOMIZE_BUTTON = document.querySelector('.game-of-life__randomize');
        this.SPEED_SELECTOR = document.querySelector('.game-of-life__speed-menu');

        this.MENU_STILLS = document.querySelector('.game-of-life__still-menu');
        this.MENU_SPACESHIPS = document.querySelector('.game-of-life__spaceships-menu');
        this.MENU_OSCILLATORS = document.querySelector('.game-of-life__oscillator-menu');
        this.MENU_GUNS = document.querySelector('.game-of-life__guns-menu');
    };
};

class Map {

    constructor(wrapper, canvas_width, canvas_height, matrix_width, matrix_height) {
        this.container = wrapper;
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        this.matrix_width = matrix_width;
        this.matrix_height = matrix_height;
        this.cell_width = this.canvas_width / this.matrix_width;
        this.cell_height = this.canvas_height / this.matrix_height;

        this._init();
        this.matrix = this.generateMatrix(this.matrix_width, this.matrix_height);
        this.draw();
    };

    _init = () => {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = this.canvas_width;
        this.canvas.height = this.canvas_height;

        this.container.appendChild(this.canvas);
    };

    draw = () => {
        this.context.clearRect(0, 0, this.canvas_width, this.canvas_height);
        this.context.fillStyle = '#F5F5F5';
        this.context.fillRect(0, 0, this.canvas_width, this.canvas_height);
        this.context.fillStyle = '#0DC4D9';

        for (let x = 0; x < this.matrix_width; x++) {
            for (let y = 0; y < this.matrix_height; y++) {
                if (this.matrix[x][y] !== 0) {
                    this.context.fillRect(x * this.cell_width, y * this.cell_height, this.cell_width, this.cell_height);
                };
            };
        };
    };

    generateMatrix = (matrix_width, matrix_height) => {
        let matrix = new Array();
        for (let x = 0; x < matrix_width; x++) {
            matrix[x] = new Array();
            for (let y = 0; y < matrix_height; y++) {
                matrix[x][y] = 0;
            };
        };
        return matrix;
    };
};

class Figures {

    constructor() {

        this.standing = [

            /* Block */
            [[1, 1],
             [1, 1]],

            /* Bee-hive */
            [[0, 1, 0],
             [1, 0, 1],
             [1, 0, 1],
             [0, 1, 0]],

            /* Loaf */
            [[0, 0, 1, 0],
             [0, 1, 0, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 0]],

            /* Boat */
            [[0, 1, 1],
             [1, 0, 1],
             [0, 1, 0]],

            /* Tub */
            [[0, 1, 0],
             [1, 0, 1],
             [0, 1, 0]]
        ];

        this.oscillators = [

            /* Blinker – period 2 */
            [[1],
             [1],
             [1]],

            /* Toad – period 2 */
            [[1, 0],
             [1, 1],
             [1, 1],
             [0, 1]],

            /* Beacon – period 2 */
            [[0, 0, 1, 1],
             [0, 0, 1, 1],
             [1, 1, 0, 0],
             [1, 1, 0, 0]],

            /* Pulsar – period 3 */
            [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1],
             [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
             [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
             [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
             [1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]],

            /* Penta decanthlon – period 15 */
            [[1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
             [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
             [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1]]
        ];

        this.spaceships = [

            /* Glider */
            [[1, 0, 0],
            [1, 0, 1],
            [1, 1, 0]],

            /* Light-weight spaceship – LWSS */
            [[0, 1, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]],

            /* Middle-weight spaceship – MWSS */
            [[0, 1, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]],

            /* Heavy-weight spaceship – HWSS */
            [[0, 1, 0, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 0, 0, 1],
            [1, 1, 1, 0]]
        ];

        this.guns = [

            /* Gosper's glider gun */
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
        ];
    };
};

class Game {

    constructor() {
        this._init();
    };

    _init = () => {
        this.configurations = new Configurations();
        this.support = new Support();
        this.figures = new Figures();
        this.map = new Map(this.configurations.MAP_WRAPPER,
                           this.configurations.CANVAS_WIDTH, this.configurations.CANVAS_HEIGHT,
                           this.configurations.MATRIX_WIDTH, this.configurations.MATRIX_HEIGHT);

        this.interval = 0;
        this.generation = 0;
        this.cells = this.map.matrix;

        this._draw();
        this._controls();
        this._menuControls();
    };

    _gameloop = () => {
        this.generation++;

        this._update();
        this._draw();
    };

    _update = () => {
        let nextMatrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);

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
                        nextMatrix[x][y] = 0;
                        continue;
                    };

                    if (this.cells[x][y] === 0 && neigbours === 3) {
                        nextMatrix[x][y] = 1;
                        continue;
                    };

                    nextMatrix[x][y] = this.cells[x][y];
                };
            };
        };

        handle();

        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 50; y++) {
                this.cells[x][y] = nextMatrix[x][y];
            };
        };
    };

    _draw = () => {
        this.map.draw();
        this.configurations.GENERATION_WRAPPER.innerText = `Generation: ${this.generation}`;
    };

    _randomizeMatrix = (cells, min, max) => {
        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                cells[i][j] = this.support.getRandomInteger(min, max);
            };
        };
        return cells;
    };

    _paste = (matrix, figure) => {

        if (matrix.length < figure.length ||
            matrix[0].length < figure[0].length) {
            return;
        };

        let startX = Math.floor(matrix.length / 2) - Math.floor(figure.length / 2);
        let startY = Math.floor(matrix[0].length / 2) - Math.floor(figure[0].length / 2);

        for (let x = 0; x < figure.length; x++) {
            for (let y = 0; y < figure[x].length; y++) {
                this.cells[startX + x][startY + y] = figure[x][y];
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

            this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
            this.cells = this.map.matrix;

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

            if (status === 1) {
                clearInterval(this.interval);
                this.interval = 0;
            };
            
            this.configurations.SPEED_RATE = this.configurations.SPEED_SELECTOR.value;

            if (status === 1) {
                this.interval = setInterval(this._gameloop, this.configurations.SPEED_RATE);
            };
        });

        this.configurations.MAP_WRAPPER.addEventListener('click', (event) => {
            let x = Math.floor(event.offsetX / 10);
            let y = Math.floor(event.offsetY / 10);

            if (this.cells[x][y] === 0) {
                this.cells[x][y] = 1;
            } else {
                this.cells[x][y] = 0;
            };

            this._draw();
        });
    };

    _menuControls = () => {
        this.configurations.MENU_STILLS.addEventListener('change', () => {
            if (this.configurations.MENU_STILLS.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this.interval = 0;
            this.generation = 0;
            this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
            this.cells = this.map.matrix;
            this._paste(this.cells, this.figures.standing[this.configurations.MENU_STILLS.value])
            this._draw();
        });

        this.configurations.MENU_SPACESHIPS.addEventListener('change', () => {
            if (this.configurations.MENU_SPACESHIPS.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this.interval = 0;
            this.generation = 0;
            this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
            this.cells = this.map.matrix;
            this._paste(this.cells, this.figures.spaceships[this.configurations.MENU_SPACESHIPS.value])
            this._draw();
        });

        this.configurations.MENU_OSCILLATORS.addEventListener('change', () => {
            if (this.configurations.MENU_OSCILLATORS.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this.interval = 0;
            this.generation = 0;
            this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
            this.cells = this.map.matrix;
            this._paste(this.cells, this.figures.oscillators[this.configurations.MENU_OSCILLATORS.value])
            this._draw();
        });

        this.configurations.MENU_GUNS.addEventListener('change', () => {
            if (this.configurations.MENU_GUNS.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this.interval = 0;
            this.generation = 0;
            this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
            this.cells = this.map.matrix;
            this._paste(this.cells, this.figures.guns[this.configurations.MENU_GUNS.value])
            this._draw();
        });
    };
};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const GAME = new Game();

