import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../core/pergunta/pergunta.service';
import { Pergunta } from '../core/pergunta/pergunta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})

export class PerguntaPage implements OnInit {

  // @Input() pergunta = '';
  private pergunta: Pergunta;

  constructor(
    private perguntaService: PerguntaService,
    private activatedRoute: ActivatedRoute
  ) {}

  exibirPergunta(id){
    let pResp;
    this.perguntaService
      .pegarPergunta(id)
      .subscribe(data => {
        pResp = data;
        this.pergunta = pResp.data;
      });
  }


  ngOnInit() {
    const perguntaId = this.activatedRoute.snapshot.params.id;
    this.exibirPergunta(perguntaId);
  }

}
