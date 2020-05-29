import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../core/pergunta/pergunta.service';
// import { BehaviorSubject } from 'rxjs';
// import { Pergunta } from '../core/pergunta/pergunta';
// import { PerguntaService } from '../core/pergunta/pergunta.service';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})

export class PerguntaPage implements OnInit {

  // @Input() pergunta = '';
  // private pergunta$ = new BehaviorSubject<any>(null);
  // private pergunta: Pergunta ;

  constructor(
    private perguntaService: PerguntaService
  ) {

  }

  // exibirPergunta(){
  //   this.perguntaService.pegarPerguntas().subscribe(perguntas => {
  //     console.log(perguntas);
  //   });
  // }


  ngOnInit() {
  }

}
