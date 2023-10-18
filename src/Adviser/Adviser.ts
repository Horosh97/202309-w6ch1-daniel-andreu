import Character from "../Character/Character.js";
import { type AdviserData } from "../Types.js";

class Adviser extends Character {
  constructor(protected adviserData: AdviserData) {
    super(adviserData.characterData);
  }

  communicate() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

export default Adviser;
