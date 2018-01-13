import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styles: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(
    private CharacterService: CharacterService,
  ) { }

  ngOnInit() {
    this.characters = this.CharacterService.getCharacters();
  }

}
