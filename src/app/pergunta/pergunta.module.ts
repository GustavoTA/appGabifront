import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntaPageRoutingModule } from './pergunta-routing.module';

import { PerguntaPage } from './pergunta.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntaPageRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [PerguntaPage]
})
export class PerguntaPageModule {}
