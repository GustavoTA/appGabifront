import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private modal: ModalController) {}

  criarModal() {
    this.router.navigate(['../modal/']);
    // this.modal
    //   .create({component: ModalPage})
    //   .then((modalElement) => {
    //     modalElement.present();
    //   });
  }
}
