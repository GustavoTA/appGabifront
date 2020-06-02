import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user';
import { ModalController } from '@ionic/angular';
import { PerguntaService } from '../core/pergunta/pergunta.service';
import { Pergunta } from '../core/pergunta/pergunta';
import { LoadPage } from '../core/load/load.page';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

  user: User;
  moeda: number;
  meuModal;
  pergunta: Pergunta;

  constructor(
    private userService: UserService,
    private perguntaService: PerguntaService,
    private modal: ModalController) {
    this.meuModal = this.modal.create({component: LoadPage});
    this.userService.getMoeda().then(moedas => this.moeda = moedas);
  }

  pegarPerguntaNiveis(){
    let respP;

    this.meuModal.then((modalElement) => {
      modalElement.present();
    });
    this.perguntaService.pegarPerguntas()
      .subscribe(perguntas => {
        respP = perguntas;
        this.pergunta = respP.data;
        this.meuModal.then((modalElement) => {
          modalElement.dismiss();
        });
      });
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(resp => {
        resp.then(meuUser =>  { this.user = meuUser });
      });
    this.pegarPerguntaNiveis();
  }
  ionViewDidLeave(){
    this.userService.getMoeda().then(moedas => this.moeda = moedas);
  }

}
