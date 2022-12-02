import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _title = 'APP Component'; // propriedade pública para definir um título que será utilizado no HTML.

  tagsDog: string[] = [];
  tagsCat: string[] = [];
  tagsGame: string[] = [];
  selectedTag: string
  linkImage: string;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getTagsDogs().subscribe(tagsDog => {
      console.log(tagsDog);
      this.tagsDog = tagsDog;
      this.tagsDog = this.tagsDog.filter(item => item.charAt(item.length-1) != '4')
    });

    this.appService.getTagsCats().subscribe(tagsCat => {
      console.log(tagsCat);
      this.tagsCat = tagsCat
    });

    this.appService.getTagsGames().subscribe(tagsGame => {
      for(let i = 0; i < tagsGame.length; i++) {
        this.tagsGame[i] = tagsGame[i].imageUrl;
      }
      console.log(this.tagsGame);
    });
  }

  consultarDogs() {
    console.log(this.selectedTag);
    this.linkImage = 'https://random.dog/' + this.selectedTag;
  }

  consultarCats() {
    console.log(this.selectedTag);
    this.linkImage = 'https://cataas.com/cat/' + this.selectedTag;
  }

  consultarGames() {
    console.log(this.selectedTag);
    this.linkImage =  this.selectedTag;
  }
}

