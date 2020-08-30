import { Injectable } from '@angular/core';
import {DND_CHARACTERS_LIST} from '../data/dnd-characters-list';
import { ICharactersList } from '../interfaces/icharacters-list';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {
  
  characters: ICharactersList[] = [];
  constructor() { 
    this.characters = DND_CHARACTERS_LIST;
  }

  getCharacters(): ICharactersList[]{
    return this.characters;
  }
}
