import Character from "../Character/Character.js";
import { type KingData, type CharacterData } from "../types.js";

class King extends Character {
  constructor(
    characterData: CharacterData,
    protected kingData: KingData,
  ) {
    super(characterData);
  }

  communicate() {
    return "Vais a morir todos";
  }
}

export default King;
