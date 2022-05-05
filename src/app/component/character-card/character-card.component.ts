import {Component, Input} from '@angular/core';
import {Character} from "../../models/Character";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character: Character | null = {id: 0, status: '', species: '', type: '', name: '', image: '', origin: {name: ''}};
  @Input() isSelectedCharacter: boolean = false;

}
