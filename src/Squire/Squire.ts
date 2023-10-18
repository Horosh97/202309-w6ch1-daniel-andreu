import Character from "../Character/Character.js";
import { type SquireData, type CharacterData } from "../Types.js";

class Squire extends Character {
  constructor(
    characterData: CharacterData,
    protected squireData: SquireData,
  ) {
    super(characterData);
  }

  communicate() {
    return "Soy un loser";
  }
}

export default Squire;
