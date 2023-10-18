import type CharacterData from "../Types.js";

abstract class Character {
  characterData;
  alive = true;
  show = "Game of Thrones";

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  protected die() {
    this.alive = false;
  }
}

export default Character;
