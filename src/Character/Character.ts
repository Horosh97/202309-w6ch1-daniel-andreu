import { type CharacterData } from "../Types.js";

abstract class Character {
  alive = true;
  show = "Game of Thrones";

  constructor(protected characterData: CharacterData) {}

  protected die() {
    this.alive = false;
  }

  protected abstract communicate(): string;
}

export default Character;
