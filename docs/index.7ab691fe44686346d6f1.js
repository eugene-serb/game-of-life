(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,a){for(var i=0;i<a.length;i++){var n=a[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,a){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(r)?r:String(r)),n)}var r}function a(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function i(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a}var n=new WeakSet,r=new WeakSet,l=new WeakSet;function o(){var e=this;this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.$container.appendChild(this.canvas),i(this,r,c).call(this),window.addEventListener("resize",(function(){i(e,r,c).call(e)})),this.media=window.matchMedia("(prefers-color-scheme: dark)"),i(this,l,s).call(this,this.media),this.media.addEventListener("change",(function(){i(e,l,s).call(e,e.media)}))}function c(){this.canvas.width=0,this.canvas.height=0,this.canvas.width=this.$container.offsetWidth,this.canvas.height=this.canvas.width,this.cell_width=this.canvas.width/this.matrix_width,this.cell_height=this.canvas.height/this.matrix_height,this.draw()}function s(e){e.matches?(this.color_canvas="#055159",this.color_cells="#0DC4D9"):(this.color_canvas="#F5F5F5",this.color_cells="#0DC4D9"),this.draw()}const E=function(){function e(t,c,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,l),a(this,r),a(this,n),this.$container=t,this.matrix_width=c,this.matrix_height=s,this.matrix=this.generateMatrix(this.matrix_width,this.matrix_height),i(this,n,o).call(this),this.draw()}var c,s;return c=e,(s=[{key:"draw",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color_canvas,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color_cells;for(var e=0;e<this.matrix_width;e++)for(var t=0;t<this.matrix_height;t++)0!==this.matrix[e][t]&&this.context.fillRect(e*this.cell_width,t*this.cell_height,this.cell_width,this.cell_height)}},{key:"generateMatrix",value:function(e,t){for(var a=new Array,i=0;i<e;i++){a[i]=new Array;for(var n=0;n<t;n++)a[i][n]=0}return a}},{key:"copyMatrix",value:function(e,t){for(var a=0;a<t.length;a++)for(var i=0;i<t[a].length;i++)e[a][i]=t[a][i];return e}},{key:"reflectX",value:function(e){return e.reverse()}},{key:"reflectY",value:function(e){for(var t=this.generateMatrix(e.length,e[0].length),a=0;a<e.length;a++)t[a]=e[a].reverse();return this.copyMatrix(e,t)}},{key:"rotateLeft",value:function(e){for(var t=this.generateMatrix(e[0].length,e.length),a=0;a<e.length;a++)for(var i=0;i<e[a].length;i++){var n=a;t[e[a].length-1-i][n]=e[a][i]}return this.copyMatrix(e,t)}},{key:"rotateRight",value:function(e){for(var t=this.generateMatrix(e[0].length,e.length),a=0;a<e.length;a++)for(var i=0;i<e[a].length;i++){var n=i,r=e.length-1-a;t[n][r]=e[a][i]}return this.copyMatrix(e,t)}}])&&t(c.prototype,s),Object.defineProperty(c,"prototype",{writable:!1}),e}(),h=JSON.parse('[{"name":"Block","matrix":[[1,1],[1,1]]},{"name":"Bi-Block","matrix":[[1,1,0,1,1],[1,1,0,1,1]]},{"name":"Bee-Hive","matrix":[[0,1,0],[1,0,1],[1,0,1],[0,1,0]]},{"name":"Honey Farm","matrix":[[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,0,1,1,0],[1,0,0,1,0,0,0,0,0,1,0,0,1],[0,1,1,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0]]},{"name":"Loaf","matrix":[[0,0,1,0],[0,1,0,1],[1,0,0,1],[0,1,1,0]]},{"name":"Hamburger","matrix":[[0,1,1,0,0],[1,0,0,1,0],[1,0,1,0,1],[0,1,0,0,1],[0,0,1,1,0]]},{"name":"Bi-Loaf","matrix":[[0,0,0,0,0,1,0],[0,0,0,0,1,0,1],[0,0,0,1,0,0,1],[0,0,1,0,1,1,0],[0,1,0,1,0,0,0],[1,0,0,1,0,0,0],[0,1,1,0,0,0,0]]},{"name":"Bakery","matrix":[[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,1,0,1,0,0,0,0],[0,1,1,0,1,0,0,0,1,0],[1,0,0,1,0,0,0,1,0,1],[1,0,1,0,0,0,1,0,0,1],[0,1,0,0,0,1,0,1,1,0],[0,0,0,0,1,0,1,0,0,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,0,1,1,0,0,0,0]]},{"name":"Tub","matrix":[[0,1,0],[1,0,1],[0,1,0]]},{"name":"Barge","matrix":[[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,0]]},{"name":"Long-Barge","matrix":[[0,1,0,0,0],[1,0,1,0,0],[0,1,0,1,0],[0,0,1,0,1],[0,0,0,1,0]]},{"name":"Boat","matrix":[[0,1,0],[1,0,1],[0,1,1]]},{"name":"Long-Boat","matrix":[[0,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,1]]},{"name":"Ship","matrix":[[1,1,0],[1,0,1],[0,1,1]]},{"name":"Long-Ship","matrix":[[1,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,1]]},{"name":"Boat-Tie","matrix":[[0,1,0,0,0,0],[1,0,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,0,1],[0,0,0,0,1,0]]},{"name":"Ship-Tie","matrix":[[1,1,0,0,0,0],[1,0,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,0,1],[0,0,0,0,1,1]]},{"name":"Canoe","matrix":[[1,1,0,0,0],[1,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1],[0,0,0,1,1]]},{"name":"Carrier","matrix":[[1,1,0,0],[1,0,0,1],[0,0,1,1]]},{"name":"Integral Sign","matrix":[[0,0,0,1,1],[0,0,0,0,1],[0,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0]]},{"name":"Mango","matrix":[[0,1,1,0,0],[1,0,0,1,0],[0,1,0,0,1],[0,0,1,1,0]]},{"name":"Pond","matrix":[[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]},{"name":"Snake","matrix":[[1,1,0,1],[1,0,1,1]]},{"name":"Bell","matrix":[[0,0,0,1],[0,1,1,1],[1,0,0,0],[0,1,1,1],[0,0,0,1]]},{"name":"Eater","matrix":[[0,0,0,1],[0,1,1,1],[1,0,0,0],[1,1,0,0]]},{"name":"Eater 2","matrix":[[0,0,1,0,0,0,0],[0,1,0,1,0,0,0],[0,1,0,1,0,0,0],[1,1,0,1,1,1,0],[0,0,0,0,0,0,1],[1,1,0,1,1,1,0],[1,1,0,1,0,0,0]]}]'),m=JSON.parse('[{"name":"Glider","matrix":[[0,0,1],[1,0,1],[0,1,1]]},{"name":"Light-weight spaceship – LWSS","matrix":[[1,0,1,0],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]]},{"name":"Middle-weight spaceship – MWSS","matrix":[[1,0,1,0],[0,0,0,1],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]]},{"name":"Heavy-weight spaceship – HWSS","matrix":[[1,0,1,0],[0,0,0,1],[0,0,0,1],[0,0,0,1],[0,0,0,1],[1,0,0,1],[0,1,1,1]]}]'),u=JSON.parse('[{"name":"Blinker – period 2","matrix":[[1],[1],[1]]},{"name":"Toad – period 2","matrix":[[1,0],[1,1],[1,1],[0,1]]},{"name":"Beacon – period 2","matrix":[[0,0,1,1],[0,0,1,1],[1,1,0,0],[1,1,0,0]]},{"name":"Clock – period 2","matrix":[[0,1,0,0],[0,1,0,1],[1,0,1,0],[0,0,1,0]]},{"name":"Pulsar – period 3","matrix":[[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],[0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,1,0,1,0,1,0,1,0,1,0,1,0,0],[1,1,1,0,0,1,1,0,1,1,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0]]},{"name":"Penta decanthlon – period 15","matrix":[[1,0,0,1,0,1,1,0,1,0,0,1],[1,1,1,1,0,1,1,0,1,1,1,1],[1,0,0,1,0,1,1,0,1,0,0,1]]},{"name":"Star – period 3","matrix":[[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0,0],[0,0,1,1,1,0,1,1,1,0,0],[0,0,1,0,0,0,0,0,1,0,0],[0,1,1,0,0,0,0,0,1,1,0],[1,1,0,0,0,0,0,0,0,1,1],[0,1,1,0,0,0,0,0,1,1,0],[0,0,1,0,0,0,0,0,1,0,0],[0,0,1,1,1,0,1,1,1,0,0],[0,0,0,0,1,1,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0]]},{"name":"Cross – period 3","matrix":[[0,0,1,1,1,1,0,0],[0,0,1,0,0,1,0,0],[1,1,1,0,0,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,0,0,1,1,1],[0,0,1,0,0,1,0,0],[0,0,1,1,1,1,0,0]]},{"name":"French Kiss – period 3","matrix":[[0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,1,0,0,0],[0,0,0,1,1,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,0],[0,0,1,0,0,1,1,0,0,0],[0,0,0,1,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0]]},{"name":"Clock 2 – period 4","matrix":[[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,1,0,1,1],[0,0,0,1,0,1,1,0,1,0,1,1],[1,1,0,1,1,0,0,0,1,0,0,0],[1,1,0,1,0,0,0,0,1,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0]]},{"name":"Pinwheel – period 4","matrix":[[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,1,0,0,0,0,1,0,1,1],[0,0,0,1,0,1,0,0,1,0,1,1],[1,1,0,1,1,0,0,0,1,0,0,0],[1,1,0,1,0,0,1,0,1,0,0,0],[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0]]},{"name":"Octagon – period 5","matrix":[[0,0,0,1,1,0,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,1,1,0,0,0]]},{"name":"Fumarole – period 5","matrix":[[0,0,0,0,0,1,1],[0,1,1,1,0,0,1],[0,0,0,0,1,1,0],[1,0,0,0,0,0,0],[1,0,0,0,0,0,0],[0,0,0,0,1,1,0],[0,1,1,1,0,0,1],[0,0,0,0,0,1,1]]}]'),S=JSON.parse('[{"name":"Gosper\'s glider gun","matrix":[[0,0,0,0,1,1,0,0,0],[0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0],[0,0,0,1,0,0,0,1,0],[0,0,1,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1],[0,0,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1,0],[0,0,0,0,1,1,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,0],[0,0,1,1,1,0,0,0,0],[0,1,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0]]}]'),T=JSON.parse('[{"name":"Pentomino O","matrix":[[1,1,1,1,1]]},{"name":"Pentomino P","matrix":[[1,1,0],[1,1,1]]},{"name":"Pentomino Q","matrix":[[1,1,1,1],[0,0,0,1]]},{"name":"Pentomino R – 1103","matrix":[[1,0,0],[1,1,1],[0,1,0]]},{"name":"Pentomino S","matrix":[[0,0,1,1],[1,1,1,0]]},{"name":"Pentomino T","matrix":[[1,0,0],[1,1,1],[1,0,0]]},{"name":"Pentomino U","matrix":[[1,1],[0,1],[1,1]]},{"name":"Pentomino V","matrix":[[1,1,1],[0,0,1],[0,0,1]]},{"name":"Pentomino W","matrix":[[1,1,0],[0,1,1],[0,0,1]]},{"name":"Pentomino X","matrix":[[0,1,0],[1,1,1],[0,1,0]]},{"name":"Pentomino Y","matrix":[[0,1],[1,1],[0,1],[0,1]]},{"name":"Pentomino X","matrix":[[1,1,0],[0,1,0],[0,1,1]]}]'),_=JSON.parse('[{"name":"Acorn – 5206","matrix":[[0,0,1],[0,0,1],[0,0,1],[0,1,0],[0,0,0],[1,0,1],[0,0,1]]},{"name":"Rabbits – 17332","matrix":[[0,1,0,0],[0,0,1,1],[0,1,0,0],[0,0,0,0],[1,0,0,0],[0,1,1,0],[1,0,0,0],[0,0,0,1]]},{"name":"Toughie – 130","matrix":[[0,0,1],[1,0,1],[0,0,1],[0,0,0],[0,0,0],[0,0,0],[0,1,1],[0,1,0]]},{"name":"Rocket – 194","matrix":[[0,0,0,0,1],[0,1,1,1,1],[1,1,1,1,0],[1,0,0,1,0],[1,1,1,1,0],[0,1,1,1,1],[0,0,0,0,1]]}]'),v=JSON.parse('[{"name":"Cheshire Cat","matrix":[[0,0,1,1,1,0],[1,1,0,0,0,1],[0,1,0,1,0,1],[0,1,0,1,0,1],[1,1,0,0,0,1],[0,0,1,1,1,0]]},{"name":"Bell shaped","matrix":[[0,0,0,1],[0,1,1,1],[1,0,0,1],[0,1,1,1],[0,0,0,1]]},{"name":"Boat explosion","matrix":[[0,0,0,1,1],[0,1,1,0,1],[0,1,0,1,0],[1,0,1,1,0],[1,1,0,0,0]]}]'),f=JSON.parse('[{"name":"Bee defense","matrix":[[0,0,0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,1,1,0],[1,0,0,1,0,0,0,0,0,1,0,0,1],[0,1,1,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0]]},{"name":"Bee war","matrix":[[0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,0,1,1,0],[1,0,0,1,0,0,0,0,0,1,0,0,1],[0,1,1,0,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0]]},{"name":"Bee explosion","matrix":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,1,0],[1,1,0,0,1,0,0,0,0,0,1,0,0,1,1],[0,1,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}]');function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function R(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==O(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,"string");if("object"!==O(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===O(n)?n:String(n)),i)}var n}function L(e,t,a){return t&&R(e.prototype,t),a&&R(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}const d=L((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stable=h,this.spaceships=m,this.oscillators=u,this.guns=S,this.pentominoes=T,this.mathusalem=_,this.interesting=v,this.beelike=f}));function p(e,t){var a=e&&"number"==typeof e?e:0,i=t&&"number"==typeof t?t:0;return Math.floor(Math.random()*(i-a)+a)}function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function g(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==C(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,"string");if("object"!==C(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===C(n)?n:String(n)),i)}var n}function $(e,t,a){return t&&g(e.prototype,t),a&&g(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function x(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function N(e,t,a){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return a}var y=new WeakSet,A=new WeakSet,P=new WeakSet,I=new WeakSet,w=new WeakSet,M=new WeakSet,b=new WeakSet,B=new WeakSet,U=new WeakSet,k=new WeakSet;function G(){this.generation++,N(this,A,H).call(this),N(this,P,D).call(this)}function H(){for(var e=this,t=this.map.generateMatrix(this.map.matrix_width,this.map.matrix_height),a=0,i=function(e,t){return e<0?t-1:e>t-1?0:e},n=function(t,a){var n=0;return n+=1===e.cells[i(t-1,e.map.matrix_width)][i(a-1,e.map.matrix_height)]?1:0,n+=1===e.cells[i(t-1,e.map.matrix_width)][i(a,e.map.matrix_height)]?1:0,n+=1===e.cells[i(t-1,e.map.matrix_width)][i(a+1,e.map.matrix_height)]?1:0,n+=1===e.cells[i(t,e.map.matrix_width)][i(a-1,e.map.matrix_height)]?1:0,n+=1===e.cells[i(t,e.map.matrix_width)][i(a+1,e.map.matrix_height)]?1:0,n+=1===e.cells[i(t+1,e.map.matrix_width)][i(a-1,e.map.matrix_height)]?1:0,(n+=1===e.cells[i(t+1,e.map.matrix_width)][i(a,e.map.matrix_height)]?1:0)+(1===e.cells[i(t+1,e.map.matrix_width)][i(a+1,e.map.matrix_height)]?1:0)},r=0;r<this.map.matrix_width;r++)for(var l=0;l<this.map.matrix_height;l++){var o=n(r,l);o<2||o>3?t[r][l]=0:0!==this.cells[r][l]||3!==o?t[r][l]=this.cells[r][l]:t[r][l]=1}for(var c=0;c<this.map.matrix_width;c++)for(var s=0;s<this.map.matrix_height;s++)this.cells[c][s]=t[c][s],1===t[c][s]&&a++;this.population=a}function D(){this.map.draw(),this.$GENERATION_WRAPPER.innerText="Generation: ".concat(this.generation),this.$POPULATION_WRAPPER.innerText="Population: ".concat(this.population)}function W(e,t,a){for(var i=0;i<e.length;i++)for(var n=0;n<e[i].length;n++)e[i][n]=p(t,a);return e}function q(){this.interval=0,this.generation=0,this.population=0,this.map.matrix=this.map.generateMatrix(this.map.matrix_width,this.map.matrix_height),this.cells=this.map.matrix}function j(){for(var e=Math.abs(this.allocateCoordinates[1][0]-this.allocateCoordinates[0][0])+1,t=Math.abs(this.allocateCoordinates[1][1]-this.allocateCoordinates[0][1])+1,a=this.map.generateMatrix(e,t),i=0;i<e;i++)for(var n=0;n<t;n++){var r=this.allocateCoordinates[0][0]+i,l=this.allocateCoordinates[0][1]+n;a[i][n]=this.cells[r][l]}console.log("width = ".concat(e,", height = ").concat(t)),console.log(a)}function X(e,t){if(!(e.length<t.length||e[0].length<t[0].length))for(var a=Math.floor(e.length/2)-Math.floor(t.length/2),i=Math.floor(e[0].length/2)-Math.floor(t[0].length/2),n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)this.cells[a+n][i+r]=t[n][r]}function F(){this.MATRIX_WIDTH=50,this.MATRIX_HEIGHT=50,this.SPEED_RATE=100}function J(){this.$MAP_WRAPPER=document.querySelector("#map"),this.$GENERATION_WRAPPER=document.querySelector(".game-of-life__generation"),this.$POPULATION_WRAPPER=document.querySelector(".game-of-life__population"),this.$START_BUTTON=document.querySelector(".game-of-life__start"),this.$STOP_BUTTON=document.querySelector(".game-of-life__stop"),this.$NEXT_BUTTON=document.querySelector(".game-of-life__next"),this.$CLEAN_BUTTON=document.querySelector(".game-of-life__clean"),this.$RANDOMIZE_BUTTON=document.querySelector(".game-of-life__randomize"),this.$SPEED_SELECTOR=document.querySelector(".game-of-life__speed-menu"),this.$REFLECT_X_BUTTON=document.querySelector(".game-of-life__reflect-x"),this.$REFLECT_Y_BUTTON=document.querySelector(".game-of-life__reflect-y"),this.$ROTATE_LEFT_BUTTON=document.querySelector(".game-of-life__rotate-left"),this.$ROTATE_RIGHT_BUTTON=document.querySelector(".game-of-life__rotate-right"),this.$EXPORT_BUTTON=document.querySelector(".game-of-life__export"),this.$IMPORT_INPUT=document.querySelector(".game-of-life__import-input"),this.$IMPORT_BUTTON=document.querySelector(".game-of-life__import"),this.$STABLE_SELECTOR=document.querySelector(".game-of-life__stables-menu"),this.$SPACESHIPS_SELECTOR=document.querySelector(".game-of-life__spaceships-menu"),this.$OSCILLATORS_SELECTOR=document.querySelector(".game-of-life__oscillators-menu"),this.$GUNS_SELECTOR=document.querySelector(".game-of-life__guns-menu"),this.$PENTOMINO_SELECTOR=document.querySelector(".game-of-life__pentominoes-menu"),this.$MATHUSALEM_SELECTOR=document.querySelector(".game-of-life__mathusalem-menu"),this.$INTERESTING_SELECTOR=document.querySelector(".game-of-life__interesting-menu"),this.$BEE_GARDEN_SELECTOR=document.querySelector(".game-of-life__bee-garden-menu")}function Y(){var e=this;this.$MAP_WRAPPER.addEventListener("click",(function(t){var a=Math.floor(t.offsetX/e.map.cell_width),i=Math.floor(t.offsetY/e.map.cell_height);if(!0===t.ctrlKey&&0===e.interval)return!1===e.allocate&&(e.allocate=!0),e.allocateCoordinates.push(new Array(a,i)),void(e.allocateCoordinates.length>=2&&(N(e,M,j).call(e),e.allocateCoordinates=[]));0===e.cells[a][i]?e.cells[a][i]=1:e.cells[a][i]=0,N(e,P,D).call(e)})),this.$MAP_WRAPPER.addEventListener("contextmenu",(function(t){t.preventDefault(),!0===e.allocate&&(e.allocate=!1,e.allocateCoordinates=[]),N(e,P,D).call(e)})),this.$START_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),e.interval=0,e.interval=setInterval(N(e,y,G).bind(e),e.SPEED_RATE)})),this.$STOP_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),e.interval=0})),this.$NEXT_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),e.interval=0,N(e,y,G).call(e)})),this.$CLEAN_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),N(e,w,q).call(e),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1"})),this.$RANDOMIZE_BUTTON.addEventListener("click",(function(){clearInterval(e.interval),N(e,w,q).call(e),e.cells=N(e,I,W).call(e,e.cells,0,2),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1"})),this.$SPEED_SELECTOR.addEventListener("input",(function(){var t=0!==e.interval?1:0;1===t&&(clearInterval(e.interval),e.interval=0),e.SPEED_RATE=e.$SPEED_SELECTOR.value,1===t&&(e.interval=setInterval(N(e,y,G).bind(e),e.SPEED_RATE))})),this.$REFLECT_X_BUTTON.addEventListener("click",(function(){e.cells=e.map.reflectX(e.cells),N(e,P,D).call(e)})),this.$REFLECT_Y_BUTTON.addEventListener("click",(function(){e.cells=e.map.reflectY(e.cells),N(e,P,D).call(e)})),this.$ROTATE_LEFT_BUTTON.addEventListener("click",(function(){e.cells=e.map.rotateRight(e.cells),N(e,P,D).call(e)})),this.$ROTATE_RIGHT_BUTTON.addEventListener("click",(function(){e.cells=e.map.rotateLeft(e.cells),N(e,P,D).call(e)})),this.$EXPORT_BUTTON.addEventListener("click",(function(){var t=new Blob([JSON.stringify(e.map.matrix)],{type:"application/json"}),a=document.createElement("a");a.setAttribute("href",URL.createObjectURL(t)),a.setAttribute("download","save-".concat(Date.now(),".json")),a.click()})),this.$IMPORT_BUTTON.addEventListener("click",(function(){e.$IMPORT_INPUT.click()})),this.$IMPORT_INPUT.addEventListener("input",(function(){if("application/json"===e.$IMPORT_INPUT.files[0].type){var t=e.$IMPORT_INPUT.files[0],a=new FileReader;a.readAsText(t),a.onload=function(){for(var t=JSON.parse(a.result),i=0;i<e.map.matrix_width;i++)for(var n=0;n<e.map.matrix_height;n++)e.cells[i][n]=t[i][n];N(e,P,D).call(e)},a.onerror=function(){console.log(a.error)},e.$IMPORT_INPUT.value=""}})),this.$STABLE_SELECTOR.addEventListener("change",(function(){"-1"!==e.$STABLE_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.stable[e.$STABLE_SELECTOR.value].matrix),N(e,P,D).call(e),e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$SPACESHIPS_SELECTOR.addEventListener("change",(function(){"-1"!==e.$SPACESHIPS_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.spaceships[e.$SPACESHIPS_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$OSCILLATORS_SELECTOR.addEventListener("change",(function(){"-1"!==e.$OSCILLATORS_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.oscillators[e.$OSCILLATORS_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$GUNS_SELECTOR.addEventListener("change",(function(){"-1"!==e.$GUNS_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.guns[e.$GUNS_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$PENTOMINO_SELECTOR.addEventListener("change",(function(){"-1"!==e.$PENTOMINO_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.pentominoes[e.$PENTOMINO_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$.MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$MATHUSALEM_SELECTOR.addEventListener("change",(function(){"-1"!==e.$MATHUSALEM_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.mathusalem[e.$MATHUSALEM_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$INTERESTING_SELECTOR.addEventListener("change",(function(){"-1"!==e.$INTERESTING_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.interesting[e.$INTERESTING_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$BEE_GARDEN_SELECTOR.value="-1")})),this.$BEE_GARDEN_SELECTOR.addEventListener("change",(function(){"-1"!==e.$BEE_GARDEN_SELECTOR.value&&(clearInterval(e.interval),N(e,w,q).call(e),N(e,b,X).call(e,e.cells,e.figures.beelike[e.$BEE_GARDEN_SELECTOR.value].matrix),N(e,P,D).call(e),e.$STABLE_SELECTOR.value="-1",e.$OSCILLATORS_SELECTOR.value="-1",e.$SPACESHIPS_SELECTOR.value="-1",e.$GUNS_SELECTOR.value="-1",e.$PENTOMINO_SELECTOR.value="-1",e.$MATHUSALEM_SELECTOR.value="-1",e.$INTERESTING_SELECTOR.value="-1")}))}new($((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,k),x(this,U),x(this,B),x(this,b),x(this,M),x(this,w),x(this,I),x(this,P),x(this,A),x(this,y),N(this,B,F).call(this),N(this,U,J).call(this),N(this,k,Y).call(this),this.figures=new d,this.map=new E(this.$MAP_WRAPPER,this.MATRIX_WIDTH,this.MATRIX_HEIGHT),this.interval=0,this.generation=0,this.population=0,this.cells=this.map.matrix,this.allocate=!1,this.allocateCoordinates=[],N(this,P,D).call(this)})))})();