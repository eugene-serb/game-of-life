'use strict';

import stillLives from '@/assets/still-lives.json';
import spaceships from '@/assets/spaceships.json';
import oscillators from '@/assets/oscillators.json';
import guns from '@/assets/guns.json';
import pentominoes from '@/assets/pentominoes.json';
import mathusalems from '@/assets/mathusalems.json';
import others from '@/assets/others.json';
import symmetrics from '@/assets/symmetrics.json';

export class Figures {
  constructor() {
    this.stable = stillLives;
    this.spaceships = spaceships;
    this.oscillators = oscillators;
    this.guns = guns;
    this.pentominoes = pentominoes;
    this.mathusalem = mathusalems;
    this.interesting = others;
    this.beelike = symmetrics;
  }
}

export default Figures;
