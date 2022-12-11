'use strict';

import Figures from '@/figures.js';
import Support from '@/support.js';
import Map from '@/map.js';

class Game {
  constructor() {
    this.#configurations();
    this.#DOMs();
    this.#eventListeners();

    this.support = new Support();
    this.figures = new Figures();
    this.map = new Map(this.$MAP_WRAPPER, this.MATRIX_WIDTH, this.MATRIX_HEIGHT);

    this.interval = 0;
    this.generation = 0;
    this.population = 0;
    this.cells = this.map.matrix;

    this.allocate = false;
    this.allocateCoordinates = [];

    this.#draw();
  }

  #eventLoop = () => {
    this.generation++;

    this.#update();
    this.#draw();
  };
  #update = () => {
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
  };
  #draw = () => {
    this.map.draw();
    this.$GENERATION_WRAPPER.innerText = `Generation: ${this.generation}`;
    this.$POPULATION_WRAPPER.innerText = `Population: ${this.population}`;
  };

  #randomizeMatrix = (matrix, min, max) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = this.support.getRandomInteger(min, max);
      }
    }
    return matrix;
  };
  #clean = () => {
    this.interval = 0;
    this.generation = 0;
    this.population = 0;
    this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
    this.cells = this.map.matrix;
  };
  #copy = () => {
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
  };
  #paste = (matrix, figure) => {
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
  };

  #configurations = () => {
    this.MATRIX_WIDTH = 50;
    this.MATRIX_HEIGHT = 50;
    this.SPEED_RATE = 100;
  };
  #DOMs = () => {
    this.$MAP_WRAPPER = document.querySelector('.game-of-life__map-wrapper');

    this.$GENERATION_WRAPPER = document.querySelector('.game-of-life__generation');
    this.$POPULATION_WRAPPER = document.querySelector('.game-of-life__population');

    this.$START_BUTTON = document.querySelector('.game-of-life__start');
    this.$STOP_BUTTON = document.querySelector('.game-of-life__stop');
    this.$NEXT_BUTTON = document.querySelector('.game-of-life__next');
    this.$CLEAN_BUTTON = document.querySelector('.game-of-life__clean');
    this.$RANDOMIZE_BUTTON = document.querySelector('.game-of-life__randomize');
    this.$SPEED_SELECTOR = document.querySelector('.game-of-life__speed-menu');

    this.$REFLECT_X_BUTTON = document.querySelector('.game-of-life__reflect-x');
    this.$REFLECT_Y_BUTTON = document.querySelector('.game-of-life__reflect-y');
    this.$ROTATE_LEFT_BUTTON = document.querySelector('.game-of-life__rotate-left');
    this.$ROTATE_RIGHT_BUTTON = document.querySelector('.game-of-life__rotate-right');

    this.$EXPORT_BUTTON = document.querySelector('.game-of-life__export');
    this.$IMPORT_INPUT = document.querySelector('.game-of-life__import-input');
    this.$IMPORT_BUTTON = document.querySelector('.game-of-life__import');

    this.$STABLE_SELECTOR = document.querySelector('.game-of-life__stables-menu');
    this.$SPACESHIPS_SELECTOR = document.querySelector('.game-of-life__spaceships-menu');
    this.$OSCILLATORS_SELECTOR = document.querySelector('.game-of-life__oscillators-menu');
    this.$GUNS_SELECTOR = document.querySelector('.game-of-life__guns-menu');
    this.$PENTOMINO_SELECTOR = document.querySelector('.game-of-life__pentominoes-menu');
    this.$MATHUSALEM_SELECTOR = document.querySelector('.game-of-life__mathusalem-menu');
    this.$INTERESTING_SELECTOR = document.querySelector('.game-of-life__interesting-menu');
    this.$BEE_GARDEN_SELECTOR = document.querySelector('.game-of-life__bee-garden-menu');
  };
  #eventListeners = () => {
    this.$MAP_WRAPPER.addEventListener('click', (event) => {
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
    this.$MAP_WRAPPER.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      if (this.allocate === true) {
        this.allocate = false;
        this.allocateCoordinates = [];
      }

      this.#draw();
    });
    this.$START_BUTTON.addEventListener('click', () => {
      clearInterval(this.interval);
      this.interval = 0;
      this.interval = setInterval(this.#eventLoop, this.SPEED_RATE);
    });
    this.$STOP_BUTTON.addEventListener('click', () => {
      clearInterval(this.interval);
      this.interval = 0;
    });
    this.$NEXT_BUTTON.addEventListener('click', () => {
      clearInterval(this.interval);
      this.interval = 0;
      this.#eventLoop();
    });
    this.$CLEAN_BUTTON.addEventListener('click', () => {
      clearInterval(this.interval);
      this.#clean();
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$RANDOMIZE_BUTTON.addEventListener('click', () => {
      clearInterval(this.interval);
      this.#clean();
      this.cells = this.#randomizeMatrix(this.cells, 0, 2);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$SPEED_SELECTOR.addEventListener('input', () => {
      let status = (this.interval !== 0) ? 1 : 0;

      if (status === 1) {
        clearInterval(this.interval);
        this.interval = 0;
      }

      this.SPEED_RATE = this.$SPEED_SELECTOR.value;

      if (status === 1) {
        this.interval = setInterval(this.#eventLoop, this.SPEED_RATE);
      }
    });
    this.$REFLECT_X_BUTTON.addEventListener('click', () => {
      this.cells = this.map.reflectX(this.cells);
      this.#draw();
    });
    this.$REFLECT_Y_BUTTON.addEventListener('click', () => {
      this.cells = this.map.reflectY(this.cells);
      this.#draw();
    });
    this.$ROTATE_LEFT_BUTTON.addEventListener('click', () => {
      this.cells = this.map.rotateRight(this.cells);
      this.#draw();
    });
    this.$ROTATE_RIGHT_BUTTON.addEventListener('click', () => {
      this.cells = this.map.rotateLeft(this.cells);
      this.#draw();
    });
    this.$EXPORT_BUTTON.addEventListener('click', () => {
      let blob = new Blob([JSON.stringify(this.map.matrix)], { type: 'application/json' });
      let $link = document.createElement('a');
      $link.setAttribute('href', URL.createObjectURL(blob));
      $link.setAttribute('download', `save-${Date.now()}.json`);
      $link.click();
    });
    this.$IMPORT_BUTTON.addEventListener('click', () => {
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
    this.$STABLE_SELECTOR.addEventListener('change', () => {
      if (this.$STABLE_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.stable[this.$STABLE_SELECTOR.value]);
      this.#draw();

      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$SPACESHIPS_SELECTOR.addEventListener('change', () => {
      if (this.$SPACESHIPS_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.spaceships[this.$SPACESHIPS_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$OSCILLATORS_SELECTOR.addEventListener('change', () => {
      if (this.$OSCILLATORS_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.oscillators[this.$OSCILLATORS_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$GUNS_SELECTOR.addEventListener('change', () => {
      if (this.$GUNS_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.guns[this.$GUNS_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$PENTOMINO_SELECTOR.addEventListener('change', () => {
      if (this.$PENTOMINO_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.pentominoes[this.$PENTOMINO_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$.MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$MATHUSALEM_SELECTOR.addEventListener('change', () => {
      if (this.$MATHUSALEM_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.mathusalem[this.$MATHUSALEM_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$INTERESTING_SELECTOR.addEventListener('change', () => {
      if (this.$INTERESTING_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.interesting[this.$INTERESTING_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$BEE_GARDEN_SELECTOR.value = '-1';
    });
    this.$BEE_GARDEN_SELECTOR.addEventListener('change', () => {
      if (this.$BEE_GARDEN_SELECTOR.value === '-1') {
        return;
      }

      clearInterval(this.interval);
      this.#clean();
      this.#paste(this.cells, this.figures.beelike[this.$BEE_GARDEN_SELECTOR.value]);
      this.#draw();

      this.$STABLE_SELECTOR.value = '-1';
      this.$OSCILLATORS_SELECTOR.value = '-1';
      this.$SPACESHIPS_SELECTOR.value = '-1';
      this.$GUNS_SELECTOR.value = '-1';
      this.$PENTOMINO_SELECTOR.value = '-1';
      this.$MATHUSALEM_SELECTOR.value = '-1';
      this.$INTERESTING_SELECTOR.value = '-1';
    });
  };
}

new Game();
