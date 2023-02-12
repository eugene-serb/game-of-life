'use strict';

import Map from '@/map.js';
import Figures from '@/figures.js';
import { getRandomInteger } from '@/helpers.js';

export class GameOfLife {
  constructor() {
    this.#configurations();
    this.#DOMs();
    this.#eventListeners();

    this.figures = new Figures();
    this.map = new Map(this.$MAP, this.MATRIX_WIDTH, this.MATRIX_HEIGHT);

    this.interval = 0;
    this.generation = 0;
    this.population = 0;
    this.cells = this.map.matrix;

    this.allocate = false;
    this.allocateCoordinates = [];

    this.#draw();
  }

  #eventLoop() {
    this.generation++;

    this.#update();
    this.#draw();
  }

  #update() {
    let nextMatrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
    let population = 0;

    const fixCollision = (n, length) => {
      if (n < 0) {
        return length - 1;
      } else if (n > length - 1) {
        return 0;
      }
      return n;
    };

    const countMooreNeighbours = (x, y) => {
      let neigbours = 0;

      neigbours += (this.cells[fixCollision(x - 1, this.map.matrix_width)][fixCollision(y - 1, this.map.matrix_height)] === 1) ? 1 : 0;
      neigbours += (this.cells[fixCollision(x - 1, this.map.matrix_width)][fixCollision(y, this.map.matrix_height)] === 1) ? 1 : 0;
      neigbours += (this.cells[fixCollision(x - 1, this.map.matrix_width)][fixCollision(y + 1, this.map.matrix_height)] === 1) ? 1 : 0;

      neigbours += (this.cells[fixCollision(x, this.map.matrix_width)][fixCollision(y - 1, this.map.matrix_height)] === 1) ? 1 : 0;
      neigbours += (this.cells[fixCollision(x, this.map.matrix_width)][fixCollision(y + 1, this.map.matrix_height)] === 1) ? 1 : 0;

      neigbours += (this.cells[fixCollision(x + 1, this.map.matrix_width)][fixCollision(y - 1, this.map.matrix_height)] === 1) ? 1 : 0;
      neigbours += (this.cells[fixCollision(x + 1, this.map.matrix_width)][fixCollision(y, this.map.matrix_height)] === 1) ? 1 : 0;
      neigbours += (this.cells[fixCollision(x + 1, this.map.matrix_width)][fixCollision(y + 1, this.map.matrix_height)] === 1) ? 1 : 0;

      return neigbours;
    };

    for (let x = 0; x < this.map.matrix_width; x++) {
      for (let y = 0; y < this.map.matrix_height; y++) {
        let neigbours = countMooreNeighbours(x, y);

        if (neigbours < 2 || neigbours > 3) {
          nextMatrix[x][y] = 0;
          continue;
        }

        if (this.cells[x][y] === 0 && neigbours === 3) {
          nextMatrix[x][y] = 1;
          continue;
        }

        nextMatrix[x][y] = this.cells[x][y];
      }
    }

    for (let x = 0; x < this.map.matrix_width; x++) {
      for (let y = 0; y < this.map.matrix_height; y++) {
        this.cells[x][y] = nextMatrix[x][y];

        if (nextMatrix[x][y] === 1) {
          population++;
        }
      }
    }

    this.population = population;
  }

  #draw() {
    this.map.draw();

    this.$GENERATION.innerText = `Generation: ${this.generation}`;
    this.$POPULATION.innerText = `Population: ${this.population}`;
  }

  #randomizeMatrix(matrix, min, max) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = getRandomInteger(min, max);
      }
    }
    return matrix;
  }

  #clean() {
    this.interval = 0;
    this.generation = 0;
    this.population = 0;
    this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
    this.cells = this.map.matrix;
  }

  #copy() {
    let width = Math.abs(this.allocateCoordinates[1][0] - this.allocateCoordinates[0][0]) + 1;
    let height = Math.abs(this.allocateCoordinates[1][1] - this.allocateCoordinates[0][1]) + 1;

    let result = this.map.generateMatrix(width, height);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let x2 = this.allocateCoordinates[0][0] + x;
        let y2 = this.allocateCoordinates[0][1] + y;
        result[x][y] = this.cells[x2][y2];
      }
    }

    console.log(`width = ${width}, height = ${height}`);
    console.log(result);
  }

  #paste(matrix, figure) {
    if (matrix.length < figure.length ||
      matrix[0].length < figure[0].length) {
      return;
    }

    let startX = Math.floor(matrix.length / 2) - Math.floor(figure.length / 2);
    let startY = Math.floor(matrix[0].length / 2) - Math.floor(figure[0].length / 2);

    for (let x = 0; x < figure.length; x++) {
      for (let y = 0; y < figure[x].length; y++) {
        this.cells[startX + x][startY + y] = figure[x][y];
      }
    }
  }

  #configurations() {
    this.MATRIX_WIDTH = 50;
    this.MATRIX_HEIGHT = 50;
    this.SPEED_RATE = 100;
  }

  #DOMs() {
    this.$MAP = document.querySelector('#map');

    this.$GENERATION = document.querySelector('#generation');
    this.$POPULATION = document.querySelector('#population');

    this.$START = document.querySelector('#start');
    this.$STOP = document.querySelector('#stop');
    this.$STEP = document.querySelector('#step');
    this.$CLEAN = document.querySelector('#clean');
    this.$RANDOMIZE = document.querySelector('#randomize');
    this.$SPEED = document.querySelector('#speed-menu');

    this.$REFLECT_X = document.querySelector('#reflect-x');
    this.$REFLECT_Y = document.querySelector('#reflect-y');
    this.$ROTATE_LEFT = document.querySelector('#rotate-left');
    this.$ROTATE_RIGHT = document.querySelector('#rotate-right');

    this.$EXPORT = document.querySelector('#export');
    this.$IMPORT = document.querySelector('#import');
    this.$IMPORT_INPUT = document.querySelector('#import-input');

    this.$SELECTOR_STILL_LIFE = document.querySelector('.game-of-life__still-life-menu');
    this.$SELECTOR_SPACESHIPS = document.querySelector('.game-of-life__spaceships-menu');
    this.$SELECTOR_OSCILLATORS = document.querySelector('.game-of-life__oscillators-menu');
    this.$SELECTOR_GUNS = document.querySelector('.game-of-life__guns-menu');
    this.$SELECTOR_PENTOMINO = document.querySelector('.game-of-life__pentominoes-menu');
    this.$SELECTOR_MATHUSALEM = document.querySelector('.game-of-life__mathusalem-menu');
    this.$SELECTOR_INTERESTING = document.querySelector('.game-of-life__interesting-menu');
    this.$SELECTOR_BEE_GARDEN = document.querySelector('.game-of-life__bee-garden-menu');
  }

  #eventListeners() {
    this.$MAP.addEventListener('click', (event) => {
      let x = Math.floor(event.offsetX / this.map.cell_width);
      let y = Math.floor(event.offsetY / this.map.cell_height);

      if (event.ctrlKey === true && this.interval === 0) {

        if (this.allocate === false) {
          this.allocate = true;
        }

        this.allocateCoordinates.push(new Array(x, y));

        if (this.allocateCoordinates.length >= 2) {
          this.#copy();
          this.allocateCoordinates = [];
        }

        return;
      }

      if (this.cells[x][y] === 0) {
        this.cells[x][y] = 1;
      } else {
        this.cells[x][y] = 0;
      }

      this.#draw();
    });
    this.$MAP.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      if (this.allocate === true) {
        this.allocate = false;
        this.allocateCoordinates = [];
      }

      this.#draw();
    });
    this.$START.addEventListener('click', () => {
      clearInterval(this.interval);
      this.interval = 0;
      this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
    });
    this.$STOP.addEventListener('click', () => {
      clearInterval(this.interval);
      this.interval = 0;
    });
    this.$STEP.addEventListener('click', () => {
      clearInterval(this.interval);
      this.interval = 0;
      this.#eventLoop();
    });
    this.$CLEAN.addEventListener('click', () => {
      clearInterval(this.interval);
      this.#clean();
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$RANDOMIZE.addEventListener('click', () => {
      clearInterval(this.interval);
      this.#clean();
      this.cells = this.#randomizeMatrix(this.cells, 0, 2);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SPEED.addEventListener('input', () => {
      let status = (this.interval !== 0) ? 1 : 0;

      if (status === 1) {
        clearInterval(this.interval);
        this.interval = 0;
      }

      this.SPEED_RATE = this.$SPEED.value;

      if (status === 1) {
        this.interval = setInterval(this.#eventLoop.bind(this), this.SPEED_RATE);
      }
    });
    this.$REFLECT_X.addEventListener('click', () => {
      this.cells = this.map.reflectX(this.cells);
      this.#draw();
    });
    this.$REFLECT_Y.addEventListener('click', () => {
      this.cells = this.map.reflectY(this.cells);
      this.#draw();
    });
    this.$ROTATE_LEFT.addEventListener('click', () => {
      this.cells = this.map.rotateRight(this.cells);
      this.#draw();
    });
    this.$ROTATE_RIGHT.addEventListener('click', () => {
      this.cells = this.map.rotateLeft(this.cells);
      this.#draw();
    });
    this.$EXPORT.addEventListener('click', () => {
      let blob = new Blob([JSON.stringify(this.map.matrix)], { type: 'application/json' });
      let $link = document.createElement('a');
      $link.setAttribute('href', URL.createObjectURL(blob));
      $link.setAttribute('download', `save-${Date.now()}.json`);
      $link.click();
    });
    this.$IMPORT.addEventListener('click', () => {
      this.$IMPORT_INPUT.click();
    });
    this.$IMPORT_INPUT.addEventListener('input', () => {

      if (this.$IMPORT_INPUT.files[0].type !== 'application/json') {
        return;
      }

      let file = this.$IMPORT_INPUT.files[0];
      let reader = new FileReader();

      reader.readAsText(file);

      reader.onload = () => {
        let result = JSON.parse(reader.result);

        for (let x = 0; x < this.map.matrix_width; x++) {
          for (let y = 0; y < this.map.matrix_height; y++) {
            this.cells[x][y] = result[x][y];
          }
        }

        this.#draw();
      };

      reader.onerror = () => {
        console.log(reader.error);
      };

      this.$IMPORT_INPUT.value = '';
    });
    this.$SELECTOR_STILL_LIFE.addEventListener('change', () => {
      if (this.$SELECTOR_STILL_LIFE.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.stable[this.$SELECTOR_STILL_LIFE.value].matrix);
      this.#draw();

      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_SPACESHIPS.addEventListener('change', () => {
      if (this.$SELECTOR_SPACESHIPS.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.spaceships[this.$SELECTOR_SPACESHIPS.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_OSCILLATORS.addEventListener('change', () => {
      if (this.$SELECTOR_OSCILLATORS.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.oscillators[this.$SELECTOR_OSCILLATORS.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_GUNS.addEventListener('change', () => {
      if (this.$SELECTOR_GUNS.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.guns[this.$SELECTOR_GUNS.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_PENTOMINO.addEventListener('change', () => {
      if (this.$SELECTOR_PENTOMINO.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.pentominoes[this.$SELECTOR_PENTOMINO.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_MATHUSALEM.addEventListener('change', () => {
      if (this.$SELECTOR_MATHUSALEM.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.mathusalem[this.$SELECTOR_MATHUSALEM.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_INTERESTING.addEventListener('change', () => {
      if (this.$SELECTOR_INTERESTING.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.interesting[this.$SELECTOR_INTERESTING.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_BEE_GARDEN.value = '-1';
    });
    this.$SELECTOR_BEE_GARDEN.addEventListener('change', () => {
      if (this.$SELECTOR_BEE_GARDEN.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.beelike[this.$SELECTOR_BEE_GARDEN.value].matrix);
      this.#draw();

      this.$SELECTOR_STILL_LIFE.value = '-1';
      this.$SELECTOR_OSCILLATORS.value = '-1';
      this.$SELECTOR_SPACESHIPS.value = '-1';
      this.$SELECTOR_GUNS.value = '-1';
      this.$SELECTOR_PENTOMINO.value = '-1';
      this.$SELECTOR_MATHUSALEM.value = '-1';
      this.$SELECTOR_INTERESTING.value = '-1';
    });
  }
}

export default GameOfLife;
