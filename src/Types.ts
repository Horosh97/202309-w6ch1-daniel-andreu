export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface KingData {
  characterData: CharacterData;
  yearsOfReign: number;
}

export interface FighterData {
  characterData: CharacterData;
  weapon: string;
  dexterity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface SquireData {
  characterData: CharacterData;
  fighter: string;
  nepotism: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface AdviserData {
  characterData: CharacterData;
  advisedCharacter: string;
}
