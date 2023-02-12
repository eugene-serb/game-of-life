(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,i){for(var a=0;a<i.length;a++){var l=i[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,(void 0,n=function(t,i){if("object"!==e(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var l=a.call(t,"string");if("object"!==e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(l.key),"symbol"===e(n)?n:String(n)),l)}var n}function i(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function a(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}var l=new WeakSet,n=new WeakSet,r=new WeakSet;function o(){var e=this;this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.$container.appendChild(this.canvas),a(this,n,c).call(this),window.addEventListener("resize",(function(){a(e,n,c).call(e)})),this.media=window.matchMedia("(prefers-color-scheme: dark)"),a(this,r,E).call(this,this.media),this.media.addEventListener("change",(function(){a(e,r,E).call(e,e.media)}))}function c(){this.canvas.width=0,this.canvas.height=0,this.canvas.width=this.$container.offsetWidth,this.canvas.height=this.canvas.width,this.cell_width=this.canvas.width/this.matrix_width,this.cell_height=this.canvas.height/this.matrix_height,this.draw()}function E(e){e.matches?(this.color_canvas="#055159",this.color_cells="#0DC4D9"):(this.color_canvas="#F5F5F5",this.color_cells="#0DC4D9"),this.draw()}const s=function(){function e(t,c,E){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,r),i(this,n),i(this,l),this.$container=t,this.matrix_width=c,this.matrix_height=E,this.matrix=this.generateMatrix(this.matrix_width,this.matrix_height),a(this,l,o).call(this),this.draw()}var c,E;return c=e,(E=[{key:"draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color_canvas,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color_cells;for(var e=0;e<this.matrix_width;e++)for(var t=0;t<this.matrix_height;t++)0!==this.matrix[e][t]&&this.context.fillRect(e*this.cell_width,t*this.cell_height,this.cell_width,this.cell_height)}},{key:"generateMatrix",value:function(e,t){for(var i=new Array,a=0;a<e;a++){i[a]=new Array;for(var l=0;l<t;l++)i[a][l]=0}return i}},{key:"copyMatrix",value:function(e,t){for(var i=0;i<t.length;i++)for(var a=0;a<t[i].length;a++)e[i][a]=t[i][a];return e}},{key:"reflectX",value:function(e){return e.reverse()}},{key:"reflectY",value:function(e){for(var t=this.generateMatrix(e.length,e[0].length),i=0;i<e.length;i++)t[i]=e[i].reverse();return this.copyMatrix(e,t)}},{key:"rotateLeft",value:function(e){for(var t=this.generateMatrix(e[0].length,e.length),i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++){var l=i;t[e[i].length-1-a][l]=e[i][a]}return this.copyMatrix(e,t)}},{key:"rotateRight",value:function(e){for(var t=this.generateMatrix(e[0].length,e.length),i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++){var l=a,n=e.length-1-i;t[l][n]=e[i][a]}return this.copyMatrix(e,t)}}])&&t(c.prototype,E),Object.defineProperty(c,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function u(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==h(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,"string");if("object"!==h(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===h(l)?l:String(l)),a)}var l}function S(e,t,i){return t&&u(e.prototype,t),i&&u(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}const T=S((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stable=[[[1,1],[1,1]],[[1,1,0,1,1],[1,1,0,1,1]],[[0,1,0],[1,0,1],[1,0,1],[0,1,0]],[[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,1,1,0],[1,0,0,1,0,0,0,0,0,1,0,0,1],[0,1,1,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0]],[[0,0,1,0],[0,1,0,1],[1,0,0,1],[0,1,1,0]],[[0,1,1,0,0],[1,0,0,1,0],[1,0,1,0,1],[0,1,0,0,1],[0,0,1,1,0]],[[0,0,0,0,0,1,0],[0,0,0,0,1,0,1],[0,0,0,1,0,0,1],[0,0,1,0,1,1,0],[0,1,0,1,0,0,0],[1,0,0,1,0,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,0,1,0,0,0,0],[0,1,1,0,1,0,0,0,1,0],[1,0,0,1,0,0,0,1,0,1],[1,0,1,0,0,0,1,0,0,1],[0,1,0,0,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,0,1,1,0,0,0,0]],[[0,1,0],[1,0,1],[0,1,0]],[[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,0]],[[0,1,0,0,0],[1,0,1,0,0],[0,1,0,1,0],[0,0,1,0,1],[0,0,0,1,0]],[[0,1,0],[1,0,1],[0,1,1]],[[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,1]],[[1,1,0],[1,0,1],[0,1,1]],[[1,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,1]],[[0,1,0,0,0,0],[1,0,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,0,1],[0,0,0,0,1,0]],[[1,1,0,0,0,0],[1,0,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,0,1],[0,0,0,0,1,1]],[[1,1,0,0,0],[1,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1],[0,0,0,1,1]],[[1,1,0,0],[1,0,0,1],[0,0,1,1]],[[0,0,0,1,1],[0,0,0,0,1],[0,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0]],[[0,1,1,0,0],[1,0,0,1,0],[0,1,0,0,1],[0,0,1,1,0]],[[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]],[[1,1,0,1],[1,0,1,1]],[[0,0,0,1],[0,1,1,1],[1,0,0,0],[0,1,1,1],[0,0,0,1]],[[0,0,0,1],[0,1,1,1],[1,0,0,0],[1,1,0,0]],[[0,0,1,0,0,0,0],[0,1,0,1,0,0,0],[0,1,0,1,0,0,0],[1,1,0,1,1,1,0],[0,0,0,0,0,0,1],[1,1,0,1,1,1,0],[1,1,0,1,0,0,0]]],this.spaceships=[[[0,0,1],[1,0,1],[0,1,1]],[[1,0,1,0],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]],[[1,0,1,0],[0,0,0,1],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]],[[1,0,1,0],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]]],this.oscillators=[[[1],[1],[1]],[[1,0],[1,1],[1,1],[0,1]],[[0,0,1,1],[0,0,1,1],[1,1,0,0],[1,1,0,0]],[[0,1,0,0],[0,1,0,1],[1,0,1,0],[0,0,1,0]],[[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],[0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],[1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0]],[[1,0,0,1,0,1,1,0,1,0,0,1],[1,1,1,1,0,1,1,0,1,1,1,1],[1,0,0,1,0,1,1,0,1,0,0,1]],[[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,0,1,1,1,0,0],[0,0,1,0,0,0,0,0,1,0,0],[0,1,1,0,0,0,0,0,1,1,0],[1,1,0,0,0,0,0,0,0,1,1],[0,1,1,0,0,0,0,0,1,1,0],[0,0,1,0,0,0,0,0,1,0,0],[0,0,1,1,1,0,1,1,1,0,0],[0,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0]],[[0,0,1,1,1,1,0,0],[0,0,1,0,0,1,0,0],[1,1,1,0,0,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,1,0,0,1,0,0],[0,0,1,1,1,1,0,0]],[[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,1,0,0,0],[0,0,0,1,1,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,1,1,0,0,0],[0,0,0,1,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,1,0,1,1],[0,0,0,1,0,1,1,0,1,0,1,1],[1,1,0,1,1,0,0,0,1,0,0,0],[1,1,0,1,0,0,0,0,1,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0]],[[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,1,0,1,1],[0,0,0,1,0,1,0,0,1,0,1,1],[1,1,0,1,1,0,0,0,1,0,0,0],[1,1,0,1,0,0,1,0,1,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0]],[[0,0,0,1,1,0,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,1,1,0,0,0]],[[0,0,0,0,0,1,1],[0,1,1,1,0,0,1],[0,0,0,0,1,1,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[0,0,0,0,1,1,0],[0,1,1,1,0,0,1],[0,0,0,0,0,1,1]]],this.guns=[[[0,0,0,0,1,1,0,0,0],[0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0],[0,0,0,1,0,0,0,1,0],[0,0,1,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1],[0,0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1,0],[0,0,0,0,1,1,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,0],[0,0,1,1,1,0,0,0,0],[0,1,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0]]],this.pentominoes=[[[1,1,1,1,1]],[[1,1,0],[1,1,1]],[[1,1,1,1],[0,0,0,1]],[[1,0,0],[1,1,1],[0,1,0]],[[0,0,1,1],[1,1,1,0]],[[1,0,0],[1,1,1],[1,0,0]],[[1,1],[0,1],[1,1]],[[1,1,1],[0,0,1],[0,0,1]],[[1,1,0],[0,1,1],[0,0,1]],[[0,1,0],[1,1,1],[0,1,0]],[[0,1],[1,1],[0,1],[0,1]],[[1,1,0],[0,1,0],[0,1,1]]],this.mathusalem=[[[0,0,1],[0,0,1],[0,0,1],[0,1,0],[0,0,0],[1,0,1],[0,0,1]],[[0,1,0,0],[0,0,1,1],[0,1,0,0],[0,0,0,0],[1,0,0,0],[0,1,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1],[1,0,1],[0,0,1],[0,0,0],[0,0,0],[0,0,0],[0,1,1],[0,1,0]],[[0,0,0,0,1],[0,1,1,1,1],[1,1,1,1,0],[1,0,0,1,0],[1,1,1,1,0],[0,1,1,1,1],[0,0,0,0,1]]],this.interesting=[[[0,0,1,1,1,0],[1,1,0,0,0,1],[0,1,0,1,0,1],[0,1,0,1,0,1],[1,1,0,0,0,1],[0,0,1,1,1,0]],[[0,0,0,1],[0,1,1,1],[1,0,0,1],[0,1,1,1],[0,0,0,1]],[[0,0,0,1,1],[0,1,1,0,1],[0,1,0,1,0],[1,0,1,1,0],[1,1,0,0,0]]],this.beelike=[[[0,0,0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,1,1,0],[1,0,0,1,0,0,0,0,0,1,0,0,1],[0,1,1,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0]],[[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,0,1,1,0],[1,0,0,1,0,0,0,0,0,1,0,0,1],[0,1,1,0,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,1,0],[1,1,0,0,1,0,0,0,0,0,1,0,0,1,1],[0,1,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]]}));function _(e,t){var i=e&&"number"==typeof e?e:0,a=t&&"number"==typeof t?t:0;return Math.floor(Math.random()*(a-i)+i)}function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function f(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==v(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,"string");if("object"!==v(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===v(l)?l:String(l)),a)}var l}function m(e,t,i){return t&&f(e.prototype,t),i&&f(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function R(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}var L=new WeakSet,d=new WeakSet,C=new WeakSet,p=new WeakSet,$=new WeakSet,g=new WeakSet,N=new WeakSet,A=new WeakSet,y=new WeakSet,I=new WeakSet;function P(){this.generation++,R(this,d,w).call(this),R(this,C,M).call(this)}function w(){for(var e=this,t=this.map.generateMatrix(this.map.matrix_width,this.map.matrix_height),i=0,a=function(e,t){return e<0?t-1:e>t-1?0:e},l=function(t,i){var l=0;return l+=1===e.cells[a(t-1,e.map.matrix_width)][a(i-1,e.map.matrix_height)]?1:0,l+=1===e.cells[a(t-1,e.map.matrix_width)][a(i,e.map.matrix_height)]?1:0,l+=1===e.cells[a(t-1,e.map.matrix_width)][a(i+1,e.map.matrix_height)]?1:0,l+=1===e.cells[a(t,e.map.matrix_width)][a(i-1,e.map.matrix_height)]?1:0,l+=1===e.cells[a(t,e.map.matrix_width)][a(i+1,e.map.matrix_height)]?1:0,l+=1===e.cells[a(t+1,e.map.matrix_width)][a(i-1,e.map.matrix_height)]?1:0,(l+=1===e.cells[a(t+1,e.map.matrix_width)][a(i,e.map.matrix_height)]?1:0)+(1===e.cells[a(t+1,e.map.matrix_width)][a(i+1,e.map.matrix_height)]?1:0)},n=0;n<this.map.matrix_width;n++)for(var r=0;r<this.map.matrix_height;r++){var o=l(n,r);o<2||o>3?t[n][r]=0:0!==this.cells[n][r]||3!==o?t[n][r]=this.cells[n][r]:t[n][r]=1}for(var c=0;c<this.map.matrix_width;c++)for(var E=0;E<this.map.matrix_height;E++)this.cells[c][E]=t[c][E],1===t[c][E]&&i++;this.population=i}function M(){this.map.draw(),this.$GENERATION_WRAPPER.innerText="Generation: ".concat(this.generation),this.$POPULATION_WRAPPER.innerText="Population: ".concat(this.population)}function b(e,t,i){for(var a=0;a<e.length;a++)for(var l=0;l<e[a].length;l++)e[a][l]=_(t,i);return e}function x(){this.interval=0,this.generation=0,this.population=0,this.map.matrix=this.map.generateMatrix(this.map.matrix_width,this.map.matrix_height),this.cells=this.map.matrix}function U(){for(var e=Math.abs(this.allocateCoordinates[1][0]-this.allocateCoordinates[0][0])+1,t=Math.abs(this.allocateCoordinates[1][1]-this.allocateCoordinates[0][1])+1,i=this.map.generateMatrix(e,t),a=0;a<e;a++)for(var l=0;l<t;l++){var n=this.allocateCoordinates[0][0]+a,r=this.allocateCoordinates[0][1]+l;i[a][l]=this.cells[n][r]}console.log("width = ".concat(e,", height = ").concat(t)),console.log(i)}function B(e,t){if(!(e.length<t.length||e[0].length<t[0].length))for(var i=Math.floor(e.length/2)-Math.floor(t.length/2),a=Math.floor(e[0].length/2)-Math.floor(t[0].length/2),l=0;l<t.length;l++)for(var n=0;n<t[l].length;n++)this.cells[i+l][a+n]=t[l][n]}function G(){this.MATRIX_WIDTH=50,this.MATRIX_HEIGHT=50,this.SPEED_RATE=100}function k(){this.$MAP_WRAPPER=document.querySelector("#map"),this.$GENERATION_WRAPPER=document.querySelector(".game-of-life__generation"),this.$POPULATION_WRAPPER=document.querySelector(".game-of-life__population"),this.$START_BUTTON=document.querySelector(".game-of-life__start"),this.$STOP_BUTTON=document.querySelector(".game-of-life__stop"),this.$NEXT_BUTTON=document.querySelector(".game-of-life__next"),this.$CLEAN_BUTTON=document.querySelector(".game-of-life__clean"),this.$RANDOMIZE_BUTTON=document.querySelector(".game-of-life__randomize"),this.$SPEED_SELECTOR=document.querySelector(".game-of-life__speed-menu"),this.$REFLECT_X_BUTTON=document.querySelector(".game-of-life__reflect-x"),this.$REFLECT_Y_BUTTON=document.querySelector(".game-of-life__reflect-y"),this.$ROTATE_LEFT_BUTTON=document.querySelector(".game-of-life__rotate-left"),this.$ROTATE_RIGHT_BUTTON=document.querySelector(".game-of-life__rotate-right"),this.$EXPORT_BUTTON=document.querySelector(".game-of-life__export"),this.$IMPORT_INPUT=document.querySelector(".game-of-life__import-input"),this.$IMPORT_BUTTON=document.querySelector(".game-of-life__import"),this.$STABLE_SELECTOR=document.querySelector(".game-of-life__stables-menu"),this.$SPACESHIPS_SELECTOR=document.querySelector(".game-of-life__spaceships-menu"),this.$OSCILLATORS_SELECTOR=document.querySelector(".game-of-life__oscillators-menu"),this.$GUNS_SELECTOR=document.querySelector(".game-of-life__guns-menu"),this.$PENTOMINO_SELECTOR=document.querySelector(".game-of-life__pentominoes-menu"),this.$MATHUSALEM_SELECTOR=document.querySelector(".game-of-life__mathusalem-menu"),this.$INTERESTING_SELECTOR=document.querySelector(".game-of-life__interesting-menu"),this.$BEE_GARDEN_SELECTOR=document.querySelector(".game-of-life__bee-garden-menu")}function H(){var e=this;this.$MAP_WRAPPER.addEventListener("click",(function(t){var i=Math.floor(t.offsetX/e.map.cell_width),a=Math.floor(t.offsetY/e.map.cell_height);if(!0===t.ctrlKey&&0===e.interval)return!1===e.allocate&&(e.allocate=!0),e.allocateCoordinates.push(new Array(i,a)),void(e.allocateCoordinates.length>=2&&(R(e,g,U).call(e),e.allocateCoordinates=[]));0===e.cells[i][a]?e.cells[i][a]=1:e.cells[i][a]=0,R(e,C,M).call(e)})),this.$MAP_WRAPPER.addEventListener("contextmenu",(function(t){t.preventDefault(),!0===e.allocate&&(e.allocate=!1,e.allocateCoordinates=[]),R(e,C,M).call(e)})),this.$START_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),e.interval=0,e.interval=setInterval(R(e,L,P).bind(e),e.SPEED_RATE)})),this.$STOP_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),e.interval=0})),this.$NEXT_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),e.interval=0,R(e,L,P).call(e)})),this.$CLEAN_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),R(e,$,x).call(e),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1"})),this.$RANDOMIZE_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),R(e,$,x).call(e),e.cells=R(e,p,b).call(e,e.cells,0,2),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1"})),this.$SPEED_SELECTOR.addEventListener("input",(function(){var t=0!==e.interval?1:0;1===t&&(clearInterval(e.interval),e.interval=0),e.SPEED_RATE=e.$SPEED_SELECTOR.value,1===t&&(e.interval=setInterval(R(e,L,P).bind(e),e.SPEED_RATE))})),this.$REFLECT_X_BUTTON.addEventListener("click",(function(){e.cells=e.map.reflectX(e.cells),R(e,C,M).call(e)})),this.$REFLECT_Y_BUTTON.addEventListener("click",(function(){e.cells=e.map.reflectY(e.cells),R(e,C,M).call(e)})),this.$ROTATE_LEFT_BUTTON.addEventListener("click",(function(){e.cells=e.map.rotateRight(e.cells),R(e,C,M).call(e)})),this.$ROTATE_RIGHT_BUTTON.addEventListener("click",(function(){e.cells=e.map.rotateLeft(e.cells),R(e,C,M).call(e)})),this.$EXPORT_BUTTON.addEventListener("click",(function(){var t=new Blob([JSON.stringify(e.map.matrix)],{type:"application/json"}),i=document.createElement("a");i.setAttribute("href",URL.createObjectURL(t)),i.setAttribute("download","save-".concat(Date.now(),".json")),i.click()})),this.$IMPORT_BUTTON.addEventListener("click",(function(){e.$IMPORT_INPUT.click()})),this.$IMPORT_INPUT.addEventListener("input",(function(){if("application/json"===e.$IMPORT_INPUT.files[0].type){var t=e.$IMPORT_INPUT.files[0],i=new FileReader;i.readAsText(t),i.onload=function(){for(var t=JSON.parse(i.result),a=0;a<e.map.matrix_width;a++)for(var l=0;l<e.map.matrix_height;l++)e.cells[a][l]=t[a][l];R(e,C,M).call(e)},i.onerror=function(){console.log(i.error)},e.$IMPORT_INPUT.value=""}})),this.$STABLE_SELECTOR.addEventListener("change",(function(){"-1"!==e.$STABLE_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.stable[e.$STABLE_SELECTOR.value]),R(e,C,M).call(e),e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$SPACESHIPS_SELECTOR.addEventListener("change",(function(){"-1"!==e.$SPACESHIPS_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.spaceships[e.$SPACESHIPS_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$OSCILLATORS_SELECTOR.addEventListener("change",(function(){"-1"!==e.$OSCILLATORS_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.oscillators[e.$OSCILLATORS_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$GUNS_SELECTOR.addEventListener("change",(function(){"-1"!==e.$GUNS_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.guns[e.$GUNS_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$PENTOMINO_SELECTOR.addEventListener("change",(function(){"-1"!==e.$PENTOMINO_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.pentominoes[e.$PENTOMINO_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$.MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$MATHUSALEM_SELECTOR.addEventListener("change",(function(){"-1"!==e.$MATHUSALEM_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.mathusalem[e.$MATHUSALEM_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$INTERESTING_SELECTOR.addEventListener("change",(function(){"-1"!==e.$INTERESTING_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.interesting[e.$INTERESTING_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$BEE_GARDEN_SELECTOR.addEventListener("change",(function(){"-1"!==e.$BEE_GARDEN_SELECTOR.value&&(clearInterval(e.interval),R(e,$,x).call(e),R(e,N,B).call(e,e.cells,e.figures.beelike[e.$BEE_GARDEN_SELECTOR.value]),R(e,C,M).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1")}))}new(m((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,I),O(this,y),O(this,A),O(this,N),O(this,g),O(this,$),O(this,p),O(this,C),O(this,d),O(this,L),R(this,A,G).call(this),R(this,y,k).call(this),R(this,I,H).call(this),this.figures=new T,this.map=new s(this.$MAP_WRAPPER,this.MATRIX_WIDTH,this.MATRIX_HEIGHT),this.interval=0,this.generation=0,this.population=0,this.cells=this.map.matrix,this.allocate=!1,this.allocateCoordinates=[],R(this,C,M).call(this)})))})();