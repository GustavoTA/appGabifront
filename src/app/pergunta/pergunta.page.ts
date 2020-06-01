import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../core/pergunta/pergunta.service';
import { Pergunta, Alternativa } from '../core/pergunta/pergunta';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import { LoadPage } from '../core/load/load.page';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})

export class PerguntaPage implements OnInit {

  // @Input() pergunta = '';
  private pergunta: Pergunta;
  private justi = false;
  private modalCarregar;

  formResposta: FormGroup;

  constructor(
    private perguntaService: PerguntaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private userService: UserService
  ) {
    this.formResposta = this.formBuilder.group({
      opcao: ['', Validators.required],
    });
    this.modalCarregar = this.modalController.create({component: LoadPage});
    this.modalCarregar.then(modalLoad => {
      modalLoad.present();
    });
    const perguntaId = this.activatedRoute.snapshot.params.id;
    this.exibirPergunta(perguntaId);
  }

  exibirPergunta(id){
    let pResp;
    this.perguntaService.pegarPergunta(id)
      .subscribe(data => {
        pResp = data; this.pergunta = pResp;
        this.modalCarregar.then(modalLoad => {
          modalLoad.dismiss();
        });
      });
  }

  selecionarResposta(){
    let opcaoV;
    let alternativa;
    opcaoV = this.formResposta.get('opcao').value;
    alternativa = this.pegarValorOpcao(opcaoV);
    // console.log(alternativa);
    if (alternativa.correto){
      $("#"+alternativa._id).next().addClass('text-success');
      this.userService.getUser().subscribe(user =>{
        user.moeda += this.pergunta.moeda;
      });
    }else{
      $("#"+alternativa._id).next().addClass('text-danger');
      this.marcarAlternativaCorreta();
    }
    this.justi = true;
  }

  pegarValorOpcao(id){
    let op;
    this.pergunta.alternativa.forEach(el => {
      if (el._id === id){
        op = el;
      }
    });
    return op;
  }

  marcarAlternativaCorreta(){
    this.pergunta.alternativa.forEach(el =>{
      if(el.correto){
        $("#"+el._id).next().addClass('text-success');
      }
    })
  }

  ngOnInit() { }

}
