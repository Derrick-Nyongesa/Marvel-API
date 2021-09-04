import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../marvel-service.service';

@Component({
  selector: 'app-pagesixteen',
  templateUrl: './pagesixteen.component.html',
  styleUrls: ['./pagesixteen.component.css']
})
export class PagesixteenComponent implements OnInit {

  characters : any;

  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters15().subscribe(data => {this.characters = {...data}
      this.characters = [...this.characters.data.results]
      console.log(this.characters)
    })
  }

}
