import Character from "../Character/Character.js";
import { type KingData } from "../Types.js";

class King extends Character {
  constructor(protected kingData: KingData) {
    super(kingData.characterData);
  }

  communicate() {
    return "Vais a morir todos";
  }
}

export default King;
