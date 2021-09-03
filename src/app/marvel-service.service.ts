import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  private generalKey = 'https://gateway.marvel.com:443/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b&limit=100'

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.generalKey);
  }
}
