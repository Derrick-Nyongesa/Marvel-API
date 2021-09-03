import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../marvel-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters : any;

  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe(data => {this.characters = {...data}
      this.characters = [...this.characters.data.results]
      console.log(this.characters)
    })
  }

}
