import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../marvel-service.service';

@Component({
  selector: 'app-pagefourteen',
  templateUrl: './pagefourteen.component.html',
  styleUrls: ['./pagefourteen.component.css']
})
export class PagefourteenComponent implements OnInit {

  characters : any;

  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit(): void {
    this.marvelService.getCharacters13().subscribe(data => {this.characters = {...data}
      this.characters = [...this.characters.data.results]
      console.log(this.characters)
    })
  }

}
