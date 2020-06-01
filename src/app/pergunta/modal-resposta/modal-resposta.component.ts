import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-resposta',
  templateUrl: './modal-resposta.component.html',
  styleUrls: ['./modal-resposta.component.scss'],
})
export class ModalRespostaComponent implements OnInit {
  descricao: string;
  constructor(private navParams: NavParams) {
    this.descricao = navParams.get('descricao');
    console.log(navParams.get('descricao'));
   }

  ngOnInit() {}

}
