import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user';
import { ModalController } from '@ionic/angular';
import { PerguntaService } from '../core/pergunta/pergunta.service';
import { Pergunta } from '../core/pergunta/pergunta';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {

  user: User;

  pergunta: Pergunta;

  constructor(private userService: UserService, private perguntaService: PerguntaService) {
    this.userService.getUser()
      .subscribe(resp => {
        resp.then(user =>  this.user = user);
      });
  }

  pegarPerguntaNiveis(){
    let respP;
    this.perguntaService.pegarPerguntas()
      .subscribe(perguntas => {
        respP = perguntas;
        this.pergunta = respP.data;
      });
  }

  ngOnInit() {
    this.pegarPerguntaNiveis();
  }

}
