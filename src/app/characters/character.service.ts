import { Injectable } from '@angular/core';
import { Character } from './character.model';
@Injectable()
export class CharacterService {

  private characters: Character[] = [
    {
      name: 'ドデカ民太郎',
      age: 28,
      sex: '男',
      bloodType:'A',
      comment:'炭酸です',
    },
    {
      name: '神田デンコ',
      age: 3,
      sex: '女',
      bloodType:'B',
      comment:'単３です',
    },
  ];

  constructor() { }

  getCharacters() {
    return this.characters.slice();
  }
}
