import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_API = 'https://appgabi.herokuapp.com/perguntas/';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor(private http: HttpClient) { }

  pegarPerguntas(){
    return this.http.get(URL_API);
  }

}
