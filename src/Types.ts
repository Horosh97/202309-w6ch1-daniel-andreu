export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface SquireData extends CharacterData {
  fighter: string;
  nepotism: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
