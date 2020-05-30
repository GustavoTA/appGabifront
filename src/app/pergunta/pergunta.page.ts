import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../core/pergunta/pergunta.service';
import { Pergunta } from '../core/pergunta/pergunta';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})

export class PerguntaPage implements OnInit {

  // @Input() pergunta = '';
  private pergunta: Pergunta;

  constructor(
    private perguntaService: PerguntaService
  ) {
    this.exibirPergunta();
  }

  exibirPergunta(){
    let pResp;
    this.perguntaService
      .pegarPerguntas()
      .subscribe(data => {
        pResp = data;
        this.pergunta = pResp.data;
      });
  }


  ngOnInit() {
  }

}
