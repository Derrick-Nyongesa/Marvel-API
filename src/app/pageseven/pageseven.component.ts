import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../marvel-service.service';

@Component({
  selector: 'app-pageseven',
  templateUrl: './pageseven.component.html',
  styleUrls: ['./pageseven.component.css']
})
export class PagesevenComponent implements OnInit {

  characters : any;

  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters6().subscribe(data => {this.characters = {...data}
      this.characters = [...this.characters.data.results]
      console.log(this.characters)
    })
  }

}
