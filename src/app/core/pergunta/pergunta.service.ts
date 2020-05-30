import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

const URL_API = 'https://appgabi.herokuapp.com/perguntas/';


@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  private subject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  // private carregarPerguntas(){
  //   let ret;
  //   ret = this.http.get(URL_API);
  //   this.subject.next(ret);
  // }

  pegarPerguntas(){
    return this.http.get(URL_API);
  }

  pegarPerguntaNivel(nivel){
    return this.http.get(URL_API + '/nivel/' + nivel );
  }

  pegarPergunta(id){
    return this.http.get(URL_API + '/id/' + id );
  }

}
