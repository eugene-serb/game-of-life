/* ------------ */
/* GAME OF LIFE */
/* ------------ */

'use strict'

class Figures {

    constructor() {

        this.stable = [

            /* Block */
            [[1, 1],
             [1, 1]],

            /* Bi-Block */
            [[1, 1, 0, 1, 1],
             [1, 1, 0, 1, 1]],

            /* Bee-Hive */
            [[0, 1, 0],
             [1, 0, 1],
             [1, 0, 1],
             [0, 1, 0]],

            /* Honey Farm */
            [[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
             [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
             [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]],

            /* Loaf */
            [[0, 0, 1, 0],
             [0, 1, 0, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 0]],

            /* Hamburger */
            [[0, 1, 1, 0, 0],
             [1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1],
             [0, 1, 0, 0, 1],
             [0, 0, 1, 1, 0]],

            /* Bi-Loaf */
            [[0, 0, 0, 0, 0, 1, 0],
             [0, 0, 0, 0, 1, 0, 1],
             [0, 0, 0, 1, 0, 0, 1],
             [0, 0, 1, 0, 1, 1, 0],
             [0, 1, 0, 1, 0, 0, 0],
             [1, 0, 0, 1, 0, 0, 0],
             [0, 1, 1, 0, 0, 0, 0]],

            /* Bakery */
            [[0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
             [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
             [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
             [0, 1, 1, 0, 1, 0, 0, 0, 1, 0],
             [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
             [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
             [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
             [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
             [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
             [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],

            /* Tub */
            [[0, 1, 0],
             [1, 0, 1],
             [0, 1, 0]],

            /* Barge */
            [[0, 1, 0, 0],
             [1, 0, 1, 0],
             [0, 1, 0, 1],
             [0, 0, 1, 0]],

            /* Long-Barge */
            [[0, 1, 0, 0, 0],
             [1, 0, 1, 0, 0],
             [0, 1, 0, 1, 0],
             [0, 0, 1, 0, 1],
             [0, 0, 0, 1, 0]],

            /* Boat */
            [[0, 1, 0],
             [1, 0, 1],
             [0, 1, 1]],

            /* Long-Boat */
            [[0, 1, 0, 0],
             [1, 0, 1, 0],
             [0, 1, 0, 1],
             [0, 0, 1, 1]],

            /* Ship */
            [[1, 1, 0],
             [1, 0, 1],
             [0, 1, 1]],

            /* Long-Ship */
            [[1, 1, 0, 0],
             [1, 0, 1, 0],
             [0, 1, 0, 1],
                [0, 0, 1, 1]],

            /* Boat-Tie */
            [[0, 1, 0, 0, 0, 0],
             [1, 0, 1, 0, 0, 0],
             [0, 1, 1, 0, 0, 0],
             [0, 0, 0, 1, 1, 0],
             [0, 0, 0, 1, 0, 1],
             [0, 0, 0, 0, 1, 0]],

            /* Ship-Tie */
            [[1, 1, 0, 0, 0, 0],
             [1, 0, 1, 0, 0, 0],
             [0, 1, 1, 0, 0, 0],
             [0, 0, 0, 1, 1, 0],
             [0, 0, 0, 1, 0, 1],
             [0, 0, 0, 0, 1, 1]],

            /* Canoe */
            [[1, 1, 0, 0, 0],
             [1, 0, 0, 0, 0],
             [0, 1, 0, 0, 0],
             [0, 0, 1, 0, 1],
             [0, 0, 0, 1, 1]],

            /* Carrier */
            [[1, 1, 0, 0],
             [1, 0, 0, 1],
             [0, 0, 1, 1]],

            /* Integral Sign */
            [[0, 0, 0, 1, 1],
             [0, 0, 0, 0, 1],
             [0, 1, 1, 1, 0],
             [1, 0, 0, 0, 0],
             [1, 1, 0, 0, 0]],

            /* Mango */
            [[0, 1, 1, 0, 0],
             [1, 0, 0, 1, 0],
             [0, 1, 0, 0, 1],
             [0, 0, 1, 1, 0]],

            /* Pond */
            [[0, 1, 1, 0],
             [1, 0, 0, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 0]],

            /* Snake */
            [[1, 1, 0, 1],
             [1, 0, 1, 1]],

            /* Bell */
            [[0, 0, 0, 1],
             [0, 1, 1, 1],
             [1, 0, 0, 0],
             [0, 1, 1, 1],
             [0, 0, 0, 1]],

            /* Eater */
            [[0, 0, 0, 1],
             [0, 1, 1, 1],
             [1, 0, 0, 0],
             [1, 1, 0, 0]],

            /* Eater 2 */
            [[0, 0, 1, 0, 0, 0, 0],
             [0, 1, 0, 1, 0, 0, 0],
             [0, 1, 0, 1, 0, 0, 0],
             [1, 1, 0, 1, 1, 1, 0],
             [0, 0, 0, 0, 0, 0, 1],
             [1, 1, 0, 1, 1, 1, 0],
             [1, 1, 0, 1, 0, 0, 0]],
        ];

        this.spaceships = [

            /* Glider */
            [[0, 0, 1],
             [1, 0, 1],
             [0, 1, 1]],

            /* Light-weight spaceship – LWSS */
            [[1, 0, 1, 0],
             [0, 0, 0, 1],
             [0, 0, 0, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 1]],

            /* Middle-weight spaceship – MWSS */
            [[1, 0, 1, 0],
             [0, 0, 0, 1],
             [0, 0, 0, 1],
             [0, 0, 0, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 1]],

            /* Heavy-weight spaceship – HWSS */
            [[1, 0, 1, 0],
             [0, 0, 0, 1],
             [0, 0, 0, 1],
             [0, 0, 0, 1],
             [0, 0, 0, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 1]],
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

            /* Clock – period 2 */
            [[0, 1, 0, 0],
             [0, 1, 0, 1],
             [1, 0, 1, 0],
             [0, 0, 1, 0]],

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
             [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1]],
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
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        ];

        this.pentominoes = [
            /* Pentomino O */
            [[1, 1, 1, 1, 1]],

            /* Pentomino P */
            [[1, 1, 0],
             [1, 1, 1]],

            /* Pentomino Q */
            [[1, 1, 1, 1],
             [0, 0, 0, 1]],

            /* Pentomino R – 1103 */
            [[1, 0, 0],
             [1, 1, 1],
             [0, 1, 0]],

            /* Pentomino S */
            [[0, 0, 1, 1],
             [1, 1, 1, 0]],

            /* Pentomino T */
            [[1, 0, 0],
             [1, 1, 1],
             [1, 0, 0]],

            /* Pentomino U */
            [[1, 1],
             [0, 1],
             [1, 1]],

            /* Pentomino V */
            [[1, 1, 1],
             [0, 0, 1],
             [0, 0, 1]],

            /* Pentomino W */
            [[1, 1, 0],
             [0, 1, 1],
             [0, 0, 1]],

            /* Pentomino X */
            [[0, 1, 0],
             [1, 1, 1],
             [0, 1, 0]],

            /* Pentomino Y */
            [[0, 1],
             [1, 1],
             [0, 1],
             [0, 1]],

            /* Pentomino X */
            [[1, 1, 0],
             [0, 1, 0],
             [0, 1, 1]],
        ];

        this.mathusalem = [

            /* Acorn – 5206 */
            [[0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 1, 0, 0, 0],
             [1, 1, 0, 0, 1, 1, 1]],

            /* Rabbits – 17332 */
            [[0, 0, 0, 0, 1, 0, 1, 0],
             [1, 0, 1, 0, 0, 1, 0, 0],
             [0, 1, 0, 0, 0, 1, 0, 0],
             [0, 1, 0, 0, 0, 0, 0, 1]],

            /* Toughie – 130 */
            [[0, 0, 0, 0, 0, 0, 1, 0],
             [1, 1, 0, 0, 0, 0, 0, 0],
             [0, 1, 0, 0, 0, 1, 1, 1]],

            /* Rocket – 194 */
            [[0, 0, 0, 0, 1],
             [0, 1, 1, 1, 1],
             [1, 1, 1, 1, 0],
             [1, 0, 0, 1, 0],
             [1, 1, 1, 1, 0],
             [0, 1, 1, 1, 1],
             [0, 0, 0, 0, 1]],
        ];

        this.interesting = [

            /* Cheshire Cat */
            [[0, 0, 1, 1, 1, 0],
             [1, 1, 0, 0, 0, 1],
             [0, 1, 0, 1, 0, 1],
             [0, 1, 0, 1, 0, 1],
             [1, 1, 0, 0, 0, 1],
             [0, 0, 1, 1, 1, 0]],

            /* Bell shaped */
            [[0, 0, 0, 1],
             [0, 1, 1, 1],
             [1, 0, 0, 1],
             [0, 1, 1, 1],
             [0, 0, 0, 1]],

            /* Boat explosion */
            [[0, 0, 0, 1, 1],
             [0, 1, 1, 0, 1],
             [0, 1, 0, 1, 0],
             [1, 0, 1, 1, 0],
             [1, 1, 0, 0, 0]],
        ];

        this.beelike = [

            /* Bee defense */
            [[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
             [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
             [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0]],

            /* Bee war */
            [[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
             [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
             [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]],

            /* Bee explosion */
            [[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
             [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
             [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]],
        ];
    };
};

class Support {
    getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
};

class Configurations {
    constructor() {
        this.CANVAS_WIDTH = 750;
        this.CANVAS_HEIGHT = 750;
        this.MATRIX_WIDTH = 50;
        this.MATRIX_HEIGHT = 50;
        this.SPEED_RATE = 100;

        this.MAP_WRAPPER = document.querySelector('.game-of-life__map-wrapper');

        this.GENERATION_WRAPPER = document.querySelector('.game-of-life__generation');
        this.POPULATION_WRAPPER = document.querySelector('.game-of-life__population');

        this.START_BUTTON = document.querySelector('.game-of-life__start');
        this.STOP_BUTTON = document.querySelector('.game-of-life__stop');
        this.NEXT_BUTTON = document.querySelector('.game-of-life__next');
        this.CLEAN_BUTTON = document.querySelector('.game-of-life__clean');
        this.RANDOMIZE_BUTTON = document.querySelector('.game-of-life__randomize');
        this.SPEED_SELECTOR = document.querySelector('.game-of-life__speed-menu');

        this.REFLECT_X_BUTTON = document.querySelector('.game-of-life__reflect-x');
        this.REFLECT_Y_BUTTON = document.querySelector('.game-of-life__reflect-y');
        this.ROTATE_LEFT_BUTTON = document.querySelector('.game-of-life__rotate-left');
        this.ROTATE_RIGHT_BUTTON = document.querySelector('.game-of-life__rotate-right');

        this.EXPORT_BUTTON = document.querySelector('.game-of-life__export');
        this.IMPORT_INPUT = document.querySelector('.game-of-life__import-input');
        this.IMPORT_BUTTON = document.querySelector('.game-of-life__import');

        this.STABLE_SELECTOR = document.querySelector('.game-of-life__stables-menu');
        this.SPACESHIPS_SELECTOR = document.querySelector('.game-of-life__spaceships-menu');
        this.OSCILLATORS_SELECTOR = document.querySelector('.game-of-life__oscillators-menu');
        this.GUNS_SELECTOR = document.querySelector('.game-of-life__guns-menu');
        this.PENTOMINO_SELECTOR = document.querySelector('.game-of-life__pentominoes-menu');
        this.MATHUSALEM_SELECTOR = document.querySelector('.game-of-life__mathusalem-menu');
        this.INTERESTING_SELECTOR = document.querySelector('.game-of-life__interesting-menu');
        this.BEE_GARDEN_SELECTOR = document.querySelector('.game-of-life__bee-garden-menu');
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

    reflectX = (matrix) => {
        return matrix.reverse();
    };

    reflectY = (matrix) => {
        let result = this.generateMatrix(matrix.length, matrix[0].length);

        for (let x = 0; x < matrix.length; x++) {
            result[x] = matrix[x].reverse();
        };

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                matrix[x][y] = result[x][y];
            };
        };

        return matrix;
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
            };
        };

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                matrix[x][y] = result[x][y];
            };
        };

        return matrix;
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
            };
        };

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                matrix[x][y] = result[x][y];
            };
        };

        return matrix;
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
        this.population = 0;
        this.cells = this.map.matrix;

        this._draw();
        this._controls();
    };

    _clean = () => {
        this.interval = 0;
        this.generation = 0;
        this.population = 0;
        this.map.matrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
        this.cells = this.map.matrix;
    };

    _gameloop = () => {
        this.generation++;

        this._update();
        this._draw();
    };

    _update = () => {
        let nextMatrix = this.map.generateMatrix(this.map.matrix_width, this.map.matrix_height);
        let population = 0;

        const fixCollision = (n, length) => {
            if (n < 0) {
                return length - 1;
            } else if (n > length - 1) {
                return 0;
            };
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
                };

                if (this.cells[x][y] === 0 && neigbours === 3) {
                    nextMatrix[x][y] = 1;
                    continue;
                };

                nextMatrix[x][y] = this.cells[x][y];
            };
        };

        for (let x = 0; x < this.map.matrix_width; x++) {
            for (let y = 0; y < this.map.matrix_height; y++) {
                this.cells[x][y] = nextMatrix[x][y];

                if (nextMatrix[x][y] === 1) {
                    population++;
                };
            };
        };

        this.population = population;
    };

    _draw = () => {
        this.map.draw();
        this.configurations.GENERATION_WRAPPER.innerText = `Generation: ${this.generation}`;
        this.configurations.POPULATION_WRAPPER.innerText = `Population: ${this.population}`;
    };

    _randomizeMatrix = (matrix, min, max) => {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = this.support.getRandomInteger(min, max);
            };
        };
        return matrix;
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
        this.configurations.MAP_WRAPPER.addEventListener('click', (event) => {
            let x = Math.floor(event.offsetX / this.map.cell_width);
            let y = Math.floor(event.offsetY / this.map.cell_height);

            if (this.cells[x][y] === 0) {
                this.cells[x][y] = 1;
            } else {
                this.cells[x][y] = 0;
            };

            this._draw();
        });

        this.configurations.START_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;
            this.interval = setInterval(this._gameloop, this.configurations.SPEED_RATE);
        });

        this.configurations.STOP_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;
        });

        this.configurations.NEXT_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this.interval = 0;
            this._gameloop();
        });

        this.configurations.CLEAN_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this._clean();
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.RANDOMIZE_BUTTON.addEventListener('click', () => {
            clearInterval(this.interval);
            this._clean();
            this.cells = this._randomizeMatrix(this.cells, 0, 2);
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
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

        this.configurations.REFLECT_X_BUTTON.addEventListener('click', () => {
            this.cells = this.map.reflectX(this.cells);
            this._draw();
        });

        this.configurations.REFLECT_Y_BUTTON.addEventListener('click', () => {
            this.cells = this.map.reflectY(this.cells);
            this._draw();
        });

        this.configurations.ROTATE_LEFT_BUTTON.addEventListener('click', () => {
            this.cells = this.map.rotateRight(this.cells);
            this._draw();
        });

        this.configurations.ROTATE_RIGHT_BUTTON.addEventListener('click', () => {
            this.cells = this.map.rotateLeft(this.cells);
            this._draw();
        });

        this.configurations.EXPORT_BUTTON.addEventListener('click', () => {
            let blob = new Blob([JSON.stringify(this.map.matrix)], { type: 'application/json' });
            let link = document.createElement('a');
            link.setAttribute('href', URL.createObjectURL(blob));
            link.setAttribute('download', `save-${Date.now()}.json`);
            link.click();
        });

        this.configurations.IMPORT_BUTTON.addEventListener('click', () => {
            this.configurations.IMPORT_INPUT.click();
        });

        this.configurations.IMPORT_INPUT.addEventListener('input', () => {

            if (this.configurations.IMPORT_INPUT.files[0].type !== 'application/json') {
                return;
            };

            let file = this.configurations.IMPORT_INPUT.files[0];
            let reader = new FileReader();

            reader.readAsText(file);

            reader.onload = () => {
                let result = JSON.parse(reader.result);

                for (let x = 0; x < this.map.matrix_width; x++) {
                    for (let y = 0; y < this.map.matrix_height; y++) {
                        this.cells[x][y] = result[x][y];
                    };
                };

                this._draw();
            };

            reader.onerror = () => {
                console.log(reader.error);
            };

            this.configurations.IMPORT_INPUT.value = '';
        });

        this.configurations.STABLE_SELECTOR.addEventListener('change', () => {
            if (this.configurations.STABLE_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.stable[this.configurations.STABLE_SELECTOR.value])
            this._draw();

            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.SPACESHIPS_SELECTOR.addEventListener('change', () => {
            if (this.configurations.SPACESHIPS_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.spaceships[this.configurations.SPACESHIPS_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.OSCILLATORS_SELECTOR.addEventListener('change', () => {
            if (this.configurations.OSCILLATORS_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.oscillators[this.configurations.OSCILLATORS_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.GUNS_SELECTOR.addEventListener('change', () => {
            if (this.configurations.GUNS_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.guns[this.configurations.GUNS_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.PENTOMINO_SELECTOR.addEventListener('change', () => {
            if (this.configurations.PENTOMINO_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.pentominoes[this.configurations.PENTOMINO_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.MATHUSALEM_SELECTOR.addEventListener('change', () => {
            if (this.configurations.MATHUSALEM_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.mathusalem[this.configurations.MATHUSALEM_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.INTERESTING_SELECTOR.addEventListener('change', () => {
            if (this.configurations.INTERESTING_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.interesting[this.configurations.INTERESTING_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.BEE_GARDEN_SELECTOR.value = '-1';
        });

        this.configurations.BEE_GARDEN_SELECTOR.addEventListener('change', () => {
            if (this.configurations.BEE_GARDEN_SELECTOR.value === '-1') {
                return;
            };

            clearInterval(this.interval);
            this._clean();
            this._paste(this.cells, this.figures.beelike[this.configurations.BEE_GARDEN_SELECTOR.value])
            this._draw();

            this.configurations.STABLE_SELECTOR.value = '-1';
            this.configurations.OSCILLATORS_SELECTOR.value = '-1';
            this.configurations.SPACESHIPS_SELECTOR.value = '-1';
            this.configurations.GUNS_SELECTOR.value = '-1';
            this.configurations.PENTOMINO_SELECTOR.value = '-1';
            this.configurations.MATHUSALEM_SELECTOR.value = '-1';
            this.configurations.INTERESTING_SELECTOR.value = '-1';
        });
    };
};

/* -------------- */
/* INITIALIZATION */
/* -------------- */

const GAME = new Game();

