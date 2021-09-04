import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../marvel-service.service';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {

  characters : any;

  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters2().subscribe(data => {this.characters = {...data}
      this.characters = [...this.characters.data.results]
      console.log(this.characters)
    })
  }

}
