import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../core/pergunta/pergunta.service';
import { Pergunta } from '../core/pergunta/pergunta';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})

export class PerguntaPage implements OnInit {

  // @Input() pergunta = '';
  private pergunta: Pergunta;
  private justi = false;

  formResposta: FormGroup;

  constructor(
    private perguntaService: PerguntaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formResposta = this.formBuilder.group({
      opcao: ['', Validators.required],
    });
    const perguntaId = this.activatedRoute.snapshot.params.id;
    this.exibirPergunta(perguntaId);
  }

  exibirPergunta(id){
    let pResp;
    this.perguntaService
      .pegarPergunta(id)
      .subscribe(data => {
        pResp = data;
        this.pergunta = pResp;
      });
  }

  selecionarResposta(){
    let opcaoV;
    let correto;
    opcaoV = this.formResposta.get('opcao').value;
    correto = this.pegarValorOpcao(opcaoV);
    if (correto){
    }
    this.justi = true;
  }

  pegarValorOpcao(id){
    let correto;
    this.pergunta.alternativa.forEach(el => {
      if (el._id === id){
        correto =  el.correto;
      }
    });
    return correto;
  }

  ngOnInit() { }

}
