'use strict';

export class Map {
  constructor(container, matrix_width, matrix_height) {
    this.$container = container;
    this.matrix_width = matrix_width;
    this.matrix_height = matrix_height;

    this.matrix = this.generateMatrix(this.matrix_width, this.matrix_height);
    this.#init();
    this.draw();
  }

  draw = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.color_canvas;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = this.color_cells;

    for (let x = 0; x < this.matrix_width; x++) {
      for (let y = 0; y < this.matrix_height; y++) {
        if (this.matrix[x][y] !== 0) {
          this.context.fillRect(x * this.cell_width, y * this.cell_height, this.cell_width, this.cell_height);
        }
      }
    }
  };

  #init = () => {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    this.$container.appendChild(this.canvas);
    this.#updateSizes();

    window.addEventListener('resize', () => {
      this.#updateSizes();
    });

    this.media = window.matchMedia('(prefers-color-scheme: dark)');
    this.#updateColours(this.media);

    this.media.addEventListener('change', () => {
      this.#updateColours(this.media);
    });
  };
  #updateSizes = () => {
    this.canvas.width = 0;
    this.canvas.height = 0;

    this.canvas.width = this.$container.offsetWidth;
    this.canvas.height = this.canvas.width;

    this.cell_width = this.canvas.width / this.matrix_width;
    this.cell_height = this.canvas.height / this.matrix_height;

    this.draw();
  };
  #updateColours = (media) => {
    if (media.matches) {
      this.color_canvas = '#055159';
      this.color_cells = '#0DC4D9';
    } else {
      this.color_canvas = '#F5F5F5';
      this.color_cells = '#0DC4D9';
    }
    this.draw();
  };

  generateMatrix = (matrix_width, matrix_height) => {
    let matrix = new Array();
    for (let x = 0; x < matrix_width; x++) {
      matrix[x] = new Array();
      for (let y = 0; y < matrix_height; y++) {
        matrix[x][y] = 0;
      }
    }
    return matrix;
  };
  copyMatrix = (matrixIn, matrixOut) => {
    for (let x = 0; x < matrixOut.length; x++) {
      for (let y = 0; y < matrixOut[x].length; y++) {
        matrixIn[x][y] = matrixOut[x][y];
      }
    }
    return matrixIn;
  };
  reflectX = (matrix) => {
    return matrix.reverse();
  };
  reflectY = (matrix) => {
    let result = this.generateMatrix(matrix.length, matrix[0].length);

    for (let x = 0; x < matrix.length; x++) {
      result[x] = matrix[x].reverse();
    }

    return this.copyMatrix(matrix, result);
  };
  rotateLeft = (matrix) => {
    /*        
        =>      x_1 = 0,                        y_1 = 0
        =>      x_2 = y_1.length - 1 - y_1,     y_2 = x_1 
    */

    let result = this.generateMatrix(matrix[0].length, matrix.length);

    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        let x2 = matrix[x].length - 1 - y;
        let y2 = x;
        result[x2][y2] = matrix[x][y];
      }
    }

    return this.copyMatrix(matrix, result);
  };
  rotateRight = (matrix) => {
    /*
        =>      x_1 = 0,        y_1 = 0
        =>      x_2 = y_1,      y_2 = x_1.length - 1 - x_1
     */

    let result = this.generateMatrix(matrix[0].length, matrix.length);

    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        let x2 = y;
        let y2 = matrix.length - 1 - x;
        result[x2][y2] = matrix[x][y];
      }
    }

    return this.copyMatrix(matrix, result);
  };
}

export default Map;
