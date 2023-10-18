import Character from "../Character/Character.js";
import { type FighterData, type CharacterData } from "../types.js";

class Fighter extends Character {
  constructor(
    characterData: CharacterData,
    protected figtherData: FighterData,
  ) {
    super(characterData);
  }

  communicate() {
    return "Primero pego y luego pregunto";
  }
}

export default Fighter;
