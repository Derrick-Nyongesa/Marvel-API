import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  private generalKey = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=0'

  private generalKey1 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=100'

  private generalKey2 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=200'

  private generalKey3 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=300'

  private generalKey4 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=400'

  private generalKey5 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=500'

  private generalKey6 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=600'

  private generalKey7 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=700'

  private generalKey8 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=800'

  private generalKey9 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=900'

  private generalKey10 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=1000'

  private generalKey11 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=1100'

  private generalKey12 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=1200'

  private generalKey13 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=1300'

  private generalKey14 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=1400'

  private generalKey15 = 'https://gateway.marvel.com/v1/public/characters?ts=123456789&apikey=10092734bb9b55f12a5975c627dcd579&hash=0768b5014ec8a2dc49c6b7593e85a229&limit=100&offset=1500'

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.generalKey);
  }

  getCharacters1(){
    return this.http.get(this.generalKey1);
  }

  getCharacters2(){
    return this.http.get(this.generalKey2);
  }

  getCharacters3(){
    return this.http.get(this.generalKey3);
  }

  getCharacters4(){
    return this.http.get(this.generalKey4);
  }

  getCharacters5(){
    return this.http.get(this.generalKey5);
  }

  getCharacters6(){
    return this.http.get(this.generalKey6);
  }

  getCharacters7(){
    return this.http.get(this.generalKey7);
  }

  getCharacters8(){
    return this.http.get(this.generalKey8);
  }

  getCharacters9(){
    return this.http.get(this.generalKey9);
  }

  getCharacters10(){
    return this.http.get(this.generalKey10);
  }

  getCharacters11(){
    return this.http.get(this.generalKey11);
  }

  getCharacters12(){
    return this.http.get(this.generalKey12);
  }

  getCharacters13(){
    return this.http.get(this.generalKey13);
  }

  getCharacters14(){
    return this.http.get(this.generalKey14);
  }

  getCharacters15(){
    return this.http.get(this.generalKey15);
  }



}
