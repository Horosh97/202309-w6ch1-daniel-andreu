import Character from "../Character/Character.js";
import { type SquireData } from "../Types.js";

class Squire extends Character {
  constructor(protected squireData: SquireData) {
    super(squireData.characterData);
  }

  communicate() {
    return "Soy un loser";
  }
}

export default Squire;
