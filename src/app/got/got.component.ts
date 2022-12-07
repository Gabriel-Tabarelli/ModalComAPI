import { Component } from '@angular/core';
import { GotService } from './got.service';


@Component({
  selector: 'app-got',
  templateUrl: './got.component.html',
  styleUrls: ['./got.component.css']
})

export class GotComponent {
  tagsGame: {family: any, firstName: any, fullName: any, id: any, imageUrl: any, lastName: any, title: any}[];
  selectedTag: {family: any, firstName: any, fullName: any, id: any, imageUrl: any, lastName: any, title: any};
  linkImage: string;

  constructor(private gotService: GotService) {}
  
  ngOnInit(): void {
    this.gotService.getTagsGames().subscribe(tagsGame => {
      console.log(tagsGame);
      this.tagsGame = tagsGame;
    })
  }

  selectTag(obj: {family: any, firstName: any, fullName: any, id: any, imageUrl: any, lastName: any, title: any}) {
    this.selectedTag = obj;
    console.log(this.selectedTag);
  }

}
