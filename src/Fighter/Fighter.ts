import Character from "../Character/Character.js";
import { type FighterData } from "../Types.js";

class Fighter extends Character {
  constructor(protected figtherData: FighterData) {
    super(figtherData.characterData);
  }

  communicate() {
    return "Primero pego y luego pregunto";
  }
}

export default Fighter;
