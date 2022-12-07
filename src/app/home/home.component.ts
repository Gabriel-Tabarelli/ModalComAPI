import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  tagsDog: string[] = [];
  tagsCat: string[] = [];
  selectedTag: string
  linkImage: string;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getTagsDogs().subscribe(tagsDog => {
      console.log(tagsDog);
      this.tagsDog = tagsDog;
      this.tagsDog = this.tagsDog.filter(item => item.charAt(item.length-1) != '4')
    });

    this.homeService.getTagsCats().subscribe(tagsCat => {
      console.log(tagsCat);
      this.tagsCat = tagsCat
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
}
